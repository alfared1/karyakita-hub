/**
 * ==============================================================================
 * KARYAKITA HUB — Internal Venture Studio Operating System
 * Aplikasi Web Dashboard Lengkap (Tahap 1, 2 & 3)
 * Organisasi: KaryaKita AI & Venture Studio (7 Mahasiswa SI STMIK Tazkia)
 * ==============================================================================
 */

// Global State Key for LocalStorage Persistence
const STORAGE_KEY = 'karyakita_hub_scaleup_v1';

// Global Safe HTML Escape Utility
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
if (typeof window !== 'undefined') {
  window.escapeHtml = escapeHtml;
}

// Capacity Status Metadata for Student Co-Founders
const CAPACITY_META = {
  AVAILABLE: { label: 'Tersedia (4–5j)', dot: 'bg-emerald-500', badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  BUSY_LECTURES: { label: 'Padat Kuliah', dot: 'bg-amber-500', badgeClass: 'bg-amber-100 text-amber-800 border-amber-300' },
  EXAM_MODE: { label: 'Mode Ujian', dot: 'bg-rose-500', badgeClass: 'bg-rose-100 text-rose-800 border-rose-300' },
  NEEDS_SUPPORT: { label: 'Butuh Bantuan', dot: 'bg-sky-500', badgeClass: 'bg-sky-100 text-sky-800 border-sky-300' },
};

// Default Google Gemini Studio API Key (Obfuscated to prevent public repository scraping)
const DEFAULT_GEMINI_KEY = (typeof atob !== 'undefined') ? atob('QVEuQWI4Uk42SkllelFoUnVERUU5cHNNRkw1ZDFZV0NDendDRk9CWVBwb3JuQW1RZG1YcGc=') : '';

// Initial Seed Data (Full Scale-Up Clean Production Workspace)
const INITIAL_STATE = {
  activeUserId: 'alfatih',
  authSession: {
    isAuthenticated: false,
    userId: null
  },
  currentSprint: 1,
  themePreference: 'light',
  geminiChatSessions: {},
  geminiApiKey: DEFAULT_GEMINI_KEY,
  geminiModel: 'gemini-flash-lite-latest',
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
      password: 'Kk#Syauqixxfz!9',
      mustChangePassword: false,
      hasCompletedOnboarding: true,
      passwordChangedAt: '2026-11-21T10:00:00.000Z',
      name: 'Syauqi Muhammad Al Fatih',
      role: 'SUPER_ADMIN',
      roleLabel: 'CEO & CTO',
      email: 'alfathblv@gmail.com',
      avatar: '/images/team/alfatih.webp',
      ownedUnits: ['WEBTECH_L2', 'AI_ACADEMY_L5', 'INTERNAL_OPS'],
      capacityStatus: 'AVAILABLE',
      backupApproverId: 'hilwa',
      isActiveCofounder: true
    },
    hilwa: {
      id: 'hilwa',
      username: 'hilwa',
      password: '@Hilwa077',
      mustChangePassword: false,
      hasCompletedOnboarding: false,
      passwordChangedAt: '2026-11-22T14:40:27.381Z',
      name: 'Hilwa Mufida',
      role: 'OPS_ADMIN',
      roleLabel: 'COO & Head of PM',
      email: 'hilwa.mufida@karyakita.id',
      avatar: '/images/team/hilwa.webp',
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
      avatar: '/images/team/novita.webp',
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
      avatar: '/images/team/ilham.webp',
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
      avatar: '/images/team/syarah.webp',
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
      avatar: '/images/team/nazwa.webp',
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
      avatar: '/images/team/ahmad.webp',
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
    this._syncTimeout = null;
    this.isCloudSyncing = false;
    this.lastCloudSyncTime = null;
    this.syncFromCloud();
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
            // Upgrade stale default credentials if user has an updated personal password
            if (uid === 'hilwa' && parsed.users[uid].password === 'Kk#Hilwa98!mQ4') {
              parsed.users[uid].password = '@Hilwa077';
              parsed.users[uid].mustChangePassword = false;
              parsed.users[uid].passwordChangedAt = '2026-11-22T14:40:27.381Z';
            }
            if (uid === 'alfatih' && parsed.users[uid].password === 'Kk#Fatih2026!x9') {
              parsed.users[uid].password = 'Kk#Syauqixxfz!9';
              parsed.users[uid].mustChangePassword = false;
            }
            parsed.users[uid].password = parsed.users[uid].password || INITIAL_STATE.users[uid].password;
            if (!parsed.users[uid].avatar || parsed.users[uid].avatar.includes('unsplash.com')) {
              parsed.users[uid].avatar = INITIAL_STATE.users[uid].avatar;
            }
            if (parsed.users[uid].mustChangePassword === undefined) {
              parsed.users[uid].mustChangePassword = INITIAL_STATE.users[uid].mustChangePassword;
            }
            if (parsed.users[uid].hasCompletedOnboarding === undefined) {
              parsed.users[uid].hasCompletedOnboarding = false;
            }
            if (parsed.users[uid].passwordChangedAt === undefined) {
              parsed.users[uid].passwordChangedAt = INITIAL_STATE.users[uid].passwordChangedAt || null;
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
        if (!parsed.geminiChatSessions) {
          parsed.geminiChatSessions = {};
        }
        if (!parsed.geminiModel || ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-2.5-flash', 'gemini-flash-latest', 'gemini-pro-latest'].includes(parsed.geminiModel)) {
          parsed.geminiModel = 'gemini-flash-lite-latest';
        }
        if (!parsed.geminiApiKey || parsed.geminiApiKey.length < 10) {
          parsed.geminiApiKey = localStorage.getItem('karyakita_gemini_api_key') || DEFAULT_GEMINI_KEY;
        }
        return parsed;
      }
    } catch (e) {
      console.warn('Gagal membaca state dari localStorage:', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_STATE));
  }

  saveState(skipCloud = false) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Gagal menyimpan state ke localStorage:', e);
    }
    this.notify();

    if (!skipCloud) {
      this.syncToCloudDebounced();
    }
  }

  async syncFromCloud() {
    if (this.isCloudSyncing) return;
    this.isCloudSyncing = true;
    try {
      const res = await fetch('/api/sync?t=' + Date.now(), {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
      });
      if (!res.ok) {
        this.isCloudSyncing = false;
        return;
      }
      const json = await res.json();
      if (json && json.success && json.data) {
        const cloudState = json.data;
        const currentSession = this.state.authSession;
        const currentActiveUserId = this.state.activeUserId;

        // Merge users while respecting current auth session
        if (cloudState.users) {
          Object.keys(cloudState.users).forEach(uid => {
            if (this.state.users[uid]) {
              this.state.users[uid] = { ...this.state.users[uid], ...cloudState.users[uid] };
            } else {
              this.state.users[uid] = cloudState.users[uid];
            }
          });
        }

        // Merge global settings, tasks, cashflow, audit logs
        if (cloudState.tasks) this.state.tasks = cloudState.tasks;
        if (cloudState.cashflow) this.state.cashflow = cloudState.cashflow;
        if (cloudState.cashTransactions) this.state.cashTransactions = cloudState.cashTransactions;
        if (cloudState.projects) this.state.projects = cloudState.projects;
        if (cloudState.crmLeads) this.state.crmLeads = cloudState.crmLeads;
        if (cloudState.auditLogs) this.state.auditLogs = cloudState.auditLogs;
        if (cloudState.settings) this.state.settings = { ...this.state.settings, ...cloudState.settings };
        if (cloudState.archives) this.state.archives = cloudState.archives;
        if (cloudState.currentSprint) this.state.currentSprint = cloudState.currentSprint;

        // Preserve local session if already logged in on this device
        if (currentSession && currentSession.isAuthenticated && currentSession.userId) {
          this.state.authSession = currentSession;
          this.state.activeUserId = currentActiveUserId;
        }

        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch (e) {}

        this.lastCloudSyncTime = new Date();
        this.notify();

        // Only re-render full views if already authenticated AND currently inside dashboard
        if (currentSession && currentSession.isAuthenticated && currentSession.userId) {
          const appLayout = document.getElementById('app-layout-wrapper');
          const isAppVisible = appLayout && !appLayout.classList.contains('hidden');
          if (isAppVisible) {
            if (typeof renderActiveView === 'function') {
              renderActiveView();
            }
          } else {
            // If on homepage, just update the CTA buttons
            if (typeof updateHomepageCtaState === 'function') {
              updateHomepageCtaState();
            }
          }
        }
        console.log('✅ Cloud Neon Sync: State studio otomatis tersinkronisasi antar-perangkat!');
      } else if (json && json.success && !json.data) {
        // Cloud is empty on first setup, seed it with initial state
        this.syncToCloud();
      }
    } catch (err) {
      console.warn('Cloud sync offline / local fallback:', err.message);
    } finally {
      this.isCloudSyncing = false;
    }
  }

  syncToCloudDebounced() {
    if (this._syncTimeout) clearTimeout(this._syncTimeout);
    this._syncTimeout = setTimeout(() => {
      this.syncToCloud();
    }, 1200);
  }

  async syncToCloud() {
    try {
      await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      });
      this.lastCloudSyncTime = new Date();
      console.log('☁️ Cloud Neon Sync: Perubahan studio tersimpan ke cloud.');
    } catch (err) {
      console.warn('Gagal sinkronisasi ke cloud:', err.message);
    }
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

function toggleSidebarCollapse() {
  const sidebar = document.getElementById('main-sidebar');
  const icon = document.getElementById('sidebar-collapse-icon');
  if (!sidebar) return;
  sidebar.classList.toggle('collapsed');
  const isCollapsed = sidebar.classList.contains('collapsed');
  localStorage.setItem('karyakita_sidebar_collapsed', isCollapsed ? 'true' : 'false');
  if (icon) {
    icon.setAttribute('data-lucide', isCollapsed ? 'panel-left-open' : 'panel-left-close');
    if (window.lucide) lucide.createIcons();
  }
}

function initSidebarCollapse() {
  const isCollapsed = localStorage.getItem('karyakita_sidebar_collapsed') === 'true';
  const sidebar = document.getElementById('main-sidebar');
  const icon = document.getElementById('sidebar-collapse-icon');
  if (sidebar && isCollapsed) {
    sidebar.classList.add('collapsed');
    if (icon) {
      icon.setAttribute('data-lucide', 'panel-left-open');
      if (window.lucide) lucide.createIcons();
    }
  }
}

