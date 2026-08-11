"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: 'name: "Christian R. Veneracion",' },
  { indent: 1, text: 'role: "Software Developer",' },
  { indent: 1, text: 'status: "open to work",' },
  { indent: 0, text: "};" },
];

const fullText = codeLines.map((l) => "  ".repeat(l.indent) + l.text).join("\n");

export default function FloatingCodeSnippet() {
  const [typed, setTyped] = useState("");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => setCycle((c) => c + 1), 2200);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [-2, -1, -2],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.6 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
      className="hidden md:block absolute right-10 top-24 w-[280px] border border-ink-line bg-ink-soft/80 backdrop-blur-sm shadow-2xl shadow-black/40 scan-corner"
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-ink-line">
        <span className="w-2.5 h-2.5 rounded-full bg-paper-faint/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-paper-faint/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-azure/60" />
        <span className="ml-2 font-mono text-[0.6rem] text-paper-faint tracking-wide">
          profile.js
        </span>
      </div>
      <pre className="px-4 py-4 font-mono text-[0.7rem] leading-relaxed text-paper-dim whitespace-pre-wrap min-h-[110px]">
        <code>
          {typed}
          <span className="cursor-blink" />
        </code>
      </pre>
    </motion.div>
  );
}
