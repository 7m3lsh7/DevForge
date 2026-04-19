'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getSettings() {
  const settings = await prisma.siteSetting.findMany();
  // Convert array to object { id: value }
  return settings.reduce((acc: any, setting: any) => {
    acc[setting.id] = setting.value;
    return acc;
  }, {});
}

export async function saveSettings(data: Record<string, string>) {
  for (const [id, value] of Object.entries(data)) {
    await prisma.siteSetting.upsert({
      where: { id },
      update: { value },
      create: { id, value }
    });
  }
  revalidatePath('/');
  revalidatePath('/admin');
  return true;
}
