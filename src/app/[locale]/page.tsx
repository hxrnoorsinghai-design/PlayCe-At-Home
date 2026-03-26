import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { zones } from "@/content/zones";
import { Map, Activity, CalendarHeart, Heart } from "lucide-react";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("Index");
  
  // We use `es` or `en` from locale to select the right string from our mock data
  const getLocalized = (obj: { en: string; es: string }) => obj[locale as "en" | "es"] || obj.en;

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden bg-playceCream">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/illustrations/entry-hero.svg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-playceInk leading-tight">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-playceInk/80 max-w-2xl mx-auto">
            {locale === "en" 
              ? "A digital companion to Beloit Public Library’s Discovery PLAYce." 
              : "Un compañero digital para Discovery PLAYce de la Biblioteca Pública de Beloit."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/explore">
                <Map className="mr-2 h-5 w-5" />
                {locale === "en" ? "Explore the PLAYce" : "Explorar el PLAYce"}
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link href="/activities">
                <Activity className="mr-2 h-5 w-5" />
                {locale === "en" ? "Try an Activity" : "Prueba una actividad"}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-white">
              <Link href="/visit">
                <CalendarHeart className="mr-2 h-5 w-5" />
                {locale === "en" ? "Plan Your Visit" : "Planifica tu visita"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center space-y-4 border-t-8 border-t-playceBlue">
            <div className="mx-auto w-12 h-12 bg-playceBlue/10 rounded-full flex items-center justify-center text-playceBlue">
              <CalendarHeart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">
              {locale === "en" ? "Before you visit" : "Antes de visitar"}
            </h3>
            <p className="text-playceInk/70">
              {locale === "en" 
                ? "Preview the zones and see what your child will learn."
                : "Obtenga una vista previa de las zonas y vea lo que su hijo aprenderá."}
            </p>
          </Card>
          <Card className="p-8 text-center space-y-4 border-t-8 border-t-playceTeal">
            <div className="mx-auto w-12 h-12 bg-playceTeal/10 rounded-full flex items-center justify-center text-playceTeal">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">
              {locale === "en" ? "While you play" : "Mientras juegas"}
            </h3>
            <p className="text-playceInk/70">
              {locale === "en" 
                ? "Use our caregiver prompts to guide playtime and bonding."
                : "Utilice nuestras indicaciones para guiar el tiempo de juego y los vínculos."}
            </p>
          </Card>
          <Card className="p-8 text-center space-y-4 border-t-8 border-t-playceLeaf">
            <div className="mx-auto w-12 h-12 bg-playceLeaf/10 rounded-full flex items-center justify-center text-playceLeaf">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">
              {locale === "en" ? "Keep learning at home" : "Sigue aprendiendo en casa"}
            </h3>
            <p className="text-playceInk/70">
              {locale === "en" 
                ? "Extend the fun with simple, guided at-home mini games."
                : "Prolonga la diversión con minijuegos en casa guiados y sencillos."}
            </p>
          </Card>
        </div>
      </section>

      {/* Featured Zones Section */}
      <section className="max-w-7xl mx-auto px-4 w-full space-y-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
          {locale === "en" ? "Explore the Zones" : "Explorar las Zonas"}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.filter(z => z.slug !== "entry").map((zone) => (
            <Link key={zone.id} href={`/zones/${zone.slug}` as any} className="group">
              <Card className="h-full overflow-hidden hover:ring-2 hover:ring-offset-2 hover:ring-playceBlue transition-all">
                <div className={`h-32 w-full flex items-center justify-center`} style={{ backgroundColor: `var(--color-${zone.colorToken})` }}>
                  <span className="text-white opacity-80 group-hover:scale-110 transition-transform">
                    {/* Placeholder for real illustration */}
                    <div className="w-16 h-16 rounded-full bg-white/20" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{getLocalized(zone.title)}</h3>
                  <p className="text-sm text-playceInk/70">{getLocalized(zone.shortDescription)}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Caregiver Confidence Section */}
      <section className="max-w-4xl mx-auto px-4 w-full mt-8">
        <div className="bg-playceBlue/5 rounded-3xl p-8 md:p-12 text-center space-y-6">
          <Heart className="w-12 h-12 text-playceCoral mx-auto" />
          <h2 className="text-3xl font-heading font-bold">
            {locale === "en" ? "You do not need to be a teacher." : "No es necesario ser un profesor."}
          </h2>
          <p className="text-xl text-playceInk/80 max-w-2xl mx-auto">
            {locale === "en" 
              ? "Simple moments build learning. We'll show you what to say and do to confidently support your child's growth through play."
              : "Los pequeños momentos construyen el aprendizaje. Te mostraremos qué decir y hacer para apoyar con confianza el crecimiento de tu hijo a través del juego."}
          </p>
          <Button variant="secondary" asChild className="mt-4">
            <Link href="/guides">
              {locale === "en" ? "Read Caregiver Guides" : "Leer las Guías"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
