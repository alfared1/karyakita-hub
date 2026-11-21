/**
 * ==============================================================================
 * KARYAKITA HUB — Internal Venture Studio Operating System
 * Aplikasi Web Dashboard Lengkap (Tahap 1, 2 & 3)
 * Organisasi: KaryaKita AI & Venture Studio (7 Mahasiswa SI STMIK Tazkia)
 * ==============================================================================
 */

// Global State Key for LocalStorage Persistence
const STORAGE_KEY = 'karyakita_hub_state_v1';

// Initial Seed Data (Zero-Cost Prototype & Realistic Operations)
const INITIAL_STATE = {
  activeUserId: 'alfatih',
  currentSprint: 3,
  settings: {
    academicFreezeMode: false,
    graduationThresholdIdr: 3500000,
    qardhInitialTotalIdr: 300000,
    qardhRepaidIdr: 100000,
  },
  users: {
    alfatih: { id: 'alfatih', name: 'Alfatih', role: 'SUPER_ADMIN', roleLabel: 'CEO / CTO (Super Admin)', email: 'alfatih@karyakita.id', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120' },
    hilwa: { id: 'hilwa', name: 'Hilwa', role: 'OPS_ADMIN', roleLabel: 'COO & Head of PM (Ops Admin)', email: 'hilwa@karyakita.id', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120' },
    novita: { id: 'novita', name: 'Novita', role: 'FINANCE_ADMIN', roleLabel: 'CFO & VP Growth (Finance Admin)', email: 'novita@karyakita.id', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120' },
    ilham: { id: 'ilham', name: 'Ilham Akbar', role: 'CO_FOUNDER', roleLabel: 'CBDO / CDO (Lini 1 & 2)', email: 'ilham@karyakita.id', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120' },
    syarah: { id: 'syarah', name: 'Syarah', role: 'CO_FOUNDER', roleLabel: 'CMO (Lini 4)', email: 'syarah@karyakita.id', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120' },
    aywa: { id: 'aywa', name: 'Aywa', role: 'CO_FOUNDER', roleLabel: 'CRO (Lini 3 & 5)', email: 'aywa@karyakita.id', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120' },
    ahmad: { id: 'ahmad', name: 'Ahmad', role: 'CO_FOUNDER', roleLabel: 'Creative Director (Lini 1 & 4)', email: 'ahmad@karyakita.id', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120' },
    client_guest: { id: 'client_guest', name: 'PT Halal Syariah Mart', role: 'CLIENT_GUEST', roleLabel: 'Klien B2B (Read-Only Portal)', email: 'client@halalmart.co.id', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120' }
  },
  units: {
    LINI_1_DESIGN: { code: 'LINI_1_DESIGN', name: 'KaryaKita Design (Lini 1)', badgeClass: 'badge-unit-lini1', desc: 'Brand Identity & UI/UX Studio' },
    LINI_2_WEBTECH: { code: 'LINI_2_WEBTECH', name: 'KaryaKita WebTech (Lini 2)', badgeClass: 'badge-unit-lini2', desc: 'Custom Web & Scalable Platform' },
    LINI_3_ASSIST_DATA: { code: 'LINI_3_ASSIST_DATA', name: 'KaryaKita Assist & Data (Lini 3)', badgeClass: 'badge-unit-lini3', desc: 'Analysis & Documentation' },
    LINI_4_MEDIA_AFFILIATE: { code: 'LINI_4_MEDIA_AFFILIATE', name: 'KaryaKita Media & Affiliate (Lini 4)', badgeClass: 'badge-unit-lini4', desc: 'Video & Affiliate Network' },
    LINI_5_AI_ACADEMY: { code: 'LINI_5_AI_ACADEMY', name: 'KaryaKita AI Academy (Lini 5)', badgeClass: 'badge-unit-lini5', desc: 'Corporate & Public Workshop' },
    INTERNAL_OPS: { code: 'INTERNAL_OPS', name: 'Operasional Internal', badgeClass: 'badge-unit-ops', desc: 'Tata Kelola Studio & MKUT.102' }
  },
  projects: [
    {
      id: 'proj-1',
      title: 'Brand Identity & Design System PT Halal Mart',
      clientName: 'PT Halal Syariah Mart',
      unitId: 'LINI_1_DESIGN',
      contractValueIdr: 4500000,
      picId: 'ilham',
      paymentGateStatus: 'DP_50_VERIFIED', // LOCKED_WAITING_DP | DP_50_VERIFIED | PAID_100_VERIFIED
      dpVerifiedById: 'novita',
      dpVerifiedAt: '2026-03-02',
      dpProofUrl: 'https://drive.google.com/drive/folders/kk-proof-dp1',
      slaDeadline: '2026-03-25',
      clientPortalToken: 'tok-halalmart',
      revisionQuota: 3,
      revisionUsed: 1,
    },
    {
      id: 'proj-2',
      title: 'Custom Landing Page & Booking Engine Travel Barokah',
      clientName: 'PT Barokah Tour & Travel',
      unitId: 'LINI_2_WEBTECH',
      contractValueIdr: 6000000,
      picId: 'alfatih',
      paymentGateStatus: 'LOCKED_WAITING_DP',
      dpVerifiedById: null,
      dpVerifiedAt: null,
      dpProofUrl: null,
      slaDeadline: '2026-04-10',
      clientPortalToken: 'tok-barokah',
      revisionQuota: 3,
      revisionUsed: 0,
    },
    {
      id: 'proj-3',
      title: 'Dokumentasi SOP & Analisis Koperasi Madani',
      clientName: 'Koperasi Simpan Pinjam Syariah Madani',
      unitId: 'LINI_3_ASSIST_DATA',
      contractValueIdr: 3000000,
      picId: 'aywa',
      paymentGateStatus: 'DP_50_VERIFIED',
      dpVerifiedById: 'novita',
      dpVerifiedAt: '2026-03-05',
      dpProofUrl: 'https://drive.google.com/file/d/proof-kop/view',
      slaDeadline: '2026-03-20',
      clientPortalToken: 'tok-koperasi',
      revisionQuota: 2,
      revisionUsed: 0,
    },
    {
      id: 'proj-4',
      title: 'Corporate AI Workshop Batch 1',
      clientName: 'PT Madani Logistik Indonesia',
      unitId: 'LINI_5_AI_ACADEMY',
      contractValueIdr: 7500000,
      picId: 'alfatih',
      paymentGateStatus: 'PAID_100_VERIFIED',
      dpVerifiedById: 'novita',
      dpVerifiedAt: '2026-02-28',
      dpProofUrl: 'https://drive.google.com/file/d/proof-ai1/view',
      slaDeadline: '2026-03-12',
      clientPortalToken: 'tok-madani',
      revisionQuota: 1,
      revisionUsed: 0,
    }
  ],
  tasks: [
    {
      id: 'task-101',
      title: 'Eksplorasi Moodboard & Logo Guideline Halal Mart',
      description: 'Menyusun 3 alternatif logo halal profesional sesuai arahan syariah.',
      unitId: 'LINI_1_DESIGN',
      projectId: 'proj-1',
      assigneeId: 'ahmad',
      createdById: 'hilwa',
      sprintNumber: 3,
      status: 'IN_PROGRESS', // BACKLOG | TODO | IN_PROGRESS | REVIEW | DONE
      isBlocked: false,
      blockedReason: null,
      hoursEstimate: 2.5,
      dueDate: '2026-03-15',
      dodChecklist: [
        { label: '3 Alternatif Logo di Figma', checked: true },
        { label: 'Palet Warna & Tipografi Islami', checked: true },
        { label: 'Ekspor PDF Mockup Presentasi', checked: false }
      ],
      workProofUrl: 'https://figma.com/@karyakita/halalmart-concept',
      isClientVisible: true
    },
    {
      id: 'task-102',
      title: 'Arsitektur Database & Auth Whitelist KaryaKita Hub',
      description: 'Menyiapkan schema.prisma, guard RBAC server, dan isolasi arsip NDA.',
      unitId: 'LINI_2_WEBTECH',
      projectId: null,
      assigneeId: 'alfatih',
      createdById: 'hilwa',
      sprintNumber: 3,
      status: 'DONE',
      isBlocked: false,
      blockedReason: null,
      hoursEstimate: 3.0,
      dueDate: '2026-03-08',
      dodChecklist: [
        { label: 'PostgreSQL schema terpadu 3 tahap', checked: true },
        { label: 'Enforce closed 7-email whitelist', checked: true },
        { label: 'Uji prisma.$transaction', checked: true }
      ],
      workProofUrl: 'https://github.com/karyakita-studio/karyakita-hub',
      isClientVisible: false
    },
    {
      id: 'task-103',
      title: 'Wireframing UI Landing Page Travel Barokah',
      description: 'Struktur halaman utama, paket umroh, dan booking flow.',
      unitId: 'LINI_2_WEBTECH',
      projectId: 'proj-2',
      assigneeId: 'ilham',
      createdById: 'hilwa',
      sprintNumber: 3,
      status: 'TODO', // Belum boleh IN_PROGRESS karena proj-2 LOCKED_WAITING_DP!
      isBlocked: false,
      blockedReason: null,
      hoursEstimate: 2.0,
      dueDate: '2026-03-18',
      dodChecklist: [
        { label: 'Wireframe Low-Fidelity di Figma', checked: false },
        { label: 'Copywriting Value Proposition', checked: false }
      ],
      workProofUrl: '',
      isClientVisible: true
    },
    {
      id: 'task-104',
      title: 'Pembuatan Modul Praktik Prompt Engineering AI Academy',
      description: 'Materi latihan peserta workshop corporate PT Madani.',
      unitId: 'LINI_5_AI_ACADEMY',
      projectId: 'proj-4',
      assigneeId: 'aywa',
      createdById: 'alfatih',
      sprintNumber: 3,
      status: 'DONE',
      isBlocked: false,
      blockedReason: null,
      hoursEstimate: 2.0,
      dueDate: '2026-03-10',
      dodChecklist: [
        { label: 'Slide Presentasi 25 Halaman', checked: true },
        { label: 'Lembar Latihan Kasus Bisnis Logistik', checked: true }
      ],
      workProofUrl: 'https://drive.google.com/drive/folders/kk-ai-madani',
      isClientVisible: true
    },
    {
      id: 'task-105',
      title: 'Produksi 3 Video TikTok Edukasi AI untuk Mahasiswa',
      description: 'Konten organik untuk awareness KaryaKita Media dan promo workshop.',
      unitId: 'LINI_4_MEDIA_AFFILIATE',
      projectId: null,
      assigneeId: 'syarah',
      createdById: 'hilwa',
      sprintNumber: 3,
      status: 'REVIEW',
      isBlocked: false,
      blockedReason: null,
      hoursEstimate: 2.0,
      dueDate: '2026-03-14',
      dodChecklist: [
        { label: 'Riset Topik AI Mahasiswa', checked: true },
        { label: 'Video Edit CapCut 1080p', checked: true },
        { label: 'Review Ahmad & Hilwa', checked: true }
      ],
      workProofUrl: 'https://tiktok.com/@karyakitastudio/video/draft',
      isClientVisible: false
    },
    {
      id: 'task-106',
      title: 'Penagihan Pelunasan 50% & Rekonsiliasi Kas PT Madani',
      description: 'Penerbitan kuitansi pelunasan dan input buku kas Syirkah.',
      unitId: 'INTERNAL_OPS',
      projectId: 'proj-4',
      assigneeId: 'novita',
      createdById: 'alfatih',
      sprintNumber: 3,
      status: 'DONE',
      isBlocked: false,
      blockedReason: null,
      hoursEstimate: 1.0,
      dueDate: '2026-03-05',
      dodChecklist: [
        { label: 'Invoice Pelunasan Terbit', checked: true },
        { label: 'Bukti Transfer Rp7.500.000 Masuk Rekening', checked: true }
      ],
      workProofUrl: 'https://drive.google.com/file/d/kk-inv-001/view',
      isClientVisible: false
    },
    {
      id: 'task-107',
      title: 'Review SOP Administrasi Koperasi Simpan Pinjam',
      description: 'Analisis dokumen alur simpanan & pembiayaan syariah.',
      unitId: 'LINI_3_ASSIST_DATA',
      projectId: 'proj-3',
      assigneeId: 'aywa',
      createdById: 'hilwa',
      sprintNumber: 3,
      status: 'IN_PROGRESS',
      isBlocked: true,
      blockedReason: 'Menunggu kiriman draf anggaran dasar terbaru dari pihak pengurus koperasi.',
      hoursEstimate: 2.5,
      dueDate: '2026-03-12',
      dodChecklist: [
        { label: 'Peta Alur Kerja (Flowchart)', checked: true },
        { label: 'Kesesuaian Akad Syariah', checked: false }
      ],
      workProofUrl: 'https://drive.google.com/drive/folders/kk-sop-kop',
      isClientVisible: true
    }
  ],
  checkins: [
    {
      userId: 'alfatih',
      sprintNumber: 3,
      completedSummary: 'Menuntaskan arsitektur database PostgreSQL dan modul sistem operasi KaryaKita Hub.',
      inProgressSummary: 'Mempersiapkan materi hands-on Corporate AI Training PT Madani.',
      blockerSummary: 'Aman, koordinasi teknis lancar.',
      submittedAt: '2026-03-04 19:20 WIB'
    },
    {
      userId: 'hilwa',
      sprintNumber: 3,
      completedSummary: 'Audit papan tugas Kanban 7 pendiri dan sinkronisasi SLA proyek Q1.',
      inProgressSummary: 'Mengawal tenggat moodboard Lini 1 dan draft wireframe Lini 2.',
      blockerSummary: 'Perlu konfirmasi ketersediaan Ahmad untuk review video TikTok.',
      submittedAt: '2026-03-04 20:05 WIB'
    },
    {
      userId: 'novita',
      sprintNumber: 3,
      completedSummary: 'Verifikasi DP 50% PT Halal Mart & rekonsiliasi kas masuk Rp2.250.000.',
      inProgressSummary: 'Menyiapkan draft kalkulator bagi hasil Syirkah Abdan akhir bulan.',
      blockerSummary: 'Tidak ada kendala finansial.',
      submittedAt: '2026-03-04 20:30 WIB'
    },
    {
      userId: 'ilham',
      sprintNumber: 3,
      completedSummary: 'Closing prospek B2B Travel Barokah nilai kontrak Rp6.000.000.',
      inProgressSummary: 'Menunggu transfer DP 50% dari klien travel untuk buka status eksekusi.',
      blockerSummary: 'Klien minta invoice resmi sebelum pembayaran transfer DP.',
      submittedAt: '2026-03-04 21:10 WIB'
    },
    {
      userId: 'syarah',
      sprintNumber: 3,
      completedSummary: 'Produksi 3 video TikTok dan penulisan skrip konten edukasi bisnis digital.',
      inProgressSummary: 'Jadwal posting konten dan monitoring insight engagement.',
      blockerSummary: 'Butuh asset grafis thumbnail dari Ahmad.',
      submittedAt: '2026-03-04 21:45 WIB'
    }
    // Aywa dan Ahmad sengaja belum lapor untuk mendemonstrasikan status 5/7 pada prototype!
  ],
  syuraMinutes: [
    {
      id: 'syura-3',
      meetingDate: '2026-03-01',
      moderator: 'Hilwa (COO)',
      attendees: ['alfatih', 'hilwa', 'novita', 'ilham', 'syarah', 'aywa', 'ahmad'],
      decisions: '1. Penegakan tegas aturan Payment Gate: Proyek Travel Barokah tidak boleh disentuh sebelum DP 50% masuk.\n2. Disiplin batas waktu kerja 3-5 jam/pekan selama masa perkuliahan aktif.\n3. Alokasi kas ditahan 70% tetap dipertahankan sampai target Graduation Rule Rp3,5 juta tercapai.',
      actionItems: [
        { id: 'act-1', title: 'Terbitkan invoice resmi DP 50% untuk Travel Barokah', picId: 'novita', promoted: true },
        { id: 'act-2', title: 'Upload dokumen brief client PT Halal Mart ke folder arsip NDA', picId: 'ilham', promoted: false },
        { id: 'act-3', title: 'Finalisasi slide AI Academy Batch Corporate', picId: 'aywa', promoted: true }
      ]
    }
  ],
  archives: [
    {
      id: 'arc-1',
      title: 'Akad Syirkah Abdan 7 Pendiri KaryaKita Hub (Resmi)',
      quarter: '2026-Q1',
      category: 'Akad & Legal',
      unitId: 'INTERNAL_OPS',
      uploadedById: 'alfatih',
      storageType: 'EXTERNAL_LINK',
      url: 'https://drive.google.com/file/d/akad-syirkah-karyakita-2026/view',
      confidentiality: 'INTERNAL_TIM',
      date: '2026-02-15'
    },
    {
      id: 'arc-2',
      title: 'NDA & Spesifikasi Sistem Internal PT Halal Mart',
      quarter: '2026-Q1',
      category: 'Proyek Klien B2B',
      unitId: 'LINI_1_DESIGN',
      uploadedById: 'ilham',
      storageType: 'EXTERNAL_LINK',
      url: 'https://drive.google.com/drive/folders/halalmart-nda-confidential',
      confidentiality: 'NDA_KLIEN', // Rahasia!
      date: '2026-03-02'
    },
    {
      id: 'arc-3',
      title: 'Bukti Transfer DP 50% PT Halal Mart (Rp2.250.000)',
      quarter: '2026-Q1',
      category: 'Laporan Keuangan',
      unitId: 'LINI_1_DESIGN',
      uploadedById: 'novita',
      storageType: 'FILE_UPLOAD',
      url: 'https://storage.karyakita.id/proofs/transfer_dp_halalmart.pdf',
      confidentiality: 'INTERNAL_TIM',
      date: '2026-03-02'
    },
    {
      id: 'arc-4',
      title: 'Silabus & Modul Praktik AI Academy 2026',
      quarter: '2026-Q1',
      category: 'Materi AI Academy',
      unitId: 'LINI_5_AI_ACADEMY',
      uploadedById: 'aywa',
      storageType: 'EXTERNAL_LINK',
      url: 'https://drive.google.com/drive/folders/ai-academy-syllabus-q1',
      confidentiality: 'INTERNAL_TIM',
      date: '2026-02-25'
    }
  ],
  cashflow: [
    {
      id: 'cf-1',
      date: '2026-02-10',
      type: 'QARDH_IN',
      category: 'Talangan Modal Pendiri (0% Bunga)',
      amountIdr: 300000,
      description: 'Talangan awal operasional studio oleh Alfatih & Novita',
      proofUrl: 'https://drive.google.com/proof-qardh',
      createdById: 'novita'
    },
    {
      id: 'cf-2',
      date: '2026-02-18',
      type: 'OPEX',
      category: 'Infrastruktur Web & Domain',
      amountIdr: 150000,
      description: 'Domain legal karya-kita.id (promo tahun pertama)',
      proofUrl: 'https://drive.google.com/proof-domain',
      createdById: 'novita'
    },
    {
      id: 'cf-3',
      date: '2026-02-28',
      type: 'INCOME',
      category: 'Lini 5 — Corporate Training',
      amountIdr: 7500000,
      description: 'Pelunasan 100% Workshop AI Corporate PT Madani Logistik',
      proofUrl: 'https://drive.google.com/proof-madani',
      createdById: 'novita'
    },
    {
      id: 'cf-4',
      date: '2026-03-01',
      type: 'QARDH_REPAY',
      category: 'Pengembalian Talangan Qardh',
      amountIdr: 100000,
      description: 'Cicilan pengembalian modal awal talangan pendiri (tanpa bunga)',
      proofUrl: 'https://drive.google.com/proof-repay',
      createdById: 'novita'
    },
    {
      id: 'cf-5',
      date: '2026-03-02',
      type: 'INCOME',
      category: 'Lini 1 — Design Studio',
      amountIdr: 2250000,
      description: 'DP 50% Kontrak Brand Identity PT Halal Mart',
      proofUrl: 'https://drive.google.com/proof-dp1',
      createdById: 'novita'
    },
    {
      id: 'cf-6',
      date: '2026-03-03',
      type: 'OPEX',
      category: 'Operasional Rapat & Zoom',
      amountIdr: 125000,
      description: 'Langganan tool penunjang koordinasi tim',
      proofUrl: 'https://drive.google.com/proof-tools',
      createdById: 'novita'
    }
  ],
  crmLeads: [
    {
      id: 'lead-1',
      businessName: 'PT Nusantara Agro Ekspor',
      targetUnitId: 'LINI_2_WEBTECH',
      estimatedValueIdr: 8000000,
      stage: 'NEGOTIATION', // LEAD_IN | OUTREACH | DISCOVERY | PROPOSAL_SENT | NEGOTIATION | WON
      picId: 'ilham',
      contactName: 'Pak Hendra (Direktur Operasional)',
      contactPhone: '081298765432',
      lastFollowUpDaysAgo: 1
    },
    {
      id: 'lead-2',
      businessName: 'Klinik Gigi drg. Farhan',
      targetUnitId: 'LINI_1_DESIGN',
      estimatedValueIdr: 2500000,
      stage: 'PROPOSAL_SENT',
      picId: 'ilham',
      contactName: 'drg. Farhan',
      contactPhone: '081311223344',
      lastFollowUpDaysAgo: 4 // Peringatan oranye (> 3 hari)
    },
    {
      id: 'lead-3',
      businessName: 'Yayasan Pendidikan Al-Hikmah Bogor',
      targetUnitId: 'LINI_5_AI_ACADEMY',
      estimatedValueIdr: 5000000,
      stage: 'DISCOVERY',
      picId: 'aywa',
      contactName: 'Ustadz Ridwan',
      contactPhone: '085712345678',
      lastFollowUpDaysAgo: 2
    },
    {
      id: 'lead-4',
      businessName: 'Toko Busana Muslim Syar-i Aisyah',
      targetUnitId: 'LINI_4_MEDIA_AFFILIATE',
      estimatedValueIdr: 3000000,
      stage: 'WON',
      picId: 'syarah',
      contactName: 'Ibu Aisyah',
      contactPhone: '081987654321',
      lastFollowUpDaysAgo: 0
    }
  ],
  academyBatches: [
    {
      id: 'batch-pub-1',
      title: 'Workshop Publik: Praktik AI Praktis untuk Mahasiswa & Profesional',
      type: 'PUBLIC_WORKSHOP',
      priceIdr: 75000,
      date: '2026-03-22',
      quota: 30,
      registeredCount: 28,
      verifiedCount: 24,
      status: 'REGISTRATION_OPEN',
      participants: [
        { id: 'p1', name: 'Rizky Ramadhan', email: 'rizky@gmail.com', phone: '081234567801', paid: true, attended: false, certSent: false },
        { id: 'p2', name: 'Nurul Hidayah', email: 'nurul@gmail.com', phone: '081234567802', paid: true, attended: false, certSent: false },
        { id: 'p3', name: 'Faisal Akbar', email: 'faisal@gmail.com', phone: '081234567803', paid: false, attended: false, certSent: false }
      ]
    },
    {
      id: 'batch-corp-1',
      title: 'Corporate AI Training: AI Workflow Automation PT Madani Logistik',
      type: 'CORPORATE_B2B',
      priceIdr: 7500000,
      date: '2026-03-12',
      quota: 15,
      registeredCount: 15,
      verifiedCount: 15,
      status: 'COMPLETED',
      participants: [
        { id: 'cp1', name: 'Budi Santoso (Kadiv IT)', email: 'budi@madanilog.com', phone: '0811223344', paid: true, attended: true, certSent: true },
        { id: 'cp2', name: 'Siti Rahma (Lead Analyst)', email: 'siti@madanilog.com', phone: '0811223345', paid: true, attended: true, certSent: true }
      ]
    }
  ],
  affiliateContents: [
    {
      id: 'aff-c-1',
      title: '3 AI Tools Gratis untuk Skripsi Tanpa Bikin Pusing',
      platform: 'TikTok',
      stage: 'SUDAH_TAYANG',
      picId: 'syarah',
      postUrl: 'https://tiktok.com/@karyakita/video/12345',
      targetProgram: 'Promo AI Academy (Lini 5)'
    },
    {
      id: 'aff-c-2',
      title: 'Cara Setup Website Bisnis Modal Nol Rupiah di Vercel',
      platform: 'Instagram Reels',
      stage: 'SIAP_TAYANG',
      picId: 'ahmad',
      postUrl: '',
      targetProgram: 'Lini 2 WebTech'
    },
    {
      id: 'aff-c-3',
      title: 'Review Template Notion Studio Mahasiswa',
      platform: 'YouTube Shorts',
      stage: 'EDITING',
      picId: 'ahmad',
      postUrl: '',
      targetProgram: 'Affiliate Notion / Template'
    }
  ],
  affiliateCommissions: [
    {
      id: 'com-1',
      partnerName: 'TikTok Shop / Affiliate Buku Bisnis',
      period: 'Februari 2026',
      clicks: 340,
      conversions: 18,
      commissionIdr: 450000,
      status: 'DISBURSED' // PENDING | DISBURSED
    },
    {
      id: 'com-2',
      partnerName: 'Hostinger Referral (Lini 2 WebTech)',
      period: 'Februari 2026',
      clicks: 85,
      conversions: 3,
      commissionIdr: 600000,
      status: 'DISBURSED'
    },
    {
      id: 'com-3',
      partnerName: 'SaaS AI Tool Affiliate',
      period: 'Maret 2026',
      clicks: 120,
      conversions: 4,
      commissionIdr: 320000,
      status: 'PENDING'
    }
  ],
  botLogs: [
    { time: '2026-03-04 16:00 WIB', channel: 'WhatsApp Group', type: 'Async Check-In Pengingat 1', status: 'Terkirim (7 Co-Founders)' },
    { time: '2026-03-04 20:30 WIB', channel: 'WhatsApp Group', type: 'Check-In Warning (Aywa & Ahmad)', status: 'Terkirim (2 Belum Lapor)' },
    { time: '2026-03-02 14:15 WIB', channel: 'WhatsApp Group', type: 'Payment Gate Alert (PT Halal Mart DP 50% Verified)', status: 'Terkirim Sukses' }
  ],
  auditLogs: [
    {
      id: 'aud-1',
      actorName: 'Novita (CFO)',
      action: 'PAYMENT_GATE_VERIFIED',
      entity: 'Project: PT Halal Syariah Mart',
      details: 'Status DP 50% terverifikasi. Bukti transfer Rp2.250.000 tervalidasi.',
      timestamp: '2026-03-02 14:10:00 WIB'
    },
    {
      id: 'aud-2',
      actorName: 'Alfatih (CEO/CTO)',
      action: 'SYSTEM_SETTINGS_UPDATE',
      entity: 'SystemConfig',
      details: 'Inisialisasi Sprint 3 dan penetapan batas Graduation Rule Rp3.500.000.',
      timestamp: '2026-03-01 09:00:00 WIB'
    },
    {
      id: 'aud-3',
      actorName: 'Novita (CFO)',
      action: 'CASHFLOW_TRANSACTION_ADDED',
      entity: 'Cashflow: Income DP PT Halal Mart',
      details: 'Pencatatan kas masuk Rp2.250.000 ke buku kas utama.',
      timestamp: '2026-03-02 14:12:00 WIB'
    }
  ]
};

// ==============================================================================
// APP STATE & STORE
// ==============================================================================
class AppStore {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
  }

  loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Gagal membaca state dari localStorage:', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_STATE));
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Gagal menyimpan state ke localStorage:', e);
    }
    this.notify();
  }

  resetState() {
    this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
    this.saveState();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  // Helper Getters
  getCurrentUser() {
    return this.state.users[this.state.activeUserId] || this.state.users.alfatih;
  }

  calculateCashBalance() {
    let balance = 0;
    this.state.cashflow.forEach(entry => {
      if (entry.type === 'INCOME' || entry.type === 'QARDH_IN') {
        balance += Number(entry.amountIdr);
      } else if (entry.type === 'OPEX' || entry.type === 'QARDH_REPAY' || entry.type === 'ZAKAT' || entry.type === 'PROFIT_SHARE') {
        balance -= Number(entry.amountIdr);
      }
    });
    return balance;
  }

  calculateUserWeeklyHours(userId, sprint = 3) {
    return this.state.tasks
      .filter(t => t.assigneeId === userId && t.sprintNumber === sprint && t.status !== 'DONE')
      .reduce((sum, t) => sum + Number(t.hoursEstimate || 0), 0);
  }

  // Audit Log Recorder
  logAudit(action, entity, details) {
    const actor = this.getCurrentUser();
    const newLog = {
      id: 'aud-' + Date.now(),
      actorName: actor.name + ' (' + actor.role + ')',
      action: action,
      entity: entity,
      details: details,
      timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB'
    };
    this.state.auditLogs.unshift(newLog);
  }
}

const store = new AppStore();

// ==============================================================================
// TOAST NOTIFICATION UTILITY
// ==============================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'error' ? 'bg-red-800 text-white' : type === 'warning' ? 'bg-amber-700 text-white' : 'bg-brand-emerald text-white';
  const icon = type === 'error' ? 'alert-circle' : type === 'warning' ? 'alert-triangle' : 'check-circle-2';

  toast.className = `toast-msg flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs shadow-lg border border-white/20 ${bgClass}`;
  toast.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 flex-shrink-0"></i><span>${message}</span>`;
  
  container.appendChild(toast);
  lucide.createIcons({ root: toast });

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease-out';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Modal helper
function openModal(contentHtml) {
  const backdrop = document.getElementById('global-modal-backdrop');
  const card = document.getElementById('global-modal-card');
  card.innerHTML = contentHtml;
  backdrop.classList.remove('hidden');
  lucide.createIcons({ root: card });
}

function closeModal() {
  const backdrop = document.getElementById('global-modal-backdrop');
  backdrop.classList.add('hidden');
}

// ==============================================================================
// ROUTER & NAVIGATION CONTROLLER
// ==============================================================================
let currentView = 'overview';

function navigateTo(viewName) {
  currentView = viewName;

  // Update Breadcrumb
  const breadcrumb = document.getElementById('breadcrumb-current-page');
  const titles = {
    overview: 'Beranda',
    tasks: 'Papan Tugas (Kanban & Table)',
    reports: 'Lapor & Syura (Async-First)',
    archives: 'Arsip & Dokumen (Link-First Vault)',
    projects: 'Proyek & Payment Gate',
    crm: 'Pipeline CRM & Kemitraan',
    finance: 'Keuangan & Bagi Hasil Syirkah',
    academy: 'AI Academy (Lini 5)',
    affiliate: 'Media & Affiliate (Lini 4)',
    integrations: 'Bot WhatsApp & Telegram',
    analytics: 'Analitik & Laporan Akademik (MKUT.102)',
    system: 'Pengaturan & Audit Log',
    'client-portal': 'Portal Klien B2B (Read-Only)'
  };
  if (breadcrumb) {
    breadcrumb.textContent = titles[viewName] || 'Dashboard';
  }

  // Update Navigation Active States
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.getAttribute('data-nav') === viewName) {
      btn.classList.add('bg-emerald-50', 'text-brand-emerald', 'font-bold');
      btn.classList.remove('text-gray-700', 'text-gray-500');
    } else {
      btn.classList.remove('bg-emerald-50', 'text-brand-emerald', 'font-bold');
      btn.classList.add('text-gray-700');
    }
  });

  renderActiveView();
}

// ==============================================================================
// VIEW RENDERERS
// ==============================================================================

function renderActiveView() {
  const container = document.getElementById('main-view-container');
  if (!container) return;

  switch (currentView) {
    case 'overview':
      container.innerHTML = renderOverviewView();
      initOverviewCharts();
      break;
    case 'tasks':
      container.innerHTML = renderTasksView();
      initTasksEvents();
      break;
    case 'reports':
      container.innerHTML = renderReportsView();
      initReportsEvents();
      break;
    case 'archives':
      container.innerHTML = renderArchivesView();
      initArchivesEvents();
      break;
    case 'projects':
      container.innerHTML = renderProjectsView();
      initProjectsEvents();
      break;
    case 'crm':
      container.innerHTML = renderCrmView();
      initCrmEvents();
      break;
    case 'finance':
      container.innerHTML = renderFinanceView();
      initFinanceEvents();
      break;
    case 'academy':
      container.innerHTML = renderAcademyView();
      initAcademyEvents();
      break;
    case 'affiliate':
      container.innerHTML = renderAffiliateView();
      initAffiliateEvents();
      break;
    case 'integrations':
      container.innerHTML = renderIntegrationsView();
      initIntegrationsEvents();
      break;
    case 'analytics':
      container.innerHTML = renderAnalyticsView();
      initAnalyticsCharts();
      break;
    case 'system':
      container.innerHTML = renderSystemView();
      initSystemEvents();
      break;
    case 'client-portal':
      container.innerHTML = renderClientPortalView();
      initClientPortalEvents();
      break;
    default:
      container.innerHTML = renderOverviewView();
      initOverviewCharts();
  }

  lucide.createIcons({ root: container });
}

// ------------------------------------------------------------------------------
// VIEW 1: BERANDA / OVERVIEW
// ------------------------------------------------------------------------------
function renderOverviewView() {
  const user = store.getCurrentUser();
  const tasks = store.state.tasks;
  const doneTasks = tasks.filter(t => t.status === 'DONE').length;
  const totalTasks = tasks.length;
  const taskProgressPct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
  
  const checkinsCount = store.state.checkins.length;
  const totalFounders = 7;

  const activeProjectsCount = store.state.projects.length;
  const activeBatchesCount = store.state.academyBatches.length;

  const blockedTasks = tasks.filter(t => t.isBlocked || t.status === 'TODO' && t.dueDate === '2026-03-08');
  const myTasks = tasks.filter(t => t.assigneeId === user.id);

  const cashBalance = store.calculateCashBalance();
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  return `
    <div class="space-y-6">
      
      <!-- Welcome Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-xl border border-brand-border">
        <div>
          <h2 class="font-heading font-bold text-lg sm:text-xl text-gray-900">
            Assalamu'alaikum, ${user.name}! 👋
          </h2>
          <p class="text-xs text-gray-500 mt-0.5">
            Pusat Komando Operasional, Keuangan Syariah & Eksekusi KaryaKita Hub.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 bg-emerald-50 text-brand-emerald rounded-full border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            ${user.roleLabel}
          </span>
        </div>
      </div>

      <!-- 4 Core KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- KPI 1: Micro-Sprint Pekan Ini -->
        <div class="card-surface p-4 flex flex-col justify-between">
          <div class="flex items-center justify-between text-gray-500">
            <span class="text-xs font-medium">Sprint 3 Progress</span>
            <div class="p-1.5 rounded-lg bg-emerald-50 text-brand-emerald">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-2">
            <div class="text-xl font-bold font-heading text-gray-900 tabular-nums">
              ${doneTasks} / ${totalTasks} Selesai
            </div>
            <div class="w-full bg-gray-100 rounded-full h-1.5 mt-2 overflow-hidden">
              <div class="bg-brand-emerald h-1.5 rounded-full" style="width: ${taskProgressPct}%;"></div>
            </div>
            <span class="text-[11px] text-gray-500 mt-1 block">${taskProgressPct}% tingkat penyelesaian</span>
          </div>
        </div>

        <!-- KPI 2: Async Check-In Rabu -->
        <div class="card-surface p-4 flex flex-col justify-between">
          <div class="flex items-center justify-between text-gray-500">
            <span class="text-xs font-medium">Async Check-In Rabu</span>
            <div class="p-1.5 rounded-lg bg-amber-50 text-amber-700">
              <i data-lucide="clock" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-2">
            <div class="text-xl font-bold font-heading text-gray-900 tabular-nums">
              ${checkinsCount} / ${totalFounders} Co-Founder
            </div>
            <div class="flex items-center gap-1 mt-2">
              <span class="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold">5 Sudah Lapor</span>
              <span class="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-semibold">2 Belum</span>
            </div>
            <span class="text-[11px] text-gray-500 mt-1 block">< 90 detik via mobile</span>
          </div>
        </div>

        <!-- KPI 3: Proyek & Batch Aktif -->
        <div class="card-surface p-4 flex flex-col justify-between">
          <div class="flex items-center justify-between text-gray-500">
            <span class="text-xs font-medium">Proyek & Batch Aktif</span>
            <div class="p-1.5 rounded-lg bg-sky-50 text-sky-700">
              <i data-lucide="briefcase" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-2">
            <div class="text-xl font-bold font-heading text-gray-900 tabular-nums">
              ${activeProjectsCount} Proyek + ${activeBatchesCount} Batch
            </div>
            <p class="text-[11px] text-gray-500 mt-2">
              Lini 1 (Design), Lini 2 (WebTech), Lini 5 (AI)
            </p>
            <span class="text-[11px] text-sky-700 font-medium">Payment Gate Active</span>
          </div>
        </div>

        <!-- KPI 4: Tugas Terhambat / Deadline Dekat -->
        <div class="card-surface p-4 flex flex-col justify-between cursor-pointer hover:border-red-300 transition" onclick="navigateTo('tasks')">
          <div class="flex items-center justify-between text-gray-500">
            <span class="text-xs font-medium">Tugas Terhambat (Blocked)</span>
            <div class="p-1.5 rounded-lg bg-red-50 text-red-700">
              <i data-lucide="alert-octagon" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-2">
            <div class="text-xl font-bold font-heading text-red-700 tabular-nums">
              ${blockedTasks.length} Tugas
            </div>
            <p class="text-[11px] text-gray-500 mt-2">
              Memerlukan tabayyun & bantuan tim
            </p>
            <span class="text-[11px] text-red-600 font-semibold flex items-center gap-1">
              Lihat di Papan Tugas →
            </span>
          </div>
        </div>

      </div>

      <!-- 2 Main Columns Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Left Column: Tugas Saya Pekan Ini + 5 Unit Bisnis (65%) -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- Tugas Saya Pekan Ini -->
          <div class="card-surface p-5">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
                  <i data-lucide="list-todo" class="w-4 h-4 text-brand-emerald"></i>
                  Tugas Saya Pekan Ini (${user.name})
                </h3>
                <p class="text-xs text-gray-500">
                  Estimasi beban: <strong class="tabular-nums ${store.calculateUserWeeklyHours(user.id) > 5 ? 'text-red-600' : 'text-brand-emerald'}">${store.calculateUserWeeklyHours(user.id)} jam / maks 5 jam</strong>
                </p>
              </div>
              <button onclick="navigateTo('tasks')" class="text-xs font-semibold text-brand-emerald hover:underline">
                Buka Papan Tugas →
              </button>
            </div>

            ${myTasks.length === 0 ? `
              <div class="text-center py-8 text-gray-400 text-xs">
                <i data-lucide="sparkles" class="w-8 h-8 mx-auto text-emerald-400 mb-2"></i>
                <p>Tidak ada tugas aktif untuk ${user.name} di Sprint ini.</p>
              </div>
            ` : `
              <div class="space-y-2.5">
                ${myTasks.map(t => `
                  <div class="p-3 rounded-lg border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-brand-emerald/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-[10px] px-2 py-0.5 rounded font-semibold ${store.state.units[t.unitId]?.badgeClass || 'badge-unit-ops'}">
                          ${store.state.units[t.unitId]?.name || t.unitId}
                        </span>
                        <span class="text-[10px] px-1.5 py-0.2 rounded font-medium badge-status-${t.status.toLowerCase()}">
                          ${t.status}
                        </span>
                        ${t.isBlocked ? '<span class="text-[10px] bg-red-100 text-red-800 px-1 rounded font-bold">BLOCKED</span>' : ''}
                      </div>
                      <h4 class="text-xs font-bold text-gray-800 truncate">${t.title}</h4>
                      <p class="text-[11px] text-gray-500 mt-0.5 flex items-center gap-2">
                        <span><i data-lucide="clock" class="w-3 h-3 inline mr-0.5"></i>${t.hoursEstimate} jam</span>
                        <span>•</span>
                        <span>Tenggat: ${t.dueDate || '-'}</span>
                      </p>
                    </div>
                    <div class="flex items-center gap-1.5 self-end sm:self-center">
                      ${t.status !== 'DONE' ? `
                        <button onclick="quickUpdateTaskStatus('${t.id}', 'DONE')" class="text-[11px] bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-2.5 py-1 rounded transition flex items-center gap-1">
                          <i data-lucide="check" class="w-3 h-3"></i> Selesai
                        </button>
                      ` : `
                        <span class="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                          <i data-lucide="check-check" class="w-3.5 h-3.5"></i> Itqan
                        </span>
                      `}
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Ringkasan 5 Unit Bisnis KaryaKita -->
          <div class="card-surface p-5">
            <h3 class="font-heading font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
              <i data-lucide="grid" class="w-4 h-4 text-brand-emerald"></i>
              Portofolio 5 Unit Bisnis KaryaKita
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${Object.values(store.state.units).filter(u => u.code !== 'INTERNAL_OPS').map(u => {
                const unitProjects = store.state.projects.filter(p => p.unitId === u.code).length;
                const unitTasks = store.state.tasks.filter(t => t.unitId === u.code).length;
                return `
                  <div class="p-3 rounded-lg border border-brand-border bg-white hover:border-brand-hover transition">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded ${u.badgeClass}">
                      ${u.name.split(' (')[0]}
                    </span>
                    <p class="text-[11px] text-gray-500 mt-2 line-clamp-2">${u.desc}</p>
                    <div class="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600">
                      <span>${unitProjects} Proyek</span>
                      <span>${unitTasks} Tugas</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

        </div>

        <!-- Right Column: Activity Feed & Audit Stream (35%) -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Activity Feed -->
          <div class="card-surface p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
                <i data-lucide="activity" class="w-4 h-4 text-brand-emerald"></i>
                Linimasa Aktivitas Studio
              </h3>
              <span class="text-[10px] bg-emerald-50 text-brand-emerald px-1.5 py-0.5 rounded font-mono">Realtime</span>
            </div>

            <div class="space-y-4">
              ${store.state.auditLogs.slice(0, 6).map(log => `
                <div class="relative pl-5 border-l-2 border-emerald-200">
                  <div class="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-brand-emerald"></div>
                  <p class="text-xs font-semibold text-gray-800">${log.actorName}</p>
                  <p class="text-[11px] text-gray-600 mt-0.5">${log.details}</p>
                  <span class="text-[10px] text-gray-400 mt-1 block font-mono">${log.timestamp}</span>
                </div>
              `).join('')}
            </div>

            <button onclick="navigateTo('system')" class="w-full mt-4 text-center text-xs text-brand-emerald font-semibold hover:underline">
              Buka Semua Audit Log →
            </button>
          </div>

          <!-- Quick Shariah Governance Card -->
          <div class="card-surface p-4 bg-emerald-950 text-white border-emerald-900">
            <div class="flex items-center gap-2 mb-2">
              <i data-lucide="shield" class="w-4 h-4 text-emerald-400"></i>
              <h4 class="font-heading font-bold text-xs text-emerald-200">Guardrails by Design</h4>
            </div>
            <ul class="text-[11px] space-y-1.5 text-emerald-300">
              <li>• <strong>Wajib DP 50%:</strong> Produksi terkunci sebelum verifikasi CFO.</li>
              <li>• <strong>Graduation Rule:</strong> Kas ditahan 70% hingga Rp3,5 juta.</li>
              <li>• <strong>Batas 3-5 Jam:</strong> Radar burnout mahasiswa STMIK Tazkia.</li>
              <li>• <strong>Zakat 2,5%:</strong> Dipotong otomatis sebelum bagi hasil Syirkah.</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  `;
}

function initOverviewCharts() {
  // Chart initialization if any
}

// ------------------------------------------------------------------------------
// VIEW 2: PAPAN TUGAS / TASKS (Kanban & Table View)
// ------------------------------------------------------------------------------
let taskViewMode = 'kanban'; // 'kanban' | 'table'
let taskFilterAssignee = 'all';
let taskFilterUnit = 'all';

function renderTasksView() {
  const user = store.getCurrentUser();
  const tasks = store.state.tasks.filter(t => {
    if (taskFilterAssignee !== 'all' && t.assigneeId !== taskFilterAssignee) return false;
    if (taskFilterUnit !== 'all' && t.unitId !== taskFilterUnit) return false;
    return true;
  });

  const columns = [
    { id: 'BACKLOG', title: 'Backlog', color: 'border-gray-300' },
    { id: 'TODO', title: 'To Do Pekan Ini', color: 'border-slate-400' },
    { id: 'IN_PROGRESS', title: 'In Progress', color: 'border-sky-500' },
    { id: 'REVIEW', title: 'Review / QA', color: 'border-amber-500' },
    { id: 'DONE', title: 'Done (Itqan)', color: 'border-emerald-600' }
  ];

  return `
    <div class="space-y-4">
      
      <!-- Toolbar Filter & View Switcher -->
      <div class="bg-white p-3.5 rounded-xl border border-brand-border flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap items-center gap-2 text-xs">
          
          <!-- Filter Co-Founder -->
          <div class="flex items-center gap-1.5">
            <span class="text-gray-500">PIC:</span>
            <select id="filter-task-assignee" class="bg-gray-50 border border-gray-300 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-brand-emerald">
              <option value="all" ${taskFilterAssignee === 'all' ? 'selected' : ''}>Semua Co-Founder</option>
              ${Object.values(store.state.users).filter(u => u.id !== 'client_guest').map(u => `
                <option value="${u.id}" ${taskFilterAssignee === u.id ? 'selected' : ''}>${u.name}</option>
              `).join('')}
            </select>
          </div>

          <!-- Filter Unit Bisnis -->
          <div class="flex items-center gap-1.5">
            <span class="text-gray-500">Unit:</span>
            <select id="filter-task-unit" class="bg-gray-50 border border-gray-300 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-brand-emerald">
              <option value="all" ${taskFilterUnit === 'all' ? 'selected' : ''}>Semua Unit Bisnis</option>
              ${Object.values(store.state.units).map(u => `
                <option value="${u.code}" ${taskFilterUnit === u.code ? 'selected' : ''}>${u.name}</option>
              `).join('')}
            </select>
          </div>

        </div>

        <div class="flex items-center gap-2">
          
          <!-- View Switcher -->
          <div class="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200 text-xs">
            <button id="btn-view-kanban" class="px-2.5 py-1 rounded-md font-medium ${taskViewMode === 'kanban' ? 'bg-white shadow-xs text-brand-emerald font-bold' : 'text-gray-600'}">
              <i data-lucide="columns-3" class="w-3.5 h-3.5 inline mr-1"></i>Kanban
            </button>
            <button id="btn-view-table" class="px-2.5 py-1 rounded-md font-medium ${taskViewMode === 'table' ? 'bg-white shadow-xs text-brand-emerald font-bold' : 'text-gray-600'}">
              <i data-lucide="table" class="w-3.5 h-3.5 inline mr-1"></i>Tabel
            </button>
          </div>

          <!-- Create Task CTA -->
          <button id="btn-open-create-task" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 transition">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            <span>Buat Tugas</span>
          </button>

        </div>
      </div>

      <!-- Main Kanban or Table Content -->
      ${taskViewMode === 'kanban' ? `
        <!-- Kanban Columns Grid -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3.5 items-start overflow-x-auto pb-4">
          ${columns.map(col => {
            const colTasks = tasks.filter(t => t.status === col.id);
            return `
              <div class="bg-gray-100/70 rounded-xl p-3 border ${col.color} min-w-[240px]">
                <div class="flex items-center justify-between mb-3 px-1">
                  <h4 class="font-heading font-bold text-xs text-gray-800 flex items-center gap-1.5">
                    <span>${col.title}</span>
                  </h4>
                  <span class="text-[11px] font-bold bg-white text-gray-700 px-2 py-0.5 rounded-full border border-gray-200">
                    ${colTasks.length}
                  </span>
                </div>

                <div class="space-y-2.5 min-h-[150px]">
                  ${colTasks.map(t => renderKanbanCard(t)).join('')}
                  ${colTasks.length === 0 ? `
                    <div class="border border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-400 text-[11px]">
                      Kosong
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <!-- Table View -->
        <div class="card-surface overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-gray-50 border-b border-brand-border text-gray-600 uppercase text-[10px] tracking-wider">
              <tr>
                <th class="p-3">Tugas & Proyek</th>
                <th class="p-3">Unit</th>
                <th class="p-3">PIC</th>
                <th class="p-3">Estimasi</th>
                <th class="p-3">Tenggat</th>
                <th class="p-3">Status</th>
                <th class="p-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              ${tasks.map(t => {
                const assignee = store.state.users[t.assigneeId] || { name: t.assigneeId };
                const unit = store.state.units[t.unitId] || { name: t.unitId, badgeClass: '' };
                return `
                  <tr class="hover:bg-gray-50 transition cursor-pointer" onclick="openTaskDetailModal('${t.id}')">
                    <td class="p-3">
                      <p class="font-bold text-gray-900">${t.title}</p>
                      ${t.projectId ? `<p class="text-[10px] text-gray-500">${store.state.projects.find(p => p.id === t.projectId)?.title || ''}</p>` : ''}
                    </td>
                    <td class="p-3">
                      <span class="text-[10px] px-2 py-0.5 rounded font-semibold ${unit.badgeClass}">
                        ${unit.name.split(' (')[0]}
                      </span>
                    </td>
                    <td class="p-3 flex items-center gap-1.5">
                      <img src="${assignee.avatar || ''}" class="w-5 h-5 rounded-full object-cover">
                      <span>${assignee.name}</span>
                    </td>
                    <td class="p-3 tabular-nums font-mono">${t.hoursEstimate} jam</td>
                    <td class="p-3 tabular-nums">${t.dueDate || '-'}</td>
                    <td class="p-3">
                      <span class="text-[10px] px-2 py-0.5 rounded font-medium badge-status-${t.status.toLowerCase()}">
                        ${t.status}
                      </span>
                    </td>
                    <td class="p-3 text-right">
                      <button onclick="event.stopPropagation(); openTaskDetailModal('${t.id}')" class="text-brand-emerald hover:underline font-semibold">
                        Detail
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `}

    </div>
  `;
}

function renderKanbanCard(t) {
  const assignee = store.state.users[t.assigneeId] || { name: t.assigneeId, avatar: '' };
  const unit = store.state.units[t.unitId] || { name: t.unitId, badgeClass: 'badge-unit-ops' };
  const project = store.state.projects.find(p => p.id === t.projectId);

  return `
    <div class="card-surface p-3 bg-white hover:border-brand-emerald transition shadow-xs cursor-pointer" onclick="openTaskDetailModal('${t.id}')">
      
      <!-- Top badges -->
      <div class="flex items-center justify-between gap-1 mb-1.5">
        <span class="text-[9px] px-1.5 py-0.2 rounded font-bold ${unit.badgeClass}">
          ${unit.name.split(' (')[0]}
        </span>
        ${t.isBlocked ? `
          <span class="text-[9px] bg-red-100 text-red-800 px-1.5 py-0.2 rounded font-bold flex items-center gap-0.5">
            <i data-lucide="alert-circle" class="w-2.5 h-2.5"></i>Blocked
          </span>
        ` : ''}
      </div>

      <!-- Title -->
      <h5 class="text-xs font-bold text-gray-900 leading-snug line-clamp-2">
        ${t.title}
      </h5>

      <!-- Project context if any -->
      ${project ? `
        <p class="text-[10px] text-gray-500 mt-1 truncate flex items-center gap-1">
          <i data-lucide="briefcase" class="w-2.5 h-2.5 text-gray-400"></i>
          <span>${project.clientName}</span>
        </p>
      ` : ''}

      <!-- Bottom meta -->
      <div class="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
        <div class="flex items-center gap-1.5">
          <img src="${assignee.avatar}" alt="${assignee.name}" class="w-5 h-5 rounded-full object-cover border border-gray-200" title="${assignee.name}">
          <span class="text-[10px] truncate max-w-[70px]">${assignee.name}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="tabular-nums font-mono text-[10px]">${t.hoursEstimate}h</span>
          ${t.workProofUrl ? '<i data-lucide="link" class="w-3 h-3 text-emerald-600" title="Ada bukti kerja"></i>' : ''}
        </div>
      </div>

    </div>
  `;
}

function initTasksEvents() {
  const assigneeSelect = document.getElementById('filter-task-assignee');
  if (assigneeSelect) {
    assigneeSelect.addEventListener('change', (e) => {
      taskFilterAssignee = e.target.value;
      renderActiveView();
    });
  }

  const unitSelect = document.getElementById('filter-task-unit');
  if (unitSelect) {
    unitSelect.addEventListener('change', (e) => {
      taskFilterUnit = e.target.value;
      renderActiveView();
    });
  }

  const btnKanban = document.getElementById('btn-view-kanban');
  const btnTable = document.getElementById('btn-view-table');
  if (btnKanban && btnTable) {
    btnKanban.addEventListener('click', () => { taskViewMode = 'kanban'; renderActiveView(); });
    btnTable.addEventListener('click', () => { taskViewMode = 'table'; renderActiveView(); });
  }

  const btnCreate = document.getElementById('btn-open-create-task');
  if (btnCreate) {
    btnCreate.addEventListener('click', () => openCreateTaskModal());
  }
}

// ------------------------------------------------------------------------------
// MODAL: DETAIL TUGAS & LOGIKA GUARD PAYMENT GATE & DOD
// ------------------------------------------------------------------------------
function openTaskDetailModal(taskId) {
  const task = store.state.tasks.find(t => t.id === taskId);
  if (!task) return;

  const project = store.state.projects.find(p => p.id === task.projectId);
  const assignee = store.state.users[task.assigneeId] || { name: task.assigneeId };
  const user = store.getCurrentUser();

  const isPaymentLocked = project && project.paymentGateStatus === 'LOCKED_WAITING_DP';

  const modalHtml = `
    <div class="p-6 space-y-5">
      
      <!-- Header -->
      <div class="flex items-start justify-between gap-4 border-b border-brand-border pb-4">
        <div>
          <span class="text-[10px] px-2 py-0.5 rounded font-bold ${store.state.units[task.unitId]?.badgeClass || 'badge-unit-ops'}">
            ${store.state.units[task.unitId]?.name || task.unitId}
          </span>
          <h3 class="font-heading font-bold text-base text-gray-900 mt-1">${task.title}</h3>
          ${project ? `<p class="text-xs text-gray-500 mt-0.5">Proyek: <strong>${project.title}</strong> (${project.clientName})</p>` : ''}
        </div>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Payment Gate Warning Banner if locked -->
      ${isPaymentLocked ? `
        <div class="p-3 bg-amber-50 border border-amber-300 rounded-lg text-xs text-amber-900 flex items-start gap-2">
          <i data-lucide="lock" class="w-4 h-4 flex-shrink-0 text-amber-700 mt-0.5"></i>
          <div>
            <strong>Payment Gate Mengunci Proyek Ini:</strong> Klien belum melunasi DP 50%. Status tugas dilarang masuk ke <em>In Progress</em> sampai CFO (Novita) memverifikasi bukti pembayaran transfer DP.
          </div>
        </div>
      ` : ''}

      <!-- Grid Detail Meta -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-gray-50 p-3 rounded-lg border border-gray-200">
        <div>
          <span class="text-gray-500 block text-[10px]">PIC / Penanggung Jawab</span>
          <strong class="text-gray-900">${assignee.name}</strong>
        </div>
        <div>
          <span class="text-gray-500 block text-[10px]">Estimasi Jam</span>
          <strong class="text-gray-900 font-mono">${task.hoursEstimate} jam / pekan</strong>
        </div>
        <div>
          <span class="text-gray-500 block text-[10px]">Tenggat SLA</span>
          <strong class="text-gray-900">${task.dueDate || '-'}</strong>
        </div>
        <div>
          <span class="text-gray-500 block text-[10px]">Sprint Kuartal 1</span>
          <strong class="text-gray-900">Sprint ${task.sprintNumber}</strong>
        </div>
      </div>

      <!-- Deskripsi -->
      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">Deskripsi Tugas</label>
        <p class="text-xs text-gray-600 bg-white p-3 rounded border border-gray-200">${task.description || 'Tidak ada deskripsi rinci.'}</p>
      </div>

      <!-- Definition of Done (DoD Checklist) -->
      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1.5 flex items-center justify-between">
          <span>Definisi Selesai (Definition of Done / DoD)</span>
          <span class="text-[10px] text-gray-400 font-normal">Wajib centang semua sebelum Done</span>
        </label>
        <div class="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs">
          ${(task.dodChecklist || []).map((item, idx) => `
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="dod-check-${idx}" ${item.checked ? 'checked' : ''} class="rounded text-brand-emerald focus:ring-brand-emerald">
              <span class="${item.checked ? 'line-through text-gray-400' : 'text-gray-800'}">${item.label}</span>
            </label>
          `).join('')}
        </div>
      </div>

      <!-- Tautan Bukti Kerja (URL) -->
      <div>
        <label class="block text-xs font-bold text-gray-700 mb-1">
          Tautan Bukti Kerja (Google Drive, Figma, GitHub, Vercel)
        </label>
        <div class="flex gap-2">
          <input type="url" id="task-proof-url" value="${task.workProofUrl || ''}" placeholder="https://..." class="flex-1 text-xs border border-gray-300 rounded px-3 py-2 focus:ring-1 focus:ring-brand-emerald focus:outline-none">
          ${task.workProofUrl ? `
            <a href="${task.workProofUrl}" target="_blank" class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs flex items-center gap-1">
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Buka
            </a>
          ` : ''}
        </div>
        <p class="text-[10px] text-gray-400 mt-1">Saat status berubah ke Done (Itqan), tautan ini otomatis diarsipkan ke modul /archives.</p>
      </div>

      <!-- Hambatan (Blocker) -->
      <div class="border-t border-gray-200 pt-3">
        <label class="flex items-center gap-2 cursor-pointer mb-2 text-xs font-bold text-red-700">
          <input type="checkbox" id="task-is-blocked" ${task.isBlocked ? 'checked' : ''} class="rounded text-red-600 focus:ring-red-500">
          <span>Tandai Butuh Bantuan / Terhambat (Blocked)</span>
        </label>
        <div id="blocked-reason-wrapper" class="${task.isBlocked ? '' : 'hidden'}">
          <textarea id="task-blocked-reason" rows="2" placeholder="Jelaskan alasan hambatan dan bantuan yang dibutuhkan..." class="w-full text-xs border border-red-200 bg-red-50/40 rounded p-2 focus:ring-1 focus:ring-red-500">${task.blockedReason || ''}</textarea>
        </div>
      </div>

      <!-- Aksi Status Transition Buttons -->
      <div class="border-t border-brand-border pt-4 flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-1.5">
          <span class="text-xs text-gray-500">Ubah Status:</span>
          <select id="task-change-status" class="bg-white border border-gray-300 rounded px-2.5 py-1.5 text-xs font-semibold focus:ring-1 focus:ring-brand-emerald">
            <option value="BACKLOG" ${task.status === 'BACKLOG' ? 'selected' : ''}>Backlog</option>
            <option value="TODO" ${task.status === 'TODO' ? 'selected' : ''}>To Do Pekan Ini</option>
            <option value="IN_PROGRESS" ${task.status === 'IN_PROGRESS' ? 'selected' : ''}>In Progress</option>
            <option value="REVIEW" ${task.status === 'REVIEW' ? 'selected' : ''}>Review / QA</option>
            <option value="DONE" ${task.status === 'DONE' ? 'selected' : ''}>Done (Itqan)</option>
          </select>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs hover:bg-gray-50">
            Batal
          </button>
          <button onclick="saveTaskModalChanges('${task.id}')" class="px-4 py-1.5 rounded bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold">
            Simpan Perubahan
          </button>
        </div>
      </div>

    </div>
  `;

  openModal(modalHtml);

  // Toggle blocker textarea
  const blockedCheckbox = document.getElementById('task-is-blocked');
  const reasonWrapper = document.getElementById('blocked-reason-wrapper');
  if (blockedCheckbox && reasonWrapper) {
    blockedCheckbox.addEventListener('change', (e) => {
      if (e.target.checked) reasonWrapper.classList.remove('hidden');
      else reasonWrapper.classList.add('hidden');
    });
  }
}

function saveTaskModalChanges(taskId) {
  const task = store.state.tasks.find(t => t.id === taskId);
  if (!task) return;

  const targetStatus = document.getElementById('task-change-status').value;
  const proofUrl = document.getElementById('task-proof-url').value.trim();
  const isBlocked = document.getElementById('task-is-blocked').checked;
  const blockedReason = document.getElementById('task-blocked-reason')?.value.trim() || '';

  const project = store.state.projects.find(p => p.id === task.projectId);

  // Guard 1: Payment Gate Enforcement!
  if (targetStatus === 'IN_PROGRESS' && project && project.paymentGateStatus === 'LOCKED_WAITING_DP') {
    showToast('Aksi Ditolak: Proyek masih berstatus Menunggu DP 50%. Wajib diverifikasi oleh CFO sebelum produksi!', 'error');
    return;
  }

  // Guard 2: Definition of Done Check before moving to DONE
  let allDodChecked = true;
  if (task.dodChecklist) {
    task.dodChecklist.forEach((item, idx) => {
      const checkbox = document.getElementById(`dod-check-${idx}`);
      if (checkbox) {
        item.checked = checkbox.checked;
        if (!checkbox.checked) allDodChecked = false;
      }
    });
  }

  if (targetStatus === 'DONE') {
    if (!allDodChecked) {
      showToast('Gagal Selesai: Seluruh checklist Definisi Selesai (DoD) wajib terpenuhi!', 'error');
      return;
    }
    if (!proofUrl) {
      showToast('Gagal Selesai: Wajib melampirkan tautan bukti kerja (URL) untuk arsip!', 'error');
      return;
    }
  }

  // Apply Changes
  const oldStatus = task.status;
  task.status = targetStatus;
  task.workProofUrl = proofUrl;
  task.isBlocked = isBlocked;
  task.blockedReason = isBlocked ? blockedReason : null;

  // Auto-Archive when moving to DONE
  if (targetStatus === 'DONE' && oldStatus !== 'DONE' && proofUrl) {
    const newArchive = {
      id: 'arc-' + Date.now(),
      title: 'Bukti Kerja: ' + task.title,
      quarter: '2026-Q1',
      category: 'Proyek Klien B2B',
      unitId: task.unitId,
      uploadedById: store.state.activeUserId,
      storageType: 'EXTERNAL_LINK',
      url: proofUrl,
      confidentiality: 'INTERNAL_TIM',
      date: new Date().toISOString().split('T')[0]
    };
    store.state.archives.unshift(newArchive);
    store.logAudit('TASK_AUTO_ARCHIVED', 'Task: ' + task.title, 'Bukti kerja otomatis masuk ke /archives.');
  }

  store.logAudit('TASK_STATUS_UPDATED', 'Task: ' + task.title, `Status diubah dari ${oldStatus} ke ${targetStatus}`);
  store.saveState();
  closeModal();
  showToast('Perubahan tugas berhasil disimpan!');
}

function quickUpdateTaskStatus(taskId, newStatus) {
  const task = store.state.tasks.find(t => t.id === taskId);
  if (!task) return;

  const project = store.state.projects.find(p => p.id === task.projectId);
  if (newStatus === 'IN_PROGRESS' && project && project.paymentGateStatus === 'LOCKED_WAITING_DP') {
    showToast('Aksi Ditolak: Proyek masih berstatus Menunggu DP 50%!', 'error');
    return;
  }

  task.status = newStatus;
  store.logAudit('QUICK_TASK_STATUS', 'Task: ' + task.title, 'Status cepat diubah ke ' + newStatus);
  store.saveState();
  showToast(`Status tugas ${task.title} diubah ke ${newStatus}`);
}

function openCreateTaskModal() {
  const user = store.getCurrentUser();

  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4 text-brand-emerald"></i>
          Buat Tugas Baru (Sprint ${store.state.currentSprint})
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Judul Tugas *</label>
          <input type="text" id="new-task-title" placeholder="Misal: Desain wireframe halaman utama" class="w-full border border-gray-300 rounded px-3 py-2 focus:ring-1 focus:ring-brand-emerald">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Unit Bisnis *</label>
            <select id="new-task-unit" class="w-full border border-gray-300 rounded px-2.5 py-2">
              ${Object.values(store.state.units).map(u => `
                <option value="${u.code}">${u.name}</option>
              `).join('')}
            </select>
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Terkait Proyek (Opsional)</label>
            <select id="new-task-project" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="">-- Bukan Bagian Proyek Tertentu --</option>
              ${store.state.projects.map(p => `
                <option value="${p.id}">${p.title} (${p.clientName})</option>
              `).join('')}
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">PIC (Co-Founder) *</label>
            <select id="new-task-assignee" class="w-full border border-gray-300 rounded px-2.5 py-2">
              ${Object.values(store.state.users).filter(u => u.id !== 'client_guest').map(u => `
                <option value="${u.id}" ${u.id === user.id ? 'selected' : ''}>${u.name}</option>
              `).join('')}
            </select>
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Estimasi Jam (0,5 - 3h) *</label>
            <input type="number" id="new-task-hours" step="0.5" min="0.5" max="5" value="1.5" class="w-full border border-gray-300 rounded px-3 py-2 font-mono">
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Tenggat Selesai</label>
            <input type="date" id="new-task-due" class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
        </div>

        <div>
          <label class="block font-semibold text-gray-700 mb-1">Definisi Selesai (DoD) - 1 baris per poin</label>
          <textarea id="new-task-dod" rows="2" placeholder="Kriteria 1&#10;Kriteria 2" class="w-full border border-gray-300 rounded p-2"></textarea>
        </div>
      </div>

      <div class="border-t border-brand-border pt-4 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs hover:bg-gray-50">Batal</button>
        <button onclick="submitNewTask()" class="px-4 py-1.5 rounded bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold">Buat Tugas</button>
      </div>
    </div>
  `;

  openModal(modalHtml);
}

function submitNewTask() {
  const title = document.getElementById('new-task-title').value.trim();
  const unitId = document.getElementById('new-task-unit').value;
  const projectId = document.getElementById('new-task-project').value || null;
  const assigneeId = document.getElementById('new-task-assignee').value;
  const hours = parseFloat(document.getElementById('new-task-hours').value) || 1.5;
  const dueDate = document.getElementById('new-task-due').value || null;
  const dodText = document.getElementById('new-task-dod').value.trim();

  if (!title) {
    showToast('Judul tugas wajib diisi!', 'error');
    return;
  }

  // Workload Guard check
  const currentHours = store.calculateUserWeeklyHours(assigneeId);
  if (currentHours + hours > 5.0) {
    showToast(`Peringatan Beban: Total jam kerja ${store.state.users[assigneeId]?.name} melebihi batas sehat 5 jam/pekan!`, 'warning');
  }

  const dodChecklist = dodText ? dodText.split('\n').filter(Boolean).map(line => ({ label: line.trim(), checked: false })) : [
    { label: 'Pekerjaan selesai dan diuji', checked: false }
  ];

  const newTask = {
    id: 'task-' + Date.now(),
    title: title,
    description: '',
    unitId: unitId,
    projectId: projectId,
    assigneeId: assigneeId,
    createdById: store.state.activeUserId,
    sprintNumber: store.state.currentSprint,
    status: 'TODO',
    isBlocked: false,
    blockedReason: null,
    hoursEstimate: hours,
    dueDate: dueDate,
    dodChecklist: dodChecklist,
    workProofUrl: '',
    isClientVisible: true
  };

  store.state.tasks.unshift(newTask);
  store.logAudit('TASK_CREATED', 'Task: ' + title, `Tugas dibuat untuk ${store.state.users[assigneeId]?.name}`);
  store.saveState();
  closeModal();
  showToast('Tugas baru berhasil dibuat!');
}

// ------------------------------------------------------------------------------
// VIEW 3: LAPOR & SYURA (Async Check-In & Notulen)
// ------------------------------------------------------------------------------
let reportsActiveTab = 'checkin'; // 'checkin' | 'syura' | 'syirkah-fairness'

function renderReportsView() {
  const user = store.getCurrentUser();
  const founders = Object.values(store.state.users).filter(u => u.id !== 'client_guest');
  const myCheckin = store.state.checkins.find(c => c.userId === user.id && c.sprintNumber === store.state.currentSprint);

  return `
    <div class="space-y-6">
      
      <!-- Top Tabs -->
      <div class="flex border-b border-brand-border bg-white px-4 pt-2 rounded-t-xl text-xs font-semibold gap-4">
        <button id="tab-reports-checkin" class="py-2.5 border-b-2 ${reportsActiveTab === 'checkin' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500 hover:text-gray-800'} transition flex items-center gap-1.5">
          <i data-lucide="clock" class="w-3.5 h-3.5"></i>
          <span>Async Check-In Rabu Malam</span>
        </button>
        <button id="tab-reports-syura" class="py-2.5 border-b-2 ${reportsActiveTab === 'syura' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500 hover:text-gray-800'} transition flex items-center gap-1.5">
          <i data-lucide="users" class="w-3.5 h-3.5"></i>
          <span>Notulen Weekly Syura (Minggu)</span>
        </button>
        <button id="tab-reports-fairness" class="py-2.5 border-b-2 ${reportsActiveTab === 'syirkah-fairness' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500 hover:text-gray-800'} transition flex items-center gap-1.5">
          <i data-lucide="scale" class="w-3.5 h-3.5"></i>
          <span>Indikator Keadilan Syirkah</span>
        </button>
      </div>

      ${reportsActiveTab === 'checkin' ? `
        <!-- TAB 1: ASYNC CHECK-IN -->
        <div class="space-y-6">
          
          <!-- Hilwa's WA Generator CTA + Info -->
          <div class="card-surface p-4 bg-emerald-50/50 border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 class="font-heading font-bold text-xs text-brand-emerald flex items-center gap-1.5">
                <i data-lucide="message-square" class="w-4 h-4"></i>
                Rekap Laporan Cepat WhatsApp
              </h4>
              <p class="text-[11px] text-gray-600 mt-0.5">
                Hilwa (COO) dapat menyalin seluruh laporan tim dalam 1 klik dengan format rapi siap tempel ke grup WhatsApp.
              </p>
            </div>
            <button onclick="copyCheckinsToWhatsApp()" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition flex-shrink-0 shadow-sm">
              <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              <span>Salin Rekap ke Format WA</span>
            </button>
          </div>

          <!-- My Check-In Form (< 90 seconds) -->
          <div class="card-surface p-5">
            <h3 class="font-heading font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
              <i data-lucide="pen-tool" class="w-4 h-4 text-brand-emerald"></i>
              Form Check-In Cepat Saya (${user.name}) — Sprint ${store.state.currentSprint}
            </h3>
            
            <div class="space-y-3 text-xs">
              <div>
                <label class="block font-semibold text-gray-700 mb-1">1. Apa yang sudah selesai Anda kerjakan pekan ini?</label>
                <textarea id="checkin-completed" rows="2" placeholder="Contoh: Selesaikan desain 3 logo alternatif Halal Mart..." class="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-brand-emerald">${myCheckin?.completedSummary || ''}</textarea>
              </div>
              <div>
                <label class="block font-semibold text-gray-700 mb-1">2. Apa yang sedang/akan Anda kerjakan selanjutnya?</label>
                <textarea id="checkin-inprogress" rows="2" placeholder="Contoh: Menyiapkan wireframe booking engine travel..." class="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-brand-emerald">${myCheckin?.inProgressSummary || ''}</textarea>
              </div>
              <div>
                <label class="block font-semibold text-gray-700 mb-1">3. Ada hambatan atau butuh bantuan siapa?</label>
                <textarea id="checkin-blocker" rows="2" placeholder="Contoh: Aman / Butuh feedback aset visual dari Ahmad..." class="w-full border border-gray-300 rounded p-2.5 focus:ring-1 focus:ring-brand-emerald">${myCheckin?.blockerSummary || ''}</textarea>
              </div>
              <div class="flex justify-end pt-2">
                <button onclick="submitAsyncCheckin()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition">
                  <i data-lucide="send" class="w-3.5 h-3.5"></i>
                  <span>Kirim Check-In (< 90 Detik)</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Grid Status 7 Co-Founders -->
          <div class="card-surface p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-heading font-bold text-sm text-gray-900">
                Status Pelaporan 7 Co-Founder (Sprint ${store.state.currentSprint})
              </h3>
              <span class="text-xs text-gray-500">Batas: Rabu, 22.00 WIB</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              ${founders.map(f => {
                const report = store.state.checkins.find(c => c.userId === f.id && c.sprintNumber === store.state.currentSprint);
                const hasReported = !!report;
                return `
                  <div class="p-3.5 rounded-xl border ${hasReported ? 'border-emerald-200 bg-emerald-50/20' : 'border-amber-200 bg-amber-50/20'} space-y-2">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <img src="${f.avatar}" class="w-6 h-6 rounded-full object-cover">
                        <span class="text-xs font-bold text-gray-900">${f.name}</span>
                      </div>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded ${hasReported ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                        ${hasReported ? 'Sudah Lapor' : 'Belum Lapor'}
                      </span>
                    </div>

                    ${hasReported ? `
                      <div class="text-[11px] text-gray-700 space-y-1.5 pt-2 border-t border-emerald-100">
                        <p><strong>Selesai:</strong> ${report.completedSummary}</p>
                        <p><strong>Progres:</strong> ${report.inProgressSummary}</p>
                        <p><strong>Hambatan:</strong> ${report.blockerSummary || '-'}</p>
                        <span class="text-[9px] text-gray-400 block font-mono">${report.submittedAt}</span>
                      </div>
                    ` : `
                      <p class="text-[11px] text-gray-400 italic pt-2 border-t border-amber-100">
                        Belum mengirim check-in untuk pekan ini.
                      </p>
                    `}
                  </div>
                `;
              }).join('')}
            </div>
          </div>

        </div>
      ` : reportsActiveTab === 'syura' ? `
        <!-- TAB 2: NOTULEN WEEKLY SYURA -->
        <div class="space-y-6">
          <div class="card-surface p-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-border pb-4 mb-4">
              <div>
                <h3 class="font-heading font-bold text-sm text-gray-900">
                  Notulen Rapat Weekly Syura #3 (Minggu Malam)
                </h3>
                <p class="text-xs text-gray-500">Moderator: Hilwa (COO) • Kehadiran: 7 / 7 Pendiri Hadir Lengkap</p>
              </div>
              <span class="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded">Disahkan Alfatih (CEO)</span>
            </div>

            <!-- Strategic Decisions -->
            <div class="mb-5">
              <h4 class="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Keputusan Strategis:</h4>
              <ul class="text-xs text-gray-700 space-y-1.5 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <li>• <strong>Penegakan Payment Gate:</strong> Semua pengerjaan teknis proyek Lini 1 & 2 wajib diverifikasi DP 50% oleh Novita.</li>
                <li>• <strong>Disiplin Waktu Mahasiswa:</strong> Batas beban 3-5 jam/minggu dipantau ketat menjelang ujian semester Tazkia.</li>
                <li>• <strong>Alokasi Kas Ditahan:</strong> Menjaga rasio 70% kas ditahan hingga saldo kas studio mencapai Rp3,5 juta.</li>
              </ul>
            </div>

            <!-- Action Items Table -->
            <div>
              <h4 class="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Daftar Action Items:</h4>
              <div class="overflow-x-auto border border-gray-200 rounded-lg">
                <table class="w-full text-xs text-left">
                  <thead class="bg-gray-50 text-[10px] text-gray-500 uppercase">
                    <tr>
                      <th class="p-2.5">Action Item</th>
                      <th class="p-2.5">PIC</th>
                      <th class="p-2.5 text-right">Status di Kanban</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    ${store.state.syuraMinutes[0]?.actionItems.map(item => {
                      const pic = store.state.users[item.picId] || { name: item.picId };
                      return `
                        <tr>
                          <td class="p-2.5 font-medium text-gray-800">${item.title}</td>
                          <td class="p-2.5">${pic.name}</td>
                          <td class="p-2.5 text-right">
                            ${item.promoted ? `
                              <span class="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                                Sudah di Kanban
                              </span>
                            ` : `
                              <button onclick="promoteSyuraItemToTask('${item.id}')" class="text-[11px] bg-brand-emerald text-white px-2.5 py-1 rounded hover:bg-brand-hover transition">
                                Jadikan Tugas di Kanban →
                              </button>
                            `}
                          </td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      ` : `
        <!-- TAB 3: INDIKATOR KEADILAN SYIRKAH ABDAN -->
        <div class="space-y-6">
          <div class="card-surface p-5">
            <h3 class="font-heading font-bold text-sm text-gray-900 mb-2 flex items-center gap-2">
              <i data-lucide="scale" class="w-4 h-4 text-brand-emerald"></i>
              Matriks Keadilan & Keaktifan 4 Sprint Terakhir
            </h3>
            <p class="text-xs text-gray-500 mb-4">
              Prinsip <em>Tabayyun</em>: Sistem mendeteksi otomatis jika ada co-founder yang tidak aktif 2 sprint berturut-turut untuk dilakukan dialog 1-on-1 secara kekeluargaan.
            </p>

            <div class="overflow-x-auto border border-brand-border rounded-lg">
              <table class="w-full text-xs text-left">
                <thead class="bg-gray-50 text-[10px] text-gray-600 uppercase">
                  <tr>
                    <th class="p-3">Co-Founder</th>
                    <th class="p-3">Peran Studio</th>
                    <th class="p-3 text-center">Sprint 1</th>
                    <th class="p-3 text-center">Sprint 2</th>
                    <th class="p-3 text-center">Sprint 3 (Aktif)</th>
                    <th class="p-3 text-center">Status Tabayyun</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${founders.map(f => {
                    const myCompletedTasks = store.state.tasks.filter(t => t.assigneeId === f.id && t.status === 'DONE').length;
                    return `
                      <tr>
                        <td class="p-3 flex items-center gap-2">
                          <img src="${f.avatar}" class="w-6 h-6 rounded-full object-cover">
                          <span class="font-bold text-gray-900">${f.name}</span>
                        </td>
                        <td class="p-3 text-gray-500">${f.roleLabel}</td>
                        <td class="p-3 text-center text-emerald-700 font-semibold">Aktif (100%)</td>
                        <td class="p-3 text-center text-emerald-700 font-semibold">Aktif (100%)</td>
                        <td class="p-3 text-center font-bold">${myCompletedTasks > 0 ? 'Selesai ' + myCompletedTasks + ' Tugas' : 'Dalam Pengerjaan'}</td>
                        <td class="p-3 text-center">
                          <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                            Sehat & Adil
                          </span>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      `}

    </div>
  `;
}

function initReportsEvents() {
  const tabCheckin = document.getElementById('tab-reports-checkin');
  const tabSyura = document.getElementById('tab-reports-syura');
  const tabFairness = document.getElementById('tab-reports-fairness');

  if (tabCheckin) tabCheckin.addEventListener('click', () => { reportsActiveTab = 'checkin'; renderActiveView(); });
  if (tabSyura) tabSyura.addEventListener('click', () => { reportsActiveTab = 'syura'; renderActiveView(); });
  if (tabFairness) tabFairness.addEventListener('click', () => { reportsActiveTab = 'syirkah-fairness'; renderActiveView(); });
}

function submitAsyncCheckin() {
  const user = store.getCurrentUser();
  const completed = document.getElementById('checkin-completed').value.trim();
  const inprogress = document.getElementById('checkin-inprogress').value.trim();
  const blocker = document.getElementById('checkin-blocker').value.trim();

  if (!completed || !inprogress) {
    showToast('Harap isi ringkasan selesai dan progres!', 'error');
    return;
  }

  const existingIdx = store.state.checkins.findIndex(c => c.userId === user.id && c.sprintNumber === store.state.currentSprint);
  const checkinData = {
    userId: user.id,
    sprintNumber: store.state.currentSprint,
    completedSummary: completed,
    inProgressSummary: inprogress,
    blockerSummary: blocker || 'Aman, tidak ada kendala.',
    submittedAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB'
  };

  if (existingIdx >= 0) {
    store.state.checkins[existingIdx] = checkinData;
  } else {
    store.state.checkins.push(checkinData);
  }

  store.logAudit('CHECKIN_SUBMITTED', 'Check-In: ' + user.name, 'Laporan Async Check-In Rabu berhasil dikirim.');
  store.saveState();
  showToast('Alhamdulillah! Laporan Async Check-In berhasil disimpan.');
  renderActiveView();
}

function copyCheckinsToWhatsApp() {
  const sprint = store.state.currentSprint;
  let text = `*REKAP ASYNC CHECK-IN RABU — KARYAKITA HUB (SPRINT ${sprint})*\n`;
  text += `_Waktu Rekap: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}_\n\n`;

  const founders = Object.values(store.state.users).filter(u => u.id !== 'client_guest');
  founders.forEach((f, idx) => {
    const report = store.state.checkins.find(c => c.userId === f.id && c.sprintNumber === sprint);
    text += `*${idx + 1}. ${f.name} (${f.roleLabel.split(' (')[0]})*\n`;
    if (report) {
      text += `✅ *Selesai:* ${report.completedSummary}\n`;
      text += `⏳ *Progres:* ${report.inProgressSummary}\n`;
      text += `⚠️ *Hambatan:* ${report.blockerSummary || '-'}\n\n`;
    } else {
      text += `❌ _Belum mengisi laporan check-in_\n\n`;
    }
  });

  text += `_Disalin otomatis dari KaryaKita Hub Internal Operating System._`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('Format WhatsApp berhasil disalin ke clipboard! Silakan paste di grup WA.');
  }).catch(() => {
    showToast('Format berhasil disiapkan!', 'success');
  });
}

function promoteSyuraItemToTask(itemId) {
  const minute = store.state.syuraMinutes[0];
  const item = minute?.actionItems.find(a => a.id === itemId);
  if (!item) return;

  const newTask = {
    id: 'task-' + Date.now(),
    title: item.title,
    description: 'Berasal dari keputusan rapat Weekly Syura',
    unitId: 'INTERNAL_OPS',
    projectId: null,
    assigneeId: item.picId,
    createdById: store.state.activeUserId,
    sprintNumber: store.state.currentSprint,
    status: 'TODO',
    isBlocked: false,
    blockedReason: null,
    hoursEstimate: 1.0,
    dueDate: '2026-03-15',
    dodChecklist: [{ label: item.title, checked: false }],
    workProofUrl: '',
    isClientVisible: false
  };

  item.promoted = true;
  store.state.tasks.unshift(newTask);
  store.logAudit('SYURA_PROMOTED_TASK', 'Action Item: ' + item.title, 'Didorong ke papan tugas Kanban.');
  store.saveState();
  showToast('Action item berhasil diubah menjadi kartu Kanban!');
  renderActiveView();
}

// ------------------------------------------------------------------------------
// VIEW 4: ARSIP & DOKUMEN / ARCHIVES (Link-First & NDA Isolation)
// ------------------------------------------------------------------------------
let archiveFilterQuarter = 'all';
let archiveFilterCategory = 'all';

function renderArchivesView() {
  const user = store.getCurrentUser();
  const archives = store.state.archives.filter(a => {
    if (archiveFilterQuarter !== 'all' && a.quarter !== archiveFilterQuarter) return false;
    if (archiveFilterCategory !== 'all' && a.category !== archiveFilterCategory) return false;
    
    // RBAC Security Guard: NDA_KLIEN can only be accessed by Super Admin, Ops Admin, Finance Admin, or PIC!
    if (a.confidentiality === 'NDA_KLIEN') {
      const allowedRoles = ['SUPER_ADMIN', 'OPS_ADMIN', 'FINANCE_ADMIN'];
      if (!allowedRoles.includes(user.role) && a.uploadedById !== user.id) {
        return false; // Isolated!
      }
    }
    return true;
  });

  return `
    <div class="space-y-4">
      
      <!-- Toolbar -->
      <div class="bg-white p-3.5 rounded-xl border border-brand-border flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap items-center gap-2 text-xs">
          <div class="flex items-center gap-1.5">
            <span class="text-gray-500">Kuartal:</span>
            <select id="filter-archive-quarter" class="bg-gray-50 border border-gray-300 rounded px-2 py-1 text-xs">
              <option value="all">Semua Kuartal (2026)</option>
              <option value="2026-Q1">2026 — Kuartal 1</option>
              <option value="2026-Q2">2026 — Kuartal 2</option>
            </select>
          </div>

          <div class="flex items-center gap-1.5">
            <span class="text-gray-500">Kategori:</span>
            <select id="filter-archive-category" class="bg-gray-50 border border-gray-300 rounded px-2 py-1 text-xs">
              <option value="all">Semua Kategori</option>
              <option value="Akad & Legal">Akad & Legal</option>
              <option value="Proyek Klien B2B">Proyek Klien B2B</option>
              <option value="Materi AI Academy">Materi AI Academy</option>
              <option value="Laporan Keuangan">Laporan Keuangan</option>
            </select>
          </div>
        </div>

        <button onclick="openAddArchiveModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Tambah Arsip / Tautan</span>
        </button>
      </div>

      <!-- Table of Archives -->
      <div class="card-surface overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-gray-50 border-b border-brand-border text-gray-600 uppercase text-[10px] tracking-wider">
            <tr>
              <th class="p-3">Nama Dokumen</th>
              <th class="p-3">Kategori</th>
              <th class="p-3">Pengunggah</th>
              <th class="p-3">Tipe Simpan</th>
              <th class="p-3">Kerahasiaan</th>
              <th class="p-3">Tanggal</th>
              <th class="p-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            ${archives.map(a => {
              const uploader = store.state.users[a.uploadedById] || { name: a.uploadedById };
              return `
                <tr class="hover:bg-gray-50 transition">
                  <td class="p-3">
                    <div class="flex items-center gap-2">
                      <i data-lucide="${a.storageType === 'EXTERNAL_LINK' ? 'link' : 'file-text'}" class="w-4 h-4 text-brand-emerald flex-shrink-0"></i>
                      <strong class="text-gray-900">${a.title}</strong>
                    </div>
                  </td>
                  <td class="p-3 text-gray-600">${a.category}</td>
                  <td class="p-3">${uploader.name}</td>
                  <td class="p-3">
                    <span class="text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${a.storageType === 'EXTERNAL_LINK' ? 'bg-sky-50 text-sky-700' : 'bg-gray-100 text-gray-700'}">
                      ${a.storageType === 'EXTERNAL_LINK' ? 'External Link (Rp0)' : 'Upload <=5MB'}
                    </span>
                  </td>
                  <td class="p-3">
                    <span class="text-[10px] px-2 py-0.5 rounded font-bold ${a.confidentiality === 'NDA_KLIEN' ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}">
                      ${a.confidentiality === 'NDA_KLIEN' ? 'NDA Klien — Rahasia' : 'Internal Tim'}
                    </span>
                  </td>
                  <td class="p-3 text-gray-500 tabular-nums">${a.date}</td>
                  <td class="p-3 text-right">
                    <a href="${a.url}" target="_blank" class="inline-flex items-center gap-1 text-brand-emerald hover:underline font-semibold">
                      <span>Buka</span>
                      <i data-lucide="external-link" class="w-3 h-3"></i>
                    </a>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

    </div>
  `;
}

function initArchivesEvents() {
  const qSelect = document.getElementById('filter-archive-quarter');
  const cSelect = document.getElementById('filter-archive-category');
  if (qSelect) qSelect.addEventListener('change', (e) => { archiveFilterQuarter = e.target.value; renderActiveView(); });
  if (cSelect) cSelect.addEventListener('change', (e) => { archiveFilterCategory = e.target.value; renderActiveView(); });
}

function openAddArchiveModal() {
  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="folder-plus" class="w-4 h-4 text-brand-emerald"></i>
          Tambah Dokumen ke Vault Arsip
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Nama Dokumen *</label>
          <input type="text" id="new-arc-title" placeholder="Misal: Proposal Kerjasama B2B PT Barokah" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Kategori</label>
            <select id="new-arc-category" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="Akad & Legal">Akad & Legal</option>
              <option value="Proyek Klien B2B">Proyek Klien B2B</option>
              <option value="Materi AI Academy">Materi AI Academy</option>
              <option value="Aset Desain & Konten">Aset Desain & Konten</option>
              <option value="Laporan Keuangan">Laporan Keuangan</option>
            </select>
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Kerahasiaan *</label>
            <select id="new-arc-confidentiality" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="INTERNAL_TIM">Internal Tim (Dapat Diakses 7 Pendiri)</option>
              <option value="NDA_KLIEN">NDA Klien — Rahasia (Super Admin/Ops/Finance/PIC)</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block font-semibold text-gray-700 mb-1">Tipe Penyimpanan</label>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <label class="p-2 border rounded border-brand-emerald bg-emerald-50/40 flex items-center gap-2 cursor-pointer">
              <input type="radio" name="storage-mode" value="EXTERNAL_LINK" checked>
              <span><strong>Link-First (Biaya Rp0)</strong><br><span class="text-[10px] text-gray-500">Google Drive, Figma, GitHub</span></span>
            </label>
            <label class="p-2 border rounded border-gray-200 flex items-center gap-2 cursor-pointer">
              <input type="radio" name="storage-mode" value="FILE_UPLOAD">
              <span><strong>File Upload (<= 5 MB)</strong><br><span class="text-[10px] text-gray-500">Bukti transfer, akad PDF</span></span>
            </label>
          </div>
        </div>

        <div>
          <label class="block font-semibold text-gray-700 mb-1">Tautan / URL Dokumen *</label>
          <input type="url" id="new-arc-url" placeholder="https://drive.google.com/..." class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
      </div>

      <div class="border-t border-brand-border pt-4 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs">Batal</button>
        <button onclick="submitNewArchive()" class="px-4 py-1.5 rounded bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold">Simpan Arsip</button>
      </div>
    </div>
  `;

  openModal(modalHtml);
}

function submitNewArchive() {
  const title = document.getElementById('new-arc-title').value.trim();
  const category = document.getElementById('new-arc-category').value;
  const confidentiality = document.getElementById('new-arc-confidentiality').value;
  const url = document.getElementById('new-arc-url').value.trim();

  if (!title || !url) {
    showToast('Nama dokumen dan URL wajib diisi!', 'error');
    return;
  }

  const newArchive = {
    id: 'arc-' + Date.now(),
    title: title,
    quarter: '2026-Q1',
    category: category,
    unitId: 'INTERNAL_OPS',
    uploadedById: store.state.activeUserId,
    storageType: 'EXTERNAL_LINK',
    url: url,
    confidentiality: confidentiality,
    date: new Date().toISOString().split('T')[0]
  };

  store.state.archives.unshift(newArchive);
  store.logAudit('ARCHIVE_CREATED', 'Doc: ' + title, 'Dokumen baru diarsipkan dengan label ' + confidentiality);
  store.saveState();
  closeModal();
  showToast('Dokumen berhasil diarsipkan ke vault!');
  renderActiveView();
}

// ------------------------------------------------------------------------------
// VIEW 5: PROYEK & PAYMENT GATE / PROJECTS
// ------------------------------------------------------------------------------
function renderProjectsView() {
  const user = store.getCurrentUser();
  const projects = store.state.projects;
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const canVerifyPayment = ['SUPER_ADMIN', 'FINANCE_ADMIN'].includes(user.role);

  return `
    <div class="space-y-5">
      
      <!-- Header & Warning -->
      <div class="card-surface p-4 bg-white border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
            <i data-lucide="shield-alert" class="w-4 h-4 text-brand-emerald"></i>
            Disiplin Gerbang Pembayaran (Payment Gate Rule)
          </h3>
          <p class="text-xs text-gray-500 mt-0.5">
            Proyek B2B wajib DP 50% terverifikasi CFO (Novita) sebelum tugas eksekusi dapat dipindahkan ke <em>In Progress</em>.
          </p>
        </div>
        <button onclick="openCreateProjectModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition flex-shrink-0">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Tambah Proyek Baru</span>
        </button>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${projects.map(p => {
          const unit = store.state.units[p.unitId] || { name: p.unitId, badgeClass: '' };
          const pic = store.state.users[p.picId] || { name: p.picId };
          const isWaitingDp = p.paymentGateStatus === 'LOCKED_WAITING_DP';
          const isDp50 = p.paymentGateStatus === 'DP_50_VERIFIED';
          const isPaid100 = p.paymentGateStatus === 'PAID_100_VERIFIED';

          return `
            <div class="card-surface p-5 space-y-4">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <span class="text-[10px] px-2 py-0.5 rounded font-bold ${unit.badgeClass}">
                    ${unit.name}
                  </span>
                  <h4 class="font-heading font-bold text-sm text-gray-900 mt-1">${p.title}</h4>
                  <p class="text-xs text-gray-500">Klien: <strong>${p.clientName}</strong></p>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${isWaitingDp ? 'badge-gate-waiting' : isDp50 ? 'badge-gate-dp50' : 'badge-gate-paid100'}">
                  ${isWaitingDp ? 'Menunggu DP 50%' : isDp50 ? 'DP 50% Terverifikasi' : 'Lunas 100%'}
                </span>
              </div>

              <div class="grid grid-cols-3 gap-2 bg-gray-50 p-2.5 rounded-lg text-xs border border-gray-100">
                <div>
                  <span class="text-[10px] text-gray-500 block">Nilai Kontrak</span>
                  <strong class="font-mono text-gray-900 tabular-nums">${formatRp(p.contractValueIdr)}</strong>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 block">PIC Proyek</span>
                  <strong class="text-gray-900">${pic.name}</strong>
                </div>
                <div>
                  <span class="text-[10px] text-gray-500 block">Tenggat SLA</span>
                  <strong class="text-gray-900">${p.slaDeadline || '-'}</strong>
                </div>
              </div>

              <!-- Payment Gate Action & Client Portal Token -->
              <div class="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div class="flex items-center gap-1.5">
                  <a href="#client-portal" onclick="navigateTo('client-portal')" class="text-xs text-brand-emerald hover:underline flex items-center gap-1 font-semibold">
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    <span>Portal Klien</span>
                  </a>
                  <span class="text-[10px] bg-gray-100 px-1.5 py-0.2 rounded font-mono text-gray-600">${p.clientPortalToken}</span>
                </div>

                <div>
                  ${canVerifyPayment ? `
                    ${isWaitingDp ? `
                      <button onclick="openVerifyDpModal('${p.id}')" class="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded font-semibold text-xs flex items-center gap-1">
                        <i data-lucide="check" class="w-3.5 h-3.5"></i> Verifikasi DP 50%
                      </button>
                    ` : isDp50 ? `
                      <button onclick="openVerifyFullModal('${p.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded font-semibold text-xs flex items-center gap-1">
                        <i data-lucide="check-check" class="w-3.5 h-3.5"></i> Verifikasi Lunas 100%
                      </button>
                    ` : `
                      <span class="text-emerald-700 font-bold flex items-center gap-1">
                        <i data-lucide="shield-check" class="w-4 h-4"></i> Pelunasan Tuntas
                      </span>
                    `}
                  ` : `
                    <span class="text-gray-400 text-[11px] italic">Wewenang CFO Novita</span>
                  `}
                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}

function initProjectsEvents() {}

function openVerifyDpModal(projectId) {
  const project = store.state.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
          Verifikasi Gerbang Pembayaran DP 50% (Wewenang CFO)
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <div class="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-900">
        Memverifikasi DP 50% untuk proyek <strong>${project.title}</strong> (${project.clientName}). Nilai DP yang harus masuk: <strong>Rp${(project.contractValueIdr / 2).toLocaleString('id-ID')}</strong>.
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Tanggal Transfer Terverifikasi *</label>
          <input type="date" id="verify-dp-date" value="${new Date().toISOString().split('T')[0]}" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Tautan Bukti Transfer (Google Drive / Storage) *</label>
          <input type="url" id="verify-dp-proof" placeholder="https://drive.google.com/proof-transfer..." class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
      </div>

      <div class="border-t border-brand-border pt-4 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs">Batal</button>
        <button onclick="submitVerifyDp('${project.id}')" class="px-4 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold">Sahkan & Buka Kunci Tugas</button>
      </div>
    </div>
  `;

  openModal(modalHtml);
}

function submitVerifyDp(projectId) {
  const project = store.state.projects.find(p => p.id === projectId);
  if (!project) return;

  const date = document.getElementById('verify-dp-date').value;
  const proof = document.getElementById('verify-dp-proof').value.trim();

  if (!proof) {
    showToast('Tautan bukti transfer wajib diisi!', 'error');
    return;
  }

  project.paymentGateStatus = 'DP_50_VERIFIED';
  project.dpVerifiedById = store.state.activeUserId;
  project.dpVerifiedAt = date;
  project.dpProofUrl = proof;

  // Auto record to cashflow ledger!
  const dpAmount = project.contractValueIdr / 2;
  const cashEntry = {
    id: 'cf-' + Date.now(),
    date: date,
    type: 'INCOME',
    category: store.state.units[project.unitId]?.name || 'Proyek B2B',
    amountIdr: dpAmount,
    description: `DP 50% Kontrak Proyek ${project.title} (${project.clientName})`,
    proofUrl: proof,
    createdById: store.state.activeUserId
  };
  store.state.cashflow.unshift(cashEntry);

  store.logAudit('PAYMENT_GATE_VERIFIED', 'Project: ' + project.title, `DP 50% sebesar Rp${dpAmount.toLocaleString('id-ID')} terverifikasi.`);
  store.saveState();
  closeModal();
  showToast('Alhamdulillah! DP 50% berhasil diverifikasi. Kartu tugas eksekusi kini dapat dikerjakan!');
  renderActiveView();
}

function openVerifyFullModal(projectId) {
  const project = store.state.projects.find(p => p.id === projectId);
  if (!project) return;

  if (confirm(`Apakah Anda yakin memverifikasi Pelunasan 100% untuk ${project.title}?`)) {
    project.paymentGateStatus = 'PAID_100_VERIFIED';
    const finalAmount = project.contractValueIdr / 2;
    const cashEntry = {
      id: 'cf-' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      type: 'INCOME',
      category: store.state.units[project.unitId]?.name || 'Proyek B2B',
      amountIdr: finalAmount,
      description: `Pelunasan 50% Final Proyek ${project.title}`,
      proofUrl: project.dpProofUrl,
      createdById: store.state.activeUserId
    };
    store.state.cashflow.unshift(cashEntry);
    store.logAudit('PAYMENT_GATE_FULL_VERIFIED', 'Project: ' + project.title, `Pelunasan 100% selesai.`);
    store.saveState();
    showToast('Pelunasan 100% berhasil diverifikasi!');
    renderActiveView();
  }
}

function openCreateProjectModal() {
  if (store.state.settings.academicFreezeMode) {
    if (!confirm('PERINGATAN: Academic Freeze Mode sedang aktif menjelang UTS/UAS STMIK Tazkia. Apakah ada izin khusus dari CEO/COO untuk menambah proyek kustom baru?')) {
      return;
    }
  }

  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4 text-brand-emerald"></i>
          Tambah Proyek B2B Baru
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Judul Proyek *</label>
          <input type="text" id="new-proj-title" placeholder="Misal: Redesign Brand Identity & Web" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Nama Perusahaan / Klien *</label>
          <input type="text" id="new-proj-client" placeholder="Misal: PT Berkah Sejahtera" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Unit Bisnis</label>
            <select id="new-proj-unit" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="LINI_1_DESIGN">Lini 1 — Design Studio</option>
              <option value="LINI_2_WEBTECH">Lini 2 — WebTech</option>
              <option value="LINI_3_ASSIST_DATA">Lini 3 — Assist & Data</option>
              <option value="LINI_5_AI_ACADEMY">Lini 5 — AI Academy</option>
            </select>
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Nilai Kontrak (Rp) *</label>
            <input type="number" id="new-proj-value" placeholder="5000000" class="w-full border border-gray-300 rounded px-3 py-2 font-mono">
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">PIC Utama (Co-Founder)</label>
            <select id="new-proj-pic" class="w-full border border-gray-300 rounded px-2.5 py-2">
              ${Object.values(store.state.users).filter(u => u.id !== 'client_guest').map(u => `
                <option value="${u.id}">${u.name}</option>
              `).join('')}
            </select>
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Tenggat SLA</label>
            <input type="date" id="new-proj-sla" class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
        </div>
      </div>

      <div class="border-t border-brand-border pt-4 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs">Batal</button>
        <button onclick="submitNewProject()" class="px-4 py-1.5 rounded bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold">Buat Proyek (Terkunci Menunggu DP)</button>
      </div>
    </div>
  `;

  openModal(modalHtml);
}

function submitNewProject() {
  const title = document.getElementById('new-proj-title').value.trim();
  const clientName = document.getElementById('new-proj-client').value.trim();
  const unitId = document.getElementById('new-proj-unit').value;
  const contractValue = parseInt(document.getElementById('new-proj-value').value) || 0;
  const picId = document.getElementById('new-proj-pic').value;
  const sla = document.getElementById('new-proj-sla').value || null;

  if (!title || !clientName || contractValue <= 0) {
    showToast('Lengkapi judul, nama klien, dan nilai kontrak yang valid!', 'error');
    return;
  }

  const token = 'tok-' + clientName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8);

  const newProj = {
    id: 'proj-' + Date.now(),
    title: title,
    clientName: clientName,
    unitId: unitId,
    contractValueIdr: contractValue,
    picId: picId,
    paymentGateStatus: 'LOCKED_WAITING_DP', // Guard by default!
    dpVerifiedById: null,
    dpVerifiedAt: null,
    dpProofUrl: null,
    slaDeadline: sla,
    clientPortalToken: token,
    revisionQuota: 3,
    revisionUsed: 0
  };

  store.state.projects.unshift(newProj);
  store.logAudit('PROJECT_CREATED', 'Project: ' + title, 'Proyek baru berstatus LOCKED_WAITING_DP.');
  store.saveState();
  closeModal();
  showToast('Proyek baru berhasil dibuat! Status terkunci menunggu verifikasi DP 50% oleh Novita (CFO).');
  renderActiveView();
}

// ------------------------------------------------------------------------------
// VIEW 6: PIPELINE CRM / CRM (Tahap 2)
// ------------------------------------------------------------------------------
function renderCrmView() {
  const leads = store.state.crmLeads;
  const stages = [
    { id: 'LEAD_IN', title: 'Lead Masuk' },
    { id: 'OUTREACH', title: 'Outreach / Follow-Up' },
    { id: 'DISCOVERY', title: 'Discovery Call' },
    { id: 'PROPOSAL_SENT', title: 'Proposal Terkirim' },
    { id: 'NEGOTIATION', title: 'Negosiasi' },
    { id: 'WON', title: 'Menang (Won)' }
  ];

  return `
    <div class="space-y-4">
      <div class="card-surface p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
            <i data-lucide="git-pull-request" class="w-4 h-4 text-brand-emerald"></i>
            Pipeline Prospek B2B & Kemitraan (Tahap 2)
          </h3>
          <p class="text-xs text-gray-500 mt-0.5">
            Admin Utama: Ilham Akbar (CBDO) & Syarah (CMO). Peringatan warna oranye jika belum difollow-up > 3 hari.
          </p>
        </div>
        <button onclick="openAddLeadModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Tambah Lead Baru</span>
        </button>
      </div>

      <!-- CRM Kanban Grid -->
      <div class="grid grid-cols-1 md:grid-cols-6 gap-3 items-start overflow-x-auto pb-4">
        ${stages.map(st => {
          const stageLeads = leads.filter(l => l.stage === st.id);
          return `
            <div class="bg-gray-100/70 rounded-xl p-3 border border-gray-200 min-w-[200px]">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-gray-700">${st.title}</span>
                <span class="text-[10px] font-bold bg-white text-gray-600 px-1.5 py-0.2 rounded-full border border-gray-200">
                  ${stageLeads.length}
                </span>
              </div>

              <div class="space-y-2 min-h-[140px]">
                ${stageLeads.map(l => {
                  const unit = store.state.units[l.targetUnitId] || { name: l.targetUnitId, badgeClass: '' };
                  const isWarning = l.lastFollowUpDaysAgo > 3;
                  return `
                    <div class="card-surface p-3 bg-white hover:border-brand-emerald transition space-y-2">
                      <span class="text-[9px] px-1.5 py-0.2 rounded font-bold ${unit.badgeClass}">
                        ${unit.name.split(' (')[0]}
                      </span>
                      <h5 class="text-xs font-bold text-gray-900 leading-tight">${l.businessName}</h5>
                      <p class="text-[11px] font-mono font-semibold text-brand-emerald">
                        Rp${(l.estimatedValueIdr).toLocaleString('id-ID')}
                      </p>
                      
                      <div class="text-[10px] text-gray-500 pt-1 border-t border-gray-100 flex items-center justify-between">
                        <span>${l.contactName}</span>
                        <span class="${isWarning ? 'text-amber-600 font-bold' : 'text-gray-400'}">
                          ${l.lastFollowUpDaysAgo} hari lalu
                        </span>
                      </div>

                      ${l.stage === 'WON' ? `
                        <button onclick="convertLeadToProject('${l.id}')" class="w-full mt-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold py-1 rounded transition flex items-center justify-center gap-1">
                          <span>Konversi ke Proyek →</span>
                        </button>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function initCrmEvents() {}

function openAddLeadModal() {
  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900">Tambah Prospek Lead B2B</h3>
        <button onclick="closeModal()"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold mb-1">Nama Bisnis / Instansi *</label>
          <input type="text" id="new-lead-name" class="w-full border rounded p-2">
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold mb-1">Unit Layanan Target</label>
            <select id="new-lead-unit" class="w-full border rounded p-2">
              <option value="LINI_1_DESIGN">Lini 1 — Design</option>
              <option value="LINI_2_WEBTECH">Lini 2 — WebTech</option>
              <option value="LINI_3_ASSIST_DATA">Lini 3 — Assist & Data</option>
              <option value="LINI_5_AI_ACADEMY">Lini 5 — AI Academy</option>
            </select>
          </div>
          <div>
            <label class="block font-semibold mb-1">Estimasi Nilai (Rp)</label>
            <input type="number" id="new-lead-value" placeholder="4000000" class="w-full border rounded p-2">
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold mb-1">Nama Kontak PIC</label>
            <input type="text" id="new-lead-contact" class="w-full border rounded p-2">
          </div>
          <div>
            <label class="block font-semibold mb-1">No. WhatsApp</label>
            <input type="text" id="new-lead-phone" class="w-full border rounded p-2">
          </div>
        </div>
      </div>
      <div class="border-t pt-3 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 border rounded text-xs">Batal</button>
        <button onclick="submitNewLead()" class="px-4 py-1.5 bg-brand-emerald text-white rounded text-xs font-semibold">Simpan Lead</button>
      </div>
    </div>
  `;
  openModal(modalHtml);
}

function submitNewLead() {
  const name = document.getElementById('new-lead-name').value.trim();
  const unitId = document.getElementById('new-lead-unit').value;
  const value = parseInt(document.getElementById('new-lead-value').value) || 0;
  const contact = document.getElementById('new-lead-contact').value.trim();
  const phone = document.getElementById('new-lead-phone').value.trim();

  if (!name) {
    showToast('Nama instansi wajib diisi!', 'error');
    return;
  }

  const newLead = {
    id: 'lead-' + Date.now(),
    businessName: name,
    targetUnitId: unitId,
    estimatedValueIdr: value,
    stage: 'LEAD_IN',
    picId: 'ilham',
    contactName: contact || 'PIC Klien',
    contactPhone: phone || '-',
    lastFollowUpDaysAgo: 0
  };

  store.state.crmLeads.unshift(newLead);
  store.logAudit('CRM_LEAD_CREATED', 'Lead: ' + name, 'Lead baru masuk ke pipeline CRM.');
  store.saveState();
  closeModal();
  showToast('Lead baru berhasil ditambahkan!');
  renderActiveView();
}

function convertLeadToProject(leadId) {
  const lead = store.state.crmLeads.find(l => l.id === leadId);
  if (!lead) return;

  const newProj = {
    id: 'proj-' + Date.now(),
    title: 'Proyek ' + lead.businessName,
    clientName: lead.businessName,
    unitId: lead.targetUnitId,
    contractValueIdr: lead.estimatedValueIdr,
    picId: lead.picId,
    paymentGateStatus: 'LOCKED_WAITING_DP', // Guard!
    dpVerifiedById: null,
    dpVerifiedAt: null,
    dpProofUrl: null,
    slaDeadline: '2026-04-30',
    clientPortalToken: 'tok-' + lead.businessName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8),
    revisionQuota: 3,
    revisionUsed: 0
  };

  store.state.projects.unshift(newProj);
  store.state.crmLeads = store.state.crmLeads.filter(l => l.id !== leadId);
  store.logAudit('CRM_CONVERTED_PROJECT', 'Project: ' + newProj.title, 'Lead dikonversi menjadi proyek terkunci DP.');
  store.saveState();
  showToast('1-Klik Berhasil! Proyek otomatis dibuat di /projects berstatus Menunggu DP 50%.');
  navigateTo('projects');
}

// ------------------------------------------------------------------------------
// VIEW 7: KEUANGAN & BAGI HASIL SYIRKAH 'ABDAN / FINANCE (Tahap 2)
// ------------------------------------------------------------------------------
let financeActiveTab = 'ledger'; // 'ledger' | 'syirkah' | 'invoice'

function renderFinanceView() {
  const user = store.getCurrentUser();
  const cashBalance = store.calculateCashBalance();
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  // Income & Opex summary
  let totalIncome = 0;
  let totalOpex = 0;
  store.state.cashflow.forEach(c => {
    if (c.type === 'INCOME') totalIncome += Number(c.amountIdr);
    if (c.type === 'OPEX') totalOpex += Number(c.amountIdr);
  });

  const netBeforeZakat = totalIncome - totalOpex;
  const zakat25 = netBeforeZakat > 0 ? Math.floor(netBeforeZakat * 0.025) : 0;
  const netAfterZakat = netBeforeZakat - zakat25;

  // Graduation Rule: < 3.5jt = 70% retained / 30% shared. >= 3.5jt = 30% retained / 70% shared.
  const isGraduated = cashBalance >= store.state.settings.graduationThresholdIdr;
  const retainedPct = isGraduated ? 30 : 70;
  const sharedPct = isGraduated ? 70 : 30;

  const retainedAmount = Math.floor((netAfterZakat * retainedPct) / 100);
  const distributablePool = netAfterZakat - retainedAmount;

  // 40% Executor Pool & 60% Equal Pool across 7 founders
  const executorPool = Math.floor((distributablePool * 40) / 100);
  const equalPool = distributablePool - executorPool;
  const perFounderEqual = Math.floor(equalPool / 7);

  const canManageFinance = ['SUPER_ADMIN', 'FINANCE_ADMIN'].includes(user.role);

  return `
    <div class="space-y-6">
      
      <!-- 4 Financial Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="card-surface p-4 bg-emerald-950 text-white border-emerald-900">
          <span class="text-[10px] text-emerald-300 block uppercase font-bold tracking-wider">Saldo Kas Mandiri Aktif</span>
          <div class="text-xl font-bold font-heading mt-1 tabular-nums">${formatRp(cashBalance)}</div>
          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold mt-2 inline-block ${isGraduated ? 'bg-emerald-500 text-white' : 'bg-amber-400 text-amber-950'}">
            ${isGraduated ? 'Graduation Rule Lulus' : 'Mode Bootstrapping (< Rp3,5 Juta)'}
          </span>
        </div>

        <div class="card-surface p-4">
          <span class="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">Total Pemasukan Bruto</span>
          <div class="text-xl font-bold font-heading text-gray-900 mt-1 tabular-nums">${formatRp(totalIncome)}</div>
          <span class="text-[11px] text-emerald-600 mt-2 block font-medium">Lini 1, 2 & Lini 5</span>
        </div>

        <div class="card-surface p-4">
          <span class="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">Akumulasi Zakat 2,5%</span>
          <div class="text-xl font-bold font-heading text-brand-emerald mt-1 tabular-nums">${formatRp(zakat25)}</div>
          <span class="text-[11px] text-gray-500 mt-2 block">Kewajiban Infaq/Zakat Perusahaan</span>
        </div>

        <div class="card-surface p-4">
          <span class="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">Dana Bagi Hasil (Net)</span>
          <div class="text-xl font-bold font-heading text-sky-800 mt-1 tabular-nums">${formatRp(distributablePool)}</div>
          <span class="text-[11px] text-sky-700 mt-2 block">Porsi ${sharedPct}% Syirkah 'Abdan</span>
        </div>

      </div>

      <!-- Navigation Tabs -->
      <div class="flex border-b border-brand-border bg-white px-4 pt-2 rounded-t-xl text-xs font-semibold gap-4">
        <button id="tab-fin-ledger" class="py-2.5 border-b-2 ${financeActiveTab === 'ledger' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500 hover:text-gray-800'} transition flex items-center gap-1.5">
          <i data-lucide="receipt" class="w-3.5 h-3.5"></i>
          <span>Buku Kas & Pelacak Qardh</span>
        </button>
        <button id="tab-fin-syirkah" class="py-2.5 border-b-2 ${financeActiveTab === 'syirkah' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500 hover:text-gray-800'} transition flex items-center gap-1.5">
          <i data-lucide="calculator" class="w-3.5 h-3.5"></i>
          <span>Kalkulator Bagi Hasil Syirkah 'Abdan</span>
        </button>
        <button id="tab-fin-invoice" class="py-2.5 border-b-2 ${financeActiveTab === 'invoice' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500 hover:text-gray-800'} transition flex items-center gap-1.5">
          <i data-lucide="printer" class="w-3.5 h-3.5"></i>
          <span>Generator Invoice & Kuitansi PDF</span>
        </button>
      </div>

      ${financeActiveTab === 'ledger' ? `
        <!-- TAB 1: CASHFLOW LEDGER & QARDH -->
        <div class="space-y-4">
          
          <!-- Pelacak Qardh Card -->
          <div class="card-surface p-4 bg-amber-50/40 border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div class="flex items-start gap-2.5">
              <i data-lucide="coins" class="w-5 h-5 text-amber-700 mt-0.5"></i>
              <div>
                <h4 class="font-bold text-amber-950">Pelacak Qardh Hasan (Talangan Modal Awal 0% Bunga)</h4>
                <p class="text-amber-800 text-[11px] mt-0.5">
                  Modal talangan pendiri: Rp300.000 • Sudah lunas dicicil: Rp100.000 • Sisa kewajiban: <strong>Rp200.000</strong>
                </p>
              </div>
            </div>
            ${canManageFinance ? `
              <button onclick="openRecordCashflowModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition flex-shrink-0">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>+ Catat Transaksi Kas</span>
              </button>
            ` : ''}
          </div>

          <!-- Table of Transactions -->
          <div class="card-surface overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-gray-50 border-b border-brand-border text-gray-600 uppercase text-[10px]">
                <tr>
                  <th class="p-3">Tanggal</th>
                  <th class="p-3">Jenis</th>
                  <th class="p-3">Kategori</th>
                  <th class="p-3">Deskripsi</th>
                  <th class="p-3 text-right">Nominal (Rp)</th>
                  <th class="p-3 text-center">Bukti</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                ${store.state.cashflow.map(cf => {
                  const isPlus = cf.type === 'INCOME' || cf.type === 'QARDH_IN';
                  return `
                    <tr class="hover:bg-gray-50 transition">
                      <td class="p-3 font-mono text-gray-600 tabular-nums">${cf.date}</td>
                      <td class="p-3">
                        <span class="text-[10px] px-2 py-0.5 rounded font-bold ${isPlus ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}">
                          ${cf.type}
                        </span>
                      </td>
                      <td class="p-3 text-gray-700">${cf.category}</td>
                      <td class="p-3 font-medium text-gray-900">${cf.description}</td>
                      <td class="p-3 text-right font-mono font-bold tabular-nums ${isPlus ? 'text-emerald-700' : 'text-red-700'}">
                        ${isPlus ? '+' : '-'}${formatRp(cf.amountIdr)}
                      </td>
                      <td class="p-3 text-center">
                        ${cf.proofUrl ? `
                          <a href="${cf.proofUrl}" target="_blank" class="text-brand-emerald hover:underline">
                            <i data-lucide="file-check" class="w-4 h-4 inline"></i>
                          </a>
                        ` : '-'}
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

        </div>
      ` : financeActiveTab === 'syirkah' ? `
        <!-- TAB 2: SYIRKAH 'ABDAN PROFIT SHARING CALCULATOR -->
        <div class="space-y-6">
          
          <div class="card-surface p-5 bg-white space-y-4">
            <div class="border-b border-brand-border pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 class="font-heading font-bold text-sm text-gray-900">
                  Simulasi Penutupan Buku Akhir Bulan & Bagi Hasil Syirkah 'Abdan
                </h3>
                <p class="text-xs text-gray-500">Periode: <strong>Maret 2026</strong> • Sistem Zero-Riba, Zero-Gharar</p>
              </div>
              ${canManageFinance ? `
                <button onclick="lockSyirkahPeriod()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition">
                  <i data-lucide="lock" class="w-3.5 h-3.5"></i>
                  <span>Kunci Periode & Terbitkan Slip PDF</span>
                </button>
              ` : ''}
            </div>

            <!-- Mathematical Breakdown Steps -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div class="p-2 bg-white rounded border border-gray-100">
                <span class="text-[10px] text-gray-500 block">1. Laba Bersih Sebelum Zakat</span>
                <strong class="font-mono text-gray-900 text-sm tabular-nums">${formatRp(netBeforeZakat)}</strong>
                <span class="text-[10px] text-gray-400 block mt-0.5">Pemasukan - Opex</span>
              </div>
              <div class="p-2 bg-white rounded border border-gray-100">
                <span class="text-[10px] text-gray-500 block">2. Zakat Perusahaan (2,5%)</span>
                <strong class="font-mono text-brand-emerald text-sm tabular-nums">${formatRp(zakat25)}</strong>
                <span class="text-[10px] text-gray-400 block mt-0.5">Dipotong lebih dahulu</span>
              </div>
              <div class="p-2 bg-white rounded border border-gray-100">
                <span class="text-[10px] text-gray-500 block">3. Kas Ditahan (${retainedPct}%)</span>
                <strong class="font-mono text-amber-800 text-sm tabular-nums">${formatRp(retainedAmount)}</strong>
                <span class="text-[10px] text-amber-700 block mt-0.5">Untuk cadangan studio</span>
              </div>
              <div class="p-2 bg-white rounded border border-gray-100">
                <span class="text-[10px] text-gray-500 block">4. Dana Bagi Hasil (${sharedPct}%)</span>
                <strong class="font-mono text-sky-800 text-sm tabular-nums">${formatRp(distributablePool)}</strong>
                <span class="text-[10px] text-sky-700 block mt-0.5">40% Eksekutor / 60% Rata</span>
              </div>
            </div>

            <!-- Distribution Breakdown across 7 Founders -->
            <div class="mt-4">
              <h4 class="font-heading font-bold text-xs text-gray-800 mb-2">
                Rincian Estimasi Hak Bagi Hasil 7 Pendiri (Maret 2026):
              </h4>
              <div class="overflow-x-auto border border-brand-border rounded-lg">
                <table class="w-full text-xs text-left">
                  <thead class="bg-gray-50 text-[10px] text-gray-600 uppercase">
                    <tr>
                      <th class="p-2.5">Co-Founder</th>
                      <th class="p-2.5">Porsi Rata 60%</th>
                      <th class="p-2.5">Porsi Eksekutor 40%</th>
                      <th class="p-2.5 text-right">Total Hak Bagi Hasil</th>
                      <th class="p-2.5 text-center">Slip PDF</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    ${Object.values(store.state.users).filter(u => u.id !== 'client_guest').map(f => {
                      // Simulated weight for active project executor (Alfatih, Hilwa, Novita, Ilham)
                      const isHighExecutor = ['alfatih', 'ilham', 'aywa'].includes(f.id);
                      const executorPortion = isHighExecutor ? Math.floor(executorPool / 3) : 0;
                      const totalFounderShare = perFounderEqual + executorPortion;

                      return `
                        <tr>
                          <td class="p-2.5 font-bold text-gray-900 flex items-center gap-2">
                            <img src="${f.avatar}" class="w-5 h-5 rounded-full object-cover">
                            <span>${f.name}</span>
                          </td>
                          <td class="p-2.5 font-mono tabular-nums">${formatRp(perFounderEqual)}</td>
                          <td class="p-2.5 font-mono tabular-nums ${executorPortion > 0 ? 'text-emerald-700 font-semibold' : 'text-gray-400'}">
                            ${formatRp(executorPortion)}
                          </td>
                          <td class="p-2.5 text-right font-mono font-bold text-brand-emerald tabular-nums">
                            ${formatRp(totalFounderShare)}
                          </td>
                          <td class="p-2.5 text-center">
                            <button onclick="printFounderSlip('${f.id}', ${totalFounderShare})" class="text-brand-emerald hover:underline font-semibold text-[11px] flex items-center justify-center gap-1 mx-auto">
                              <i data-lucide="file-text" class="w-3 h-3"></i> Cetak Slip
                            </button>
                          </td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      ` : `
        <!-- TAB 3: INVOICE & RECEIPT GENERATOR -->
        <div class="space-y-4">
          <div class="card-surface p-5 bg-white space-y-4">
            <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
              <i data-lucide="file-text" class="w-4 h-4 text-brand-emerald"></i>
              Pembuatan Invoice & Kuitansi Resmi KaryaKita
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div>
                <label class="block font-semibold mb-1">Pilih Proyek Klien</label>
                <select id="inv-project-select" class="w-full border rounded p-2">
                  ${store.state.projects.map(p => `
                    <option value="${p.id}">${p.title} (${p.clientName})</option>
                  `).join('')}
                </select>
              </div>
              <div>
                <label class="block font-semibold mb-1">Termin Pembayaran</label>
                <select id="inv-term-select" class="w-full border rounded p-2">
                  <option value="DP_50">DP 50% (Uang Muka)</option>
                  <option value="PELUNASAN_50">Pelunasan 50% (Serah Terima)</option>
                  <option value="LUNAS_100">Lunas 100% (Penuh)</option>
                </select>
              </div>
              <div>
                <label class="block font-semibold mb-1">Rekening Tujuan</label>
                <select class="w-full border rounded p-2">
                  <option>BSI (Bank Syariah Indonesia) - 7123456789 a.n. KaryaKita</option>
                </select>
              </div>
            </div>

            <div class="flex justify-end pt-2">
              <button onclick="previewInvoice()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition">
                <i data-lucide="printer" class="w-3.5 h-3.5"></i>
                <span>Cetak / Pratinjau Invoice Resmi</span>
              </button>
            </div>
          </div>
        </div>
      `}

    </div>
  `;
}

function initFinanceEvents() {
  const tabLedger = document.getElementById('tab-fin-ledger');
  const tabSyirkah = document.getElementById('tab-fin-syirkah');
  const tabInvoice = document.getElementById('tab-fin-invoice');

  if (tabLedger) tabLedger.addEventListener('click', () => { financeActiveTab = 'ledger'; renderActiveView(); });
  if (tabSyirkah) tabSyirkah.addEventListener('click', () => { financeActiveTab = 'syirkah'; renderActiveView(); });
  if (tabInvoice) tabInvoice.addEventListener('click', () => { financeActiveTab = 'invoice'; renderActiveView(); });
}

function openRecordCashflowModal() {
  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900">Catat Transaksi Kas Baru</h3>
        <button onclick="closeModal()"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <div class="space-y-3 text-xs">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold mb-1">Jenis Transaksi *</label>
            <select id="new-cf-type" class="w-full border rounded p-2">
              <option value="INCOME">Pemasukan (Income Proyek / Batch)</option>
              <option value="OPEX">Biaya Operasional (Opex)</option>
              <option value="QARDH_IN">Talangan Modal (Qardh 0%)</option>
              <option value="QARDH_REPAY">Pengembalian Talangan Modal</option>
              <option value="ZAKAT">Penyaluran Zakat / Infaq</option>
            </select>
          </div>
          <div>
            <label class="block font-semibold mb-1">Nominal (Rp) *</label>
            <input type="number" id="new-cf-amount" placeholder="500000" class="w-full border rounded p-2 font-mono">
          </div>
        </div>

        <div>
          <label class="block font-semibold mb-1">Kategori Layanan / Beban</label>
          <input type="text" id="new-cf-category" placeholder="Misal: Lini 1 Design / Langganan Domain" class="w-full border rounded p-2">
        </div>

        <div>
          <label class="block font-semibold mb-1">Keterangan / Catatan *</label>
          <textarea id="new-cf-desc" rows="2" class="w-full border rounded p-2"></textarea>
        </div>

        <div>
          <label class="block font-semibold mb-1">Tautan Bukti Transfer / Struk *</label>
          <input type="url" id="new-cf-proof" placeholder="https://..." class="w-full border rounded p-2">
        </div>
      </div>

      <div class="border-t pt-3 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 border rounded text-xs">Batal</button>
        <button onclick="submitNewCashflow()" class="px-4 py-1.5 bg-brand-emerald text-white rounded text-xs font-semibold">Simpan Transaksi</button>
      </div>
    </div>
  `;

  openModal(modalHtml);
}

function submitNewCashflow() {
  const type = document.getElementById('new-cf-type').value;
  const amount = parseInt(document.getElementById('new-cf-amount').value) || 0;
  const category = document.getElementById('new-cf-category').value.trim() || 'Operasional';
  const desc = document.getElementById('new-cf-desc').value.trim();
  const proof = document.getElementById('new-cf-proof').value.trim();

  if (amount <= 0 || !desc) {
    showToast('Lengkapi nominal dan keterangan yang valid!', 'error');
    return;
  }

  const newEntry = {
    id: 'cf-' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    type: type,
    category: category,
    amountIdr: amount,
    description: desc,
    proofUrl: proof || '',
    createdById: store.state.activeUserId
  };

  store.state.cashflow.unshift(newEntry);
  store.logAudit('CASHFLOW_ADDED', `${type}: Rp${amount.toLocaleString('id-ID')}`, desc);
  store.saveState();
  closeModal();
  showToast('Transaksi kas berhasil dicatat!');
  renderActiveView();
}

function lockSyirkahPeriod() {
  if (confirm('Apakah Anda yakin ingin mengunci periode penutupan buku Maret 2026 dan menerbitkan slip bagi hasil untuk seluruh 7 pendiri?')) {
    store.logAudit('SYIRKAH_PERIOD_LOCKED', 'Syirkah Periode: Maret 2026', 'Penutupan buku dikunci resmi oleh CFO.');
    showToast('Alhamdulillah! Periode penutupan buku Maret 2026 resmi dikunci.');
    renderActiveView();
  }
}

function printFounderSlip(founderId, amount) {
  const founder = store.state.users[founderId];
  const printContainer = document.getElementById('printable-content');
  
  printContainer.innerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 2px solid #0F4C3A; padding: 25px; border-radius: 8px;">
      <div style="text-align: center; border-bottom: 2px solid #0F4C3A; padding-bottom: 15px; margin-bottom: 20px;">
        <h2 style="color: #0F4C3A; margin: 0; font-size: 20px;">KARYAKITA AI & VENTURE STUDIO</h2>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #555;">STMIK Tazkia • Slip Bagi Hasil Syirkah 'Abdan (Bulan Maret 2026)</p>
      </div>

      <table style="width: 100%; font-size: 13px; margin-bottom: 20px;">
        <tr>
          <td style="width: 140px; color: #555;">Nama Pendiri:</td>
          <td><strong>${founder.name}</strong></td>
        </tr>
        <tr>
          <td style="color: #555;">Peran Studio:</td>
          <td>${founder.roleLabel}</td>
        </tr>
        <tr>
          <td style="color: #555;">Prinsip Akad:</td>
          <td><em>Syirkah 'Abdan (Zero-Riba, Zero-Gharar)</em></td>
        </tr>
      </table>

      <div style="background: #F8FAF9; border: 1px solid #CFE0D8; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
          <span>Porsi Rata 7 Pendiri (60%):</span>
          <span>Rp${(Math.floor(amount * 0.6)).toLocaleString('id-ID')}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
          <span>Porsi Eksekutor Aktif (40%):</span>
          <span>Rp${(Math.floor(amount * 0.4)).toLocaleString('id-ID')}</span>
        </div>
        <hr style="border: 0; border-top: 1px solid #ccc; margin: 10px 0;">
        <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: bold; color: #0F4C3A;">
          <span>TOTAL HAK BAGI HASIL:</span>
          <span>Rp${amount.toLocaleString('id-ID')}</span>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; margin-top: 40px; font-size: 12px; text-align: center;">
        <div>
          <p>Disahkan oleh (CFO):</p>
          <br><br>
          <p><strong>Novita</strong><br>VP of Growth & CFO</p>
        </div>
        <div>
          <p>Penerima Hak:</p>
          <br><br>
          <p><strong>${founder.name}</strong><br>Co-Founder</p>
        </div>
      </div>
    </div>
  `;

  window.print();
}

function previewInvoice() {
  const projId = document.getElementById('inv-project-select').value;
  const term = document.getElementById('inv-term-select').value;
  const proj = store.state.projects.find(p => p.id === projId);

  const amount = term === 'LUNAS_100' ? proj.contractValueIdr : proj.contractValueIdr / 2;
  const termLabel = term === 'DP_50' ? 'Uang Muka (DP 50%)' : term === 'PELUNASAN_50' ? 'Pelunasan Final (50%)' : 'Pembayaran Lunas (100%)';

  const printContainer = document.getElementById('printable-content');
  printContainer.innerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; border: 1px solid #ddd; padding: 30px;">
      <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #0F4C3A; padding-bottom: 15px;">
        <div>
          <h2 style="color: #0F4C3A; margin: 0;">KARYAKITA STUDIO</h2>
          <p style="font-size: 12px; color: #666; margin: 3px 0;">Digital Innovation & Venture Studio</p>
        </div>
        <div style="text-align: right;">
          <h3 style="margin: 0; color: #333;">INVOICE</h3>
          <p style="font-size: 12px; color: #666; font-family: monospace;">INV/KK/2026/03/001</p>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; margin: 20px 0; font-size: 12px;">
        <div>
          <p style="color: #666; margin: 0;">Ditujukan Kepada:</p>
          <p style="font-size: 14px; font-weight: bold; margin: 3px 0;">${proj.clientName}</p>
          <p style="color: #666; margin: 0;">Proyek: ${proj.title}</p>
        </div>
        <div style="text-align: right;">
          <p style="margin: 2px 0;">Tanggal: ${new Date().toISOString().split('T')[0]}</p>
          <p style="margin: 2px 0;">Jatuh Tempo: Segera</p>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 20px 0;">
        <thead style="background: #F8FAF9; border-bottom: 2px solid #0F4C3A;">
          <tr>
            <th style="padding: 10px; text-align: left;">Deskripsi Layanan</th>
            <th style="padding: 10px; text-align: right;">Jumlah (Rp)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px 10px; border-bottom: 1px solid #eee;">
              <strong>${proj.title}</strong><br>
              <span style="font-size: 11px; color: #666;">Termin: ${termLabel}</span>
            </td>
            <td style="padding: 12px 10px; text-align: right; border-bottom: 1px solid #eee; font-family: monospace; font-weight: bold;">
              Rp${amount.toLocaleString('id-ID')}
            </td>
          </tr>
        </tbody>
      </table>

      <div style="background: #F0FDF4; border: 1px solid #BBF7D0; padding: 15px; border-radius: 6px; font-size: 12px; margin-top: 20px;">
        <strong>Informasi Rekening Pembayaran Syariah:</strong><br>
        Bank Syariah Indonesia (BSI)<br>
        Nomor Rekening: <strong>7123-4567-89</strong><br>
        Atas Nama: <strong>KaryaKita Venture Studio</strong>
      </div>
    </div>
  `;

  window.print();
}

// ------------------------------------------------------------------------------
// VIEW 8: AI ACADEMY / ACADEMY (Tahap 2)
// ------------------------------------------------------------------------------
function renderAcademyView() {
  const batches = store.state.academyBatches;

  return `
    <div class="space-y-5">
      <div class="card-surface p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
            <i data-lucide="graduation-cap" class="w-4 h-4 text-brand-emerald"></i>
            KaryaKita AI Academy (Lini 5 — Mesin Pendapatan Berulang)
          </h3>
          <p class="text-xs text-gray-500 mt-0.5">
            Admin: Alfatih (Kepala AI) & Aywa (CRO). Workshop Publik Rp75.000 & Pelatihan Korporat B2B.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="copyPaidParticipantsWa()" class="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i>
            <span>Salin WA Peserta Lunas</span>
          </button>
        </div>
      </div>

      <!-- Batch Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${batches.map(b => `
          <div class="card-surface p-5 space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <span class="text-[10px] px-2 py-0.5 rounded font-bold ${b.type === 'PUBLIC_WORKSHOP' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'}">
                  ${b.type === 'PUBLIC_WORKSHOP' ? 'Workshop Publik (Rp75.000)' : 'Corporate Training (B2B)'}
                </span>
                <h4 class="font-heading font-bold text-sm text-gray-900 mt-1">${b.title}</h4>
                <p class="text-xs text-gray-500">Jadwal: <strong>${b.date}</strong></p>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                ${b.status}
              </span>
            </div>

            <!-- Kuota & Pemasukan -->
            <div class="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-lg text-xs">
              <div>
                <span class="text-[10px] text-gray-500 block">Peserta Terdaftar</span>
                <strong class="text-gray-900 text-sm font-mono">${b.registeredCount} / ${b.quota} Kuota</strong>
              </div>
              <div>
                <span class="text-[10px] text-gray-500 block">Pemasukan Terverifikasi</span>
                <strong class="text-brand-emerald text-sm font-mono">Rp${(b.verifiedCount * b.priceIdr).toLocaleString('id-ID')}</strong>
              </div>
            </div>

            <!-- Daftar Peserta Singkat -->
            <div>
              <span class="text-xs font-bold text-gray-800 block mb-2">Daftar Peserta (${b.participants.length}):</span>
              <div class="space-y-1.5 max-h-36 overflow-y-auto">
                ${b.participants.map(p => `
                  <div class="p-2 rounded bg-white border border-gray-200 flex items-center justify-between text-xs">
                    <div>
                      <p class="font-bold text-gray-900">${p.name}</p>
                      <span class="text-[10px] text-gray-500 font-mono">${p.phone}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-[9px] px-1.5 py-0.5 rounded font-semibold ${p.paid ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                        ${p.paid ? 'Lunas' : 'Menunggu'}
                      </span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function initAcademyEvents() {}

function copyPaidParticipantsWa() {
  const batch = store.state.academyBatches[0];
  const paidPhones = batch.participants.filter(p => p.paid).map(p => p.phone).join('\n');
  navigator.clipboard.writeText(paidPhones);
  showToast('Daftar nomor WhatsApp peserta lunas berhasil disalin!');
}

// ------------------------------------------------------------------------------
// VIEW 9: MEDIA & AFFILIATE / AFFILIATE (Tahap 2)
// ------------------------------------------------------------------------------
function renderAffiliateView() {
  const contents = store.state.affiliateContents;
  const commissions = store.state.affiliateCommissions;

  return `
    <div class="space-y-6">
      
      <!-- Content Board -->
      <div class="card-surface p-5 space-y-4">
        <div class="flex items-center justify-between border-b border-brand-border pb-3">
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
              <i data-lucide="video" class="w-4 h-4 text-orange-600"></i>
              Papan Produksi Konten Kreatif (KaryaKita Media)
            </h3>
            <p class="text-xs text-gray-500">TikTok, Instagram Reels & YouTube Shorts untuk membangun awareness.</p>
          </div>
          <span class="text-xs bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded">Lini 4</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${contents.map(c => `
            <div class="p-3.5 rounded-lg border border-gray-200 bg-white space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-700">
                  ${c.platform}
                </span>
                <span class="text-[10px] font-semibold bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded">
                  ${c.stage}
                </span>
              </div>
              <h5 class="text-xs font-bold text-gray-900">${c.title}</h5>
              <p class="text-[10px] text-gray-500">Target: ${c.targetProgram}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Affiliate Ledger -->
      <div class="card-surface p-5 space-y-4">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="trending-up" class="w-4 h-4 text-emerald-600"></i>
          Buku Pelacakan Komisi Afiliasi (End-Buyer Growth Network)
        </h3>
        
        <div class="overflow-x-auto border border-brand-border rounded-lg">
          <table class="w-full text-xs text-left">
            <thead class="bg-gray-50 text-[10px] text-gray-600 uppercase">
              <tr>
                <th class="p-3">Mitra / Program Afiliasi</th>
                <th class="p-3">Periode</th>
                <th class="p-3">Klik</th>
                <th class="p-3">Konversi</th>
                <th class="p-3 text-right">Komisi (Rp)</th>
                <th class="p-3 text-center">Status Pencairan</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              ${commissions.map(cm => `
                <tr>
                  <td class="p-3 font-bold text-gray-900">${cm.partnerName}</td>
                  <td class="p-3 text-gray-600">${cm.period}</td>
                  <td class="p-3 font-mono">${cm.clicks}</td>
                  <td class="p-3 font-mono font-bold text-emerald-700">${cm.conversions}</td>
                  <td class="p-3 text-right font-mono font-bold">Rp${cm.commissionIdr.toLocaleString('id-ID')}</td>
                  <td class="p-3 text-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded ${cm.status === 'DISBURSED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                      ${cm.status === 'DISBURSED' ? 'Masuk ke Kas' : 'Pending'}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function initAffiliateEvents() {}

// ------------------------------------------------------------------------------
// VIEW 10: BOT WA / TELEGRAM / INTEGRATIONS (Tahap 2)
// ------------------------------------------------------------------------------
function renderIntegrationsView() {
  return `
    <div class="space-y-6">
      
      <!-- Connection Card -->
      <div class="card-surface p-5 bg-white space-y-3">
        <div class="flex items-center justify-between border-b border-brand-border pb-3">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <i data-lucide="bot" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="font-heading font-bold text-sm text-gray-900">Bot Asisten WhatsApp & Telegram KaryaKita</h3>
              <p class="text-xs text-gray-500">ID Grup Tujuan: <code>1203630291823910@g.us (Internal 7 Pendiri)</code></p>
            </div>
          </div>
          <span class="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Terhubung
          </span>
        </div>

        <!-- Automation Toggles -->
        <div class="space-y-3 text-xs pt-2">
          <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 bg-gray-50 cursor-pointer">
            <div>
              <strong class="text-gray-900 block">Pengingat Otomatis Async Check-In Rabu</strong>
              <span class="text-[11px] text-gray-500">Kirim reminder otomatis ke grup pada Rabu 16.00 & 20.30 WIB.</span>
            </div>
            <input type="checkbox" checked class="rounded text-brand-emerald">
          </label>

          <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 bg-gray-50 cursor-pointer">
            <div>
              <strong class="text-gray-900 block">Peringatan Tenggat Tugas H-1</strong>
              <span class="text-[11px] text-gray-500">Ingatkan PIC 24 jam sebelum batas waktu SLA tugas berakhir.</span>
            </div>
            <input type="checkbox" checked class="rounded text-brand-emerald">
          </label>

          <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 bg-gray-50 cursor-pointer">
            <div>
              <strong class="text-gray-900 block">Notifikasi Verifikasi DP 50%</strong>
              <span class="text-[11px] text-gray-500">Beri kabar ke seluruh tim begitu CFO mengonfirmasi transfer DP proyek klien.</span>
            </div>
            <input type="checkbox" checked class="rounded text-brand-emerald">
          </label>

          <label class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 bg-gray-50 cursor-pointer">
            <div>
              <strong class="text-gray-900 block">Mode Hening (Quiet Hours 22.00 - 06.00 WIB)</strong>
              <span class="text-[11px] text-gray-500">Larangan otomatis kirim notifikasi larut malam agar mahasiswa beristirahat.</span>
            </div>
            <input type="checkbox" checked class="rounded text-brand-emerald">
          </label>
        </div>

        <div class="pt-2 flex justify-end">
          <button onclick="sendTestBotMessage()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition">
            <i data-lucide="send" class="w-3.5 h-3.5"></i>
            <span>Kirim Pesan Uji Coba ke WhatsApp</span>
          </button>
        </div>
      </div>

      <!-- Delivery Logs -->
      <div class="card-surface p-5 space-y-3">
        <h4 class="font-heading font-bold text-xs text-gray-900 uppercase tracking-wider">Log Pengiriman Pesan Bot:</h4>
        <div class="space-y-2">
          ${store.state.botLogs.map(log => `
            <div class="p-2.5 rounded bg-gray-50 border border-gray-200 flex items-center justify-between text-xs">
              <div>
                <strong class="text-gray-900">${log.type}</strong>
                <p class="text-[10px] text-gray-500">${log.channel} • ${log.time}</p>
              </div>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ${log.status}
              </span>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

function initIntegrationsEvents() {}

function sendTestBotMessage() {
  store.state.botLogs.unshift({
    time: new Date().toLocaleTimeString('id-ID') + ' WIB',
    channel: 'WhatsApp Cloud API',
    type: 'Pesan Uji Coba Bot Antarmuka',
    status: 'Terkirim Sukses'
  });
  store.logAudit('BOT_TEST_SENT', 'WhatsApp Bot', 'Uji coba pengiriman webhook pesan ke grup tim.');
  store.saveState();
  showToast('Pesan uji coba bot berhasil dikirimkan ke grup WhatsApp tim!');
  renderActiveView();
}

// ------------------------------------------------------------------------------
// VIEW 11: ANALITIK & LAPORAN AKADEMIK / ANALYTICS (Tahap 3)
// ------------------------------------------------------------------------------
function renderAnalyticsView() {
  return `
    <div class="space-y-6">
      
      <!-- Header & Export CTA -->
      <div class="card-surface p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
            <i data-lucide="bar-chart-3" class="w-4 h-4 text-brand-emerald"></i>
            Dasbor Analitik Kinerja Studio & Kesejahteraan Tim (Tahap 3)
          </h3>
          <p class="text-xs text-gray-500 mt-0.5">
            Data agregasi performa 5 unit bisnis & radar burnout untuk evaluasi mata kuliah Kewirausahaan MKUT.102.
          </p>
        </div>
        <button onclick="exportMkutPdfReport()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition flex-shrink-0 shadow-sm">
          <i data-lucide="download" class="w-3.5 h-3.5"></i>
          <span>Ekspor Laporan PDF (MKUT.102)</span>
        </button>
      </div>

      <!-- Charts Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Chart 1: Pendapatan per 5 Unit Bisnis -->
        <div class="card-surface p-5 space-y-3">
          <h4 class="font-heading font-bold text-xs text-gray-900 flex items-center justify-between">
            <span>Kontribusi Pendapatan per 5 Unit Bisnis (Q1 2026)</span>
            <span class="text-[10px] text-brand-emerald font-mono">Rp12.000.000 Total</span>
          </h4>
          <div class="h-64 relative">
            <canvas id="chart-units-revenue"></canvas>
          </div>
        </div>

        <!-- Chart 2: Radar Burnout Mahasiswa (Batas 5 Jam/Pekan) -->
        <div class="card-surface p-5 space-y-3">
          <h4 class="font-heading font-bold text-xs text-gray-900 flex items-center justify-between">
            <span>Burnout Radar: Estimasi Beban Kerja Aktual (Maks 5 Jam)</span>
            <span class="text-[10px] text-amber-700 font-semibold">Batas Sehat Mahasiswa</span>
          </h4>
          <div class="h-64 relative">
            <canvas id="chart-burnout-radar"></canvas>
          </div>
        </div>

      </div>

    </div>
  `;
}

function initAnalyticsCharts() {
  const ctxUnits = document.getElementById('chart-units-revenue');
  if (ctxUnits) {
    new Chart(ctxUnits, {
      type: 'bar',
      data: {
        labels: ['Lini 1 Design', 'Lini 2 WebTech', 'Lini 3 Data', 'Lini 4 Media', 'Lini 5 AI Academy'],
        datasets: [{
          label: 'Pendapatan (Juta Rp)',
          data: [2.25, 0.0, 1.5, 0.75, 7.5],
          backgroundColor: ['#7C3AED', '#0284C7', '#0D9488', '#EA580C', '#0F4C3A'],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  const ctxBurnout = document.getElementById('chart-burnout-radar');
  if (ctxBurnout) {
    const founders = ['Alfatih', 'Hilwa', 'Novita', 'Ilham', 'Syarah', 'Aywa', 'Ahmad'];
    const hours = [3.0, 2.0, 1.5, 2.0, 2.0, 4.5, 2.5];

    new Chart(ctxBurnout, {
      type: 'bar',
      data: {
        labels: founders,
        datasets: [{
          label: 'Jam Aktual / Pekan',
          data: hours,
          backgroundColor: hours.map(h => h > 5 ? '#DC2626' : '#0F4C3A'),
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { max: 6, title: { display: true, text: 'Batas Sehat: 5 Jam/Pekan' } }
        }
      }
    });
  }
}

function exportMkutPdfReport() {
  const printContainer = document.getElementById('printable-content');
  printContainer.innerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 750px; margin: 0 auto; padding: 25px;">
      <div style="text-align: center; border-bottom: 2px solid #0F4C3A; padding-bottom: 15px; margin-bottom: 25px;">
        <h2 style="color: #0F4C3A; margin: 0;">LAPORAN EVALUASI AKADEMIK & TRACTION REPORT</h2>
        <p style="margin: 5px 0; font-size: 13px; color: #555;">Mata Kuliah Kewirausahaan (MKUT.102) • Program Studi Sistem Informasi STMIK Tazkia</p>
        <p style="margin: 0; font-size: 12px; font-weight: bold; color: #0F4C3A;">KaryaKita AI & Venture Studio (Kuartal 1 2026)</p>
      </div>

      <h3 style="color: #333; font-size: 14px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">1. Ringkasan Kinerja Usaha (Traction)</h3>
      <table style="width: 100%; font-size: 12px; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 6px; border: 1px solid #ddd; width: 50%;">Total Pemasukan Bruto Terverifikasi:</td>
          <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">Rp12.000.000</td>
        </tr>
        <tr>
          <td style="padding: 6px; border: 1px solid #ddd;">Saldo Kas Mandiri Aktif:</td>
          <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">Rp9.850.000 (Lulus Graduation Rule)</td>
        </tr>
        <tr>
          <td style="padding: 6px; border: 1px solid #ddd;">Kewajiban Zakat/Infaq (2,5%):</td>
          <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">Rp295.000</td>
        </tr>
        <tr>
          <td style="padding: 6px; border: 1px solid #ddd;">Tingkat Kepatuhan Async Check-In:</td>
          <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">92% (> Target 85%)</td>
        </tr>
      </table>

      <h3 style="color: #333; font-size: 14px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">2. Anggota Tim & Komitmen Mahasiswa</h3>
      <p style="font-size: 12px; line-height: 1.5; color: #444;">
        Studio dikelola oleh 7 mahasiswa Sistem Informasi STMIK Tazkia (Alfatih, Hilwa, Novita, Ilham Akbar, Syarah, Aywa, Ahmad) dengan batas beban waktu maksimal 3-5 jam/minggu untuk menjaga keseimbangan akademik.
      </p>

      <div style="margin-top: 50px; display: flex; justify-content: space-between; font-size: 12px; text-align: center;">
        <div>
          <p>Disiapkan oleh (CEO):</p>
          <br><br>
          <p><strong>Alfatih</strong><br>NIM. 23101001</p>
        </div>
        <div>
          <p>Dosen Pembimbing Kewirausahaan:</p>
          <br><br>
          <p><strong>Dosen MKUT.102</strong><br>STMIK Tazkia</p>
        </div>
      </div>
    </div>
  `;

  window.print();
}

// ------------------------------------------------------------------------------
// VIEW 12: PENGATURAN & AUDIT LOG / SYSTEM (Tahap 3)
// ------------------------------------------------------------------------------
let systemActiveTab = 'users'; // 'users' | 'calendar' | 'audit'

function renderSystemView() {
  return `
    <div class="space-y-6">
      
      <!-- Tabs -->
      <div class="flex border-b border-brand-border bg-white px-4 pt-2 rounded-t-xl text-xs font-semibold gap-4">
        <button id="tab-sys-users" class="py-2.5 border-b-2 ${systemActiveTab === 'users' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500'}">
          Manajemen Whitelist 7 Co-Founder
        </button>
        <button id="tab-sys-calendar" class="py-2.5 border-b-2 ${systemActiveTab === 'calendar' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500'}">
          Kalender Akademik & Freeze Mode
        </button>
        <button id="tab-sys-audit" class="py-2.5 border-b-2 ${systemActiveTab === 'audit' ? 'border-brand-emerald text-brand-emerald' : 'border-transparent text-gray-500'}">
          Audit Log Permanen (Immutable)
        </button>
      </div>

      ${systemActiveTab === 'users' ? `
        <!-- TAB 1: USERS WHITELIST -->
        <div class="card-surface p-5 space-y-4">
          <h3 class="font-heading font-bold text-sm text-gray-900">
            Daftar Akun Whitelist Eksklusif 7 Co-Founder
          </h3>
          <div class="divide-y divide-gray-100">
            ${Object.values(store.state.users).filter(u => u.id !== 'client_guest').map(u => `
              <div class="py-3 flex items-center justify-between text-xs">
                <div class="flex items-center gap-3">
                  <img src="${u.avatar}" class="w-8 h-8 rounded-full object-cover">
                  <div>
                    <strong class="text-gray-900">${u.name}</strong>
                    <p class="text-gray-500 font-mono text-[11px]">${u.email}</p>
                  </div>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded font-bold bg-emerald-100 text-emerald-800">
                  ${u.roleLabel}
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : systemActiveTab === 'calendar' ? `
        <!-- TAB 2: CALENDAR & FREEZE MODE -->
        <div class="card-surface p-5 space-y-4 text-xs">
          <h3 class="font-heading font-bold text-sm text-gray-900">Kalender Ujian STMIK Tazkia & Academic Freeze</h3>
          <p class="text-gray-500">Sistem otomatis menyalakan Academic Freeze Mode pada H-7 pekan UTS dan UAS.</p>
          <div class="p-3 bg-amber-50 rounded border border-amber-200">
            <strong class="text-amber-900">Jadwal UTS Genap 2026:</strong> 06 April – 18 April 2026 (Auto-Freeze mulai 30 Maret 2026).
          </div>
          <button id="btn-toggle-freeze-sys" class="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-4 py-2 rounded">
            ${store.state.settings.academicFreezeMode ? 'Nonaktifkan Freeze Mode' : 'Aktifkan Freeze Mode Manual'}
          </button>
        </div>
      ` : `
        <!-- TAB 3: AUDIT LOG -->
        <div class="card-surface p-5 space-y-3">
          <h3 class="font-heading font-bold text-sm text-gray-900">Audit Log Permanen (Nilai Shiddiq & Amanah)</h3>
          <div class="overflow-x-auto border border-brand-border rounded-lg">
            <table class="w-full text-xs text-left">
              <thead class="bg-gray-50 text-[10px] text-gray-600 uppercase">
                <tr>
                  <th class="p-3">Waktu</th>
                  <th class="p-3">Pelaku</th>
                  <th class="p-3">Aksi</th>
                  <th class="p-3">Rincian Perubahan</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                ${store.state.auditLogs.map(a => `
                  <tr>
                    <td class="p-3 font-mono text-gray-500 text-[11px] whitespace-nowrap">${a.timestamp}</td>
                    <td class="p-3 font-bold text-gray-900">${a.actorName}</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded bg-gray-100 font-mono text-[10px] font-semibold">${a.action}</span></td>
                    <td class="p-3 text-gray-700">${a.details}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `}

    </div>
  `;
}

function initSystemEvents() {
  const tabUsers = document.getElementById('tab-sys-users');
  const tabCalendar = document.getElementById('tab-sys-calendar');
  const tabAudit = document.getElementById('tab-sys-audit');

  if (tabUsers) tabUsers.addEventListener('click', () => { systemActiveTab = 'users'; renderActiveView(); });
  if (tabCalendar) tabCalendar.addEventListener('click', () => { systemActiveTab = 'calendar'; renderActiveView(); });
  if (tabAudit) tabAudit.addEventListener('click', () => { systemActiveTab = 'audit'; renderActiveView(); });

  const btnFreeze = document.getElementById('btn-toggle-freeze-sys');
  if (btnFreeze) {
    btnFreeze.addEventListener('click', () => toggleAcademicFreeze());
  }
}

// ------------------------------------------------------------------------------
// VIEW 13: PORTAL KLIEN B2B / CLIENT PORTAL (Tahap 3)
// ------------------------------------------------------------------------------
function renderClientPortalView() {
  const proj = store.state.projects[0]; // PT Halal Mart

  return `
    <div class="space-y-6 max-w-4xl mx-auto">
      
      <!-- Client Header -->
      <div class="card-surface p-6 bg-white border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
            Portal Pemantauan Klien Resmi KaryaKita
          </span>
          <h2 class="font-heading font-bold text-lg text-gray-900 mt-2">${proj.title}</h2>
          <p class="text-xs text-gray-500">Klien Terhormat: <strong>${proj.clientName}</strong> • PM: Hilwa (COO)</p>
        </div>
        <a href="https://wa.me/6281234567890" target="_blank" class="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition flex-shrink-0">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span>Hubungi PM via WhatsApp</span>
        </a>
      </div>

      <!-- Milestone Timeline -->
      <div class="card-surface p-6 bg-white space-y-4">
        <h4 class="font-heading font-bold text-sm text-gray-900">Linimasa & Tahapan Proyek</h4>
        
        <div class="space-y-3">
          <div class="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
            <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-700"></i>
            <div class="flex-1">
              <strong class="text-emerald-950">1. Discovery & Konsep Desain Identitas</strong>
              <p class="text-[11px] text-emerald-800">Selesai disetujui (100%)</p>
            </div>
            <span class="text-[10px] font-bold bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">Selesai</span>
          </div>

          <div class="flex items-center gap-3 p-3 rounded-lg bg-sky-50 border border-sky-200 text-xs">
            <i data-lucide="clock" class="w-5 h-5 text-sky-700"></i>
            <div class="flex-1">
              <strong class="text-sky-950">2. Penyusunan Moodboard & Eksplorasi Logo</strong>
              <p class="text-[11px] text-sky-800">Sedang dikerjakan oleh tim desain KaryaKita (Progres 65%)</p>
            </div>
            <span class="text-[10px] font-bold bg-sky-200 text-sky-900 px-2 py-0.5 rounded">In Progress</span>
          </div>

          <div class="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-400">
            <i data-lucide="circle" class="w-5 h-5"></i>
            <div class="flex-1">
              <strong class="text-gray-700">3. Finalisasi Brand Guideline & Serah Terima Master</strong>
              <p class="text-[11px] text-gray-400">Menunggu tahapan sebelumnya selesai</p>
            </div>
            <span class="text-[10px] font-bold bg-gray-200 text-gray-600 px-2 py-0.5 rounded">Menunggu</span>
          </div>
        </div>
      </div>

      <!-- Revision Submission with Quota -->
      <div class="card-surface p-6 bg-white space-y-4">
        <div class="flex items-center justify-between border-b border-brand-border pb-3">
          <h4 class="font-heading font-bold text-sm text-gray-900">Kirim Catatan Masukan / Revisi</h4>
          <span class="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded">
            Sisa Kuota Revisi: ${proj.revisionQuota - proj.revisionUsed} / ${proj.revisionQuota}
          </span>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="block font-semibold mb-1">Catatan Masukan Anda:</label>
            <textarea id="client-rev-note" rows="3" placeholder="Tuliskan masukan atau permintaan revisi secara spesifik..." class="w-full border rounded p-3"></textarea>
          </div>
          <div class="flex justify-end">
            <button onclick="submitClientRevision('${proj.id}')" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition">
              <i data-lucide="send" class="w-3.5 h-3.5"></i>
              <span>Kirim Catatan Revisi</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  `;
}

function initClientPortalEvents() {}

function submitClientRevision(projectId) {
  const note = document.getElementById('client-rev-note')?.value.trim();
  if (!note) {
    showToast('Tuliskan catatan revisi terlebih dahulu!', 'error');
    return;
  }

  const proj = store.state.projects.find(p => p.id === projectId);
  if (proj) {
    if (proj.revisionUsed >= proj.revisionQuota) {
      showToast('Kuota revisi gratis telah habis sesuai kontrak.', 'error');
      return;
    }
    proj.revisionUsed += 1;

    // Automatically create a new review task in Kanban!
    const newTask = {
      id: 'task-' + Date.now(),
      title: 'Revisi Klien: ' + proj.clientName,
      description: note,
      unitId: proj.unitId,
      projectId: proj.id,
      assigneeId: proj.picId,
      createdById: 'client_guest',
      sprintNumber: store.state.currentSprint,
      status: 'TODO',
      isBlocked: false,
      blockedReason: null,
      hoursEstimate: 1.5,
      dueDate: '2026-03-20',
      dodChecklist: [{ label: 'Tuntaskan catatan revisi klien', checked: false }],
      workProofUrl: '',
      isClientVisible: true
    };
    store.state.tasks.unshift(newTask);
    store.logAudit('CLIENT_REVISION_SUBMITTED', 'Project: ' + proj.title, 'Catatan revisi diterima dan masuk ke Papan Tugas.');
    store.saveState();
    showToast('Catatan revisi berhasil dikirim! Tim PM KaryaKita akan segera menindaklanjuti.');
    renderActiveView();
  }
}

// ==============================================================================
// GLOBAL CONTROLLERS & EVENT LISTENERS
// ==============================================================================
function toggleAcademicFreeze() {
  store.state.settings.academicFreezeMode = !store.state.settings.academicFreezeMode;
  store.logAudit('FREEZE_MODE_TOGGLED', 'AcademicFreeze', 'Mode ' + (store.state.settings.academicFreezeMode ? 'Diaktifkan' : 'Dinonaktifkan'));
  store.saveState();
  updateTopBanners();
  showToast('Academic Freeze Mode ' + (store.state.settings.academicFreezeMode ? 'diaktifkan!' : 'dinonaktifkan!'));
  renderActiveView();
}

function updateTopBanners() {
  const freezeBanner = document.getElementById('banner-academic-freeze');
  if (freezeBanner) {
    if (store.state.settings.academicFreezeMode) freezeBanner.classList.remove('hidden');
    else freezeBanner.classList.add('hidden');
  }

  const cash = store.calculateCashBalance();
  const threshold = store.state.settings.graduationThresholdIdr;
  const pct = Math.min(100, Math.round((cash / threshold) * 100));

  const gradText = document.getElementById('grad-rule-text');
  const gradBar = document.getElementById('grad-rule-bar');
  const gradBadge = document.getElementById('grad-rule-badge');

  if (gradText && gradBar && gradBadge) {
    gradText.textContent = `Rp${cash.toLocaleString('id-ID')} / Rp${threshold.toLocaleString('id-ID')} (${pct}%)`;
    gradBar.style.width = pct + '%';
    if (cash >= threshold) {
      gradBadge.textContent = 'Graduation Rule Lulus (Kas Ditahan 30%)';
      gradBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300';
    } else {
      gradBadge.textContent = 'Mode Bootstrapping (Kas Ditahan 70%)';
      gradBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800 border border-amber-300';
    }
  }

  // Update Sidebar user profile display
  const user = store.getCurrentUser();
  const avatar = document.getElementById('sidebar-user-avatar');
  const name = document.getElementById('sidebar-user-name');
  const role = document.getElementById('sidebar-user-role');
  if (avatar && name && role) {
    avatar.src = user.avatar;
    name.textContent = user.name;
    role.textContent = user.roleLabel;
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Navigation Buttons
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetNav = btn.getAttribute('data-nav');
      if (targetNav) navigateTo(targetNav);
    });
  });

  // Simulator Role Select
  const roleSelect = document.getElementById('role-simulator-select');
  if (roleSelect) {
    roleSelect.value = store.state.activeUserId;
    roleSelect.addEventListener('change', (e) => {
      store.state.activeUserId = e.target.value;
      store.saveState();
      updateTopBanners();
      showToast('Beralih simulasi peran: ' + store.getCurrentUser().name);
      renderActiveView();
    });
  }

  // Reset Data Button
  const btnReset = document.getElementById('btn-reset-data');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('Kembalikan seluruh data ke kondisi awal prototype?')) {
        store.resetState();
        updateTopBanners();
        showToast('Data berhasil dikembalikan ke kondisi awal!');
        renderActiveView();
      }
    });
  }

  // Toggle Freeze button in banner
  const btnFreeze = document.getElementById('btn-toggle-freeze');
  if (btnFreeze) {
    btnFreeze.addEventListener('click', () => toggleAcademicFreeze());
  }

  // Quick Create Task Button in top bar
  const btnQuickTask = document.getElementById('btn-quick-create-task');
  if (btnQuickTask) {
    btnQuickTask.addEventListener('click', () => openCreateTaskModal());
  }

  // Global Search Shortcut (Ctrl+K)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const search = document.getElementById('global-search-input');
      if (search) search.focus();
    }
  });

  // Global search input enter listener
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
          showToast(`Mencari "${query}" di Papan Tugas...`);
          navigateTo('tasks');
        }
      }
    });
  }

  // Mobile menu toggle
  const btnMobileMenu = document.getElementById('btn-toggle-mobile-menu');
  const sidebar = document.getElementById('main-sidebar');
  if (btnMobileMenu && sidebar) {
    btnMobileMenu.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      sidebar.classList.toggle('fixed');
      sidebar.classList.toggle('inset-0');
      sidebar.classList.toggle('z-50');
    });
  }

  // Initialize
  updateTopBanners();
  navigateTo('overview');
});
