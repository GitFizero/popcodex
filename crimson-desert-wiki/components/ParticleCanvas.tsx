import { useEffect, useRef, memo } from 'react';

const PARTICLE_COLORS = ['#FF6B35', '#E84A1A', '#C0392B', '#FFD700', '#FF8C42'];

interface Particle {
  x: number; y: number; size: number; color: string;
  speed: number; drift: number; phase: number;
  lifetime: number; maxLifetime: number; opacity: number;
}

const ParticleCanvas = memo(({ count = 40 }: { count?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };
    window.addEventListener('resize', debouncedResize);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 20,
      size: 1.5 + Math.random() * 2.5,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      speed: 0.3 + Math.random() * 0.8,
      drift: (Math.random() - 0.5) * 0.5,
      phase: Math.random() * Math.PI * 2,
      lifetime: 0,
      maxLifetime: 240 + Math.random() * 240,
      opacity: 0,
    });

    const isMobile = window.innerWidth < 768;
    const maxP = isMobile ? 15 : count;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { return; }

    for (let i = 0; i < maxP; i++) {
      const p = createParticle();
      p.lifetime = Math.random() * p.maxLifetime;
      p.y = canvas.height - (p.lifetime / p.maxLifetime) * canvas.height;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.lifetime++;
        const progress = p.lifetime / p.maxLifetime;
        
        if (progress < 0.1) p.opacity = progress / 0.1 * 0.8;
        else if (progress > 0.8) p.opacity = (1 - progress) / 0.2 * 0.8;
        else p.opacity = 0.8;

        p.y -= p.speed;
        p.x += Math.sin(p.phase + p.lifetime * 0.02) * p.drift;
        p.size *= 0.9995;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        if (p.lifetime >= p.maxLifetime || p.y < -10) {
          particles[i] = createParticle();
        }
      }
      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, willChange: 'contents' }}
      aria-hidden="true"
    />
  );
});

ParticleCanvas.displayName = 'ParticleCanvas';
export default ParticleCanvas;
