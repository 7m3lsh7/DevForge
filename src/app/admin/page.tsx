import { cookies } from 'next/headers';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import { teamMembers, projects } from '@/lib/data';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin_auth')?.value === 'true';

  if (!isAdmin) {
    return <AdminLogin />;
  }

  return (
    <AdminDashboard
      initialMembers={teamMembers}
      initialProjects={projects}
      initialSettings={{}}
    />
  );
}