/**
 * ==============================================================================
 * KARYAKITA HUB — Internal Venture Studio Operating System
 * Aplikasi Web Dashboard Lengkap (Tahap 1, 2 & 3)
 * Organisasi: KaryaKita AI & Venture Studio (7 Mahasiswa SI STMIK Tazkia)
 * ==============================================================================
 */

// Global State Key for LocalStorage Persistence
const STORAGE_KEY = 'karyakita_hub_scaleup_v1';

// Capacity Status Metadata for Student Co-Founders
const CAPACITY_META = {
  AVAILABLE: { label: 'Tersedia (4–5j)', dot: 'bg-emerald-500', badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  BUSY_LECTURES: { label: 'Padat Kuliah', dot: 'bg-amber-500', badgeClass: 'bg-amber-100 text-amber-800 border-amber-300' },
  EXAM_MODE: { label: 'Mode Ujian', dot: 'bg-rose-500', badgeClass: 'bg-rose-100 text-rose-800 border-rose-300' },
  NEEDS_SUPPORT: { label: 'Butuh Bantuan', dot: 'bg-sky-500', badgeClass: 'bg-sky-100 text-sky-800 border-sky-300' },
};

// Initial Seed Data (Full Scale-Up Clean Production Workspace)
const INITIAL_STATE = {
  activeUserId: 'alfatih',
  authSession: {
    isAuthenticated: false,
    userId: null
  },
  currentSprint: 1,
  themePreference: 'light',
  settings: {
    academicFreezeMode: false,
    graduationThresholdIdr: 3500000,
    qardhInitialTotalIdr: 0,
    qardhRepaidIdr: 0,
  },
  users: {
    alfatih: {
      id: 'alfatih',
      username: 'alfatih',
      password: 'Kk#Fatih2026!x9',
      mustChangePassword: true,
      hasCompletedOnboarding: false,
      passwordChangedAt: null,
      name: 'Syauqi Muhammad Al Fatih',
      role: 'SUPER_ADMIN',
      roleLabel: 'CEO & CTO',
      email: 'alfathblv@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120',
      ownedUnits: ['WEBTECH_L2', 'AI_ACADEMY_L5', 'INTERNAL_OPS'],
      capacityStatus: 'AVAILABLE',
      backupApproverId: 'hilwa',
      isActiveCofounder: true
    },
    hilwa: {
      id: 'hilwa',
      username: 'hilwa',
      password: 'Kk#Hilwa98!mQ4',
      mustChangePassword: true,
      hasCompletedOnboarding: false,
      passwordChangedAt: null,
      name: 'Hilwa Mufida',
      role: 'OPS_ADMIN',
      roleLabel: 'COO & Head of PM',
      email: 'hilwa.mufida@karyakita.id',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120',
      ownedUnits: ['INTERNAL_OPS', 'ASSIST_DATA_L3'],
      capacityStatus: 'AVAILABLE',
      backupApproverId: 'alfatih',
      isActiveCofounder: true
    },
    novita: {
      id: 'novita',
      username: 'novita',
      password: 'Kk#Novita45$zR7',
      mustChangePassword: true,
      hasCompletedOnboarding: false,
      passwordChangedAt: null,
      name: 'Novita Rani',
      role: 'FINANCE_ADMIN',
      roleLabel: 'CFO & VP Growth Systems',
      email: 'novita.rani@karyakita.id',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120',
      ownedUnits: ['INTERNAL_OPS'],
      capacityStatus: 'AVAILABLE',
      backupApproverId: 'hilwa',
      isActiveCofounder: true
    },
    ilham: {
      id: 'ilham',
      username: 'ilham',
      password: 'Kk#Ilham72*wP3',
      mustChangePassword: true,
      hasCompletedOnboarding: false,
      passwordChangedAt: null,
      name: 'Ilham Akbar',
      role: 'UNIT_LEAD',
      roleLabel: 'CBDO & CDO',
      email: 'ilham.akbar@karyakita.id',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120',
      ownedUnits: ['ASSIST_DATA_L3'],
      capacityStatus: 'AVAILABLE',
      backupApproverId: 'syarah',
      isActiveCofounder: true
    },
    syarah: {
      id: 'syarah',
      username: 'syarah',
      password: 'Kk#Syarah36&tL8',
      mustChangePassword: true,
      hasCompletedOnboarding: false,
      passwordChangedAt: null,
      name: 'Syarah Fauziah',
      role: 'UNIT_LEAD',
      roleLabel: 'CMO',
      email: 'syarah.fauziah@karyakita.id',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120',
      ownedUnits: ['MEDIA_AFFILIATE_L4'],
      capacityStatus: 'AVAILABLE',
      backupApproverId: 'nazwa',
      isActiveCofounder: true
    },
    nazwa: {
      id: 'nazwa',
      username: 'nazwa',
      password: 'Kk#Nazwa81^yK5',
      mustChangePassword: true,
      hasCompletedOnboarding: false,
      passwordChangedAt: null,
      name: 'Nazwa Azahra',
      role: 'UNIT_LEAD',
      roleLabel: 'CRO',
      email: 'nazwa.azahra@karyakita.id',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120',
      ownedUnits: ['AI_ACADEMY_L5', 'MEDIA_AFFILIATE_L4'],
      capacityStatus: 'AVAILABLE',
      backupApproverId: 'syarah',
      isActiveCofounder: true
    },
    ahmad: {
      id: 'ahmad',
      username: 'ahmad',
      password: 'Kk#Ahmad64@sB2',
      mustChangePassword: true,
      hasCompletedOnboarding: false,
      passwordChangedAt: null,
      name: 'Ahmad Maulana',
      role: 'UNIT_LEAD',
      roleLabel: 'Creative Director',
      email: 'ahmad.maulana@karyakita.id',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120',
      ownedUnits: ['DESIGN_L1', 'MEDIA_AFFILIATE_L4'],
      capacityStatus: 'AVAILABLE',
      backupApproverId: 'nazwa',
      isActiveCofounder: true
    }
  },
  units: {
    LINI_1_DESIGN: { code: 'LINI_1_DESIGN', name: 'KaryaKita Design (Lini 1)', badgeClass: 'badge-unit-lini1', desc: 'Brand Identity & UI/UX Studio' },
    LINI_2_WEBTECH: { code: 'LINI_2_WEBTECH', name: 'KaryaKita WebTech (Lini 2)', badgeClass: 'badge-unit-lini2', desc: 'Custom Web & Scalable Platform' },
    LINI_3_ASSIST_DATA: { code: 'LINI_3_ASSIST_DATA', name: 'KaryaKita Assist & Data (Lini 3)', badgeClass: 'badge-unit-lini3', desc: 'Analysis & Documentation' },
    LINI_4_MEDIA_AFFILIATE: { code: 'LINI_4_MEDIA_AFFILIATE', name: 'KaryaKita Media & Affiliate (Lini 4)', badgeClass: 'badge-unit-lini4', desc: 'Video & Affiliate Network' },
    LINI_5_AI_ACADEMY: { code: 'LINI_5_AI_ACADEMY', name: 'KaryaKita AI Academy (Lini 5)', badgeClass: 'badge-unit-lini5', desc: 'Corporate & Public Workshop' },
    INTERNAL_OPS: { code: 'INTERNAL_OPS', name: 'Operasional Internal', badgeClass: 'badge-unit-ops', desc: 'Tata Kelola Studio & MKUT.102' }
  },
  projects: [],
  tasks: [],
  checkins: [],
  syuraMinutes: [],
  archives: [],
  cashflow: [],
  crmLeads: [],
  academyBatches: [],
  affiliateContents: [],
  affiliateCommissions: [],
  revisionTriage: [],
  syirkahPeriod: {
    status: 'DRAFT', // 'DRAFT' | 'REVIEW_48H' | 'LOCKED'
    reviewEndsAt: null,
    approvals: {}
  },
  botLogs: [],
  auditLogs: [
    {
      id: 'aud-init',
      actorName: 'Sistem KaryaKita Hub',
      action: 'SYSTEM_INITIALIZED',
      entity: 'SystemConfig',
      details: 'Sistem Operasi KaryaKita Hub Full Scale-Up aktif dengan 7 co-founder dan tata kelola syariah terpadu.',
      timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB'
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
        const parsed = JSON.parse(stored);
        if (!parsed.users) parsed.users = {};

        // Migrate syaraf to syarah if exists
        if (parsed.users.syaraf && !parsed.users.syarah) {
          parsed.users.syarah = { ...parsed.users.syaraf, id: 'syarah', username: 'syarah', name: 'Syarah Fauziah', email: 'syarah.fauziah@karyakita.id' };
          delete parsed.users.syaraf;
        }

        // Ensure all users have credentials & onboarding flags
        Object.keys(INITIAL_STATE.users).forEach(uid => {
          if (!parsed.users[uid]) {
            parsed.users[uid] = { ...INITIAL_STATE.users[uid] };
          } else {
            parsed.users[uid].username = parsed.users[uid].username || INITIAL_STATE.users[uid].username;
            parsed.users[uid].password = parsed.users[uid].password || INITIAL_STATE.users[uid].password;
            if (parsed.users[uid].mustChangePassword === undefined) {
              parsed.users[uid].mustChangePassword = INITIAL_STATE.users[uid].mustChangePassword;
            }
            if (parsed.users[uid].hasCompletedOnboarding === undefined) {
              parsed.users[uid].hasCompletedOnboarding = false;
            }
          }
        });

        if (parsed.users.syarah) {
          parsed.users.syarah.name = 'Syarah Fauziah';
          parsed.users.syarah.email = 'syarah.fauziah@karyakita.id';
        }

        if (!parsed.authSession) {
          parsed.authSession = { isAuthenticated: false, userId: null };
        }
        return parsed;
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
    const uid = this.state.activeUserId === 'syaraf' ? 'syarah' : this.state.activeUserId;
    return this.state.users[uid] || this.state.users.alfatih;
  }

  getActiveCofounders() {
    return Object.values(this.state.users).filter(u => u.isActiveCofounder);
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

  calculateUserWeeklyHours(userId, sprint = null) {
    const currentSprint = sprint !== null ? sprint : (this.state.currentSprint || 1);
    return this.state.tasks
      .filter(t => t.assigneeId === userId && t.sprintNumber === currentSprint && t.status !== 'DONE')
      .reduce((sum, t) => sum + Number(t.hoursEstimate || 0), 0);
  }

  // Calculate 4-Pillar Weighted Contribution Points for Syirkah 'Abdan
  calculateWeightedContribution(userId) {
    // 1. Task Execution Points (S=1, M=2, L=3) from DONE tasks
    const completedTasks = this.state.tasks.filter(t => t.assigneeId === userId && t.status === 'DONE');
    const taskPoints = completedTasks.reduce((sum, t) => sum + Number(t.contributionWeight || (t.hoursEstimate >= 3 ? 3 : t.hoursEstimate >= 2 ? 2 : 1)), 0);

    // 2. Acquisition & CRM Points (5 pts per won deal)
    const wonLeads = this.state.crmLeads.filter(l => l.ownerId === userId && l.stage === 'WON');
    const crmPoints = wonLeads.length * 5;

    // 3. Governance, Ops & Finance Points (3 pts per timely check-in + audit activities)
    const userCheckins = this.state.checkins.filter(c => c.userId === userId && !c.isLate);
    const opsPoints = userCheckins.length * 3;

    // 4. AI Academy & Media Content Points (2 pts per published post/active batch PIC)
    const mediaCount = this.state.affiliateContents.filter(c => c.picId === userId).length;
    const batchCount = this.state.academyBatches.filter(b => b.picId === userId).length;
    const mediaPoints = (mediaCount + batchCount) * 2;

    const totalPoints = taskPoints + crmPoints + opsPoints + mediaPoints;
    return {
      taskPoints,
      crmPoints,
      opsPoints,
      mediaPoints,
      totalPoints: totalPoints || 1 // Base baseline
    };
  }

  // Audit Log Recorder
  logAudit(action, entity, details) {
    const actor = this.getCurrentUser();
    const newLog = {
      id: 'aud-' + Date.now(),
      actorName: actor.name + ' (' + (actor.roleLabel || actor.role) + ')',
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
// THEME & ADAPTIVE DARK MODE CONTROLLER
// ==============================================================================
function initTheme() {
  const saved = localStorage.getItem('karyakita_theme') || store.state.themePreference || 'light';
  applyTheme(saved);
}

function applyTheme(theme) {
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  const themeIcon = document.getElementById('theme-toggle-icon');
  if (themeIcon) {
    themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons({ root: themeIcon.parentElement });
  }
  store.state.themePreference = isDark ? 'dark' : 'light';
}

function toggleTheme() {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  const next = isCurrentlyDark ? 'light' : 'dark';
  localStorage.setItem('karyakita_theme', next);
  applyTheme(next);
  store.saveState();
  showToast('Beralih ke mode ' + (next === 'dark' ? 'gelap (Deep Forest Slate)' : 'terang (Warm Daylight)'));
}

// ==============================================================================
// CAPACITY STATUS CONTROLLER (SUPPORTIVE RHYTHM PULSE)
// ==============================================================================
function openCapacityModal() {
  const user = store.getCurrentUser();
  const currentCap = user.capacityStatus || 'AVAILABLE';

  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="heart-pulse" class="w-4 h-4 text-brand-emerald"></i>
          Update Kapasitas Kuliah & Beban Kerja (${user.name})
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <p class="text-xs text-gray-500">
        Pilih status ketersediaan Anda pekan ini agar rekan tim mengetahui kapasitas Anda dan dapat saling mendukung tanpa beban berlebih.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        ${Object.entries(CAPACITY_META).map(([key, meta]) => `
          <button onclick="setCapacityStatus('${key}')" class="p-3.5 rounded-xl border text-left flex items-start gap-3 transition ${currentCap === key ? 'border-brand-emerald bg-emerald-50/60 ring-2 ring-brand-emerald/20 font-bold' : 'border-gray-200 hover:border-gray-300 bg-white'}">
            <span class="w-3 h-3 rounded-full ${meta.dot} mt-0.5 flex-shrink-0"></span>
            <div>
              <strong class="text-gray-900 block">${meta.label}</strong>
              <p class="text-[11px] text-gray-500 font-normal mt-0.5">
                ${key === 'AVAILABLE' ? 'Siap ambil tugas studio normal (3–5 jam/pekan)' :
                  key === 'BUSY_LECTURES' ? 'Jadwal kuliah padat/tugas kampus menumpuk (1–2 jam)' :
                  key === 'EXAM_MODE' ? 'Pekan UTS/UAS STMIK Tazkia (Otoritas approval didelegasikan)' :
                  'Memerlukan bantuan rekan tim untuk menuntaskan SLA'}
              </p>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  openModal(modalHtml);
}

function setCapacityStatus(newStatus) {
  const user = store.getCurrentUser();
  user.capacityStatus = newStatus;
  store.logAudit('CAPACITY_STATUS_UPDATED', user.name, 'Status kapasitas diperbarui menjadi ' + CAPACITY_META[newStatus].label);
  store.saveState();
  closeModal();
  updateTopBanners();
  showToast('Status kapasitas Anda diperbarui: ' + CAPACITY_META[newStatus].label);
  renderActiveView();
}

// ==============================================================================
// MOBILE THUMB-ZONE QUICK ACTION SHEET
// ==============================================================================
function openQuickActionSheet() {
  const user = store.getCurrentUser();
  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="zap" class="w-4 h-4 text-brand-emerald"></i>
          Aksi Cepat & Akses Seluruh Modul
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <div class="grid grid-cols-2 gap-2.5 text-xs">
        <button onclick="closeModal(); navigateTo('reports');" class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-brand-emerald font-bold flex items-center gap-2 text-left">
          <i data-lucide="clock" class="w-4 h-4"></i>
          <span>⚡ Check-In 30 Detik</span>
        </button>
        <button onclick="closeModal(); openCreateTaskModal();" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-bold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="plus-circle" class="w-4 h-4 text-brand-emerald"></i>
          <span>+ Buat Tugas Baru</span>
        </button>
        <button onclick="closeModal(); navigateTo('projects');" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="briefcase" class="w-4 h-4 text-emerald-700"></i>
          <span>Proyek & Triage</span>
        </button>
        <button onclick="closeModal(); navigateTo('finance');" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="wallet" class="w-4 h-4 text-amber-700"></i>
          <span>Keuangan & Syirkah</span>
        </button>
        <button onclick="closeModal(); navigateTo('crm');" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="kanban" class="w-4 h-4 text-sky-700"></i>
          <span>Pipeline CRM</span>
        </button>
        <button onclick="closeModal(); navigateTo('academy');" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="graduation-cap" class="w-4 h-4 text-emerald-800"></i>
          <span>AI Academy (Lini 5)</span>
        </button>
        <button onclick="closeModal(); navigateTo('affiliate');" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="clapperboard" class="w-4 h-4 text-orange-600"></i>
          <span>Media & Affiliate</span>
        </button>
        <button onclick="closeModal(); navigateTo('archives');" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="folder-archive" class="w-4 h-4 text-teal-700"></i>
          <span>Arsip & Vault (NDA)</span>
        </button>
        <button onclick="closeModal(); navigateTo('analytics');" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="bar-chart-3" class="w-4 h-4 text-purple-700"></i>
          <span>Analitik & Wellbeing</span>
        </button>
        <button onclick="closeModal(); navigateTo('system');" class="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-semibold flex items-center gap-2 text-left hover:bg-gray-100">
          <i data-lucide="settings" class="w-4 h-4 text-gray-600"></i>
          <span>Sistem & Audit Log</span>
        </button>
      </div>
    </div>
  `;
  openModal(modalHtml);
}

// ==============================================================================
// ROUTER & NAVIGATION CONTROLLER
// ==============================================================================
let currentView = 'overview';

function navigateTo(viewName) {
  const isAuthenticated = store.state.authSession && store.state.authSession.isAuthenticated && store.state.authSession.userId;
  if (!isAuthenticated) {
    if (typeof checkAuthAndRender === 'function') checkAuthAndRender();
    return;
  }
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
  const activeFounders = store.getActiveCofounders();
  const totalFounders = activeFounders.length;

  const activeProjectsCount = store.state.projects.length;
  const activeBatchesCount = store.state.academyBatches.length;

  const blockedTasks = tasks.filter(t => t.isBlocked);
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
            <span class="text-xs font-medium">Sprint ${store.state.currentSprint || 1} Progress</span>
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
              <span class="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold">${checkinsCount} Sudah Lapor</span>
              <span class="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-semibold">${Math.max(0, totalFounders - checkinsCount)} Belum</span>
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
              ${activeProjectsCount > 0 ? `${activeProjectsCount} Proyek Aktif Berjalan` : 'Belum ada proyek berjalan'}
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

      <!-- Supportive Rhythm Pulse: Status Kapasitas & Kesiapan 7 Co-Founder -->
      <div class="card-surface p-5">
        <div class="flex items-center justify-between mb-3.5">
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
              <i data-lucide="heart-pulse" class="w-4 h-4 text-brand-emerald"></i>
              Rhythm Pulse Kapasitas Co-Founder
            </h3>
            <p class="text-xs text-gray-500">Transparansi kesiapan kuliah & ketersediaan waktu tim pekan ini</p>
          </div>
          <button onclick="openCapacityModal()" class="text-xs font-semibold text-brand-emerald hover:underline">
            Update Status Saya →
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          ${activeFounders.map(f => {
            const cap = CAPACITY_META[f.capacityStatus || 'AVAILABLE'] || CAPACITY_META.AVAILABLE;
            const userCheckin = store.state.checkins.find(c => c.userId === f.id && c.sprintNumber === (store.state.currentSprint || 1));
            return `
              <div class="p-3 rounded-xl border border-gray-200 bg-gray-50/60 flex items-center gap-3">
                <img src="${f.avatar}" class="w-9 h-9 rounded-full object-cover border border-gray-300">
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-gray-900 truncate">${f.name}</p>
                  <p class="text-[10px] text-gray-500 truncate">${f.roleLabel}</p>
                  <div class="flex items-center gap-1.5 mt-1">
                    <span class="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full text-[9px] font-semibold ${cap.badgeClass}">
                      <span class="w-1.5 h-1.5 rounded-full ${cap.dot}"></span>
                      ${cap.label}
                    </span>
                    ${userCheckin ? '<span class="text-[9px] text-emerald-700 font-bold">✓ Lapor</span>' : '<span class="text-[9px] text-gray-400">Belum</span>'}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
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
              ${tasks.length === 0 ? `
                <tr>
                  <td colspan="7" class="p-8 text-center text-gray-400">
                    <i data-lucide="check-circle-2" class="w-8 h-8 mx-auto text-gray-300 mb-2"></i>
                    <p class="font-semibold text-gray-600">Belum ada tugas di Papan Tugas.</p>
                    <p class="text-[11px] text-gray-400 mt-1">Klik tombol <strong>+ Buat Tugas</strong> di atas untuk menambahkan tugas perdana tim.</p>
                  </td>
                </tr>
              ` : tasks.map(t => {
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
              <div>
                <label class="block font-semibold text-gray-700 mb-1">Prakiraan Ketersediaan / Kapasitas Pekan Depan *</label>
                <select id="checkin-capacity" class="w-full border border-gray-300 rounded px-2.5 py-2 text-xs focus:ring-1 focus:ring-brand-emerald">
                  <option value="AVAILABLE" ${(user.capacityStatus || 'AVAILABLE') === 'AVAILABLE' ? 'selected' : ''}>Tersedia Normal (3–5 Jam/Pekan)</option>
                  <option value="BUSY_LECTURES" ${user.capacityStatus === 'BUSY_LECTURES' ? 'selected' : ''}>Padat Kuliah & Tugas Kampus (1–2 Jam)</option>
                  <option value="EXAM_MODE" ${user.capacityStatus === 'EXAM_MODE' ? 'selected' : ''}>Mode Ujian / UTS / UAS (Delegasi Approver Aktif)</option>
                  <option value="NEEDS_SUPPORT" ${user.capacityStatus === 'NEEDS_SUPPORT' ? 'selected' : ''}>Butuh Bantuan Rekan Tim</option>
                </select>
              </div>
              <div class="flex justify-end pt-2">
                <button onclick="submitAsyncCheckin()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition">
                  <i data-lucide="send" class="w-3.5 h-3.5"></i>
                  <span>Kirim Check-In (< 60 Detik)</span>
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
          <div class="flex justify-between items-center bg-white p-4 rounded-xl border border-brand-border">
            <div>
              <h4 class="font-heading font-bold text-sm text-gray-900">Weekly Syura (Musyawarah Mingguan)</h4>
              <p class="text-xs text-gray-500">Mencatat konsensus, evaluasi pekanan, dan action items tim ke Kanban.</p>
            </div>
            <button onclick="openCreateSyuraModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              <span>Catat Notulen Syura Baru</span>
            </button>
          </div>

          ${store.state.syuraMinutes.length === 0 ? `
            <div class="card-surface p-12 text-center text-gray-400">
              <i data-lucide="file-text" class="w-10 h-10 mx-auto text-gray-300 mb-2"></i>
              <p class="text-xs font-semibold text-gray-700">Belum ada notulen Weekly Syura yang dicatat.</p>
              <p class="text-[11px] text-gray-500 mt-1">Rapat musyawarah mingguan (Ahad malam) diadakan untuk evaluasi dan action items tim.</p>
              <button onclick="openCreateSyuraModal()" class="mt-4 bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-1.5 transition shadow-sm">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>Catat Notulen Syura Perdana</span>
              </button>
            </div>
          ` : store.state.syuraMinutes.map(minute => `
            <div class="card-surface p-5 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-border pb-3">
                <div>
                  <h3 class="font-heading font-bold text-sm text-gray-900">
                    ${minute.title || 'Notulen Weekly Syura'}
                  </h3>
                  <p class="text-xs text-gray-500">Tanggal: ${minute.meetingDate} • Moderator: ${minute.moderator}</p>
                </div>
                <span class="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded">Disahkan Pimpinan</span>
              </div>

              <!-- Strategic Decisions -->
              <div>
                <h4 class="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Keputusan Strategis:</h4>
                <div class="text-xs text-gray-700 whitespace-pre-line bg-gray-50 p-3 rounded-lg border border-gray-200">
                  ${minute.decisions}
                </div>
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
                      ${(minute.actionItems || []).map(item => {
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
                      ${(!minute.actionItems || minute.actionItems.length === 0) ? `
                        <tr><td colspan="3" class="p-3 text-center text-gray-400 text-[11px]">Tidak ada action items khusus.</td></tr>
                      ` : ''}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          `).join('')}
        </div>
      ` : `
        <!-- TAB 3: TRANSPARANSI KEADILAN SYIRKAH 'ABDAN (SELF-VISIBLE) -->
        <div class="space-y-6">
          <div class="card-surface p-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
                  <i data-lucide="scale" class="w-4 h-4 text-brand-emerald"></i>
                  Transparansi Keadilan Syirkah 'Abdan (Poin Bobot Kontribusi)
                </h3>
                <p class="text-xs text-gray-500">
                  Seluruh co-founder memiliki transparansi penuh (Self-Visibility) atas akumulasi kontribusi nyata 4 pilar.
                </p>
              </div>
              <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded font-bold self-start sm:self-auto">
                Akad Syirkah 'Abdan Terbuka
              </span>
            </div>

            <!-- 4 Pillars Legend -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-[11px] bg-gray-50 p-3 rounded-lg border border-gray-200">
              <div><strong class="text-purple-700">Pilar 1:</strong> Eksekusi Tugas (S=1, M=2, L=3)</div>
              <div><strong class="text-sky-700">Pilar 2:</strong> Akuisisi CRM (5 Poin)</div>
              <div><strong class="text-emerald-700">Pilar 3:</strong> Ops & Keuangan (3 Poin)</div>
              <div><strong class="text-orange-700">Pilar 4:</strong> Media & Academy (2 Poin)</div>
            </div>

            <div class="overflow-x-auto border border-brand-border rounded-lg">
              <table class="w-full text-xs text-left">
                <thead class="bg-gray-50 text-[10px] text-gray-600 uppercase">
                  <tr>
                    <th class="p-3">Co-Founder</th>
                    <th class="p-3">Peran & Unit</th>
                    <th class="p-3 text-center">Tugas (P1)</th>
                    <th class="p-3 text-center">CRM (P2)</th>
                    <th class="p-3 text-center">Ops (P3)</th>
                    <th class="p-3 text-center">Media (P4)</th>
                    <th class="p-3 text-center font-bold text-gray-900">Total Poin</th>
                    <th class="p-3 text-right">Status Keadilan</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${founders.map(f => {
                    const contrib = store.calculateWeightedContribution(f.id);
                    return `
                      <tr>
                        <td class="p-3 flex items-center gap-2">
                          <img src="${f.avatar}" class="w-6 h-6 rounded-full object-cover">
                          <span class="font-bold text-gray-900">${f.name}</span>
                        </td>
                        <td class="p-3 text-gray-500">${f.roleLabel}</td>
                        <td class="p-3 text-center font-mono">${contrib.taskPoints} pt</td>
                        <td class="p-3 text-center font-mono">${contrib.crmPoints} pt</td>
                        <td class="p-3 text-center font-mono">${contrib.opsPoints} pt</td>
                        <td class="p-3 text-center font-mono">${contrib.mediaPoints} pt</td>
                        <td class="p-3 text-center font-mono font-bold text-brand-emerald text-sm">${contrib.totalPoints} pt</td>
                        <td class="p-3 text-right">
                          <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                            Kontributif
                          </span>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>

            <p class="text-[11px] text-gray-500 mt-3 italic">
              * Prinsip Tabayyun: Poin kontribusi digunakan untuk pembagian porsi 40% Pool Eksekutor Syirkah 'Abdan. 60% lainnya dibagi rata secara merata kepada seluruh co-founder aktif.
            </p>
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
  const capacity = document.getElementById('checkin-capacity')?.value || user.capacityStatus || 'AVAILABLE';

  if (!completed || !inprogress) {
    showToast('Harap isi ringkasan selesai dan progres!', 'error');
    return;
  }

  user.capacityStatus = capacity;

  const existingIdx = store.state.checkins.findIndex(c => c.userId === user.id && c.sprintNumber === store.state.currentSprint);
  const checkinData = {
    userId: user.id,
    sprintNumber: store.state.currentSprint,
    completedSummary: completed,
    inProgressSummary: inprogress,
    blockerSummary: blocker || 'Aman, tidak ada kendala.',
    capacityNext: capacity,
    submittedAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB'
  };

  if (existingIdx >= 0) {
    store.state.checkins[existingIdx] = checkinData;
  } else {
    store.state.checkins.push(checkinData);
  }

  store.logAudit('CHECKIN_SUBMITTED', 'Check-In: ' + user.name, `Laporan Async Check-In berhasil dikirim (Kapasitas: ${CAPACITY_META[capacity].label}).`);
  store.saveState();
  updateTopBanners();
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
  let targetMinute = null;
  let item = null;
  for (const m of store.state.syuraMinutes) {
    item = (m.actionItems || []).find(a => a.id === itemId);
    if (item) { targetMinute = m; break; }
  }
  if (!item) return;

  const newTask = {
    id: 'task-' + Date.now(),
    title: item.title,
    description: 'Berasal dari keputusan rapat Weekly Syura',
    unitId: 'INTERNAL_OPS',
    projectId: null,
    assigneeId: item.picId || store.state.activeUserId,
    createdById: store.state.activeUserId,
    sprintNumber: store.state.currentSprint,
    status: 'TODO',
    isBlocked: false,
    blockedReason: null,
    hoursEstimate: 1.0,
    dueDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
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

function openCreateSyuraModal() {
  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4 text-brand-emerald"></i>
          Catat Notulen Weekly Syura Baru
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <div class="space-y-3 text-xs">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Judul / Seri Syura *</label>
            <input type="text" id="new-syura-title" placeholder="Misal: Notulen Weekly Syura #1" class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Tanggal Rapat *</label>
            <input type="date" id="new-syura-date" value="${new Date().toISOString().split('T')[0]}" class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
        </div>

        <div>
          <label class="block font-semibold text-gray-700 mb-1">Moderator Rapat</label>
          <select id="new-syura-mod" class="w-full border border-gray-300 rounded px-2.5 py-2">
            ${Object.values(store.state.users).filter(u => u.id !== 'client_guest').map(u => `
              <option value="${u.name} (${u.roleLabel.split(' (')[0]})">${u.name} (${u.roleLabel.split(' (')[0]})</option>
            `).join('')}
          </select>
        </div>

        <div>
          <label class="block font-semibold text-gray-700 mb-1">Keputusan Strategis & Notulensi *</label>
          <textarea id="new-syura-decisions" rows="4" placeholder="Tuliskan poin-poin keputusan musyawarah tim..." class="w-full border border-gray-300 rounded p-2.5"></textarea>
        </div>

        <div>
          <label class="block font-semibold text-gray-700 mb-1">Action Items (1 baris per poin untuk tugas di Kanban)</label>
          <textarea id="new-syura-actions" rows="3" placeholder="Contoh:&#10;Terbitkan invoice resmi untuk Klien A&#10;Finalisasi materi workshop AI" class="w-full border border-gray-300 rounded p-2.5"></textarea>
        </div>
      </div>

      <div class="border-t border-brand-border pt-4 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs">Batal</button>
        <button onclick="submitNewSyura()" class="px-4 py-1.5 rounded bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold">Simpan Notulen</button>
      </div>
    </div>
  `;
  openModal(modalHtml);
}

function submitNewSyura() {
  const title = document.getElementById('new-syura-title')?.value.trim();
  const meetingDate = document.getElementById('new-syura-date')?.value || new Date().toISOString().split('T')[0];
  const moderator = document.getElementById('new-syura-mod')?.value || 'Hilwa (COO)';
  const decisions = document.getElementById('new-syura-decisions')?.value.trim();
  const actionsRaw = document.getElementById('new-syura-actions')?.value.trim();

  if (!title || !decisions) {
    showToast('Lengkapi judul dan keputusan strategis notulen!', 'error');
    return;
  }

  const actionItems = actionsRaw ? actionsRaw.split('\n').filter(Boolean).map((line, idx) => ({
    id: 'act-' + Date.now() + '-' + idx,
    title: line.trim(),
    picId: 'hilwa',
    promoted: false
  })) : [];

  const newMinute = {
    id: 'syura-' + Date.now(),
    title: title,
    meetingDate: meetingDate,
    moderator: moderator,
    attendees: Object.keys(store.state.users).filter(id => id !== 'client_guest'),
    decisions: decisions,
    actionItems: actionItems
  };

  store.state.syuraMinutes.unshift(newMinute);
  store.logAudit('SYURA_RECORDED', 'Notulen: ' + title, 'Notulen Weekly Syura berhasil dicatat.');
  store.saveState();
  closeModal();
  showToast('Notulen Weekly Syura berhasil disimpan!');
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
    
    // RBAC Security Guard: NDA_RESTRICTED / NDA_KLIEN can only be accessed by Super Admin, Ops Admin, Finance Admin, or PIC!
    const isNda = a.visibility === 'NDA_RESTRICTED' || a.confidentiality === 'NDA_KLIEN';
    if (isNda) {
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
            ${archives.length === 0 ? `
              <tr>
                <td colspan="7" class="p-8 text-center text-gray-400">
                  <i data-lucide="folder-open" class="w-8 h-8 mx-auto text-gray-300 mb-2"></i>
                  <p class="font-semibold text-gray-600">Belum ada arsip atau tautan dokumen yang diunggah.</p>
                  <p class="text-[11px] text-gray-400 mt-1">Klik tombol <strong>+ Tambah Arsip / Tautan</strong> di atas untuk menyimpan akad, SOP, atau dokumen proyek.</p>
                </td>
              </tr>
            ` : archives.map(a => {
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
                    ${(() => {
                      const vis = a.visibility || (a.confidentiality === 'NDA_KLIEN' ? 'NDA_RESTRICTED' : 'INTERNAL_TEAM');
                      if (vis === 'NDA_RESTRICTED') {
                        return `<span class="text-[10px] px-2 py-0.5 rounded font-bold bg-red-100 text-red-800 border border-red-200 inline-flex items-center gap-1"><i data-lucide="shield-alert" class="w-3 h-3"></i> NDA Ketat</span>`;
                      } else if (vis === 'CLIENT_SAFE') {
                        return `<span class="text-[10px] px-2 py-0.5 rounded font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1"><i data-lucide="globe" class="w-3 h-3"></i> Publik Klien</span>`;
                      } else {
                        return `<span class="text-[10px] px-2 py-0.5 rounded font-bold bg-sky-100 text-sky-800 border border-sky-200 inline-flex items-center gap-1"><i data-lucide="users" class="w-3 h-3"></i> Internal Tim</span>`;
                      }
                    })()}
                  </td>
                  <td class="p-3 text-gray-500 tabular-nums">${a.date}</td>
                  <td class="p-3 text-right">
                    <div class="flex items-center justify-end gap-2">
                      <span class="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded inline-flex items-center gap-0.5" title="Tautan terverifikasi aktif">
                        <i data-lucide="check" class="w-2.5 h-2.5"></i> Akses OK
                      </span>
                      <a href="${a.url}" target="_blank" class="inline-flex items-center gap-1 text-brand-emerald hover:underline font-semibold">
                        <span>Buka</span>
                        <i data-lucide="external-link" class="w-3 h-3"></i>
                      </a>
                    </div>
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
            <label class="block font-semibold text-gray-700 mb-1">Visibilitas & Guard *</label>
            <select id="new-arc-visibility" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="INTERNAL_TEAM">Internal Tim (Dapat Diakses Seluruh Tim)</option>
              <option value="NDA_RESTRICTED">NDA Klien — Rahasia Ketat (Blokir ke Portal Klien)</option>
              <option value="CLIENT_SAFE">Publik Klien (Aman & Tampil di Portal Klien B2B)</option>
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
  const visibility = document.getElementById('new-arc-visibility')?.value || 'INTERNAL_TEAM';
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
    visibility: visibility,
    confidentiality: visibility === 'NDA_RESTRICTED' ? 'NDA_KLIEN' : 'INTERNAL_TIM',
    linkVerified: true,
    date: new Date().toISOString().split('T')[0]
  };

  store.state.archives.unshift(newArchive);
  store.logAudit('ARCHIVE_CREATED', 'Doc: ' + title, 'Dokumen baru diarsipkan dengan visibilitas ' + visibility);
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

  const isCfo = user.role === 'FINANCE_ADMIN' || user.id === 'novita';
  const isSuperAdmin = user.role === 'SUPER_ADMIN';
  const isCfoExamMode = store.state.users.novita?.capacityStatus === 'EXAM_MODE';
  const isBackupApprover = isCfoExamMode && (user.id === 'hilwa' || user.role === 'OPS_ADMIN');
  const canVerifyPayment = isCfo || isSuperAdmin || isBackupApprover;

  return `
    <div class="space-y-5">
      
      <!-- Header & Warning -->
      <div class="card-surface p-4 bg-white border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
            <i data-lucide="shield-alert" class="w-4 h-4 text-brand-emerald"></i>
            Disiplin Gerbang Pembayaran & Anti-Scope Creep (Payment Gate)
          </h3>
          <p class="text-xs text-gray-500 mt-0.5">
            Proyek B2B wajib DP 50% terverifikasi CFO (Novita) / COO (Hilwa) sebelum tugas eksekusi dapat dikerjakan. Prinsip <em>Maker-Checker</em> melarang pembuat proyek memverifikasi DP sendiri.
          </p>
        </div>
        <button onclick="openCreateProjectModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition flex-shrink-0">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Tambah Proyek Baru</span>
        </button>
      </div>

      ${isCfoExamMode ? `
        <!-- Delegation Banner -->
        <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs flex items-center justify-between gap-3 shadow-xs">
          <div class="flex items-center gap-2.5">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500 flex-shrink-0 animate-pulse"></span>
            <div class="text-amber-950">
              <strong>Delegasi Approver Aktif:</strong> CFO (Novita Rani) sedang <em>Mode Ujian (Exam Mode)</em>. Otoritas verifikasi Payment Gate dialihkan sementara kepada <strong>Hilwa Mufida (COO & Head of PM)</strong>.
            </div>
          </div>
          <span class="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-bold whitespace-nowrap">Backup Otoritas</span>
        </div>
      ` : ''}

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${projects.length === 0 ? `
          <div class="col-span-full card-surface p-12 text-center text-gray-400">
            <i data-lucide="briefcase" class="w-12 h-12 mx-auto text-gray-300 mb-3"></i>
            <h4 class="font-bold text-gray-800 text-sm">Belum Ada Proyek Klien Terdaftar</h4>
            <p class="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              Daftarkan proyek baru dari klien B2B Anda untuk mengaktifkan pelacakan SLA, portal klien transparan, dan Gerbang Pembayaran DP 50%.
            </p>
            <button onclick="openCreateProjectModal()" class="mt-4 bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-1.5 transition shadow-sm">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              <span>Tambah Proyek Perdana</span>
            </button>
          </div>
        ` : projects.map(p => {
          const unit = store.state.units[p.unitId] || { name: p.unitId, badgeClass: '' };
          const pic = store.state.users[p.picId] || { name: p.picId };
          const isWaitingDp = p.paymentGateStatus === 'LOCKED_WAITING_DP';
          const isDp50 = p.paymentGateStatus === 'DP_50_VERIFIED';
          const isPaid100 = p.paymentGateStatus === 'PAID_100_VERIFIED';
          const pendingRevs = store.state.revisionTriage.filter(r => r.projectId === p.id && r.triageStatus === 'PENDING_TRIAGE');

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

              <!-- Revision Triage Inbox (Anti-Scope Creep) -->
              ${pendingRevs.length > 0 ? `
                <div class="bg-amber-50/70 border border-amber-300 rounded-lg p-3 space-y-2">
                  <div class="flex items-center justify-between">
                    <strong class="text-xs text-amber-950 flex items-center gap-1.5 font-heading">
                      <i data-lucide="inbox" class="w-3.5 h-3.5 text-amber-700"></i>
                      Inbox Triage Revisi (${pendingRevs.length} Menunggu Validasi)
                    </strong>
                    <span class="text-[9px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-bold">Anti-Scope Creep</span>
                  </div>
                  <div class="space-y-2 text-xs">
                    ${pendingRevs.map(rev => `
                      <div class="p-2 rounded bg-white border border-amber-200 flex flex-col gap-1.5">
                        <div class="flex items-start justify-between gap-2">
                          <p class="text-gray-800 font-semibold text-[11px]">"${rev.notes}"</p>
                          <span class="text-[9px] text-gray-400 font-mono whitespace-nowrap">${rev.createdAt}</span>
                        </div>
                        <div class="flex items-center justify-end gap-1.5 pt-1 border-t border-gray-100">
                          <button onclick="acceptRevisionTriage('${rev.id}')" class="px-2 py-0.5 rounded bg-emerald-700 hover:bg-emerald-800 text-white text-[10px] font-semibold flex items-center gap-1">
                            <i data-lucide="check" class="w-3 h-3"></i> Terima & Buat Tugas
                          </button>
                          <button onclick="rejectRevisionAddendum('${rev.id}')" class="px-2 py-0.5 rounded bg-amber-700 hover:bg-amber-800 text-white text-[10px] font-semibold flex items-center gap-1">
                            <i data-lucide="file-plus" class="w-3 h-3"></i> Ajukan Addendum
                          </button>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

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
                    <span class="text-gray-400 text-[11px] italic">Wewenang CFO Novita / COO Hilwa</span>
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

function acceptRevisionTriage(triageId) {
  const rev = store.state.revisionTriage.find(r => r.id === triageId);
  if (!rev) return;
  const project = store.state.projects.find(p => p.id === rev.projectId);
  if (!project) return;

  project.revisionUsed = (project.revisionUsed || 0) + 1;
  rev.triageStatus = 'ACCEPTED_IN_QUOTA';
  rev.reviewedById = store.state.activeUserId;

  const newTask = {
    id: 'task-' + Date.now(),
    title: 'Revisi Klien: ' + project.clientName,
    description: rev.notes,
    unitId: project.unitId,
    projectId: project.id,
    assigneeId: project.picId,
    createdById: store.state.activeUserId,
    sprintNumber: store.state.currentSprint || 1,
    status: 'TODO',
    isBlocked: false,
    blockedReason: null,
    hoursEstimate: 1.5,
    dueDate: new Date(Date.now() + 5 * 86400000).toISOString().split('T')[0],
    dodChecklist: [{ label: 'Tuntaskan revisi klien terverifikasi', checked: false }],
    workProofUrl: '',
    isClientVisible: true
  };
  store.state.tasks.unshift(newTask);
  store.logAudit('REVISION_TRIAGE_ACCEPTED', 'Project: ' + project.title, 'Catatan revisi diterima; kartu tugas resmi dibuat di Papan Tugas.');
  store.saveState();
  showToast('Revisi diterima! Kuota dipotong 1x dan kartu tugas resmi telah dibuat di Papan Tugas.');
  renderActiveView();
}

function rejectRevisionAddendum(triageId) {
  const rev = store.state.revisionTriage.find(r => r.id === triageId);
  if (!rev) return;
  const project = store.state.projects.find(p => p.id === rev.projectId);
  if (!project) return;

  rev.triageStatus = 'OUT_OF_SCOPE_ADDENDUM';
  rev.reviewedById = store.state.activeUserId;

  const waText = `Yth. ${project.clientName}, terima kasih atas catatan yang dikirimkan. Setelah ditinjau oleh PM KaryaKita, permintaan "${rev.notes}" berada di luar ruang lingkup (scope) kontrak awal. Kami siap mengakomodasi melalui penambahan Addendum Kerja. Silakan konfirmasi untuk penawaran addendum ini.`;
  navigator.clipboard?.writeText(waText);

  store.logAudit('REVISION_TRIAGE_OUT_OF_SCOPE', 'Project: ' + project.title, 'Revisi ditandai di luar scope; draf addendum disiapkan.');
  store.saveState();
  showToast('Revisi ditandai di luar scope! Draf WhatsApp addendum telah disalin ke clipboard.');
  renderActiveView();
}

function openVerifyDpModal(projectId) {
  const project = store.state.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
          Verifikasi Gerbang Pembayaran DP 50% (CFO / Delegasi)
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

  // Maker-Checker Security Guard
  if (store.state.activeUserId === project.createdById) {
    showToast('Prinsip Maker-Checker: Pembuat proyek dilarang memverifikasi pembayarannya sendiri! Verifikasi harus dilakukan oleh CFO (Novita Rani) atau COO (Hilwa Mufida).', 'error');
    return;
  }

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

  const actor = store.getCurrentUser();
  const isDelegation = store.state.users.novita?.capacityStatus === 'EXAM_MODE' && actor.id !== 'novita';
  store.logAudit(
    'PAYMENT_GATE_VERIFIED',
    'Project: ' + project.title,
    `DP 50% sebesar Rp${dpAmount.toLocaleString('id-ID')} terverifikasi${isDelegation ? ' (melalui Delegasi CFO saat Exam Mode)' : ''}.`
  );

  store.saveState();
  closeModal();
  showToast('Alhamdulillah! DP 50% berhasil diverifikasi. Kartu tugas eksekusi kini dapat dikerjakan!');
  renderActiveView();
}

function openVerifyFullModal(projectId) {
  const project = store.state.projects.find(p => p.id === projectId);
  if (!project) return;

  // Maker-Checker Security Guard
  if (store.state.activeUserId === project.createdById) {
    showToast('Prinsip Maker-Checker: Pembuat proyek dilarang memverifikasi pelunasan sendiri!', 'error');
    return;
  }

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
                ${stageLeads.length === 0 ? `
                  <div class="border border-dashed border-gray-300 rounded-lg p-3 text-center text-gray-400 text-[10px]">
                    Kosong
                  </div>
                ` : ''}
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

  // 40% Executor Pool (Weighted Contribution) & 60% Equal Pool across active cofounders
  const activeCofounders = store.getActiveCofounders();
  const cofounderCount = activeCofounders.length || 1;
  const executorPool = Math.floor((distributablePool * 40) / 100);
  const equalPool = distributablePool - executorPool;
  const perFounderEqual = Math.floor(equalPool / cofounderCount);

  // Total weighted points across all active cofounders for 40% distribution
  const founderContributionMap = {};
  let totalWeightedPoints = 0;
  activeCofounders.forEach(f => {
    const stats = store.calculateWeightedContribution(f.id);
    founderContributionMap[f.id] = stats;
    totalWeightedPoints += stats.totalPoints;
  });

  const syirkahState = store.state.syirkahPeriod || { status: 'DRAFT', reviewEndsAt: null, approvals: {} };
  const approvals = syirkahState.approvals || {};
  const approvedCount = activeCofounders.filter(f => approvals[f.id]?.status === 'CONFIRMED').length;
  const isQuorumReached = approvedCount >= Math.ceil(activeCofounders.length * 0.6); // 60%+ quorum (misal: 5 dari 7)
  const isCurrentUserApproved = approvals[user.id]?.status === 'CONFIRMED';
  const hasCurrentUserCofounder = activeCofounders.some(f => f.id === user.id);

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
                  Modal talangan: ${formatRp(store.state.settings.qardhInitialTotalIdr || 0)} • Sudah lunas dicicil: ${formatRp(store.state.settings.qardhRepaidIdr || 0)} • Sisa kewajiban: <strong>${formatRp(Math.max(0, (store.state.settings.qardhInitialTotalIdr || 0) - (store.state.settings.qardhRepaidIdr || 0)))}</strong>
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
                ${store.state.cashflow.length === 0 ? `
                  <tr>
                    <td colspan="6" class="p-8 text-center text-gray-400">
                      <i data-lucide="receipt" class="w-8 h-8 mx-auto text-gray-300 mb-2"></i>
                      <p class="font-semibold text-gray-600">Belum ada transaksi kas yang dicatat.</p>
                      <p class="text-[11px] text-gray-400 mt-1">Klik tombol <strong>+ Catat Transaksi Kas</strong> untuk mencatat pemasukan, opex, atau pengembalian qardh.</p>
                    </td>
                  </tr>
                ` : store.state.cashflow.map(cf => {
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
        <!-- TAB 2: SYIRKAH 'ABDAN PROFIT SHARING CALCULATOR & 48H MUSYAWARAH -->
        <div class="space-y-6">
          
          <div class="card-surface p-5 bg-white space-y-4">
            <div class="border-b border-brand-border pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-heading font-bold text-sm text-gray-900">
                    Penutupan Buku Akhir Bulan & Bagi Hasil Syirkah 'Abdan
                  </h3>
                  <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full ${syirkahState.status === 'LOCKED' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : syirkahState.status === 'REVIEW_48H' ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-gray-100 text-gray-700 border border-gray-300'}">
                    ${syirkahState.status === 'LOCKED' ? 'TERKUNCI & RESMI' : syirkahState.status === 'REVIEW_48H' ? 'FASE REVIEW MUSYAWARAH 48 JAM' : 'DRAF PERIODE'}
                  </span>
                </div>
                <p class="text-xs text-gray-500 mt-1">Periode: <strong>${new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</strong> • Sistem Zero-Riba, Zero-Gharar • Dinamis ${activeCofounders.length} Co-Founder Aktif</p>
              </div>
              
              <div class="flex items-center gap-2">
                ${canManageFinance && syirkahState.status === 'DRAFT' ? `
                  <button onclick="startMusyawarah48h()" class="bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition">
                    <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                    <span>Buka Review Bersama (48 Jam)</span>
                  </button>
                ` : ''}

                ${canManageFinance && syirkahState.status === 'REVIEW_48H' ? `
                  <button onclick="lockSyirkahPeriod()" class="${isQuorumReached ? 'bg-brand-emerald hover:bg-brand-hover text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'} text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition" ${!isQuorumReached ? 'title="Menunggu minimal kuorum persetujuan co-founder"' : ''}>
                    <i data-lucide="lock" class="w-3.5 h-3.5"></i>
                    <span>Kunci Periode & Terbitkan Slip Final</span>
                  </button>
                ` : ''}

                ${syirkahState.status === 'LOCKED' ? `
                  <span class="text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1.5">
                    <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i>
                    <span>Buku Kas Terkunci</span>
                  </span>
                ` : ''}
              </div>
            </div>

            <!-- 48-Hour Musyawarah Status Banner -->
            ${syirkahState.status === 'REVIEW_48H' ? `
              <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="flex items-start gap-2.5">
                    <i data-lucide="hourglass" class="w-5 h-5 text-amber-700 mt-0.5"></i>
                    <div>
                      <h4 class="font-heading font-bold text-xs text-amber-950">Masa Musyawarah & Telaah Bersama (48-Hour Sign-Off Window)</h4>
                      <p class="text-[11px] text-amber-800 mt-0.5">
                        Prinsip <em>'An Taradhin Minkum</em> (Saling Rela). Berakhir pada: <strong>${syirkahState.reviewEndsAt ? new Date(syirkahState.reviewEndsAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) : '48 Jam ke depan'}</strong>.
                        Progres Persetujuan: <strong>${approvedCount} dari ${activeCofounders.length} Co-Founder</strong> (${Math.round((approvedCount / activeCofounders.length) * 100)}%).
                      </p>
                    </div>
                  </div>

                  ${hasCurrentUserCofounder ? `
                    <div class="flex items-center gap-2 flex-shrink-0">
                      ${isCurrentUserApproved ? `
                        <span class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5">
                          <i data-lucide="check-check" class="w-4 h-4 text-emerald-600"></i>
                          <span>Anda Telah Menyetujui (Taradhin)</span>
                        </span>
                      ` : `
                        <button onclick="confirmSyirkahSignOff('CONFIRMED')" class="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
                          <i data-lucide="check" class="w-3.5 h-3.5"></i>
                          <span>Setuju & Konfirmasi (Taradhin)</span>
                        </button>
                        <button onclick="confirmSyirkahSignOff('REVISION_REQUESTED')" class="bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
                          <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
                          <span>Ajukan Catatan/Koreksi</span>
                        </button>
                      `}
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

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

            <!-- Distribution Breakdown across Active Founders -->
            <div class="mt-4">
              <h4 class="font-heading font-bold text-xs text-gray-800 mb-2">
                Rincian Estimasi Hak Bagi Hasil Co-Founder Aktif (${new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}):
              </h4>
              <div class="overflow-x-auto border border-brand-border rounded-lg">
                <table class="w-full text-xs text-left">
                  <thead class="bg-gray-50 text-[10px] text-gray-600 uppercase">
                    <tr>
                      <th class="p-2.5">Co-Founder</th>
                      <th class="p-2.5 text-center">Status Sign-Off</th>
                      <th class="p-2.5">Porsi Rata 60%</th>
                      <th class="p-2.5">Porsi Eksekutor 40% (4-Pilar)</th>
                      <th class="p-2.5 text-right">Total Hak Bagi Hasil</th>
                      <th class="p-2.5 text-center">Slip PDF</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    ${activeCofounders.map(f => {
                      const stats = founderContributionMap[f.id] || { totalPoints: 0 };
                      const executorPortion = totalWeightedPoints > 0 ? Math.floor((executorPool * stats.totalPoints) / totalWeightedPoints) : 0;
                      const totalFounderShare = perFounderEqual + executorPortion;
                      const approval = approvals[f.id];

                      return `
                        <tr>
                          <td class="p-2.5 font-bold text-gray-900 flex items-center gap-2">
                            <img src="${f.avatar}" class="w-5 h-5 rounded-full object-cover">
                            <span>${f.name}</span>
                          </td>
                          <td class="p-2.5 text-center">
                            ${approval?.status === 'CONFIRMED' ? `
                              <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-1">
                                <i data-lucide="check" class="w-3 h-3 text-emerald-600"></i> Disetujui
                              </span>
                            ` : approval?.status === 'REVISION_REQUESTED' ? `
                              <span class="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-1" title="${approval.note || 'Ada catatan'}">
                                <i data-lucide="message-square" class="w-3 h-3 text-red-600"></i> Ada Koreksi
                              </span>
                            ` : `
                              <span class="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-1">
                                <i data-lucide="clock" class="w-3 h-3 text-amber-500"></i> Menunggu
                              </span>
                            `}
                          </td>
                          <td class="p-2.5 font-mono tabular-nums">${formatRp(perFounderEqual)}</td>
                          <td class="p-2.5 font-mono tabular-nums ${executorPortion > 0 ? 'text-emerald-700 font-semibold' : 'text-gray-400'}">
                            ${formatRp(executorPortion)}
                            <span class="text-[10px] text-gray-500 block font-sans">Bobot: ${stats.totalPoints} pt</span>
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
                  ${store.state.projects.length > 0 ? store.state.projects.map(p => `
                    <option value="${p.id}">${p.title} (${p.clientName})</option>
                  `).join('') : '<option value="" disabled selected>Belum ada proyek terdaftar</option>'}
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

function startMusyawarah48h() {
  if (!store.state.syirkahPeriod) store.state.syirkahPeriod = { status: 'DRAFT', reviewEndsAt: null, approvals: {} };
  const endsAt = new Date(Date.now() + 48 * 3600000).toISOString();
  store.state.syirkahPeriod.status = 'REVIEW_48H';
  store.state.syirkahPeriod.reviewEndsAt = endsAt;
  store.state.syirkahPeriod.approvals = {};
  
  store.logAudit('SYIRKAH_REVIEW_OPENED', 'Musyawarah 48 Jam Dimulai', 'Jendela review dibuka hingga: ' + new Date(endsAt).toLocaleString('id-ID'));
  store.saveState();
  showToast('Fase Review & Musyawarah 48 Jam resmi dibuka untuk seluruh co-founder!');
  renderActiveView();
}

function confirmSyirkahSignOff(decision) {
  const user = store.getCurrentUser();
  if (!store.state.syirkahPeriod) store.state.syirkahPeriod = { status: 'DRAFT', reviewEndsAt: null, approvals: {} };
  if (!store.state.syirkahPeriod.approvals) store.state.syirkahPeriod.approvals = {};

  if (decision === 'REVISION_REQUESTED') {
    const note = prompt('Tuliskan catatan atau masukan koreksi Anda terkait perhitungan bagi hasil:', '');
    if (!note) return;
    store.state.syirkahPeriod.approvals[user.id] = {
      status: 'REVISION_REQUESTED',
      note: note,
      timestamp: new Date().toISOString()
    };
    store.logAudit('SYIRKAH_REVISION_NOTE', `Koreksi oleh: ${user.name}`, note);
    showToast('Catatan koreksi Anda telah disampaikan ke CFO/Admin.');
  } else {
    store.state.syirkahPeriod.approvals[user.id] = {
      status: 'CONFIRMED',
      timestamp: new Date().toISOString()
    };
    store.logAudit('SYIRKAH_SIGNOFF_CONFIRMED', `Konfirmasi Taradhin oleh: ${user.name}`, 'Menyetujui perhitungan bagi hasil.');
    showToast('Alhamdulillah, konfirmasi persetujuan (taradhin) Anda berhasil dicatat!');
  }
  store.saveState();
  renderActiveView();
}

function lockSyirkahPeriod() {
  const syirkahState = store.state.syirkahPeriod || {};
  const activeCofounders = store.getActiveCofounders();
  const approvals = syirkahState.approvals || {};
  const approvedCount = activeCofounders.filter(f => approvals[f.id]?.status === 'CONFIRMED').length;
  const quorum = Math.ceil(activeCofounders.length * 0.6);

  if (approvedCount < quorum) {
    if (!confirm(`Kuorum persetujuan belum terpenuhi (${approvedCount}/${activeCofounders.length} setuju, minimal ${quorum}). Tetap lanjutkan penguncian periode secara darurat?`)) {
      return;
    }
  } else {
    if (!confirm('Apakah Anda yakin ingin mengunci periode penutupan buku dan menerbitkan slip bagi hasil final untuk seluruh co-founder aktif?')) {
      return;
    }
  }

  store.state.syirkahPeriod.status = 'LOCKED';
  store.logAudit('SYIRKAH_PERIOD_LOCKED', 'Syirkah Periode Resmi Terkunci', `Disetujui oleh ${approvedCount}/${activeCofounders.length} co-founder. Status terkunci resmi oleh CFO.`);
  store.saveState();
  showToast('Alhamdulillah! Periode penutupan buku resmi dikunci dan slip final diterbitkan.');
  renderActiveView();
}

function printFounderSlip(founderId, amount) {
  const founder = store.state.users[founderId];
  const contrib = store.calculateWeightedContribution(founderId);
  const printContainer = document.getElementById('printable-content');
  const cfoUser = store.state.users.novita || { name: 'Novita Rani', roleLabel: 'VP of Growth & CFO' };
  
  printContainer.innerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 2px solid #0F4C3A; padding: 25px; border-radius: 8px;">
      <div style="text-align: center; border-bottom: 2px solid #0F4C3A; padding-bottom: 15px; margin-bottom: 20px;">
        <h2 style="color: #0F4C3A; margin: 0; font-size: 20px;">KARYAKITA AI & VENTURE STUDIO</h2>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #555;">STMIK Tazkia • Slip Bagi Hasil Syirkah 'Abdan (Bulan ${new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })})</p>
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
          <td><em>Syirkah 'Abdan (Zero-Riba, Zero-Gharar, 'An Taradhin Minkum)</em></td>
        </tr>
        <tr>
          <td style="color: #555;">Poin Kontribusi 4-Pilar:</td>
          <td><strong>${contrib.totalPoints} pt</strong> (Tugas: ${contrib.taskPoints} | CRM: ${contrib.crmPoints} | Ops/Keuangan: ${contrib.opsPoints} | Media/Academy: ${contrib.mediaPoints})</td>
        </tr>
      </table>

      <div style="background: #F8FAF9; border: 1px solid #CFE0D8; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
          <span>Porsi Rata Co-Founder (60%):</span>
          <span>Rp${(Math.floor(amount * 0.6)).toLocaleString('id-ID')}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
          <span>Porsi Eksekutor Aktif Berbobot (40%):</span>
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
          <p><strong>${cfoUser.name}</strong><br>${cfoUser.roleLabel}</p>
        </div>
        <div>
          <p>Penerima Hak (Persetujuan Taradhin):</p>
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
          <button onclick="openCreateBatchModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            <span>Buat Batch Baru</span>
          </button>
        </div>
      </div>

      <!-- Batch Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${batches.length === 0 ? `
          <div class="col-span-full card-surface p-12 text-center text-gray-400">
            <i data-lucide="graduation-cap" class="w-12 h-12 mx-auto text-gray-300 mb-3"></i>
            <h4 class="font-bold text-gray-800 text-sm">Belum Ada Batch Pelatihan AI</h4>
            <p class="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              Buat batch workshop publik (Rp75.000) atau pelatihan korporat B2B untuk mulai mengumpulkan peserta dan mencatat pemasukan berulang.
            </p>
            <button onclick="openCreateBatchModal()" class="mt-4 bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-1.5 transition shadow-sm">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              <span>Buat Batch Pelatihan Baru</span>
            </button>
          </div>
        ` : batches.map(b => `
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
                <strong class="text-gray-900 text-sm font-mono">${b.registeredCount || 0} / ${b.quota || 30} Kuota</strong>
              </div>
              <div>
                <span class="text-[10px] text-gray-500 block">Pemasukan Terverifikasi</span>
                <strong class="text-brand-emerald text-sm font-mono">Rp${((b.verifiedCount || 0) * (b.priceIdr || 0)).toLocaleString('id-ID')}</strong>
              </div>
            </div>

            <!-- Daftar Peserta Singkat -->
            <div>
              <span class="text-xs font-bold text-gray-800 block mb-2">Daftar Peserta (${(b.participants || []).length}):</span>
              ${(!b.participants || b.participants.length === 0) ? `
                <div class="p-3 text-center text-gray-400 text-[11px] border border-dashed rounded-lg">
                  Belum ada peserta yang mendaftar pada batch ini.
                </div>
              ` : `
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
              `}
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function initAcademyEvents() {}

function copyPaidParticipantsWa() {
  if (!store.state.academyBatches || store.state.academyBatches.length === 0) {
    showToast('Belum ada batch pelatihan yang terdaftar.', 'warning');
    return;
  }
  const allPaidPhones = [];
  store.state.academyBatches.forEach(b => {
    (b.participants || []).filter(p => p.paid && p.phone).forEach(p => allPaidPhones.push(p.phone));
  });
  if (allPaidPhones.length === 0) {
    showToast('Belum ada peserta berstatus lunas.', 'info');
    return;
  }
  navigator.clipboard.writeText(allPaidPhones.join('\n'));
  showToast('Nomor WhatsApp peserta lunas berhasil disalin!');
}

function openCreateBatchModal() {
  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4 text-brand-emerald"></i>
          Buat Batch Pelatihan AI Baru (Lini 5)
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Judul Workshop / Pelatihan *</label>
          <input type="text" id="new-batch-title" placeholder="Misal: Workshop Praktik AI untuk Mahasiswa & Profesional" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Tipe Pelatihan *</label>
            <select id="new-batch-type" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="PUBLIC_WORKSHOP">Workshop Publik (B2C — Rp75.000)</option>
              <option value="CORPORATE_B2B">Corporate Training (B2B)</option>
            </select>
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Tanggal Pelaksanaan *</label>
            <input type="date" id="new-batch-date" class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Harga Tiket / Nilai Kontrak (Rp) *</label>
            <input type="number" id="new-batch-price" value="75000" class="w-full border border-gray-300 rounded px-3 py-2 font-mono">
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Kuota Maksimal Peserta</label>
            <input type="number" id="new-batch-quota" value="30" class="w-full border border-gray-300 rounded px-3 py-2 font-mono">
          </div>
        </div>
      </div>

      <div class="border-t border-brand-border pt-4 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs">Batal</button>
        <button onclick="submitNewBatch()" class="px-4 py-1.5 rounded bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold">Buat Batch</button>
      </div>
    </div>
  `;
  openModal(modalHtml);
}

function submitNewBatch() {
  const title = document.getElementById('new-batch-title')?.value.trim();
  const type = document.getElementById('new-batch-type')?.value;
  const date = document.getElementById('new-batch-date')?.value || new Date().toISOString().split('T')[0];
  const price = parseInt(document.getElementById('new-batch-price')?.value) || 75000;
  const quota = parseInt(document.getElementById('new-batch-quota')?.value) || 30;

  if (!title) {
    showToast('Judul pelatihan wajib diisi!', 'error');
    return;
  }

  const newBatch = {
    id: 'batch-' + Date.now(),
    title: title,
    type: type,
    priceIdr: price,
    date: date,
    quota: quota,
    registeredCount: 0,
    verifiedCount: 0,
    status: 'REGISTRATION_OPEN',
    participants: []
  };

  store.state.academyBatches.unshift(newBatch);
  store.logAudit('ACADEMY_BATCH_CREATED', 'Batch: ' + title, `Batch baru dibuat dengan kuota ${quota} peserta.`);
  store.saveState();
  closeModal();
  showToast('Batch pelatihan AI berhasil dibuat!');
  renderActiveView();
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
          <button onclick="openAddContentModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            <span>Tambah Konten</span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${contents.length === 0 ? `
            <div class="col-span-full border border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-400 text-xs">
              <i data-lucide="video" class="w-8 h-8 mx-auto text-gray-300 mb-2"></i>
              <p class="font-semibold text-gray-600">Belum ada draf atau rencana konten video.</p>
              <p class="text-[11px] text-gray-400 mt-1">Klik <strong>+ Tambah Konten</strong> untuk mendaftarkan ide konten edukasi/promo.</p>
            </div>
          ` : contents.map(c => `
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
        <div class="flex items-center justify-between border-b border-brand-border pb-3">
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
              <i data-lucide="trending-up" class="w-4 h-4 text-emerald-600"></i>
              Buku Pelacakan Komisi Afiliasi (End-Buyer Growth Network)
            </h3>
            <p class="text-xs text-gray-500">Pelacakan pendapatan pasif dari program afiliasi tools & referral.</p>
          </div>
          <button onclick="openAddCommissionModal()" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            <span>Catat Komisi</span>
          </button>
        </div>
        
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
              ${commissions.length === 0 ? `
                <tr>
                  <td colspan="6" class="p-8 text-center text-gray-400">
                    <i data-lucide="coins" class="w-8 h-8 mx-auto text-gray-300 mb-2"></i>
                    <p class="font-semibold text-gray-600">Belum ada catatan komisi afiliasi.</p>
                    <p class="text-[11px] text-gray-400 mt-1">Klik <strong>+ Catat Komisi</strong> untuk mencatat pemasukan referral.</p>
                  </td>
                </tr>
              ` : commissions.map(cm => `
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

function openAddContentModal() {
  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4 text-brand-emerald"></i>
          Tambah Ide / Rencana Konten Media (Lini 4)
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Judul / Konsep Konten *</label>
          <input type="text" id="new-content-title" placeholder="Misal: 3 AI Tools Gratis untuk Skripsi Mahasiswa" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Platform *</label>
            <select id="new-content-platform" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="TikTok">TikTok</option>
              <option value="Instagram Reels">Instagram Reels</option>
              <option value="YouTube Shorts">YouTube Shorts</option>
              <option value="LinkedIn Post">LinkedIn Post</option>
            </select>
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Tahap Produksi</label>
            <select id="new-content-stage" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="IDE_RISET">Ide & Riset Skrip</option>
              <option value="RECORDING">Shooting / Recording</option>
              <option value="EDITING">Editing</option>
              <option value="SIAP_TAYANG">Siap Tayang</option>
              <option value="SUDAH_TAYANG">Sudah Tayang</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block font-semibold text-gray-700 mb-1">Target Program / Call-to-Action</label>
          <input type="text" id="new-content-target" placeholder="Misal: Promo AI Academy / Referral Link" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>
      </div>

      <div class="border-t border-brand-border pt-4 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs">Batal</button>
        <button onclick="submitNewContent()" class="px-4 py-1.5 rounded bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold">Simpan Konten</button>
      </div>
    </div>
  `;
  openModal(modalHtml);
}

function submitNewContent() {
  const title = document.getElementById('new-content-title')?.value.trim();
  const platform = document.getElementById('new-content-platform')?.value;
  const stage = document.getElementById('new-content-stage')?.value;
  const target = document.getElementById('new-content-target')?.value.trim() || 'Branding Umum';

  if (!title) {
    showToast('Judul konten wajib diisi!', 'error');
    return;
  }

  const newC = {
    id: 'aff-c-' + Date.now(),
    title: title,
    platform: platform,
    stage: stage,
    picId: store.state.activeUserId,
    postUrl: '',
    targetProgram: target
  };

  store.state.affiliateContents.unshift(newC);
  store.logAudit('CONTENT_ADDED', 'Media: ' + title, `Ide konten ditambahkan untuk platform ${platform}`);
  store.saveState();
  closeModal();
  showToast('Ide konten baru berhasil ditambahkan!');
  renderActiveView();
}

function openAddCommissionModal() {
  const modalHtml = `
    <div class="p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-brand-border pb-3">
        <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4 text-brand-emerald"></i>
          Catat Komisi Afiliasi Baru
        </h3>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 mb-1">Mitra / Program Afiliasi *</label>
          <input type="text" id="new-com-partner" placeholder="Misal: TikTok Shop / Referral Hosting" class="w-full border border-gray-300 rounded px-3 py-2">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Periode *</label>
            <input type="text" id="new-com-period" value="${new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}" class="w-full border border-gray-300 rounded px-3 py-2">
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Nominal Komisi (Rp) *</label>
            <input type="number" id="new-com-amount" placeholder="250000" class="w-full border border-gray-300 rounded px-3 py-2 font-mono">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Jumlah Klik</label>
            <input type="number" id="new-com-clicks" value="0" class="w-full border border-gray-300 rounded px-3 py-2 font-mono">
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Konversi</label>
            <input type="number" id="new-com-conv" value="0" class="w-full border border-gray-300 rounded px-3 py-2 font-mono">
          </div>
          <div>
            <label class="block font-semibold text-gray-700 mb-1">Status Pencairan</label>
            <select id="new-com-status" class="w-full border border-gray-300 rounded px-2.5 py-2">
              <option value="PENDING">Pending</option>
              <option value="DISBURSED">Masuk ke Kas (Disbursed)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="border-t border-brand-border pt-4 flex justify-end gap-2">
        <button onclick="closeModal()" class="px-3 py-1.5 rounded border border-gray-300 text-gray-700 text-xs">Batal</button>
        <button onclick="submitNewCommission()" class="px-4 py-1.5 rounded bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold">Simpan Komisi</button>
      </div>
    </div>
  `;
  openModal(modalHtml);
}

function submitNewCommission() {
  const partner = document.getElementById('new-com-partner')?.value.trim();
  const period = document.getElementById('new-com-period')?.value.trim() || new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
  const amount = parseInt(document.getElementById('new-com-amount')?.value) || 0;
  const clicks = parseInt(document.getElementById('new-com-clicks')?.value) || 0;
  const conv = parseInt(document.getElementById('new-com-conv')?.value) || 0;
  const status = document.getElementById('new-com-status')?.value || 'PENDING';

  if (!partner || amount <= 0) {
    showToast('Lengkapi nama mitra dan nominal komisi yang valid!', 'error');
    return;
  }

  const newCom = {
    id: 'com-' + Date.now(),
    partnerName: partner,
    period: period,
    clicks: clicks,
    conversions: conv,
    commissionIdr: amount,
    status: status
  };

  store.state.affiliateCommissions.unshift(newCom);
  store.logAudit('COMMISSION_RECORDED', 'Afiliasi: ' + partner, `Komisi Rp${amount.toLocaleString('id-ID')} dicatat (${status})`);
  store.saveState();
  closeModal();
  showToast('Komisi afiliasi berhasil dicatat!');
  renderActiveView();
}

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
              <p class="text-xs text-gray-500">ID Grup Tujuan: <code>1203630291823910@g.us (Grup Internal Co-Founder)</code></p>
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
          ${store.state.botLogs.length === 0 ? `
            <div class="p-6 text-center text-gray-400 text-xs">
              <i data-lucide="message-square-dashed" class="w-8 h-8 mx-auto text-gray-300 mb-2"></i>
              <p class="font-semibold text-gray-600">Belum ada riwayat pengiriman notifikasi bot.</p>
              <p class="text-[11px] text-gray-400 mt-1">Klik <strong>Kirim Pesan Uji Coba ke WhatsApp</strong> di atas untuk menguji coba koneksi bot.</p>
            </div>
          ` : store.state.botLogs.map(log => `
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
  const totalIncome = store.state.cashflow
    .filter(c => c.type === 'INCOME' || c.type === 'IN')
    .reduce((sum, c) => sum + Number(c.amountIdr || 0), 0);

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
            <span class="text-[10px] text-brand-emerald font-mono">Rp${totalIncome.toLocaleString('id-ID')} Total</span>
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
    const unitMap = {
      'LINI_1_DESIGN': 0,
      'LINI_2_WEBTECH': 0,
      'LINI_3_ASSIST_DATA': 0,
      'LINI_4_MEDIA_AFFILIATE': 0,
      'LINI_5_AI_ACADEMY': 0
    };

    store.state.cashflow.filter(c => c.type === 'INCOME' || c.type === 'IN').forEach(c => {
      if (c.projectId) {
        const p = store.state.projects.find(proj => proj.id === c.projectId);
        if (p && unitMap[p.unitId] !== undefined) {
          unitMap[p.unitId] += Number(c.amountIdr || 0) / 1000000;
        }
      } else if (c.unitId && unitMap[c.unitId] !== undefined) {
        unitMap[c.unitId] += Number(c.amountIdr || 0) / 1000000;
      }
    });

    const unitData = [
      unitMap['LINI_1_DESIGN'],
      unitMap['LINI_2_WEBTECH'],
      unitMap['LINI_3_ASSIST_DATA'],
      unitMap['LINI_4_MEDIA_AFFILIATE'],
      unitMap['LINI_5_AI_ACADEMY']
    ];

    new Chart(ctxUnits, {
      type: 'bar',
      data: {
        labels: ['Lini 1 Design', 'Lini 2 WebTech', 'Lini 3 Data', 'Lini 4 Media', 'Lini 5 AI Academy'],
        datasets: [{
          label: 'Pendapatan (Juta Rp)',
          data: unitData,
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
    const founders = [
      { id: 'alfatih', name: 'Alfatih' },
      { id: 'hilwa', name: 'Hilwa' },
      { id: 'novita', name: 'Novita' },
      { id: 'ilham', name: 'Ilham' },
      { id: 'syarah', name: 'Syarah' },
      { id: 'aywa', name: 'Aywa' },
      { id: 'ahmad', name: 'Ahmad' }
    ];
    const labels = founders.map(f => f.name);
    const hours = founders.map(f => store.calculateUserWeeklyHours(f.id));

    new Chart(ctxBurnout, {
      type: 'bar',
      data: {
        labels: labels,
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
  const totalIncome = store.state.cashflow
    .filter(c => c.type === 'INCOME' || c.type === 'IN')
    .reduce((sum, c) => sum + Number(c.amountIdr || 0), 0);
  const currentCash = store.calculateCashBalance();
  const zakatEstimated = Math.round(totalIncome * 0.025);

  const checkins = store.state.checkins;
  const compliantCount = checkins.filter(c => !c.isLate).length;
  const complianceRate = checkins.length > 0 ? Math.round((compliantCount / checkins.length) * 100) : 100;

  printContainer.innerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 750px; margin: 0 auto; padding: 25px;">
      <div style="text-align: center; border-bottom: 2px solid #0F4C3A; padding-bottom: 15px; margin-bottom: 25px;">
        <h2 style="color: #0F4C3A; margin: 0;">LAPORAN EVALUASI AKADEMIK & TRACTION REPORT</h2>
        <p style="margin: 5px 0; font-size: 13px; color: #555;">Mata Kuliah Kewirausahaan (MKUT.102) • Program Studi Sistem Informasi STMIK Tazkia</p>
        <p style="margin: 0; font-size: 12px; font-weight: bold; color: #0F4C3A;">KaryaKita AI & Venture Studio (Sprint ${store.state.currentSprint || 1})</p>
      </div>

      <h3 style="color: #333; font-size: 14px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">1. Ringkasan Kinerja Usaha (Traction)</h3>
      <table style="width: 100%; font-size: 12px; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 6px; border: 1px solid #ddd; width: 50%;">Total Pemasukan Bruto Terverifikasi:</td>
          <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">Rp${totalIncome.toLocaleString('id-ID')}</td>
        </tr>
        <tr>
          <td style="padding: 6px; border: 1px solid #ddd;">Saldo Kas Mandiri Aktif:</td>
          <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">Rp${currentCash.toLocaleString('id-ID')} ${currentCash >= store.state.settings.graduationThresholdIdr ? '(Lulus Graduation Rule)' : '(Mode Bootstrapping)'}</td>
        </tr>
        <tr>
          <td style="padding: 6px; border: 1px solid #ddd;">Estimasi Kewajiban Zakat/Infaq Usaha (2,5%):</td>
          <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">Rp${zakatEstimated.toLocaleString('id-ID')}</td>
        </tr>
        <tr>
          <td style="padding: 6px; border: 1px solid #ddd;">Tingkat Kepatuhan Async Check-In:</td>
          <td style="padding: 6px; border: 1px solid #ddd; font-weight: bold;">${complianceRate}%</td>
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
        <!-- TAB 1: USERS & CREDENTIAL MANAGEMENT -->
        <div class="card-surface p-5 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border pb-3">
            <div>
              <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
                <i data-lucide="key-round" class="w-4 h-4 text-brand-emerald"></i>
                <span>Manajemen Kredensial & Aktivasi Akun 7 Co-Founder</span>
              </h3>
              <p class="text-xs text-gray-500 mt-0.5">Kredensial awal diberikan oleh DevOps/Admin. Co-Founder wajib mengganti kata sandi baru saat login pertama kali.</p>
            </div>
            <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">
              Sistem Keamanan Tertutup (Zero-OAuth)
            </span>
          </div>

          <div class="overflow-x-auto border border-brand-border rounded-lg">
            <table class="w-full text-xs text-left">
              <thead class="bg-gray-50 text-[10px] text-gray-600 uppercase">
                <tr>
                  <th class="p-3">Co-Founder</th>
                  <th class="p-3">Username / ID</th>
                  <th class="p-3">Status Kata Sandi</th>
                  <th class="p-3 text-center">Status Tur Panduan</th>
                  <th class="p-3 text-right">Aksi DevOps / Admin</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                ${Object.values(store.state.users).filter(u => u.id !== 'client_guest').map(u => `
                  <tr class="hover:bg-gray-50 transition">
                    <td class="p-3 flex items-center gap-2.5">
                      <img src="${u.avatar}" class="w-8 h-8 rounded-full object-cover">
                      <div>
                        <strong class="text-gray-900 block">${u.name}</strong>
                        <span class="text-[10px] text-gray-500">${u.roleLabel}</span>
                      </div>
                    </td>
                    <td class="p-3 font-mono text-gray-700">${u.username || u.id}</td>
                    <td class="p-3">
                      ${u.mustChangePassword ? `
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800 border border-amber-300">
                          <i data-lucide="key" class="w-3 h-3 text-amber-600"></i>
                          <span>Password Sementara Aktif</span>
                        </span>
                      ` : `
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <i data-lucide="shield-check" class="w-3 h-3 text-emerald-600"></i>
                          <span>Aktif (Password Pribadi)</span>
                        </span>
                      `}
                    </td>
                    <td class="p-3 text-center">
                      ${u.hasCompletedOnboarding ? `
                        <span class="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Selesai</span>
                      ` : `
                        <span class="text-[10px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-200">Belum Mulai</span>
                      `}
                    </td>
                    <td class="p-3 text-right">
                      <div class="flex items-center justify-end gap-1.5">
                        ${u.mustChangePassword ? `
                          <button onclick="copyTempPassword('${u.id}')" class="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded text-[11px] font-semibold flex items-center gap-1 transition" title="Salin kata sandi sementara untuk dikirim via WA">
                            <i data-lucide="copy" class="w-3 h-3"></i>
                            <span>Salin Sandi</span>
                          </button>
                        ` : ''}
                        <button onclick="resetUserCredentialsByAdmin('${u.id}')" class="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded text-[11px] font-semibold flex items-center gap-1 transition" title="Terbitkan kata sandi sementara baru">
                          <i data-lucide="rotate-ccw" class="w-3 h-3"></i>
                          <span>Reset</span>
                        </button>
                        <button onclick="openOnboardingTour(store.state.users['${u.id}'])" class="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-brand-emerald border border-emerald-200 rounded text-[11px] font-semibold flex items-center gap-1 transition" title="Tinjau panduan tur role ini">
                          <i data-lucide="play" class="w-3 h-3"></i>
                          <span>Tur</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
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
  if (!store.state.projects || store.state.projects.length === 0) {
    return `
      <div class="max-w-2xl mx-auto py-12 px-4 text-center card-surface bg-white space-y-4">
        <div class="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-brand-emerald flex items-center justify-center">
          <i data-lucide="shield-check" class="w-8 h-8"></i>
        </div>
        <h3 class="font-heading font-bold text-base text-gray-900">Portal Klien B2B KaryaKita</h3>
        <p class="text-xs text-gray-500 max-w-md mx-auto">
          Belum ada proyek aktif yang tercatat di sistem. Ketika proyek klien dibuat di menu <strong>Proyek</strong>, tautan pemantauan progres transparan untuk klien B2B akan otomatis aktif di sini.
        </p>
        <button onclick="navigateTo('projects')" class="bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-1.5 transition">
          <i data-lucide="folder-plus" class="w-4 h-4"></i>
          <span>Buka Menu Proyek</span>
        </button>
      </div>
    `;
  }

  const proj = store.state.projects[0];
  const clientVisibleTasks = store.state.tasks.filter(t => t.projectId === proj.id && t.isClientVisible);

  return `
    <div class="space-y-6 max-w-4xl mx-auto">
      
      <!-- Client Header -->
      <div class="card-surface p-6 bg-white border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
            Portal Pemantauan Klien Resmi KaryaKita
          </span>
          <h2 class="font-heading font-bold text-lg text-gray-900 mt-2">${proj.title}</h2>
          <p class="text-xs text-gray-500">Klien Terhormat: <strong>${proj.clientName}</strong> • PM: ${store.state.users[proj.picId]?.name || 'Tim KaryaKita'}</p>
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
          ${clientVisibleTasks.length === 0 ? `
            <div class="p-6 text-center text-gray-400 text-xs border border-dashed rounded-lg">
              <i data-lucide="list-checks" class="w-8 h-8 mx-auto text-gray-300 mb-2"></i>
              <p class="font-semibold text-gray-600">Tahapan progres belum ditambahkan untuk proyek ini.</p>
              <p class="text-[11px] text-gray-400 mt-0.5">Tugas dengan opsi "Tampilkan ke Klien" di Papan Tugas akan tampil transparan di linimasa ini.</p>
            </div>
          ` : clientVisibleTasks.map((t, idx) => `
            <div class="flex items-center gap-3 p-3 rounded-lg ${t.status === 'DONE' ? 'bg-emerald-50 border border-emerald-200' : t.status === 'IN_PROGRESS' ? 'bg-sky-50 border border-sky-200' : 'bg-gray-50 border border-gray-200'} text-xs">
              <i data-lucide="${t.status === 'DONE' ? 'check-circle-2' : t.status === 'IN_PROGRESS' ? 'clock' : 'circle'}" class="w-5 h-5 ${t.status === 'DONE' ? 'text-emerald-700' : t.status === 'IN_PROGRESS' ? 'text-sky-700' : 'text-gray-400'}"></i>
              <div class="flex-1">
                <strong class="${t.status === 'DONE' ? 'text-emerald-950' : t.status === 'IN_PROGRESS' ? 'text-sky-950' : 'text-gray-700'}">${idx + 1}. ${t.title}</strong>
                <p class="text-[11px] ${t.status === 'DONE' ? 'text-emerald-800' : t.status === 'IN_PROGRESS' ? 'text-sky-800' : 'text-gray-500'}">${t.description || 'Pengerjaan sesuai scope proyek.'}</p>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded ${t.status === 'DONE' ? 'bg-emerald-200 text-emerald-900' : t.status === 'IN_PROGRESS' ? 'bg-sky-200 text-sky-900' : 'bg-gray-200 text-gray-600'}">
                ${t.status === 'DONE' ? 'Selesai' : t.status === 'IN_PROGRESS' ? 'In Progress' : 'Menunggu'}
              </span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Revision Submission with Quota -->
      <div class="card-surface p-6 bg-white space-y-4">
        <div class="flex items-center justify-between border-b border-brand-border pb-3">
          <h4 class="font-heading font-bold text-sm text-gray-900">Kirim Catatan Masukan / Revisi</h4>
          <span class="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded">
            Sisa Kuota Revisi: ${Math.max(0, (proj.revisionQuota || 2) - (proj.revisionUsed || 0))} / ${proj.revisionQuota || 2}
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

      <!-- Berkas & Deliverable Proyek (Strict NDA Guard: CLIENT_SAFE Only) -->
      <div class="card-surface p-6 bg-white space-y-4">
        <div class="flex items-center justify-between border-b border-brand-border pb-3">
          <h4 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
            <i data-lucide="folder-check" class="w-4 h-4 text-brand-emerald"></i>
            <span>Berkas & Deliverable Resmi Proyek</span>
          </h4>
          <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <i data-lucide="shield-check" class="w-3 h-3 text-emerald-600"></i>
            <span>Terkurasi Aman (Client-Safe)</span>
          </span>
        </div>

        ${(() => {
          const clientFiles = store.state.archives.filter(a => (a.projectId === proj.id || !a.projectId) && (a.visibility === 'CLIENT_SAFE'));
          if (clientFiles.length === 0) {
            return `
              <div class="p-6 text-center text-gray-400 text-xs border border-dashed rounded-lg">
                <i data-lucide="folder-x" class="w-8 h-8 mx-auto text-gray-300 mb-2"></i>
                <p class="font-semibold text-gray-600">Belum ada deliverable publik yang diunggah.</p>
                <p class="text-[11px] text-gray-400 mt-0.5">Dokumen berlabel CLIENT_SAFE akan otomatis muncul di sini. Dokumen rahasia tim & berlabel NDA terlindungi secara ketat.</p>
              </div>
            `;
          }
          return `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${clientFiles.map(f => `
                <div class="p-3 border border-gray-200 rounded-lg flex items-center justify-between gap-3 bg-gray-50/50 hover:bg-gray-50 transition text-xs">
                  <div class="flex items-center gap-2.5 truncate">
                    <i data-lucide="file-check" class="w-4 h-4 text-brand-emerald flex-shrink-0"></i>
                    <div class="truncate">
                      <strong class="text-gray-900 block truncate">${f.title}</strong>
                      <span class="text-[10px] text-gray-500">${f.category} • Akses Terverifikasi</span>
                    </div>
                  </div>
                  <a href="${f.url}" target="_blank" class="px-3 py-1 bg-brand-emerald hover:bg-brand-hover text-white rounded text-[11px] font-semibold flex items-center gap-1 flex-shrink-0 transition">
                    <span>Buka</span>
                    <i data-lucide="external-link" class="w-3 h-3"></i>
                  </a>
                </div>
              `).join('')}
            </div>
          `;
        })()}
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
  if (!proj) return;

  const quota = proj.revisionQuota || 2;
  const currentUsed = proj.revisionUsed || 0;
  const isOutOfQuota = currentUsed >= quota;

  const triageItem = {
    id: 'triage-' + Date.now(),
    projectId: proj.id,
    projectTitle: proj.title,
    clientName: proj.clientName,
    note: note,
    submittedAt: new Date().toISOString(),
    status: 'PENDING_TRIAGE',
    quotaRemaining: Math.max(0, quota - currentUsed),
    isOutOfQuota: isOutOfQuota
  };

  if (!store.state.revisionTriage) store.state.revisionTriage = [];
  store.state.revisionTriage.unshift(triageItem);
  store.logAudit('CLIENT_REVISION_TRIAGE_QUEUED', `Revisi Klien: ${proj.title}`, `Catatan revisi diarahkan ke Inbox Triage (${isOutOfQuota ? 'Melebihi Kuota' : 'Dalam Kuota'}).`);
  store.saveState();

  const noteInput = document.getElementById('client-rev-note');
  if (noteInput) noteInput.value = '';

  showToast('Catatan revisi berhasil dikirim! Menunggu triage & persetujuan tim PM.');
  renderActiveView();
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
  const pct = threshold > 0 ? Math.min(100, Math.round((cash / threshold) * 100)) : 0;

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

  // Update Topbar Sprint and Tasks Badge
  const sprintBadge = document.getElementById('topbar-sprint-badge');
  if (sprintBadge) {
    sprintBadge.textContent = `Sprint ${store.state.currentSprint || 1} (Q1)`;
  }
  const taskBadge = document.getElementById('badge-count-tasks');
  if (taskBadge) {
    taskBadge.textContent = store.state.tasks.length;
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

  // Update Topbar & Sidebar Capacity Status Pill
  const capMeta = (typeof CAPACITY_META !== 'undefined' && CAPACITY_META[user.capacityStatus]) || { label: 'Tersedia (4–5j)', color: 'bg-emerald-400' };
  const topCapDot = document.getElementById('topbar-capacity-dot');
  const topCapLabel = document.getElementById('topbar-capacity-label');
  const sideCapDot = document.getElementById('sidebar-capacity-dot');
  if (topCapDot && topCapLabel) {
    topCapDot.className = `w-2 h-2 rounded-full ${capMeta.color}`;
    topCapLabel.textContent = capMeta.label;
  }
  if (sideCapDot) {
    sideCapDot.className = `w-2.5 h-2.5 rounded-full ${capMeta.color}`;
    sideCapDot.title = `Kapasitas: ${capMeta.label}`;
  }

  // Update Theme Toggle Icon
  const themeIcon = document.getElementById('theme-toggle-icon');
  if (themeIcon) {
    const isDark = document.documentElement.classList.contains('dark');
    themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    if (window.lucide) lucide.createIcons();
  }
}

// ==============================================================================
// ENTERPRISE AUTHENTICATION & ROLE-TAILORED ONBOARDING TOUR
// ==============================================================================

const ROLE_ONBOARDING_DATA = {
  SUPER_ADMIN: {
    slides: [
      {
        badge: "Prinsip & Visi Studio",
        title: "Selamat Datang di KaryaKita Hub OS",
        desc: "Sistem operasi venture studio mandiri berbasis syariah (Syirkah 'Abdan, zero-riba, zero-gharar). 13 modul terintegrasi untuk mendukung 7 mahasiswa berkolaborasi seimbang dengan jadwal kuliah STMIK Tazkia.",
        icon: "shield-check",
        color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50"
      },
      {
        badge: "Peran Khusus Anda: CEO & CTO",
        title: "Executive Command Center & Integrasi Sistem",
        desc: "Sebagai CEO & CTO, Anda memegang kendali eksekutif: memantau KPI studio di Beranda, mengaktifkan Academic Freeze H-7 ujian, mengelola delegasi approver, serta memastikan kedaulatan data dan repositori GitHub.",
        icon: "cpu",
        color: "text-sky-600 bg-sky-50 dark:bg-sky-950/50"
      },
      {
        badge: "Ritme Akademik",
        title: "Supportive Rhythm Pulse & Kapasitas",
        desc: "Gunakan Capacity Pill di Top Bar untuk mengatur status kapasitas ('Tersedia', 'Padat Kuliah', 'Mode Ujian', 'Butuh Bantuan'). Rekan tim dapat saling mendukung ritme tanpa rasa tertekan.",
        icon: "heart-handshake",
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50"
      },
      {
        badge: "Langkah Awal",
        title: "Siap Memimpin Studio?",
        desc: "Bagikan kredensial awal kepada rekan co-founder, periksa Papan Tugas, dan pantau ritme mingguan studio. Selamat berkarya dengan itqan dan keberkahan!",
        icon: "rocket",
        color: "text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50"
      }
    ]
  },
  OPS_ADMIN: {
    slides: [
      {
        badge: "Prinsip & Visi Studio",
        title: "Selamat Datang di KaryaKita Hub OS",
        desc: "Pusat tata kelola operasional dan manajemen proyek terpadu untuk 7 co-founder mahasiswa STMIK Tazkia. Menjamin seluruh delivery tepat waktu dengan standar Itqan.",
        icon: "briefcase",
        color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50"
      },
      {
        badge: "Peran Khusus Anda: COO & Head of PM",
        title: "Kanban Papan Tugas & Triage Revisi Klien",
        desc: "Kelola Papan Tugas dengan DoD (Definition of Done), verifikasi jam kerja, dan kelola 'Inbox Triage Revisi' proyek B2B agar masukan klien tidak langsung membebani Kanban.",
        icon: "check-square",
        color: "text-purple-600 bg-purple-50 dark:bg-purple-950/50"
      },
      {
        badge: "Maker-Checker & Delegasi",
        title: "Backup Approver & Keuangan",
        desc: "Saat CFO (Novita Rani) berada dalam 'Mode Ujian (EXAM_MODE)', Anda secara otomatis didelegasikan sebagai Backup Approver untuk memverifikasi pembayaran DP 50% dan termin proyek.",
        icon: "shield-alert",
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50"
      },
      {
        badge: "Langkah Awal",
        title: "Siap Mengawal Operasional?",
        desc: "Jadwalkan Syura mingguan di menu Lapor, pantau tugas berjalan, dan kelola antrean proyek studio.",
        icon: "arrow-right-circle",
        color: "text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50"
      }
    ]
  },
  FINANCE_ADMIN: {
    slides: [
      {
        badge: "Prinsip Syariah",
        title: "Buku Kas & Tata Kelola Syariah",
        desc: "Sistem pencatatan kas zero-riba dan zero-gharar. Dilengkapi kalkulator otomatis Zakat Perusahaan 2,5%, Graduation Rule Rp3,5 Juta, dan pelacak Qardh Hasan 0% bunga.",
        icon: "coins",
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50"
      },
      {
        badge: "Peran Khusus Anda: CFO",
        title: "Payment Gate & Musyawarah 48 Jam",
        desc: "Verifikasi bukti transfer DP 50% dan pelunasan proyek di menu Proyek. Sebelum mengunci buku bulanan, aktifkan 'Review & Musyawarah 48 Jam' agar seluruh co-founder dapat saling menelaah (taradhin).",
        icon: "receipt",
        color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50"
      },
      {
        badge: "Keadilan Bagi Hasil",
        title: "Porsi 60% Rata & 40% Eksekutor Berbobot",
        desc: "Bagi hasil dihitung otomatis secara dinamis: 60% dibagi rata kepada co-founder aktif, dan 40% dialokasikan berdasarkan 4-Pilar Poin Kontribusi berbobot.",
        icon: "scale",
        color: "text-sky-600 bg-sky-50 dark:bg-sky-950/50"
      },
      {
        badge: "Langkah Awal",
        title: "Cetak Invoice & Awasi Kas",
        desc: "Gunakan Generator Invoice PDF otomatis untuk klien B2B dan pastikan arus kas studio tumbuh sehat menuju target kelulusan bootstrap.",
        icon: "printer",
        color: "text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50"
      }
    ]
  },
  UNIT_LEAD_TECH: {
    slides: [
      {
        badge: "Prinsip & Visi Studio",
        title: "Selamat Datang di KaryaKita Hub OS",
        desc: "Sistem operasi venture studio tempat Anda memimpin pengembangan bisnis (B2B Deals) dan unit teknologi serta data assistance.",
        icon: "trending-up",
        color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50"
      },
      {
        badge: "Peran Khusus Anda: CBDO & CDO",
        title: "Pipeline CRM 6-Tahap & Lini 3 Data",
        desc: "Pantau pipeline prospek klien B2B dari Leads hingga Won. Konversikan deal yang dimenangkan menjadi proyek resmi dengan 1-klik, serta pimpin unit Assist & Data (Lini 3).",
        icon: "target",
        color: "text-blue-600 bg-blue-50 dark:bg-blue-950/50"
      },
      {
        badge: "Poin Kontribusi",
        title: "Akuisisi Klien & Bobot Syirkah",
        desc: "Setiap deal klien B2B yang berhasil Anda menangkan (Won) menyumbangkan 5 poin kontribusi berbobot ke porsi eksekutor Syirkah 'Abdan Anda.",
        icon: "award",
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50"
      },
      {
        badge: "Langkah Awal",
        title: "Buka Pipeline CRM",
        desc: "Tambah calon klien pertama Anda di menu CRM dan pantau konversinya bersama tim penjualan.",
        icon: "rocket",
        color: "text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50"
      }
    ]
  },
  UNIT_LEAD_CREATIVE: {
    slides: [
      {
        badge: "Prinsip & Visi Studio",
        title: "Selamat Datang di KaryaKita Hub OS",
        desc: "Pusat komando pemasaran, konten viral, dan pertumbuhan audiens KaryaKita AI & Venture Studio.",
        icon: "sparkles",
        color: "text-pink-600 bg-pink-50 dark:bg-pink-950/50"
      },
      {
        badge: "Peran Khusus Anda: CMO",
        title: "Kalender Konten Media & Jaringan Afiliasi",
        desc: "Rancang ide konten di TikTok, Instagram Reels, YouTube Shorts, dan LinkedIn di menu Media & Afiliasi (Lini 4). Kelola komisi mitra afiliasi yang mempromosikan layanan studio.",
        icon: "video",
        color: "text-purple-600 bg-purple-50 dark:bg-purple-950/50"
      },
      {
        badge: "Poin Kontribusi",
        title: "Produksi Konten & Bobot Syirkah",
        desc: "Setiap konten yang diterbitkan dan dipimpin oleh Anda otomatis tercatat menambah poin kontribusi Pilar Media & AI Academy pada evaluasi bulanan.",
        icon: "award",
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50"
      },
      {
        badge: "Langkah Awal",
        title: "Siap Viralkan KaryaKita?",
        desc: "Masuk ke menu Media & Affiliate dan tambahkan rencana konten edukasi AI pekan ini!",
        icon: "send",
        color: "text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50"
      }
    ]
  },
  UNIT_LEAD_ACADEMY: {
    slides: [
      {
        badge: "Prinsip & Visi Studio",
        title: "Selamat Datang di KaryaKita Hub OS",
        desc: "Pusat inkubasi talenta dan workshop kecerdasan buatan terdepan melalui lini KaryaKita AI Academy (Lini 5).",
        icon: "graduation-cap",
        color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50"
      },
      {
        badge: "Peran Khusus Anda: CRO & Lead Academy",
        title: "Manajemen Batch Workshop & Peserta",
        desc: "Buka batch workshop AI baru, import daftar peserta via CSV, verifikasi bukti pembayaran peserta, dan terbitkan sertifikat resmi di menu AI Academy.",
        icon: "users",
        color: "text-teal-600 bg-teal-50 dark:bg-teal-950/50"
      },
      {
        badge: "Poin Kontribusi",
        title: "Eksekusi Batch & Poin Syirkah",
        desc: "Setiap batch academy aktif yang Anda koordinasikan menyumbang poin berbobot ke dalam kalkulator bagi hasil studio secara proporsional dan adil.",
        icon: "award",
        color: "text-amber-600 bg-amber-50 dark:bg-amber-950/50"
      },
      {
        badge: "Langkah Awal",
        title: "Siap Luncurkan Batch Baru?",
        desc: "Buka menu AI Academy, periksa silabus workshop, dan kelola calon peserta yang mendaftar.",
        icon: "book-open",
        color: "text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50"
      }
    ]
  },
  UNIT_LEAD_DESIGN: {
    slides: [
      {
        badge: "Prinsip & Visi Studio",
        title: "Selamat Datang di KaryaKita Hub OS",
        desc: "Studio kreatif tempat identitas visual, brand asset, dan desain antarmuka kelas dunia dilahirkan untuk klien B2B.",
        icon: "palette",
        color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50"
      },
      {
        badge: "Peran Khusus Anda: Creative Director",
        title: "Lini 1 Desain & Vault Arsip Dokumen",
        desc: "Pimpin proyek branding & UI/UX, simpan deliverable resmi ke Vault Arsip dengan tag 'CLIENT_SAFE', dan lindungi file sensitif dengan tag 'NDA_RESTRICTED'.",
        icon: "folder-check",
        color: "text-violet-600 bg-violet-50 dark:bg-violet-950/50"
      },
      {
        badge: "Standar Kualitas",
        title: "Itqan & Bukti Karya",
        desc: "Sematkan tautan bukti karya Figma/Google Drive pada setiap kartu tugas sebelum digeser ke kolom 'Done (Itqan)' agar otomatis terindeks ke arsip.",
        icon: "check-circle-2",
        color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50"
      },
      {
        badge: "Langkah Awal",
        title: "Mulai Desain Mahakarya",
        desc: "Buka Papan Tugas, cek permintaan desain dari proyek klien, dan unggah aset siap kirim ke portal klien.",
        icon: "pen-tool",
        color: "text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50"
      }
    ]
  }
};

function getOnboardingDataForUser(user) {
  if (!user) return ROLE_ONBOARDING_DATA.SUPER_ADMIN;
  if (user.role === 'SUPER_ADMIN') return ROLE_ONBOARDING_DATA.SUPER_ADMIN;
  if (user.role === 'OPS_ADMIN') return ROLE_ONBOARDING_DATA.OPS_ADMIN;
  if (user.role === 'FINANCE_ADMIN') return ROLE_ONBOARDING_DATA.FINANCE_ADMIN;
  if (user.id === 'ilham') return ROLE_ONBOARDING_DATA.UNIT_LEAD_TECH;
  if (user.id === 'syarah' || user.id === 'syaraf') return ROLE_ONBOARDING_DATA.UNIT_LEAD_CREATIVE;
  if (user.id === 'nazwa') return ROLE_ONBOARDING_DATA.UNIT_LEAD_ACADEMY;
  if (user.id === 'ahmad') return ROLE_ONBOARDING_DATA.UNIT_LEAD_DESIGN;
  return ROLE_ONBOARDING_DATA.SUPER_ADMIN;
}

let currentOnboardingIndex = 0;
let currentOnboardingUser = null;

function openOnboardingTour(user) {
  currentOnboardingUser = user || store.getCurrentUser();
  currentOnboardingIndex = 0;
  renderOnboardingModal();
}

function renderOnboardingModal() {
  const tourData = getOnboardingDataForUser(currentOnboardingUser);
  const slides = tourData.slides;
  const currentSlide = slides[currentOnboardingIndex];
  const isFirst = currentOnboardingIndex === 0;
  const isLast = currentOnboardingIndex === slides.length - 1;

  const modalHtml = `
    <div class="p-6 sm:p-8 space-y-6 max-w-lg mx-auto">
      
      <!-- Tour Header & Skip Button -->
      <div class="flex items-center justify-between border-b border-brand-border dark:border-[#23362F] pb-3">
        <div class="flex items-center gap-2">
          <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            ${currentSlide.badge}
          </span>
          <span class="text-xs text-gray-400">(${currentOnboardingIndex + 1} dari ${slides.length})</span>
        </div>
        <button onclick="finishOnboardingTour()" class="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition font-medium flex items-center gap-1">
          <span>Lewati Tur</span>
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>

      <!-- Slide Main Content (Interactive Carousel Card) -->
      <div class="text-center py-4 space-y-4">
        <div class="w-16 h-16 mx-auto rounded-2xl ${currentSlide.color} flex items-center justify-center shadow-sm">
          <i data-lucide="${currentSlide.icon}" class="w-8 h-8"></i>
        </div>

        <div class="space-y-2">
          <h3 class="font-heading font-bold text-lg text-gray-900 dark:text-white">${currentSlide.title}</h3>
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
            ${currentSlide.desc}
          </p>
        </div>
      </div>

      <!-- Carousel Navigation & Dots Indicator -->
      <div class="flex flex-col gap-4 border-t border-brand-border dark:border-[#23362F] pt-4">
        
        <!-- Dots -->
        <div class="flex items-center justify-center gap-2">
          ${slides.map((_, idx) => `
            <button onclick="goToOnboardingSlide(${idx})" class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentOnboardingIndex ? 'bg-brand-emerald dark:bg-emerald-400 w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'}" aria-label="Slide ${idx + 1}"></button>
          `).join('')}
        </div>

        <!-- Buttons -->
        <div class="flex items-center justify-between gap-3">
          <button onclick="prevOnboardingSlide()" ${isFirst ? 'disabled class="px-3.5 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-300 dark:text-gray-700 text-xs cursor-not-allowed"' : 'class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"'} flex items-center gap-1.5>
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
            <span>Sebelumnya</span>
          </button>

          <button onclick="${isLast ? 'finishOnboardingTour()' : 'nextOnboardingSlide()'}" class="px-5 py-2 rounded-lg bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm">
            <span>${isLast ? 'Masuk ke Dashboard' : 'Selanjutnya'}</span>
            <i data-lucide="${isLast ? 'check' : 'chevron-right'}" class="w-4 h-4"></i>
          </button>
        </div>

      </div>

    </div>
  `;

  openModal(modalHtml);
  if (window.lucide) lucide.createIcons();
}

function nextOnboardingSlide() {
  const tourData = getOnboardingDataForUser(currentOnboardingUser);
  if (currentOnboardingIndex < tourData.slides.length - 1) {
    currentOnboardingIndex++;
    renderOnboardingModal();
  }
}

function prevOnboardingSlide() {
  if (currentOnboardingIndex > 0) {
    currentOnboardingIndex--;
    renderOnboardingModal();
  }
}

function goToOnboardingSlide(idx) {
  currentOnboardingIndex = idx;
  renderOnboardingModal();
}

function finishOnboardingTour() {
  if (currentOnboardingUser) {
    currentOnboardingUser.hasCompletedOnboarding = true;
    store.logAudit('ONBOARDING_COMPLETED', `Product Tour: ${currentOnboardingUser.name}`, `Tur panduan role ${currentOnboardingUser.roleLabel} telah diselesaikan.`);
    store.saveState();
  }
  closeModal();
  showToast('Selamat bekerja & berkolaborasi di KaryaKita Hub!');
  renderActiveView();
}

// Authentication Helpers
function checkPasswordStrength(pwd) {
  const hasLength = (pwd || '').length >= 8;
  const hasUpper = /[A-Z]/.test(pwd || '');
  const hasLower = /[a-z]/.test(pwd || '');
  const hasNumberOrSymbol = /[0-9]/.test(pwd || '') || /[^A-Za-z0-9]/.test(pwd || '');
  return {
    isValid: hasLength && hasUpper && hasLower && hasNumberOrSymbol,
    hasLength,
    hasUpper,
    hasLower,
    hasNumberOrSymbol
  };
}

function validatePasswordStrengthLive(pwd) {
  const s = checkPasswordStrength(pwd);
  const elLen = document.getElementById('rule-length');
  const elUp = document.getElementById('rule-upper');
  const elLow = document.getElementById('rule-lower');
  const elNum = document.getElementById('rule-number');

  const updateRule = (el, passed, label) => {
    if (!el) return;
    if (passed) {
      el.className = 'flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold';
      el.innerHTML = '<i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-500"></i> ' + label;
    } else {
      el.className = 'flex items-center gap-1 text-gray-400';
      el.innerHTML = '<i data-lucide="circle" class="w-3 h-3"></i> ' + label;
    }
  };

  updateRule(elLen, s.hasLength, 'Min. 8 Karakter');
  updateRule(elUp, s.hasUpper, 'Huruf Besar (A-Z)');
  updateRule(elLow, s.hasLower, 'Huruf Kecil (a-z)');
  updateRule(elNum, s.hasNumberOrSymbol, 'Angka / Simbol');
  if (window.lucide) lucide.createIcons();
}

function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!input || !icon) return;
  if (input.type === 'password') {
    input.type = 'text';
    icon.setAttribute('data-lucide', 'eye-off');
  } else {
    input.type = 'password';
    icon.setAttribute('data-lucide', 'eye');
  }
  if (window.lucide) lucide.createIcons();
}

function renderAuthForm(formType, userId = null) {
  const container = document.getElementById('auth-form-container');
  if (!container) return;

  if (formType === 'login') {
    container.innerHTML = `
      <form id="form-login" onsubmit="handleLoginSubmit(event)" class="space-y-4">
        <div>
          <h3 class="font-heading font-bold text-base text-gray-900 dark:text-white">Masuk ke Studio</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Gunakan ID / Email resmi co-founder dan kata sandi dari DevOps.</p>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Username / Email Co-Founder *</label>
            <div class="relative">
              <i data-lucide="user" class="w-4 h-4 absolute left-3 top-2.5 text-gray-400"></i>
              <input type="text" id="login-username" required placeholder="Misal: alfatih, novita, atau syarah" class="w-full pl-9 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-emerald">
            </div>
          </div>

          <div>
            <label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Kata Sandi *</label>
            <div class="relative">
              <i data-lucide="lock" class="w-4 h-4 absolute left-3 top-2.5 text-gray-400"></i>
              <input type="password" id="login-password" required placeholder="••••••••••••" class="w-full pl-9 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-emerald font-mono">
              <button type="button" onclick="togglePasswordVisibility('login-password', 'login-pwd-icon')" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                <i id="login-pwd-icon" data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="login-error-msg" class="hidden p-2.5 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0"></i>
          <span id="login-error-text">Kredensial tidak valid.</span>
        </div>

        <button type="submit" id="btn-submit-login" class="w-full py-2.5 bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-2">
          <span>Masuk ke Dashboard</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>

        <div class="p-3 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/40 text-[11px] text-emerald-800 dark:text-emerald-300 space-y-1">
          <div class="font-bold flex items-center gap-1.5">
            <i data-lucide="info" class="w-3.5 h-3.5 text-emerald-600"></i>
            <span>Login Pertama Kali?</span>
          </div>
          <p>Gunakan password sementara dari DevOps (contoh: <code>Kk#Fatih2026!x9</code>). Anda akan langsung diminta menentukan password baru pribadi demi keamanan.</p>
        </div>
      </form>
    `;
  } else if (formType === 'reset') {
    const user = store.state.users[userId];
    if (!user) return renderAuthForm('login');

    container.innerHTML = `
      <form id="form-reset-first-time" onsubmit="handleFirstTimeResetSubmit(event, '${user.id}')" class="space-y-4">
        <div class="text-center pb-2 border-b border-brand-border dark:border-[#23362F]">
          <div class="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 text-brand-emerald dark:text-emerald-400 flex items-center justify-center mb-2 shadow-inner">
            <i data-lucide="key-round" class="w-6 h-6"></i>
          </div>
          <h3 class="font-heading font-bold text-base text-gray-900 dark:text-white">Aktivasi Akun & Buat Kata Sandi Baru</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Ahlan wa Sahlan, <strong>${user.name}</strong> (${user.roleLabel})!<br>
            Ini adalah login pertama Anda. Silakan tentukan kata sandi baru pribadi Anda.
          </p>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Kata Sandi Baru Pribadi *</label>
            <div class="relative">
              <i data-lucide="lock" class="w-4 h-4 absolute left-3 top-2.5 text-gray-400"></i>
              <input type="password" id="reset-new-password" required oninput="validatePasswordStrengthLive(this.value)" placeholder="Minimal 8 karakter campuran" class="w-full pl-9 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-emerald font-mono">
              <button type="button" onclick="togglePasswordVisibility('reset-new-password', 'reset-pwd-icon1')" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                <i id="reset-pwd-icon1" data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Real-Time Password Strength Checklist -->
          <div class="p-3 bg-gray-50 dark:bg-[#192722] rounded-lg border border-gray-200 dark:border-gray-700 space-y-1.5 text-[11px]">
            <span class="font-semibold block text-gray-700 dark:text-gray-300">Kriteria Keamanan Sandi:</span>
            <div class="grid grid-cols-2 gap-1 text-[10px]">
              <div id="rule-length" class="flex items-center gap-1 text-gray-400"><i data-lucide="circle" class="w-3 h-3"></i> Min. 8 Karakter</div>
              <div id="rule-upper" class="flex items-center gap-1 text-gray-400"><i data-lucide="circle" class="w-3 h-3"></i> Huruf Besar (A-Z)</div>
              <div id="rule-lower" class="flex items-center gap-1 text-gray-400"><i data-lucide="circle" class="w-3 h-3"></i> Huruf Kecil (a-z)</div>
              <div id="rule-number" class="flex items-center gap-1 text-gray-400"><i data-lucide="circle" class="w-3 h-3"></i> Angka / Simbol</div>
            </div>
          </div>

          <div>
            <label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Konfirmasi Kata Sandi Baru *</label>
            <div class="relative">
              <i data-lucide="check-check" class="w-4 h-4 absolute left-3 top-2.5 text-gray-400"></i>
              <input type="password" id="reset-confirm-password" required placeholder="Ulangi kata sandi baru" class="w-full pl-9 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-emerald font-mono">
              <button type="button" onclick="togglePasswordVisibility('reset-confirm-password', 'reset-pwd-icon2')" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                <i id="reset-pwd-icon2" data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="reset-error-msg" class="hidden p-2.5 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0"></i>
          <span id="reset-error-text">Kata sandi belum memenuhi kriteria.</span>
        </div>

        <div class="pt-2 flex items-center gap-2">
          <button type="button" onclick="renderAuthForm('login')" class="w-1/3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Batal
          </button>
          <button type="submit" id="btn-submit-reset" class="flex-1 py-2.5 bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center justify-center gap-1.5">
            <i data-lucide="shield-check" class="w-4 h-4"></i>
            <span>Simpan & Masuk Studio</span>
          </button>
        </div>
      </form>
    `;
  }
  if (window.lucide) lucide.createIcons();
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const usernameInput = document.getElementById('login-username')?.value.trim().toLowerCase();
  const passwordInput = document.getElementById('login-password')?.value;
  const errorBox = document.getElementById('login-error-msg');
  const errorText = document.getElementById('login-error-text');

  if (!usernameInput || !passwordInput) return;

  const user = Object.values(store.state.users).find(u => 
    (u.username && u.username.toLowerCase() === usernameInput) ||
    (u.id && u.id.toLowerCase() === usernameInput) ||
    (u.email && u.email.toLowerCase() === usernameInput)
  );

  if (!user || user.password !== passwordInput) {
    if (errorBox && errorText) {
      errorText.textContent = 'Username atau kata sandi tidak cocok. Silakan minta password sementara ke DevOps (Alfatih).';
      errorBox.classList.remove('hidden');
    }
    showToast('Kredensial tidak valid!', 'error');
    return;
  }

  // If user must change password (first time login)
  if (user.mustChangePassword) {
    if (errorBox) errorBox.classList.add('hidden');
    renderAuthForm('reset', user.id);
    return;
  }

  // Normal successful login
  store.state.authSession = {
    isAuthenticated: true,
    userId: user.id
  };
  store.state.activeUserId = user.id;
  store.logAudit('AUTH_LOGIN_SUCCESS', `Login: ${user.name}`, `Co-Founder ${user.name} (${user.roleLabel}) berhasil masuk.`);
  store.saveState();

  showToast(`Alhamdulillah! Selamat datang, ${user.name}.`);
  checkAuthAndRender();

  if (!user.hasCompletedOnboarding) {
    setTimeout(() => {
      openOnboardingTour(user);
    }, 400);
  }
}

function handleFirstTimeResetSubmit(event, userId) {
  event.preventDefault();
  const newPassword = document.getElementById('reset-new-password')?.value;
  const confirmPassword = document.getElementById('reset-confirm-password')?.value;
  const errorBox = document.getElementById('reset-error-msg');
  const errorText = document.getElementById('reset-error-text');

  const strength = checkPasswordStrength(newPassword);
  if (!strength.isValid) {
    if (errorBox && errorText) {
      errorText.textContent = 'Kata sandi baru wajib minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, dan angka/simbol.';
      errorBox.classList.remove('hidden');
    }
    showToast('Kriteria kata sandi belum terpenuhi!', 'error');
    return;
  }

  if (newPassword !== confirmPassword) {
    if (errorBox && errorText) {
      errorText.textContent = 'Konfirmasi kata sandi tidak cocok dengan kata sandi baru!';
      errorBox.classList.remove('hidden');
    }
    showToast('Konfirmasi kata sandi tidak cocok!', 'error');
    return;
  }

  const user = store.state.users[userId];
  if (!user) return;

  user.password = newPassword;
  user.mustChangePassword = false;
  user.passwordChangedAt = new Date().toISOString();

  store.state.authSession = {
    isAuthenticated: true,
    userId: user.id
  };
  store.state.activeUserId = user.id;

  store.logAudit('AUTH_PASSWORD_ACTIVATED', `Aktivasi Akun: ${user.name}`, 'Kata sandi baru berhasil dibuat. Akun co-founder aktif resmi.');
  store.saveState();

  showToast('Alhamdulillah! Kata sandi baru Anda berhasil disimpan. Akun Anda resmi aktif!');
  checkAuthAndRender();

  setTimeout(() => {
    openOnboardingTour(user);
  }, 400);
}

function copyTempPassword(userId) {
  const user = store.state.users[userId];
  if (!user) return;
  const textToCopy = `Halo ${user.name},\nBerikut kredensial awal untuk masuk ke KaryaKita Hub OS (https://karyakita-hub.vercel.app):\nUsername: ${user.username || user.id}\nPassword Sementara: ${user.password}\n\nSilakan langsung login dan buat password baru pribadi Anda.`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(`Kredensial sementara untuk ${user.name} disalin ke clipboard!`);
    }).catch(() => {
      prompt('Salin pesan kredensial ini untuk dikirim ke WhatsApp rekan:', textToCopy);
    });
  } else {
    prompt('Salin pesan kredensial ini untuk dikirim ke WhatsApp rekan:', textToCopy);
  }
}

function resetUserCredentialsByAdmin(userId) {
  const user = store.state.users[userId];
  if (!user) return;

  if (confirm(`Apakah Anda yakin ingin mereset kata sandi co-founder ${user.name}? Kata sandi sementara baru akan diterbitkan.`)) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*';
    let newTemp = 'Kk#' + user.name.split(' ')[0];
    for (let i = 0; i < 4; i++) {
      newTemp += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    newTemp += '!9';

    user.password = newTemp;
    user.mustChangePassword = true;
    user.hasCompletedOnboarding = false;

    store.logAudit('AUTH_ADMIN_PASSWORD_RESET', `Reset Kredensial: ${user.name}`, `DevOps/Admin mereset kata sandi sementara untuk ${user.name}.`);
    store.saveState();

    alert(`Kata sandi sementara baru untuk ${user.name}:\n\n${newTemp}\n\nKredensial ini telah disalin. Kirimkan kepada rekan via WhatsApp pribadi.`);
    if (navigator.clipboard) navigator.clipboard.writeText(newTemp).catch(() => {});
    renderActiveView();
  }
}

function logout() {
  if (confirm('Apakah Anda yakin ingin keluar dari KaryaKita Hub?')) {
    store.state.authSession = { isAuthenticated: false, userId: null };
    store.logAudit('AUTH_LOGOUT', 'User Logout', `Pengguna keluar dari sesi.`);
    store.saveState();
    showToast('Anda telah keluar dari sistem.');
    checkAuthAndRender();
  }
}

function checkAuthAndRender() {
  const authScreen = document.getElementById('auth-screen');
  const appLayout = document.getElementById('app-layout-wrapper');
  const topbarSimulator = document.getElementById('topbar-simulator');
  const dynamicBanners = document.getElementById('dynamic-banners-container');
  const mobileNav = document.querySelector('.mobile-bottom-nav');

  const isAuthenticated = store.state.authSession && store.state.authSession.isAuthenticated && store.state.authSession.userId;

  if (!isAuthenticated) {
    if (authScreen) authScreen.classList.remove('hidden');
    if (appLayout) appLayout.classList.add('hidden');
    if (topbarSimulator) topbarSimulator.classList.add('hidden');
    if (dynamicBanners) dynamicBanners.classList.add('hidden');
    if (mobileNav) mobileNav.classList.add('hidden');
    renderAuthForm('login');
  } else {
    // Synchronize activeUserId with authSession.userId
    store.state.activeUserId = store.state.authSession.userId;
    if (authScreen) authScreen.classList.add('hidden');
    if (appLayout) appLayout.classList.remove('hidden');
    if (topbarSimulator) topbarSimulator.classList.remove('hidden');
    if (dynamicBanners) dynamicBanners.classList.remove('hidden');
    if (mobileNav) mobileNav.classList.remove('hidden');

    const roleSelect = document.getElementById('role-simulator-select');
    if (roleSelect) roleSelect.value = store.state.activeUserId;

    updateTopBanners();
    renderActiveView();
  }
  if (window.lucide) lucide.createIcons();
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Adaptive Theme
  if (typeof initTheme === 'function') initTheme();

  // Theme Toggle Button
  const btnToggleTheme = document.getElementById('btn-toggle-theme');
  if (btnToggleTheme) {
    btnToggleTheme.addEventListener('click', () => {
      if (typeof toggleTheme === 'function') toggleTheme();
    });
  }

  // Mobile FAB Quick-Action Button
  const btnMobileFab = document.getElementById('btn-mobile-fab');
  if (btnMobileFab) {
    btnMobileFab.addEventListener('click', () => {
      if (typeof openQuickActionSheet === 'function') openQuickActionSheet();
    });
  }

  // Topbar Capacity Status Pill Button
  const btnTopCapacity = document.getElementById('btn-topbar-capacity');
  if (btnTopCapacity) {
    btnTopCapacity.addEventListener('click', () => {
      if (typeof openCapacityModal === 'function') openCapacityModal();
    });
  }

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
      if (store.state.authSession) {
        store.state.authSession.userId = e.target.value;
      }
      store.saveState();
      updateTopBanners();
      showToast('Beralih peran: ' + store.getCurrentUser().name);
      renderActiveView();
    });
  }

  // Reset Data Button
  const btnReset = document.getElementById('btn-reset-data');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('Kosongkan dan atur ulang data ke kondisi awal bersih?')) {
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

  // Check Authentication State and Render
  checkAuthAndRender();
});
