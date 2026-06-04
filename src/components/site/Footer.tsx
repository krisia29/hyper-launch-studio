import { Twitter, Instagram, Youtube, Twitch, MessageCircle } from "lucide-react";

export function Footer() {
  const socials = [
    { Icon: Twitter, label: "Twitter" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Youtube, label: "YouTube" },
    { Icon: Twitch, label: "Twitch" },
    { Icon: MessageCircle, label: "Discord" },
  ];
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent glow-blue" />
            <span className="font-display font-bold tracking-widest">EXOTIC<span className="text-accent">MODZ</span></span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm">
            The next-gen automotive sandbox. Built by car people, for car people.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="h-10 w-10 grid place-items-center rounded-md border border-border hover:border-accent hover:text-accent transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-display text-xs uppercase tracking-widest text-accent mb-4">Studio</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">About</a></li>
            <li><a href="#" className="hover:text-foreground">Careers</a></li>
            <li><a href="#" className="hover:text-foreground">Press Kit</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-xs uppercase tracking-widest text-accent mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@exoticmodz.gg</li>
            <li>press@exoticmodz.gg</li>
            <li>support@exoticmodz.gg</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-8 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <span>© 2026 Exotic Modz Studios. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
