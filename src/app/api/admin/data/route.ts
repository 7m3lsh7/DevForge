import { teamMembers, projects } from '@/lib/data';

export async function GET() {
  return Response.json({
    members: teamMembers,
    projects: projects,
    settings: {},
  });
}