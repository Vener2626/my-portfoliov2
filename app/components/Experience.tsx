import Reveal from "./Reveal";

const roles = [
  {
    period: "Jul 2026 — Present",
    title: "Software Developer & IT Admin",
    org: "Panrama Technologies Enterprises",
    tag: "Full-time",
    points: [
      "Maintain MOMOCart in production across 6 branches — auditing staff-entered records and fixing discrepancies.",
      "Serve as IT Admin: oversee staff use of the system and issue policy memos to protect data accuracy.",
    ],
  },
  {
    period: "Feb 2026 — Jul 2026",
    title: "Software Developer (OJT)",
    org: "Panrama Technologies Enterprises",
    tag: "On-the-job training",
    points: [
      "Gathered requirements directly from the business owner and translated them into a working system.",
      "Owned MOMOCart end-to-end — design, coding, deployment, and client support — as a paid engagement.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-14 py-28 max-w-3xl">
      <Reveal>
        <span className="stamp mb-6">Entry 003 — Experience</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-12">
          Where I've worked
        </h2>
      </Reveal>

      <div className="space-y-10">
        {roles.map((role, i) => (
          <Reveal key={role.title + role.period} delay={0.08 * i}>
            <div className="grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 ledger-rule pt-6">
              <div className="font-mono text-xs text-brass tracking-wide">
                {role.period}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-xl text-paper">
                    {role.title}
                  </h3>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-paper-faint border border-ink-line px-2 py-0.5">
                    {role.tag}
                  </span>
                </div>
                <p className="text-paper-dim text-sm mt-1 mb-3">{role.org}</p>
                <ul className="space-y-2">
                  {role.points.map((p) => (
                    <li
                      key={p}
                      className="text-paper-dim text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-brass"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
