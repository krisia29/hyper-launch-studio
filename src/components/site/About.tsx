import gameplay1 from "@/assets/gameplay-1.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/20 blur-2xl -z-10" />
          <img src={gameplay1} loading="lazy" width={1280} height={800} alt="Holographic customization garage" className="rounded-lg border border-border clip-corner" />
        </div>
        <div>
          <div className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4">// The Game</div>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            Where <span className="gradient-text">Engineering</span> Meets Adrenaline
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Exotic Modz fuses a deep automotive sandbox with high-stakes multiplayer competition.
            Swap engines, dial in suspension geometry, hand-craft liveries — every bolt, every degree of camber matters.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Then take your build to the streets. Drift, drag, time-attack, and crew up to dominate
            seasonal championships in a living, breathing world built for the next generation of car culture.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Sandbox", "Limitless customization"],
              ["Multiplayer", "Crew battles & ranked"],
              ["Education", "Real-world mechanics"],
              ["Cross-Play", "PC, console, mobile"],
            ].map(([t, d]) => (
              <div key={t} className="border border-border bg-card/50 p-4 rounded-md hover:border-accent/50 transition-colors">
                <div className="font-display text-sm uppercase tracking-wider text-accent">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
