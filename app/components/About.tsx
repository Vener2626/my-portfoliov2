import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-14 py-28 max-w-3xl">
      <Reveal>
        <span className="stamp mb-6">Entry 002 — About</span>
      </Reveal>
      <Reveal delay={0.05} frame>
        <h2 className="font-display text-3xl sm:text-4xl text-paper mb-8">
          From San Ildefonso, Bulacan — building for people who use software
          at work, not just for fun.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="space-y-5 text-paper-dim leading-relaxed">
          <p>
            I graduated BSIT from Bulacan Agricultural State College in July
            2026. Before that, I was already building — my capstone,
            Plotease, and a personal POS project called VenOS, both shipped
            and demoed while I was still a student.
          </p>
          <p>
            What sets my experience apart is MOMOCart: a rental, attendance,
            and sales system I built for a real mobility-cart rental
            business. It didn't stay a portfolio piece — it went live across
            six branches in May 2026, and I still maintain it today as the
            company's IT Admin, auditing records and fixing issues staff run
            into on the ground.
          </p>
          <p>
            That's the kind of developer I am: comfortable owning a project
            from a business owner's first request through to the people
            actually using it every shift.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
