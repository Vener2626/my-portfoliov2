"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "> auth.staff('christian_veneracion')",
  "> status: online — accepting new roles",
  "> stack: PHP · MySQL · JavaScript · Tailwind",
];

function TypedLog() {
  const [shown, setShown] = useState<string[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    if (charIdx <= lines[lineIdx].length) {
      const t = setTimeout(() => {
        setShown((prev) => {
          const copy = [...prev];
          copy[lineIdx] = lines[lineIdx].slice(0, charIdx);
          return copy;
        });
        setCharIdx((c) => c + 1);
      }, 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx]);

  return (
    <div className="font-mono text-xs sm:text-sm text-paper-dim space-y-1.5 min-h-[84px]">
      {lines.map((_, i) => (
        <div key={i}>
          {shown[i]}
          {i === lineIdx && <span className="cursor-blink" />}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-14 pt-24 lg:pt-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <span className="stamp mb-6">Entry 001 — Fresh Grad, July 2026</span>

        <h1 className="font-display text-balance text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.05] text-paper max-w-3xl">
          I build the systems that run behind the counter.
        </h1>

        <p className="mt-6 max-w-xl text-paper-dim text-base sm:text-lg leading-relaxed">
          BSIT graduate turned full-stack developer. I replace manual
          logbooks, spreadsheets, and cash counting with software that real
          staff use every day — and I've done it for a live commercial
          client, not just a class project.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="px-6 py-3 bg-brass text-ink font-mono text-xs tracking-widest uppercase hover:bg-brass-soft transition-colors"
          >
            View the work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-ink-line text-paper font-mono text-xs tracking-widest uppercase hover:border-brass hover:text-brass transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-12 border border-ink-line bg-ink-soft/60 px-5 py-4 max-w-md scan-corner">
          <TypedLog />
        </div>
      </motion.div>
    </section>
  );
}
