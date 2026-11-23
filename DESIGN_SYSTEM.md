# KaryaKita Hub — Design System Specification
**Internal Venture Studio Operating System (7 Co-Founders • STMIK Tazkia)**
*Dokumen Acuan Tunggal Desain UI/UX (Single Source of Truth)*
*Versi: 1.0.0 • Standar: WCAG 2.1 AA Compliant • Modul: 13 Modul Terintegrasi*

---

## 1. Filosofi Desain & Prinsip Produk

KaryaKita Hub adalah *Internal Operating System* untuk 7 mahasiswa *co-founder* yang mengelola 5 unit bisnis secara *async-first* dengan alokasi waktu 3–5 jam/minggu per orang. Antarmuka wajib mematuhi 4 pilar utama:

1. **Async-First Scanability (< 90 Detik):** Informasi status proyek, tugas darurat, dan notifikasi wajib dapat dipindai sekilas tanpa *visual clutter*.
2. **Guardrail by Design:** Batasan tata kelola studio (wajib DP 50% sebelum pengerjaan, *Graduation Rule* kas Rp3,5 juta, pembagian *Syirkah 'Abdan*, dan *Academic Freeze Mode* H-7 UTS/UAS) dieksekusi secara visual melalui badge, tombol terkunci, dan banner peringatan.
3. **Harmoni Dual-Theme:** Menjaga kenyamanan mata saat begadang kuliah (*Deep Forest Slate Dark Mode*) dan kecerahan kontras tinggi saat jam kerja siang (*Clean Daylight Light Mode*).
4. **Hierarki Data Ketat:** Angka finansial, jam SLA, dan metrik KPI wajib stabil tanpa pergeseran tata letak (*zero layout shift*).

---

## 2. Color Tokens & Semantic Palettes (Dual-Theme)

Semua token warna didefinisikan sebagai CSS Custom Properties yang terintegrasi dengan utilitas Tailwind CSS dan shadcn/ui.

### 2.1 Core Brand & Canvas Tokens

| Token CSS | Light Mode (`:root`) | Dark Mode (`.dark`) | Kontras WCAG | Deskripsi & Peruntukan |
| :--- | :--- | :--- | :--- | :--- |
| `--primary` | `#0F513D` (Deep Emerald) | `#10B981` (Emerald-500) | > 7.2:1 (AAA) | Brand utama, Primary CTA, sidebar aktif, indikator terverifikasi |
| `--primary-hover` | `#166B51` | `#34D399` | > 6.0:1 (AA) | State hover tombol utama dan link interaktif |
| `--primary-foreground`| `#FFFFFF` | `#06281E` | > 8.5:1 (AAA) | Teks di atas warna primary |
| `--accent` | `#B45309` (Warm Amber) | `#F59E0B` (Amber-500) | > 4.8:1 (AA) | Aksen studio, penanda tenggat, mode *bootstrapping* |
| `--accent-foreground` | `#FFFFFF` | `#451A03` | > 7.0:1 (AAA) | Teks di atas warna aksen |
| `--bg-canvas` | `#F6F8F7` | `#0B1210` (Deep Slate) | — | Latar belakang dasar aplikasi |
| `--card-surface` | `#FFFFFF` | `#121C18` | — | Permukaan kartu KPI, tabel, modal, dan drawer |
| `--card-elevated` | `#EDF3F0` | `#192722` | — | Permukaan kartu bertingkat, hover row tabel, toolbar |
| `--card-border` | `#D5E2DC` | `#23362F` | > 3.0:1 (UI) | Garis pemisah kartu, divider, dan border input |
| `--text-primary` | `#111827` (Gray-900) | `#ECFDF5` (Mint White) | > 12.5:1 (AAA)| Teks judul, angka KPI utama, body teks utama |
| `--text-muted` | `#4B5563` (Gray-600) | `#9CA3AF` (Gray-400) | > 4.6:1 (AA) | Metadata, timestamp, sub-label, keterangan form |
| `--ring-focus` | `#0F513D` | `#10B981` | > 4.5:1 (AA) | Cincin fokus aksesibilitas keyboard (`ring-2`) |

```css
/* Implementasi CSS Variables */
:root {
  --color-primary: #0F513D;
  --color-primary-hover: #166B51;
  --color-primary-fg: #FFFFFF;
  --color-accent: #B45309;
  --color-accent-fg: #FFFFFF;
  --color-app-bg: #F6F8F7;
  --color-card-surface: #FFFFFF;
  --color-card-border: #D5E2DC;
  --color-card-elevated: #EDF3F0;
  --color-text-primary: #111827;
  --color-text-muted: #4B5563;
  --color-ring: #0F513D;
}

.dark {
  --color-primary: #10B981;
  --color-primary-hover: #34D399;
  --color-primary-fg: #06281E;
  --color-accent: #F59E0B;
  --color-accent-fg: #451A03;
  --color-app-bg: #0B1210;
  --color-card-surface: #121C18;
  --color-card-border: #23362F;
  --color-card-elevated: #192722;
  --color-text-primary: #ECFDF5;
  --color-text-muted: #9CA3AF;
  --color-ring: #10B981;
}
```

---

### 2.2 Warna Semantik Tata Kelola Studio

#### A. Payment Gate Maker-Checker
- **Waiting DP 50% (Pengerjaan Terkunci):**
  - Light: BG `#FEF3C7`, Text `#92400E`, Border `#FCD34D`
  - Dark: BG `rgba(180, 83, 9, 0.20)`, Text `#FBBF24`, Border `rgba(245, 158, 11, 0.40)`
- **DP 50% Verified (Gembok Terbuka):**
  - Light: BG `#DCFCE7`, Text `#166534`, Border `#86EFAC`
  - Dark: BG `rgba(16, 185, 129, 0.20)`, Text `#34D399`, Border `rgba(16, 185, 129, 0.40)`
- **100% Paid (Lunas & Dihitung ke Graduation Rule):**
  - Light: BG `#ECFDF5`, Text `#065F46`, Border `#6EE7B7`
  - Dark: BG `rgba(5, 150, 105, 0.25)`, Text `#6EE7B7`, Border `rgba(5, 150, 105, 0.45)`

#### B. Client Revision Triage Queue
- **Minor Triage (≤ 2 Jam - Free):**
  - Light: BG `#E0F2FE`, Text `#0369A1`, Border `#BAE6FD`
  - Dark: BG `rgba(2, 132, 199, 0.20)`, Text `#38BDF8`, Border `rgba(56, 189, 248, 0.35)`
- **Major Revision (> 2 Jam - Kuota Revisi):**
  - Light: BG `#FEF3C7`, Text `#B45309`, Border `#FDE68A`
  - Dark: BG `rgba(217, 119, 6, 0.20)`, Text `#FBBF24`, Border `rgba(251, 191, 36, 0.35)`
- **Out of Scope (Billable Add-on):**
  - Light: BG `#F5F3FF`, Text `#6D28D9`, Border `#DDD6FE`
  - Dark: BG `rgba(124, 58, 237, 0.20)`, Text `#C4B5FD`, Border `rgba(196, 181, 253, 0.35)`

#### C. Academic Freeze Mode (H-7 UTS/UAS)
- **Banner Peringatan Studio:**
  - Light: BG `#F59E0B`, Text `#451A03`, Border `#D97706`
  - Dark: BG `#78350F`, Text `#FEF3C7`, Border `#B45309`
- **Tugas Terkunci (Non-Critical Freeze):**
  - Light: Opacity `65%`, Badge `#FEF3C7` / `#92400E`, Icon `lock`
  - Dark: Opacity `60%`, Badge `rgba(180, 83, 9, 0.25)` / `#FDE68A`

#### D. Status Tugas (Kanban & List)
- **To Do / Backlog:** Slate (`#64748B` / Dark: `#94A3B8`)
- **In Progress:** Ocean Blue (`#0284C7` / Dark: `#38BDF8`)
- **Under Review / Syura:** Amber (`#D97706` / Dark: `#FBBF24`)
- **Done:** Emerald Green (`#059669` / Dark: `#34D399`)
- **Blocked:** Crimson Red (`#DC2626` / Dark: `#F87171`)

#### E. 5 Lini Unit Bisnis KaryaKita
1. **Lini 1 (Creative & Visual Design):** Violet (`#7C3AED` / Dark: `#C4B5FD`)
2. **Lini 2 (WebTech & Software Systems):** Sky Blue (`#0284C7` / Dark: `#7DD3FC`)
3. **Lini 3 (Virtual Assistance & Data Ops):** Teal (`#0D9488` / Dark: `#5EEAD4`)
4. **Lini 4 (Media Production & Affiliate):** Warm Orange (`#EA580C` / Dark: `#FDBA74`)
5. **Lini 5 (AI Academy & Enterprise R&D):** Deep Emerald (`#0F513D` / Dark: `#6EE7B7`)
6. **Internal Governance & Studio Ops:** Cool Gray (`#475569` / Dark: `#CBD5E1`)

---

## 3. Tipografi & Hierarki Data

### 3.1 Font Stack
- **Headings & Judul Modul:** `'Plus Jakarta Sans', -apple-system, sans-serif`
  - Karakter: Geometris modern, ramah namun tegas, keterbacaan tinggi pada ukuran display.
- **Body, Form & Tabel:** `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
  - Karakter: Netral, x-height tinggi, sangat optimal untuk data tabular dan teks padat.
- **Metrik Numerik & Finansial:** Wajib menerapkan kelas `.tabular-nums` (`font-variant-numeric: tabular-nums;`).

### 3.2 Skala Tipografi & Penerapan

| Level | Ukuran (px / rem) | Line Height | Weight | Tracking | Penggunaan Utama |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **KPI Hero** | `32px / 2.0rem` | `1.2` | Bold (700) | `-0.03em` | Nominal Saldo Kas Mandiri, Total Omzet Studio |
| **Page Title** | `22px / 1.375rem` | `1.3` | Bold (700) | `-0.025em`| Judul Modul Utama (misal: "Pipeline CRM", "Keuangan") |
| **Card Header**| `15px / 0.9375rem`| `1.4` | SemiBold (600) | `-0.015em`| Judul Kartu KPI, Header Kolom Kanban, Modal Header |
| **Body Bold**  | `13px / 0.8125rem`| `1.5` | SemiBold (600) | Normal | Nama Proyek, Judul Tugas, Nama Klien di Tabel |
| **Body Base**  | `13px / 0.8125rem`| `1.5` | Regular (400) | Normal | Deskripsi tugas, catatan syura, teks form |
| **Body Muted** | `12px / 0.75rem`  | `1.4` | Medium (500) | Normal | Timestamp, sub-label, instruksi form bantu |
| **Badge / Pill**| `11px / 0.6875rem`| `1.0` | SemiBold (600) | `+0.02em` | Tag status, unit lini, role chip, SLA counter |
| **Micro Caption**| `10px / 0.625rem`| `1.2` | Medium (500) | `+0.03em` | Indikator live status, helper teks kaki kartu |

---

## 4. Layout & Navigasi Terstruktur (13 Modul)

Untuk menghindari kepadatan visual (*visual clutter*) bagi 7 anggota tim, 13 modul dikelompokkan ke dalam 5 klaster logis dengan sidebar yang dapat diciutkan (*collapsible*).

### 4.1 Klaster Modul Sidebar

```
[RINGKASAN & KINERJA]
 ├── Beranda (/overview)               -> KPI ringkas, status sprint, quick check-in
 └── Analitik & Wellbeing (/analytics)  -> Beban kerja tim, jam kontribusi, Burnout Radar

[EKSEKUSI & KOLABORASI]
 ├── Papan Tugas (/tasks)              -> Kanban 5 kolom, view filter per co-founder
 ├── Rhythm & Syura (/reports)         -> Form Async Check-In Rabu malam, notulen Weekly Syura
 └── Arsip & Vault (/archives)         -> Dokumen legal, MoU syirkah, aset klien bertanda NDA

[KOMERSIAL & KEUANGAN]
 ├── Proyek, Gate & Triage (/projects) -> Payment Gate Maker-Checker, antrean revisi klien
 ├── Pipeline CRM (/crm)               -> Kanban prospek klien B2B (Lead -> Deal)
 └── Keuangan & Syirkah (/finance)     -> Kas masuk/keluar, Zakat 2.5%, bagi hasil Syirkah 'Abdan

[UNIT PERTUMBUHAN]
 ├── AI Academy (/academy)             -> Modul Lini 5 (Peserta, sertifikat, jadwal webinar)
 └── Media & Affiliate (/affiliate)    -> Modul Lini 4 (Kampanye video, link afiliasi tim)

[TATA KELOLA & OTOMASI]
 ├── Bot WA / Telegram (/integrations) -> Webhook integrasi & trigger pengingat otomatis
 ├── Sistem & Audit Log (/system)      -> Monitoring mutasi data, hak akses, log keamanan
 └── Portal Klien B2B (/client-portal) -> Akses khusus eksternal berbasis Token URL aman
```

### 4.2 Spesifikasi Sidebar Collapsible
- **Expanded Width:** `256px (w-64)`
- **Collapsed Width:** `72px (w-18)` — hanya menampilkan ikon dengan *floating tooltip* saat hover.
- **Header Sidebar:** Logo KK monolitik (`36x36px`) dengan badge versi dan nama studio.
- **Footer Sidebar:** Profil pengguna aktif, indikator ketersediaan jam kerja (dot warna: hijau = 4–5j, kuning = padat kuliah, merah = freeze), serta tombol logout cepat.

### 4.3 Header Bar & Status Global
- **Tinggi Header:** `56px (h-14)` dengan border bawah halus `#D5E2DC` (Dark: `#23362F`).
- **Breadcrumb Navigasi:** `KaryaKita Hub / [Klaster] / [Nama Modul]` (teks semibold kontras).
- **Global Search:** Input pencarian terpadu dengan shortcut keyboard `Ctrl + K`.
- **Top Actions:**
  - Status Kapasitas Kuliah Tim (Pill interaktif)
  - Dark / Light Mode Toggle
  - Gemini Studio Copilot Trigger (Ctrl+Shift+G)
  - Quick Task Create (+ Buat Tugas)

### 4.4 Responsivitas Multi-Perangkat
- **Mobile (< 768px):**
  - Sidebar desktop disembunyikan otomatis.
  - Digantikan oleh **Bottom Navigation Bar** dengan 5 menu utama: *Beranda*, *Tugas*, *Proyek*, *Lapor*, dan *Lainnya (Drawer)*.
  - Quick Action FAB berada di *thumb zone* kanan bawah (`44x44px`, target sentuh nyaman).
- **Tablet (768px – 1023px):**
  - Sidebar masuk ke mode collapsed (`72px`) untuk memaksimalkan ruang kerja kanvas.
- **Desktop (≥ 1024px):**
  - Sidebar expanded penuh dengan layout kanvas grid 12 kolom responsif.
  - Maksimal lebar konten kontainer: `1400px` (terpusat dengan whitespace lega).

---

## 5. Standar Komponen & Visualisasi Data (Recharts)

### 5.1 Kartu KPI & Kartu Interaktif
- **Border Radius:** `rounded-xl` (`0.75rem / 12px`).
- **Surface Elevation:**
  - Standard Card: Border `1px solid var(--color-card-border)`, Shadow `0 1px 2px rgba(0,0,0,0.03)`.
  - Interactive Hover: `border-color: var(--color-primary)`, Shadow `0 4px 12px rgba(0,0,0,0.06)`, `transform: translateY(-1px)`.
- **KPI Card Layout:**
  - Label kecil huruf kapital (`text-[11px] font-bold text-gray-500 uppercase tracking-wider`).
  - Nominal metrik utama bold tabular (`text-2xl font-bold tabular-nums text-gray-900 dark:text-emerald-100`).
  - Sub-keterangan tren / perbandingan persentase dengan ikon panah indikator.

### 5.2 Tabel Data Terstruktur
- **Container:** Wajib dibungkus dalam `overflow-x-auto` dengan radius `rounded-xl` dan border luar.
- **Header Tabel:** Latar `var(--color-card-elevated)`, teks uppercase semibold `text-[11px] text-gray-500`, tinggi baris minimal `40px`.
- **Baris Data:** Tinggi baris minimal `48px`, transisi hover halus `hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20`.
- **Kolom Numerik:** Perataan teks kanan (`text-right`) dengan font `tabular-nums`.
- **Kolom Status:** Menggunakan Badge terstandarisasi dengan pill padding `px-2 py-0.5 rounded-full`.
- **Kolom Aksi:** Terkunci di sisi kanan atau memiliki kontras aksi yang jelas (`min-w-[80px]`).

### 5.3 Modal & Drawer
- **Backdrop:** `background: rgba(5, 10, 8, 0.65)`, `backdrop-filter: blur(4px)`.
- **Animasi Buka:** Durasi `200ms ease-out`, efek scale lembut `scale(0.98) -> scale(1)`.
- **Modal Konfirmasi Aksi Kritis:**
  - Wajib untuk Verifikasi DP 50%, Tutup Buku Syirkah, Hapus Data, dan Aktivasi Academic Freeze.
  - Tombol aksi primer menggunakan varian warna kontekstual (Merah untuk Hapus, Emerald untuk Verifikasi Pembayaran).

### 5.4 Form & Input Handling
- **Label:** Di atas input, font medium `text-xs text-gray-700 dark:text-gray-300` dengan tanda `*` merah untuk field wajib.
- **Input Height:** Standar `36px (h-9)` untuk form kompak, `42px (h-10)` untuk form mobile.
- **Border & Focus State:**
  - Normal: Border `1px solid var(--color-card-border)`.
  - Focus: `outline: none`, `border-color: var(--color-primary)`, `box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.20)`.
  - Error: `border-color: #DC2626`, `box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.15)`.
- **Pesan Validasi:** Tampil tepat di bawah input (`text-[11px] text-red-600 dark:text-red-400 mt-1 flex items-center gap-1`).

### 5.5 Skeleton Loading & Empty States
- **Skeleton Shimmer:** Menggunakan blok rounded berwarna `bg-gray-200 dark:bg-gray-800` dengan animasi pulse halus (`1.5s infinite`).
- **Empty State:**
  - Dilarang menampilkan kontainer kosong tanpa panduan.
  - Format wajib: Ikon garis tipis berukuran `40x40px` + 1 kalimat judul ringkas + 1 kalimat penjelas + Tombol aksi utama (misal: `+ Tambah Proyek Pertama`).

### 5.6 Palet Chart (Recharts & Chart.js)
Semua grafik visualisasi wajib mengikuti palet aksesibel berikut:

| Series | Warna (Hex) | Peruntukan Data |
| :--- | :--- | :--- |
| **Series 1 (Primary)** | `#0F513D` (Dark: `#10B981`) | Omzet Utama, Kas Kumulatif, Tren Progres Selesai |
| **Series 2 (Target/Benchmark)** | `#B45309` (Dark: `#F59E0B`) | Garis Ambang Graduation Rule (Rp3,5 Juta), Target KPI |
| **Series 3 (Secondary Ops)** | `#0284C7` (Dark: `#38BDF8`) | Jam Kontribusi Tim, SLA Penyelesaian Tugas |
| **Series 4 (Creative/Affiliate)**| `#7C3AED` (Dark: `#A78BFA`) | Metrik Lini 1 & Komisi Afiliasi Lini 4 |
| **Grid Lines** | `#E5E7EB` (Dark: `#1F2E27`) | Garis bantu horizontal/vertikal (strokeDasharray: "3 3") |
| **Tooltip Container** | `#111827` (Dark: `#192722`) | Teks putih `#FFFFFF`, border halus, font `tabular-nums` |

*Catatan Aksesibilitas Chart:* Dilarang hanya mengandalkan warna untuk membedakan data line/bar. Setiap titik hover wajib menampilkan angka nominal eksak di tooltip dan tabel ringkasan data alternatif di bawah grafik jika diminta mode pembaca layar.

---

## 6. Aturan Interaksi & Anti-Patterns

### 6.1 Batas Durasi Transisi (*Motion Curves*)
- **Mikro-interaksi Cepat (Button hover, tab switch, checkbox check):**
  - Durasi: `150ms`
  - Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out standar).
