import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { stations } from "@/content/stations";
import { zones } from "@/content/zones";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ChevronLeft, MessageSquare, BrainCircuit, PlayCircle, Home, Printer, ArrowRight } from "lucide-react";

export default async function StationPage({ params }: { params: Promise<{ locale: string, stationSlug: string }> }) {
  const { locale, stationSlug } = await params;
  const isEn = locale === "en";

  const station = stations.find(s => s.slug === stationSlug);
  if (!station) notFound();

  const zone = zones.find(z => z.id === station.zoneId);
  if (!zone) notFound();

  const getLocalized = (obj: { en: string; es: string }) => obj[locale as "en" | "es"] || obj.en;
  const relatedStations = stations.filter(s => station.relatedStations.includes(s.slug));
  const zoneColor = `var(--color-${zone.colorToken})`;

  return (
    <div className="overflow-hidden">
      {/* Hero Image */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden -mt-14">
        <div className="absolute inset-0">
          <Image
            src={station.heroImage}
            alt={getLocalized(station.title)}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-playceCream via-playceInk/30 to-transparent" />

        <div className="relative z-10 w-full px-4 pb-10 pt-32 max-w-4xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <Link
              href={`/zones/${zone.slug}` as any}
              className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium mb-4 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {isEn ? "Back to" : "Volver a"} {getLocalized(zone.title)}
            </Link>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h1 className="text-fluid-4xl font-heading font-black text-white mb-4 drop-shadow-lg">
              {getLocalized(station.title)}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="age" className="bg-white/20 text-white border-0 backdrop-blur-sm">
                {isEn ? "Ages" : "Edades"}: {station.ageMin}-{station.ageMax}
              </Badge>
              {station.skillTags.map(skill => (
                <Badge key={skill} variant="skill" className="bg-white/20 text-white border-0 backdrop-blur-sm uppercase">
                  {skill}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Top Actions */}
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-wrap gap-3">
        <Button variant="outline" size="sm">
          <Printer className="w-4 h-4 mr-2" />
          {isEn ? "Print Card" : "Imprimir"}
        </Button>
        <FavoriteButton stationId={station.id} locale={locale} />
      </div>

      {/* Content Grid */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal variant="slideRight">
            <Card className="p-7 h-full" style={{ borderTop: `4px solid ${zoneColor}` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl text-white" style={{ backgroundColor: zoneColor }}>
                  <PlayCircle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-heading font-bold text-playceInk">
                  {isEn ? "What children do here" : "Qué hacen los niños aquí"}
                </h2>
              </div>
              <p className="text-warm-500 leading-relaxed">
                {getLocalized(station.whatChildrenDo)}
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft">
            <Card className="p-7 h-full" style={{ borderTop: `4px solid var(--color-playceTeal)` }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-playceTeal text-white">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-heading font-bold text-playceInk">
                  {isEn ? "What children learn" : "Qué aprenden los niños"}
                </h2>
              </div>
              <ul className="grid grid-cols-2 gap-2 mt-3">
                {station.learningGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-center text-warm-500 text-sm">
                    <span className="w-2 h-2 rounded-full bg-playceTeal mr-2 flex-shrink-0" />
                    <span className="capitalize">{goal}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Caregiver Prompts */}
      <section className="relative">
        <WaveDivider color="var(--color-warm-50)" flip />
        <div className="bg-warm-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-playceBlue text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-playceInk">
                  {isEn ? "What caregivers can say" : "Qué pueden decir los cuidadores"}
                </h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {station.caregiverPrompts.map((prompt, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-white p-5 rounded-2xl shadow-playful border border-warm-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-playceBlue-50 flex items-center justify-center flex-shrink-0 text-lg">
                      💬
                    </div>
                    <p className="text-playceInk font-medium text-lg leading-snug">
                      &ldquo;{getLocalized(prompt)}&rdquo;
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        <WaveDivider color="var(--color-warm-50)" />
      </section>

      {/* Try At Home */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <ScrollReveal>
          <Card variant="feature" className="overflow-hidden">
            <div className="bg-gradient-to-r from-playceOrange to-playceCoral text-white p-6 md:px-8 flex items-center gap-3">
              <Home className="w-6 h-6" />
              <h2 className="text-2xl font-heading font-bold">
                {isEn ? "Try it at home" : "Pruébalo en casa"}
              </h2>
            </div>
            <div className="p-6 md:p-8 bg-playceOrange-50">
              <p className="text-lg text-warm-600 mb-6 font-medium leading-relaxed">
                {getLocalized(station.atHomeActivity)}
              </p>
              <Button variant="primary" size="lg">
                {isEn ? "Start Activity Now" : "Comenzar la Actividad Ahora"}
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </Card>
        </ScrollReveal>
      </section>

      {/* Gallery */}
      {station.galleryImages && station.galleryImages.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <ScrollReveal>
            <h2 className="text-xl font-heading font-bold text-playceInk mb-6">
              {isEn ? "Station Gallery" : "Galería de la Estación"}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-3 gap-3">
            {station.galleryImages.map((img, i) => (
              <StaggerItem key={img}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group hover-image-zoom">
                  <Image
                    src={img}
                    alt={`${getLocalized(station.title)} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* Related Stations */}
      {relatedStations.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <ScrollReveal>
            <div className="pt-8 border-t border-warm-200">
              <h2 className="text-2xl font-heading font-bold text-playceInk mb-6">
                {isEn ? "Try these stations next" : "Prueba estas estaciones a continuación"}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedStations.map(rs => (
                  <Link key={rs.id} href={`/stations/${rs.slug}` as any} className="group">
                    <Card className="p-4 flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 hover-image-zoom">
                        <Image
                          src={rs.heroImage}
                          alt={getLocalized(rs.title)}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-playceInk text-sm group-hover:text-playceBlue transition-colors">
                          {getLocalized(rs.title)}
                        </h3>
                        <p className="text-xs text-warm-400 uppercase">{rs.skillTags[0]}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}
