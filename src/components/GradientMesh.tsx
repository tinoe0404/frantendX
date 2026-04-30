"use client";

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary gradient orb — teal/brand */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full animate-glow"
        style={{
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, hsl(173 58% 39% / 0.15) 0%, hsl(173 58% 39% / 0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Secondary gradient orb — blue */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: "60%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, hsl(220 70% 50% / 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "glow 12s ease-in-out infinite reverse",
        }}
      />
      {/* Tertiary gradient orb — purple */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          top: "30%",
          left: "80%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, hsl(280 65% 60% / 0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "glow 10s ease-in-out 2s infinite",
        }}
      />
      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
