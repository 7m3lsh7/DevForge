import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Team from '@/components/Team/Team';
import Skills from '@/components/Skills/Skills';
import Services from '@/components/Services/Services';
import Projects from '@/components/Projects/Projects';
import Achievements from '@/components/Achievements/Achievements';
import Workflow from '@/components/Workflow/Workflow';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { getMembers } from './actions/members';
import { getProjects } from './actions/projects';
import { getSettings } from './actions/settings';

export default async function HomePage() {
  const members = await getMembers();
  const projects = await getProjects();
  const settings = await getSettings();

  return (
    <>
      <Navbar />
      <main>
        <Hero settings={settings} />
        <About settings={settings} />
        <Team />
        <Skills />
        <Services />
        <Projects />
        <Achievements />
        <Workflow />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
