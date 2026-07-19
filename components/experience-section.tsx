const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Vantage Labs',
    period: '2023 — Present',
    description:
      'Lead engineer on the core platform team, driving architecture decisions and mentoring a team of five.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Northwind Studio',
    period: '2020 — 2023',
    description:
      'Built and shipped client products end to end, from design systems to production infrastructure.',
  },
  {
    role: 'Frontend Developer',
    company: 'Pixel & Co.',
    period: '2019 — 2020',
    description:
      'Crafted accessible, high-performance interfaces for early-stage startups and agencies.',
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[200px_1fr]">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">04</span> / Experience
          </p>

          <ol className="relative border-l border-border">
            {experience.map((item) => (
              <li key={item.role} className="mb-10 ml-6 last:mb-0">
                <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-medium tracking-tight">
                  {item.role} <span className="text-muted-foreground">· {item.company}</span>
                </h3>
                <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
