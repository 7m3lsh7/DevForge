
import { cookies } from "next/headers";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin_auth")?.value === "true";

  if (!isAdmin) {
    return <AdminLogin />;
  }
const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  `https://${process.env.VERCEL_URL}`;

  const res = await fetch(`${baseUrl}/api/admin/data`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <AdminDashboard
      initialMembers={data.members}
      initialProjects={data.projects}
      initialSettings={data.settings}
    />
  );
}