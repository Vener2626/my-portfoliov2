"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "MOMOCart",
    subtitle: "QR Rental, Attendance & Sales System",
    tag: "Client work — live since May 2026",
    desc: "Centralized digital logbook for a mobility-cart rental business across 6 branches: QR-based registration, selfie-verified attendance, real-time AJAX updates, and CSV/Excel/PDF exports.",
    stack: ["PHP", "MySQL", "AJAX", "Figma"],
    img: "https://vener2626.github.io/my-portfolio/image/momocart-landing.png",
  },
  {
    title: "Chata Brews",
    subtitle: "POS & Inventory System",
    tag: "Full-stack",
    desc: "A modern point-of-sale and inventory solution with real-time analytics and role-based security for a retail counter operation.",
    stack: ["PHP", "Chart.js", "MySQL"],
    img: "https://vener2626.github.io/my-portfolio/image/chata.png",
  },
  {
    title: "Ven Villas",
    subtitle: "Luxury Villa Booking & AI Concierge",
    tag: "Live",
    desc: "A booking site for a luxury villa rental brand with a multi-step reservation flow and an AI-styled concierge chat widget.",
    stack: ["Tailwind CSS", "JavaScript"],
    img: "https://vener2626.github.io/my-portfolio/image/venvillas-hero.png",
  },
  {
    title: "VenOS",
    subtitle: "Point-of-Sale for One-Counter Shops",
    tag: "Personal project — live demo",
    desc: "Full-stack POS built for small single-counter businesses: fast checkout, a live sales dashboard, and PIN-protected access.",
    stack: ["Tailwind CSS", "PHP", "MySQL"],
    img: "https://vener2626.github.io/my-portfolio/image/venos-landing.png",
  },
  {
    title: "Plotease",
    subtitle: "Faculty, Room & Section Scheduling",
    tag: "Capstone — UI/UX Designer",
    desc: "A team system that auto-generates conflict-free faculty, room, and section schedules. Led research, wireframing, and Figma-to-code handoff.",
    stack: ["Figma", "Wireframing", "Team Project"],
    img: "https://vener2626.github.io/my-portfolio/image/plotease.png",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 sm:px-14 py-28 max-w-4xl">
      <Reveal>
        <span className="stamp mb-6">Entry 005 — Selected Work</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-4">
          Projects on record
        </h2>
        <p className="text-paper-dim max-w-lg mb-14">
          Each of these shipped — deployed, demoed, or actively used by real
          people, not left in a repo.
        </p>
      </Reveal>

      <div className="flex flex-col gap-16">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.08 * i}>
            <motion.a
              href="#"
              onClick={(e) => e.preventDefault()}
              whileHover="hover"
              className="group grid sm:grid-cols-[1fr_1.3fr] gap-6 sm:gap-10 items-center cursor-default"
            >
              <motion.div
                variants={{ hover: { scale: 1.02 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/3] overflow-hidden border border-ink-line bg-ink-soft scan-corner"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-brass">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-paper flex items-center gap-2">
                  {p.title}
                  <ArrowUpRight
                    size={18}
                    className="text-brass opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                  />
                </h3>
                <p className="text-sm text-paper-dim mb-3">{p.subtitle}</p>
                <p className="text-paper-dim text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[0.65rem] uppercase tracking-wider text-paper-faint border border-ink-line px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
