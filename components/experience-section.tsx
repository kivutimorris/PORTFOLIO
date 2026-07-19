const experience = [
  {
    role: 'Independent Software Developer',
    company: 'Self-Employed',
    period: '2024 — Present',
    description:
      'Building secure backend applications with PHP, Next.js, MariaDB, and Ubuntu Linux. Developing scalable systems for authentication, media processing, REST APIs, and cloud deployment.',
  },
  {
    role: 'Voter Registration Clerk',
    company: 'Independent Electoral and Boundaries Commission (IEBC)',
    period: 'Mar 2026 — Apr 2026',
    description:
      'Registered voters, verified identity documents, and maintained data accuracy, confidentiality, and compliance with established operational procedures.',
  },
  {
    role: 'Affiliate Marketing Specialist',
    company: 'Binance & Paxful',
    period: '2021 — 2026',
    description:
      'Managed online marketing campaigns, analyzed performance metrics, and grew digital communities through content and affiliate marketing strategies.',
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
