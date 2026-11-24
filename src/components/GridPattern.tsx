"use client";

import { useEffect, useRef } from "react";

export function GridPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number = 0;
    let time = 0;

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx!.scale(dpr, dpr);
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      const spacing = 48;
      const dotSize = 0.85;

      for (let x = 0; x < w; x += spacing) {
        for (let y = 0; y < h; y += spacing) {
          const cx = w / 2;
          const cy = h / 2;
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          const maxDist = Math.sqrt(cx ** 2 + cy ** 2);
          const fade = 1 - dist / maxDist;

          const wave = Math.sin(time * 0.4 + x * 0.008 + y * 0.008) * 0.25 + 0.75;
          const alpha = fade * wave * 0.12;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          // Subtle warm monochrome dots
          ctx.fillStyle = `rgba(242, 106, 56, ${Math.max(0, alpha)})`;
          ctx.fill();
        }
      }

      time += 0.012;
      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      cancelAnimationFrame(animationId);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.5 }}
    />
  );
}