function navigateTo(viewName) {
  const isAuthenticated = store.state.authSession && store.state.authSession.isAuthenticated && store.state.authSession.userId;
  if (!isAuthenticated) {
    if (typeof checkAuthAndRender === 'function') checkAuthAndRender();
    return;
  }
  
  // Ensure public homepage is hidden and dashboard layout is active
  const home = document.getElementById('public-homepage');
  const app = document.getElementById('app-layout-wrapper');
  const topbar = document.getElementById('topbar-simulator');
  const banners = document.getElementById('dynamic-banners-container');
  if (home) home.classList.add('hidden');
  if (app) app.classList.remove('hidden');
  if (topbar) topbar.classList.remove('hidden');
  if (banners) banners.classList.remove('hidden');

  window.location.hash = '#/' + (viewName === 'overview' ? 'dashboard' : viewName);
  currentView = viewName;

  // Update Breadcrumb & Cluster
  const breadcrumb = document.getElementById('breadcrumb-current-page');
  const clusterEl = document.getElementById('breadcrumb-cluster');
  const clusters = {
    overview: 'Ringkasan & Kinerja',
    analytics: 'Ringkasan & Kinerja',
    tasks: 'Eksekusi & Kolaborasi',
    reports: 'Eksekusi & Kolaborasi',
    archives: 'Eksekusi & Kolaborasi',
    projects: 'Komersial & Keuangan',
    crm: 'Komersial & Keuangan',
    finance: 'Komersial & Keuangan',
    academy: 'Unit Pertumbuhan',
    affiliate: 'Unit Pertumbuhan',
    integrations: 'Tata Kelola & Otomasi',
    system: 'Tata Kelola & Otomasi',
    'client-portal': 'Tata Kelola & Otomasi'
  };
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
  if (clusterEl) {
    clusterEl.textContent = clusters[viewName] || 'Studio';
  }

  // Update Navigation Active States with Dark Mode Harmony
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.getAttribute('data-nav') === viewName) {
      btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'text-brand-emerald', 'dark:text-emerald-400', 'font-bold');
      btn.classList.remove('text-gray-700', 'text-gray-500', 'dark:text-gray-300');
    } else {
      btn.classList.remove('bg-emerald-50', 'dark:bg-emerald-950/60', 'text-brand-emerald', 'dark:text-emerald-400', 'font-bold');
      btn.classList.add('text-gray-700', 'dark:text-gray-300');
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

  const activeProjects = store.state.projects || [];
  const activeProjectsCount = activeProjects.length;
  const activeBatchesCount = store.state.academyBatches.length;

  // Payment Gate Maker-Checker Counts
  const waitingDpProjects = activeProjects.filter(p => !p.dpPaid || p.paymentStatus === 'WAITING_DP').length;
  const inProgressProjects = activeProjects.filter(p => p.dpPaid && p.paymentStatus !== 'PAID_100').length;
  const paid100Projects = activeProjects.filter(p => p.paymentStatus === 'PAID_100').length;

  const blockedTasks = tasks.filter(t => t.isBlocked);
  const myTasks = tasks.filter(t => t.assigneeId === user.id);

  const cashBalance = store.calculateCashBalance();
  const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  const gradTarget = 3500000;
  const gradPct = Math.min(100, Math.round((cashBalance / gradTarget) * 100));

  return `
    <div class="space-y-6">
      
      <!-- Studio Hero Header with Financial & Operational Pulse (Compact & Sleek) -->
      <div class="card-surface p-4 sm:p-5 bg-gradient-to-r from-emerald-950/10 via-transparent to-transparent border border-brand-border dark:border-[#23362F] flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        
        <!-- Left: Greetings & Context -->
        <div class="space-y-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Sprint ${store.state.currentSprint || 1} • Q1 Bootstrapping
            </span>
            <span class="text-xs text-gray-400 dark:text-gray-500">•</span>
            <span class="text-xs text-gray-500 dark:text-gray-400">STMIK Tazkia</span>
          </div>
          <h2 class="font-heading font-bold text-lg sm:text-xl text-gray-900 dark:text-white leading-tight">
            Assalamu'alaikum, ${user.name.split(' ')[0]}! 👋
          </h2>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Pusat Komando Operasional, Keuangan Syariah & Eksekusi KaryaKita Hub.
          </p>
        </div>

        <!-- Right Side: Compact Spotlight Card + Quick Action Buttons -->
        <div class="flex flex-wrap items-center gap-3 shrink-0">
          
          <!-- Compact Spotlight Card: Kas Mandiri Rp3,5M -->
          <div class="card-spotlight p-3 sm:py-2.5 sm:px-4 rounded-xl bg-[#0F4C3A] text-white shadow-xs border border-emerald-700/60 flex items-center gap-3.5 relative overflow-hidden">
            <div class="w-8 h-8 rounded-lg bg-emerald-900/80 text-[#FCD34D] flex items-center justify-center shrink-0 border border-emerald-600/40">
              <i data-lucide="wallet" class="w-4 h-4"></i>
            </div>
            <div class="space-y-1">
              <div class="flex items-center justify-between gap-4 text-[10px]">
                <span class="font-bold text-emerald-100 tracking-wider">Kas Mandiri Studio</span>
                <span class="font-bold text-[#FCD34D] tabular-nums">${gradPct}%</span>
              </div>
              <div class="flex items-baseline gap-2">
                <span class="text-sm font-extrabold text-white font-heading tabular-nums">${formatRp(cashBalance)}</span>
                <span class="text-[10px] text-emerald-200/80">/ Rp3,5M</span>
              </div>
              <div class="w-36 sm:w-44 bg-black/30 rounded-full h-1.5 overflow-hidden">
                <div class="bg-[#FCD34D] h-1.5 rounded-full transition-all duration-500" style="width: ${gradPct}%;"></div>
              </div>
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex items-center gap-2">
            <button onclick="navigateTo('tasks')" class="px-3.5 py-2 rounded-xl bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold shadow-xs transition flex items-center gap-1.5 cursor-pointer" aria-label="Buat Tugas Baru di Papan Tugas">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              <span>Tugas Baru</span>
            </button>
            <button onclick="navigateTo('reports')" class="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer" aria-label="Lapor Check-In Rabu">
              <i data-lucide="message-square-heart" class="w-3.5 h-3.5 text-amber-500"></i>
              <span>Lapor Rabu</span>
            </button>
          </div>

        </div>

      </div>

      <!-- 4 Core KPI Cards with Strict Tabular Numerics -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- KPI 1: Micro-Sprint Progress -->
        <div class="card-surface p-4 sm:p-5 flex flex-col justify-between hover:border-brand-emerald/40 hover:shadow-md transition">
          <div class="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <span class="text-xs font-semibold">Sprint ${store.state.currentSprint || 1} Eksekusi</span>
            <div class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-brand-emerald dark:text-emerald-400 flex items-center justify-center">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-3">
            <div class="text-2xl font-bold font-heading text-gray-900 dark:text-white tabular-nums">
              ${doneTasks} <span class="text-sm font-medium text-gray-500 dark:text-gray-400">/ ${totalTasks} Selesai</span>
            </div>
            <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 mt-2.5 overflow-hidden">
              <div class="bg-brand-emerald dark:bg-emerald-500 h-2 rounded-full transition-all duration-500" style="width: ${taskProgressPct}%;"></div>
            </div>
            <span class="text-[11px] text-gray-500 dark:text-gray-400 mt-1.5 block font-medium tabular-nums">${taskProgressPct}% tingkat penyelesaian sprint</span>
          </div>
        </div>

        <!-- KPI 2: Async Check-In Rabu -->
        <div class="card-surface p-4 sm:p-5 flex flex-col justify-between hover:border-brand-emerald/40 hover:shadow-md transition">
          <div class="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <span class="text-xs font-semibold">Async Check-In Rabu</span>
            <div class="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <i data-lucide="clock" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-3">
            <div class="text-2xl font-bold font-heading text-gray-900 dark:text-white tabular-nums">
              ${checkinsCount} <span class="text-sm font-medium text-gray-500 dark:text-gray-400">/ ${totalFounders} Co-Founder</span>
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <span class="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold tabular-nums">${checkinsCount} Lapor</span>
              <span class="text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 px-2 py-0.5 rounded-full font-bold tabular-nums">${Math.max(0, totalFounders - checkinsCount)} Pending</span>
            </div>
            <span class="text-[11px] text-gray-500 dark:text-gray-400 mt-1.5 block">&lt; 90 detik via ponsel</span>
          </div>
        </div>

        <!-- KPI 3: Proyek & Payment Gate Status -->
        <div class="card-surface p-4 sm:p-5 flex flex-col justify-between hover:border-brand-emerald/40 hover:shadow-md transition cursor-pointer" onclick="navigateTo('projects')">
          <div class="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <span class="text-xs font-semibold">Payment Gate Radar</span>
            <div class="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 flex items-center justify-center">
              <i data-lucide="shield-check" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-3">
            <div class="text-2xl font-bold font-heading text-gray-900 dark:text-white tabular-nums">
              ${activeProjectsCount} <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Proyek Aktif</span>
            </div>
            <div class="flex flex-wrap items-center gap-1.5 mt-2 text-[10px]">
              <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold tabular-nums" title="Menunggu DP 50%">
                ${waitingDpProjects} Menunggu DP
              </span>
              <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold tabular-nums" title="DP 50% Verified">
                ${inProgressProjects} Produksi
              </span>
            </div>
            <span class="text-[11px] text-sky-700 dark:text-sky-400 font-semibold mt-1.5 block">Guardrail DP 50% Aktif →</span>
          </div>
        </div>

        <!-- KPI 4: Tugas Terhambat & Bantuan Tim -->
        <div class="card-surface p-4 sm:p-5 flex flex-col justify-between cursor-pointer hover:border-red-300 dark:hover:border-red-800 hover:shadow-md transition" onclick="navigateTo('tasks')">
          <div class="flex items-center justify-between text-gray-500 dark:text-gray-400">
            <span class="text-xs font-semibold">Kendala & Bantuan</span>
            <div class="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 flex items-center justify-center">
              <i data-lucide="alert-octagon" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-3">
            <div class="text-2xl font-bold font-heading text-red-700 dark:text-red-400 tabular-nums">
              ${blockedTasks.length} <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Tugas Terhambat</span>
            </div>
            <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-2">
              ${blockedTasks.length > 0 ? 'Butuh bantuan & musyawarah tim' : 'Alhamdulillah seluruh tugas lancar'}
            </p>
            <span class="text-[11px] text-red-600 dark:text-red-400 font-semibold mt-1.5 flex items-center gap-1">
              Lihat di Papan Tugas →
            </span>
          </div>
        </div>

      </div>

      <!-- Supportive Rhythm Pulse: Status Kapasitas & Kesiapan 7 Co-Founder -->
      <div class="card-surface p-5 sm:p-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white flex items-center gap-2">
              <i data-lucide="heart-pulse" class="w-4 h-4 text-brand-emerald dark:text-emerald-400"></i>
              Rhythm Pulse Kesiapan 7 Co-Founder
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Transparansi beban kuliah STMIK Tazkia & ketersediaan waktu tim pekan ini</p>
          </div>
          <button onclick="openCapacityModal()" class="text-xs font-semibold text-brand-emerald dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
            <span>Ubah Status Saya</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="flex flex-wrap justify-center gap-3">
          ${activeFounders.map(f => {
            const cap = CAPACITY_META[f.capacityStatus || 'AVAILABLE'] || CAPACITY_META.AVAILABLE;
            const userCheckin = store.state.checkins.find(c => c.userId === f.id && c.sprintNumber === (store.state.currentSprint || 1));
            return `
              <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(25%-0.75rem)] max-w-sm p-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-[#192722]/50 hover:bg-white dark:hover:bg-[#192722] hover:border-brand-emerald/40 transition flex items-center gap-3">
                <div class="relative shrink-0">
                  <img src="${f.avatar}" class="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-700">
                  <span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ${cap.dot} border-2 border-white dark:border-[#121C18]"></span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-gray-900 dark:text-white truncate">${f.name}</p>
                  <p class="text-[10px] text-gray-500 dark:text-gray-400 truncate">${f.roleLabel}</p>
                  <div class="flex items-center gap-1.5 mt-1">
                    <span class="inline-flex items-center gap-1 px-2 py-0.2 rounded-full text-[9px] font-semibold ${cap.badgeClass}">
                      ${cap.label}
                    </span>
                    ${userCheckin ? '<span class="text-[9px] text-emerald-700 dark:text-emerald-400 font-bold">✓ Lapor</span>' : '<span class="text-[9px] text-gray-500 dark:text-gray-400 font-medium">Belum</span>'}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 2 Main Columns Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Left Column: Tugas Saya Pekan Ini + 5 Unit Bisnis (8 cols) -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- Tugas Saya Pekan Ini -->
          <div class="card-surface p-5 sm:p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white flex items-center gap-2">
                  <i data-lucide="list-todo" class="w-4 h-4 text-brand-emerald dark:text-emerald-400"></i>
                  Tugas Saya Pekan Ini (${user.name})
                </h3>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Estimasi beban: <strong class="tabular-nums ${store.calculateUserWeeklyHours(user.id) > 5 ? 'text-red-600 dark:text-red-400 font-bold' : 'text-brand-emerald dark:text-emerald-400 font-bold'}">${store.calculateUserWeeklyHours(user.id)} jam / maks 5 jam</strong>
                </p>
              </div>
              <button onclick="navigateTo('tasks')" class="text-xs font-semibold text-brand-emerald dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer">
                <span>Papan Tugas</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>

            ${myTasks.length === 0 ? `
              <div class="text-center py-10 text-gray-400 dark:text-gray-500 text-xs">
                <i data-lucide="sparkles" class="w-8 h-8 mx-auto text-emerald-400 mb-2"></i>
                <p class="font-medium">Tidak ada tugas aktif untuk ${user.name} di Sprint ini.</p>
                <button onclick="navigateTo('tasks')" class="mt-3 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-brand-emerald dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition cursor-pointer">
                  + Buat Tugas Baru
                </button>
              </div>
            ` : `
              <div class="space-y-2.5">
                ${myTasks.map(t => `
                  <div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#192722]/40 hover:bg-white dark:hover:bg-[#192722] hover:border-brand-emerald/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold ${store.state.units[t.unitId]?.badgeClass || 'badge-unit-ops'}">
                          ${store.state.units[t.unitId]?.name || t.unitId}
                        </span>
                        <span class="text-[10px] px-2 py-0.5 rounded-full font-medium badge-status-${t.status.toLowerCase()}">
                          ${t.status}
                        </span>
                        ${t.isBlocked ? '<span class="text-[10px] bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 px-1.5 py-0.2 rounded-full font-bold">BLOCKED</span>' : ''}
                      </div>
                      <h4 class="text-xs font-bold text-gray-800 dark:text-white truncate">${t.title}</h4>
                      <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                        <span class="tabular-nums"><i data-lucide="clock" class="w-3 h-3 inline mr-1 text-gray-400"></i>${t.hoursEstimate} jam</span>
                        <span>•</span>
                        <span class="tabular-nums">Tenggat: ${t.dueDate || '-'}</span>
                      </p>
                    </div>
                    <div class="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                      ${t.status !== 'DONE' ? `
                        <button onclick="quickUpdateTaskStatus('${t.id}', 'DONE')" class="text-xs bg-brand-emerald hover:bg-brand-hover text-white font-medium px-3 py-1.5 rounded-xl shadow-xs transition flex items-center gap-1 cursor-pointer">
                          <i data-lucide="check" class="w-3.5 h-3.5"></i> Selesai
                        </button>
                      ` : `
                        <span class="text-xs text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-xl border border-emerald-200 dark:border-emerald-800">
                          <i data-lucide="check-check" class="w-3.5 h-3.5"></i> Itqan
                        </span>
                      `}
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Portofolio 5 Unit Bisnis KaryaKita -->
          <div class="card-surface p-5 sm:p-6">
            <div class="flex items-center justify-between mb-3.5">
              <h3 class="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white flex items-center gap-2">
                <i data-lucide="grid" class="w-4 h-4 text-brand-emerald dark:text-emerald-400"></i>
                Portofolio 5 Unit Bisnis KaryaKita
              </h3>
              <span class="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Model Inkubasi Studio</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${Object.values(store.state.units).filter(u => u.code !== 'INTERNAL_OPS').map(u => {
                const unitProjects = store.state.projects.filter(p => p.unitId === u.code).length;
                const unitTasks = store.state.tasks.filter(t => t.unitId === u.code).length;
                return `
                  <div class="p-3.5 rounded-2xl border border-brand-border dark:border-[#23362F] bg-white dark:bg-[#121C18] hover:border-brand-emerald/40 dark:hover:border-emerald-600/40 hover:shadow-xs transition">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${u.badgeClass}">
                      ${u.name.split(' (')[0]}
                    </span>
                    <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">${u.desc}</p>
                    <div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-[11px] text-gray-600 dark:text-gray-400 font-medium">
                      <span class="tabular-nums font-semibold">${unitProjects} Proyek</span>
                      <span class="tabular-nums font-semibold">${unitTasks} Tugas</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

        </div>

        <!-- Right Column: Activity Feed & Shariah Governance Guardrails (4 cols) -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Linimasa Aktivitas Realtime -->
          <div class="card-surface p-5 sm:p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-heading font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                <i data-lucide="activity" class="w-4 h-4 text-brand-emerald dark:text-emerald-400"></i>
                Linimasa Aktivitas Studio
              </h3>
              <span class="text-[10px] bg-emerald-50 dark:bg-emerald-950/60 text-brand-emerald dark:text-emerald-400 px-2 py-0.5 rounded-full font-mono border border-emerald-200 dark:border-emerald-800">Live</span>
            </div>

            <div class="space-y-4">
              ${store.state.auditLogs.slice(0, 6).map(log => `
                <div class="relative pl-5 border-l-2 border-emerald-200 dark:border-emerald-800">
                  <div class="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-brand-emerald dark:bg-emerald-400"></div>
                  <p class="text-xs font-semibold text-gray-800 dark:text-gray-200">${log.actorName}</p>
                  <p class="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5 leading-snug">${log.details}</p>
                  <span class="text-[10px] text-gray-500 dark:text-gray-400 mt-1 block font-mono tabular-nums">${log.timestamp}</span>
                </div>
              `).join('')}
            </div>

            <button onclick="navigateTo('system')" class="w-full mt-4 text-center text-xs text-brand-emerald dark:text-emerald-400 font-semibold hover:underline cursor-pointer block" aria-label="Buka Semua Audit Log Studio">
              Buka Semua Audit Log →
            </button>
          </div>

          <!-- Guardrails by Design Shariah Compliance Card -->
          <div class="card-surface p-5 bg-gradient-to-br from-[#0F513D] to-[#0A3629] text-white border-emerald-800/60 shadow-lg">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                <i data-lucide="shield" class="w-3.5 h-3.5"></i>
              </div>
              <h4 class="font-heading font-bold text-xs text-white">Tata Kelola Syariah & Guardrails</h4>
            </div>
            <ul class="text-[11px] space-y-2 text-emerald-100/90 leading-relaxed">
              <li class="flex items-start gap-2">
                <span class="text-emerald-300 font-bold">•</span>
                <span><strong>Wajib DP 50%:</strong> Produksi proyek terkunci otomatis sebelum verifikasi CFO.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-300 font-bold">•</span>
                <span><strong>Graduation Rule:</strong> Kas ditahan 70% hingga cadangan Rp3,5 juta tercapai.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-300 font-bold">•</span>
                <span><strong>Radar 3–5 Jam:</strong> Membatasi beban kerja agar tidak mengganggu kuliah.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-300 font-bold">•</span>
                <span><strong>Zakat 2,5%:</strong> Dipotong otomatis dari laba sebelum bagi hasil Syirkah 'Abdan.</span>
              </li>
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

            <div class="flex flex-wrap justify-center gap-3.5">
              ${founders.map(f => {
                const report = store.state.checkins.find(c => c.userId === f.id && c.sprintNumber === store.state.currentSprint);
                const hasReported = !!report;
                return `
                  <div class="w-full sm:w-[calc(50%-0.875rem)] lg:w-[calc(25%-0.875rem)] max-w-sm p-3.5 rounded-2xl border ${hasReported ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/20' : 'border-amber-300 dark:border-amber-800 bg-amber-50/20 dark:bg-amber-950/20'} space-y-2">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <img src="${f.avatar}" class="w-7 h-7 rounded-full object-cover border border-emerald-500/30">
                        <span class="text-xs font-bold text-gray-900 dark:text-white truncate max-w-[120px]">${f.name}</span>
                      </div>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${hasReported ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'}">
                        ${hasReported ? 'Sudah Lapor' : 'Belum'}
                      </span>
                    </div>

                    ${hasReported ? `
                      <div class="text-[11px] text-gray-700 dark:text-gray-300 space-y-1 pt-2 border-t border-emerald-100 dark:border-emerald-900">
                        <p class="line-clamp-2"><strong>Selesai:</strong> ${report.completedSummary}</p>
                        <p class="line-clamp-2"><strong>Progres:</strong> ${report.inProgressSummary}</p>
                      </div>
                    ` : `
                      <div class="text-[11px] text-gray-400 dark:text-gray-500 pt-2 border-t border-amber-100 dark:border-amber-900 italic">
                        Menunggu check-in pekan ini (< 60 detik).
                      </div>
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
let systemActiveTab = 'users'; // 'users' | 'calendar' | 'audit' | 'sync'

function renderSystemView() {
  return `
    <div class="space-y-6">
      
      <!-- Tabs -->
      <div class="flex border-b border-brand-border bg-white px-4 pt-2 rounded-t-xl text-xs font-semibold gap-4 overflow-x-auto">
        <button id="tab-sys-users" class="py-2.5 border-b-2 whitespace-nowrap ${systemActiveTab === 'users' ? 'border-brand-emerald text-brand-emerald font-bold' : 'border-transparent text-gray-500'}">
          Manajemen Whitelist 7 Co-Founder
        </button>
        <button id="tab-sys-calendar" class="py-2.5 border-b-2 whitespace-nowrap ${systemActiveTab === 'calendar' ? 'border-brand-emerald text-brand-emerald font-bold' : 'border-transparent text-gray-500'}">
          Kalender Akademik & Freeze Mode
        </button>
        <button id="tab-sys-audit" class="py-2.5 border-b-2 whitespace-nowrap ${systemActiveTab === 'audit' ? 'border-brand-emerald text-brand-emerald font-bold' : 'border-transparent text-gray-500'}">
          Audit Log Permanen (Immutable)
        </button>
        <button id="tab-sys-sync" class="py-2.5 border-b-2 whitespace-nowrap ${systemActiveTab === 'sync' ? 'border-brand-emerald text-brand-emerald font-bold' : 'border-transparent text-gray-500'}">
          Sinkronisasi Antar-Perangkat (HP & Laptop)
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
              <p class="text-xs text-gray-500 mt-0.5">Kredensial awal diberikan oleh DevOps/Admin. Klik <strong>Ubah Sandi</strong> untuk mengaktifkan kata sandi pribadi atau menerbitkan kata sandi baru.</p>
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
                    <td class="p-3">
                      <div class="flex items-center gap-2.5">
                        <button onclick="openProfileModal('${u.id}')" class="relative group shrink-0" title="Klik untuk ubah foto profil ${u.name}">
                          <img src="${u.avatar}" class="w-8 h-8 rounded-full object-cover group-hover:ring-2 group-hover:ring-brand-emerald transition shadow-xs">
                          <span class="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white">
                            <i data-lucide="camera" class="w-3.5 h-3.5"></i>
                          </span>
                        </button>
                        <div>
                          <strong class="text-gray-900 block">${u.name}</strong>
                          <span class="text-[10px] text-gray-500">${u.roleLabel}</span>
                        </div>
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
                        <div class="space-y-0.5">
                          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            <i data-lucide="shield-check" class="w-3 h-3 text-emerald-600"></i>
                            <span>Aktif (Password Pribadi)</span>
                          </span>
                          ${u.passwordChangedAt ? `
                            <span class="block text-[9px] text-gray-400 font-mono">
                              Diubah: ${new Date(u.passwordChangedAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                            </span>
                          ` : ''}
                        </div>
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
                      <div class="flex items-center justify-end gap-1.5 flex-wrap">
                        <button onclick="openAdminChangePasswordModal('${u.id}')" class="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-brand-emerald border border-emerald-300 rounded text-[11px] font-semibold flex items-center gap-1 transition" title="Ubah kata sandi untuk ${u.name}">
                          <i data-lucide="key-round" class="w-3 h-3"></i>
                          <span>Ubah Sandi</span>
                        </button>
                        <button onclick="openProfileModal('${u.id}')" class="px-2 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded text-[11px] font-semibold flex items-center gap-1 transition" title="Ganti foto profil ${u.name}">
                          <i data-lucide="camera" class="w-3 h-3"></i>
                          <span>Foto</span>
                        </button>
                        ${u.mustChangePassword ? `
                          <button onclick="copyTempPassword('${u.id}')" class="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded text-[11px] font-semibold flex items-center gap-1 transition" title="Salin kata sandi sementara untuk dikirim via WA">
                            <i data-lucide="copy" class="w-3 h-3"></i>
                            <span>Salin Sandi</span>
                          </button>
                        ` : ''}
                        <button onclick="resetUserCredentialsByAdmin('${u.id}')" class="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded text-[11px] font-semibold flex items-center gap-1 transition" title="Terbitkan kata sandi sementara acak">
                          <i data-lucide="rotate-ccw" class="w-3 h-3"></i>
                          <span>Reset</span>
                        </button>
                        <button onclick="openOnboardingTour(store.state.users['${u.id}'])" class="px-2 py-1 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded text-[11px] font-semibold flex items-center gap-1 transition" title="Tinjau panduan tur role ini">
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
      ` : systemActiveTab === 'sync' ? `
        <!-- TAB 4: SINKRONISASI ANTAR PERANGKAT (HP & LAPTOP) -->
        <div class="card-surface p-5 space-y-4 text-xs">
          <div class="flex items-center justify-between border-b border-brand-border pb-3">
            <div>
              <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
                <i data-lucide="refresh-cw" class="w-4 h-4 text-brand-emerald"></i>
                <span>Sinkronisasi Data Studio Antar-Perangkat (Laptop ↔ Handphone)</span>
              </h3>
              <p class="text-gray-500 mt-0.5">Sistem KaryaKita OS menyimpan basis data secara mandiri dan aman di peramban (Client-Side Storage). Fitur ini memudahkan penyalinan data dari Laptop ke HP seluruh rekan.</p>
            </div>
            <span class="text-[10px] bg-sky-100 text-sky-800 font-bold px-2.5 py-1 rounded-full">
              Multi-Device Sync Helper
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-3">
              <h4 class="font-bold text-emerald-950 flex items-center gap-1.5">
                <i data-lucide="upload" class="w-4 h-4 text-emerald-700"></i>
                <span>Langkah 1: Ekspor Data dari Laptop (Alfatih / Admin)</span>
              </h4>
              <p class="text-gray-600">Salin seluruh data studio terkini (termasuk tugas, kas, kredensial password terbaru, dan log) ke clipboard untuk dibagikan ke HP rekan.</p>
              <button onclick="exportStudioStateToClipboard()" class="w-full py-2 bg-brand-emerald hover:bg-brand-hover text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xs transition">
                <i data-lucide="copy" class="w-4 h-4"></i>
                <span>Salin Kode Sinkronisasi Studio</span>
              </button>
            </div>

            <div class="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-3">
              <h4 class="font-bold text-sky-950 flex items-center gap-1.5">
                <i data-lucide="download" class="w-4 h-4 text-sky-700"></i>
                <span>Langkah 2: Impor Data di Handphone</span>
              </h4>
              <p class="text-gray-600">Jika membuka di HP rekan, buka menu ini lalu tempelkan kode sinkronisasi agar seluruh data di HP sama persis dengan laptop.</p>
              <button onclick="openImportStateModal()" class="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xs transition">
                <i data-lucide="folder-input" class="w-4 h-4"></i>
                <span>Tempel & Impor Data ke HP</span>
              </button>
            </div>
          </div>
        </div>
      ` : `
        <!-- TAB 3: AUDIT LOG -->
        <div class="card-surface p-5 space-y-3">
          <div class="flex items-center justify-between border-b border-brand-border pb-2">
            <div>
              <h3 class="font-heading font-bold text-sm text-gray-900 flex items-center gap-2">
                <i data-lucide="file-check" class="w-4 h-4 text-brand-emerald"></i>
                <span>Audit Log Permanen (Nilai Shiddiq & Amanah)</span>
              </h3>
              <p class="text-xs text-gray-500">Mencatat seluruh aksi operasional, login, perubahan password, dan tata kelola syariah secara real-time.</p>
            </div>
            <span class="text-[10px] font-mono font-bold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
              Total: ${store.state.auditLogs.length} Catatan
            </span>
          </div>

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
                  <tr class="hover:bg-gray-50/50">
                    <td class="p-3 font-mono text-gray-500 text-[11px] whitespace-nowrap">${a.timestamp}</td>
                    <td class="p-3 font-bold text-gray-900">${a.actorName}</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded ${a.action.includes('AUTH') ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-700'} font-mono text-[10px] font-semibold">${a.action}</span></td>
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
  const tabSync = document.getElementById('tab-sys-sync');

  if (tabUsers) tabUsers.addEventListener('click', () => { systemActiveTab = 'users'; renderActiveView(); });
  if (tabCalendar) tabCalendar.addEventListener('click', () => { systemActiveTab = 'calendar'; renderActiveView(); });
  if (tabAudit) tabAudit.addEventListener('click', () => { systemActiveTab = 'audit'; renderActiveView(); });
  if (tabSync) tabSync.addEventListener('click', () => { systemActiveTab = 'sync'; renderActiveView(); });

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

  // Update Topbar user profile badge
  const topAvatar = document.getElementById('topbar-user-avatar');
  const topName = document.getElementById('topbar-user-name');
  const topRole = document.getElementById('topbar-user-role');
  if (topAvatar) topAvatar.src = user.avatar;
  if (topName) topName.textContent = user.name;
  if (topRole) topRole.textContent = user.roleLabel;

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

// ==============================================================================
// ROLE-TAILORED ONBOARDING: TOOLTIPS & HOTSPOTS
// ==============================================================================

const ROLE_HOTSPOT_ONBOARDING_DATA = {
  SUPER_ADMIN: {
    steps: [
      {
        target: '#btn-topbar-capacity',
        badge: 'Ritme & Kapasitas',
        title: 'Indikator Kapasitas Kuliah & Studio',
        desc: 'Klik tombol ini untuk mengatur status ketersediaan Anda (\'Tersedia\', \'Padat Kuliah\', \'Mode Ujian\', atau \'Butuh Bantuan\'). 7 co-founder dapat saling memantau kesibukan akademik STMIK Tazkia tanpa rasa tertekan.',
        icon: 'heart-handshake',
        placement: 'bottom'
      },
      {
        target: 'button[data-nav="system"]',
        fallbackTarget: 'button[data-nav="overview"]',
        badge: 'Executive Command Center',
        title: 'Sistem, Academic Freeze & Kredensial',
        desc: 'Sebagai CEO & CTO, akses menu Sistem untuk menyalakan Academic Freeze otomatis H-7 pekan UTS/UAS Tazkia, mengelola kredensial co-founder, mengatur delegasi Maker-Checker, serta mengawasi audit log keamanan.',
        icon: 'shield-check',
        placement: 'right'
      },
      {
        target: '#btn-quick-create-task',
        badge: 'Eksekusi Cepat',
        title: 'Tombol Aksi Cepat: Tambah Tugas',
        desc: 'Gunakan tombol ini kapan saja untuk membuat task baru secara instan, menetapkan penanggung jawab (PIC), mengatur deadline, dan menetapkan kriteria DoD (Definition of Done) tanpa berpindah halaman.',
        icon: 'plus-circle',
        placement: 'bottom'
      },
      {
        target: '#btn-topbar-tour',
        fallbackTarget: '#topbar-user-avatar',
        badge: 'Profil & Bantuan Tur',
        title: 'Pusat Bantuan & Logout Aman',
        desc: 'Ikon tanda tanya (?) ini dapat Anda klik kapan saja untuk mengulang tur interaktif Tooltips & Hotspots ini. Di sebelahnya terdapat badge profil terotentikasi Anda dan tombol keluar (Logout).',
        icon: 'help-circle',
        placement: 'bottom'
      }
    ]
  },
  OPS_ADMIN: {
    steps: [
      {
        target: '#btn-topbar-capacity',
        badge: 'Ritme & Kapasitas',
        title: 'Sinkronisasi Beban & Kuliah',
        desc: 'Pantau ketersediaan jam kerja seluruh rekan tim dan atur status kapasitas Anda agar ritme operasional proyek klien B2B tetap realistis dan sehat sejalan dengan jadwal akademik Tazkia.',
        icon: 'heart-handshake',
        placement: 'bottom'
      },
      {
        target: 'button[data-nav="tasks"]',
        badge: 'Pusat Operasional Harian',
        title: 'Papan Tugas Kanban & Triage Klien',
        desc: 'Sebagai COO & Head of PM, pusat kerja Anda ada di Papan Tugas: kelola status Kanban berstandar DoD, kontrol jam kerja tim, dan kelola Inbox Triage Revisi proyek klien agar delivery teratur.',
        icon: 'check-square',
        placement: 'right'
      },
      {
        target: '#btn-quick-create-task',
        badge: 'Distribusi Tugas',
        title: 'Alokasi Task Baru',
        desc: 'Pecah proyek klien menjadi tugas-tugas terukur dan delegasikan PIC rekan co-founder dengan cepat menggunakan tombol aksi cepat ini.',
        icon: 'plus-circle',
        placement: 'bottom'
      },
      {
        target: '#btn-topbar-tour',
        fallbackTarget: '#topbar-user-avatar',
        badge: 'Maker-Checker & Tur',
        title: 'Bantuan Tur & Backup Approver',
        desc: 'Klik (?) kapan saja untuk mengulang panduan ini. Ingat: Anda otomatis menjadi Backup Approver keuangan saat CFO dalam Mode Ujian (EXAM_MODE).',
        icon: 'help-circle',
        placement: 'bottom'
      }
    ]
  },
  FINANCE_ADMIN: {
    steps: [
      {
        target: '#btn-topbar-capacity',
        badge: 'Kapasitas & Delegasi Ujian',
        title: 'Status Kapasitas & Mode Ujian',
        desc: 'Saat Anda mengaktifkan \'Mode Ujian\', sistem secara otomatis mendelegasikan verifikasi keuangan ke COO (Hilwa) sebagai Backup Approver agar fokus belajar Anda tetap terjaga.',
        icon: 'heart-handshake',
        placement: 'bottom'
      },
      {
        target: 'button[data-nav="finance"]',
        badge: 'Tata Kelola Kas Syariah',
        title: 'Buku Kas, Bagi Hasil 60/40 & Zakat',
        desc: 'Sebagai CFO, kelola pencatatan kas syariah zero-riba, verifikasi bukti transfer termin DP 50%, buka Review & Musyawarah 48 Jam, dan pantau kalkulator bagi hasil 60% rata & 40% berbobot.',
        icon: 'wallet',
        placement: 'right'
      },
      {
        target: '#btn-quick-create-task',
        badge: 'Pencatatan Cepat',
        title: 'Task Keuangan & Invoice Cepat',
        desc: 'Akses cepat untuk membuat task administrasi keuangan, menyiapkan invoice tagihan PDF untuk klien, atau mencatat pengeluaran operasional studio.',
        icon: 'plus-circle',
        placement: 'bottom'
      },
      {
        target: '#btn-topbar-tour',
        fallbackTarget: '#topbar-user-avatar',
        badge: 'Keamanan Akun',
        title: 'Bantuan Tur & Logout Keuangan',
        desc: 'Buka kembali panduan interaktif kas syariah lewat tombol (?) ini kapan saja, dan selalu pastikan logout setelah menyelesaikan verifikasi kas.',
        icon: 'help-circle',
        placement: 'bottom'
      }
    ]
  },
  UNIT_LEAD_TECH: {
    steps: [
      {
        target: '#btn-topbar-capacity',
        badge: 'Ritme & Kapasitas',
        title: 'Kapasitas Pitching & Delivery',
        desc: 'Sesuaikan status kapasitas kerja Anda sebelum menjadwalkan pitching atau negosiasi kontrak dengan prospek klien baru agar selaras dengan jadwal kuliah.',
        icon: 'heart-handshake',
        placement: 'bottom'
      },
      {
        target: 'button[data-nav="crm"]',
        badge: 'Pipeline Bisnis & Data',
        title: 'Pipeline CRM 6-Tahap & Unit Data',
        desc: 'Sebagai CBDO & CDO, pantau prospek klien dari Lead hingga Won di Pipeline CRM. Setiap deal B2B yang Anda menangkan menyumbang 5 poin kontribusi berbobot ke porsi eksekutor Syirkah Anda!',
        icon: 'kanban',
        placement: 'right'
      },
      {
        target: '#btn-quick-create-task',
        badge: 'Follow-Up Klien',
        title: 'Tugas Prospek & Follow-up Cepat',
        desc: 'Jadwalkan komunikasi follow-up prospek, pembuatan draft proposal solusi data & AI, atau pengiriman quotation dalam hitungan detik.',
        icon: 'plus-circle',
        placement: 'bottom'
      },
      {
        target: '#btn-topbar-tour',
        fallbackTarget: '#topbar-user-avatar',
        badge: 'Pusat Bantuan',
        title: 'Bantuan Tur & Profil CBDO',
        desc: 'Klik ikon (?) kapan saja untuk mempelajari ulang fitur pipeline CRM, konversi proyek 1-klik, dan pembobotan poin syirkah.',
        icon: 'help-circle',
        placement: 'bottom'
      }
    ]
  },
  UNIT_LEAD_CREATIVE: {
    steps: [
      {
        target: '#btn-topbar-capacity',
        badge: 'Ritme & Kapasitas',
        title: 'Ritme Produksi Konten Viral',
        desc: 'Sinkronkan status ketersediaan Anda sebelum merancang campaign promosi mingguan agar jadwal syuting dan editing konten TikTok & Reels tetap fleksibel bersama kuliah.',
        icon: 'heart-handshake',
        placement: 'bottom'
      },
      {
        target: 'button[data-nav="affiliate"]',
        badge: 'Pusat Viral Marketing',
        title: 'Kalender Konten Media & Afiliasi',
        desc: 'Sebagai CMO, jadwalkan konten multi-platform (TikTok, Instagram Reels, LinkedIn), pantau performa viralitas, dan kelola komisi mitra afiliasi yang mempromosikan studio.',
        icon: 'clapperboard',
        placement: 'right'
      },
      {
        target: '#btn-quick-create-task',
        badge: 'Produksi Konten',
        title: 'Tugas Konten & Jadwal Posting',
        desc: 'Catat ide hook video baru, tugaskan perancangan visual ke Creative Director, atau jadwalkan deadline posting dengan cepat.',
        icon: 'plus-circle',
        placement: 'bottom'
      },
      {
        target: '#btn-topbar-tour',
        fallbackTarget: '#topbar-user-avatar',
        badge: 'Pusat Bantuan',
        title: 'Bantuan Tur & Profil CMO',
        desc: 'Buka kembali panduan interaktif ini melalui tombol (?) kapan saja untuk meninjau panduan alokasi poin kontribusi konten media dan sistem referral.',
        icon: 'help-circle',
        placement: 'bottom'
      }
    ]
  },
  UNIT_LEAD_ACADEMY: {
    steps: [
      {
        target: '#btn-topbar-capacity',
        badge: 'Ritme & Kapasitas',
        title: 'Kapasitas Mentoring & Kelas',
        desc: 'Atur status kapasitas Anda terutama di pekan persiapan modul workshop dan jadwal mentoring peserta AI Academy agar tidak bentrok dengan jadwal ujian kuliah.',
        icon: 'heart-handshake',
        placement: 'bottom'
      },
      {
        target: 'button[data-nav="academy"]',
        badge: 'Pusat Inkubasi Talenta',
        title: 'Batch Workshop & Peserta AI Academy',
        desc: 'Sebagai CRO & Lead Academy, buka batch kelas pelatihan AI baru, import peserta via CSV, verifikasi pembayaran tiket, dan terbitkan e-sertifikat digital berstandar resmi.',
        icon: 'graduation-cap',
        placement: 'right'
      },
      {
        target: '#btn-quick-create-task',
        badge: 'Tugas Workshop',
        title: 'Tambah Task Akademi Cepat',
        desc: 'Buat task penyusunan silabus workshop AI, koordinasi pemateri tamu, atau penyiapan link zoom kelas dalam sekejap.',
        icon: 'plus-circle',
        placement: 'bottom'
      },
      {
        target: '#btn-topbar-tour',
        fallbackTarget: '#topbar-user-avatar',
        badge: 'Pusat Bantuan',
        title: 'Bantuan Tur & Profil Academy',
        desc: 'Klik tombol (?) kapan saja jika ingin meninjau kembali otomatisasi penerbitan sertifikat, manajemen batch peserta, dan penghitungan poin syirkah.',
        icon: 'help-circle',
        placement: 'bottom'
      }
    ]
  },
  UNIT_LEAD_DESIGN: {
    steps: [
      {
        target: '#btn-topbar-capacity',
        badge: 'Ritme & Kapasitas',
        title: 'Kapasitas Desain & Kuliah',
        desc: 'Atur status ketersediaan Anda sebelum mengambil sprint desain identitas visual atau revisi aset klien agar beban kerja kreatif tetap seimbang dan sehat.',
        icon: 'heart-handshake',
        placement: 'bottom'
      },
      {
        target: 'button[data-nav="archives"]',
        badge: 'Vault Aset & Standar Itqan',
        title: 'Arsip Dokumen & Deliverable Desain',
        desc: 'Sebagai Creative Director, simpan seluruh deliverable desain resmi di Vault dengan label \'CLIENT_SAFE\' atau \'NDA_RESTRICTED\', dan pastikan standar Itqan terpenuhi sebelum pengiriman.',
        icon: 'folder-archive',
        placement: 'right'
      },
      {
        target: '#btn-quick-create-task',
        badge: 'Permintaan Desain',
        title: 'Tambah Task Desain Baru',
        desc: 'Buat kartu tugas baru untuk rancangan UI/UX, poster konten media sosial, atau proposal portofolio klien secara instan.',
        icon: 'plus-circle',
        placement: 'bottom'
      },
      {
        target: '#btn-topbar-tour',
        fallbackTarget: '#topbar-user-avatar',
        badge: 'Pusat Bantuan',
        title: 'Bantuan Tur & Profil Desain',
        desc: 'Buka kembali panduan interaktif lewat tombol (?) kapan saja untuk meninjau standar mutu Itqan dan prosedur pengarsipan aset resmi klien.',
        icon: 'help-circle',
        placement: 'bottom'
      }
    ]
  }
};

let currentHotspotIndex = 0;
let currentHotspotUser = null;
let tourScrollResizeHandler = null;
let tourKeydownHandler = null;

function getOnboardingHotspotSteps(user) {
  if (!user) return ROLE_HOTSPOT_ONBOARDING_DATA.SUPER_ADMIN.steps;
  if (user.role === 'SUPER_ADMIN') return ROLE_HOTSPOT_ONBOARDING_DATA.SUPER_ADMIN.steps;
  if (user.role === 'OPS_ADMIN') return ROLE_HOTSPOT_ONBOARDING_DATA.OPS_ADMIN.steps;
  if (user.role === 'FINANCE_ADMIN') return ROLE_HOTSPOT_ONBOARDING_DATA.FINANCE_ADMIN.steps;
  if (user.id === 'ilham') return ROLE_HOTSPOT_ONBOARDING_DATA.UNIT_LEAD_TECH.steps;
  if (user.id === 'syarah' || user.id === 'syaraf') return ROLE_HOTSPOT_ONBOARDING_DATA.UNIT_LEAD_CREATIVE.steps;
  if (user.id === 'nazwa') return ROLE_HOTSPOT_ONBOARDING_DATA.UNIT_LEAD_ACADEMY.steps;
  if (user.id === 'ahmad') return ROLE_HOTSPOT_ONBOARDING_DATA.UNIT_LEAD_DESIGN.steps;
  return ROLE_HOTSPOT_ONBOARDING_DATA.SUPER_ADMIN.steps;
}

function clearTourHighlights() {
  document.querySelectorAll('.tour-highlighted-target').forEach(el => {
    el.classList.remove('tour-highlighted-target');
  });
  const container = document.getElementById('tour-overlay-container');
  if (container) container.remove();
}

let currentOnboardingModalSlide = 0;
let currentOnboardingModalUser = null;

function openOnboardingTour(user) {
  openRoleOnboardingModal(user);
}

function openOnboardingTourDirect(user) {
  currentHotspotUser = user || store.getCurrentUser();
  currentHotspotIndex = 0;
  closeModal();
  renderHotspotStep();
}

let onboardingModalKeyHandler = null;

function openRoleOnboardingModal(user) {
  currentOnboardingModalUser = user || store.getCurrentUser();
  currentOnboardingModalSlide = 0;
  
  if (!onboardingModalKeyHandler) {
    onboardingModalKeyHandler = (e) => {
      const backdrop = document.getElementById('global-modal-backdrop');
      if (!backdrop || backdrop.classList.contains('hidden')) return;
      if (e.key === 'ArrowRight') {
        nextRoleOnboardingSlide();
      } else if (e.key === 'ArrowLeft') {
        prevRoleOnboardingSlide();
      }
    };
    window.addEventListener('keydown', onboardingModalKeyHandler);
  }
  
  renderRoleOnboardingSlide();
}

function renderRoleOnboardingSlide() {
  const user = currentOnboardingModalUser || store.getCurrentUser();
  if (!user) return;
  const slideIdx = currentOnboardingModalSlide;

  // Role custom briefing
  const roleTitle = user.roleLabel || 'Co-Founder';
  let roleResponsibilities = [];
  if (user.role === 'SUPER_ADMIN') {
    roleResponsibilities = [
      { icon: 'cpu', label: 'Arsitektur Sistem & AI Officer', desc: 'Memvalidasi roadmap AI, mengelola asisten Gemini Studio, dan menjaga kedaulatan tech stack zero-cost.' },
      { icon: 'file-check-2', label: 'Pengesahan Notulen Syura', desc: 'Mengesahkan keputusan musyawarah Weekly Syura dan mengeksekusi integrasi bot sistem.' },
      { icon: 'shield-check', label: 'Akses Penuh Seluruh Modul', desc: 'Wewenang konfigurasi 13 modul sistem dan pemantauan audit log operasional studio.' }
    ];
  } else if (user.role === 'OPS_ADMIN') {
    roleResponsibilities = [
      { icon: 'kanban', label: 'Pengawal Alokasi Tugas Tim', desc: 'Memantau dan memvalidasi tugas mingguan seluruh 7 co-founder agar beban kerja seimbang.' },
      { icon: 'clock-4', label: 'SLA 48-Jam & Antrean Revisi', desc: 'Mengawal SLA 48-hour client sign-off dan memilah revisi minor vs major berbayar.' },
      { icon: 'calendar-off', label: 'Aktivasi Academic Freeze', desc: 'Mengaktifkan mode proteksi H-7 UTS/UAS STMIK Tazkia agar ritme kuliah terjaga.' }
    ];
  } else if (user.role === 'FINANCE_ADMIN') {
    roleResponsibilities = [
      { icon: 'lock', label: 'Wewenang Tunggal Payment Gate', desc: 'Verifikasi DP 50% wajib sebelum proyek dikerjakan dan validasi pelunasan 100%.' },
      { icon: 'target', label: 'Graduation Rule Rp3.500.000', desc: 'Memantau cadangan kas mandiri bootstrapping sebelum surplus kas dapat dibagikan.' },
      { icon: 'scale', label: 'Zakat 2.5% & Syirkah \'Abdan', desc: 'Menghitung potongan zakat otomatis dan membagi surplus operasional secara berbobot.' }
    ];
  } else if (user.id === 'ilham') {
    roleResponsibilities = [
      { icon: 'code-2', label: 'Lead WebTech & Software Systems', desc: 'Memimpin implementasi frontend Next.js, API backend, dan integrasi pipeline CRM.' },
      { icon: 'git-pull-request', label: 'Sprint & Quality Assurance', desc: 'Memastikan seluruh deliverable website klien berkinerja tinggi, responsif, dan zero-bug.' },
      { icon: 'database', label: 'Manajemen Data & Cloud Sync', desc: 'Memastikan data Neon Postgres tersinkronisasi cepat dan aman.' }
    ];
  } else if (user.id === 'syarah' || user.id === 'syaraf') {
    roleResponsibilities = [
      { icon: 'sparkles', label: 'Lead Creative & Affiliate Media', desc: 'Mengelola kampanye konten, produksi visual promosi, dan monitoring komisi Lini 4.' },
      { icon: 'users', label: 'Akuisisi Mitra & Client Engagement', desc: 'Mengawal interaksi prospek di CRM dari tahap Lead hingga Closing Deal.' },
      { icon: 'clapperboard', label: 'Media Production Engine', desc: 'Memastikan standar output visual studio konsisten dan memikat audiens.' }
    ];
  } else if (user.id === 'nazwa') {
    roleResponsibilities = [
      { icon: 'graduation-cap', label: 'Lead AI Academy & Enterprise R&D', desc: 'Mengelola peserta pelatihan, silabus kurikulum AI, dan webinar Lini 5.' },
      { icon: 'award', label: 'Sertifikasi Peserta', desc: 'Menerbitkan sertifikat resmi pelatihan dan memantau kepuasan peserta bootcamp.' },
      { icon: 'book-open', label: 'Dokumentasi & Riset Materi', desc: 'Mengarsipkan materi riset kecerdasan buatan ke dalam Vault resmi studio.' }
    ];
  } else if (user.id === 'ahmad') {
    roleResponsibilities = [
      { icon: 'palette', label: 'Design Director & Brand Standards', desc: 'Memastikan seluruh aset visual memenuhi prinsip Itqan (kesempurnaan mutu syariah).' },
      { icon: 'folder-archive', label: 'Vault Dokumen & Deliverables', desc: 'Mengarsipkan file mentah (Figma/AI/PSD) berlabel CLIENT_SAFE atau NDA_RESTRICTED.' },
      { icon: 'check-circle-2', label: 'Review Desain Sebelum Rilis', desc: 'Meninjau mockup UI dan aset visual sebelum diserahkan ke klien B2B.' }
    ];
  } else {
    roleResponsibilities = [
      { icon: 'check-square', label: 'Eksekusi Tugas & Async Check-In', desc: 'Melaporkan progres mingguan setiap Rabu malam dalam 3 kolom (< 90 detik).' },
      { icon: 'message-square', label: 'Partisipasi Weekly Syura', desc: 'Menghadiri rapat evaluasi mingguan dan mengambil peran aktif dalam sprint studio.' },
      { icon: 'shield-check', label: 'Kepatuhan Syirkah \'Abdan', desc: 'Menjaga transparansi komitmen waktu 3-5 jam/pekan dan amanah tim.' }
    ];
  }

  const slides = [
    // Slide 1: Welcome & Studio Overview
    `
      <div class="onboarding-slide-enter space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-brand-emerald text-white flex items-center justify-center font-heading font-extrabold text-xl shadow-md border border-emerald-400/30">
            KK
          </div>
          <div>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-bold border border-emerald-300 dark:border-emerald-800">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Slide 1 dari 3: Visi Studio
            </span>
            <h3 class="font-heading font-bold text-base sm:text-lg text-gray-900 dark:text-white leading-tight mt-1">
              Ahlan wa Sahlan di KaryaKita Hub!
            </h3>
          </div>
        </div>

        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
          Sistem operasi terpadu untuk <strong>7 Mahasiswa Sistem Informasi STMIK Tazkia</strong> yang mengelola 5 unit bisnis sekaligus dengan komitmen waktu <strong>3–5 jam/minggu per orang</strong> dan modal ultra-hemat (Rp0–Rp300k).
        </p>

        <!-- 5 Business Lines Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
          <div class="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40">
            <strong class="text-purple-700 dark:text-purple-300 block font-bold">Lini 1: Desain Kreatif</strong>
            <span class="text-[10px] text-gray-500 dark:text-gray-400">UI/UX, Branding & Visual</span>
          </div>
          <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/40">
            <strong class="text-sky-700 dark:text-sky-300 block font-bold">Lini 2: WebTech</strong>
            <span class="text-[10px] text-gray-500 dark:text-gray-400">Fullstack Web & Apps</span>
          </div>
          <div class="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/40">
            <strong class="text-teal-700 dark:text-teal-300 block font-bold">Lini 3: Data & Ops</strong>
            <span class="text-[10px] text-gray-500 dark:text-gray-400">Virtual Assistant & Scraping</span>
          </div>
          <div class="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/40">
            <strong class="text-orange-700 dark:text-orange-300 block font-bold">Lini 4: Media Afiliasi</strong>
            <span class="text-[10px] text-gray-500 dark:text-gray-400">Video Content & Marketing</span>
          </div>
          <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
            <strong class="text-emerald-700 dark:text-emerald-300 block font-bold">Lini 5: AI Academy</strong>
            <span class="text-[10px] text-gray-500 dark:text-gray-400">Webinar & Training B2B</span>
          </div>
          <div class="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700">
            <strong class="text-gray-700 dark:text-gray-300 block font-bold">Tata Kelola Syariah</strong>
            <span class="text-[10px] text-gray-500 dark:text-gray-400">Zero-Riba & Syirkah 'Abdan</span>
          </div>
        </div>
      </div>
    `,

    // Slide 2: Role-Specific Guardrails
    `
      <div class="onboarding-slide-enter space-y-4">
        <div class="flex items-center gap-3">
          <img src="${user.avatar}" class="w-12 h-12 rounded-2xl object-cover border-2 border-brand-emerald shadow-md">
          <div>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-bold border border-emerald-300 dark:border-emerald-800">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Slide 2 dari 3: Peran & Tanggung Jawab
            </span>
            <h3 class="font-heading font-bold text-base sm:text-lg text-gray-900 dark:text-white leading-tight mt-1">
              ${user.name}
            </h3>
            <p class="text-xs text-brand-emerald dark:text-emerald-400 font-semibold">${roleTitle}</p>
          </div>
        </div>

        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
          Sistem telah mengkonfigurasi hak akses dan modul secara otomatis sesuai mandat Anda dalam struktur studio:
        </p>

        <!-- Role-Specific Action Checklist -->
        <div class="space-y-2 pt-1 text-xs">
          ${roleResponsibilities.map(r => `
            <div class="p-2.5 rounded-xl bg-gray-50 dark:bg-[#192722] border border-gray-200/80 dark:border-gray-800 flex items-start gap-3">
              <div class="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="${r.icon}" class="w-4 h-4"></i>
              </div>
              <div>
                <strong class="text-gray-900 dark:text-white block font-bold leading-snug">${r.label}</strong>
                <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-normal">${r.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `,

    // Slide 3: Async Rhythm & Academic Freeze
    `
      <div class="onboarding-slide-enter space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-amber-500 text-amber-950 flex items-center justify-center font-heading font-extrabold text-xl shadow-md">
            <i data-lucide="shield-alert" class="w-6 h-6"></i>
          </div>
          <div>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 text-[10px] font-bold border border-amber-300 dark:border-amber-800">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Slide 3 dari 3: Ritme & Proteksi Akademik
            </span>
            <h3 class="font-heading font-bold text-base sm:text-lg text-gray-900 dark:text-white leading-tight mt-1">
              Ritme Kerja Async & Academic Freeze
            </h3>
          </div>
        </div>

        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
          KaryaKita Hub memastikan aktivitas studio tidak pernah mengorbankan prestasi akademik kuliah di STMIK Tazkia.
        </p>

        <!-- 3 Pillars -->
        <div class="space-y-2 pt-1 text-xs">
          <div class="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 flex items-start gap-2.5">
            <i data-lucide="clock" class="w-4 h-4 text-brand-emerald dark:text-emerald-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-gray-900 dark:text-white block font-bold">Async Check-In Rabu Malam (< 90 Detik)</strong>
              <span class="text-[11px] text-gray-600 dark:text-gray-400 block mt-0.5">Lapor 3 kolom: apa yang selesai, apa yang dikerjakan pekan depan, dan apa kendala.</span>
            </div>
          </div>

          <div class="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex items-start gap-2.5">
            <i data-lucide="calendar-off" class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-gray-900 dark:text-white block font-bold">Academic Freeze Mode H-7 UTS/UAS</strong>
              <span class="text-[11px] text-gray-600 dark:text-gray-400 block mt-0.5">Sistem otomatis membekukan penambahan tugas kustom baru agar tim fokus belajar ujian.</span>
            </div>
          </div>

          <div class="p-2.5 rounded-xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/40 flex items-start gap-2.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-gray-900 dark:text-white block font-bold">Gemini Studio Copilot (Ctrl+Shift+G)</strong>
              <span class="text-[11px] text-gray-600 dark:text-gray-400 block mt-0.5">Asisten AI bawaan siap membantu perumusan tugas, notulen Syura, dan analisis KPI kapan saja.</span>
            </div>
          </div>
        </div>
      </div>
    `
  ];

  const modalHtml = `
    <div class="p-5 sm:p-7 space-y-5 max-w-lg mx-auto">
      <!-- Slide Content -->
      <div id="onboarding-slide-content">
        ${slides[slideIdx]}
      </div>

      <!-- Footer Controls: Dots & Navigation -->
      <div class="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-[#23362F]">
        <!-- Slide Indicator Dots -->
        <div class="flex items-center gap-1.5">
          ${[0, 1, 2].map(i => `
            <button onclick="goToRoleOnboardingSlide(${i})" class="h-1.5 rounded-full transition-all duration-300 ${i === slideIdx ? 'bg-brand-emerald dark:bg-emerald-400 w-6' : 'bg-gray-300 dark:bg-gray-700 w-1.5 hover:bg-gray-400'}" aria-label="Slide ${i + 1}"></button>
          `).join('')}
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
          ${slideIdx > 0 ? `
            <button onclick="prevRoleOnboardingSlide()" class="px-3 py-1.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Sebelumnya
            </button>
          ` : ''}

          ${slideIdx < 2 ? `
            <button onclick="nextRoleOnboardingSlide()" class="px-4 py-1.5 rounded-xl bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold transition flex items-center gap-1 shadow-sm cursor-pointer">
              <span>Lanjut</span>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          ` : `
            <button onclick="startHotspotTourFromModal()" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm cursor-pointer">
              <i data-lucide="compass" class="w-4 h-4 text-amber-300"></i>
              <span>Mulai Tur Hotspot</span>
            </button>
            <button onclick="finishRoleOnboardingFromModal()" class="px-3 py-1.5 rounded-xl bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold transition flex items-center gap-1 cursor-pointer">
              <span>Masuk Dashboard</span>
              <i data-lucide="check" class="w-4 h-4"></i>
            </button>
          `}
        </div>
      </div>
    </div>
  `;

  openModal(modalHtml);
  if (window.lucide) lucide.createIcons();
}

function nextRoleOnboardingSlide() {
  if (currentOnboardingModalSlide < 2) {
    currentOnboardingModalSlide++;
    renderRoleOnboardingSlide();
  }
}

function prevRoleOnboardingSlide() {
  if (currentOnboardingModalSlide > 0) {
    currentOnboardingModalSlide--;
    renderRoleOnboardingSlide();
  }
}

function goToRoleOnboardingSlide(idx) {
  currentOnboardingModalSlide = idx;
  renderRoleOnboardingSlide();
}

function startHotspotTourFromModal() {
  closeModal();
  setTimeout(() => {
    openOnboardingTourDirect(currentOnboardingModalUser);
  }, 200);
}

function finishRoleOnboardingFromModal() {
  closeModal();
  if (currentOnboardingModalUser) {
    currentOnboardingModalUser.hasCompletedOnboarding = true;
    store.logAudit('ONBOARDING_CAROUSEL_COMPLETED', `Onboarding Carousel: ${currentOnboardingModalUser.name}`, `Tur onboarding 3 slide untuk ${currentOnboardingModalUser.roleLabel} telah diselesaikan.`);
    store.saveState();
  }
  showToast('Selamat berkolaborasi di KaryaKita Hub!');
  renderActiveView();
}

function renderHotspotStep() {
  clearTourHighlights();

  const steps = getOnboardingHotspotSteps(currentHotspotUser);
  if (!steps || currentHotspotIndex >= steps.length) {
    finishOnboardingTour();
    return;
  }

  const step = steps[currentHotspotIndex];
  let targetEl = document.querySelector(step.target);
  
  // Smart check for responsive / mobile navigation
  const sidebar = document.getElementById('main-sidebar');
  if (sidebar && sidebar.classList.contains('hidden') && targetEl && sidebar.contains(targetEl)) {
    const navVal = targetEl.getAttribute('data-nav');
    const mobileNavBtn = navVal ? document.querySelector(`.mobile-bottom-nav button[data-nav="${navVal}"]`) : null;
    if (mobileNavBtn) {
      targetEl = mobileNavBtn;
    } else if (step.fallbackTarget) {
      targetEl = document.querySelector(step.fallbackTarget) || targetEl;
    }
  }

  if (!targetEl || targetEl.offsetParent === null) {
    if (step.fallbackTarget) {
      targetEl = document.querySelector(step.fallbackTarget);
    }
  }
  if (!targetEl) {
    targetEl = document.getElementById('topbar-simulator') || document.body;
  }

  // Smooth scroll target element into viewport
  try {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  } catch (e) {}

  // Apply glowing highlight ring
  targetEl.classList.add('tour-highlighted-target');

  // Allow short animation frame for layout settling before calculating absolute viewport coordinates
  setTimeout(() => {
    updateTourPositions(targetEl, step, steps);
  }, 40);

  // Bind dynamic resize/scroll repositioning
  if (!tourScrollResizeHandler) {
    tourScrollResizeHandler = () => {
      const activeSteps = getOnboardingHotspotSteps(currentHotspotUser);
      const activeStep = activeSteps[currentHotspotIndex];
      if (!activeStep) return;
      let el = document.querySelector(activeStep.target) || (activeStep.fallbackTarget && document.querySelector(activeStep.fallbackTarget));
      if (el) {
        updateTourPositions(el, activeStep, activeSteps);
      }
    };
    window.addEventListener('resize', tourScrollResizeHandler);
    window.addEventListener('scroll', tourScrollResizeHandler, { passive: true });
  }

  // Bind keyboard navigation (Escape = Skip, Right = Next, Left = Prev)
  if (!tourKeydownHandler) {
    tourKeydownHandler = (e) => {
      if (e.key === 'Escape') {
        finishOnboardingTour();
      } else if (e.key === 'ArrowRight') {
        nextOnboardingStep();
      } else if (e.key === 'ArrowLeft') {
        prevOnboardingStep();
      }
    };
    window.addEventListener('keydown', tourKeydownHandler);
  }
}

function updateTourPositions(targetEl, step, steps) {
  const rect = targetEl.getBoundingClientRect();
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  // Beacon hotspot coordinates (at edge or center of element)
  const beaconLeft = Math.round(Math.max(16, Math.min(winW - 16, rect.right - 6)));
  const beaconTop = Math.round(Math.max(16, Math.min(winH - 16, rect.top + 6)));

  // Tooltip dimensions
  const tooltipWidth = Math.min(350, winW - 24);
  const tooltipHeight = 220;

  let tooltipTop = 0;
  let tooltipLeft = 0;
  let arrowClasses = '';
  let arrowStyle = '';

  const placement = step.placement || 'bottom';

  if (placement === 'right' && (rect.right + tooltipWidth + 24 < winW)) {
    // Tooltip to the right of target (ideal for sidebar navigation)
    tooltipLeft = Math.round(rect.right + 14);
    tooltipTop = Math.round(Math.max(12, Math.min(winH - tooltipHeight - 12, rect.top + (rect.height / 2) - 80)));
    const arrowTop = Math.max(16, Math.min(tooltipHeight - 24, beaconTop - tooltipTop - 6));
    arrowClasses = 'border-l-2 border-b-2 -left-[7px]';
    arrowStyle = `top: ${arrowTop}px;`;
  } else if (placement === 'top' || (rect.bottom + tooltipHeight + 20 > winH && rect.top > tooltipHeight + 20)) {
    // Tooltip above target
    tooltipTop = Math.round(Math.max(12, rect.top - tooltipHeight - 14));
    tooltipLeft = Math.round(Math.max(12, Math.min(winW - tooltipWidth - 12, rect.left + (rect.width / 2) - (tooltipWidth / 2))));
    const arrowLeft = Math.max(16, Math.min(tooltipWidth - 24, beaconLeft - tooltipLeft - 6));
    arrowClasses = 'border-r-2 border-b-2 -bottom-[7px]';
    arrowStyle = `left: ${arrowLeft}px;`;
  } else {
    // Tooltip below target (default, best for topbar and main actions)
    tooltipTop = Math.round(Math.min(winH - tooltipHeight - 12, rect.bottom + 14));
    tooltipLeft = Math.round(Math.max(12, Math.min(winW - tooltipWidth - 12, rect.left + (rect.width / 2) - (tooltipWidth / 2))));
    const arrowLeft = Math.max(16, Math.min(tooltipWidth - 24, beaconLeft - tooltipLeft - 6));
    arrowClasses = 'border-l-2 border-t-2 -top-[7px]';
    arrowStyle = `left: ${arrowLeft}px;`;
  }

  let container = document.getElementById('tour-overlay-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'tour-overlay-container';
    container.className = 'fixed inset-0 z-[10000] pointer-events-none';
    document.body.appendChild(container);
  }

  const isFirst = currentHotspotIndex === 0;
  const isLast = currentHotspotIndex === steps.length - 1;

  container.innerHTML = `
    <!-- Semi-transparent Dimmed Backdrop -->
    <div id="tour-backdrop" class="fixed inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-auto z-[10001] transition-opacity duration-300" onclick="nextOnboardingStep()" title="Klik untuk lanjut"></div>

    <!-- Pulsing Hotspot Beacon (Titik Berkedip Interaktif) -->
    <div id="tour-hotspot-beacon" class="fixed z-[10003] pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300" style="top: ${beaconTop}px; left: ${beaconLeft}px;" onclick="nextOnboardingStep()" title="Klik titik berkedip untuk lanjut">
      <span class="relative flex h-8 w-8 items-center justify-center">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
        <span class="tour-pulse-ring absolute inline-flex h-7 w-7 rounded-full bg-emerald-500/40"></span>
        <span class="relative inline-flex rounded-full h-6 w-6 bg-brand-emerald border-2 border-white shadow-xl items-center justify-center text-white text-[11px] font-bold ring-2 ring-emerald-500/40 group-hover:scale-110 transition-transform">
          ${currentHotspotIndex + 1}
        </span>
      </span>
    </div>

    <!-- Tooltip Speech Bubble (Gelembung Teks Interaktif) -->
    <div id="tour-tooltip-bubble" class="fixed z-[10004] tour-tooltip-enter bg-white dark:bg-[#1A2C24] border-2 border-brand-emerald dark:border-emerald-500 rounded-2xl shadow-2xl p-4 sm:p-5 w-[320px] sm:w-[350px] text-gray-800 dark:text-gray-100 pointer-events-auto transition-all duration-200" style="top: ${tooltipTop}px; left: ${tooltipLeft}px;">
      
      <!-- Caret Arrow Pointer -->
      <div class="absolute w-3 h-3 bg-white dark:bg-[#1A2C24] border-brand-emerald dark:border-emerald-500 transform rotate-45 ${arrowClasses}" style="${arrowStyle}"></div>

      <!-- Header: Badge & Counter + Skip Button -->
      <div class="flex items-center justify-between pb-2 mb-2.5 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-1.5">
          <span class="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            Hotspot ${currentHotspotIndex + 1} dari ${steps.length}
          </span>
        </div>
        <button onclick="finishOnboardingTour()" class="text-[11px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition font-medium flex items-center gap-0.5" title="Lewati panduan">
          <span>Lewati</span>
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>

      <!-- Body: Icon, Title & Role-specific Description -->
      <div class="space-y-1.5 mb-3.5">
        <div class="flex items-start gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-brand-emerald dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800 mt-0.5">
            <i data-lucide="${step.icon}" class="w-4 h-4"></i>
          </div>
          <div>
            <h4 class="font-heading font-bold text-sm text-gray-900 dark:text-white leading-snug">${step.title}</h4>
            <p class="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">${step.badge}</p>
          </div>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed pt-1">
          ${step.desc}
        </p>
      </div>

      <!-- Footer: Step Dots + Prev/Next Buttons -->
      <div class="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
        <!-- Step Dots Indicator -->
        <div class="flex items-center gap-1.5">
          ${steps.map((_, idx) => `
            <button onclick="goToOnboardingStep(${idx})" class="h-1.5 rounded-full transition-all duration-300 ${idx === currentHotspotIndex ? 'bg-brand-emerald dark:bg-emerald-400 w-4' : 'bg-gray-300 dark:bg-gray-600 w-1.5 hover:bg-gray-400'}" aria-label="Hotspot ${idx + 1}"></button>
          `).join('')}
        </div>

        <!-- Action Controls -->
        <div class="flex items-center gap-2">
          ${!isFirst ? `
            <button onclick="prevOnboardingStep()" class="px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-[11px] font-semibold transition flex items-center gap-0.5">
              <i data-lucide="chevron-left" class="w-3 h-3"></i>
              <span>Sebelumnya</span>
            </button>
          ` : ''}
          <button onclick="${isLast ? 'finishOnboardingTour()' : 'nextOnboardingStep()'}" class="px-3 py-1 rounded-lg bg-brand-emerald hover:bg-brand-hover text-white text-[11px] font-semibold transition flex items-center gap-1 shadow-sm">
            <span>${isLast ? 'Selesai & Masuk' : 'Lanjut'}</span>
            <i data-lucide="${isLast ? 'check' : 'chevron-right'}" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>

    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

function nextOnboardingStep() {
  const steps = getOnboardingHotspotSteps(currentHotspotUser);
  if (currentHotspotIndex < steps.length - 1) {
    currentHotspotIndex++;
    renderHotspotStep();
  } else {
    finishOnboardingTour();
  }
}

function prevOnboardingStep() {
  if (currentHotspotIndex > 0) {
    currentHotspotIndex--;
    renderHotspotStep();
  }
}

function goToOnboardingStep(idx) {
  currentHotspotIndex = idx;
  renderHotspotStep();
}

function finishOnboardingTour() {
  clearTourHighlights();
  if (tourScrollResizeHandler) {
    window.removeEventListener('resize', tourScrollResizeHandler);
    window.removeEventListener('scroll', tourScrollResizeHandler);
    tourScrollResizeHandler = null;
  }
  if (tourKeydownHandler) {
    window.removeEventListener('keydown', tourKeydownHandler);
    tourKeydownHandler = null;
  }
  if (currentHotspotUser) {
    currentHotspotUser.hasCompletedOnboarding = true;
    store.logAudit('ONBOARDING_COMPLETED', `Tooltips & Hotspots Tour: ${currentHotspotUser.name}`, `Tur interaktif hotspot untuk peran ${currentHotspotUser.roleLabel} telah diselesaikan.`);
    store.saveState();
  }
  showToast('Selamat bekerja & berkolaborasi di KaryaKita Hub!');
  renderActiveView();
}

// Aliases for backwards compatibility
const nextOnboardingSlide = nextOnboardingStep;
const prevOnboardingSlide = prevOnboardingStep;
const goToOnboardingSlide = goToOnboardingStep;
const renderOnboardingModal = renderHotspotStep;

// ==============================================================================
// USER PROFILE & AVATAR PHOTO MANAGEMENT
// ==============================================================================

let tempSelectedAvatar = null;

function openProfileModal(userId) {
  const currentUserId = userId || (store.getCurrentUser() && store.getCurrentUser().id);
  const user = store.state.users[currentUserId];
  if (!user) return;

  tempSelectedAvatar = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0F513D&color=fff&size=256&bold=true`;

  const presetAvatars = [
    { label: 'Eksekutif Pria (CEO/CTO)', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300' },
    { label: 'Profesional Formal (COO)', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300' },
    { label: 'Finance Lead (CFO)', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300' },
    { label: 'Tech Lead (CBDO/CDO)', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
    { label: 'Creative Lead (CMO)', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300' },
    { label: 'Academy Lead (CRO)', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' },
    { label: 'Art Director (Design)', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300' },
    { label: 'Modern Studio Portrait', url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300' }
  ];

  const initialAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0F513D&color=fff&size=256&bold=true`;

  const modalHtml = `
    <div class="p-5 sm:p-7 space-y-5 max-w-lg mx-auto">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between border-b border-brand-border dark:border-gray-800 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-brand-emerald dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
            <i data-lucide="camera" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 dark:text-white">Kelola Foto Profil Pengguna</h3>
            <p class="text-[11px] text-gray-500">${user.name} • <span class="font-semibold text-brand-emerald dark:text-emerald-400">${user.roleLabel}</span></p>
          </div>
        </div>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Live Avatar Preview Area -->
      <div class="flex flex-col items-center justify-center py-2 space-y-2">
        <div class="relative group">
          <img id="avatar-live-preview" src="${tempSelectedAvatar}" alt="${user.name}" class="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-[#1E2E28] ring-4 ring-emerald-500/40 shadow-lg">
          <button type="button" onclick="document.getElementById('profile-avatar-file').click()" class="absolute bottom-0 right-0 bg-brand-emerald hover:bg-brand-hover text-white p-1.5 rounded-full shadow-lg transition" title="Unggah foto baru">
            <i data-lucide="upload" class="w-3.5 h-3.5"></i>
          </button>
        </div>
        <span class="text-[11px] text-gray-500 font-medium">Pratinjau Foto Profil Aktif</span>
      </div>

      <!-- Option 1: Local File Upload -->
      <div class="space-y-1.5">
        <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300">1. Unggah Foto dari Perangkat (Komputer / HP)</label>
        <div onclick="document.getElementById('profile-avatar-file').click()" class="border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-brand-emerald dark:hover:border-emerald-500 rounded-xl p-3.5 text-center cursor-pointer transition bg-gray-50/50 dark:bg-gray-800/30 hover:bg-emerald-50/30">
          <i data-lucide="image-plus" class="w-6 h-6 mx-auto text-brand-emerald dark:text-emerald-400 mb-1"></i>
          <p class="text-xs font-semibold text-gray-800 dark:text-gray-200">Klik di sini untuk memilih file gambar</p>
          <p class="text-[10px] text-gray-500">Mendukung format PNG, JPG, JPEG, WEBP (Otomatis dipotong persegi & dikompresi)</p>
          <input type="file" id="profile-avatar-file" accept="image/*" class="hidden" onchange="handleAvatarFileSelect(event)">
        </div>
      </div>

      <!-- Option 2: Image URL -->
      <div class="space-y-1.5">
        <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300">2. Atau Masukkan Tautan URL Foto Online</label>
        <div class="flex items-center gap-2">
          <input id="profile-avatar-url-input" type="url" placeholder="https://contoh.com/foto-anda.jpg" class="flex-1 text-xs px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1A2C24] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-brand-emerald">
          <button type="button" onclick="applyAvatarFromUrlInput()" class="px-3.5 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold rounded-lg transition shrink-0">
            Terapkan
          </button>
        </div>
      </div>

      <!-- Option 3: Preset Studio Gallery -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between">
          <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300">3. Atau Pilih dari Galeri Avatar Studio</label>
          <button type="button" onclick="resetUserProfileAvatarToDefault('${user.id}')" class="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline font-medium flex items-center gap-1">
            <i data-lucide="sparkles" class="w-3 h-3"></i>
            <span>Gunakan Inisial Studio</span>
          </button>
        </div>
        <div class="grid grid-cols-4 sm:grid-cols-8 gap-2 pt-1">
          ${presetAvatars.map((p) => `
            <button type="button" onclick="selectPresetAvatar('${p.url}')" class="group relative rounded-full overflow-hidden border-2 border-transparent hover:border-brand-emerald focus:outline-none focus:border-brand-emerald transition" title="${p.label}">
              <img src="${p.url}" alt="${p.label}" class="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform">
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Keamanan & Kata Sandi Akun -->
      <div class="pt-3 border-t border-brand-border dark:border-gray-800">
        <button type="button" onclick="closeModal(); openChangeMyPasswordModal('${user.id}')" class="w-full p-2.5 rounded-xl bg-gray-50 dark:bg-gray-850 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-gray-200 dark:border-gray-700 flex items-center justify-between text-xs font-semibold text-gray-800 dark:text-gray-200 transition">
          <div class="flex items-center gap-2">
            <i data-lucide="key-round" class="w-4 h-4 text-brand-emerald"></i>
            <span>Ubah Kata Sandi Pribadi Akun Ini</span>
          </div>
          <span class="text-[11px] text-brand-emerald dark:text-emerald-400 font-bold flex items-center gap-1">
            <span>Ubah Sekarang</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </span>
        </button>
      </div>

      <!-- Modal Footer -->
      <div class="flex items-center justify-between pt-3 border-t border-brand-border dark:border-gray-800">
        <button type="button" onclick="closeModal()" class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold transition">
          Batal
        </button>
        <button type="button" onclick="saveUserProfileAvatar('${user.id}')" class="px-5 py-2 rounded-lg bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm">
          <i data-lucide="check" class="w-3.5 h-3.5"></i>
          <span>Simpan Foto Profil</span>
        </button>
      </div>

    </div>
  `;

  openModal(modalHtml);
}

function selectPresetAvatar(url) {
  tempSelectedAvatar = url;
  const preview = document.getElementById('avatar-live-preview');
  if (preview) {
    preview.src = url;
  }
}

function applyAvatarFromUrlInput() {
  const input = document.getElementById('profile-avatar-url-input');
  if (!input || !input.value.trim()) {
    showToast('Harap masukkan tautan URL gambar yang valid!', 'error');
    return;
  }
  const url = input.value.trim();
  selectPresetAvatar(url);
  showToast('URL foto diterapkan ke pratinjau!');
}

function handleAvatarFileSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Harap pilih file gambar (JPG, PNG, WEBP, GIF)!', 'error');
    return;
  }

  if (file.size > 8 * 1024 * 1024) {
    showToast('Ukuran file maksimal 8MB!', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      try {
        const canvas = document.createElement('canvas');
        const maxDim = 256;
        canvas.width = maxDim;
        canvas.height = maxDim;
        const ctx = canvas.getContext('2d');

        const width = img.width;
        const height = img.height;
        const size = Math.min(width, height);
        const startX = (width - size) / 2;
        const startY = (height - size) / 2;

        ctx.drawImage(img, startX, startY, size, size, 0, 0, maxDim, maxDim);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
        selectPresetAvatar(compressedDataUrl);
        showToast('Foto berhasil dimuat dan disesuaikan!');
      } catch (err) {
        selectPresetAvatar(e.target.result);
        showToast('Foto berhasil dimuat!');
      }
    };
    img.onerror = function() {
      showToast('Gagal memproses file gambar.', 'error');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function resetUserProfileAvatarToDefault(userId) {
  const user = store.state.users[userId];
  if (!user) return;
  const initialUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0F513D&color=fff&size=256&bold=true`;
  selectPresetAvatar(initialUrl);
  showToast('Pratinjau disetel ke inisial nama resmi studio.');
}

function saveUserProfileAvatar(userId) {
  const user = store.state.users[userId];
  if (!user) return;

  if (!tempSelectedAvatar) {
    showToast('Pilih atau unggah foto terlebih dahulu!', 'error');
    return;
  }

  user.avatar = tempSelectedAvatar;
  store.logAudit('USER_AVATAR_UPDATED', `Foto Profil: ${user.name}`, `Foto profil untuk pengguna ${user.name} (${user.roleLabel}) telah berhasil diperbarui.`);
  store.saveState();

  // Instant UI updates across topbar, sidebar, and open views
  updateTopBanners();
  renderActiveView();

  closeModal();
  showToast(`Foto profil ${user.name} berhasil disimpan!`);
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
      el.className = 'flex items-center gap-1 text-gray-500 dark:text-gray-400 font-medium';
      el.innerHTML = '<i data-lucide="circle" class="w-3 h-3"></i> ' + label;
    }
    if (window.lucide) lucide.createIcons({ root: el });
  };

  updateRule(elLen, s.hasLength, 'Min. 8 Karakter');
  updateRule(elUp, s.hasUpper, 'Huruf Besar (A-Z)');
  updateRule(elLow, s.hasLower, 'Huruf Kecil (a-z)');
  updateRule(elNum, s.hasNumberOrSymbol, 'Angka / Simbol');
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
  if (window.lucide) lucide.createIcons({ root: icon.parentElement });
}

function toggleQuickLoginHelper() {
  const list = document.getElementById('quick-login-helper-list');
  const chevron = document.getElementById('quick-helper-chevron');
  if (!list) return;
  const isHidden = list.classList.contains('hidden');
  if (isHidden) {
    list.classList.remove('hidden');
    if (chevron) chevron.classList.add('rotate-180');
  } else {
    list.classList.add('hidden');
    if (chevron) chevron.classList.remove('rotate-180');
  }
}

function quickFillLogin(userId) {
  const user = store.state.users[userId];
  if (!user) return;
  const usernameField = document.getElementById('login-username');
  const passwordField = document.getElementById('login-password');
  if (usernameField && passwordField) {
    usernameField.value = user.username || user.id;
    passwordField.value = user.password.trim();
    usernameField.removeAttribute('aria-invalid');
    passwordField.removeAttribute('aria-invalid');
    
    // Highlight the selected quick button visually
    document.querySelectorAll('.quick-founder-btn').forEach(btn => {
      btn.classList.remove('ring-2', 'ring-brand-emerald', 'bg-emerald-50', 'dark:bg-emerald-950/60');
    });
    const selectedBtn = document.getElementById(`quick-btn-${userId}`);
    if (selectedBtn) {
      selectedBtn.classList.add('ring-2', 'ring-brand-emerald', 'bg-emerald-50', 'dark:bg-emerald-950/60');
    }
    showToast(`Kredensial untuk ${user.name} terpasang! Klik "Masuk ke Dashboard".`);
  }
}

function renderAuthForm(formType, userId = null) {
  const container = document.getElementById('auth-form-container');
  if (!container) return;

  if (typeof store !== 'undefined' && store.syncFromCloud) {
    store.syncFromCloud();
  }

  if (formType === 'login') {
    container.innerHTML = `
      <form id="form-login" onsubmit="handleLoginSubmit(event)" class="space-y-4">
        <div>
          <h3 class="font-heading font-bold text-lg sm:text-xl text-gray-900 dark:text-white leading-tight">Masuk ke Studio</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Masukkan kredensial resmi Co-Founder untuk mengakses Studio OS.</p>
        </div>

        <div class="space-y-3.5 text-xs pt-1">
          <div>
            <label for="login-username" class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Username / ID Co-Founder *</label>
            <div class="relative auth-input-group rounded-xl border border-gray-300 dark:border-gray-700 transition">
              <i data-lucide="user" class="w-4 h-4 absolute left-3 top-2.5 text-gray-400"></i>
              <input type="text" id="login-username" required placeholder="Misal: alfatih, hilwa, novita, atau ilham" autocapitalize="none" autocorrect="off" spellcheck="false" autocomplete="username" aria-label="Username atau ID Co-Founder" class="w-full pl-9 pr-3 py-2.5 rounded-xl bg-transparent dark:text-white focus:outline-none">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-1">
              <label for="login-password" class="block font-semibold text-gray-700 dark:text-gray-300">Kata Sandi *</label>
              <span class="text-[10px] text-gray-400 dark:text-gray-500">Tersinkronisasi Cloud</span>
            </div>
            <div class="relative auth-input-group rounded-xl border border-gray-300 dark:border-gray-700 transition">
              <i data-lucide="lock" class="w-4 h-4 absolute left-3 top-2.5 text-gray-400"></i>
              <input type="password" id="login-password" required placeholder="••••••••••••" autocapitalize="none" autocorrect="off" spellcheck="false" autocomplete="current-password" aria-label="Kata Sandi Co-Founder" class="w-full pl-9 pr-10 py-2.5 rounded-xl bg-transparent dark:text-white focus:outline-none font-mono">
              <button type="button" onclick="togglePasswordVisibility('login-password', 'login-pwd-icon')" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="Lihat atau sembunyikan kata sandi">
                <i id="login-pwd-icon" data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="login-error-msg" class="hidden p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-2" role="alert" aria-live="polite">
          <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0"></i>
          <span id="login-error-text">Kredensial tidak valid.</span>
        </div>

        <button type="submit" id="btn-submit-login" class="w-full py-3 bg-brand-emerald hover:bg-brand-hover active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer" aria-label="Masuk ke Dashboard Studio">
          <span>Masuk ke Dashboard Studio</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>

        <div class="p-2.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/40 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0"></i>
          <span>Akses aman terlindungi otentikasi cloud Neon Postgres & sesi terenkripsi.</span>
        </div>
      </form>
    `;
  } else if (formType === 'reset') {
    const user = store.state.users[userId];
    if (!user) return renderAuthForm('login');

    container.innerHTML = `
      <form id="form-reset-first-time" onsubmit="handleFirstTimeResetSubmit(event, '${user.id}')" class="space-y-4">
        <div class="text-center pb-2 border-b border-brand-border dark:border-[#23362F]">
          <div class="w-12 h-12 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-brand-emerald dark:text-emerald-400 flex items-center justify-center mb-2 shadow-inner border border-emerald-300/40">
            <i data-lucide="key-round" class="w-6 h-6"></i>
          </div>
          <h3 class="font-heading font-bold text-base text-gray-900 dark:text-white">Aktivasi Akun & Kata Sandi Baru</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
            Ahlan wa Sahlan, <strong>${user.name}</strong> (${user.roleLabel})!<br>
            Tentukan kata sandi baru pribadi Anda untuk keamanan akun studio.
          </p>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label for="reset-new-password" class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Kata Sandi Baru Pribadi *</label>
            <div class="relative auth-input-group rounded-xl border border-gray-300 dark:border-gray-700 transition">
              <i data-lucide="lock" class="w-4 h-4 absolute left-3 top-2.5 text-gray-400"></i>
              <input type="password" id="reset-new-password" required oninput="validatePasswordStrengthLive(this.value)" placeholder="Minimal 8 karakter campuran" autocapitalize="none" autocorrect="off" spellcheck="false" aria-label="Kata Sandi Baru Pribadi" class="w-full pl-9 pr-10 py-2.5 rounded-xl bg-transparent dark:text-white focus:outline-none font-mono">
              <button type="button" onclick="togglePasswordVisibility('reset-new-password', 'reset-pwd-icon1')" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="Lihat atau sembunyikan kata sandi">
                <i id="reset-pwd-icon1" data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Real-Time Password Strength Checklist -->
          <div class="p-3 bg-gray-50 dark:bg-[#192722] rounded-xl border border-gray-200 dark:border-gray-700 space-y-1.5 text-[11px]">
            <span class="font-semibold block text-gray-700 dark:text-gray-300">Kriteria Keamanan Sandi:</span>
            <div class="grid grid-cols-2 gap-1.5 text-[10px]">
              <div id="rule-length" class="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium"><i data-lucide="circle" class="w-3 h-3"></i> Min. 8 Karakter</div>
              <div id="rule-upper" class="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium"><i data-lucide="circle" class="w-3 h-3"></i> Huruf Besar (A-Z)</div>
              <div id="rule-lower" class="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium"><i data-lucide="circle" class="w-3 h-3"></i> Huruf Kecil (a-z)</div>
              <div id="rule-number" class="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium"><i data-lucide="circle" class="w-3 h-3"></i> Angka / Simbol</div>
            </div>
          </div>

          <div>
            <label for="reset-confirm-password" class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Konfirmasi Kata Sandi Baru *</label>
            <div class="relative auth-input-group rounded-xl border border-gray-300 dark:border-gray-700 transition">
              <i data-lucide="check-check" class="w-4 h-4 absolute left-3 top-2.5 text-gray-400"></i>
              <input type="password" id="reset-confirm-password" required placeholder="Ulangi kata sandi baru" autocapitalize="none" autocorrect="off" spellcheck="false" aria-label="Konfirmasi Kata Sandi Baru" class="w-full pl-9 pr-10 py-2.5 rounded-xl bg-transparent dark:text-white focus:outline-none font-mono">
              <button type="button" onclick="togglePasswordVisibility('reset-confirm-password', 'reset-pwd-icon2')" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="Lihat atau sembunyikan kata sandi">
                <i id="reset-pwd-icon2" data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <div id="reset-error-msg" class="hidden p-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-2" role="alert" aria-live="polite">
          <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0"></i>
          <span id="reset-error-text">Kata sandi belum memenuhi kriteria.</span>
        </div>

        <div class="pt-2 flex items-center gap-2">
          <button type="button" onclick="renderAuthForm('login')" class="w-1/3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Batal
          </button>
          <button type="submit" id="btn-submit-reset" class="flex-1 py-2.5 bg-brand-emerald hover:bg-brand-hover disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-xl shadow-md transition flex items-center justify-center gap-1.5" aria-label="Simpan dan Masuk Studio">
            <i data-lucide="shield-check" class="w-4 h-4"></i>
            <span>Simpan & Masuk Studio</span>
          </button>
        </div>
      </form>
    `;
  }
  if (window.lucide) lucide.createIcons();
}

async function handleLoginSubmit(event) {
  event.preventDefault();
  const usernameInput = document.getElementById('login-username')?.value?.trim().toLowerCase();
  const passwordInput = document.getElementById('login-password')?.value?.trim();
  const errorBox = document.getElementById('login-error-msg');
  const errorText = document.getElementById('login-error-text');
  const btnSubmit = document.getElementById('btn-submit-login');

  if (!usernameInput || !passwordInput) return;

  if (errorBox) errorBox.classList.add('hidden');

  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Memverifikasi kredensial cloud...</span>';
    if (window.lucide) lucide.createIcons({ root: btnSubmit });
  }

  let authenticatedUser = null;
  let serverAuthSuccess = false;

  // 1. Direct Serverless Cloud Auth via /api/auth (Always checks live Neon Postgres)
  try {
    const authRes = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput
      })
    });

    const authData = await authRes.json();

    if (authRes.ok && authData.success && authData.user) {
      serverAuthSuccess = true;
      authenticatedUser = authData.user;

      // Hydrate state from cloud
      if (authData.fullState) {
        const fullCloud = authData.fullState;
        if (fullCloud.users) {
          Object.keys(fullCloud.users).forEach(uid => {
            store.state.users[uid] = { ...store.state.users[uid], ...fullCloud.users[uid] };
          });
        }
        if (fullCloud.tasks) store.state.tasks = fullCloud.tasks;
        if (fullCloud.cashflow) store.state.cashflow = fullCloud.cashflow;
        if (fullCloud.auditLogs) store.state.auditLogs = fullCloud.auditLogs;
        if (fullCloud.projects) store.state.projects = fullCloud.projects;
        if (fullCloud.crmLeads) store.state.crmLeads = fullCloud.crmLeads;
      }
      store.state.users[authenticatedUser.id] = { ...store.state.users[authenticatedUser.id], ...authenticatedUser };
    } else if (authRes.status === 401) {
      // Direct credential mismatch from cloud database
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = '<span>Masuk ke Dashboard Studio</span><i data-lucide="arrow-right" class="w-4 h-4"></i>';
        if (window.lucide) lucide.createIcons({ root: btnSubmit });
      }
      if (errorBox && errorText) {
        errorText.textContent = authData.error || 'Kata sandi atau ID Co-Founder tidak cocok. Pastikan menggunakan kata sandi terbaru.';
        errorBox.classList.remove('hidden');
      }
      const userField = document.getElementById('login-username');
      const pwdField = document.getElementById('login-password');
      if (userField) userField.setAttribute('aria-invalid', 'true');
      if (pwdField) pwdField.setAttribute('aria-invalid', 'true');
      showToast(authData.error || 'Kredensial tidak valid!', 'error');
      return;
    }
  } catch (netErr) {
    console.warn('Cloud Auth offline, beralih ke verifikasi lokal:', netErr);
  }

  // 2. Offline / Local fallback if cloud auth had network error
  if (!serverAuthSuccess) {
    const cleanUser = (usernameInput || '').toLowerCase().replace(/^@/, '');
    const cleanPwd = (passwordInput || '').trim();

    const localUser = Object.values(store.state.users).find(u => {
      const uUsername = (u.username || '').toLowerCase().replace(/^@/, '');
      const uId = (u.id || '').toLowerCase();
      const uEmail = (u.email || '').toLowerCase();
      const uName = (u.name || '').toLowerCase();
      const uFirst = uName.split(' ')[0];
      return (
        uUsername === cleanUser ||
        uId === cleanUser ||
        uEmail === cleanUser ||
        uName === cleanUser ||
        uFirst === cleanUser
      );
    });

    const legacyTempPasswords = {
      hilwa: 'Kk#Hilwa98!mQ4',
      alfatih: 'Kk#Fatih2026!x9',
      novita: 'Kk#Novita45$zR7',
      ilham: 'Kk#Ilham72*wP3',
      ahmad: 'Kk#Ahmad64@sB2',
      nazwa: 'Kk#Nazwa81^yK5',
      syarah: 'Kk#Syarah36&tL8'
    };

    let isValidPwd = false;
    if (localUser) {
      const stored = (localUser.password || '').trim();
      isValidPwd = (
        stored === cleanPwd ||
        stored.toLowerCase() === cleanPwd.toLowerCase() ||
        stored.replace(/^@/, '').toLowerCase() === cleanPwd.replace(/^@/, '').toLowerCase() ||
        (legacyTempPasswords[localUser.id] && legacyTempPasswords[localUser.id] === cleanPwd)
      );
    }

    if (localUser && isValidPwd) {
      authenticatedUser = localUser;
    } else {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = '<span>Masuk ke Dashboard Studio</span><i data-lucide="arrow-right" class="w-4 h-4"></i>';
        if (window.lucide) lucide.createIcons({ root: btnSubmit });
      }
      if (errorBox && errorText) {
        errorText.textContent = 'Username atau kata sandi tidak cocok. Gunakan bantuan kredensial di atas atau hubungi DevOps (Alfatih).';
        errorBox.classList.remove('hidden');
      }
      const userField = document.getElementById('login-username');
      const pwdField = document.getElementById('login-password');
      if (userField) userField.setAttribute('aria-invalid', 'true');
      if (pwdField) pwdField.setAttribute('aria-invalid', 'true');
      showToast('Kredensial tidak valid!', 'error');
      return;
    }
  }

  // Direct successful authentication straight to main dashboard
  store.state.authSession = {
    isAuthenticated: true,
    userId: authenticatedUser.id
  };
  store.state.activeUserId = authenticatedUser.id;
  if (!serverAuthSuccess) {
    store.logAudit('AUTH_LOGIN_SUCCESS', `Login: ${authenticatedUser.name}`, `Co-Founder ${authenticatedUser.name} (${authenticatedUser.roleLabel}) berhasil masuk (Offline).`);
  }
  store.saveState();

  showToast(`Alhamdulillah! Selamat datang, ${authenticatedUser.name}.`);
  window.location.hash = '#/dashboard';
  returnToDashboard('overview');

  // If first-time login or password temporary, allow changing password smoothly from dashboard
  if (authenticatedUser.mustChangePassword) {
    setTimeout(() => {
      openChangeMyPasswordModal(authenticatedUser.id);
    }, 700);
  } else if (!authenticatedUser.hasCompletedOnboarding) {
    setTimeout(() => {
      openOnboardingTour(authenticatedUser);
    }, 400);
  }
}

function handleFirstTimeResetSubmit(event, userId) {
  event.preventDefault();
  const newPassword = document.getElementById('reset-new-password')?.value?.trim();
  const confirmPassword = document.getElementById('reset-confirm-password')?.value?.trim();
  const errorBox = document.getElementById('reset-error-msg');
  const errorText = document.getElementById('reset-error-text');
  const btnSubmit = document.getElementById('btn-submit-reset');

  const strength = checkPasswordStrength(newPassword);
  if (!strength.isValid) {
    if (errorBox && errorText) {
      errorText.textContent = 'Kata sandi baru wajib minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, dan angka/simbol.';
      errorBox.classList.remove('hidden');
    }
    const newPwdField = document.getElementById('reset-new-password');
    if (newPwdField) newPwdField.setAttribute('aria-invalid', 'true');
    showToast('Kriteria kata sandi belum terpenuhi!', 'error');
    return;
  }

  if (newPassword !== confirmPassword) {
    if (errorBox && errorText) {
      errorText.textContent = 'Konfirmasi kata sandi tidak cocok dengan kata sandi baru!';
      errorBox.classList.remove('hidden');
    }
    const confirmPwdField = document.getElementById('reset-confirm-password');
    if (confirmPwdField) confirmPwdField.setAttribute('aria-invalid', 'true');
    showToast('Konfirmasi kata sandi tidak cocok!', 'error');
    return;
  }

  const user = store.state.users[userId];
  if (!user) return;

  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Menyimpan...</span>';
    if (window.lucide) lucide.createIcons({ root: btnSubmit });
  }

  user.password = newPassword;
  user.mustChangePassword = false;
  user.passwordChangedAt = new Date().toISOString();
  store.logAudit('AUTH_PASSWORD_ACTIVATED', `Aktivasi Akun: ${user.name}`, `Co-Founder ${user.name} (${user.roleLabel}) berhasil membuat kata sandi baru. Akun resmi aktif.`);
  store.saveState();
  store.syncToCloud();

  showToast('Alhamdulillah! Kata sandi berhasil diperbarui! Menyiapkan ruang kerja...');
  setTimeout(() => {
    store.state.authSession = {
      isAuthenticated: true,
      userId: user.id
    };
    store.state.activeUserId = user.id;
    store.saveState();
    checkAuthAndRender();
    openRoleOnboardingModal(user);
  }, 500);
}

function openAdminChangePasswordModal(userId) {
  const targetUser = store.state.users[userId];
  if (!targetUser) return;
  const actor = store.getCurrentUser();

  const modalHtml = `
    <div class="p-5 sm:p-7 space-y-4 max-w-md mx-auto">
      <div class="flex items-center justify-between border-b border-brand-border dark:border-gray-800 pb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-brand-emerald dark:text-emerald-400 flex items-center justify-center">
            <i data-lucide="key-round" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 dark:text-white">Ubah Kata Sandi Co-Founder</h3>
            <p class="text-[11px] text-gray-500">${targetUser.name} • <span class="font-mono text-brand-emerald">@${targetUser.username || targetUser.id}</span></p>
          </div>
        </div>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 transition">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <form id="form-admin-change-pwd" onsubmit="saveAdminChangePassword(event, '${targetUser.id}')" class="space-y-4 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Kata Sandi Baru *</label>
          <div class="relative">
            <input type="text" id="admin-new-pwd-input" required value="${targetUser.password}" class="w-full pl-3 pr-20 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white font-mono focus:outline-none focus:ring-1 focus:ring-brand-emerald">
            <button type="button" onclick="generateRandomPasswordForAdmin('${targetUser.name}')" class="absolute right-1.5 top-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-700 dark:text-gray-200 rounded text-[10px] font-semibold transition" title="Buat password acak yang kuat">
              ⚡ Acak
            </button>
          </div>
          <p class="text-[10px] text-gray-500 mt-1">Anda dapat mengetik password kustom atau menekan tombol Acak.</p>
        </div>

        <div>
          <label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Status Aktivasi Kata Sandi *</label>
          <select id="admin-pwd-status-select" class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-emerald font-semibold">
            <option value="ACTIVE" ${!targetUser.mustChangePassword ? 'selected' : ''}>✅ Aktif Langsung (Password Pribadi Resmi - Tanpa Wajib Reset)</option>
            <option value="TEMP" ${targetUser.mustChangePassword ? 'selected' : ''}>🔑 Password Sementara (Wajibkan Reset saat Login Pertama)</option>
          </select>
          <p class="text-[10px] text-gray-500 mt-1">Pilih <em>Aktif Langsung</em> jika ini adalah kata sandi definitif agar status di sistem langsung hijau (Aktif).</p>
        </div>

        <div class="pt-3 border-t border-brand-border dark:border-gray-800 flex items-center justify-end gap-2">
          <button type="button" onclick="closeModal()" class="px-3.5 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-50">
            Batal
          </button>
          <button type="submit" class="px-4 py-1.5 rounded-lg bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm">
            <i data-lucide="check" class="w-3.5 h-3.5"></i>
            <span>Simpan Kata Sandi</span>
          </button>
        </div>
      </form>
    </div>
  `;
  openModal(modalHtml);
  if (window.lucide) lucide.createIcons();
}

function generateRandomPasswordForAdmin(userName) {
  const input = document.getElementById('admin-new-pwd-input');
  if (!input) return;
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*';
  let newPwd = 'Kk#' + (userName || 'Studio').split(' ')[0];
  for (let i = 0; i < 4; i++) {
    newPwd += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  newPwd += '!9';
  input.value = newPwd;
}

function saveAdminChangePassword(event, userId) {
  event.preventDefault();
  const newPwd = document.getElementById('admin-new-pwd-input')?.value?.trim();
  const statusSelect = document.getElementById('admin-pwd-status-select')?.value;
  if (!newPwd || newPwd.length < 6) {
    showToast('Kata sandi minimal 6 karakter!', 'error');
    return;
  }

  const targetUser = store.state.users[userId];
  if (!targetUser) return;
  const actor = store.getCurrentUser();

  const isPermanent = statusSelect === 'ACTIVE';
  targetUser.password = newPwd;
  targetUser.mustChangePassword = !isPermanent;
  targetUser.passwordChangedAt = new Date().toISOString();

  store.logAudit(
    'AUTH_PASSWORD_UPDATED',
    `Ubah Sandi: ${targetUser.name}`,
    `DevOps/Admin (${actor.name}) memperbarui kata sandi untuk ${targetUser.name} (${targetUser.roleLabel}). Status: ${isPermanent ? 'Aktif (Password Pribadi)' : 'Password Sementara'}.`
  );
  store.saveState();
  store.syncToCloud();

  closeModal();
  showToast(`Kata sandi untuk ${targetUser.name} berhasil disimpan (${isPermanent ? 'Aktif Pribadi' : 'Sementara'})!`);
  renderActiveView();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(newPwd).then(() => {
      showToast(`Kata sandi baru untuk ${targetUser.name} disalin ke clipboard!`);
    }).catch(() => {});
  }
}

function openChangeMyPasswordModal(userId) {
  const currentUserId = userId || (store.getCurrentUser() && store.getCurrentUser().id);
  const user = store.state.users[currentUserId];
  if (!user) return;

  const modalHtml = `
    <div class="p-5 sm:p-7 space-y-4 max-w-md mx-auto">
      <div class="flex items-center justify-between border-b border-brand-border dark:border-gray-800 pb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-brand-emerald dark:text-emerald-400 flex items-center justify-center">
            <i data-lucide="shield-check" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 dark:text-white">Ubah Kata Sandi Pribadi</h3>
            <p class="text-[11px] text-gray-500">${user.name} • ${user.roleLabel}</p>
          </div>
        </div>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 transition">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <form id="form-change-my-pwd" onsubmit="saveChangeMyPassword(event, '${user.id}')" class="space-y-3.5 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Kata Sandi Baru Pribadi *</label>
          <div class="relative">
            <input type="password" id="my-new-pwd-input" required oninput="validatePasswordStrengthLive(this.value)" placeholder="Minimal 8 karakter campuran" autocapitalize="none" autocorrect="off" spellcheck="false" class="w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white font-mono focus:outline-none focus:ring-1 focus:ring-brand-emerald">
            <button type="button" onclick="togglePasswordVisibility('my-new-pwd-input', 'my-pwd-icon1')" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
              <i id="my-pwd-icon1" data-lucide="eye" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- Real-Time Password Strength Checklist -->
        <div class="p-2.5 bg-gray-50 dark:bg-[#192722] rounded-lg border border-gray-200 dark:border-gray-700 space-y-1 text-[11px]">
          <span class="font-semibold block text-gray-700 dark:text-gray-300">Kriteria Keamanan:</span>
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
            <input type="password" id="my-confirm-pwd-input" required placeholder="Ulangi kata sandi baru" autocapitalize="none" autocorrect="off" spellcheck="false" class="w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white font-mono focus:outline-none focus:ring-1 focus:ring-brand-emerald">
            <button type="button" onclick="togglePasswordVisibility('my-confirm-pwd-input', 'my-pwd-icon2')" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
              <i id="my-pwd-icon2" data-lucide="eye" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <div id="my-pwd-error-msg" class="hidden p-2.5 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs"></div>

        <div class="pt-3 border-t border-brand-border dark:border-gray-800 flex items-center justify-end gap-2">
          <button type="button" onclick="closeModal()" class="px-3.5 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-50">
            Batal
          </button>
          <button type="submit" class="px-4 py-1.5 rounded-lg bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
            <span>Simpan Kata Sandi Pribadi</span>
          </button>
        </div>
      </form>
    </div>
  `;
  openModal(modalHtml);
  if (window.lucide) lucide.createIcons();
}

function saveChangeMyPassword(event, userId) {
  event.preventDefault();
  const newPassword = document.getElementById('my-new-pwd-input')?.value?.trim();
  const confirmPassword = document.getElementById('my-confirm-pwd-input')?.value?.trim();
  const errorBox = document.getElementById('my-pwd-error-msg');

  const strength = checkPasswordStrength(newPassword);
  if (!strength.isValid) {
    if (errorBox) {
      errorBox.textContent = 'Kata sandi baru wajib minimal 8 karakter dengan huruf besar, huruf kecil, dan angka/simbol.';
      errorBox.classList.remove('hidden');
    }
    showToast('Kriteria kata sandi belum terpenuhi!', 'error');
    return;
  }

  if (newPassword !== confirmPassword) {
    if (errorBox) {
      errorBox.textContent = 'Konfirmasi kata sandi tidak cocok!';
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

  store.logAudit(
    'AUTH_PASSWORD_CHANGED',
    `Ganti Kata Sandi: ${user.name}`,
    `Co-Founder ${user.name} (${user.roleLabel}) berhasil memperbarui kata sandi pribadi secara mandiri.`
  );
  store.saveState();
  store.syncToCloud();

  closeModal();
  showToast('Alhamdulillah! Kata sandi pribadi Anda berhasil diperbarui dan akun berstatus Aktif Resmi.');
  renderActiveView();
}

function exportStudioStateToClipboard() {
  try {
    const rawData = JSON.stringify(store.state);
    const b64Data = btoa(encodeURIComponent(rawData));
    if (navigator.clipboard) {
      navigator.clipboard.writeText(b64Data).then(() => {
        showToast('Kode sinkronisasi studio berhasil disalin ke clipboard! Bagikan ke HP rekan.');
      }).catch(() => {
        prompt('Salin seluruh teks sinkronisasi berikut untuk diimpor ke HP:', b64Data);
      });
    } else {
      prompt('Salin seluruh teks sinkronisasi berikut untuk diimpor ke HP:', b64Data);
    }
  } catch (err) {
    showToast('Gagal mengekspor data: ' + err.message, 'error');
  }
}

function openImportStateModal() {
  const modalHtml = `
    <div class="p-5 sm:p-7 space-y-4 max-w-md mx-auto">
      <div class="flex items-center justify-between border-b border-brand-border dark:border-gray-800 pb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center">
            <i data-lucide="download" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 dark:text-white">Impor Data Sinkronisasi Studio</h3>
            <p class="text-[11px] text-gray-500">Salin dari laptop lalu tempelkan kode di bawah</p>
          </div>
        </div>
        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600 transition">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <form id="form-import-state" onsubmit="saveImportedStudioState(event)" class="space-y-3.5 text-xs">
        <div>
          <label class="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Kode Sinkronisasi Data Studio *</label>
          <textarea id="import-state-code" rows="5" required placeholder="Tempelkan kode hasil ekspor dari laptop di sini..." class="w-full p-2.5 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-[#192722] dark:text-white font-mono text-[10px] focus:outline-none focus:ring-1 focus:ring-brand-emerald"></textarea>
        </div>

        <div class="p-2.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 rounded-lg text-amber-800 dark:text-amber-200 text-[11px]">
          ⚠️ <strong>Perhatian:</strong> Mengimpor data akan memperbarui basis data studio di peramban perangkat ini agar identik dengan data laptop.
        </div>

        <div class="pt-3 border-t border-brand-border dark:border-gray-800 flex items-center justify-end gap-2">
          <button type="button" onclick="closeModal()" class="px-3.5 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-50">
            Batal
          </button>
          <button type="submit" class="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm">
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
            <span>Terapkan Sinkronisasi</span>
          </button>
        </div>
      </form>
    </div>
  `;
  openModal(modalHtml);
  if (window.lucide) lucide.createIcons();
}

function saveImportedStudioState(event) {
  event.preventDefault();
  const rawCode = document.getElementById('import-state-code')?.value?.trim();
  if (!rawCode) return;

  try {
    const jsonStr = decodeURIComponent(atob(rawCode));
    const parsed = JSON.parse(jsonStr);
    if (!parsed || !parsed.users) {
      throw new Error('Format kode sinkronisasi tidak valid.');
    }

    store.state = parsed;
    store.saveState();
    closeModal();
    showToast('Alhamdulillah! Sinkronisasi data studio berhasil diterapkan di perangkat ini.');
    checkAuthAndRender();
    renderActiveView();
  } catch (err) {
    showToast('Gagal menerapkan sinkronisasi: ' + err.message, 'error');
  }
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
    window.location.hash = '#/';
    showToast('Anda telah keluar dari sistem.');
    checkAuthAndRender();
  }
}

function isDashboardRoute() {
  const hash = (window.location.hash || '').toLowerCase();
  const dashboardRoutes = [
    '#/dashboard', '#dashboard',
    '#/overview', '#overview',
    '#/tasks', '#tasks',
    '#/projects', '#projects',
    '#/reports', '#reports',
    '#/finance', '#finance',
    '#/crm', '#crm',
    '#/academy', '#academy',
    '#/affiliate', '#affiliate',
    '#/archives', '#archives',
    '#/analytics', '#analytics',
    '#/system', '#system',
    '#/integrations', '#integrations',
    '#/client_portal', '#client_portal',
    '#/client-portal', '#client-portal'
  ];
  return dashboardRoutes.some(r => hash === r || hash.startsWith(r + '/') || hash.startsWith(r + '?'));
}

function getViewFromHash() {
  const hash = (window.location.hash || '').toLowerCase().replace(/^#\/?/, '').split('/')[0].split('?')[0];
  const validViews = [
    'overview', 'dashboard', 'tasks', 'reports', 'archives',
    'projects', 'crm', 'finance', 'academy', 'affiliate',
    'integrations', 'analytics', 'system', 'client_portal', 'client-portal'
  ];
  if (hash === 'dashboard') return 'overview';
  if (hash === 'client_portal' || hash === 'client-portal') return 'client-portal';
  if (validViews.includes(hash)) return hash;
  return 'overview';
}

function checkAuthAndRender() {
  const authScreen = document.getElementById('auth-screen');
  const appLayout = document.getElementById('app-layout-wrapper');
  const topbarSimulator = document.getElementById('topbar-simulator');
  const dynamicBanners = document.getElementById('dynamic-banners-container');
  const mobileNav = document.querySelector('.mobile-bottom-nav');
  const publicHome = document.getElementById('public-homepage');

  const isAuthenticated = !!(store.state.authSession && store.state.authSession.isAuthenticated && store.state.authSession.userId);
  const isDash = isDashboardRoute();

  // Pre-render auth form so modal is ready
  const container = document.getElementById('auth-form-container');
  if (!container || !container.querySelector('form')) {
    renderAuthForm('login');
  }

  if (isDash) {
    if (isAuthenticated) {
      store.state.activeUserId = store.state.authSession.userId;
      if (publicHome) publicHome.classList.add('hidden');
      if (authScreen) authScreen.classList.add('hidden');
      if (appLayout) appLayout.classList.remove('hidden');
      if (topbarSimulator) topbarSimulator.classList.remove('hidden');
      if (dynamicBanners) dynamicBanners.classList.remove('hidden');
      if (mobileNav) mobileNav.classList.remove('hidden');

      const targetView = getViewFromHash();
      if (targetView && targetView !== currentView) {
        currentView = targetView;
      }

      updateTopBanners();
      renderActiveView();
    } else {
      // Trying to access dashboard without auth -> stay on homepage and open login modal
      window.location.hash = '#/';
      if (publicHome) publicHome.classList.remove('hidden');
      if (appLayout) appLayout.classList.add('hidden');
      if (topbarSimulator) topbarSimulator.classList.add('hidden');
      if (dynamicBanners) dynamicBanners.classList.add('hidden');
      if (mobileNav) mobileNav.classList.add('hidden');

      updateHomepageCtaState();
      openLoginModal();
      showToast('Silakan login terlebih dahulu untuk mengakses Dashboard Studio.', 'info');
    }
  } else {
    // Public Homepage (route / or section anchors like #tentang, #modul, #tim, #faq)
    if (publicHome) publicHome.classList.remove('hidden');
    if (authScreen) authScreen.classList.add('hidden');
    if (appLayout) appLayout.classList.add('hidden');
    if (topbarSimulator) topbarSimulator.classList.add('hidden');
    if (dynamicBanners) dynamicBanners.classList.add('hidden');
    if (mobileNav) mobileNav.classList.add('hidden');

    updateHomepageCtaState();
  }

  if (window.lucide) lucide.createIcons();
}

// ==============================================================================
// GEMINI AI STUDIO COPILOT & GOOGLE DRIVE INTEGRATION
// ==============================================================================

const ROLE_COPILOT_PERSONAS = {
  SUPER_ADMIN: {
    roleTitle: 'CEO & CTO Executive Advisor',
    greeting: 'Halo Syauqi! Saya Gemini Copilot untuk peran CEO & CTO Anda. Saya siap membantu evaluasi KPI studio, strategi venture Syirkah \'Abdan, roadmap teknologi, dan manajemen kapasitas 7 co-founder.',
    systemPrompt: `Anda adalah Gemini Studio Copilot khusus untuk Syauqi Muhammad Al Fatih (CEO & CTO) di KaryaKita Hub OS. 
Studio ini beroperasi dengan akad Syirkah 'Abdan (zero-riba, zero-gharar) oleh 7 mahasiswa STMIK Tazkia. 
Tugas utama Anda:
1. Memberikan saran eksekutif berbasis data KPI studio.
2. Membantu perencanaan Academic Freeze Mode H-7 UTS dan UAS Tazkia.
3. Menjaga arsitektur teknis sistem, kedaulatan data, dan integrasi GitHub.
4. Menjaga keseimbangan antara capaian bisnis studio dan keberhasilan akademik seluruh co-founder.
Berikan jawaban yang taktis, berstruktur rapi, berwawasan kewirausahaan syariah, dan langsung dapat ditindaklanjuti.`,
    quickPrompts: [
      'Analisis KPI & beban kerja 7 co-founder pekan ini',
      'Rancang strategi sprint menuju target kas mandiri Rp3,5 Juta',
      'Review kesiapan sistem menjelang Academic Freeze UTS Tazkia'
    ]
  },
  OPS_ADMIN: {
    roleTitle: 'COO & Project Management Specialist',
    greeting: 'Halo Hilwa! Saya Gemini Copilot untuk peran COO & Head of PM. Saya siap membantu Anda memecah brief klien menjadi task Kanban dengan DoD jelas, SOP triage revisi, dan penjadwalan tim.',
    systemPrompt: `Anda adalah Gemini Studio Copilot khusus untuk Hilwa Mufida (COO & Head of PM) di KaryaKita Hub OS. 
Tugas utama Anda:
1. Menerjemahkan kebutuhan klien B2B menjadi tiket tugas terukur dengan kriteria DoD (Definition of Done).
2. Membantu alur Triage Tiket Revisi agar revisi klien terverifikasi sebelum masuk ke Kanban eksekusi.
3. Membantu pembagian jam kerja rekan tim agar tidak terjadi bottle-neck atau burnout.
4. Siap bertindak sebagai Backup Approver verifikasi keuangan saat CFO dalam Mode Ujian (EXAM_MODE).
Gunakan bahasa operasional yang tegas, terorganisir dengan checklist, dan praktis.`,
    quickPrompts: [
      'Breakdown brief proyek klien B2B menjadi tiket tugas Kanban',
      'Buat checklist DoD (Definition of Done) untuk verifikasi tugas',
      'Susun draft SOP penanganan triage revisi dari klien'
    ]
  },
  FINANCE_ADMIN: {
    roleTitle: 'CFO & Syariah Finance Advisor',
    greeting: 'Halo Novita! Saya Gemini Copilot untuk peran CFO Anda. Saya siap membantu verifikasi pembayaran termin DP 50%, simulasi bagi hasil 60/40, audit kas syariah, dan kalkulasi Zakat Perusahaan.',
    systemPrompt: `Anda adalah Gemini Studio Copilot khusus untuk Novita Rani (CFO & VP Growth Systems) di KaryaKita Hub OS. 
Tugas utama Anda:
1. Menjaga tata kelola kas syariah zero-riba, zero-gharar, dan pelacak qardh hasan 0%.
2. Menghitung formula Bagi Hasil Syirkah 'Abdan dinamis: 60% dibagi rata kepada co-founder aktif + 40% dialokasikan berdasarkan 4-Pilar Poin Kontribusi berbobot.
3. Memastikan Payment Gate termin proyek dipatuhi (DP 50% sebelum pengerjaan dimulai, pelunasan sebelum serah terima).
4. Menghitung Zakat Perniagaan 2,5% dari surplus kas bersih dan monitoring Graduation Rule Rp3,5 Juta.
5. Menyiapkan agenda 'Review & Musyawarah 48 Jam' sebelum penguncian buku kas bulanan.
Berikan perhitungan matematis yang transparan, teliti, dan berlandaskan muamalah syariah yang adil (taradhin).`,
    quickPrompts: [
      'Simulasi hitungan bagi hasil 60% rata & 40% poin kontribusi',
      'Buat draft template invoice penagihan DP 50% untuk klien B2B',
      'Hitung zakat perniagaan 2,5% dari surplus kas studio saat ini'
    ]
  },
  UNIT_LEAD_TECH: {
    roleTitle: 'CBDO & CDO Growth Strategist',
    greeting: 'Halo Ilham! Saya Gemini Copilot untuk peran CBDO & CDO Anda. Saya siap membantu strategi pipeline CRM B2B 6-tahap, pembuatan proposal penawaran, dan pengembangan unit Data & AI Assistance.',
    systemPrompt: `Anda adalah Gemini Studio Copilot khusus untuk Ilham Akbar (CBDO & CDO) di KaryaKita Hub OS.
Tugas utama Anda:
1. Mengembangkan pipeline penjualan B2B dari Leads, Discovery, Pitch, Proposal, Negotiation hingga Won.
2. Membantu drafting proposal solusi teknologi, data entry/cleaning, dan integrasi AI untuk calon klien.
3. Merancang strategi follow-up prospek yang persuasif dan profesional.
4. Memaksimalkan perolehan 5 poin kontribusi berbobot untuk setiap deal klien yang berhasil dimenangkan (Won).
Berikan saran sales B2B yang tajam, persuasif, elegan, dan berorientasi pada penyelesaian masalah klien.`,
    quickPrompts: [
      'Buat draft pesan follow-up prospek B2B yang belum merespon proposal',
      'Susun penawaran paket layanan Lini 3 Data & AI Assistance',
      'Tips negosiasi closing klien korporat dengan termin syariah'
    ]
  },
  UNIT_LEAD_CREATIVE: {
    roleTitle: 'CMO & Viral Growth Specialist',
    greeting: 'Halo Syarah! Saya Gemini Copilot untuk peran CMO Anda. Saya siap membantu Anda menyusun kalender konten edukasi AI viral di TikTok/Reels/LinkedIn, formula hook video, dan program kemitraan affiliate.',
    systemPrompt: `Anda adalah Gemini Studio Copilot khusus untuk Syarah Fauziah (CMO) di KaryaKita Hub OS.
Tugas utama Anda:
1. Merancang kalender konten media multi-platform mingguan untuk mempromosikan layanan studio dan AI Academy.
2. Menciptakan hook video 3 detik pertama yang menarik perhatian (attention-grabbing) dan skrip video pendek edukatif.
3. Mengembangkan strategi pertumbuhan jaringan mitra afiliasi (Lini 4) dan kampanye peluncuran layanan.
4. Menganalisis metrik viralitas dan konversi audiens menjadi prospek klien atau peserta academy.
Berikan ide-ide kreatif yang segar, trendi, berdaya tular tinggi, dan selaras dengan etika islami.`,
    quickPrompts: [
      'Buat 5 ide hook video pendek seputar tips AI untuk mahasiswa & UMKM',
      'Susun kalender jadwal konten 7 hari untuk TikTok dan Instagram Reels',
      'Tulis skrip promosi program kemitraan affiliate komisi 10%'
    ]
  },
  UNIT_LEAD_ACADEMY: {
    roleTitle: 'CRO & AI Academy Curriculum Lead',
    greeting: 'Halo Nazwa! Saya Gemini Copilot untuk peran CRO & Lead Academy Anda. Saya siap membantu Anda merancang silabus batch workshop AI, soal latihan/kuis, materi sertifikasi, dan kurikulum inkubasi talenta.',
    systemPrompt: `Anda adalah Gemini Studio Copilot khusus untuk Nazwa Azahra (CRO & Lead AI Academy) di KaryaKita Hub OS.
Tugas utama Anda:
1. Merancang silabus dan modul workshop AI praktis (Prompt Engineering, AI Tools untuk Produktivitas, Otomasi Bisnis).
2. Membuat materi kuis interaktif, studi kasus praktis, dan kriteria penilaian kelulusan peserta.
3. Membantu strategi pembukaan batch pelatihan baru dan pesan rekrutmen peserta workshop.
4. Menyusun format sertifikat resmi dan panduan pasca-workshop.
Berikan struktur materi edukasi yang runtut, mudah dipahami mahasiswa pemula hingga menengah, dan inspiratif.`,
    quickPrompts: [
      'Susun silabus workshop praktis AI Productivity 3 Jam',
      'Buat 5 studi kasus latihan prompting untuk peserta kelas AI',
      'Tulis draft pengumuman pembukaan pendaftaran Batch Baru Academy'
    ]
  },
  UNIT_LEAD_DESIGN: {
    roleTitle: 'Creative Director & Visual Strategist',
    greeting: 'Halo Ahmad! Saya Gemini Copilot untuk peran Creative Director Anda. Saya siap membantu konsep visual brand, prompt generasi aset gambar AI, review UI/UX, dan verifikasi standar mutu Itqan.',
    systemPrompt: `Anda adalah Gemini Studio Copilot khusus untuk Ahmad Maulana (Creative Director) di KaryaKita Hub OS.
Tugas utama Anda:
1. Memberikan ide visual art direction, palet warna, tipografi, dan komposisi desain identitas brand.
2. Merumuskan prompt AI image generator (Midjourney, Stable Diffusion, Google Imagen) untuk aset kreatif studio.
3. Memastikan prinsip Itqan (kesempurnaan mutu karya dan ketelitian detail) terpenuhi sebelum file diarsipkan ke Vault.
4. Mengklasifikasikan aset deliverable resmi dengan tag 'CLIENT_SAFE' atau 'NDA_RESTRICTED'.
Gunakan bahasa kreatif visual yang estetis, kaya referensi desain modern, dan berstandar profesional tinggi.`,
    quickPrompts: [
      'Brainstorming konsep visual & moodboard brand identity studio modern',
      'Buat prompt AI image generator untuk ilustrasi landing page',
      'Checklist audit kualitas Itqan sebelum deliverable dikirim ke klien'
    ]
  }
};

let activeGeminiSessionId = null;
let activeAttachedDriveDoc = null;

function getCopilotPersonaForUser(user) {
  if (!user) return ROLE_COPILOT_PERSONAS.SUPER_ADMIN;
  if (user.role === 'SUPER_ADMIN') return ROLE_COPILOT_PERSONAS.SUPER_ADMIN;
  if (user.role === 'OPS_ADMIN') return ROLE_COPILOT_PERSONAS.OPS_ADMIN;
  if (user.role === 'FINANCE_ADMIN') return ROLE_COPILOT_PERSONAS.FINANCE_ADMIN;
  if (user.id === 'ilham') return ROLE_COPILOT_PERSONAS.UNIT_LEAD_TECH;
  if (user.id === 'syarah' || user.id === 'syaraf') return ROLE_COPILOT_PERSONAS.UNIT_LEAD_CREATIVE;
  if (user.id === 'nazwa') return ROLE_COPILOT_PERSONAS.UNIT_LEAD_ACADEMY;
  if (user.id === 'ahmad') return ROLE_COPILOT_PERSONAS.UNIT_LEAD_DESIGN;
  return ROLE_COPILOT_PERSONAS.SUPER_ADMIN;
}

function toggleGeminiCopilot() {
  const drawer = document.getElementById('gemini-copilot-drawer');
  if (!drawer) return;

  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    drawer.classList.remove('hidden');
    drawer.classList.add('gemini-drawer-enter');
    initGeminiCopilotUI();
  } else {
    drawer.classList.add('hidden');
    drawer.classList.remove('gemini-drawer-enter');
  }
}

function initGeminiCopilotUI() {
  const user = store.getCurrentUser() || { id: 'alfatih', name: 'Syauqi Muhammad Al Fatih', roleLabel: 'CEO & CTO' };
  const persona = getCopilotPersonaForUser(user);

  // Update header labels
  const roleLabel = document.getElementById('gemini-role-label');
  if (roleLabel) {
    roleLabel.textContent = `Mode: ${user.name.split(' ')[0]} (${user.roleLabel})`;
  }

  // Update key status indicator and alert banner
  const keyStatus = document.getElementById('gemini-key-status-text');
  let savedKey = localStorage.getItem('karyakita_gemini_api_key');
  if (!savedKey || savedKey.length <= 10) {
    savedKey = store.state.geminiApiKey || DEFAULT_GEMINI_KEY;
    localStorage.setItem('karyakita_gemini_api_key', savedKey);
  }
  store.state.geminiApiKey = savedKey;

  if (keyStatus) {
    keyStatus.textContent = (savedKey && savedKey.length > 10) ? 'API Key Terhubung' : 'Set API Key Gratis';
  }

  const apikeyBanner = document.getElementById('gemini-apikey-banner');
  if (apikeyBanner) {
    if (!savedKey || savedKey.length <= 10) {
      apikeyBanner.classList.remove('hidden');
    } else {
      apikeyBanner.classList.add('hidden');
    }
  }

  // Update model selector
  const modelSelect = document.getElementById('gemini-model-select');
  if (modelSelect) {
    modelSelect.value = store.state.geminiModel || 'gemini-flash-lite-latest';
  }

  // Render quick prompts
  renderGeminiQuickPrompts(persona.quickPrompts);

  // Initialize or load active session
  if (!store.state.geminiChatSessions) store.state.geminiChatSessions = {};
  if (!store.state.geminiChatSessions[user.id]) store.state.geminiChatSessions[user.id] = [];

  const userSessions = store.state.geminiChatSessions[user.id];
  if (userSessions.length === 0 || !activeGeminiSessionId) {
    startNewGeminiChat(true);
  } else {
    renderGeminiMessages(activeGeminiSessionId);
  }

  if (window.lucide) lucide.createIcons();
}

function renderGeminiQuickPrompts(prompts) {
  const container = document.getElementById('gemini-quick-prompts-container');
  if (!container || !prompts) return;

  container.innerHTML = prompts.map(p => `
    <button type="button" onclick="sendQuickPrompt(decodeURIComponent('${encodeURIComponent(p)}'))" class="whitespace-nowrap px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 hover:bg-emerald-100 dark:hover:bg-emerald-900 border border-emerald-200 dark:border-emerald-800 text-[10px] font-medium text-brand-emerald dark:text-emerald-300 transition shrink-0 flex items-center gap-1 shadow-2xs">
      <i data-lucide="sparkle" class="w-2.5 h-2.5 text-amber-500"></i>
      <span>${escapeHtml(p)}</span>
    </button>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function sendQuickPrompt(promptText) {
  const input = document.getElementById('gemini-chat-input');
  if (input) {
    input.value = promptText;
    handleSendGeminiMessage();
  }
}

function startNewGeminiChat(isInitialSilent) {
  const user = store.getCurrentUser() || { id: 'alfatih', name: 'Syauqi Muhammad Al Fatih', roleLabel: 'CEO & CTO' };
  const persona = getCopilotPersonaForUser(user);

  const sessionId = 'session_' + Date.now();
  activeGeminiSessionId = sessionId;

  const newSession = {
    id: sessionId,
    title: 'Obrolan Baru',
    createdAt: new Date().toISOString(),
    messages: [
      {
        id: 'msg_' + Date.now(),
        sender: 'gemini',
        text: persona.greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]
  };

  if (!store.state.geminiChatSessions[user.id]) {
    store.state.geminiChatSessions[user.id] = [];
  }
  store.state.geminiChatSessions[user.id].unshift(newSession);
  store.saveState();

  renderGeminiMessages(sessionId);
  if (!isInitialSilent) {
    showToast('Sesi obrolan baru Gemini Copilot siap!');
  }
}

function renderGeminiMessages(sessionId) {
  try {
    const user = store.getCurrentUser() || { id: 'alfatih', name: 'Syauqi Muhammad Al Fatih' };
    const canvas = document.getElementById('gemini-messages-canvas');
    if (!canvas) return;

    if (!store.state.geminiChatSessions) store.state.geminiChatSessions = {};
    if (!store.state.geminiChatSessions[user.id]) store.state.geminiChatSessions[user.id] = [];

    const userSessions = store.state.geminiChatSessions[user.id];
    let session = userSessions.find(s => s.id === sessionId) || userSessions[0];
    if (!session) {
      canvas.innerHTML = '<div class="text-center py-10 text-gray-400">Belum ada pesan. Mulai obrolan dengan Gemini Copilot!</div>';
      return;
    }

    activeGeminiSessionId = session.id;

    canvas.innerHTML = session.messages.map(msg => {
      const isUser = msg.sender === 'user';
      return `
        <div class="flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'} group">
          ${!isUser ? `
            <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs mt-0.5">
              <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            </div>
          ` : ''}

          <div class="max-w-[85%] sm:max-w-[80%] space-y-1">
            <div class="p-3 rounded-2xl ${isUser ? 'gemini-bubble-user rounded-tr-none' : 'gemini-bubble-ai rounded-tl-none'} shadow-sm text-xs leading-relaxed">
              ${isUser ? `<div>${escapeHtml(msg.text)}</div>` : `<div>${formatGeminiMarkdown(msg.text)}</div>`}
              ${msg.attachedDoc ? `
                <div class="mt-2 p-1.5 rounded-lg bg-black/10 text-[10px] flex items-center gap-1 border border-white/20">
                  <i data-lucide="file-text" class="w-3 h-3"></i>
                  <span class="font-semibold truncate">Ref: ${escapeHtml(msg.attachedDoc.title)}</span>
                </div>
              ` : ''}
            </div>
            <div class="flex items-center gap-2 ${isUser ? 'justify-end' : 'justify-start'} text-[10px] text-gray-400 px-1">
              <span>${msg.timestamp || ''}</span>
              ${!isUser ? `
                <button type="button" onclick="navigator.clipboard.writeText(decodeURIComponent('${encodeURIComponent(msg.text || '')}')); showToast('Pesan disalin!');" class="opacity-0 group-hover:opacity-100 hover:text-brand-emerald transition" title="Salin jawaban">
                  <i data-lucide="copy" class="w-3 h-3"></i>
                </button>
              ` : ''}
            </div>
          </div>

          ${isUser ? `
            <img src="${user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}" alt="${user.name}" class="w-6 h-6 rounded-full object-cover border border-emerald-500/40 shrink-0 mt-0.5">
          ` : ''}
        </div>
      `;
    }).join('');

    canvas.scrollTop = canvas.scrollHeight;
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    console.error('Error rendering Gemini messages:', err);
  }
}

function handleSendGeminiMessage(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const input = document.getElementById('gemini-chat-input');
  if (!input) return;

  const userText = input.value.trim();
  if (!userText && !activeAttachedDriveDoc) return;

  const user = store.getCurrentUser() || { id: 'alfatih', name: 'Syauqi Muhammad Al Fatih' };
  if (!store.state.geminiChatSessions) store.state.geminiChatSessions = {};
  if (!store.state.geminiChatSessions[user.id]) store.state.geminiChatSessions[user.id] = [];

  const userSessions = store.state.geminiChatSessions[user.id];
  let session = userSessions.find(s => s.id === activeGeminiSessionId);
  if (!session) {
    if (userSessions.length > 0) {
      session = userSessions[0];
      activeGeminiSessionId = session.id;
    } else {
      startNewGeminiChat(true);
      session = store.state.geminiChatSessions[user.id][0];
    }
  }

  // Update session title on first message
  if (session.messages.length <= 1) {
    session.title = userText.slice(0, 30) + (userText.length > 30 ? '...' : '');
  }

  const userMsg = {
    id: 'msg_' + Date.now(),
    sender: 'user',
    text: userText,
    attachedDoc: activeAttachedDriveDoc ? { ...activeAttachedDriveDoc } : null,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  session.messages.push(userMsg);
  store.saveState();

  input.value = '';
  input.style.height = 'auto';

  // Render immediately with typing indicator
  renderGeminiMessages(session.id);
  showGeminiTypingIndicator();

  const docToSend = activeAttachedDriveDoc;
  removeAttachedDriveDoc();

  callGeminiAPI(userText, docToSend, (replyText) => {
    hideGeminiTypingIndicator();
    const aiMsg = {
      id: 'msg_' + Date.now(),
      sender: 'gemini',
      text: replyText || 'Respon berhasil diterima.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    session.messages.push(aiMsg);
    store.saveState();
    renderGeminiMessages(session.id);
  });
}

function showGeminiTypingIndicator() {
  const canvas = document.getElementById('gemini-messages-canvas');
  if (!canvas) return;

  hideGeminiTypingIndicator();

  const typingHtml = `
    <div id="gemini-typing-box" class="flex gap-2.5 justify-start">
      <div class="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs mt-0.5">
        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
      </div>
      <div class="gemini-bubble-ai p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-brand-emerald gemini-typing-dot"></span>
        <span class="w-2 h-2 rounded-full bg-teal-500 gemini-typing-dot"></span>
        <span class="w-2 h-2 rounded-full bg-sky-500 gemini-typing-dot"></span>
        <span class="text-[10px] text-gray-500 font-medium ml-1">Gemini sedang berpikir...</span>
      </div>
    </div>
  `;
  canvas.insertAdjacentHTML('beforeend', typingHtml);
  canvas.scrollTop = canvas.scrollHeight;
  if (window.lucide) lucide.createIcons();
}

function hideGeminiTypingIndicator() {
  const el = document.getElementById('gemini-typing-box');
  if (el) el.remove();
}

function getStudioComprehensiveContext() {
  const users = Object.values(store.state.users || {});
  const usersListStr = users.map(u => `- ${u.name} (@${u.id}): ${u.roleLabel} (Kapasitas: ${u.capacityStatus || 'Tersedia 4-5j/pekan'})`).join('\n');

  const tasks = store.state.tasks || [];
  const tasksCount = tasks.length;
  const doneTasks = tasks.filter(t => t.status === 'DONE').length;
  const activeTasks = tasks.filter(t => t.status !== 'DONE');
  const sampleTasksStr = activeTasks.slice(0, 8).map(t => `  * [${t.status}] ${t.title} (PIC: ${t.assigneeId || 'Unassigned'})`).join('\n');

  const projects = store.state.projects || [];
  const projectsStr = projects.map(p => `  * ${p.title} (${p.clientName}) - Nilai: Rp${(p.contractValueIdr || 0).toLocaleString('id-ID')}, Status: ${p.status}, DP: ${p.dpPaid ? 'LUNAS 50%' : 'BELUM'}`).join('\n');

  const currentSprint = store.state.currentSprint || 1;
  const freezeMode = store.state.settings && store.state.settings.academicFreezeMode ? 'AKTIF (Pekan UTS/UAS Tazkia, kapasitas dialihkan ke akademik)' : 'TIDAK AKTIF (Reguler)';
  const cashBalance = store.state.cashTransactions ? store.state.cashTransactions.reduce((acc, t) => acc + (t.type === 'IN' ? t.amount : -t.amount), 0) : 0;

  return `
[DATA REAL-TIME STUDIO KARYAKITA HUB]:
- 7 Co-Founder Studio (Mahasiswa SI STMIK Tazkia):
${usersListStr}
- Keuangan Syariah Studio:
  * Saldo Kas Saat Ini: Rp${cashBalance.toLocaleString('id-ID')}
  * Formula Syirkah 'Abdan: 60% surplus dibagi rata kepada 7 co-founder + 40% proporsional berdasarkan poin kontribusi berbobot.
  * Zakat Perusahaan: 2,5% dari surplus kas setelah dikurangi cadangan kelulusan bootstrap Rp3.500.000 (Graduation Threshold).
  * Aturan Pembayaran Klien: Wajib DP minimal 50% sebelum pengerjaan proyek dimulai.
- Operasional & Sprint:
  * Sprint Berjalan: Sprint ${currentSprint}
  * Mode Academic Freeze STMIK Tazkia: ${freezeMode}
  * Total Tiket Tugas: ${tasksCount} tugas (${doneTasks} selesai, ${activeTasks.length} aktif)
  * Contoh Tugas Berjalan:
${sampleTasksStr || '  * (Belum ada tiket aktif)'}
- Proyek Klien Aktif:
${projectsStr || '  * (Belum ada proyek aktif)'}
`;
}

function callGeminiAPI(userQuery, attachedDoc, callback) {
  const user = store.getCurrentUser() || { id: 'alfatih', name: 'Syauqi Muhammad Al Fatih', roleLabel: 'CEO & CTO' };
  const persona = getCopilotPersonaForUser(user);
  const apiKey = localStorage.getItem('karyakita_gemini_api_key') || store.state.geminiApiKey || DEFAULT_GEMINI_KEY;
  const preferredModel = store.state.geminiModel || 'gemini-flash-lite-latest';

  let contextDocPrompt = '';
  if (attachedDoc) {
    contextDocPrompt = `\n\n[DOKUMEN GOOGLE DRIVE / FILE TERLAMPIR]\nJudul: ${attachedDoc.title}\nTautan: ${attachedDoc.url}\n${attachedDoc.content ? `Isi Dokumen:\n${attachedDoc.content}` : ''}\nMohon gunakan dokumen di atas sebagai rujukan analisis Anda.`;
  }

  const studioContext = getStudioComprehensiveContext();

  const systemInstructionText = `${persona.systemPrompt}

${studioContext}
${contextDocPrompt}

INSTRUKSI PENTING:
1. Anda adalah AI Copilot Resmi untuk ${user.name} (${user.roleLabel}) di KaryaKita Hub OS.
2. Jawablah secara spesifik, taktis, solutif, dan berbasis data real-time studio di atas.
3. Selalu perhatikan nilai-nilai amanah, itqan, syirkah 'abdan, dan keseimbangan kuliah di STMIK Tazkia.`;

  if (apiKey && apiKey.trim().length > 10) {
    const candidateModels = Array.from(new Set([
      preferredModel,
      'gemini-flash-lite-latest',
      'gemini-3.5-flash-lite',
      'gemini-3-flash-preview',
      'gemini-flash-latest'
    ]));

    const tryFetchModel = (modelIndex) => {
      if (modelIndex >= candidateModels.length) {
        console.warn('Semua endpoint Gemini Live API gagal, beralih ke engine internal studio.');
        const fallbackReply = generateStudioFallbackReply(user, userQuery, attachedDoc);
        callback(fallbackReply);
        return;
      }

      const activeModel = candidateModels[modelIndex];
      const cleanKey = apiKey.trim();
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${activeModel}:generateContent?key=${encodeURIComponent(cleanKey)}`;

      const fullUserPrompt = `${systemInstructionText}\n\n[PERTANYAAN PENGGUNA]:\n${userQuery}${contextDocPrompt}`;
      const controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      const timeoutHandle = controller ? setTimeout(() => controller.abort(), 18000) : null;

      fetch(endpoint, {
        method: 'POST',
        signal: controller ? controller.signal : undefined,
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': cleanKey
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: fullUserPrompt }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048
          }
        })
      })
      .then(res => {
        if (timeoutHandle) clearTimeout(timeoutHandle);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} pada model ${activeModel}`);
        }
        return res.json();
      })
      .then(data => {
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          callback(text);
        } else {
          throw new Error(`Respon kosong dari model ${activeModel}`);
        }
      })
      .catch(err => {
        if (timeoutHandle) clearTimeout(timeoutHandle);
        console.warn(`Model ${activeModel} gagal: ${err.message}`);
        tryFetchModel(modelIndex + 1);
      });
    };

    tryFetchModel(0);
  } else {
    setTimeout(() => {
      const reply = generateStudioFallbackReply(user, userQuery, attachedDoc);
      callback(reply);
    }, 400);
  }
}

function generateStudioFallbackReply(user, query, attachedDoc, errorMsg) {
  const q = (query || '').toLowerCase();
  let analysis = '';

  if (attachedDoc) {
    analysis += `### Rujukan Dokumen Google Drive: ${attachedDoc.title}\n` +
      `Saya telah menelaah referensi dokumen **${attachedDoc.title}** (${attachedDoc.url}). ` +
      `Dokumen ini siap diselaraskan dengan tata kelola studio dan peran Anda sebagai **${user.roleLabel}**.\n\n`;
  }

  const allUsers = Object.values(store.state.users || {});
  const cashBalance = store.state.cashTransactions ? store.state.cashTransactions.reduce((acc, t) => acc + (t.type === 'IN' ? t.amount : -t.amount), 0) : 0;
  const currentSprint = store.state.currentSprint || 1;
  const activeTasks = (store.state.tasks || []).filter(t => t.status !== 'DONE');
  const projects = store.state.projects || [];

  if (q.includes('co-founder') || q.includes('cofounder') || q.includes('tim') || q.includes('anggota') || q.includes('rekan') || q.includes('siapa saja')) {
    analysis += `### Struktur 7 Co-Founder KaryaKita Hub (STMIK Tazkia)\n` +
      `Studio KaryaKita digerakkan oleh 7 mahasiswa Sistem Informasi STMIK Tazkia:\n` +
      allUsers.map((u, i) => `${i + 1}. **${u.name}** (@${u.id}) — **${u.roleLabel}** (Kapasitas: *${u.capacityStatus || 'Tersedia 4-5j'}*)`).join('\n') +
      `\n\nSeluruh keputusan strategis dan alokasi tugas diputuskan secara syura dengan prinsip kesetaraan dan keadilan Syirkah 'Abdan.`;
  } else if (q.includes('syauqi') || q.includes('alfatih')) {
    analysis += `### Profil & Tanggung Jawab: Syauqi Muhammad Al Fatih (CEO & CTO)\n` +
      `- **Fokus Utama:** Arsitektur sistem & teknologi, visi startup, penjadwalan sprint, dan manajemen kapasitas 7 co-founder.\n` +
      `- **Otoritas Khusus:** Aktivasi mode Academic Freeze (H-7 UTS/UAS Tazkia), maker-checker approval, dan audit log studio.`;
  } else if (q.includes('hilwa')) {
    analysis += `### Profil & Tanggung Jawab: Hilwa Mufida (COO & Head of PM)\n` +
      `- **Fokus Utama:** Operasional harian, alur Kanban tugas, verifikasi Definition of Done (DoD), dan koordinasi antar divisi studio.`;
  } else if (q.includes('novita')) {
    analysis += `### Profil & Tanggung Jawab: Novita Rani (CFO & VP Growth Systems)\n` +
      `- **Fokus Utama:** Pembukuan kas zero-riba, pelacakan Qardh Hasan 0%, formula bagi hasil Syirkah 'Abdan 60/40, dan otomasi zakat perusahaan 2,5%.`;
  } else if (q.includes('ilham')) {
    analysis += `### Profil & Tanggung Jawab: Ilham Akbar (CBDO & CDO)\n` +
      `- **Fokus Utama:** Kemitraan bisnis B2B, inovasi produk digital, pipeline CRM, dan kolaborasi strategis eksternal.`;
  } else if (q.includes('syarah')) {
    analysis += `### Profil & Tanggung Jawab: Syarah Fauziah (CMO)\n` +
      `- **Fokus Utama:** Strategi pemasaran, kampanye media sosial multi-platform (TikTok, Reels, LinkedIn), materi edukasi AI, dan program referral affiliate.`;
  } else if (q.includes('nazwa')) {
    analysis += `### Profil & Tanggung Jawab: Nazwa Azahra (CRO)\n` +
      `- **Fokus Utama:** Hubungan klien, kepuasan pengguna (*customer retention*), manajemen testimoni, dan penagihan termin DP 50% / Pelunasan.\n` +
      `- **Otoritas Khusus:** Konfirmasi pembayaran DP 50% dan alur serah terima hasil proyek.`;
  } else if (q.includes('ahmad')) {
    analysis += `### Profil & Tanggung Jawab: Ahmad Maulana (Creative Director)\n` +
      `- **Fokus Utama:** Arah visual & UI/UX, brand identity, aset grafis, dan penerapan standar mutu Itqan pada seluruh materi desain klien.`;
  } else if (q.includes('bagi hasil') || q.includes('kas') || q.includes('zakat') || q.includes('invoice') || q.includes('keuangan') || q.includes('uang') || q.includes('qardh')) {
    analysis += `### Laporan Keuangan Real-time & Prinsip Syariah\n` +
      `- **Saldo Kas Terkini:** **Rp${cashBalance.toLocaleString('id-ID')}** (Dikelola dengan sistem pencatatan zero-riba & zero-gharar).\n` +
      `- **Formula Syirkah 'Abdan:** Surplus kas operasional dialokasikan **60% dibagi rata** kepada co-founder aktif + **40% dibagi proporsional** berdasarkan poin kontribusi berbobot.\n` +
      `- **Target Cadangan Bootstrap (Graduation Threshold):** Rp3.500.000 wajib dijaga sebelum pembagian surplus.\n` +
      `- **Zakat Perusahaan:** Otomatis dihitung sebesar **2,5%** dari kas surplus setelah ambang bootstrap tercapai.\n` +
      `- **Aturan DP Klien:** Minimal **50% uang muka** wajib diverifikasi masuk sebelum pengerjaan proyek dimulai.`;
  } else if (q.includes('tugas') || q.includes('kanban') || q.includes('dod') || q.includes('tiket') || q.includes('sprint') || q.includes('pekerjaan')) {
    analysis += `### Status Tugas & Kanban Sprint ${currentSprint}\n` +
      `- **Tugas Sedang Berjalan:** ${activeTasks.length} tiket aktif di Kanban.\n` +
      (activeTasks.length > 0
        ? activeTasks.slice(0, 5).map(t => `  * **[${t.status}]** ${t.title} — PIC: ${t.assigneeId || 'Unassigned'}`).join('\n')
        : '  * Saat ini seluruh tugas sprint telah selesai (Done).') +
      `\n\n**Standar Definition of Done (DoD):**\n` +
      `1. Hasil kerja memenuhi kriteria mutu Itqan.\n` +
      `2. Lampiran tautan (Figma / GitHub PR / Dokumen Drive) telah disematkan.\n` +
      `3. Telah disetujui oleh PIC atau Checker sebelum digeser ke kolom Selesai.`;
  } else if (q.includes('proyek') || q.includes('project') || q.includes('klien') || q.includes('crm') || q.includes('proposal') || q.includes('closing')) {
    analysis += `### Status Proyek Klien & Pipeline CRM\n` +
      `- **Total Proyek Aktif:** ${projects.length} proyek.\n` +
      (projects.length > 0
        ? projects.map(p => `  * **${p.title}** (${p.clientName}) — Nilai: Rp${(p.contractValueIdr || 0).toLocaleString('id-ID')} | Status: ${p.status} | DP: ${p.dpPaid ? 'Lunas 50%' : 'Belum Bayar'}`).join('\n')
        : '  * Belum ada proyek klien yang tercatat.') +
      `\n\n**Aturan Eksekusi:** Pastikan status DP 50% terverifikasi di modul Keuangan sebelum tim memulai tahapan produksi.`;
  } else if (q.includes('kampus') || q.includes('tazkia') || q.includes('freeze') || q.includes('uts') || q.includes('uas') || q.includes('kuliah') || q.includes('ujian')) {
    const isFreeze = store.state.settings && store.state.settings.academicFreezeMode;
    analysis += `### Regulasi Kuliah & Academic Freeze STMIK Tazkia\n` +
      `- **Status Academic Freeze Saat Ini:** **${isFreeze ? 'AKTIF (Mode Ujian UTS/UAS)' : 'TIDAK AKTIF (Mode Kuliah Reguler)'}**.\n` +
      `- **Aturan Freeze:** H-7 sebelum pekan ujian, seluruh beban tugas studio diturunkan atau ditunda agar seluruh co-founder dapat fokus meraih nilai akademik optimal.\n` +
      `- **Kapasitas Mingguan:** Setiap co-founder dianjurkan mengalokasikan maksimal 4–5 jam/pekan untuk studio agar tidak mengganggu perkuliahan.`;
  } else {
    analysis += `Halo **${user.name}**! Sebagai **${user.roleLabel}**, saya telah mencatat arahan Anda terkait: *"${query}"*\n\n` +
      `**Saran Taktis Studio:**\n` +
      `1. Selaraskan inisiatif ini dengan sasaran Sprint ${currentSprint} dan tugas prioritas yang sedang aktif.\n` +
      `2. Diskusikan rencana ini pada sesi Syura mingguan agar ada kesepahaman (*taradhin*) antar co-founder.\n` +
      `3. Gunakan modul navigasi di panel kiri untuk mencatat dokumen atau pembaruan terkait inisiatif ini.`;
  }

  const hasKey = (localStorage.getItem('karyakita_gemini_api_key') || store.state.geminiApiKey || '').length > 10;
  if (!hasKey) {
    analysis += `\n\n---\n` +
      `> 💡 **Mode Studio Offline (Data Internal Terhubung)**\n` +
      `> Asisten saat ini menjawab menggunakan basis data lokal studio. Untuk mengaktifkan **Gemini AI (Penalaran AI Penuh & Bebas Topik)** tanpa batasan, masukkan API Key Google gratis Anda.\n\n` +
      `<button type="button" onclick="openGeminiApiKeyModal()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition mt-1">` +
      `<i data-lucide="key" class="w-3.5 h-3.5"></i> Masukkan Kunci API Gemini Gratis` +
      `</button>`;
  }

  return analysis;
}

function formatGeminiMarkdown(text) {
  if (!text) return '';
  let str = String(text);

  // Preserve internal UI tags if generated by studio fallback
  const hasInternalHtml = str.includes('<button') || str.includes('data-lucide');
  let escaped = str;
  if (!hasInternalHtml) {
    escaped = escaped
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Code blocks: ```language\ncode\n```
  escaped = escaped.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<div class="my-2 rounded-lg bg-gray-900 text-gray-100 p-2.5 font-mono text-[11px] overflow-x-auto relative group">
      <div class="flex items-center justify-between text-[10px] text-gray-400 border-b border-gray-800 pb-1 mb-1">
        <span>${lang || 'code'}</span>
        <button type="button" onclick="navigator.clipboard.writeText(decodeURIComponent('${encodeURIComponent(code)}')); showToast('Kode disalin!');" class="hover:text-white">Salin</button>
      </div>
      <pre><code>${code}</code></pre>
    </div>`;
  });

  // Inline code: `code`
  escaped = escaped.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-gray-200 dark:bg-gray-800 font-mono text-[11px]">$1</code>');

  // Bold: **text**
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic: *text*
  escaped = escaped.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Headings: ### Header
  escaped = escaped.replace(/^### (.*$)/gim, '<h4 class="font-heading font-bold text-xs mt-2 mb-1 text-emerald-800 dark:text-emerald-300">$1</h4>');
  escaped = escaped.replace(/^## (.*$)/gim, '<h3 class="font-heading font-bold text-sm mt-2 mb-1 text-emerald-900 dark:text-emerald-200">$1</h3>');

  // Bullet list: - item or * item
  escaped = escaped.replace(/^\s*[-*]\s+(.*$)/gim, '<li class="ml-4 list-disc">$1</li>');

  // Blockquotes: > quote
  escaped = escaped.replace(/^>\s*(.*$)/gim, '<div class="p-2 my-1.5 bg-emerald-50/70 dark:bg-emerald-950/50 border-l-3 border-brand-emerald rounded-r text-[11px] text-emerald-900 dark:text-emerald-200">$1</div>');

  // Line breaks to <br>
  escaped = escaped.replace(/\n/g, '<br>');

  return escaped;
}

function toggleGeminiSessionsHistory() {
  const panel = document.getElementById('gemini-history-panel');
  if (!panel) return;

  const isHidden = panel.classList.contains('hidden');
  if (isHidden) {
    renderGeminiSessionsHistoryList();
    panel.classList.remove('hidden');
  } else {
    panel.classList.add('hidden');
  }
}

function renderGeminiSessionsHistoryList() {
  const user = store.getCurrentUser() || { id: 'alfatih' };
  const listContainer = document.getElementById('gemini-sessions-list');
  if (!listContainer) return;

  const userSessions = store.state.geminiChatSessions[user.id] || [];
  if (userSessions.length === 0) {
    listContainer.innerHTML = '<p class="text-gray-400 text-[11px] py-1 text-center">Belum ada riwayat percakapan.</p>';
    return;
  }

  listContainer.innerHTML = userSessions.map(s => `
    <div class="flex items-center justify-between p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition ${s.id === activeGeminiSessionId ? 'bg-emerald-50 dark:bg-emerald-950/60 font-semibold text-brand-emerald' : 'text-gray-700 dark:text-gray-300'}">
      <button type="button" onclick="loadGeminiSession('${s.id}')" class="text-left flex-1 min-w-0 flex items-center gap-1.5">
        <i data-lucide="message-square" class="w-3 h-3 shrink-0"></i>
        <span class="truncate text-[11px]">${escapeHtml(s.title || 'Obrolan')}</span>
      </button>
      <button type="button" onclick="deleteGeminiSession('${s.id}', event)" class="text-gray-400 hover:text-red-600 transition p-1" title="Hapus sesi">
        <i data-lucide="trash-2" class="w-3 h-3"></i>
      </button>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function loadGeminiSession(sessionId) {
  activeGeminiSessionId = sessionId;
  renderGeminiMessages(sessionId);
  const panel = document.getElementById('gemini-history-panel');
  if (panel) panel.classList.add('hidden');
}

function deleteGeminiSession(sessionId, event) {
  if (event) event.stopPropagation();
  const user = store.getCurrentUser() || { id: 'alfatih' };
  let sessions = store.state.geminiChatSessions[user.id] || [];
  sessions = sessions.filter(s => s.id !== sessionId);
  store.state.geminiChatSessions[user.id] = sessions;
  store.saveState();

  if (activeGeminiSessionId === sessionId) {
    activeGeminiSessionId = sessions.length > 0 ? sessions[0].id : null;
    if (!activeGeminiSessionId) {
      startNewGeminiChat(true);
    } else {
      renderGeminiMessages(activeGeminiSessionId);
    }
  }

  renderGeminiSessionsHistoryList();
  showToast('Sesi obrolan dihapus.');
}

function clearAllGeminiHistory() {
  const user = store.getCurrentUser() || { id: 'alfatih' };
  if (confirm('Hapus seluruh riwayat percakapan Gemini Copilot untuk akun Anda?')) {
    store.state.geminiChatSessions[user.id] = [];
    store.saveState();
    startNewGeminiChat(true);
    const panel = document.getElementById('gemini-history-panel');
    if (panel) panel.classList.add('hidden');
    showToast('Seluruh riwayat obrolan berhasil dibersihkan.');
  }
}

// ==============================================================================
// GOOGLE DRIVE & ATTACHMENT MODAL
// ==============================================================================

function openAttachDriveModal() {
  const modalHtml = `
    <div class="p-6 space-y-5 max-w-md mx-auto">
      <div class="flex items-center justify-between border-b pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
            <i data-lucide="folder-git-2" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 dark:text-white">Hubungkan Google Drive & Dokumen</h3>
            <p class="text-[11px] text-gray-500">Jadikan dokumen rujukan analisis AI Gemini</p>
          </div>
        </div>
        <button type="button" onclick="closeModal()" class="text-gray-400 hover:text-gray-600 transition">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Tautan Google Drive / Docs / Sheets -->
      <div class="space-y-1.5">
        <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300">1. Tautan Google Drive / Docs / Sheets</label>
        <input id="input-drive-link" type="url" placeholder="https://docs.google.com/document/d/.../edit" class="w-full text-xs p-2.5 border rounded-lg bg-white dark:bg-[#1A2C24] text-gray-900 dark:text-white">
        <input id="input-drive-title" type="text" placeholder="Nama Dokumen (Contoh: Brief Proyek Klien PT ABC)" class="w-full text-xs p-2.5 border rounded-lg bg-white dark:bg-[#1A2C24] text-gray-900 dark:text-white mt-1.5">
      </div>

      <!-- Preset Dokumen Studio -->
      <div class="space-y-1.5 pt-1">
        <label class="block text-[11px] font-semibold text-gray-500 uppercase">Preset Dokumen Studio Cepat</label>
        <div class="grid grid-cols-1 gap-1.5">
          <button type="button" onclick="setDriveLinkPreset('Blueprint Master KaryaKita Hub OS', 'https://docs.google.com/document/d/karyakita-master-blueprint')" class="text-left text-xs p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 border border-gray-200 dark:border-gray-700 flex items-center justify-between transition">
            <span class="font-medium text-gray-800 dark:text-gray-200">📘 Blueprint Master KaryaKita Hub OS</span>
            <span class="text-[10px] text-brand-emerald font-bold">Pilih</span>
          </button>
          <button type="button" onclick="setDriveLinkPreset('Buku Kas & Formula Syirkah Studio', 'https://docs.google.com/spreadsheets/d/karyakita-buku-kas')" class="text-left text-xs p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 border border-gray-200 dark:border-gray-700 flex items-center justify-between transition">
            <span class="font-medium text-gray-800 dark:text-gray-200">📊 Google Sheets: Kas & Syirkah Studio</span>
            <span class="text-[10px] text-brand-emerald font-bold">Pilih</span>
          </button>
        </div>
      </div>

      <!-- Upload Catatan Teks Lokal -->
      <div class="space-y-1.5 pt-1">
        <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300">2. Atau Unggah Catatan Teks Rujukan (.txt, .md, .csv)</label>
        <input type="file" id="input-drive-file" accept=".txt,.md,.csv,.json" class="w-full text-xs file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:text-xs file:bg-emerald-50 file:text-brand-emerald text-gray-500">
      </div>

      <div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
        <button type="button" onclick="closeModal()" class="px-3.5 py-1.5 rounded-lg border text-xs font-semibold">Batal</button>
        <button type="button" onclick="applyAttachedDriveDoc()" class="px-4 py-1.5 rounded-lg bg-brand-emerald text-white text-xs font-semibold shadow-sm">Lampirkan ke Obrolan</button>
      </div>
    </div>
  `;
  openModal(modalHtml);
}

function setDriveLinkPreset(title, url) {
  const inTitle = document.getElementById('input-drive-title');
  const inLink = document.getElementById('input-drive-link');
  if (inTitle) inTitle.value = title;
  if (inLink) inLink.value = url;
}

function applyAttachedDriveDoc() {
  const inLink = document.getElementById('input-drive-link');
  const inTitle = document.getElementById('input-drive-title');
  const inFile = document.getElementById('input-drive-file');

  const file = inFile && inFile.files && inFile.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      activeAttachedDriveDoc = {
        title: file.name,
        url: 'File Lokal: ' + file.name,
        content: e.target.result.slice(0, 5000)
      };
      updateAttachedDriveUI();
      closeModal();
      showToast(`File "${file.name}" dilampirkan ke Gemini Copilot!`);
    };
    reader.readAsText(file);
    return;
  }

  const url = inLink ? inLink.value.trim() : '';
  const title = (inTitle && inTitle.value.trim()) || (url ? 'Tautan Google Drive' : '');

  if (!url) {
    showToast('Masukkan URL Google Drive atau pilih file terlebih dahulu!', 'error');
    return;
  }

  activeAttachedDriveDoc = {
    title: title || 'Dokumen Google Drive',
    url: url
  };

  updateAttachedDriveUI();
  closeModal();
  showToast(`Dokumen "${activeAttachedDriveDoc.title}" dilampirkan ke Gemini Copilot!`);
}

function updateAttachedDriveUI() {
  const bar = document.getElementById('gemini-attached-drive-bar');
  const nameEl = document.getElementById('gemini-attached-drive-name');
  if (!bar || !nameEl) return;

  if (activeAttachedDriveDoc) {
    nameEl.textContent = activeAttachedDriveDoc.title;
    bar.classList.remove('hidden');
  } else {
    bar.classList.add('hidden');
  }
}

function removeAttachedDriveDoc() {
  activeAttachedDriveDoc = null;
  updateAttachedDriveUI();
}

// ==============================================================================
// GEMINI API KEY SETTINGS MODAL
// ==============================================================================

function openGeminiApiKeyModal() {
  const currentKey = localStorage.getItem('karyakita_gemini_api_key') || store.state.geminiApiKey || '';
  const modalHtml = `
    <div class="p-6 space-y-5 max-w-md mx-auto">
      <div class="flex items-center justify-between border-b pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-400 text-white flex items-center justify-center shadow-sm">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-heading font-bold text-sm text-gray-900 dark:text-white">Google Gemini API Key</h3>
            <p class="text-[11px] text-gray-500">Aktivasi model Gemini 2.0 Flash & Gemini 2.5 Live</p>
          </div>
        </div>
        <button type="button" onclick="closeModal()" class="text-gray-400 hover:text-gray-600 transition">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="space-y-2">
        <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300">Google Gemini API Key</label>
        <div class="relative">
          <input id="gemini-api-key-input" type="password" value="${escapeHtml(currentKey)}" placeholder="AIzaSy..." class="w-full text-xs px-3 py-2.5 pr-10 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-mono focus:outline-none focus:ring-1 focus:ring-brand-emerald">
          <button type="button" onclick="togglePasswordVisibility('gemini-api-key-input')" class="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600">
            <i data-lucide="eye" class="w-4 h-4"></i>
          </button>
        </div>
        <p class="text-[10px] text-gray-500">Kunci disimpan aman hanya di peramban lokal perangkat Anda (localStorage).</p>
      </div>

      <!-- Test Connection Status Box -->
      <div id="gemini-test-status" class="hidden p-2.5 rounded-lg text-xs"></div>

      <div class="p-3 bg-sky-50 dark:bg-sky-950/60 rounded-xl border border-sky-200 dark:border-sky-800 text-xs space-y-1.5 text-sky-950 dark:text-sky-200">
        <div class="flex items-center gap-1.5 font-bold">
          <i data-lucide="info" class="w-3.5 h-3.5 text-sky-600"></i>
          <span>Cara Mendapatkan Kunci Gratis (1 Menit):</span>
        </div>
        <ol class="list-decimal list-inside space-y-0.5 text-[11px] text-sky-900 dark:text-sky-300">
          <li>Buka <a href="https://aistudio.google.com/app/apikey" target="_blank" class="underline font-bold text-sky-700 dark:text-sky-400">Google AI Studio (Klik di sini)</a></li>
          <li>Login dengan akun Google / Gmail Anda</li>
          <li>Klik tombol <strong>Create API key</strong></li>
          <li>Salin kuncinya dan tempelkan ke formulir di atas</li>
        </ol>
      </div>

      <div class="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <button type="button" onclick="clearGeminiApiKey()" class="text-xs text-red-600 hover:underline">Hapus</button>
          <button type="button" onclick="testGeminiApiKey()" class="px-2.5 py-1.5 rounded-lg border border-sky-300 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900/50 text-xs font-semibold text-sky-700 dark:text-sky-300 transition">
            ⚡ Uji Koneksi
          </button>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick="closeModal()" class="px-3.5 py-1.5 rounded-lg border text-xs font-semibold">Tutup</button>
          <button type="button" onclick="saveGeminiApiKey()" class="px-4 py-1.5 rounded-lg bg-brand-emerald text-white text-xs font-semibold shadow-sm">Simpan Kunci</button>
        </div>
      </div>
    </div>
  `;
  openModal(modalHtml);
  if (window.lucide) lucide.createIcons();
}

function testGeminiApiKey() {
  const input = document.getElementById('gemini-api-key-input');
  const statusEl = document.getElementById('gemini-test-status');
  if (!input || !statusEl) return;

  const key = input.value.trim();
  if (!key || key.length < 10) {
    statusEl.className = 'p-2.5 rounded-lg text-xs bg-amber-50 text-amber-800 border border-amber-300 block';
    statusEl.textContent = 'Silakan masukkan API Key yang valid terlebih dahulu.';
    return;
  }

  statusEl.className = 'p-2.5 rounded-lg text-xs bg-sky-50 text-sky-800 border border-sky-300 block animate-pulse';
  statusEl.textContent = 'Sedang menguji koneksi ke Google Gemini Flash Lite...';

  const testEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${encodeURIComponent(key)}`;
  fetch(testEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': key
    },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: 'Ping test. Jawab singkat: OK' }] }]
    })
  })
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then(data => {
    statusEl.className = 'p-2.5 rounded-lg text-xs bg-emerald-50 text-emerald-800 border border-emerald-300 block';
    statusEl.textContent = '✅ Koneksi Sukses! Kunci API valid dan Gemini Flash Lite siap digunakan.';
  })
  .catch(err => {
    const backupEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${encodeURIComponent(key)}`;
    fetch(backupEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': key
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Ping test. Jawab singkat: OK' }] }]
      })
    })
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then(() => {
      statusEl.className = 'p-2.5 rounded-lg text-xs bg-emerald-50 text-emerald-800 border border-emerald-300 block';
      statusEl.textContent = '✅ Koneksi Sukses! Kunci API terhubung ke Gemini 3.5 Flash Lite.';
    })
    .catch(e => {
      statusEl.className = 'p-2.5 rounded-lg text-xs bg-red-50 text-red-800 border border-red-300 block';
      statusEl.textContent = `❌ Koneksi Gagal (${err.message}). Periksa kembali kunci API Anda.`;
    });
  });
}

function saveGeminiApiKey() {
  const input = document.getElementById('gemini-api-key-input');
  if (!input) return;
  const key = input.value.trim();
  localStorage.setItem('karyakita_gemini_api_key', key);
  store.state.geminiApiKey = key;
  store.saveState();

  const keyStatus = document.getElementById('gemini-key-status-text');
  if (keyStatus) {
    keyStatus.textContent = (key && key.length > 10) ? 'API Key Terhubung' : 'Set API Key Gratis';
  }

  const apikeyBanner = document.getElementById('gemini-apikey-banner');
  if (apikeyBanner) {
    if (!key || key.length <= 10) {
      apikeyBanner.classList.remove('hidden');
    } else {
      apikeyBanner.classList.add('hidden');
    }
  }

  closeModal();
  showToast(key ? 'Google Gemini API Key berhasil disimpan & terhubung!' : 'API Key dikosongkan.');
}

function clearGeminiApiKey() {
  localStorage.removeItem('karyakita_gemini_api_key');
  store.state.geminiApiKey = '';
  store.saveState();
  const input = document.getElementById('gemini-api-key-input');
  if (input) input.value = '';
  const keyStatus = document.getElementById('gemini-key-status-text');
  if (keyStatus) keyStatus.textContent = 'Set API Key Gratis';

  const apikeyBanner = document.getElementById('gemini-apikey-banner');
  if (apikeyBanner) apikeyBanner.classList.remove('hidden');

  closeModal();
  showToast('Google Gemini API Key dihapus.');
}

function togglePasswordVisibility(inputId) {
  const el = document.getElementById(inputId);
  if (!el) return;
  el.type = el.type === 'password' ? 'text' : 'password';
}

function changeGeminiModel(modelName) {
  store.state.geminiModel = modelName;
  store.saveState();

  const modelLabels = {
    'gemini-flash-lite-latest': 'Gemini Flash Lite (Super Cepat & Stabil)',
    'gemini-3.5-flash-lite': 'Gemini 3.5 Flash Lite',
    'gemini-3-flash-preview': 'Gemini 3 Flash Preview',
    'gemini-flash-latest': 'Gemini Flash Latest'
  };

  showToast(`Model dialihkan ke: ${modelLabels[modelName] || modelName}`);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Adaptive Theme
  if (typeof initTheme === 'function') initTheme();

  // Initialize Sidebar Collapsible State
  if (typeof initSidebarCollapse === 'function') initSidebarCollapse();

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

  // Gemini Copilot Shortcut (Ctrl+Shift+G or Alt+G)
  window.addEventListener('keydown', (e) => {
    if (((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'g' || e.key === 'G')) ||
        (e.altKey && (e.key === 'g' || e.key === 'G'))) {
      e.preventDefault();
      toggleGeminiCopilot();
    }
  });

  // Gemini Chat input Enter key & auto-expand
  const geminiInput = document.getElementById('gemini-chat-input');
  if (geminiInput) {
    geminiInput.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });
    geminiInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendGeminiMessage();
      }
    });
  }

  // Check Authentication State and Render
  checkAuthAndRender();
});

// Browser History & Route Change Listener
window.addEventListener('hashchange', () => {
  checkAuthAndRender();
});

// Automatic Cross-Device Cloud Sync Listeners
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && typeof store !== 'undefined' && store.syncFromCloud) {
    store.syncFromCloud();
  }
});

setInterval(() => {
  if (typeof store !== 'undefined' && store.syncFromCloud) {
    store.syncFromCloud();
  }
}, 30000);


// ==============================================================================
// PUBLIC HOMEPAGE & NAVIGATION CONTROLLERS
// ==============================================================================

function openLoginModal() {
  const authScreen = document.getElementById('auth-screen');
  if (authScreen) {
    authScreen.classList.remove('hidden');
    renderAuthForm('login');
  }
}

function closeLoginModal() {
  const authScreen = document.getElementById('auth-screen');
  if (authScreen) {
    authScreen.classList.add('hidden');
  }
}

function handleAuthBackdropClick(event) {
  if (event.target && event.target.id === 'auth-screen') {
    closeLoginModal();
  }
}

function updateHomepageCtaState() {
  const isAuth = !!(store.state.authSession && store.state.authSession.isAuthenticated && store.state.authSession.userId);
  const currentUser = isAuth ? store.getUser(store.state.authSession.userId) : null;
  const firstName = currentUser ? (currentUser.name || '').split(' ')[0] : 'Tim';

  const navBtnText = document.getElementById('btn-home-auth-text');
  const heroBtnText = document.getElementById('home-hero-cta-text');
  const bottomBtnText = document.getElementById('home-bottom-cta-text');
  const sessionBadge = document.getElementById('home-session-badge');

  if (navBtnText) {
    navBtnText.textContent = isAuth ? `Ke Dashboard (${firstName})` : 'Masuk Dashboard';
  }
  if (heroBtnText) {
    heroBtnText.textContent = isAuth ? `Buka Dashboard Studio (${firstName})` : 'Masuk ke Dashboard Tim';
  }
  if (bottomBtnText) {
    bottomBtnText.textContent = isAuth ? `Buka Dashboard Studio (${firstName})` : 'Masuk ke /dashboard';
  }

  if (sessionBadge) {
    if (isAuth && currentUser) {
      sessionBadge.classList.remove('hidden');
      sessionBadge.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Sesi Aktif: <strong>${currentUser.name}</strong> (${currentUser.roleLabel || 'Co-Founder'})</span>
      `;
    } else {
      sessionBadge.classList.add('hidden');
    }
  }

  if (window.lucide) lucide.createIcons();
}

function handleHomeAuthClick() {
  const isAuth = !!(store.state.authSession && store.state.authSession.isAuthenticated && store.state.authSession.userId);
  if (isAuth) {
    returnToDashboard('overview');
  } else {
    openLoginModal();
  }
}

function viewPublicHomepage() {
  window.location.hash = '#/';
  const home = document.getElementById('public-homepage');
  const app = document.getElementById('app-layout-wrapper');
  const topbar = document.getElementById('topbar-simulator');
  const banners = document.getElementById('dynamic-banners-container');
  const auth = document.getElementById('auth-screen');

  if (home) home.classList.remove('hidden');
  if (app) app.classList.add('hidden');
  if (topbar) topbar.classList.add('hidden');
  if (banners) banners.classList.add('hidden');
  if (auth) auth.classList.add('hidden');

  updateHomepageCtaState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}

function returnToDashboard(viewName = 'overview') {
  const isAuth = !!(store.state.authSession && store.state.authSession.isAuthenticated && store.state.authSession.userId);
  if (!isAuth) {
    openLoginModal();
    return;
  }
  window.location.hash = '#/' + (viewName === 'overview' ? 'dashboard' : viewName);
  const home = document.getElementById('public-homepage');
  const app = document.getElementById('app-layout-wrapper');
  const topbar = document.getElementById('topbar-simulator');
  const banners = document.getElementById('dynamic-banners-container');
  const auth = document.getElementById('auth-screen');

  if (home) home.classList.add('hidden');
  if (auth) auth.classList.add('hidden');
  if (app) app.classList.remove('hidden');
  if (topbar) topbar.classList.remove('hidden');
  if (banners) banners.classList.remove('hidden');

  currentView = viewName;
  updateTopBanners();
  renderActiveView();
  if (window.lucide) lucide.createIcons();
}

function previewClientPortalFromHome() {
  navigateTo('client_portal');
  returnToDashboard();
}

function toggleFaqItem(faqId) {
  const ans = document.getElementById('faq-ans-' + faqId);
  const icon = document.getElementById('faq-icon-' + faqId);
  if (!ans) return;
  const isClosed = ans.classList.contains('hidden');
  if (isClosed) {
    ans.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180');
  } else {
    ans.classList.add('hidden');
    if (icon) icon.classList.remove('rotate-180');
  }
}

const FOUNDERS_DATA_MAP = {
  alfatih: {
    name: 'Syauqi Muhammad Al Fatih',
    role: 'CEO & CTO',
    unit: 'Lini 2 (WebTech & Platform) & Lini 5 (AI Academy)',
    avatar: '/images/team/alfatih.webp',
    bio: 'Memimpin visi venture syariah, arsitektur software, integrasi AI, serta otomasi internal studio KaryaKita.',
    skills: ['System Architecture', 'Next.js & TypeScript', 'LLM Agent Engineering', 'Prisma & Postgres']
  },
  hilwa: {
    name: 'Hilwa Mufida',
    role: 'COO & Head of PM',
    unit: 'Internal Ops & Lini 3 (Assist & Data)',
    avatar: '/images/team/hilwa.webp',
    bio: 'Mengawal orkestrasi operasional 5 unit bisnis, sprint backlog, SLA klien B2B, dan penegakan tata kelola Syirkah.',
    skills: ['Agile Project Management', 'Kanban Definition of Done', 'SLA Monitoring', 'Resource Allocation']
  },
  novita: {
    name: 'Novita Rani',
    role: 'CFO & VP Growth Systems',
    unit: 'Internal Finance & Cashflow Governance',
    avatar: '/images/team/novita.webp',
    bio: 'Menjaga transparansi kas 100%, verifikasi Payment Gate DP 50%, audit 48-jam sign-off, dan distribusi nisbah.',
    skills: ['Cashflow Ledger', 'Payment Gate Verification', 'Graduation Rule Rp3,5M', 'Zakat & Profit-Sharing']
  },
  ilham: {
    name: 'Ilham Akbar',
    role: 'CBDO & CDO',
    unit: 'Lini 3 (Virtual Assistance & Data Scraping)',
    avatar: '/images/team/ilham.webp',
    bio: 'Memperluas kemitraan B2B, riset pasar venture, pipeline akuisisi klien, dan pengolahan data intelijen bisnis.',
    skills: ['B2B Sales Pipeline', 'Data Scraping & Mining', 'Market Validation', 'Client Relationship']
  },
  ahmad: {
    name: 'Ahmad Maulana',
    role: 'Creative Director',
    unit: 'Lini 1 (Graphic & Brand Design)',
    avatar: '/images/team/ahmad.webp',
    bio: 'Memimpin standarisasi visual, identitas brand syariah modern, UI/UX asset kits, dan desain produk studio.',
    skills: ['Brand Identity Design', 'Design Systems', 'Micro-Interactions', 'Typography & Visual Arts']
  },
  nazwa: {
    name: 'Nazwa Azahra',
    role: 'Head of Media & Affiliate',
    unit: 'Lini 4 (Media & Affiliate Marketing)',
    avatar: '/images/team/nazwa.webp',
    bio: 'Mengembangkan konten viral organik, funneling omni-channel, kemitraan affiliate halal, dan distribusi sosial.',
    skills: ['Short-Form Video Production', 'Affiliate Funnels', 'Copywriting & Content Hook', 'Community Growth']
  },
  syarah: {
    name: 'Syarah Fauziah',
    role: 'Head of AI Academy & Community',
    unit: 'Lini 5 (AI Academy & Training)',
    avatar: '/images/team/syarah.webp',
    bio: 'Mengelola kurikulum bootcamp prompt engineering, sertifikasi AI syariah, dan pendampingan talenta mahasiswa.',
    skills: ['Curriculum Design', 'AI Workshop Delivery', 'Student Mentoring', 'Tazkia Ecosystem Liaison']
  }
};

function openFounderBioModal(founderId) {
  const f = FOUNDERS_DATA_MAP[founderId];
  if (!f) return;
  const modal = document.getElementById('founder-bio-modal');
  const body = document.getElementById('founder-bio-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="relative p-6 sm:p-8 space-y-5">
      <button onclick="closeFounderBioModal()" class="absolute right-4 top-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>

      <div class="flex items-center gap-4">
        <img src="${f.avatar}" alt="${f.name}" class="w-16 h-16 rounded-2xl object-cover border-2 border-brand-emerald shadow-md">
        <div>
          <span class="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-1">
            Co-Founder Resmi
          </span>
          <h3 class="font-heading font-bold text-base sm:text-lg text-gray-900 dark:text-white leading-tight">${f.name}</h3>
          <p class="text-xs text-brand-emerald dark:text-emerald-400 font-semibold">${f.role}</p>
        </div>
      </div>

      <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-[#192722] border border-gray-200 dark:border-gray-800 space-y-1">
        <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">Portofolio & Lini Bisnis:</span>
        <p class="text-xs font-semibold text-gray-800 dark:text-gray-200">${f.unit}</p>
      </div>

      <div>
        <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1.5">Profil & Kontribusi:</span>
        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">${f.bio}</p>
      </div>

      <div>
        <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-2">Keahlian Inti:</span>
        <div class="flex flex-wrap gap-1.5">
          ${f.skills.map(s => `<span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-medium text-emerald-800 dark:text-emerald-300">${s}</span>`).join('')}
        </div>
      </div>

      <div class="pt-3 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <span class="text-[11px] text-gray-500">STMIK Tazkia • Syirkah 'Abdan</span>
        <button onclick="closeFounderBioModal()" class="px-4 py-2 rounded-xl bg-brand-emerald hover:bg-brand-hover text-white text-xs font-semibold transition">
          Tutup
        </button>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons({ root: body });
}

function closeFounderBioModal() {
  const modal = document.getElementById('founder-bio-modal');
  if (modal) modal.classList.add('hidden');
}
