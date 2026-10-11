import { dictionaries } from '@/lib/data';

export async function getSettings() {
  return {
    siteName: 'Team P7',
    tagline: dictionaries.en.hero.titleHighlight,
    description: dictionaries.en.hero.subtitle,
  };
}
