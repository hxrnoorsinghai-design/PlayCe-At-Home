import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { Clock, Info, User, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { ItineraryCTA } from "@/components/visit/ItineraryCTA";

export default async function VisitPlannerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  const tips = isEn
    ? [
        "Come during quieter morning hours if your child needs less stimulation.",
        "Try these 3 stations first: BookQuest Entry, Baby Area, or Lagoon.",
        "Take breaks! It's okay to only stay for 30 minutes.",
        "Use the digital maps to review the space together before arriving.",
      ]
    : [
        "Venga durante las horas más tranquilas de la mañana si su hijo necesita menos estimulación.",
        "Pruebe estas 3 estaciones primero: Entrada BookQuest, Área de bebés o Laguna.",
        "¡Tome descansos! Está bien quedarse solo 30 minutos.",
        "Utilice los mapas digitales para revisar juntos el espacio antes de llegar.",
      ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden -mt-14">
        <div className="absolute inset-0">
          <Image
            src="/images/playce/floor-plan.jpg"
            alt="Discovery PLAYce floor plan"
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
              <MapPin className="w-4 h-4 text-playceLeaf" />
              <span className="text-white/90 text-sm font-medium">
                {isEn ? "Beloit Public Library" : "Biblioteca Pública de Beloit"}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.15}>
            <h1 className="text-fluid-5xl font-heading font-black text-white mb-4 drop-shadow-lg">
              {isEn ? "Plan Your Visit" : "Planifica Tu Visita"}
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              {isEn
                ? "Everything you need to know for a great first visit."
                : "Todo lo que necesitas saber para una gran primera visita."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <ScrollReveal variant="slideRight">
            <Card className="p-8 h-full" style={{ borderLeft: "4px solid var(--color-playceBlue)" }}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-playceBlue flex items-center justify-center text-white flex-shrink-0">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold mb-2">
                    {isEn ? "What is Discovery PLAYce?" : "¿Qué es Discovery PLAYce?"}
                  </h2>
                  <p className="text-warm-500 leading-relaxed">
                    {isEn
                      ? "A dedicated early learning space inside Beloit Public Library designed for children 0-6 and their caregivers."
                      : "Un espacio de aprendizaje temprano dedicado dentro de la Biblioteca Pública de Beloit diseñado para niños de 0 a 6 años y sus cuidadores."}
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft">
            <Card className="p-8 h-full" style={{ borderLeft: "4px solid var(--color-playceTeal)" }}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-playceTeal flex items-center justify-center text-white flex-shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold mb-2">
                    {isEn ? "Who is it for?" : "¿Para quién es?"}
                  </h2>
                  <p className="text-warm-500 leading-relaxed">
                    {isEn
                      ? "Children ages 0–6 and their parents, grandparents, or caregivers."
                      : "Niños de 0 a 6 años y sus padres, abuelos o cuidadores."}
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        {/* How Caregivers Participate */}
        <ScrollReveal>
          <Card variant="glass" className="p-8 md:p-10 mb-16">
            <h2 className="text-2xl font-heading font-bold mb-4 text-playceInk">
              {isEn ? "How caregivers participate" : "Cómo participan los cuidadores"}
            </h2>
            <p className="text-lg text-warm-500 mb-8 leading-relaxed">
              {isEn
                ? "You don't need to be a teacher. Simply follow your child's lead, use the prompts on the digital companion, and talk, read, sing, and play together."
                : "No necesitas ser profesor. Simplemente siga la iniciativa de su hijo, use las indicaciones en el compañero digital y hablen, lean, canten y jueguen juntos."}
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-100">
              <h3 className="font-heading font-bold flex items-center mb-5 text-playceInk">
                <Clock className="w-5 h-5 mr-2 text-playceOrange" />
                {isEn ? "Tips for a great visit" : "Consejos para una gran visita"}
              </h3>
              <StaggerContainer className="space-y-4">
                {tips.map((tip, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex gap-3 text-warm-500">
                      <CheckCircle2 className="w-5 h-5 text-playceLeaf shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Card>
        </ScrollReveal>

        {/* Floor Plan */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-playceInk mb-6">
              {isEn ? "Explore the Floor Plan" : "Explorar el Plano"}
            </h2>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-playful hover-image-zoom">
              <Image
                src="/images/playce/floor-plan.jpg"
                alt="Discovery PLAYce floor plan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <ItineraryCTA isEn={isEn} />
        </ScrollReveal>
      </section>
    </div>
  );
}
