'use client';

import { useEffect, useRef } from 'react';

const GtaParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const maxParticles = isMobile ? 10 : 20;
    const targetFps = isMobile ? 20 : 24;
    const frameInterval = 1000 / targetFps;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#FF1F8F', '#00E5FF', '#FFD600', '#8B5CF6', '#FF6B1A'];

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; life: number; maxLife: number;
    }

    const particles: Particle[] = [];
    const spawnParticle = () => {
      if (particles.length >= maxParticles) return;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.15 + Math.random() * 0.5),
        size: 1.5 + Math.random() * 2.5,
        color,
        life: 0,
        maxLife: 300 + Math.random() * 400,
      });
    };

    const initialCount = isMobile ? 6 : 15;
    for (let i = 0; i < initialCount; i++) {
      spawnParticle();
      particles[particles.length - 1].y = Math.random() * canvas.height;
      particles[particles.length - 1].life = Math.random() * 200;
    }

    let animId: number;
    let lastTime = 0;
    let paused = false;

    const handleVisibility = () => { paused = document.hidden; };
    document.addEventListener('visibilitychange', handleVisibility);

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);
      if (paused) return;
      if (now - lastTime < frameInterval) return;
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';

      if (Math.random() < 0.08) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha = progress < 0.1 ? progress * 10 : progress > 0.8 ? (1 - progress) * 5 : 1;

        if (p.life > p.maxLife || p.y < -10) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = alpha * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const startTimeout = setTimeout(() => {
      animId = requestAnimationFrame(animate);
    }, 2000);

    return () => {
      clearTimeout(startTimeout);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default GtaParticles;
