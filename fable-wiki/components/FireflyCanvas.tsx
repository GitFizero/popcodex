import { useEffect, useRef, memo } from 'react';

const FIREFLY_COLORS = ['#22C55E', '#FACC15', '#86EFAC', '#FDE68A', '#4ADE80'];

interface Firefly {
  x: number; y: number; size: number; color: string;
  speed: number; drift: number; phase: number;
  lifetime: number; maxLifetime: number; opacity: number;
  pulseSpeed: number;
}

const FireflyCanvas = memo(({ count = 35 }: { count?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firefliesRef = useRef<Firefly[]>([]);
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

    const createFirefly = (): Firefly => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1 + Math.random() * 2,
      color: FIREFLY_COLORS[Math.floor(Math.random() * FIREFLY_COLORS.length)],
      speed: 0.1 + Math.random() * 0.3,
      drift: (Math.random() - 0.5) * 0.8,
      phase: Math.random() * Math.PI * 2,
      lifetime: 0,
      maxLifetime: 300 + Math.random() * 400,
      opacity: 0,
      pulseSpeed: 0.02 + Math.random() * 0.03,
    });

    const isMobile = window.innerWidth < 768;
    const maxP = isMobile ? 12 : count;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { return; }

    for (let i = 0; i < maxP; i++) {
      const f = createFirefly();
      f.lifetime = Math.random() * f.maxLifetime;
      firefliesRef.current.push(f);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';

      const fireflies = firefliesRef.current;
      for (let i = fireflies.length - 1; i >= 0; i--) {
        const f = fireflies[i];
        f.lifetime++;
        const progress = f.lifetime / f.maxLifetime;

        // Pulsing glow effect like real fireflies
        const pulse = Math.sin(f.lifetime * f.pulseSpeed) * 0.5 + 0.5;

        if (progress < 0.1) f.opacity = (progress / 0.1) * 0.7 * pulse;
        else if (progress > 0.8) f.opacity = ((1 - progress) / 0.2) * 0.7 * pulse;
        else f.opacity = 0.7 * pulse;

        // Gentle wandering motion
        f.x += Math.sin(f.phase + f.lifetime * 0.01) * f.drift;
        f.y += Math.cos(f.phase + f.lifetime * 0.008) * f.speed - 0.05;

        // Draw glow
        const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 4);
        gradient.addColorStop(0, f.color);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = f.opacity * 0.3;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = f.color;
        ctx.globalAlpha = f.opacity;
        ctx.fill();

        if (f.lifetime >= f.maxLifetime || f.y < -20 || f.x < -20 || f.x > canvas.width + 20) {
          fireflies[i] = createFirefly();
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

FireflyCanvas.displayName = 'FireflyCanvas';
export default FireflyCanvas;
