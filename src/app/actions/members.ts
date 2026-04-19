'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getMembers() {
  return await prisma.teamMember.findMany({
    include: {
      skills: true,
      socialLinks: true,
      projects: true,
    },
    orderBy: { createdAt: 'asc' },
  });
}

export async function addMember(data: any) {
  const member = await prisma.teamMember.create({
    data: {
      name: data.name,
      role: data.role,
      location: data.location || null,
      bio: data.bio,
      yearsExperience: data.yearsExperience || 0,
      profileImageUrl: data.profileImageUrl || null,
      skills: {
        create: data.skills || [],
      },
      socialLinks: {
        create: data.socialLinks || [],
      },
      projects: {
        connect: data.projectIds?.map((id: string) => ({ id })) || [],
      },
    },
  });
  revalidatePath('/admin');
  revalidatePath('/');
  return member;
}

export async function deleteMember(id: string) {
  await prisma.teamMember.delete({ where: { id } });
  revalidatePath('/admin');
  revalidatePath('/');
}
