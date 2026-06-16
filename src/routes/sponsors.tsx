import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ExternalLink, Mail, Building2, Users, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors & Funders — Exotic Modz" },
      { name: "description", content: "Meet the sponsors, funders, and community partners powering Exotic Modz — and learn how your organization can join us." },
      { property: "og:title", content: "Sponsors & Funders — Exotic Modz" },
      { property: "og:description", content: "Our sponsors, funding partners, and community collaborators." },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: SponsorsPage,
});

// ============================================================
// SPONSOR DATA — Update logos and info here.
// To replace a logo: drop an image at src/assets/sponsors/<file>
// and set `logo: "/src/assets/sponsors/<file>"` or import it.
// Leave `logo: null` to render the upload-friendly placeholder.
// ============================================================

type Sponsor = {
  name: string;
  description: string;
  website: string;
  url: string;
  logo?: string | null;
};

const autoPartsSponsors: Sponsor[] = [
  { name: "NAPA Auto Parts", description: "Auto parts store", website: "napaonline.com", url: "https://www.napaonline.com", logo: null },
  { name: "O'Reilly Auto Parts", description: "Auto parts store", website: "oreillyauto.com", url: "https://www.oreillyauto.com", logo: null },
  { name: "AutoZone", description: "Auto parts store", website: "autozone.com", url: "https://www.autozone.com", logo: null },
  { name: "Pep Boys", description: "Auto parts store", website: "pepboys.com", url: "https://www.pepboys.com", logo: null },
];

const majorSponsors: Sponsor[] = [
  { name: "U.S. Highways Administration", description: "Major funding partner supporting infrastructure-focused educational initiatives.", website: "highways.dot.gov", url: "https://highways.dot.gov", logo: null },
];

const communityPartners: Sponsor[] = [
  { name: "UNITE-LA", description: "Workforce and education collaborative connecting students to opportunity across Los Angeles.", website: "unitela.com", url: "https://www.unitela.com", logo: null },
  { name: "LAUSD", description: "Los Angeles Unified School District — bringing Exotic Modz to classrooms across the region.", website: "lausd.org", url: "https://www.lausd.org", logo: null },
];

function LogoPlaceholder({ name }: { name: string }) {
  // Replace this block with <img src={logo} alt={name} /> once a logo is uploaded.
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
      <Building2 className="h-8 w-8 text-muted-foreground/60" />
      <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground/80">
        Logo Placeholder
      </span>
      <span className="text-xs text-muted-foreground/60 px-2 truncate max-w-full">{name}</span>
    </div>
  );
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/60 hover:-translate-y-1 transition-all"
    >
      {/* === Logo upload area (min height keeps it large + droppable visually) === */}
      <div className="relative h-40 bg-gradient-to-br from-muted/30 to-card/60 border-b border-border flex items-center justify-center p-6 group-hover:from-primary/5 group-hover:to-accent/5 transition-all">
        {sponsor.logo ? (
          <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-h-full max-w-full object-contain" />
        ) : (
          <LogoPlaceholder name={sponsor.name} />
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-bold truncate">{sponsor.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 flex-1">{sponsor.description}</p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:text-accent transition-colors">
          {sponsor.website}
          <ExternalLink className="h-3 w-3" />
        </div>
      </div>
    </a>
  );
}

function SectionHeader({ index, title, subtitle, icon: Icon }: { index: string; title: string; subtitle?: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
      <div className="min-w-0">
        <span className="font-display text-xs uppercase tracking-widest text-accent">{index}</span>
        <h2 className="font-display text-2xl md:text-4xl font-bold mt-2 flex items-center gap-3">
          <Icon className="h-7 w-7 text-primary shrink-0" />
          <span className="truncate">{title}</span>
        </h2>
        {subtitle && <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}

function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
            <span className="inline-block font-display text-xs uppercase tracking-[0.3em] text-accent mb-6">
              // Powered Together
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-6">
              Sponsors &amp; <span className="gradient-text">Funders</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exotic Modz exists because of the organizations who believe in the future of car culture, education,
              and play. Thank you to every partner fueling this journey.
            </p>
          </div>
        </section>

        {/* Auto Parts Sponsors */}
        <section className="py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              index="01 / Auto Parts Partners"
              title="Auto Parts Stores"
              subtitle="Industry leaders helping us bring authentic, real-world parts into the game."
              icon={Sparkles}
            />
            {/* Responsive grid: 1 / 2 / 4 cols. Add more sponsors above in `autoPartsSponsors`. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {autoPartsSponsors.map((s) => (
                <SponsorCard key={s.name} sponsor={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Major Sponsors */}
        <section className="py-20 border-b border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              index="02 / Major Sponsors"
              title="Major Sponsors"
              subtitle="The cornerstone funders making large-scale development and outreach possible."
              icon={Building2}
            />
            {/* Major sponsors render larger — adjust grid cols if you add more. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {majorSponsors.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col md:flex-row rounded-xl border border-primary/30 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary hover:glow-blue transition-all"
                >
                  <div className="relative md:w-1/2 h-56 bg-gradient-to-br from-primary/10 to-accent/10 border-b md:border-b-0 md:border-r border-border flex items-center justify-center p-8">
                    {s.logo ? (
                      <img src={s.logo} alt={`${s.name} logo`} className="max-h-full max-w-full object-contain" />
                    ) : (
                      <LogoPlaceholder name={s.name} />
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <h3 className="font-display text-xl md:text-2xl font-bold">{s.name}</h3>
                    <p className="text-muted-foreground mt-2">{s.description}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                      {s.website}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Community Partners */}
        <section className="py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              index="03 / Community"
              title="Community Partners"
              subtitle="Local organizations bringing Exotic Modz to students, educators, and neighborhoods."
              icon={Users}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityPartners.map((s) => (
                <SponsorCard key={s.name} sponsor={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Future Sponsorship Opportunities */}
        <section className="py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              index="04 / Get Involved"
              title="Future Sponsorship Opportunities"
              subtitle="We're actively expanding our partner network. Here's how your organization can plug in."
              icon={Sparkles}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { tier: "Founding Partner", price: "Custom", perks: ["Logo in-game splash screen", "Co-branded content series", "Dedicated dev livestream"] },
                { tier: "Studio Sponsor", price: "From $25K", perks: ["Logo on website + credits", "Social media spotlights", "Early-access build keys"] },
                { tier: "Community Supporter", price: "From $5K", perks: ["Logo placement on this page", "Newsletter shout-out", "Beta key bundle"] },
              ].map((t) => (
                <div key={t.tier} className="relative p-8 rounded-xl border border-border bg-card/40 hover:border-accent/60 transition-all">
                  <div className="font-display text-xs uppercase tracking-widest text-accent">{t.tier}</div>
                  <div className="font-display text-3xl font-black mt-2">{t.price}</div>
                  <ul className="mt-6 space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
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
                  Become A <span className="text-accent">Sponsor</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                  Partner with Exotic Modz and reach millions of car enthusiasts, creators, and learners worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:partners@exoticmodz.com"
                    className="inline-flex items-center justify-center gap-2 font-display text-sm uppercase tracking-widest px-8 py-4 rounded-md bg-primary text-primary-foreground hover:glow-blue transition-all"
                  >
                    <Mail className="h-4 w-4" /> Contact The Team
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 font-display text-sm uppercase tracking-widest px-8 py-4 rounded-md border border-border hover:border-accent hover:text-accent transition-all"
                  >
                    Download Sponsor Kit
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
