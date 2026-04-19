'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function addProject(data: any) {
  const project = await prisma.project.create({
    data: {
      title: data.title,
      shortDesc: data.shortDesc,
      description: data.description,
      category: data.category || 'General',
      technologies: data.technologies,
      results: data.results,
    },
  });
  revalidatePath('/');
  revalidatePath('/admin');
  return project;
}

export async function deleteProject(id: string) {
  await prisma.project.delete({ where: { id } });
  revalidatePath('/');
  revalidatePath('/admin');
}
