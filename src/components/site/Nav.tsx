import { Link } from "@tanstack/react-router";

export function Nav() {
  const links = [
    { href: "/#about", label: "About" },
    { href: "/#features", label: "Features" },
    { href: "/#showcase", label: "Showcase" },
    { to: "/purpose", label: "Purpose & Goals" },
    { to: "/sponsors", label: "Sponsors & Funders" },
    { to: "/team", label: "Our Team" },
    { href: "/#waitlist", label: "Waitlist" },
  ] as const;
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent glow-blue" />
          <span className="font-display font-bold tracking-widest text-sm">EXOTIC<span className="text-accent">MODZ</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          {links.map((l) =>
            "to" in l ? (
              <Link
                key={l.to}
                to={l.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            )
          )}
        </nav>
        <a href="/#waitlist" className="font-display text-xs uppercase tracking-widest px-4 py-2 rounded-md bg-primary text-primary-foreground hover:glow-blue transition-all">
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
