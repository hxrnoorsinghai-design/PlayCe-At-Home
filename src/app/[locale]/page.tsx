import Image from "next/image";
import { Link } from "@/i18n/routing";
import { zones } from "@/content/zones";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { PhotoMarquee } from "@/components/ui/PhotoMarquee";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Sparkles, Map, Heart, ChevronDown } from "lucide-react";

const galleryImages = [
  "/images/playce/hero-magical.png",
  "/images/playce/baby-area-tree.jpg",
  "/images/playce/lagoon-overview.jpg",
  "/images/playce/city-facades.jpg",
  "/images/playce/home-zone.jpg",
  "/images/playce/shimmer-tree.jpg",
  "/images/playce/play-table.jpg",
  "/images/playce/farmers-market.jpg",
  "/images/playce/wellness-nook.jpg",
  "/images/playce/bookquest-entry.jpg",
  "/images/playce/fire-station.jpg",
  "/images/playce/pavilion.jpg",
];

const mosaicImages = [
  { src: "/images/playce/baby-area-sensory.jpg", span: false },
  { src: "/images/playce/shimmer-tree.jpg", span: true },
  { src: "/images/playce/city-facades.jpg", span: false },
  { src: "/images/playce/play-table.jpg", span: false },
  { src: "/images/playce/lagoon-paddleboat.jpg", span: false },
  { src: "/images/playce/home-zone.jpg", span: false },
  { src: "/images/playce/farmers-market.jpg", span: false },
  { src: "/images/playce/wellness-nook.jpg", span: false },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const getLocalized = (obj: { en: string; es: string }) => obj[locale as "en" | "es"] || obj.en;

  return (
    <div className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 1: CINEMATIC HERO                              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden -mt-14">
        {/* Background image with Ken Burns effect */}
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/images/playce/hero-magical.png"
            alt="BPL Discovery PLAYce"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-playceInk/60 via-playceInk/40 to-playceCream" />

        {/* Floating decorative shapes */}
        <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-playceSun/20 blur-sm animate-float-delay-1" />
        <div className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-playceBlue/15 blur-sm animate-float-delay-2" />
        <div className="absolute bottom-40 left-[20%] w-20 h-20 rounded-full bg-playceCoral/15 blur-sm animate-float-delay-3" />
        <div className="absolute top-60 right-[30%] w-12 h-12 rounded-full bg-playceLeaf/20 blur-sm animate-float" />
        <div className="absolute bottom-60 right-[10%] w-14 h-14 rounded-full bg-playceTeal/20 blur-sm animate-float-delay-1" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal variant="fadeIn" duration={1}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-playceSun" />
              <span className="text-white/90 text-sm font-medium">
                {isEn ? "Beloit Public Library" : "Biblioteca Pública de Beloit"}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2} duration={0.8}>
            <h1 className="text-fluid-hero font-heading font-black text-white leading-[1.05] mb-6 drop-shadow-lg">
              {isEn ? (
                <>Discovery<br /><span className="text-gradient">PLAYce</span> at Home</>
              ) : (
                <>Discovery<br /><span className="text-gradient">PLAYce</span> en Casa</>
              )}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.5} duration={0.8}>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              {isEn
                ? "Where play meets learning. Explore the magical worlds of Discovery PLAYce — at the library or from your living room."
                : "Donde el juego se encuentra con el aprendizaje. Explora los mundos mágicos de Discovery PLAYce — en la biblioteca o desde tu hogar."}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/explore" as any}>
                <Button size="lg" variant="primary">
                  {isEn ? "Explore the PLAYce" : "Explorar el PLAYce"}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link href={"/activities" as any}>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-playceInk">
                  {isEn ? "Play at Home" : "Jugar en Casa"}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 2: PHOTO MOSAIC                                */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-playceBlue uppercase tracking-wider">
              {isEn ? "Step Inside" : "Entra"}
            </span>
            <h2 className="text-fluid-4xl font-heading font-black text-playceInk mt-2">
              {isEn ? "A World Built for Play" : "Un Mundo Construido para Jugar"}
            </h2>
            <p className="text-warm-500 text-lg mt-4 max-w-xl mx-auto">
              {isEn
                ? "5 immersive zones designed by LUCI for the Beloit Public Library."
                : "5 zonas inmersivas diseñadas por LUCI para la Biblioteca Pública de Beloit."}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {mosaicImages.map((img, i) => (
            <StaggerItem
              key={img.src}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                img.span ? "md:col-span-2 md:row-span-2" : ""
              } ${i % 3 === 0 ? "rotate-[-1deg]" : i % 3 === 1 ? "rotate-[0.5deg]" : "rotate-[1deg]"}`}
            >
              <div className={`relative ${img.span ? "h-64 md:h-full min-h-[300px]" : "h-48 md:h-56"}`}>
                <Image
                  src={img.src}
                  alt={`PLAYce space ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0"
                  sizes={img.span ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-playceInk/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 3: HOW IT WORKS — 3 STEP JOURNEY               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative">
        <WaveDivider color="var(--color-warm-50)" flip />
        <div className="bg-warm-50 py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="text-sm font-semibold text-playceTeal uppercase tracking-wider">
                  {isEn ? "How It Works" : "Cómo Funciona"}
                </span>
                <h2 className="text-fluid-4xl font-heading font-black text-playceInk mt-2">
                  {isEn ? "Your PLAYce Journey" : "Tu Viaje PLAYce"}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-playceBlue via-playceSun to-playceCoral opacity-20" />

              {[
                {
                  num: "01",
                  color: "playceBlue",
                  image: "/images/playce/overhead-view.jpg",
                  titleEn: "Discover",
                  titleEs: "Descubre",
                  descEn: "Explore 5 interactive zones, each with hands-on stations designed for children 0-6.",
                  descEs: "Explora 5 zonas interactivas, cada una con estaciones prácticas diseñadas para niños de 0 a 6 años.",
                },
                {
                  num: "02",
                  color: "playceSun",
                  image: "/images/playce/baby-area-tree.jpg",
                  titleEn: "Play & Learn",
                  titleEs: "Juega y Aprende",
                  descEn: "Use caregiver prompts to spark conversations. Every station builds real skills through play.",
                  descEs: "Usa indicaciones para cuidadores para iniciar conversaciones. Cada estación construye habilidades reales a través del juego.",
                },
                {
                  num: "03",
                  color: "playceCoral",
                  image: "/images/playce/home-zone.jpg",
                  titleEn: "Continue at Home",
                  titleEs: "Continúa en Casa",
                  descEn: "Take the fun home with digital activities, mini-games, and printable play guides.",
                  descEs: "Lleva la diversión a casa con actividades digitales, minijuegos y guías de juego imprimibles.",
                },
              ].map((step, index) => (
                <ScrollReveal key={step.num} delay={index * 0.15} variant="fadeUp">
                  <div className="flex flex-col items-center text-center group">
                    {/* Number bubble */}
                    <div className={`w-14 h-14 rounded-full bg-${step.color} text-white flex items-center justify-center font-heading font-black text-lg mb-6 shadow-colored-${step.color === "playceBlue" ? "blue" : step.color === "playceSun" ? "sun" : "coral"} group-hover:scale-110 transition-transform`}>
                      {step.num}
                    </div>

                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 hover-image-zoom">
                      <Image
                        src={step.image}
                        alt={step.titleEn}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-playceInk mb-3">
                      {isEn ? step.titleEn : step.titleEs}
                    </h3>
                    <p className="text-warm-500 leading-relaxed">
                      {isEn ? step.descEn : step.descEs}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
        <WaveDivider color="var(--color-warm-50)" />
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 4: ZONE EXPLORER                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-playceCoral uppercase tracking-wider">
              {isEn ? "Our Worlds" : "Nuestros Mundos"}
            </span>
            <h2 className="text-fluid-4xl font-heading font-black text-playceInk mt-2">
              {isEn ? "Explore Five Magical Zones" : "Explora Cinco Zonas Mágicas"}
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {zones.map((zone, index) => (
            <ScrollReveal key={zone.id} variant={index % 2 === 0 ? "slideRight" : "slideLeft"}>
              <Link href={`/zones/${zone.slug}` as any} className="group block">
                <Card variant="feature" className="overflow-hidden">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Image side */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
                      <Image
                        src={zone.heroIllustration}
                        alt={getLocalized(zone.title)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
                      {/* Zone color accent */}
                      <div
                        className="absolute top-0 left-0 w-1.5 h-full"
                        style={{ backgroundColor: `var(--color-${zone.colorToken})` }}
                      />
                    </div>

                    {/* Content side */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                          style={{ backgroundColor: `var(--color-${zone.colorToken})` }}
                        >
                          <Map className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: `var(--color-${zone.colorToken})` }}>
                          {zone.ageRanges.join(", ")} {isEn ? "years" : "años"}
                        </span>
                      </div>

                      <h3 className="text-fluid-2xl font-heading font-black text-playceInk mb-3 group-hover:text-playceBlue transition-colors">
                        {getLocalized(zone.title)}
                      </h3>

                      <p className="text-warm-500 mb-6 leading-relaxed">
                        {getLocalized(zone.longDescription)}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {zone.learningGoals.map((goal) => (
                          <span
                            key={goal}
                            className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                            style={{
                              backgroundColor: `color-mix(in srgb, var(--color-${zone.colorToken}) 10%, transparent)`,
                              color: `var(--color-${zone.colorToken})`,
                            }}
                          >
                            {goal}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 font-heading font-bold text-sm group-hover:gap-4 transition-all" style={{ color: `var(--color-${zone.colorToken})` }}>
                        {isEn ? "Explore Zone" : "Explorar Zona"}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 5: PHOTO GALLERY MARQUEE                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-16 overflow-hidden">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-fluid-2xl font-heading font-bold text-warm-400 italic">
              {isEn ? "Moments at the PLAYce" : "Momentos en el PLAYce"}
            </h2>
          </div>
        </ScrollReveal>
        <PhotoMarquee images={galleryImages} height={200} speed={35} />
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 6: CAREGIVER CONFIDENCE                        */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative">
        <WaveDivider color="var(--color-playce-coral-50)" flip />
        <div className="gradient-warm py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              {/* Image side */}
              <ScrollReveal variant="slideRight" className="w-full md:w-1/2">
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-playful">
                    <Image
                      src="/images/playce/mood-board.jpg"
                      alt={isEn ? "Parent and child playing together" : "Padre e hijo jugando juntos"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Decorative floating card */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-playful animate-float-delay-1 hidden md:block">
                    <div className="flex items-center gap-3">
                      <Heart className="w-8 h-8 text-playceCoral animate-heartbeat" />
                      <div>
                        <div className="font-heading font-bold text-playceInk text-lg">100%</div>
                        <div className="text-warm-400 text-xs">{isEn ? "Play-based" : "Basado en juego"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Content side */}
              <ScrollReveal variant="slideLeft" className="w-full md:w-1/2">
                <span className="text-sm font-semibold text-playceCoral uppercase tracking-wider">
                  {isEn ? "For Caregivers" : "Para Cuidadores"}
                </span>
                <h2 className="text-fluid-3xl font-heading font-black text-playceInk mt-3 mb-6">
                  {isEn
                    ? "You don't need to be a teacher."
                    : "No necesitas ser un profesor."}
                </h2>
                <p className="text-lg text-warm-500 leading-relaxed mb-6">
                  {isEn
                    ? "Discovery PLAYce was built for you. Follow your child's lead, use our conversation prompts, and watch learning happen naturally through play."
                    : "Discovery PLAYce fue construido para ti. Sigue la iniciativa de tu hijo, usa nuestras indicaciones de conversación y observa cómo el aprendizaje ocurre naturalmente a través del juego."}
                </p>
                <p className="text-warm-400 mb-8 italic">
                  {isEn
                    ? "\"Talk, read, sing, and play — that's all it takes.\""
                    : "\"Habla, lee, canta y juega — eso es todo lo que se necesita.\""}
                </p>
                <Link href={"/guides" as any}>
                  <Button variant="playful" size="lg">
                    {isEn ? "Read Caregiver Guides" : "Leer Guías para Cuidadores"}
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <WaveDivider color="var(--color-playce-coral-50)" />
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 7: MAP TEASER CTA                              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/playce/overhead-view.jpg"
            alt="Discovery PLAYce overhead view"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-playceInk/70" />

        <ScrollReveal className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
          <h2 className="text-fluid-4xl font-heading font-black text-white mb-6">
            {isEn ? "Ready to explore?" : "¿Listo para explorar?"}
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            {isEn
              ? "Discover all 5 zones, explore our interactive map, and plan the perfect visit for your family."
              : "Descubre las 5 zonas, explora nuestro mapa interactivo y planifica la visita perfecta para tu familia."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/explore" as any}>
              <Button variant="magic" size="lg">
                <Map className="w-5 h-5 mr-1" />
                {isEn ? "View Interactive Map" : "Ver Mapa Interactivo"}
              </Button>
            </Link>
            <Link href={"/visit" as any}>
              <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-playceInk">
                {isEn ? "Plan Your Visit" : "Planifica Tu Visita"}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
