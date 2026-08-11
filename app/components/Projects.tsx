"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "MOMOCart",
    subtitle: "QR Rental, Attendance & Sales System",
    tag: "Paid Client — Live",
    desc: "Centralized digital logbook for a mobility-cart rental business across 6 branches: QR-based registration, selfie-verified attendance, real-time AJAX updates, and CSV/Excel/PDF exports.",
    stack: ["PHP", "MySQL", "AJAX", "Figma"],
    img: "https://vener2626.github.io/my-portfolio/image/momocart-landing.png",
    link: "https://momocartheadoffice.com/",
    linkLabel: "Visit Client Site",
  },
  {
    title: "Chata Brews POS",
    subtitle: "POS & Inventory System",
    tag: "Personal Project — Full-Stack",
    desc: "A comprehensive, modern POS and inventory solution with real-time data analytics, role-based security, and full data export for reporting.",
    stack: ["PHP", "MySQL", "Chart.js", "Data Export"],
    img: "https://vener2626.github.io/my-portfolio/image/chata.png",
    link: null,
    linkLabel: null,
  },
  {
    title: "Ven Villas",
    subtitle: "Luxury Villa Booking & AI Concierge",
    tag: "Client Project — Live",
    desc: "A deployed booking site for a luxury villa rental brand, built around a multi-step reservation flow and an AI-styled concierge chat widget for guest inquiries.",
    stack: ["Tailwind CSS", "JavaScript"],
    img: "https://vener2626.github.io/my-portfolio/image/venvillas-hero.png",
    link: null,
    linkLabel: null,
  },
  {
    title: "VenOS",
    subtitle: "Point-of-Sale for One-Counter Shops",
    tag: "Personal Project — Live Demo",
    desc: "Full-stack POS built for small single-counter businesses: fast checkout, a live sales dashboard, and PIN-protected access.",
    stack: ["Tailwind CSS", "PHP", "MySQL"],
    img: "https://vener2626.github.io/my-portfolio/image/venos-landing.png",
    link: "https://venpos.vercel.app/",
    linkLabel: "View Live Demo",
  },
  {
    title: "Plotease",
    subtitle: "Faculty, Room & Section Scheduling",
    tag: "Capstone — UI/UX Designer",
    desc: "A team system that auto-generates conflict-free faculty, room, and section schedules. Led research, wireframing, and Figma-to-code handoff.",
    stack: ["Figma", "Wireframing", "Team Project"],
    img: "https://vener2626.github.io/my-portfolio/image/plotease.png",
    link: null,
    linkLabel: null,
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 sm:px-14 py-28 max-w-4xl">
      <Reveal>
        <span className="stamp mb-6">Entry 006 — Selected Work</span>
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
          <Reveal key={p.title} delay={0.08 * i} frame>
            <motion.div
              whileHover="hover"
              className="group grid sm:grid-cols-[1fr_1.3fr] gap-6 sm:gap-10 items-center"
            >
              <motion.div
                variants={{ hover: { scale: 1.02 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/3] overflow-hidden border border-ink-line bg-ink-soft"
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
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-azure">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-paper">
                  {p.title}
                </h3>
                <p className="text-sm text-paper-dim mb-3">{p.subtitle}</p>
                <p className="text-paper-dim text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[0.65rem] uppercase tracking-wider text-paper-faint border border-ink-line px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-azure hover:text-azure-soft transition-colors"
                  >
                    {p.linkLabel}
                    <ArrowUpRight
                      size={14}
                      className="-translate-x-0.5 group-hover:translate-x-0 transition-transform"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08 * projects.length + 0.05}>
        <div className="mt-6 flex justify-start">
          <a
            href="https://github.com/vener2626?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-ink-line text-paper font-mono text-xs tracking-widest uppercase hover:border-azure hover:text-azure transition-colors"
          >
            See more projects
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
