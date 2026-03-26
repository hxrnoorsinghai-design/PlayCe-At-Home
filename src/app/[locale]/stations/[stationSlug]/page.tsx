import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { stations } from "@/content/stations";
import { zones } from "@/content/zones";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { ChevronLeft, MessageSquare, BrainCircuit, PlayCircle, Home, Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default async function StationPage({ params }: { params: Promise<{ locale: string, stationSlug: string }> }) {
  const { locale, stationSlug } = await params;
  const t = await getTranslations("Index");
  
  const station = stations.find(s => s.slug === stationSlug);
  if (!station) {
    notFound();
  }

  const zone = zones.find(z => z.id === station.zoneId);
  if (!zone) {
    notFound();
  }

  const getLocalized = (obj: { en: string; es: string }) => obj[locale as "en" | "es"] || obj.en;

  const relatedStations = stations.filter(s => station.relatedStations.includes(s.slug));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* Breadcrumb & Top Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link 
          href={`/zones/${zone.slug}` as any} 
          className="inline-flex items-center text-playceBlue hover:underline font-medium"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          {locale === "en" ? "Back to" : "Volver a"} {getLocalized(zone.title)}
        </Link>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none">
            <Printer className="w-4 h-4 mr-2" />
            {locale === "en" ? "Print Card" : "Imprimir"}
          </Button>
          <FavoriteButton stationId={station.id} locale={locale} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="rounded-3xl bg-playceCream p-8 md:p-12 text-center border border-playceSun/20">
        <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-4xl">
          🎪
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-playceInk mb-4">
          {getLocalized(station.title)}
        </h1>
        <p className="text-xl text-playceInk/70 max-w-2xl mx-auto">
          {getLocalized(station.physicalDescription)}
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <Badge variant="age">{locale === "en" ? "Ages" : "Edades"}: {station.ageMin}-{station.ageMax}</Badge>
          {station.skillTags.map(skill => (
            <Badge key={skill} variant="skill" className="uppercase">{skill}</Badge>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* What children do */}
        <Card className="p-8 border-t-8 border-t-playceBlue">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-playceBlue/10 rounded-lg text-playceBlue">
              <PlayCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-playceInk">
              {locale === "en" ? "What children do here" : "Qué hacen los niños aquí"}
            </h2>
          </div>
          <p className="text-playceInk/80 text-lg leading-relaxed">
            {getLocalized(station.whatChildrenDo)}
          </p>
        </Card>

        {/* What children learn */}
        <Card className="p-8 border-t-8 border-t-playceTeal">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-playceTeal/10 rounded-lg text-playceTeal">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-playceInk">
              {locale === "en" ? "What children learn" : "Qué aprenden los niños"}
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 mt-4">
            {station.learningGoals.map((goal, idx) => (
              <li key={idx} className="flex items-center text-playceInk/80">
                <span className="w-2 h-2 rounded-full bg-playceTeal mr-2" />
                <span className="capitalize">{goal}</span>
              </li>
            ))}
          </ul>
        </Card>

      </div>

      {/* Caregiver Prompts */}
      <Card className="p-8 bg-playceBlue/5 border-none shadow-none">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-playceBlue/20 rounded-lg text-playceBlue">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-playceInk">
            {locale === "en" ? "What caregivers can say" : "Qué pueden decir los cuidadores"}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {station.caregiverPrompts.map((prompt, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <span className="text-2xl">💬</span>
              <p className="text-playceInk font-medium text-lg leading-snug">"{getLocalized(prompt)}"</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Try It At Home */}
      <Card className="overflow-hidden border-playceOrange/30">
        <div className="bg-playceOrange text-white p-6 md:px-8 flex items-center gap-3">
          <Home className="w-6 h-6" />
          <h2 className="text-2xl font-bold font-heading">
            {locale === "en" ? "Try it at home" : "Pruébalo en casa"}
          </h2>
        </div>
        <div className="p-6 md:p-8 bg-playceOrange/5">
          <p className="text-xl text-playceInk/80 mb-6 font-medium">
            {getLocalized(station.atHomeActivity)}
          </p>
          <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl">
            {locale === "en" ? "Start Activity Now" : "Comenzar la Actividad Ahora"}
          </Button>
        </div>
      </Card>

      {/* Related Stations */}
      {relatedStations.length > 0 && (
        <div className="pt-8 border-t border-gray-100 space-y-6">
          <h2 className="text-2xl font-bold font-heading text-playceInk">
            {locale === "en" ? "Try these stations next" : "Prueba estas estaciones a continuación"}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedStations.map(rs => (
              <Link key={rs.id} href={`/stations/${rs.slug}` as any}>
                <Card className="p-4 hover:ring-2 hover:ring-playceBlue transition-all flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-bold text-playceInk">{getLocalized(rs.title)}</h3>
                    <p className="text-xs text-playceInk/60 uppercase">{rs.skillTags[0]}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
