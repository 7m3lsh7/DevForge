import { teamMembers } from '@/lib/data';
import TeamMemberClient from './TeamMemberClient';

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ id: String(m.id) }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <TeamMemberClient id={id} />;
}
