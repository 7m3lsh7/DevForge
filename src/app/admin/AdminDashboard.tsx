'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { addMember, deleteMember } from '../actions/members';
import { addProject, deleteProject } from '../actions/projects';
import { saveSettings } from '../actions/settings';
import { logoutAction } from '../actions/auth';
import { Users, LayoutDashboard, Settings, LogOut, Plus, Trash2, Edit, X, Briefcase } from 'lucide-react';

export default function AdminDashboard({ initialMembers, initialProjects, initialSettings }: { initialMembers: any[], initialProjects: any[], initialSettings: any }) {
  const router = useRouter();
  const [members, setMembers] = useState(initialMembers);
  const [projects, setProjects] = useState(initialProjects);
  const [activeTab, setActiveTab] = useState('members');
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  
  const [memberForm, setMemberForm] = useState({ 
    name: '', 
    role: '', 
    bio: '', 
    yearsExperience: 0,
    skills: '', 
    github: '', 
    linkedin: '',
    selectedProjects: [] as string[]
  });
  const [projectForm, setProjectForm] = useState({ title: '', shortDesc: '', category: '', technologies: '', results: '' });

  const [siteSettings, setSiteSettings] = useState({
    hero_title: initialSettings.hero_title || 'Building Enterprise Solutions',
    hero_subtitle: initialSettings.hero_subtitle || 'We are a collective of specialized developers, solving complex engineering problems through high-end web & mobile applications.',
    about_vision: initialSettings.about_vision || '',
    about_mission: initialSettings.about_mission || '',
  });

  const handleLogout = async () => {
    await logoutAction();
    router.refresh();
  };

  const handleDeleteMember = async (id: string) => {
    if (confirm('Are you sure you want to delete this member?')) {
      await deleteMember(id);
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse skills
    const skillsArray = memberForm.skills.split(',').map(s => ({ name: s.trim() })).filter(s => s.name);
    
    // Parse social links
    const socialLinks = [];
    if (memberForm.github) socialLinks.push({ platform: 'GitHub', url: memberForm.github });
    if (memberForm.linkedin) socialLinks.push({ platform: 'LinkedIn', url: memberForm.linkedin });

    const newM = await addMember({
      name: memberForm.name,
      role: memberForm.role,
      bio: memberForm.bio,
      yearsExperience: Number(memberForm.yearsExperience),
      skills: skillsArray,
      socialLinks: socialLinks,
      projectIds: memberForm.selectedProjects
    });
    setMembers([...members, newM]);
    setShowMemberModal(false);
    setMemberForm({ 
      name: '', role: '', bio: '', yearsExperience: 0, 
      skills: '', github: '', linkedin: '', selectedProjects: [] 
    });
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const newP = await addProject({
      title: projectForm.title,
      shortDesc: projectForm.shortDesc,
      category: projectForm.category,
      technologies: projectForm.technologies,
      results: projectForm.results,
    });
    setProjects([...projects, newP]);
    setShowProjectModal(false);
    setProjectForm({ title: '', shortDesc: '', category: '', technologies: '', results: '' });
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveSettings(siteSettings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-800 border-r border-gray-200 dark:border-zinc-700 p-6 flex flex-col h-screen sticky top-0 z-10">
        <div className="flex items-center gap-2 mb-10 text-primary-900 dark:text-primary-500 font-bold text-xl">
          <LayoutDashboard /> Admin Panel
        </div>
        
        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('members')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'members' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}
          >
            <Users size={18} /> Team Members
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'projects' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}
          >
            <Briefcase size={18} /> Projects
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}
          >
            <Settings size={18} /> Global Settings
          </button>
        </nav>

        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors mt-auto">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'members' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team Members</h2>
              <button onClick={() => setShowMemberModal(true)} className="flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <Plus size={16} /> Add Member
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
              <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-zinc-700/50 text-gray-700 dark:text-gray-200 uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Experience</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-zinc-700">
                  {members.map(member => (
                    <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-zinc-700/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{member.name}</td>
                      <td className="px-6 py-4">{member.role}</td>
                      <td className="px-6 py-4">{member.yearsExperience} Years</td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                        <button onClick={() => handleDeleteMember(member.id)} className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-md transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {members.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-gray-500">No team members found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio Projects</h2>
              <button onClick={() => setShowProjectModal(true)} className="flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <Plus size={16} /> Add Project
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
              <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-zinc-700/50 text-gray-700 dark:text-gray-200 uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-zinc-700">
                  {projects.map(project => (
                    <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-zinc-700/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{project.title}</td>
                      <td className="px-6 py-4">{project.category}</td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                        <button onClick={async () => {
                          if (confirm('Delete project?')) {
                            await deleteProject(project.id);
                            setProjects(projects.filter(p => p.id !== project.id));
                          }
                        }} className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-md transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Global Page Content CMS</h2>
            <form onSubmit={handleSaveSettings} className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 p-8 space-y-6 text-gray-800 dark:text-gray-200">
              <div className="space-y-4">
                <h3 className="font-bold border-b pb-2">Hero Section</h3>
                <div>
                  <label className="block text-sm font-medium mb-1">Hero Title</label>
                  <input 
                    type="text" 
                    value={siteSettings.hero_title}
                    onChange={e => setSiteSettings({...siteSettings, hero_title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 focus:ring-2 focus:ring-primary-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Hero Subtitle</label>
                  <textarea 
                    value={siteSettings.hero_subtitle}
                    onChange={e => setSiteSettings({...siteSettings, hero_subtitle: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 focus:ring-2 focus:ring-primary-600 outline-none"
                    rows={3}
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-bold border-b pb-2">About Section</h3>
                <div>
                  <label className="block text-sm font-medium mb-1">Our Vision</label>
                  <textarea 
                    value={siteSettings.about_vision}
                    onChange={e => setSiteSettings({...siteSettings, about_vision: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 focus:ring-2 focus:ring-primary-600 outline-none"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Our Mission</label>
                  <textarea 
                    value={siteSettings.about_mission}
                    onChange={e => setSiteSettings({...siteSettings, about_mission: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 focus:ring-2 focus:ring-primary-600 outline-none"
                    rows={3}
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-primary-900 text-white px-6 py-3 rounded-lg font-bold">
                Apply All Changes
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Modals */}
      {showMemberModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl w-full max-w-lg relative shadow-xl">
            <button onClick={() => setShowMemberModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Add Team Member</h2>
            <form onSubmit={handleAddMember} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input type="text" required value={memberForm.name} onChange={e => setMemberForm({...memberForm, name: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
                <input type="text" required value={memberForm.role} onChange={e => setMemberForm({...memberForm, role: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
                <textarea required value={memberForm.bio} onChange={e => setMemberForm({...memberForm, bio: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Years of Experience</label>
                <input type="number" required value={memberForm.yearsExperience} onChange={e => setMemberForm({...memberForm, yearsExperience: parseInt(e.target.value)})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">GitHub URL</label>
                  <input type="url" value={memberForm.github} onChange={e => setMemberForm({...memberForm, github: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" placeholder="https://github.com/..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LinkedIn URL</label>
                  <input type="url" value={memberForm.linkedin} onChange={e => setMemberForm({...memberForm, linkedin: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" placeholder="https://linkedin.com/in/..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Skills (comma separated)</label>
                <input type="text" value={memberForm.skills} onChange={e => setMemberForm({...memberForm, skills: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" placeholder="React, Java, Node.js" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assign Projects</label>
                <div className="max-h-32 overflow-y-auto border border-gray-300 dark:border-zinc-700 rounded-lg p-3 space-y-2 dark:bg-zinc-900">
                  {projects.map(p => (
                    <label key={p.id} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <input 
                        type="checkbox" 
                        checked={memberForm.selectedProjects.includes(p.id)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setMemberForm(prev => ({
                            ...prev,
                            selectedProjects: checked 
                              ? [...prev.selectedProjects, p.id]
                              : prev.selectedProjects.filter(id => id !== p.id)
                          }));
                        }}
                      />
                      {p.title}
                    </label>
                  ))}
                  {projects.length === 0 && <span className="text-gray-500 text-xs italic">No projects found. Add them in the Projects tab first.</span>}
                </div>
              </div>

              <button type="submit" className="w-full bg-primary-900 hover:bg-primary-800 text-white font-medium py-2 rounded-lg mt-4">
                Save Member
              </button>
            </form>
          </div>
        </div>
      )}

      {showProjectModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl w-full max-w-lg relative shadow-xl max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowProjectModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Add Portfolio Project</h2>
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Title</label>
                <input type="text" required value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                <select value={projectForm.category} onChange={e => setProjectForm({...projectForm, category: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white">
                  <option value="Web Application">Web Application</option>
                  <option value="Enterprise Platform">Enterprise Platform</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="SaaS Platform">SaaS Platform</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Short Description</label>
                <input type="text" required value={projectForm.shortDesc} onChange={e => setProjectForm({...projectForm, shortDesc: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Technologies (comma separated)</label>
                <input type="text" required value={projectForm.technologies} onChange={e => setProjectForm({...projectForm, technologies: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" placeholder="React, Next.js, Prisma" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Results/Impact (comma separated)</label>
                <textarea required value={projectForm.results} onChange={e => setProjectForm({...projectForm, results: e.target.value})} className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-900 dark:text-white" rows={3} placeholder="Increased speed by 50%, Reduced costs by 20%"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-900 hover:bg-primary-800 text-white font-medium py-3 rounded-lg mt-4 shadow-lg shadow-primary-900/20">
                Create Project
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
