import React, { useEffect, useRef, useState } from "react";

// Global grayscale mesh-like background rendered to a fixed canvas
const GlobalBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const blobsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const mqlReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const initBlobs = () => {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;
      const area = w * h;
      const count = Math.max(5, Math.floor(area / 140000));
      const base = 212; // neutral-300
      blobsRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 140 + 140,
        vx: (Math.random() * 0.35 + 0.15) * (Math.random() < 0.5 ? -1 : 1),
        vy: (Math.random() * 0.35 + 0.15) * (Math.random() < 0.5 ? -1 : 1),
        shade: Math.max(120, Math.min(240, base + Math.floor((Math.random() - 0.5) * 60))),
        alpha: Math.random() * 0.18 + 0.12,
      }));
    };

    const draw = () => {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);

      // Multiply for subtle grayscale shading on white
      ctx.globalCompositeOperation = 'multiply';
      for (const b of blobsRef.current) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        const col = `rgba(${b.shade}, ${b.shade}, ${b.shade}, ${b.alpha})`;
        g.addColorStop(0, col);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();

        // Update motion with wrap-around
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); initBlobs(); };
    resize();
    initBlobs();
    if (!(mqlReduce && mqlReduce.matches)) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      draw();
      cancelAnimationFrame(rafRef.current);
    }
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Hide on devices up to 800px width
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(max-width: 799px)');
      const apply = () => setShow(!mq.matches);
      apply();
      const onChange = () => apply();
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }
  }, []);

  if (!show) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0"
      />
  );
};

export default GlobalBackground;
