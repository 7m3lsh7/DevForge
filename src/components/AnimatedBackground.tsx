'use client';
import { useTheme } from 'next-themes';

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className={`fixed inset-0 z-[-1] min-h-screen w-full transition-colors duration-700 pointer-events-none ${isDark ? 'bg-[#0f0f11]' : 'bg-white'}`}>
      {/* Light-weight CSS Blob / Gradient replacing the heavy 3D effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-40 mix-blend-screen bg-primary-600 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full blur-[120px] opacity-40 mix-blend-screen bg-primary-800 animate-blob" style={{ animationDelay: '2000ms' }}></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full blur-[100px] opacity-30 mix-blend-screen bg-primary-500 animate-blob" style={{ animationDelay: '4000ms' }}></div>

      {/* Grid Pattern overlay giving it an enterprise technical look */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
    </div>
  );
}
