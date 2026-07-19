import { Code2, Layers, Zap, Accessibility } from 'lucide-react'

const capabilities = [
  { icon: Code2, label: 'Develop' },
  { icon: Layers, label: 'Design' },
  { icon: Zap, label: 'Optimize' },
  { icon: Accessibility, label: 'Accessible' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-32 pb-16">
        <p className="mb-6 font-mono text-sm text-muted-foreground">
          <span className="text-primary">{'> '}</span>Software Developer
        </p>

        <h1 className="text-balance text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Kivuti
          <br />
          Mutugi
        </h1>

        <p className="mt-8 max-w-md text-pretty font-mono text-sm leading-relaxed text-muted-foreground">
          Building digital experiences that are fast, accessible, and meaningful. Focused on the modern web,
          from interface to infrastructure.
        </p>

        <a
          href="#work"
          className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-sm text-primary transition-opacity hover:opacity-80"
        >
          <span className="animate-pulse">{'>'}_</span> view selected work
        </a>

        <div className="mt-16 flex flex-wrap gap-8 border-t border-border pt-8">
          {capabilities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
