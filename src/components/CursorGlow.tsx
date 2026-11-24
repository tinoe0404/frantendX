"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [isMobile, setIsMobile] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(242, 106, 56, 0.035) 0%, rgba(242, 106, 56, 0.01) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
