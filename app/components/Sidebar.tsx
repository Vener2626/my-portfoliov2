"use client";

import { motion } from "framer-motion";
import { Github, Facebook, Mail } from "lucide-react";
import { useActiveSection } from "./useActiveSection";

const nav = [
  { href: "#about", id: "about", label: "About" },
  { href: "#process", id: "process", label: "How I Work" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#work", id: "work", label: "Work" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hidden lg:flex lg:flex-col lg:justify-between lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[320px] lg:px-14 lg:py-16 border-r border-ink-line"
    >
      <div>
        <a href="#home" className="block">
          <h1 className="font-display text-2xl leading-tight text-paper">
            Christian R.
            <br />
            Veneracion
          </h1>
        </a>
        <p className="mt-3 font-mono text-xs tracking-widest text-azure uppercase">
          Software Developer
        </p>
        <p className="mt-6 text-sm text-paper-dim leading-relaxed max-w-[220px]">
          Building full-stack systems for real businesses — from the database
          up through the interface.
        </p>
      </div>

      <nav className="flex flex-col gap-4">
        {nav.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 font-mono text-xs tracking-wider uppercase transition-colors duration-300 ${
                isActive
                  ? "text-paper font-semibold"
                  : "text-paper-dim hover:text-paper"
              }`}
            >
              <span
                className={`h-px bg-paper-faint transition-all duration-300 ${
                  isActive
                    ? "w-10 bg-azure"
                    : "w-6 group-hover:w-10 group-hover:bg-azure"
                }`}
              />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="flex items-center gap-5">
        <a
          href="https://github.com/vener2626"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-paper-dim hover:text-azure transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.facebook.com/Ven333r"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="text-paper-dim hover:text-azure transition-colors"
        >
          <Facebook size={18} />
        </a>
        <a
          href="mailto:christianveneracion.basc@gmail.com"
          aria-label="Email"
          className="text-paper-dim hover:text-azure transition-colors"
        >
          <Mail size={18} />
        </a>
      </div>
    </motion.aside>
  );
}
