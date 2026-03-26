import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { zones } from "@/content/zones";
import { Card } from "@/components/ui/Card";
import { MapPin } from "lucide-react";

export default async function ExplorePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("Index");
  
  const getLocalized = (obj: { en: string; es: string }) => obj[locale as "en" | "es"] || obj.en;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-playceInk">
          {locale === "en" ? "Explore the PLAYce" : "Explorar el PLAYce"}
        </h1>
        <p className="text-xl text-playceInk/80 max-w-2xl mx-auto">
          {locale === "en" 
            ? "Discover our interactive zones before you visit, or find activities to continue the learning at home."
            : "Descubra nuestras zonas interactivas antes de visitarnos, o encuentre actividades para continuar aprendiendo en casa."}
        </p>
      </div>

      {/* Stylized Illustrated Map (Grid layout for MVP) */}
      <div className="bg-playceCream/50 rounded-3xl p-8 border border-gray-100 shadow-inner relative overflow-hidden min-h-[600px] flex flex-col justify-center gap-6">
        <div className="absolute inset-0 opacity-10 bg-[url('/illustrations/map-background.svg')] bg-cover" />
        
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          {zones.map((zone) => (
            <Link key={zone.id} href={`/zones/${zone.slug}` as any} className="group flex">
              <Card className="w-full flex flex-col overflow-hidden hover:ring-4 hover:ring-offset-4 transition-all duration-300 transform group-hover:-translate-y-2 bg-white/90 backdrop-blur-sm" style={{ '--tw-ring-color': `var(--color-${zone.colorToken})` } as React.CSSProperties}>
                <div className="h-3 bg-gray-200 w-full relative">
                  <div className="absolute inset-0" style={{ backgroundColor: `var(--color-${zone.colorToken})` }} />
                </div>
                <div className="p-6 flex-grow flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: `var(--color-${zone.colorToken})` }}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading">{getLocalized(zone.title)}</h2>
                  </div>
                  
                  <p className="text-playceInk/70">
                    {getLocalized(zone.shortDescription)}
                  </p>

                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {zone.learningGoals.map((goal) => (
                      <span key={goal} className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-playceInk/60 uppercase tracking-wider">
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
