import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="waitlist" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 -z-10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] -z-10" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4">// Early Access</div>
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
          Lock In Your <span className="gradient-text">Founder Spot</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Join 42,000+ drivers on the waitlist. Founders get exclusive in-game livery, early closed-beta keys, and a permanent OG badge.
        </p>

        {submitted ? (
          <div className="rounded-lg border border-accent/50 bg-accent/10 p-8 glow-green">
            <div className="font-display text-2xl uppercase text-accent">You're In.</div>
            <p className="text-muted-foreground mt-2">Check your inbox — your founder code is on the way.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="driver@exoticmodz.gg"
              className="flex-1 h-14 px-5 rounded-md bg-card border border-border focus:border-accent focus:outline-none focus:glow-green transition-all font-sans"
            />
            <button
              type="submit"
              className="h-14 px-8 font-display uppercase tracking-widest text-sm bg-accent text-accent-foreground rounded-md hover:glow-green transition-all clip-corner"
            >
              Reserve →
            </button>
          </form>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs font-display uppercase tracking-widest text-muted-foreground">
          <span>✓ Exclusive Livery</span>
          <span>✓ Closed Beta Key</span>
          <span>✓ Founder Badge</span>
        </div>
      </div>
    </section>
  );
}
