'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { logoutAction } from '../actions/auth';
import { Users, LayoutDashboard, Briefcase, LogOut } from 'lucide-react';

export default function AdminDashboard({
  initialMembers,
  initialProjects,
}: {
  initialMembers: any[];
  initialProjects: any[];
  initialSettings: any;
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('members');

  const handleLogout = async () => {
    await logoutAction();
    router.refresh();
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
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors mt-auto"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'members' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team Members</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700">
                Read-only · Edit in <code className="text-xs">src/lib/data.ts</code>
              </span>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
              <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-zinc-700/50 text-gray-700 dark:text-gray-200 uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Skills</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-zinc-700">
                  {initialMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-zinc-700/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{member.name}</td>
                      <td className="px-6 py-4">{member.role}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {(member.skills as string[]).map((s: string) => (
                            <span key={s} className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 px-2 py-0.5 rounded-full">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio Projects</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700">
                Read-only · Edit in <code className="text-xs">src/lib/data.ts</code>
              </span>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
              <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-zinc-700/50 text-gray-700 dark:text-gray-200 uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Tags</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-zinc-700">
                  {initialProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-zinc-700/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{project.title}</td>
                      <td className="px-6 py-4">{project.category}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {(project.tags as string[]).map((t: string) => (
                            <span key={t} className="text-xs bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
