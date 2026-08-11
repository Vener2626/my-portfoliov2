"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  frame = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Adds a brief camera-focus corner-bracket flash as the block settles into view. */
  frame?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2, margin: "-80px" }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        mass: 0.6,
        delay,
      }}
      className={`relative ${frame ? "scan-corner" : ""} ${className}`}
    >
      {frame && (
        <motion.span
          initial={{ opacity: 0.9 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, delay: delay + 0.3 }}
          className="pointer-events-none absolute -inset-3 border border-azure/40"
        />
      )}
      {children}
    </motion.div>
  );
}
