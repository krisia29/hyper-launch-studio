import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Target, Rocket, Users, Sparkles, Gauge, GraduationCap, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/purpose")({
  head: () => ({
    meta: [
      { title: "Purpose & Goals — Exotic Modz" },
      { name: "description", content: "Discover the vision, mission, and long-term goals driving Exotic Modz — the next-gen automotive sandbox built for creators and racers." },
      { property: "og:title", content: "Purpose & Goals — Exotic Modz" },
      { property: "og:description", content: "Our mission, project goals, and the impact we want Exotic Modz to make on the future of car culture and gaming." },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: PurposePage,
});

const goals = [
  { icon: Gauge, title: "Unmatched Realism", text: "Deliver a physics and tuning system that rivals real-world engineering — every bolt, gear, and tire matters." },
  { icon: Users, title: "Empower Creators", text: "Give players the tools to design, share, and monetize their own builds, liveries, and street scenes." },
  { icon: GraduationCap, title: "Teach Through Play", text: "Turn curiosity about cars into real knowledge with guided learning baked into the gameplay loop." },
  { icon: Sparkles, title: "Celebrate Car Culture", text: "Honor every scene — JDM, Euro, muscle, hyper — without gatekeeping or pay-to-win shortcuts." },
  { icon: Rocket, title: "Push The Platform", text: "Ship cutting-edge visuals, cross-play, and live events that make every session feel like an experience." },
  { icon: Target, title: "Player-First Forever", text: "Build with the community, listen relentlessly, and never compromise the core experience for short-term wins." },
];

function PurposePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
            <span className="inline-block font-display text-xs uppercase tracking-[0.3em] text-accent mb-6 animate-pulse">
              // Mission Brief
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-6">
              Our <span className="gradient-text">Purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're building Exotic Modz to be more than a game — it's a living tribute to car culture,
              an engineering sandbox, and a stage where every player writes their own story.
            </p>
          </div>
        </section>

        {/* Why We Created This Game */}
        <section className="py-24 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <span className="font-display text-xs uppercase tracking-widest text-accent">01 / Origin</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 leading-tight">
                Why We Created <span className="text-primary">This Game</span>
              </h2>
            </div>
            <div className="md:col-span-3 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Every member of our team grew up obsessed with cars — and frustrated that most driving games forced
                a choice between deep simulation and pure fun. We refused to pick a side.
              </p>
              <p>
                Exotic Modz was born to close that gap: a world where you can wrench on a real engine, then drift
                it through neon canyons with your crew minutes later. No paywalls between you and the experience.
              </p>
              <p className="text-foreground">
                This is the game we always wanted to play. Now we're building it with you.
              </p>
            </div>
          </div>
        </section>

        {/* Project Goals */}
        <section className="py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <span className="font-display text-xs uppercase tracking-widest text-accent">02 / Objectives</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
                Project <span className="gradient-text">Goals</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Six principles that guide every design decision, line of code, and community update.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  className="group relative p-8 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/60 transition-all hover:-translate-y-1"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all pointer-events-none" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:glow-blue transition-all">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Vision */}
        <section className="py-24 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <span className="font-display text-xs uppercase tracking-widest text-accent">03 / Horizon</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-8">
              Impact & <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We see Exotic Modz becoming the launchpad for a new generation of car designers, engineers, and
              storytellers. A platform where a kid in their bedroom can ship a build seen by millions, where
              real automakers come scouting for talent, and where the love of cars lives on long after the
              showrooms go quiet.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-14">
              {[
                { value: "10M+", label: "Players we want to reach" },
                { value: "100K", label: "Creator economy goal" },
                { value: "∞", label: "Builds yet to be made" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-xl border border-border bg-card/40">
                  <div className="font-display text-4xl md:text-5xl font-black gradient-text">{s.value}</div>
                  <div className="text-sm uppercase tracking-widest text-muted-foreground mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/40 to-accent/10 p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="relative">
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  Build The Future <span className="text-accent">With Us</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                  Follow our development, vote on features, and get founder-only access when the gates open.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#waitlist"
                    className="inline-flex items-center justify-center gap-2 font-display text-sm uppercase tracking-widest px-8 py-4 rounded-md bg-primary text-primary-foreground hover:glow-blue transition-all"
                  >
                    Join The Waitlist <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 font-display text-sm uppercase tracking-widest px-8 py-4 rounded-md border border-border hover:border-accent hover:text-accent transition-all"
                  >
                    Follow Dev Updates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
