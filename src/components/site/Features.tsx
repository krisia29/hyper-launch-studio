import { Wrench, Trophy, Users, Cpu, Palette, GraduationCap } from "lucide-react";

const features = [
  { icon: Wrench, title: "Deep Customization", desc: "Engine swaps, forced induction, suspension geometry, aero kits — tune to the millimeter." },
  { icon: Trophy, title: "Ranked Competition", desc: "Seasonal championships across drift, drag, circuit and street modes with global leaderboards." },
  { icon: Users, title: "Crew System", desc: "Form crews, run territory wars, and share garages with friends across every platform." },
  { icon: Cpu, title: "Real Physics", desc: "Simulation-grade vehicle dynamics tuned by real motorsport engineers." },
  { icon: Palette, title: "Livery Studio", desc: "Vector-based wrap editor with community marketplace for designers and creators." },
  { icon: GraduationCap, title: "Learn To Build", desc: "In-game lessons teach real automotive engineering — from torque curves to thermal dynamics." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4">// Features</div>
          <h2 className="text-4xl md:text-6xl font-black uppercase">
            Built For The <span className="gradient-text">Obsessed</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative p-8 rounded-lg border border-border bg-card/40 backdrop-blur clip-corner hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/5 transition-all rounded-lg" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 border border-primary/30 mb-6 group-hover:glow-blue transition-all">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-display text-xs text-muted-foreground mb-2">0{i + 1}</div>
                <h3 className="font-display text-xl font-bold uppercase mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
