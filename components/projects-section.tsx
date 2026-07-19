import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Nimbus Analytics',
    description:
      'A real-time analytics dashboard handling millions of events per day with sub-second query latency.',
    tags: ['Next.js', 'TypeScript', 'ClickHouse', 'WebSockets'],
    year: '2025',
  },
  {
    name: 'Ledger CLI',
    description:
      'An open-source command-line tool for plain-text accounting, with a plugin system and 4k+ stars.',
    tags: ['Rust', 'CLI', 'Open Source'],
    year: '2024',
  },
  {
    name: 'Orbit Design System',
    description:
      'A headless, accessible component library powering design consistency across five product teams.',
    tags: ['React', 'Radix', 'Storybook', 'a11y'],
    year: '2024',
  },
  {
    name: 'Meridian Edge',
    description:
      'A globally distributed edge cache reducing origin load by 78% and p99 latency by half.',
    tags: ['Go', 'Redis', 'Edge', 'Infra'],
    year: '2023',
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[200px_1fr]">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">02</span> / Work
          </p>

          <ul className="divide-y divide-border border-y border-border">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href="#"
                  className="group flex flex-col gap-4 py-8 transition-colors sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-primary">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
