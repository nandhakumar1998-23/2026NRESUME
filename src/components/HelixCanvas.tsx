import React, { useEffect, useRef } from 'react';

interface RenderPrimitive {
  z: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export const HelixCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;
    let isVisible = true;

    let phase = 0.65;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    let targetPointerX = 0;
    let targetPointerY = 0;
    let smoothPointerX = 0;
    let smoothPointerY = 0;

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 480);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;
      scrollVelocity = Math.max(-0.08, Math.min(0.08, scrollVelocity + delta * 0.00035));
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isCoarsePointer) return;
      targetPointerX = (e.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      targetPointerY = (e.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (!isCoarsePointer && !prefersReducedMotion) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    const drawCapsuleSegment = (
      context: CanvasRenderingContext2D,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      thickness: number,
      depthFactor: number,
      withGoldCollar: boolean
    ) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.hypot(dx, dy);
      if (len < 1) return;

      const angle = Math.atan2(dy, dx);
      const shrink = Math.min(3.2, len * 0.12);
      const halfLen = Math.max(2, len * 0.5 - shrink);
      const midX = (x1 + x2) * 0.5;
      const midY = (y1 + y2) * 0.5;

      context.save();
      context.translate(midX, midY);
      context.rotate(angle);

      const alpha = 0.25 + depthFactor * 0.72;

      // Dark carbon-metallic cylinder body
      const grad = context.createLinearGradient(0, -thickness * 0.5, 0, thickness * 0.5);
      grad.addColorStop(0, `rgba(56, 189, 248, ${(0.36 * depthFactor).toFixed(3)})`);
      grad.addColorStop(0.22, `rgba(22, 33, 54, ${alpha.toFixed(3)})`);
      grad.addColorStop(0.62, `rgba(8, 12, 22, ${(alpha * 0.98).toFixed(3)})`);
      grad.addColorStop(1, `rgba(15, 23, 42, ${(alpha * 0.85).toFixed(3)})`);

      context.beginPath();
      context.roundRect(-halfLen, -thickness * 0.5, halfLen * 2, thickness, thickness * 0.46);
      context.fillStyle = grad;
      context.fill();

      // Subtle architectural specular edge highlight
      context.lineWidth = Math.max(0.75, 1.2 * depthFactor);
      context.strokeStyle = `rgba(125, 211, 252, ${(0.24 * depthFactor).toFixed(3)})`;
      context.stroke();

      // Precision amber/gold joint ring inspired by Scrolltide Helix
      if (withGoldCollar) {
        const ringW = Math.max(2.4, thickness * 0.24);
        context.fillStyle = `rgba(245, 166, 35, ${(0.35 + depthFactor * 0.6).toFixed(3)})`;
        context.beginPath();
        context.roundRect(halfLen - ringW - 1, -thickness * 0.45, ringW, thickness * 0.9, 1.5);
        context.fill();
      }

      context.restore();
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle cobalt-blueprint ambient radial field on right half
      const ambientGrad = ctx.createRadialGradient(
        width * 0.62,
        height * 0.44,
        20,
        width * 0.62,
        height * 0.44,
        Math.max(width, height) * 0.65
      );
      ambientGrad.addColorStop(0, 'rgba(20, 42, 78, 0.34)');
      ambientGrad.addColorStop(0.55, 'rgba(11, 21, 40, 0.14)');
      ambientGrad.addColorStop(1, 'rgba(6, 9, 17, 0)');
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      smoothPointerX += (targetPointerX - smoothPointerX) * 0.045;
      smoothPointerY += (targetPointerY - smoothPointerY) * 0.045;

      const nodeCount = width < 768 ? 22 : 30;
      const diagLength = Math.hypot(width, height) * 1.18;
      const helixRadius = Math.min(width, height) * (width < 768 ? 0.13 : 0.155);
      const diagonalAngle = Math.atan2(height * 0.92, width * 0.86);

      const centerX = width * (width < 768 ? 0.54 : 0.48) + smoothPointerX * 14;
      const centerY = height * 0.48 + smoothPointerY * 10;
      const fov = 920;

      const strandA: Array<{ sx: number; sy: number; z: number; scale: number }> = [];
      const strandB: Array<{ sx: number; sy: number; z: number; scale: number }> = [];

      const cosD = Math.cos(diagonalAngle);
      const sinD = Math.sin(diagonalAngle);
      const perpX = -sinD;
      const perpY = cosD;

      for (let i = 0; i < nodeCount; i++) {
        const t = i / (nodeCount - 1) - 0.5;
        const along = t * diagLength;
        const twist = t * Math.PI * 3.15 + phase;

        // Slight S-curve blueprint wave along the axis
        const axisCurve = Math.sin(t * Math.PI * 1.6 + phase * 0.25) * (helixRadius * 0.28);

        for (let strandIdx = 0; strandIdx < 2; strandIdx++) {
          const theta = twist + (strandIdx === 0 ? 0 : Math.PI);
          const radialOffset = Math.sin(theta) * helixRadius + axisCurve;
          const z = Math.cos(theta) * helixRadius + smoothPointerX * 22 * t;

          const worldX = along * cosD + radialOffset * perpX;
          const worldY = along * sinD + radialOffset * perpY;

          const scale = fov / (fov - z);
          const sx = centerX + worldX * scale;
          const sy = centerY + worldY * scale;

          const pt = { sx, sy, z, scale };
          if (strandIdx === 0) {
            strandA.push(pt);
          } else {
            strandB.push(pt);
          }
        }
      }

      const primitives: RenderPrimitive[] = [];

      // 1. Nucleotide cross-rungs connecting Strand A and Strand B
      for (let i = 1; i < nodeCount - 1; i++) {
        const a = strandA[i];
        const b = strandB[i];
        const midZ = (a.z + b.z) * 0.5;
        const depthNorm = Math.max(0.12, Math.min(1, (midZ + helixRadius) / (2 * helixRadius)));

        primitives.push({
          z: midZ - 6,
          draw: (c) => {
            const dx = b.sx - a.sx;
            const dy = b.sy - a.sy;
            const dist = Math.hypot(dx, dy);
            if (dist < 8) return;

            const mx = (a.sx + b.sx) * 0.5;
            const my = (a.sy + b.sy) * 0.5;
            const rodWidth = Math.max(2.6, 5.2 * ((a.scale + b.scale) * 0.5));

            // Structural dark rung
            c.save();
            c.beginPath();
            c.moveTo(a.sx, a.sy);
            c.lineTo(b.sx, b.sy);
            c.lineWidth = rodWidth;
            c.lineCap = 'round';
            c.strokeStyle = `rgba(18, 29, 49, ${(0.3 + depthNorm * 0.58).toFixed(3)})`;
            c.stroke();

            // Thin cyan blueprint core trace
            c.beginPath();
            c.moveTo(a.sx, a.sy);
            c.lineTo(b.sx, b.sy);
            c.lineWidth = 1;
            c.strokeStyle = `rgba(56, 189, 248, ${(0.12 + depthNorm * 0.24).toFixed(3)})`;
            c.stroke();

            // Precision gold base-pair connector bands near center & ends
            const ux = dx / dist;
            const uy = dy / dist;
            const bandOffsets = [-0.22, 0.0, 0.22];
            bandOffsets.forEach((off, idx) => {
              const bx = mx + dx * off;
              const by = my + dy * off;
              const segLen = idx === 1 ? Math.min(10, dist * 0.11) : Math.min(6, dist * 0.065);
              c.beginPath();
              c.moveTo(bx - ux * segLen * 0.5, by - uy * segLen * 0.5);
              c.lineTo(bx + ux * segLen * 0.5, by + uy * segLen * 0.5);
              c.lineWidth = idx === 1 ? rodWidth * 0.92 : rodWidth * 0.78;
              c.strokeStyle =
                idx === 1
                  ? `rgba(245, 166, 35, ${(0.38 + depthNorm * 0.58).toFixed(3)})`
                  : `rgba(251, 191, 36, ${(0.22 + depthNorm * 0.38).toFixed(3)})`;
              c.stroke();
            });
            c.restore();
          },
        });
      }

      // 2. Backbone capsule segments for both strands
      const pushStrandSegments = (pts: Array<{ sx: number; sy: number; z: number; scale: number }>) => {
        for (let i = 0; i < pts.length - 1; i++) {
          const p1 = pts[i];
          const p2 = pts[i + 1];
          const avgZ = (p1.z + p2.z) * 0.5;
          const depthNorm = Math.max(0.14, Math.min(1, (avgZ + helixRadius) / (2 * helixRadius)));
          const avgScale = (p1.scale + p2.scale) * 0.5;
          const thickness = (width < 768 ? 11 : 15.5) * avgScale;
          const showCollar = i % 2 === 0;

          primitives.push({
            z: avgZ,
            draw: (c) => {
              drawCapsuleSegment(c, p1.sx, p1.sy, p2.sx, p2.sy, thickness, depthNorm, showCollar);
            },
          });
        }
      };

      pushStrandSegments(strandA);
      pushStrandSegments(strandB);

      // Painter's algorithm sort back-to-front
      primitives.sort((a, b) => a.z - b.z);
      for (const item of primitives) {
        item.draw(ctx);
      }
    };

    if (prefersReducedMotion) {
      renderFrame();
      return () => {
        observer.disconnect();
        window.removeEventListener('resize', resize);
        window.removeEventListener('scroll', handleScroll);
      };
    }

    const animate = () => {
      if (isVisible && !document.hidden) {
        phase += 0.0065 + scrollVelocity;
        scrollVelocity *= 0.9;
        renderFrame();
      }
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      <canvas ref={canvasRef} className="h-full w-full block opacity-90" />
      {/* Soft top and bottom vignette so typography remains high-contrast WCAG AA */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060911]/90 via-[#060911]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#060911] to-transparent" />
    </div>
  );
};
