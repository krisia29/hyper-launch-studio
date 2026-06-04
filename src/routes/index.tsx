import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { Showcase } from "@/components/site/Showcase";
import { Waitlist } from "@/components/site/Waitlist";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exotic Modz — Build It. Race It. Own The Night." },
      { name: "description", content: "Exotic Modz is the next-gen automotive sandbox. Engineer hypercars, dominate neon-lit streets, and join the waitlist for closed beta." },
      { property: "og:title", content: "Exotic Modz — Build It. Race It. Own The Night." },
      { property: "og:description", content: "The next-gen automotive sandbox. Join 42K+ drivers on the waitlist." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <Showcase />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
