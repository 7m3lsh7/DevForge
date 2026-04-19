'use server';
import { cookies } from 'next/headers';

export async function loginAction(password: string) {
  if (password === 'admin123') { // Hardcoded for internal use per requirement
    const cookieStore = await cookies();
    cookieStore.set('admin_auth', 'true', { secure: true, httpOnly: true, path: '/' });
    return true;
  }
  return false;
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_auth');
}
