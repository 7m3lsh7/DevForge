import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import MotionDiv from '@/components/MotionDiv';

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const member = await prisma.teamMember.findUnique({
    where: { id },
    include: {
      skills: true,
      socialLinks: true,
      projects: true,
    },
  });

  if (!member) notFound();

  return (
    <div className="relative z-10 w-full min-h-screen pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 dark:bg-black/10 border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-bold text-gray-900 dark:text-white">
            <Link href="/">DevForge</Link>
          </div>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-40">
        <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header Profile */}
          <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-3xl p-10 md:p-16 mb-16 shadow-2xl shadow-primary-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full"></div>
            
            <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 flex items-center justify-center text-5xl md:text-7xl text-white font-bold shadow-2xl">
                {member.name.charAt(0)}
              </div>
              
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 text-gray-900 dark:text-white">{member.name}</h1>
                <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-6">{member.role}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 font-medium mb-8">
                  <span className="bg-white/50 dark:bg-black/20 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
                    {member.yearsExperience} Years Experience
                  </span>
                  {member.location && (
                    <span className="bg-white/50 dark:bg-black/20 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
                      {member.location}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {member.socialLinks.map(link => (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/50 dark:bg-black/20 hover:bg-primary-50 dark:hover:bg-primary-900/40 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-white/10 rounded-xl transition-all hover:-translate-y-1">
                      {link.platform.toLowerCase() === 'github' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                      )}
                      {link.platform.toLowerCase() === 'linkedin' && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      )}
                      {(link.platform.toLowerCase() !== 'github' && link.platform.toLowerCase() !== 'linkedin') && <ExternalLink size={24} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200 dark:border-white/10 relative z-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Biography</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
                {member.bio}
              </p>
            </div>
          </div>
        </MotionDiv>

        {/* Skills & Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-1 border-r border-transparent lg:border-gray-200 dark:lg:border-white/10 lg:pr-10">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Technical Skills</h2>
            <div className="flex flex-col gap-6">
              {Object.entries(
                member.skills.reduce((acc: any, skill) => {
                  acc[skill.category || 'Other'] = [...(acc[skill.category || 'Other'] || []), skill];
                  return acc;
                }, {})
              ).map(([category, skills]: [string, any]) => (
                <div key={category}>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill: any) => (
                      <span key={skill.id} className="px-4 py-2 text-sm font-semibold bg-white/40 dark:bg-black/20 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Featured Projects</h2>
            
            <div className="flex flex-col gap-8">
              {member.projects.map((project, index) => (
                <div key={project.id} className="group flex flex-col md:flex-row gap-8 bg-white/30 dark:bg-zinc-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-white/5 hover:border-primary-500/30 transition-all">
                  <div className="flex-1">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.technologies}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Impact</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.results}</p>
                    </div>
                  </div>
                </div>
              ))}

              {member.projects.length === 0 && (
                <div className="p-8 text-center border border-dashed border-gray-300 dark:border-zinc-700 rounded-2xl text-gray-500">
                  No projects linked yet.
                </div>
              )}
            </div>
          </MotionDiv>
          
        </div>
      </main>
    </div>
  );
}
