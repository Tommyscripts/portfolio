import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseSize: number;
  baseAlpha: number;
  twinkleFreq: number;
  twinklePhase: number;
};

type Dust = { x: number; y: number; size: number; alpha: number };
type BigStar = { x: number; y: number; vx: number; vy: number; size: number; color: { r: number; g: number; b: number } };

const ParticlesBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const dustRef = useRef<Dust[]>([]);
  const bigRef = useRef<BigStar[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvasCurrent = canvasRef.current;
    if (!canvasCurrent) return;
    const canvasEl = canvasCurrent as HTMLCanvasElement;
    const ctx = canvasEl.getContext("2d", { alpha: true })!;
    let w = Math.max(window.innerWidth, 1);
    let h = Math.max(window.innerHeight, 1);
    const dpr = window.devicePixelRatio || 1;

    // removed noise canvas generation — keep background clean

    function initParticles() {
      const area = w * h;
      const starCount = Math.min(1200, Math.max(350, Math.floor(area / 5000)));
      const dustCount = Math.min(1400, Math.max(300, Math.floor(area / 2500)));
      const bigCount = Math.min(40, Math.max(12, Math.floor(area / 60000)));

      const particles: Particle[] = [];
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 2.6 + 0.3;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          baseSize: size,
          baseAlpha: 0.15 + Math.random() * 0.9,
          twinkleFreq: 0.001 + Math.random() * 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
      particlesRef.current = particles;

      const dust: Dust[] = [];
      for (let i = 0; i < dustCount; i++) {
        dust.push({ x: Math.random() * w, y: Math.random() * h, size: Math.random() * 1.6, alpha: 0.01 + Math.random() * 0.06 });
      }
      dustRef.current = dust;

      const bigs: BigStar[] = [];
      for (let i = 0; i < bigCount; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const size = 1.6 + Math.random() * 3.8;
        const color = mixColor(x, w);
        bigs.push({ x, y, vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12, size, color });
      }
      bigRef.current = bigs;

      // no noise canvas — background kept clean
    }

    function resize() {
      w = Math.max(window.innerWidth, 1);
      h = Math.max(window.innerHeight, 1);
      canvasEl.width = Math.round(w * dpr);
      canvasEl.height = Math.round(h * dpr);
      canvasEl.style.width = `${w}px`;
      canvasEl.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function mixColor(x: number, width: number) {
      const blue = { r: 102, g: 204, b: 255 };
      const red = { r: 255, g: 26, b: 26 };
      const nx = x / width;
      const left = 0.5 - 0.045;
      const right = 0.5 + 0.045;
      let t;
      if (nx <= left) t = 0;
      else if (nx >= right) t = 1;
      else t = (nx - left) / (right - left);
      return {
        r: Math.round(lerp(blue.r, red.r, t)),
        g: Math.round(lerp(blue.g, red.g, t)),
        b: Math.round(lerp(blue.b, red.b, t)),
      };
    }

    resize();
    window.addEventListener("resize", resize);

    let lastTime = performance.now();

    function frame(now: number) {
      const dt = now - lastTime;
      lastTime = now;
      ctx.clearRect(0, 0, w, h);

      // film grain removed — drawing stars on a clean background

      // dust (background specks)
      ctx.globalCompositeOperation = "source-over";
      for (const d of dustRef.current) {
        d.x += (Math.random() - 0.5) * 0.4;
        d.y += (Math.random() - 0.5) * 0.4;
        if (d.x < -10) d.x = w + 10;
        if (d.x > w + 10) d.x = -10;
        if (d.y < -10) d.y = h + 10;
        if (d.y > h + 10) d.y = -10;
        ctx.fillStyle = `rgba(255,255,255,${d.alpha})`;
        ctx.fillRect(d.x, d.y, d.size, d.size);
      }

      // small stars
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const t = now * p.twinkleFreq + p.twinklePhase;
        const tw = 0.5 + 0.5 * Math.sin(t);
        const curAlpha = Math.max(0.02, Math.min(1, p.baseAlpha * tw));

        const color = mixColor(p.x, w);

        // core
        ctx.globalCompositeOperation = "source-over";
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${curAlpha})`;
        ctx.arc(p.x, p.y, p.baseSize, 0, Math.PI * 2);
        ctx.fill();

        // colored glow
        ctx.globalCompositeOperation = "lighter";
        const radius = p.baseSize * (3.5 + Math.random() * 3);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        g.addColorStop(0, `rgba(${color.r},${color.g},${color.b},${Math.min(0.22, curAlpha * 0.6)})`);
        g.addColorStop(1, `rgba(${color.r},${color.g},${color.b},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // big stars with streaks
      ctx.globalCompositeOperation = "lighter";
      for (const b of bigRef.current) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -20) b.x = w + 20;
        if (b.x > w + 20) b.x = -20;
        if (b.y < -20) b.y = h + 20;
        if (b.y > h + 20) b.y = -20;

        // bright core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,0.95)`;
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fill();

        // colored halo
        const haloR = b.size * 10;
        const hg = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, haloR);
        hg.addColorStop(0, `rgba(${b.color.r},${b.color.g},${b.color.b},0.3)`);
        hg.addColorStop(0.6, `rgba(${b.color.r},${b.color.g},${b.color.b},0.09)`);
        hg.addColorStop(1, `rgba(${b.color.r},${b.color.g},${b.color.b},0)`);
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(b.x, b.y, haloR, 0, Math.PI * 2);
        ctx.fill();

        // short horizontal streak
        ctx.strokeStyle = `rgba(${b.color.r},${b.color.g},${b.color.b},0.12)`;
        ctx.lineWidth = Math.max(1, b.size * 0.6);
        ctx.beginPath();
        ctx.moveTo(b.x - b.size * 6, b.y + (Math.random() - 0.5) * 1.5);
        ctx.lineTo(b.x + b.size * 6, b.y + (Math.random() - 0.5) * 1.5);
        ctx.stroke();
      }

      // subtle horizontal scanlines and glitch bands
      ctx.globalCompositeOperation = "source-over";
      const scanCount = Math.min(80, Math.floor(h / 10));
      for (let i = 0; i < scanCount; i += 6) {
        const y = i + (Math.sin(now * 0.0008 + i) * 2) + 6;
        const lineAlpha = 0.006 + (Math.abs(Math.sin(now * 0.0003 + i)) * 0.01);
        ctx.fillStyle = `rgba(255,255,255,${lineAlpha})`;
        ctx.fillRect(0, y, w, 1);
      }

      // center seam removed

      // vignette
      ctx.globalCompositeOperation = "multiply";
      const vignette = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) / 3, w / 2, h / 2, Math.max(w, h) / 1.1);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.6)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        id="particles-gradient"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: `radial-gradient(1200px 600px at 15% 35%, rgba(102,204,255,0.06) 0%, rgba(0,0,0,0) 14%), radial-gradient(1200px 600px at 85% 65%, rgba(255,26,26,0.06) 0%, rgba(0,0,0,0) 14%), linear-gradient(90deg, #030407 0%, #070608 100%)`,
        }}
      />

      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 3, pointerEvents: "none" }} />
    </>
  );
};

export default ParticlesBg;
