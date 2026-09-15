import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create initial admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@belevarage.com' },
    update: { role: 'SUPER_ADMIN' },
    create: {
      email: 'admin@belevarage.com',
      name: 'Super Admin',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
    },
  });

  console.log('Created admin user:', admin.email);

  // Second super admin: Dr. Pavan
  const drPavanPassword = await bcrypt.hash('pavan123', 10);

  const drPavan = await prisma.user.upsert({
    where: { email: 'PavanSureshbhole@gmail.com' },
    update: { role: 'SUPER_ADMIN' },
    create: {
      email: 'PavanSureshbhole@gmail.com',
      name: 'Dr. Pavan',
      password: drPavanPassword,
      role: 'SUPER_ADMIN',
    },
  });

  console.log('Created super admin user:', drPavan.email);
  console.log('Default passwords -> admin@belevarage.com: admin123, PavanSureshbhole@gmail.com: pavan123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
