import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Linkedin, Globe, User, Mail } from "lucide-react";
import logoAsset from "@/assets/exotic-modz-logo.png.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Exotic Modz" },
      { name: "description", content: "Meet the designers, engineers, and storytellers building Exotic Modz — the next-gen automotive sandbox." },
      { property: "og:title", content: "Our Team — Exotic Modz" },
      { property: "og:description", content: "The crew behind the build." },
      { property: "og:image", content: logoAsset.url },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: TeamPage,
});

// ============================================================
// TEAM MEMBER DATA — Update names, roles, bios, and links here.
//
// To add a headshot:
//   1) Upload an image with: lovable-assets create --file <path> --filename <name>.jpg > src/assets/<name>.jpg.asset.json
//   2) import headshot from "@/assets/<name>.jpg.asset.json"
//   3) Set photo: headshot.url   (leave photo: null to render the placeholder)
//
// LinkedIn / portfolio links are optional — set to undefined to hide.
// ============================================================

type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string | null;
  linkedin?: string;
  portfolio?: string;
};

const team: Member[] = [
  {
    name: "Team Member One",
    role: "Founder & Creative Director",
    bio: "Driving the vision behind Exotic Modz with a decade of car culture and game design behind the wheel.",
    photo: null,
    linkedin: "https://linkedin.com/in/",
    portfolio: "https://example.com",
  },
  {
    name: "Team Member Two",
    role: "Lead Game Engineer",
    bio: "Architects the physics, tuning, and online systems that make every build feel alive.",
    photo: null,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Team Member Three",
    role: "Art Director",
    bio: "Shapes the neon-soaked visual language — from headlights to UI to liveries.",
    photo: null,
    portfolio: "https://example.com",
  },
  {
    name: "Team Member Four",
    role: "Vehicle Designer",
    bio: "Real-world automotive engineer turning blueprints into in-game machines.",
    photo: null,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Team Member Five",
    role: "Community Lead",
    bio: "Keeps the crew connected — from Discord to track days to dev livestreams.",
    photo: null,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Team Member Six",
    role: "Sound Designer",
    bio: "Records the real engines and turbos that power every audio cue in the game.",
    photo: null,
    portfolio: "https://example.com",
  },
];

function HeadshotPlaceholder() {
  // Replace by setting `photo` on the member above.
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted/30 via-card/40 to-[hsl(322_85%_55%/0.15)]">
      <User className="h-16 w-16 text-muted-foreground/50" strokeWidth={1.5} />
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden hover:border-[hsl(322_85%_55%)] hover:-translate-y-1 transition-all duration-300">
      {/* Headshot area — square aspect, replace placeholder with <img> when photo is set */}
      <div className="relative aspect-square overflow-hidden border-b border-border">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.name} headshot`}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <HeadshotPlaceholder />
        )}
        {/* Magenta accent sweep on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(322_85%_55%/0.4)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold truncate">{member.name}</h3>
        <p className="font-display text-xs uppercase tracking-widest text-[hsl(322_85%_65%)] mt-1">
          {member.role}
        </p>
        <p className="text-sm text-muted-foreground mt-3 flex-1 leading-relaxed">{member.bio}</p>

        {(member.linkedin || member.portfolio) && (
          <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {member.portfolio && (
              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} portfolio`}
                className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Globe className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-16">
        {/* Hero — features the custom Exotic Modz logo as the primary visual anchor */}
        <section className="relative overflow-hidden border-b border-border">
          {/* Logo image as ambient backdrop */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${logoAsset.url})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
            {/* Foreground logo card */}
            <div className="mx-auto mb-10 inline-block rounded-2xl border border-[hsl(322_85%_55%/0.4)] bg-background/60 backdrop-blur-xl p-3 shadow-[0_0_60px_-10px_hsl(322_85%_55%/0.5)]">
              <img
                src={logoAsset.url}
                alt="Exotic Modz logo"
                className="block h-32 md:h-40 w-auto rounded-lg object-cover"
              />
            </div>

            <span className="inline-block font-display text-xs uppercase tracking-[0.3em] text-[hsl(322_85%_65%)] mb-4">
              // The Crew
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-6">
              Meet The{" "}
              <span className="bg-gradient-to-r from-[hsl(322_85%_60%)] via-primary to-accent bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're a small crew of obsessed engineers, designers, and gearheads building the automotive
              sandbox we always wished existed. Every member of the team lives and breathes car culture —
              and brings it into every line of code, every pixel, and every engine note.
            </p>
          </div>
        </section>

        {/* Team grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* Responsive grid: 1 / 2 / 3 columns. Add more members above in `team`. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {team.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        </section>

        {/* Join the team CTA */}
        <section className="pb-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative rounded-2xl border border-[hsl(322_85%_55%/0.35)] bg-gradient-to-br from-[hsl(322_85%_55%/0.12)] via-card/40 to-primary/10 p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="relative">
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  Want To{" "}
                  <span className="text-[hsl(322_85%_65%)]">Join The Crew?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                  We're always looking for passionate builders. If car culture runs in your veins, get in touch.
                </p>
                <a
                  href="mailto:careers@exoticmodz.com"
                  className="inline-flex items-center justify-center gap-2 font-display text-sm uppercase tracking-widest px-8 py-4 rounded-md bg-[hsl(322_85%_55%)] text-white hover:shadow-[0_0_30px_-5px_hsl(322_85%_55%)] transition-all"
                >
                  <Mail className="h-4 w-4" /> careers@exoticmodz.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
