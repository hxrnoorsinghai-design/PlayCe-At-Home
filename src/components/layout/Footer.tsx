import { Link } from "@/i18n/routing";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PhotoMarquee } from "@/components/ui/PhotoMarquee";
import { Heart, MapPin, Clock, Mail } from "lucide-react";

const footerImages = [
  "/images/playce/hero-cover.jpg",
  "/images/playce/baby-area-tree.jpg",
  "/images/playce/lagoon-overview.jpg",
  "/images/playce/city-facades.jpg",
  "/images/playce/home-zone.jpg",
  "/images/playce/shimmer-tree.jpg",
  "/images/playce/play-table.jpg",
  "/images/playce/farmers-market.jpg",
  "/images/playce/wellness-nook.jpg",
  "/images/playce/bookquest-entry.jpg",
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* Wavy top divider */}
      <WaveDivider color="var(--color-playce-ink)" />

      {/* Photo Marquee Strip */}
      <div className="bg-playceInk pt-6 pb-8">
        <PhotoMarquee images={footerImages} height={140} speed={50} />
      </div>

      {/* Main Footer Content */}
      <div className="bg-playceInk relative overflow-hidden">
        {/* Confetti dots overlay */}
        <div className="absolute inset-0 confetti-bg opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* About Column */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-playceBlue to-playceTeal flex items-center justify-center">
                  <span className="text-white font-heading font-black text-lg">P</span>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-white leading-tight">PLAYce at Home</h3>
                  <span className="text-[10px] font-medium text-warm-500 uppercase tracking-[0.2em]">Digital Companion</span>
                </div>
              </div>
              <p className="text-warm-400 text-sm leading-relaxed">
                A digital companion to Beloit Public Library&apos;s Discovery PLAYce. 
                Explore, play, and learn together — at the library or from home.
              </p>
              {/* Zone color dots */}
              <div className="flex gap-2 pt-2">
                {["playceBlue", "playceTeal", "playceLeaf", "playceSun", "playceOrange", "playceCoral"].map((c) => (
                  <div key={c} className={`w-3 h-3 rounded-full bg-${c}`} />
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { href: "/explore" as const, label: "Explore Zones" },
                  { href: "/activities" as const, label: "Activities" },
                  { href: "/visit" as const, label: "Plan Your Visit" },
                  { href: "/guides" as const, label: "Caregiver Guides" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href as any}
                    className="text-warm-400 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 transform inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-warm-600 group-hover:bg-playceCoral transition-colors" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Visit Info Column */}
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
                Visit Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-warm-400 text-sm">
                  <MapPin className="w-4 h-4 text-playceLeaf mt-0.5 flex-shrink-0" />
                  <span>605 Eclipse Blvd<br />Beloit, WI 53511</span>
                </div>
                <div className="flex items-start gap-3 text-warm-400 text-sm">
                  <Clock className="w-4 h-4 text-playceSun mt-0.5 flex-shrink-0" />
                  <span>Mon–Sat: 9AM–8PM<br />Sun: 1PM–5PM</span>
                </div>
                <div className="flex items-start gap-3 text-warm-400 text-sm">
                  <Mail className="w-4 h-4 text-playceBlue mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@beloitlibrary.org" className="hover:text-white transition-colors">
                    info@beloitlibrary.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-warm-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warm-600">
              © {new Date().getFullYear()} Beloit Public Library. All rights reserved.
            </p>
            <p className="text-xs text-warm-600 flex items-center gap-1.5">
              Made with <Heart className="w-3 h-3 text-playceCoral animate-heartbeat" /> for Beloit families
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
