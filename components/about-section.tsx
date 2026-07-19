const stats = [
  { value: '6+', label: 'Years experience' },
  { value: '40+', label: 'Projects shipped' },
  { value: '12', label: 'Open source repos' },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[200px_1fr]">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">01</span> / About
          </p>

          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              I&apos;m a developer who cares about the details — from pixel-perfect interfaces to the systems
              that power them.
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                With a background spanning front-end engineering and backend architecture, I build products
                that feel effortless to use and are a joy to maintain. I care deeply about performance,
                accessibility, and writing code that other people actually want to read.
              </p>
              <p>
                When I&apos;m not shipping, you&apos;ll find me contributing to open source, tinkering with
                developer tooling, or exploring new ways to make the web faster.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-3xl font-semibold text-primary">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
