import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { zones } from "@/content/zones";
import { stations } from "@/content/stations";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ArrowRight, Info, ChevronLeft } from "lucide-react";

export default async function ZonePage({ params }: { params: Promise<{ locale: string, zoneSlug: string }> }) {
  const { locale, zoneSlug } = await params;
  const isEn = locale === "en";

  const zone = zones.find(z => z.slug === zoneSlug);
  if (!zone) notFound();

  const getLocalized = (obj: { en: string; es: string }) => obj[locale as "en" | "es"] || obj.en;
  const zoneStations = stations.filter(s => s.zoneId === zone.id);
  const zoneColor = `var(--color-${zone.colorToken})`;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden -mt-14">
        <div className="absolute inset-0">
          <Image
            src={zone.heroIllustration}
            alt={getLocalized(zone.title)}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 20%, color-mix(in srgb, ${zoneColor} 60%, black) 100%)`,
          }}
        />

        <div className="relative z-10 w-full px-4 pb-12 pt-32 max-w-6xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <Link
              href="/explore"
              className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {isEn ? "All Zones" : "Todas las Zonas"}
            </Link>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h1 className="text-fluid-5xl font-heading font-black text-white mb-4 drop-shadow-lg">
              {getLocalized(zone.title)}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-xl text-white/85 max-w-2xl mb-6">
              {getLocalized(zone.longDescription)}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="flex flex-wrap gap-2">
              <Badge variant="age" className="bg-white/20 text-white border-0 backdrop-blur-sm">
                {isEn ? "Ages" : "Edades"}: {zone.ageRanges.join(", ")}
              </Badge>
              {zone.learningGoals.map(goal => (
                <Badge key={goal} variant="skill" className="bg-white/20 text-white border-0 backdrop-blur-sm uppercase">
                  {goal}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo Gallery */}
      {zone.galleryImages && zone.galleryImages.length > 0 && (
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-fluid-2xl font-heading font-bold text-playceInk mb-8">
              {isEn ? "Inside This Zone" : "Dentro de Esta Zona"}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {zone.galleryImages.slice(0, 6).map((img, i) => (
              <StaggerItem key={img}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group hover-image-zoom">
                  <Image
                    src={img}
                    alt={`${getLocalized(zone.title)} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* Stations */}
      <section className="relative">
        <WaveDivider color="var(--color-warm-50)" flip />
        <div className="bg-warm-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-fluid-3xl font-heading font-bold text-playceInk mb-10">
                {isEn ? "Stations in this Zone" : "Estaciones en esta Zona"}
              </h2>
            </ScrollReveal>

            {zoneStations.length === 0 ? (
              <p className="text-warm-400 italic text-lg">
                {isEn ? "Stations coming soon..." : "Estaciones próximamente..."}
              </p>
            ) : (
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zoneStations.map((station) => (
                  <StaggerItem key={station.id}>
                    <Link href={`/stations/${station.slug}` as any} className="group block h-full">
                      <Card variant="photo" className="h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={station.heroImage}
                            alt={getLocalized(station.title)}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="p-6 flex-grow flex flex-col gap-3">
                          <h3 className="text-xl font-heading font-bold text-playceInk group-hover:text-playceBlue transition-colors">
                            {getLocalized(station.title)}
                          </h3>
                          <p className="text-warm-500 text-sm line-clamp-2">
                            {getLocalized(station.summary)}
                          </p>
                          <div className="mt-auto pt-3 flex items-center gap-1.5 text-sm font-heading font-bold group-hover:gap-3 transition-all" style={{ color: zoneColor }}>
                            {isEn ? "View Station" : "Ver Estación"}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
        </div>
        <WaveDivider color="var(--color-warm-50)" />
      </section>

      {/* Caregiver Tips */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <ScrollReveal>
          <Card variant="glass" className="p-8 md:p-10">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-sm"
                  style={{ backgroundColor: zoneColor }}
                >
                  <Info className="w-7 h-7" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-heading font-bold text-playceInk">
                  {isEn ? "Caregiver Quick Tip" : "Consejo Rápido para el Cuidador"}
                </h3>
                <p className="text-warm-500 leading-relaxed text-lg">
                  {isEn
                    ? "Let your child lead the way. Follow their curiosity and use our prompts at each station to spark conversation."
                    : "Deje que su hijo marque el camino. Siga su curiosidad y utilice nuestras indicaciones en cada estación para iniciar la conversación."}
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </section>
    </div>
  );
}
