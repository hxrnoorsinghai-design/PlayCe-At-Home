import Image from "next/image";
import { Link } from "@/i18n/routing";
import { zones } from "@/content/zones";
import { Card } from "@/components/ui/Card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { Map, ArrowRight } from "lucide-react";

export default async function ExplorePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";
  const getLocalized = (obj: { en: string; es: string }) => obj[locale as "en" | "es"] || obj.en;

  return (
    <div className="overflow-hidden">
      {/* Hero with overhead map */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mt-14">
        <div className="absolute inset-0">
          <Image
            src="/images/playce/overhead-view.jpg"
            alt="Discovery PLAYce overhead view"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-playceInk/70 via-playceInk/50 to-playceCream" />

        <div className="relative z-10 text-center px-4 py-32">
          <ScrollReveal variant="fadeUp">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/20">
              <Map className="w-4 h-4 text-playceSun" />
              <span className="text-white/90 text-sm font-medium">
                {isEn ? "Interactive Map" : "Mapa Interactivo"}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.15}>
            <h1 className="text-fluid-5xl font-heading font-black text-white mb-4 drop-shadow-lg">
              {isEn ? "Explore the PLAYce" : "Explorar el PLAYce"}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              {isEn
                ? "Discover our interactive zones before you visit, or find activities to continue the learning at home."
                : "Descubra nuestras zonas interactivas antes de visitarnos, o encuentre actividades para continuar aprendiendo en casa."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Zone Cards Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {zones.map((zone) => (
            <StaggerItem key={zone.id}>
              <Link href={`/zones/${zone.slug}` as any} className="group flex h-full">
                <Card variant="photo" className="w-full flex flex-col overflow-hidden">
                  {/* Image header */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={zone.heroIllustration}
                      alt={getLocalized(zone.title)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Zone color bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: `var(--color-${zone.colorToken})` }}
                    />

                    {/* Age badge */}
                    <div className="absolute top-4 right-4 frosted-glass rounded-full px-3 py-1 text-xs font-bold text-white">
                      {zone.ageRanges.join(", ")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm"
                        style={{ backgroundColor: `var(--color-${zone.colorToken})` }}
                      >
                        <Map className="w-4 h-4" />
                      </div>
                      <h2 className="text-xl font-heading font-bold text-playceInk group-hover:text-playceBlue transition-colors">
                        {getLocalized(zone.title)}
                      </h2>
                    </div>

                    <p className="text-warm-500 text-sm leading-relaxed">
                      {getLocalized(zone.shortDescription)}
                    </p>

                    <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
                      {zone.learningGoals.map((goal) => (
                        <span
                          key={goal}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `color-mix(in srgb, var(--color-${zone.colorToken}) 10%, transparent)`,
                            color: `var(--color-${zone.colorToken})`,
                          }}
                        >
                          {goal}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-heading font-bold mt-2 group-hover:gap-3 transition-all" style={{ color: `var(--color-${zone.colorToken})` }}>
                      {isEn ? "Explore" : "Explorar"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