- **Transisi Permukaan (Modal open, drawer slide, dropdown expand):**
  - Durasi: `200ms – 250ms`
  - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo lembut).
- **Perpindahan Halaman / Modul:**
  - Durasi: `200ms` fade-in tanpa gerakan horizontal berlebih untuk mencegah kelelahan mata.
- **Reduced Motion:** Wajib menyertakan media query `@media (prefers-reduced-motion: reduce)` yang menonaktifkan animasi transform dan hanya menyisakan transisi opacity seketika.

### 6.2 Hal-Hal yang Dilarang Keras (*Strict Anti-Patterns*)
1. **Dilarang Menggunakan Gradien Pelangi / Generik:** Dilarang menggunakan gradien neon ungu-pink atau warna jenuh yang tidak ada di token brand KaryaKita.
2. **Dilarang Teks Tanpa Tabular-Nums pada Data Angka:** Nominal Rupiah, persentase, tanggal, dan durasi jam kerja wajib memakai class `tabular-nums` agar tidak bergetar saat nilai berubah.
3. **Dilarang Tombol Ikon Tanpa Label Aksesibilitas:** Seluruh tombol yang hanya berisi ikon (`<button><i data-lucide="..."></i></button>`) wajib memiliki atribut `title` dan `aria-label`.
4. **Dilarang Tumpukan Kartu Lebih dari 2 Lapis:** Penumpukan kartu di dalam kartu (*card inception*) membuat layar terasa sempit dan membingungkan hierarki visual.
5. **Dilarang Spasi Terlalu Rapat (< 8px pada tombol sentuh):** Seluruh elemen interaktif pada mobile wajib memiliki target sentuh minimal `44x44px` dengan jarak minimal `8px`.
6. **Dilarang Menghapus Cincin Fokus Keyboard:** Jangan pernah menggunakan `outline-none` tanpa menggantinya dengan ring fokus eksplisit (`focus-visible:ring-2 focus-visible:ring-emerald-500`).
7. **Dilarang Warna Teks Hitam Pekat (#000000) pada Dark Mode:** Teks di dark mode wajib menggunakan `#ECFDF5` atau `#F3F4F6` untuk menghindari kontras yang menyilaukan mata di malam hari.

---

## 7. Matriks Verifikasi Kepatuhan Desain

Sebelum rilis atau pembaruan antarmuka pada Tahap 2 dan Tahap 3, verifikasi checklist berikut:

- [ ] Seluruh token warna mengacu pada CSS variables di atas tanpa hardcoded hex liar.
- [ ] Kontras warna teks terhadap background telah diuji memenuhi rasio minimal WCAG AA (4.5:1 untuk teks normal, 3.0:1 untuk teks besar).
- [ ] Mode gelap (`.dark`) telah diuji pada semua 13 modul dan tidak ada teks abu-abu yang tenggelam di latar gelap.
- [ ] Angka finansial & waktu memiliki kelas `.tabular-nums`.
- [ ] Sidebar 13 modul terkelompok rapi dalam 5 kategori dengan fungsi collapsible berjalan mulus.
- [ ] Viewport mobile (375px), tablet (768px), dan desktop (1440px) tidak mengalami *horizontal scroll leak*.
- [ ] Semua state loading memiliki skeleton shimmer yang presisi dengan komponen aslinya.
