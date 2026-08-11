import { Ear, ClipboardList, Code2, LifeBuoy } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Ear,
    number: "01",
    title: "Listen",
    desc: "I sit down with the business owner or the staff who'll actually use it — not just take a spec, but understand the workflow: who does what, where the bottlenecks are, what breaks today.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Plan",
    desc: "I translate that process into a data model and a realistic system architecture — what needs a database, what needs to update in real time, and what should stay deliberately simple.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    desc: "Full-stack, end to end — from the database schema up through the interface staff will touch every shift, using Next.js, PHP, or MySQL depending on what the project actually needs.",
  },
  {
    icon: LifeBuoy,
    number: "04",
    title: "Support",
    desc: "I don't disappear after launch. I stay on as the person who audits records, fixes what breaks, and adjusts the system as the business itself changes.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 sm:px-14 py-28 max-w-3xl">
      <Reveal>
        <span className="stamp mb-6">Entry 003 — How I Work</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-4">
          From business process to IT solution
        </h2>
        <p className="text-paper-dim max-w-lg mb-14">
          Every system I build starts as someone's manual routine, not a
          blank page. Here's how I get from that routine to shipped
          software.
        </p>
      </Reveal>

      <div className="space-y-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.title} delay={0.08 * i} frame>
              <div className="grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 ledger-rule pt-6">
                <div className="flex items-center gap-2 font-mono text-xs text-azure tracking-wide">
                  <Icon size={15} />
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display text-xl text-paper mb-2">
                    {step.title}
                  </h3>
                  <p className="text-paper-dim text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
