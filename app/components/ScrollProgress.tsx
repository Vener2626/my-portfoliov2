"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  return (
    <motion.div
      style={{ scaleX: smoothed }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-azure origin-left z-[60]"
    />
  );
}
