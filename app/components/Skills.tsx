import Reveal from "./Reveal";

const groups = [
  {
    label: "Languages & Frameworks",
    items: ["PHP", "JavaScript", "HTML & CSS", "Tailwind CSS", "Java", "C++"],
  },
  {
    label: "Databases & Tools",
    items: ["MySQL", "Git & GitHub", "AJAX", "Chart.js", "REST APIs"],
  },
  {
    label: "UI/UX Design",
    items: ["Figma", "Canva", "Prototyping", "Wireframing", "User Research"],
  },
  {
    label: "IT Fundamentals",
    items: [
      "Basic Networking",
      "LAN Setup & Configuration",
      "Cisco Packet Tracer",
      "Troubleshooting",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-14 py-28 max-w-3xl">
      <Reveal>
        <span className="stamp mb-6">Entry 004 — Skills</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-12">
          What I work with
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={0.06 * i}>
            <h3 className="font-mono text-xs tracking-widest uppercase text-brass mb-4">
              {g.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-paper border border-ink-line px-3 py-1.5 hover:border-brass hover:text-brass transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
