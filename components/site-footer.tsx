export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kivuti Morris. Built with Next.js.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">{'>'}_</span> designed &amp; developed with care
        </p>
      </div>
    </footer>
  )
}
