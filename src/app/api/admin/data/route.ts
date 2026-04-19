import { prisma } from "@/lib/prisma";

export async function GET() {
  const members = await prisma.member.findMany();
  const projects = await prisma.project.findMany();
  const settings = await prisma.settings.findFirst();

  return Response.json({
    members,
    projects,
    settings,
  });
}