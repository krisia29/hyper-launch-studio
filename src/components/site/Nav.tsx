export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#showcase", label: "Showcase" },
    { href: "#waitlist", label: "Waitlist" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent glow-blue" />
          <span className="font-display font-bold tracking-widest text-sm">EXOTIC<span className="text-accent">MODZ</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#waitlist" className="font-display text-xs uppercase tracking-widest px-4 py-2 rounded-md bg-primary text-primary-foreground hover:glow-blue transition-all">
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
