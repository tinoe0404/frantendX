"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  phase: number;
  speed: number;
  ampX: number;
  ampY: number;
}

interface Edge {
  from: number;
  to: number;
}

interface ExclusionBox {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

interface ConstellationProps {
  exclusionRefs?: (React.RefObject<HTMLElement | null> | null)[];
}

function lineIntersectsBox(x1: number, y1: number, x2: number, y2: number, b: ExclusionBox): boolean {
  // If either endpoint is inside the box
  if (x1 >= b.left && x1 <= b.right && y1 >= b.top && y1 <= b.bottom) return true;
  if (x2 >= b.left && x2 <= b.right && y2 >= b.top && y2 <= b.bottom) return true;

  // Bounding box pre-check
  if (Math.max(x1, x2) < b.left || Math.min(x1, x2) > b.right ||
      Math.max(y1, y2) < b.top  || Math.min(y1, y2) > b.bottom) {
    return false;
  }

  const ccw = (ax: number, ay: number, bx: number, by: number, cx: number, cy: number) =>
    (cy - ay) * (bx - ax) > (by - ay) * (cx - ax);

  const segIntersect = (ax: number, ay: number, bx: number, by: number, cx: number, cy: number, dx: number, dy: number) =>
    ccw(ax, ay, cx, cy, dx, dy) !== ccw(bx, by, cx, cy, dx, dy) &&
    ccw(ax, ay, bx, by, cx, cy) !== ccw(ax, ay, bx, by, dx, dy);

  return (
    segIntersect(x1, y1, x2, y2, b.left, b.top, b.right, b.top) ||
    segIntersect(x1, y1, x2, y2, b.right, b.top, b.right, b.bottom) ||
    segIntersect(x1, y1, x2, y2, b.right, b.bottom, b.left, b.bottom) ||
    segIntersect(x1, y1, x2, y2, b.left, b.bottom, b.left, b.top)
  );
}

function isInsideExclusion(x: number, y: number, boxes: ExclusionBox[]): boolean {
  for (let i = 0; i < boxes.length; i++) {
    const b = boxes[i];
    if (x >= b.left && x <= b.right && y >= b.top && y <= b.bottom) {
      return true;
    }
  }
  return false;
}

function lineIntersectsAnyBox(x1: number, y1: number, x2: number, y2: number, boxes: ExclusionBox[]): boolean {
  for (let i = 0; i < boxes.length; i++) {
    if (lineIntersectsBox(x1, y1, x2, y2, boxes[i])) {
      return true;
    }
  }
  return false;
}

export function ConstellationBackground({ exclusionRefs }: ConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | undefined;
    let width = 0;
    let height = 0;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;

    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const solitaryDots: { x: number; y: number; baseX: number; baseY: number; r: number; phase: number }[] = [];

    let cachedBoxes: ExclusionBox[] = [];
    let lastBoxUpdateTime = -1000;

    function getExclusionBoxes(): ExclusionBox[] {
      if (!canvas || !exclusionRefs) return [];
      const canvasRect = canvas.getBoundingClientRect();
      const boxes: ExclusionBox[] = [];

      for (const ref of exclusionRefs) {
        if (!ref) continue;
        const el = ref.current;
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) {
          boxes.push({
            left: r.left - canvasRect.left - 24,
            top: r.top - canvasRect.top - 24,
            right: r.right - canvasRect.left + 24,
            bottom: r.bottom - canvasRect.top + 24,
          });
        }
      }
      return boxes;
    }

