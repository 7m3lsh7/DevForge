import { teamData } from '@/lib/data';

export async function getSettings() {
  return {
    siteName: teamData.name,
    tagline: teamData.tagline,
    description: teamData.description,
  };
}
