import React, { useEffect, useRef } from "react";

// Animated grayscale mesh-like background using blended radial gradients
const HeroBackground = () => {
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
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const initBlobs = () => {
      const count = Math.max(4, Math.floor((canvas.width / DPR) * (canvas.height / DPR) / 120000));
      blobsRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * (canvas.width / DPR),
        y: Math.random() * (canvas.height / DPR),
        r: (Math.random() * 120 + 120), // radius in px
        vx: (Math.random() * 0.4 + 0.2) * (Math.random() < 0.5 ? -1 : 1),
        vy: (Math.random() * 0.4 + 0.2) * (Math.random() < 0.5 ? -1 : 1),
        shade: Math.floor(Math.random() * 60) + 20, // 20-80 gray
        alpha: Math.random() * 0.25 + 0.15, // 0.15 - 0.4
      }));
    };

    const step = () => {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);

      // Draw darkening blobs; multiply makes greys darken the white base
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

        // update
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    resize();
    initBlobs();
    if (!(mqlReduce && mqlReduce.matches)) {
      rafRef.current = requestAnimationFrame(step);
    } else {
      // draw one static frame respecting reduced motion
      step();
      cancelAnimationFrame(rafRef.current);
    }

    const onResize = () => { resize(); initBlobs(); };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    />
  );
};

export default HeroBackground;