    function setupScene() {
      nodes.length = 0;
      edges.length = 0;
      solitaryDots.length = 0;

      // Cluster 1: Top Right Faceted Constellation (max dot radius 2px)
      const c1Base = nodes.length;
      const c1Center = { x: width * 0.84, y: height * 0.14 };
      const c1Offsets = [
        { x: -65, y: -25, r: 1.8 },
        { x: -20, y: -45, r: 2.0 },
        { x: 45, y: -20, r: 1.9 },
        { x: 65, y: 35, r: 2.0 },
        { x: -5, y: 40, r: 1.7 },
        { x: -70, y: 15, r: 2.0 },
        { x: 10, y: -5, r: 1.5 },
      ];
      c1Offsets.forEach((pt, i) => {
        nodes.push({
          x: c1Center.x + pt.x,
          y: c1Center.y + pt.y,
          baseX: c1Center.x + pt.x,
          baseY: c1Center.y + pt.y,
          radius: Math.min(2.0, pt.r),
          phase: i * 0.9,
          speed: 0.0008 + i * 0.0002,
          ampX: 8,
          ampY: 10,
        });
      });
      edges.push(
        { from: c1Base + 0, to: c1Base + 1 },
        { from: c1Base + 1, to: c1Base + 2 },
        { from: c1Base + 2, to: c1Base + 3 },
        { from: c1Base + 3, to: c1Base + 4 },
        { from: c1Base + 4, to: c1Base + 5 },
        { from: c1Base + 5, to: c1Base + 0 },
        { from: c1Base + 1, to: c1Base + 6 },
        { from: c1Base + 3, to: c1Base + 6 },
        { from: c1Base + 5, to: c1Base + 6 },
        { from: c1Base + 0, to: c1Base + 6 }
      );

      // Cluster 2: Bottom Center 3D Faceted Polyhedron Mesh (max dot radius 2px)
      const c2Base = nodes.length;
      const c2Center = { x: width * 0.52, y: height * 0.86 };
      const c2Offsets = [
        { x: -90, y: 15, r: 1.9 },
        { x: -45, y: -65, r: 2.0 },
        { x: 25, y: -75, r: 1.8 },
        { x: 75, y: -25, r: 2.0 },
        { x: 95, y: 35, r: 1.8 },
        { x: 20, y: 70, r: 2.0 },
        { x: -55, y: 55, r: 1.7 },
        { x: 0, y: -5, r: 1.5 },
      ];
      c2Offsets.forEach((pt, i) => {
        nodes.push({
          x: c2Center.x + pt.x,
          y: c2Center.y + pt.y,
          baseX: c2Center.x + pt.x,
          baseY: c2Center.y + pt.y,
          radius: Math.min(2.0, pt.r),
          phase: 1.5 + i * 0.8,
          speed: 0.0007 + i * 0.0002,
          ampX: 10,
          ampY: 12,
        });
      });
      edges.push(
        { from: c2Base + 0, to: c2Base + 1 },
        { from: c2Base + 1, to: c2Base + 2 },
        { from: c2Base + 2, to: c2Base + 3 },
        { from: c2Base + 3, to: c2Base + 4 },
        { from: c2Base + 4, to: c2Base + 5 },
        { from: c2Base + 5, to: c2Base + 6 },
        { from: c2Base + 6, to: c2Base + 0 },
        { from: c2Base + 0, to: c2Base + 7 },
        { from: c2Base + 1, to: c2Base + 7 },
        { from: c2Base + 3, to: c2Base + 7 },
        { from: c2Base + 4, to: c2Base + 7 },
        { from: c2Base + 5, to: c2Base + 7 },
        { from: c2Base + 6, to: c2Base + 7 },
        { from: c2Base + 1, to: c2Base + 5 },
        { from: c2Base + 0, to: c2Base + 4 }
      );

      // Cluster 3: Bottom Right (Glowing orange dot removed; max dot radius 2px)
      const c3Base = nodes.length;
      const c3Center = { x: width * 0.82, y: height * 0.87 };
      const c3Offsets = [
        { x: -45, y: 35, r: 1.9 },
        { x: -15, y: -30, r: 2.0 },
        { x: 30, y: -65, r: 1.8 },
        { x: 60, y: 5, r: 2.0 },
      ];
      c3Offsets.forEach((pt, i) => {
        nodes.push({
          x: c3Center.x + pt.x,
          y: c3Center.y + pt.y,
          baseX: c3Center.x + pt.x,
          baseY: c3Center.y + pt.y,
          radius: Math.min(2.0, pt.r),
          phase: 2.2 + i * 1.1,
          speed: 0.0009 + i * 0.0003,
          ampX: 7,
          ampY: 9,
        });
      });
      edges.push(
        { from: c3Base + 0, to: c3Base + 1 },
        { from: c3Base + 1, to: c3Base + 2 },
        { from: c3Base + 1, to: c3Base + 3 },
        { from: c3Base + 0, to: c3Base + 3 }
      );

      // Cluster 4: Top Center / Left (max dot radius 2px)
      const c4Base = nodes.length;
      const c4Center = { x: width * 0.46, y: height * 0.16 };
      const c4Offsets = [
        { x: -50, y: -25, r: 2.0 },
        { x: 10, y: 40, r: 1.7 },
        { x: 45, y: -30, r: 1.9 },
      ];
      c4Offsets.forEach((pt, i) => {
        nodes.push({
          x: c4Center.x + pt.x,
          y: c4Center.y + pt.y,
          baseX: c4Center.x + pt.x,
          baseY: c4Center.y + pt.y,
          radius: Math.min(2.0, pt.r),
          phase: 3.0 + i * 0.7,
          speed: 0.0006 + i * 0.0002,
          ampX: 6,
          ampY: 8,
        });
      });
      edges.push(
        { from: c4Base + 0, to: c4Base + 1 },
        { from: c4Base + 1, to: c4Base + 2 }
      );

      // Cluster 5: Far Left Edge (Glowing orange dot removed; max dot radius 2px)
      const c5Base = nodes.length;
      const c5Center = { x: width * 0.08, y: height * 0.35 };
      const c5Offsets = [
        { x: -35, y: -60, r: 1.8 },
        { x: 20, y: -35, r: 2.0 },
        { x: 45, y: 35, r: 2.0 },
        { x: -10, y: 80, r: 1.7 },
        { x: -50, y: 25, r: 1.9 },
      ];
      c5Offsets.forEach((pt, i) => {
        nodes.push({
          x: c5Center.x + pt.x,
          y: c5Center.y + pt.y,
          baseX: c5Center.x + pt.x,
          baseY: c5Center.y + pt.y,
          radius: Math.min(2.0, pt.r),
          phase: 4.1 + i * 0.6,
          speed: 0.0007 + i * 0.0002,
          ampX: 7,
          ampY: 10,
        });
      });
      edges.push(
        { from: c5Base + 0, to: c5Base + 1 },
        { from: c5Base + 1, to: c5Base + 2 },
        { from: c5Base + 2, to: c5Base + 3 },
        { from: c5Base + 3, to: c5Base + 4 },
        { from: c5Base + 4, to: c5Base + 0 },
        { from: c5Base + 1, to: c5Base + 3 }
      );

      // Scattered Ambient Standalone Dots (max dot radius 2px)
      const dotCoords = [
        { rx: 0.68, ry: 0.15, r: 1.8 },
        { rx: 0.94, ry: 0.32, r: 2.0 },
        { rx: 0.72, ry: 0.42, r: 1.8 },
        { rx: 0.88, ry: 0.58, r: 2.0 },
        { rx: 0.62, ry: 0.68, r: 1.5 },
        { rx: 0.75, ry: 0.72, r: 1.8 },
        { rx: 0.38, ry: 0.78, r: 2.0 },
        { rx: 0.18, ry: 0.62, r: 1.5 },
        { rx: 0.05, ry: 0.75, r: 1.8 },
        { rx: 0.32, ry: 0.32, r: 1.8 },
      ];
      dotCoords.forEach((dot, idx) => {
        solitaryDots.push({
          x: width * dot.rx,
          y: height * dot.ry,
          baseX: width * dot.rx,
          baseY: height * dot.ry,
          r: Math.min(2.0, dot.r),
          phase: idx * 1.3,
        });
      });
    }

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.scale(dpr, dpr);
      setupScene();
      cachedBoxes = getExclusionBoxes();
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas?.getBoundingClientRect();
      if (!rect) return;
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      targetMouseX = (mouseX / width - 0.5) * 20;
      targetMouseY = (mouseY / height - 0.5) * 20;
    }

    function render(time: number) {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Refresh exclusion boxes during entrance animations (first 2s) and periodically thereafter
      const updateInterval = time < 2000 ? 50 : 500;
      if (time - lastBoxUpdateTime > updateInterval || cachedBoxes.length === 0) {
        cachedBoxes = getExclusionBoxes();
        lastBoxUpdateTime = time;
      }

      const isDark = document.documentElement.classList.contains("dark");
      
      // Hairline stroke opacity 0.22 (within 0.2-0.25)
      const lineStroke = isDark ? "rgba(250, 247, 244, 0.22)" : "rgba(35, 30, 25, 0.22)";
      // Dots dark-gray at opacity 0.35
      const nodeFill = isDark ? "rgba(250, 247, 244, 0.35)" : "rgba(35, 30, 25, 0.35)";
      const dotFill = isDark ? "rgba(250, 247, 244, 0.35)" : "rgba(35, 30, 25, 0.35)";

      // Smooth mouse parallax interpolation
      smoothMouseX += (targetMouseX - smoothMouseX) * 0.05;
      smoothMouseY += (targetMouseY - smoothMouseY) * 0.05;

      // Update positions with subtle floating harmonic motion
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const t = time * n.speed + n.phase;
        n.x = n.baseX + Math.sin(t) * n.ampX + smoothMouseX;
        n.y = n.baseY + Math.cos(t * 1.1) * n.ampY + smoothMouseY;
      }

      // Draw all connecting lines (edges) - skip lines connected to excluded nodes or crossing exclusion boxes
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = lineStroke;
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        const p1 = nodes[e.from];
        const p2 = nodes[e.to];
        if (!p1 || !p2) continue;
        // Skip edge if either endpoint is in exclusion zone
        if (isInsideExclusion(p1.x, p1.y, cachedBoxes) || isInsideExclusion(p2.x, p2.y, cachedBoxes)) {
          continue;
        }
        // Skip edge if line intersects exclusion zone
        if (lineIntersectsAnyBox(p1.x, p1.y, p2.x, p2.y, cachedBoxes)) {
          continue;
        }
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      }
      ctx.stroke();

      // Draw solitary dots - skip if within 24px of exclusion boxes
      for (let i = 0; i < solitaryDots.length; i++) {
        const d = solitaryDots[i];
        const t = time * 0.0006 + d.phase;
        d.x = d.baseX + Math.sin(t) * 5 + smoothMouseX * 0.7;
        d.y = d.baseY + Math.cos(t) * 6 + smoothMouseY * 0.7;

        if (isInsideExclusion(d.x, d.y, cachedBoxes)) {
          continue;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = dotFill;
        ctx.fill();
      }

      // Draw constellation nodes - skip if within 24px of exclusion boxes (max radius 2px, opacity 0.35)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (isInsideExclusion(n.x, n.y, cachedBoxes)) {
          continue;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeFill;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!prefersReducedMotion.matches) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      render(0);
    }

    return () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [exclusionRefs]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
