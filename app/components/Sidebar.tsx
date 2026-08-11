"use client";

import { motion } from "framer-motion";
import { Github, Facebook, Mail } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Sidebar() {
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
        <p className="mt-3 font-mono text-xs tracking-widest text-brass uppercase">
          Software Developer
        </p>
        <p className="mt-6 text-sm text-paper-dim leading-relaxed max-w-[220px]">
          Building full-stack systems for real businesses — from the database
          up through the interface.
        </p>
      </div>

      <nav className="flex flex-col gap-4">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-paper-dim hover:text-paper transition-colors"
          >
            <span className="h-px w-6 bg-paper-faint group-hover:w-10 group-hover:bg-brass transition-all duration-300" />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        <a
          href="https://github.com/vener2626"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-paper-dim hover:text-brass transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.facebook.com/Ven333r"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="text-paper-dim hover:text-brass transition-colors"
        >
          <Facebook size={18} />
        </a>
        <a
          href="mailto:christianveneracion.basc@gmail.com"
          aria-label="Email"
          className="text-paper-dim hover:text-brass transition-colors"
        >
          <Mail size={18} />
        </a>
      </div>
    </motion.aside>
  );
}
