'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

export default function AntigravityBackground() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    setIsClient(true);
    const generateParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const colors = ['#3b82f6', '#8b5cf6', '#d946ef', '#1e3a8a', '#4c1d95'];
      
      const newParticles: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: Math.random() * 80 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] min-h-screen w-full transition-colors duration-700 overflow-hidden bg-gray-50 dark:bg-[#0f0f11]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Grid Pattern overlay giving it an enterprise technical look */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay"></div>

      {isClient && particles.map(p => (
        <ParticleElement key={p.id} particle={p} mouseRef={mouseRef} />
      ))}
    </div>
  );
}

function ParticleElement({ particle, mouseRef }: { particle: Particle, mouseRef: any }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Custom gravity/physics values
  const pos = useRef({ x: particle.x, y: particle.y });
  const vel = useRef({ vx: particle.vx, vy: particle.vy });

  useAnimationFrame(() => {
    if (!ref.current) return;
    
    // Move particle
    pos.current.x += vel.current.vx;
    pos.current.y += vel.current.vy;

    // Boundary check so they bounce
    if (pos.current.x < -100) vel.current.vx *= -1;
    if (pos.current.x > window.innerWidth + 100) vel.current.vx *= -1;
    if (pos.current.y < -100) vel.current.vy *= -1;
    if (pos.current.y > window.innerHeight + 100) vel.current.vy *= -1;

    // Mouse repulsion
    const dx = mouseRef.current.x - pos.current.x;
    const dy = mouseRef.current.y - pos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Repulsion radius
    const maxDist = 200;
    if (dist < maxDist) {
      const force = (maxDist - dist) / maxDist;
      pos.current.x -= (dx / dist) * force * 5;
      pos.current.y -= (dy / dist) * force * 5;
    }

    ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
  });

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 rounded-full blur-[60px] mix-blend-screen pointer-events-none transition-transform opacity-60 dark:opacity-30 will-change-transform"
      style={{
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color
      }}
    />
  );
}
