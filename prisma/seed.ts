import { PrismaClient, Role, BusinessUnitCode } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding KaryaKita Hub Database...');

  // 1. Seed 5 Unit Bisnis Resmi + Operasional Internal
  const units = [
    { code: BusinessUnitCode.LINI_1_DESIGN, fullName: 'KaryaKita Design (Lini 1 — Brand Identity & UI/UX)', badgeColor: '#7C3AED' },
    { code: BusinessUnitCode.LINI_2_WEBTECH, fullName: 'KaryaKita WebTech (Lini 2 — Web Engineering & Platform)', badgeColor: '#0284C7' },
    { code: BusinessUnitCode.LINI_3_ASSIST_DATA, fullName: 'KaryaKita Assist & Data (Lini 3 — Analysis & Documentation)', badgeColor: '#0D9488' },
    { code: BusinessUnitCode.LINI_4_MEDIA_AFFILIATE, fullName: 'KaryaKita Media & Affiliate (Lini 4 — Content & Affiliate)', badgeColor: '#EA580C' },
    { code: BusinessUnitCode.LINI_5_AI_ACADEMY, fullName: 'KaryaKita AI Academy (Lini 5 — Corporate & Public Training)', badgeColor: '#0F4C3A' },
    { code: BusinessUnitCode.INTERNAL_OPS, fullName: 'Operasional Internal KaryaKita Hub', badgeColor: '#4B5563' },
  ];

  for (const u of units) {
    await prisma.businessUnit.upsert({
      where: { code: u.code },
      update: { fullName: u.fullName, badgeColor: u.badgeColor },
      create: u,
    });
  }

  // 2. Seed 7 Co-Founder Whitelist (Mahasiswa STMIK Tazkia)
  const founders = [
    { name: 'Alfatih', email: 'alfatih@karyakita.id', role: Role.SUPER_ADMIN, avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
    { name: 'Hilwa', email: 'hilwa@karyakita.id', role: Role.OPS_ADMIN, avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100' },
    { name: 'Novita', email: 'novita@karyakita.id', role: Role.FINANCE_ADMIN, avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
    { name: 'Ilham Akbar', email: 'ilham@karyakita.id', role: Role.CO_FOUNDER, avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { name: 'Syarah', email: 'syarah@karyakita.id', role: Role.CO_FOUNDER, avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { name: 'Aywa', email: 'aywa@karyakita.id', role: Role.CO_FOUNDER, avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    { name: 'Ahmad', email: 'ahmad@karyakita.id', role: Role.CO_FOUNDER, avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
  ];

  for (const f of founders) {
    await prisma.user.upsert({
      where: { email: f.email },
      update: { name: f.name, role: f.role, avatarUrl: f.avatarUrl },
      create: f,
    });
  }

  // 3. Seed Pengaturan Awal Sistem
  const settings = [
    { key: 'academic_freeze_mode', value: 'false' },
    { key: 'graduation_threshold_idr', value: '3500000' },
    { key: 'manual_cash_balance_idr', value: '0' },
    { key: 'current_sprint', value: '1' },
  ];

  for (const s of settings) {
    await prisma.systemSetting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    });
  }

  console.log('Seeding selesai dengan sukses!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
