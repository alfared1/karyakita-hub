# 🌟 KaryaKita Hub — Internal Venture Studio Operating System

> **Platform Operasional, Keuangan Syariah (*Syirkah 'Abdan*), Manajemen Proyek & Portal Klien Terpadu**  
> Dikelola oleh **7 Mahasiswa Sistem Informasi STMIK Tazkia** (KaryaKita AI & Venture Studio).  
> Dibangun berdasarkan prinsip **Zero-Cost Legal Tech Stack** (100% legal dan gratis di *free tier*).

---

## 📑 Daftar Isi
1. [Latar Belakang & Visi Produk](#-latar-belakang--visi-produk)
2. [7 Co-Founder & Peran di Sistem](#-7-co-founder--peran-di-sistem)
3. [5 Unit Bisnis Resmi KaryaKita](#-5-unit-bisnis-resmi-karyakita)
4. [Aturan Bisnis Syariah & Logika Sistem (Guardrail by Design)](#-aturan-bisnis-syariah--logika-sistem-guardrail-by-design)
5. [Fitur Utama Lintas Tahap (Tahap 1, 2, dan 3)](#-fitur-utama-lintas-tahap-tahap-1-2-dan-3)
6. [Struktur Berkas & Repositori](#-struktur-berkas--repositori)
7. [Panduan Menjalankan Web Dashboard](#-panduan-menjalankan-web-dashboard)

---

## 🎯 Latar Belakang & Visi Produk

KaryaKita dijalankan oleh 7 mahasiswa aktif yang mengelola **5 unit bisnis sekaligus** dengan modal awal hemat (**Rp0–Rp300.000**) dan komitmen waktu terjaga (**3–5 jam/minggu per orang**). **KaryaKita Hub** menggantikan koordinasi manual yang tercecer di grup WhatsApp dengan sistem komando terpadu yang menegakkan tata kelola profesional dan etika bisnis Islam (*Shiddiq, Amanah, Tabligh, Fathanah, Itqan, Tabayyun*).

---

## 👥 7 Co-Founder & Peran di Sistem

| Co-Founder | Peran Resmi | Peran Teknis Sistem | Hak Akses Utama |
| :--- | :--- | :--- | :--- |
| **Alfatih** | CEO, CTO/AI Officer, Kepala Akademi & R&D AI | `SUPER_ADMIN` | Hak akses penuh seluruh modul, pengesahan notulen, konfigurasi bot. |
| **Hilwa** | COO & Head of Project Management | `OPS_ADMIN` | Pengendali Papan Tugas, pengawal SLA, rekap WhatsApp *Async Check-In*. |
| **Novita** | CFO & VP of Growth Systems | `FINANCE_ADMIN` | **Wewenang eksklusif verifikasi Payment Gate (DP 50%)**, Buku Kas, Zakat 2,5%, dan bagi hasil *Syirkah 'Abdan*. |
| **Ilham Akbar** | CBDO / CDO | `CO_FOUNDER` | Pengelola Pipeline CRM B2B, PIC Lini 1 (Design) & Lini 2 (WebTech). |
| **Syarah** | CMO | `CO_FOUNDER` | Pengelola Konten & Komisi Lini 4 (Media & Affiliate), sumber *lead* CRM. |
| **Aywa** | CRO | `CO_FOUNDER` | Pengelola Peserta & Presensi Lini 5 (AI Academy) & Riset Lini 3 (Data). |
| **Ahmad** | Creative Director & Lead Multimedia | `CO_FOUNDER` | Produksi visual/video Lini 1 & Lini 4, pengarsipan aset kreatif. |

---

## 🏢 5 Unit Bisnis Resmi KaryaKita

1. **KaryaKita Design (Lini 1 — Brand Identity & UI/UX Studio)** — Warna: `#7C3AED` (Ungu)
2. **KaryaKita WebTech (Lini 2 — Custom Web Engineering & Scalable Platform)** — Warna: `#0284C7` (Biru)
3. **KaryaKita Assist & Data (Lini 3 — Executive Assistance & Documentation)** — Warna: `#0D9488` (Teal)
4. **KaryaKita Media & Affiliate (Lini 4 — Performance Video & Affiliate Network)** — Warna: `#EA580C` (Oranye)
5. **KaryaKita AI Academy (Lini 5 — Corporate & Public AI Workshop)** — Warna: `#0F4C3A` (Hijau Zamrud)
* *Operasional Internal KaryaKita Hub* — Warna: `#4B5563` (Abu-abu Slate)

---

## ⚖️ Aturan Bisnis Syariah & Logika Sistem (*Guardrail by Design*)

1. **Gerbang Pembayaran (*Payment Gate Rule*):**
   * Setiap proyek B2B baru otomatis berstatus `LOCKED_WAITING_DP`.
   * Tombol tugas eksekusi **dilarang masuk ke status `In Progress`** sebelum **Novita (CFO)** atau **Alfatih (CEO)** memverifikasi DP 50% beserta tanggal dan tautan bukti transfer.
2. **Aturan Kas Mandiri (*Graduation Rule* — Ambang Batas Rp3.500.000):**
   * **Saldo < Rp3.500.000 (Mode Bootstrapping):** Kas ditahan dikunci **70%**, alokasi bagi hasil **30%**.
   * **Saldo >= Rp3.500.000 (Mode Mandiri Normal):** Kas ditahan **30%**, alokasi bagi hasil meningkat menjadi **70%**.
3. **Bagi Hasil *Syirkah 'Abdan* (Zero-Riba, Zero-Gharar):**
   * $\text{Laba Bersih} = \text{Pemasukan Terverifikasi} - \text{Biaya Operasional (Opex)}$
   * **Zakat Perusahaan (2,5%)** dipotong otomatis terlebih dahulu dari laba bersih.
   * Dana Bagi Hasil dibagi: **40% Porsi Eksekutor Aktif** (berdasarkan bobot kontribusi tugas selesai) dan **60% Porsi Rata 7 Pendiri**.
4. **Batas Beban Mahasiswa (*Burnout Radar*) & *Academic Freeze Mode*:**
   * Batas beban sehat maksimal **3–5 jam/minggu per mahasiswa**. Jika total tugas aktif seorang pendiri melebihi 5 jam, muncul peringatan beban kerja.
   * *Academic Freeze Mode* aktif menjelang H-7 UTS dan UAS STMIK Tazkia untuk menahan penambahan proyek baru agar tim fokus pada ujian.
5. **Kebijakan Pengarsipan Hemat Biaya (*Link-First*):**
   * 95% dokumen menggunakan tautan eksternal (Google Drive resmi, Figma, GitHub, Canva, Vercel) dengan biaya penyimpanan **Rp0**.
   * Dokumen berlabel `NDA Klien — Rahasia` otomatis terisolasi secara server-side hanya untuk Super Admin, Ops Admin, Finance Admin, dan PIC proyek terkait.

---

## 🚀 Fitur Utama Lintas Tahap

### Tahap 1 (MVP Operasional & Disiplin Eksekusi — Q1)
* **Simulator Peran Realtime:** Switch simulasi antara 7 Co-Founder dan Klien B2B langsung di bilah atas.
* **Beranda Eksekutif:** 4 KPI Cards, progress bar *Graduation Rule*, banner *Academic Freeze*, widget *Tugas Saya*, dan *Activity Feed*.
* **Papan Tugas (Kanban & Tabel):** Filter Co-Founder/Unit Bisnis/Sprint, *Definition of Done (DoD)* checklist, auto-arsip ke `/archives` saat tugas *Done (Itqan)*.
* **Lapor & Syura (*Async-First*):** Form *Async Check-In* 3 kolom (< 90 detik via mobile), **Tombol 1-Klik Salin Format WhatsApp** untuk Hilwa, notulen *Weekly Syura* dengan tombol **Jadikan Tugas di Kanban**.
* **Pusat Arsip (*Link-First Vault*):** Filter kuartal & kategori, isolasi kerahasiaan *Internal Tim* vs *NDA Klien*.
* **Tracker Proyek & Payment Gate:** Verifikasi DP 50% eksklusif CFO/CEO.

### Tahap 2 (Otomasi Keuangan, CRM & Mesin Pertumbuhan — Q2)
* **Buku Kas & Pelacak Qardh:** Pencatatan arus kas dan cicilan pengembalian modal awal talangan pendiri (0% bunga).
* **Kalkulator Bagi Hasil Syirkah 'Abdan:** Simulasi pembagian laba bersih, zakat 2,5%, porsi 40/60, dan cetak Slip Bagi Hasil PDF personal.
* **Generator Invoice & Kuitansi PDF:** Cetak invoice resmi bernomor `INV/KK/2026/MM/XXX` lengkap dengan rekening BSI KaryaKita.
* **Pipeline CRM B2B:** Kanban 6 tahap (*Lead Masuk* s.d. *Won*) dengan tombol **Konversi ke Proyek Aktif** 1-klik.
* **AI Academy (Lini 5):** Manajemen batch publik & corporate, pelacak kuota dan pembayaran, tombol salin nomor WhatsApp peserta lunas.
* **Media & Affiliate (Lini 4):** Papan produksi konten TikTok/Reels/Shorts & buku pelacakan komisi afiliasi.
* **Bot Notifikasi WhatsApp / Telegram:** Pengaturan otomasi reminder check-in, tenggat H-1, alert DP 50%, dan mode hening (*Quiet Hours* 22.00–06.00 WIB).

### Tahap 3 (Portal Klien, Analitik & Skala Studio — Q3–Q4)
* **Portal Klien B2B (`/client/[token]`):** Halaman bersih untuk klien memantau milestone publik, status pembayaran, dan mengirim form revisi dengan pelacak sisa kuota revisi.
* **Dasbor Analitik & Burnout Radar:** Grafik perbandingan pendapatan 5 unit dan radar jam kerja aktual mahasiswa.
* **Ekspor Laporan Akademik (MKUT.102):** Tombol 1-klik cetak laporan evaluasi usaha untuk penilaian dosen kewirausahaan Tazkia.
* **Audit Log Permanen (Immutable):** Rekam jejak seluruh aksi penting studio (*timestamp*, pelaku, rincian).

---

## 📁 Struktur Berkas & Repositori

```text
karyakita-hub/
├── index.html              # Antarmuka Dashboard Interaktif Utama (SPA)
├── app.js                  # Logika Bisnis, State Persistence & Rules Engine
├── styles.css              # Token Desain Visual, Warna Semantik & Print Stylesheet
├── server.js               # Server HTTP Node.js Lokal (Zero-Dependency)
├── start.bat               # Script Windows 1-Klik untuk Menjalankan Web
├── package.json            # Konfigurasi Dependensi & Script
├── .env.example            # Template Variabel Lingkungan Produksi
├── prisma/
│   ├── schema.prisma       # Skema Database PostgreSQL Terpadu (23 Tabel)
│   └── seed.ts             # Seeder 7 Co-Founder, 5 Unit Bisnis & Pengaturan Awal
└── README.md               # Dokumentasi Lengkap Proyek
```

---

## 💻 Panduan Menjalankan Web Dashboard

Anda memiliki 3 cara mudah untuk menjalankan dan melihat web dashboard ini:

### Cara 1: Menggunakan File Batch Otomatis (Paling Mudah di Windows)
1. Buka folder `E:\Tugas\Kewirausahaan\STARTUP\karyakita-hub\` di File Explorer.
2. Cukup klik ganda (double-click) berkas **`start.bat`**.
3. Browser akan terbuka otomatis di alamat `http://localhost:3000`.

### Cara 2: Menjalankan via Terminal / Command Prompt
1. Buka PowerShell atau Command Prompt pada folder `karyakita-hub`:
   ```bash
   cd E:\Tugas\Kewirausahaan\STARTUP\karyakita-hub
   ```
2. Jalankan server lokal:
   ```bash
   node server.js
   # atau
   npm start
   ```
3. Buka browser dan kunjungi: **`http://localhost:3000`**.

### Cara 3: Buka Langsung Berkas HTML di Browser (Tanpa Server)
* Anda juga dapat langsung mengklik ganda berkas **`index.html`** di Google Chrome, Microsoft Edge, atau Mozilla Firefox. Seluruh fitur simulasi peran, navigasi, kalkulator Syirkah, dan penyimpanan data lokal (*localStorage*) tetap berfungsi optimal!

---
*Dibuat dengan dedikasi untuk kesuksesan operasional **KaryaKita AI & Venture Studio**.*
