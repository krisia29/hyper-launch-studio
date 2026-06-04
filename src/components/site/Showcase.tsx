import g1 from "@/assets/gameplay-1.jpg";
import g2 from "@/assets/gameplay-2.jpg";
import g3 from "@/assets/gameplay-3.jpg";

const shots = [
  { src: g2, title: "Midnight Drag", tag: "Street Mode", className: "md:col-span-2 md:row-span-2" },
  { src: g3, title: "Engine Builder", tag: "Garage", className: "" },
  { src: g1, title: "Holo Tuning", tag: "Customization", className: "" },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4">// Gameplay</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase max-w-xl">
              See It In <span className="gradient-text">Motion</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Pre-alpha captures from the studio. Final visuals are even crazier — stay tuned for the
            full reveal trailer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[640px]">
          {shots.map((s) => (
            <div key={s.title} className={`group relative overflow-hidden rounded-lg border border-border clip-corner ${s.className}`}>
              <img src={s.src} loading="lazy" alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-xs font-display uppercase tracking-widest text-accent">{s.tag}</div>
                <div className="font-display font-bold text-xl uppercase mt-1">{s.title}</div>
              </div>
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-accent animate-pulse glow-green" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
