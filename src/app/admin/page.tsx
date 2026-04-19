import { cookies } from 'next/headers';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import { getMembers } from '../actions/members';
import { getProjects } from '../actions/projects';
import { getSettings } from '../actions/settings';
export const dynamic = "force-dynamic";
export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin_auth')?.value === 'true';

  if (!isAdmin) {
    return <AdminLogin />;
  }

  const initialMembers = await getMembers();
  const initialProjects = await getProjects();
  const initialSettings = await getSettings();

  return <AdminDashboard initialMembers={initialMembers} initialProjects={initialProjects} initialSettings={initialSettings} />;
}
