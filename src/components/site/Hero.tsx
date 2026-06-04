import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <img src={heroCar} alt="Exotic Modz cinematic key art" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-scan" />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 mb-6 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-display tracking-widest uppercase text-accent">Coming Soon · 2026</span>
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] uppercase">
            Build It.<br />
            Race It.<br />
            <span className="gradient-text text-glow-blue">Own The Night.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Exotic Modz is the next-gen automotive sandbox. Engineer hypercars from the bolt up,
            battle rivals on neon-soaked streets, and learn the real mechanics behind every build.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#waitlist" className="group relative font-display uppercase tracking-widest text-sm px-8 py-4 bg-primary text-primary-foreground rounded-md animate-pulse-glow clip-corner">
              Join The Race →
            </a>
            <a href="#about" className="font-display uppercase tracking-widest text-sm px-8 py-4 border border-border rounded-md hover:border-accent hover:text-accent transition-colors clip-corner">
              Watch Trailer
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "42K+", l: "Waitlisted" },
              { v: "150+", l: "Tunable Parts" },
              { v: "1:1", l: "Real Physics" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-bold text-accent text-glow-green">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
