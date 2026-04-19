import { prisma } from "@/lib/prisma";

export async function GET() {
  const members = await prisma.teamMember.findMany();
  const projects = await prisma.project.findMany();
  const settings = await prisma.siteSetting.findMany();

  return Response.json({
    members,
    projects,
    settings,
  });
}