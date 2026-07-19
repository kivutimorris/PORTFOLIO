const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Go', 'Rust', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Infrastructure',
    skills: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'Edge Functions'],
  },
  {
    title: 'Practices',
    skills: ['Accessibility', 'Performance', 'Testing', 'Design Systems'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[200px_1fr]">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">03</span> / Skills
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
