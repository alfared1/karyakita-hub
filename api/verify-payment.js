const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_bQdFl06uxoGT@ep-weathered-wave-a1cvijle-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
const EXPECTED_CFO_PIN = process.env.ADMIN_CFO_SECRET_PIN || '192837';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://karyakita-ai.vercel.app';

// Helper WhatsApp notification sender via Meta Cloud API
async function sendWhatsAppNotification(toPhone, messageText) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN || process.env.WA_CLOUD_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID || process.env.WA_PHONE_NUMBER_ID;

  if (!token || !phoneId || !toPhone) {
    return false;
  }

  const cleanPhone = toPhone.replace(/\D/g, '');
  const recipient = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;

  try {
    const url = `https://graph.facebook.com/v22.0/${phoneId}/messages`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: recipient,
        type: 'text',
        text: { body: messageText }
      })
    });
    return res.ok;
  } catch (err) {
    console.warn('[WA Notification Warning]:', err.message);
    return false;
  }
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-cfo-pin');
  res.setHeader('Cache-Control', 'no-store, no-cache');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) {}
    }

    const {
      projectId,
      orderCode: inputOrderCode,
      action = 'APPROVE_DP_50',
      rejectionReason,
      proofUrl,
      verifiedDate,
      actorId = 'novita',
      actorName = 'Novita Rani (CFO)',
      pin
    } = body || {};

    if (!projectId && !inputOrderCode) {
      return res.status(400).json({ success: false, error: 'projectId atau orderCode wajib disertakan.' });
    }

    const sql = neon(DATABASE_URL);

    // 1. Ambil main_state dari studio_state
    const rows = await sql`SELECT state FROM studio_state WHERE key = 'main_state' LIMIT 1;`;
    if (!rows || rows.length === 0 || !rows[0].state) {
      return res.status(500).json({ success: false, error: 'main_state tidak ditemukan di database.' });
    }

    const state = rows[0].state;
    if (!Array.isArray(state.projects)) state.projects = [];
    if (!Array.isArray(state.cashflow)) state.cashflow = [];
    if (!Array.isArray(state.auditLogs)) state.auditLogs = [];

    // Cari project di state
    const projIndex = state.projects.findIndex(p => 
      (projectId && p.id === projectId) || 
      (inputOrderCode && (p.orderCode === inputOrderCode || p.id === `proj-${inputOrderCode}`))
    );

    const project = projIndex !== -1 ? state.projects[projIndex] : null;
    const orderCode = inputOrderCode || (project ? (project.orderCode || project.id.replace('proj-', '')) : null);

    // Maker-Checker Rule
    if (project && project.createdById === actorId && !['novita', 'hilwa'].includes(actorId) && pin !== EXPECTED_CFO_PIN) {
      return res.status(403).json({
        success: false,
        error: 'Prinsip Maker-Checker: Pembuat proyek dilarang mengesahkan pembayaran sendiri! Otorisasi harus dilakukan oleh CFO (Novita Rani), COO (Hilwa Mufida), atau masukkan PIN CFO.'
      });
    }

    // 2. Ambil data PublicOrder dari database Neon
    let existingOrder = null;
    if (orderCode) {
      const orderRows = await sql`
        SELECT * FROM "PublicOrder" WHERE "orderCode" = ${orderCode} LIMIT 1;
      `;
      if (orderRows && orderRows.length > 0) {
        existingOrder = orderRows[0];
      }
    }

    const todayStr = verifiedDate || new Date().toISOString().split('T')[0];
    const finalProofUrl = proofUrl || (project ? project.dpProofUrl : '') || (existingOrder ? existingOrder.proofUrl : '') || '';

    let afterStatus = 'DP_50_VERIFIED';
    let auditAction = 'APPROVE_PAYMENT';
    let auditNote = `Pembayaran DP 50% disahkan oleh ${actorName}.`;
    let isApproval = false;
    let paymentAmount = 0;

    if (action === 'APPROVE_FULL_100') {
      afterStatus = 'PAID_100_VERIFIED';
      auditAction = 'APPROVE_PAYMENT_FULL';
      isApproval = true;
      paymentAmount = existingOrder ? Number(existingOrder.contractValueIdr) / 2 : (project ? project.contractValueIdr / 2 : 0);
      auditNote = `Pelunasan 100% disahkan oleh ${actorName}. Seluruh kewajiban lunas.`;
    } else if (action === 'APPROVE_DP_50' || action === 'APPROVE') {
      afterStatus = existingOrder && existingOrder.scheme === 'PUBLIC_FULL_100' ? 'PAID_100_VERIFIED' : 'DP_50_VERIFIED';
      auditAction = 'APPROVE_PAYMENT_DP';
      isApproval = true;
      paymentAmount = existingOrder ? Number(existingOrder.requiredAmountIdr) : (project ? project.contractValueIdr / 2 : 0);
      auditNote = `Pembayaran (${afterStatus}) disahkan sebesar Rp${paymentAmount.toLocaleString('id-ID')} oleh ${actorName}.`;
    } else if (action === 'REJECT') {
      afterStatus = 'REJECTED_PROOF';
      auditAction = 'REJECT_PAYMENT';
      auditNote = `Bukti pembayaran ditolak oleh ${actorName}: ${rejectionReason || 'Bukti transfer tidak valid/mutasi belum masuk'}`;
    }

    // 3. Update tabel PublicOrder & OrderAuditLog di database Neon
    if (existingOrder) {
      let fulfillmentPayload = null;
      if (afterStatus === 'PAID_100_VERIFIED') {
        if (existingOrder.scheme === 'PUBLIC_FULL_100') {
          fulfillmentPayload = JSON.stringify({
            zoomLink: 'https://meet.google.com/karyakita-ai-academy-batch1',
            waGroupLink: 'https://chat.whatsapp.com/KaryaKitaAIAcademyB1',
            promptPackUrl: `${APP_URL}/resources/karyakita-prompt-pack-v1.pdf`,
            message: 'Selamat! Pembayaran Anda telah disahkan oleh CFO KaryaKita Hub. Silakan gabung ke grup koordinasi.'
          });
        } else {
          fulfillmentPayload = JSON.stringify({
            projectFilesUrl: 'https://drive.google.com/drive/folders/karyakita-master-handoff',
            message: 'Seluruh kewajiban lunas. Berkas master final dan hak cipta telah diserahkan.'
          });
        }
      }

      const orderLogId = 'log-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);

      await sql`
        UPDATE "PublicOrder"
        SET 
          "paymentGateStatus" = ${afterStatus}::"PaymentGateStatus",
          "rejectionReason" = ${action === 'REJECT' ? (rejectionReason || 'Bukti transfer tidak valid') : null},
          "verifiedById" = ${actorName},
          "verifiedAt" = NOW(),
          "fulfillmentJson" = ${fulfillmentPayload ? fulfillmentPayload : existingOrder.fulfillmentJson}::jsonb,
          "updatedAt" = NOW()
        WHERE "orderCode" = ${orderCode};
      `;

      await sql`
        INSERT INTO "OrderAuditLog" ("id", "orderId", "actorName", "action", "beforeStatus", "afterStatus", "note", "createdAt")
        VALUES (
          ${orderLogId},
          ${existingOrder.id},
          ${actorName},
          ${auditAction},
          ${existingOrder.paymentGateStatus},
          ${afterStatus},
          ${auditNote},
          NOW()
        );
      `;

      // Jika disetujui, update kas di GraduationCashCounter
      if (isApproval) {
        await sql`
          UPDATE "GraduationCashCounter"
          SET 
            "currentCashIdr" = "currentCashIdr" + ${paymentAmount},
            "updatedAt" = NOW()
          WHERE "id" = 'karyakita_cash';
        `;
      }
    }

    // 4. Update main_state (projects & cashflow & auditLogs) di studio_state
    const now = Date.now();
    if (project) {
      project.paymentGateStatus = afterStatus;
      project.dpVerifiedById = actorId;
      project.dpVerifiedAt = todayStr;
      project.dpProofUrl = finalProofUrl;
      project._updatedAt = now;
      state.projects[projIndex] = project;
    }

    let createdCashEntry = null;
    if (isApproval && project) {
      const isDp50 = afterStatus === 'DP_50_VERIFIED';
      const cashflowId = `cf-${orderCode || project.id}-${isDp50 ? 'dp50' : 'paid100'}`;
      const existingCashIndex = state.cashflow.findIndex(c => c.id === cashflowId);

      createdCashEntry = {
        id: cashflowId,
        date: todayStr,
        type: 'INCOME',
        unitId: project.unitId,
        projectId: project.id,
        category: (state.units && state.units[project.unitId]?.name) || 'Proyek B2B',
        amountIdr: paymentAmount || (project.contractValueIdr / 2),
        description: `${isDp50 ? 'DP 50%' : 'Pelunasan 100%'} Kontrak Proyek ${project.title} (${project.clientName})`,
        proofUrl: finalProofUrl,
        createdById: actorId,
        _updatedAt: now
      };

      if (existingCashIndex !== -1) {
        state.cashflow[existingCashIndex] = { ...state.cashflow[existingCashIndex], ...createdCashEntry };
      } else {
        state.cashflow.unshift(createdCashEntry);
      }
    }

    state.auditLogs.unshift({
      id: `aud-hub-${now}-${Math.random().toString(36).slice(2, 6)}`,
      actorName: actorName,
      action: auditAction,
      entity: `Project: ${project ? project.title : orderCode}`,
      details: auditNote,
      timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB'
    });

    if (state.auditLogs.length > 300) {
      state.auditLogs = state.auditLogs.slice(0, 300);
    }

    await sql`
      UPDATE studio_state
      SET state = ${JSON.stringify(state)}::jsonb, updated_at = NOW()
      WHERE key = 'main_state';
    `;

    // 5. Kirim Notifikasi Otomatis ke WhatsApp Klien
    const targetWhatsapp = (existingOrder && existingOrder.customerWhatsapp) || (project && project.customerWhatsapp);
    const targetCustomerName = (existingOrder && existingOrder.customerName) || (project && project.clientName) || 'Klien';

    if (targetWhatsapp) {
      const notifMsg = isApproval
        ? `*Halo ${targetCustomerName}!*\n\nPembayaran Anda untuk pesanan *${orderCode}* telah *DISETUJUI & DISAHKAN* oleh Novita (CFO KaryaKita) melalui Dashboard Studio KaryaKita Hub.\n\nCek status proyek & akses layanan Anda di:\n${APP_URL}/status/${orderCode}\n\nTerima kasih telah berkolaborasi bersama KaryaKita Studio!`
        : `*Halo ${targetCustomerName}*,\n\nMohon maaf, bukti transfer untuk pesanan *${orderCode}* belum dapat kami sahkan dengan alasan:\n"${rejectionReason || 'Bukti transfer tidak sesuai / mutasi belum tercatat'}"\n\nSilakan unggah ulang bukti yang benar di:\n${APP_URL}/status/${orderCode}`;

      await sendWhatsAppNotification(targetWhatsapp, notifMsg);
    }

    return res.status(200).json({
      success: true,
      message: `Transaksi pesanan ${orderCode} berhasil diproses dengan status ${afterStatus}.`,
      afterStatus,
      orderCode,
      projectId: project ? project.id : null,
      cashflowEntry: createdCashEntry
    });
  } catch (err) {
    console.error('[Verify Payment API Error]:', err);
    return res.status(500).json({ success: false, error: err.message || 'Gagal memproses verifikasi transaksi.' });
  }
};
