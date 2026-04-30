"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
  visual?: React.ReactNode;
}

export function ServiceCard({ title, description, icon, featured, visual }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`glass-card gradient-border rounded-xl cursor-pointer group overflow-hidden ${
        featured ? "bento-featured" : ""
      }`}
    >
      <div className={`p-6 ${featured ? "md:p-8" : ""} h-full flex flex-col`}>
        {/* Icon with glow */}
        <div className="mb-4 relative">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300">
            {icon}
          </div>
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 w-10 h-10 rounded-lg bg-brand/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <h3 className={`font-semibold mb-2 group-hover:text-brand transition-colors duration-300 ${
          featured ? "text-lg md:text-xl" : ""
        }`}>
          {title}
        </h3>
        <p className={`text-sm text-muted-foreground leading-relaxed ${
          featured ? "md:text-base max-w-md" : ""
        }`}>
          {description}
        </p>

        {/* Visual element for featured cards */}
        {visual && (
          <div className="mt-auto pt-6">
            {visual}
          </div>
        )}

        {/* Bottom accent line */}
        <div className="mt-auto pt-4">
          <motion.div
            className="h-[2px] bg-gradient-to-r from-brand/50 to-transparent rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </motion.div>
  );
}
