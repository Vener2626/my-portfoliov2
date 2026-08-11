"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "./useActiveSection";

const nav = [
  { href: "#about", id: "about", label: "About" },
  { href: "#process", id: "process", label: "How I Work" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#work", id: "work", label: "Work" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-ink/90 backdrop-blur border-b border-ink-line">
      <a href="#home" className="font-display text-lg text-paper">
        C. Veneracion
      </a>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-paper"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-ink border-b border-ink-line flex flex-col px-6 py-4 gap-4"
          >
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-xs tracking-wider uppercase transition-colors ${
                    isActive ? "text-azure font-semibold" : "text-paper-dim"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
