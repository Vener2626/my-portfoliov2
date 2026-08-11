import { Github, Facebook, Mail, Download } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-14 py-28 max-w-3xl border-t border-ink-line mt-10"
    >
      <Reveal>
        <span className="stamp mb-6">Entry 006 — Contact</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-6 text-balance">
          Currently looking for a new role. Let's talk.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-paper-dim leading-relaxed max-w-lg mb-10">
          Whether it's a full-time developer role or a project you need
          built, I'm easiest to reach by email. San Ildefonso, Bulacan —
          open to on-site, hybrid, and remote work.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:christianveneracion.basc@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-brass text-ink font-mono text-xs tracking-widest uppercase hover:bg-brass-soft transition-colors"
          >
            <Mail size={15} /> Email me
          </a>
          <a
            href="/Christian_Veneracion_Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-ink-line text-paper font-mono text-xs tracking-widest uppercase hover:border-brass hover:text-brass transition-colors"
          >
            <Download size={15} /> Download CV
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-ink-line">
          <div className="flex gap-5">
            <a
              href="https://github.com/vener2626"
              target="_blank"
              rel="noreferrer"
              className="text-paper-dim hover:text-brass transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.facebook.com/Ven333r"
              target="_blank"
              rel="noreferrer"
              className="text-paper-dim hover:text-brass transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
          <p className="font-mono text-[0.65rem] text-paper-faint tracking-wider">
            © 2026 Christian R. Veneracion — Built with Next.js & Framer Motion
          </p>
        </div>
      </Reveal>
    </section>
  );
}
