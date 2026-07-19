import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'DrCartoonTV',
    description:
      'A video streaming platform with an end-to-end upload pipeline, HLS video transcoding, authentication, background workers, and scalable media processing.',
    tags: [
      'PHP',
      'FFmpeg',
      'MariaDB',
      'Redis',
      'Nginx',
      'Ubuntu',
    ],
    year: '2026',
    url: 'https://drcartoontv.com',
  },
  {
    name: 'Creator Studio',
    description:
      'A creator dashboard for managing video uploads, channels, authentication, and publishing workflows with a modular PHP architecture.',
    tags: [
      'PHP',
      'Google OAuth',
      'Composer',
      'REST API',
      'MySQL',
    ],
    year: '2026',
    url: 'https://studio.drcartoontv.com',
  },
  {
    name: 'Group4Group',
    description:
      'A marketplace for discovering and managing WhatsApp communities, featuring automated member collection, searchable groups, and scalable database design.',
    tags: [
      'PHP',
      'SQLite',
      'Playwright',
      'JavaScript',
      'Automation',
    ],
    year: '2026',
  },
  {
    name: 'Kivuti Portfolio',
    description:
      'A modern developer portfolio built with Next.js and TypeScript, deployed on Vercel with responsive design and performance-first architecture.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
    ],
    year: '2026',
    url: 'https://kivuti.vercel.app',
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
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
