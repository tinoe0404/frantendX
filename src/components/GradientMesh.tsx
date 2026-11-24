"use client";

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle Warm Ambient Tone - Burnt Orange #F26A38 */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(242, 106, 56, 0.035) 0%, rgba(242, 106, 56, 0.01) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Secondary Monochrome Tone */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          top: "65%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(17, 17, 17, 0.02) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
}
