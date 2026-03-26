import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { zones } from "@/content/zones";
import { stations } from "@/content/stations";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Info, ArrowRight } from "lucide-react";

export default async function ZonePage({ params }: { params: Promise<{ locale: string, zoneSlug: string }> }) {
  const { locale, zoneSlug } = await params;
  const t = await getTranslations("Index");
  
  const zone = zones.find(z => z.slug === zoneSlug);
  if (!zone) {
    notFound();
  }

  const getLocalized = (obj: { en: string; es: string }) => obj[locale as "en" | "es"] || obj.en;
  
  const zoneStations = stations.filter(s => s.zoneId === zone.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Zone Header */}
      <div className="rounded-3xl p-8 md:p-16 text-white text-center shadow-lg relative overflow-hidden" 
           style={{ backgroundColor: `var(--color-${zone.colorToken})` }}>
        <div className="absolute inset-0 opacity-20 bg-[url('/illustrations/zone-bg.svg')] bg-cover" />
        <div className="relative z-10 space-y-6">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto backdrop-blur-sm">
            <MapPin className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold pb-2">
            {getLocalized(zone.title)}
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-90">
            {getLocalized(zone.longDescription)}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <Badge variant="age" className="bg-white/20 text-white group-hover:bg-white border-0">
              {locale === "en" ? "Ages" : "Edades"}: {zone.ageRanges.join(", ")}
            </Badge>
            {zone.learningGoals.map(goal => (
              <Badge key={goal} variant="skill" className="bg-white/20 text-white border-0 uppercase">
                {goal}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Stations inside Zone */}
      <div className="space-y-8">
        <h2 className="text-3xl font-heading font-bold text-playceInk">
          {locale === "en" ? "Stations in this Zone" : "Estaciones en esta zona"}
        </h2>
        {zoneStations.length === 0 ? (
          <p className="text-playceInk/70 italic">
            {locale === "en" ? "Stations coming soon..." : "Estaciones próximamente..."}
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zoneStations.map((station) => (
              <Link key={station.id} href={`/stations/${station.slug}` as any} className="group">
                <Card className="h-full flex flex-col hover:ring-2 hover:ring-playceBlue hover:ring-offset-2 transition-all">
                  <div className="h-40 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                    {/* Mock illustration space */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/illustrations/pattern.svg')] bg-cover" />
                    <span className="text-4xl">🏷️</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col gap-4">
                    <h3 className="text-xl font-bold font-heading group-hover:text-playceBlue transition-colors">
                      {getLocalized(station.title)}
                    </h3>
                    <p className="text-playceInk/70 line-clamp-2">
                      {getLocalized(station.summary)}
                    </p>
                    <div className="mt-auto pt-4 flex items-center text-playceBlue font-medium text-sm group-hover:translate-x-1 transition-transform">
                      {locale === "en" ? "View Station Details" : "Ver detalles de la estación"}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Caregiver Tips */}
      <div className="bg-playceCream rounded-3xl p-8 border border-gray-100">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-playceCoral shadow-sm">
              <Info className="w-6 h-6" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading text-playceInk">
              {locale === "en" ? "Caregiver Quick Tip" : "Consejo rápido para el cuidador"}
            </h3>
            <p className="text-playceInk/80">
              {locale === "en"
                ? "Let your child lead the way. Follow their curiosity and use our prompts at each station to spark conversation."
                : "Deje que su hijo marque el camino. Siga su curiosidad y utilice nuestras indicaciones en cada estación para iniciar la conversación."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
