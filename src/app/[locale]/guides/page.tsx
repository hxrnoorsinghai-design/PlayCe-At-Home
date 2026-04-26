import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { BookOpen, Smile, MessageCircle, ArrowRight } from "lucide-react";

export default async function CaregiverGuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const guides = [
    {
      titleEn: "How to play with your child without overthinking it",
      titleEs: "Cómo jugar con su hijo sin pensarlo demasiado",
      descEn: "You don't need a lesson plan. Just follow their lead and have fun. This guide gives you simple, actionable ways to engage during play.",
      descEs: "No necesitas un plan de lección. Solo sigue su ejemplo y diviértete. Esta guía te da formas simples y prácticas de participar durante el juego.",
      icon: Smile,
      color: "playceCoral",
      image: "/images/playce/mood-board.jpg",
    },
    {
      titleEn: "Helping build early reading skills through play",
      titleEs: "Ayudando a desarrollar habilidades tempranas de lectura a través del juego",
      descEn: "Simple ways to point out letters, use rich vocabulary, and tell stories together. Every interaction builds literacy.",
      descEs: "Formas sencillas de señalar letras, usar vocabulario rico y contar historias juntos. Cada interacción construye la lectura.",
      icon: BookOpen,
      color: "playceBlue",
      image: "/images/playce/bookquest-entry.jpg",
    },
    {
      titleEn: "Supporting emotions through pretend play",
      titleEs: "Apoyando las emociones a través del juego de simulación",
      descEn: "Using the Wellness and City zones to explore big feelings playfully. Help your child name and manage emotions.",
      descEs: "Usar las zonas de Bienestar y Ciudad para explorar grandes sentimientos de forma lúdica. Ayuda a tu hijo a nombrar y manejar emociones.",
      icon: MessageCircle,
      color: "playceTeal",
      image: "/images/playce/wellness-nook.jpg",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 px-4 gradient-mesh">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal variant="fadeUp">
            <span className="text-sm font-semibold text-playceCoral uppercase tracking-wider">
              {isEn ? "For Caregivers" : "Para Cuidadores"}
            </span>
            <h1 className="text-fluid-5xl font-heading font-black text-playceInk mt-2 mb-4">
              {isEn ? "Caregiver Guides" : "Guías para Cuidadores"}
            </h1>
            <p className="text-lg text-warm-500 max-w-xl mx-auto">
              {isEn
                ? "Supportive editorial content to empower you as a caregiver."
                : "Contenido editorial de apoyo para empoderarte como cuidador."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Guide (first one) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ScrollReveal>
          {(() => {
            const FeaturedIcon = guides[0].icon;
            return (
          <Card variant="feature" className="overflow-hidden group cursor-pointer">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[300px] overflow-hidden">
                <Image
                  src={guides[0].image}
                  alt={guides[0].titleEn}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-sm mb-6 bg-${guides[0].color}`}
                >
                  <FeaturedIcon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-warm-400 mb-2">
                  {isEn ? "Featured Guide" : "Guía Destacada"}
                </span>
                <h2 className="text-fluid-2xl font-heading font-black text-playceInk mb-4 group-hover:text-playceBlue transition-colors">
                  {isEn ? guides[0].titleEn : guides[0].titleEs}
                </h2>
                <p className="text-warm-500 leading-relaxed mb-6">
                  {isEn ? guides[0].descEn : guides[0].descEs}
                </p>
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-playceCoral group-hover:gap-4 transition-all">
                  {isEn ? "Read Guide" : "Leer Guía"}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Card>
            );
          })()}
        </ScrollReveal>
      </section>

      {/* Remaining Guides */}
      <section className="relative">
        <WaveDivider color="var(--color-warm-50)" flip />
        <div className="bg-warm-50 py-16 px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {guides.slice(1).map((guide, idx) => {
              const Icon = guide.icon;
              const isReversed = idx % 2 !== 0;

              return (
                <ScrollReveal key={guide.titleEn} variant={isReversed ? "slideLeft" : "slideRight"}>
                  <Card variant="feature" className="overflow-hidden group cursor-pointer">
                    <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
                      <div className="relative w-full md:w-2/5 h-56 md:h-auto min-h-[240px] overflow-hidden">
                        <Image
                          src={guide.image}
                          alt={guide.titleEn}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      </div>
                      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm mb-5 bg-${guide.color}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-fluid-xl font-heading font-bold text-playceInk mb-3 group-hover:text-playceBlue transition-colors">
                          {isEn ? guide.titleEn : guide.titleEs}
                        </h2>
                        <p className="text-warm-500 leading-relaxed mb-4">
                          {isEn ? guide.descEn : guide.descEs}
                        </p>
                        <div className={`flex items-center gap-2 font-heading font-bold text-sm text-${guide.color} group-hover:gap-4 transition-all`}>
                          {isEn ? "Read Guide" : "Leer Guía"}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
        <WaveDivider color="var(--color-warm-50)" />
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 text-center">
        <ScrollReveal>
          <p className="text-warm-400 italic text-lg">
            {isEn
              ? "More caregiver guides coming soon..."
              : "Más guías para cuidadores próximamente..."}
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
