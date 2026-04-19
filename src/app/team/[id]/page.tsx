import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, ArrowLeft, Briefcase, MapPin, Award, Calendar, FolderGit2 } from 'lucide-react';
import MotionDiv from '@/components/MotionDiv';
import { teamMembers } from '@/lib/data';

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ id: String(m.id) }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const member = teamMembers.find((m) => String(m.id) === id);

  if (!member) notFound();

  return (
    <div className="relative z-10 w-full min-h-screen pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/40 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-bold text-gray-900 dark:text-white">
            <Link href="/">DevForge</Link>
          </div>
          <Link href="/#team" className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors">
            <ArrowLeft size={16} /> Back
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-40">
        <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          
          {/* Hero Profile Panel */}
          <div className="bg-white/60 dark:bg-black/40 backdrop-blur-3xl border border-white dark:border-white/10 rounded-3xl p-8 md:p-14 mb-16 shadow-2xl shadow-primary-900/5 dark:shadow-black/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 dark:opacity-40 rounded-full mix-blend-screen pointer-events-none transition-transform duration-1000 group-hover:scale-110" style={{ background: `radial-gradient(circle, ${member.gradient.split(',')[1]} 0%, transparent 70%)` }}></div>

            <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
              {/* Photo Area */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-600 to-primary-400 opacity-20 blur-2xl"></div>
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-3xl border-2 border-white/50 dark:border-white/10 shadow-2xl" />
                ) : (
                  <div 
                    className="w-full h-full rounded-3xl flex items-center justify-center text-6xl text-white font-bold shadow-2xl border border-white/20"
                    style={{ background: member.gradient }}
                  >
                    {member.initials}
                  </div>
                )}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700">
                  <span className="text-2xl">💼</span>
                </div>
              </div>

              {/* Info Area */}
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 border-b border-gray-200 dark:border-white/10 pb-6">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-gray-900 dark:text-white mb-2">{member.name}</h1>
                    <p className="text-xl md:text-2xl text-transparent bg-clip-text font-bold" style={{ backgroundImage: member.gradient }}>{member.role}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-zinc-700 shadow-sm transition-all hover:-translate-y-1">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 text-[#0077b5] rounded-xl border border-gray-200 dark:border-zinc-700 shadow-sm transition-all hover:-translate-y-1">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm font-medium mb-8">
                  {member.location && (
                    <span className="flex items-center gap-2 bg-white/50 dark:bg-black/40 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300">
                      <MapPin size={16} className="text-primary-500" /> {member.location}
                    </span>
                  )}
                  {member.yearsExperience && (
                    <span className="flex items-center gap-2 bg-white/50 dark:bg-black/40 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300">
                      <Briefcase size={16} className="text-primary-500" /> {member.yearsExperience} Experience
                    </span>
                  )}
                </div>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          
          {/* Left Column (Skills & Timeline) */}
          <div className="xl:col-span-4 space-y-10">
            {/* Detailed Skills Matrix */}
            <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-white/60 dark:bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white dark:border-white/10 shadow-xl">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
                  <Award className="text-primary-500" /> Technical Arsenal
                </h2>
                <div className="space-y-8">
                  {member.detailedSkills?.map((skillGroup, idx) => (
                    <div key={idx} className="relative">
                      <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        {skillGroup.category}
                        <div className="h-px flex-1 bg-gray-200 dark:bg-white/10"></div>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map(item => (
                          <span key={item} className="px-3 py-1.5 text-sm font-semibold bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 rounded-lg shadow-sm hover:border-primary-400 transition-colors cursor-default">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Right Column (Experience & Projects) */}
          <div className="xl:col-span-8 space-y-10">
            
            {/* Experience Timeline */}
            <MotionDiv initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="bg-white/60 dark:bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white dark:border-white/10 shadow-xl">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
                  <Calendar className="text-primary-500" /> Professional Journey
                </h2>
                
                <div className="relative pl-4 border-l-2 border-gray-200 dark:border-zinc-700 space-y-10">
                  {member.experience?.map((exp, idx) => (
                    <div key={idx} className="relative group">
                      <div className={`absolute -left-[23px] top-1 h-3 w-3 rounded-full border-2 ${exp.current ? 'bg-primary-500 border-primary-100 dark:border-primary-900 shadow-[0_0_12px_rgba(59,130,246,0.6)]' : 'bg-gray-300 dark:bg-zinc-600 border-white dark:border-zinc-800'} transition-all group-hover:scale-150`}></div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                          {exp.current && (
                            <span className="text-xs font-bold px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-md">Present</span>
                          )}
                        </div>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-1">{exp.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">{exp.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            {/* Projects Showcase */}
            {member.projects && member.projects.length > 0 && (
              <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white dark:border-white/10 shadow-xl">
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
                    <FolderGit2 className="text-primary-500" /> Featured Projects
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {member.projects.map((project) => (
                      <div key={project.id} className="group flex flex-col bg-white dark:bg-zinc-800/80 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-md hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1">
                        <div className="mb-4">
                          <span className="text-xs font-black text-primary-600 dark:text-primary-400 uppercase tracking-widest block mb-2">{project.category}</span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">Tech Stack</p>
                          <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-700 dark:text-gray-200">
                            {project.technologies.split(',').map((tech: string) => (
                              <span key={tech} className="bg-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md">{tech.trim()}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
