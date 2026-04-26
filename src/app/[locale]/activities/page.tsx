import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SockMatchGame } from "@/components/activities/SockMatchGame";
import { MenuBuilder } from "@/components/activities/MenuBuilder";
import { MarketCountGame } from "@/components/activities/MarketCountGame";
import { StoryBuilder } from "@/components/activities/StoryBuilder";
import { BreathingGuide } from "@/components/activities/BreathingGuide";
import { TimerModule } from "@/components/activities/TimerModule";

import { ActivitiesGuideInit, ActivitiesGuideWrapper } from "@/components/activities/ActivitiesGuideWrapper";

const activitySections = [
  {
    num: "01",
    titleEn: "BookQuest StoryBuilder",
    titleEs: "Constructor de Historias BookQuest",
    descEn: "Inspired by the BookQuest Entry station — build your own story, word by word.",
    descEs: "Inspirado en la estación de entrada BookQuest — construye tu propia historia, palabra por palabra.",
    tipEn: "Drag the words around to build a fun story! 📖",
    tipEs: "¡Arrastra las palabras para construir una historia divertida! 📖",
    color: "playceBlue",
    image: "/images/playce/bookquest-entry.jpg",
    bgColor: "var(--color-playce-blue-50)",
  },
  {
    num: "02",
    titleEn: "Wellness Breathing Guide",
    titleEs: "Guía de Respiración de Bienestar",
    descEn: "Inspired by the Wellness Nook — practice calm breathing together.",
    descEs: "Inspirado en el Rincón de Bienestar — practica la respiración tranquila juntos.",
    tipEn: "Follow the circle to take deep, calming breaths! 🧘",
    tipEs: "¡Sigue el círculo para respirar profundo y calmarte! 🧘",
    color: "playceTeal",
    image: "/images/playce/wellness-nook.jpg",
    bgColor: "var(--color-playce-teal-50)",
  },
  {
    num: "03",
    titleEn: "Handwashing & Toothbrushing",
    titleEs: "Lavarse las Manos y Cepillarse los Dientes",
    descEn: "Inspired by the Bathroom Routines station — build healthy habits with fun timers.",
    descEs: "Inspirado en la estación Rutinas de Baño — construye hábitos saludables con temporizadores divertidos.",
    tipEn: "Press start and keep scrubbing until the timer stops! 🧼",
    tipEs: "¡Presiona iniciar y sigue frotando hasta que se detenga el temporizador! 🧼",
    color: "playceLeaf",
    image: "/images/playce/bathroom-station.jpg",
    bgColor: "var(--color-playce-leaf-50)",
  },
  {
    num: "04",
    titleEn: "Laundry Sock Match",
    titleEs: "Emparejar Calcetines de Lavandería",
    descEn: "Inspired by the Laundry station — match socks by color and pattern.",
    descEs: "Inspirado en la estación de Lavandería — empareja calcetines por color y patrón.",
    tipEn: "Can you find all the matching pairs of socks? 🧦",
    tipEs: "¿Puedes encontrar todos los pares de calcetines iguales? 🧦",
    color: "playceCoral",
    image: "/images/playce/laundry-station.jpg",
    bgColor: "var(--color-playce-coral-50)",
  },
  {
    num: "05",
    titleEn: "Community Kitchen Menu",
    titleEs: "Menú de Cocina Comunitaria",
    descEn: "Inspired by the Community Kitchen — create your own menu from scratch.",
    descEs: "Inspirado en la Cocina Comunitaria — crea tu propio menú desde cero.",
    tipEn: "What's for dinner? Build a yummy menu! 🍕",
    tipEs: "¿Qué hay para cenar? ¡Construye un menú delicioso! 🍕",
    color: "playceOrange",
    image: "/images/playce/kitchen-station.jpg",
    bgColor: "var(--color-playce-orange-50)",
  },
  {
    num: "06",
    titleEn: "Farmers Market",
    titleEs: "Mercado de Agricultores",
    descEn: "Inspired by the Farmers Market station — count, sort, and sell.",
    descEs: "Inspirado en la estación del Mercado de Agricultores — cuenta, clasifica y vende.",
    tipEn: "Help collect the right amount of fruits and veggies! 🥕",
    tipEs: "¡Ayuda a recolectar la cantidad correcta de frutas y verduras! 🥕",
    color: "playceSun",
    image: "/images/playce/farmers-market.jpg",
    bgColor: "var(--color-playce-sun-50)",
  },
];

const activityComponents = [
  (props: { locale: string }) => <StoryBuilder />,
  (props: { locale: string }) => <BreathingGuide />,
  (props: { locale: string }) => (
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      <TimerModule durationSeconds={20} title={props.locale === "en" ? "Handwashing" : "Lavarse las manos"} icon="🧼" themeColor="playceBlue" />
      <TimerModule durationSeconds={120} title={props.locale === "en" ? "Toothbrushing" : "Cepillarse los dientes"} icon="🪥" themeColor="playceTeal" />
    </div>
  ),
  (props: { locale: string }) => <SockMatchGame />,
  (props: { locale: string }) => <MenuBuilder />,
  (props: { locale: string }) => <MarketCountGame />,
];

export default async function ActivitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <div className="overflow-hidden">
      <ActivitiesGuideInit />
      {/* Hero */}
      <section className="relative py-24 px-4 gradient-mesh">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal variant="fadeUp">
            <span className="text-sm font-semibold text-playceCoral uppercase tracking-wider">
              {isEn ? "Play & Learn" : "Juega y Aprende"}
            </span>
            <h1 className="text-fluid-5xl font-heading font-black text-playceInk mt-2 mb-4">
              {isEn ? "Activities at Home" : "Actividades en Casa"}
            </h1>
            <p className="text-lg text-warm-500 max-w-xl mx-auto">
              {isEn
                ? "Digital mini-games inspired by the physical Discovery PLAYce. Play anywhere, anytime."
                : "Minijuegos digitales inspirados en el Discovery PLAYce físico. Juega en cualquier lugar, en cualquier momento."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Activity Sections */}
      {activitySections.map((section, index) => {
        const ActivityComponent = activityComponents[index];
        const isOdd = index % 2 !== 0;

        return (
          <section key={section.num}>
            {isOdd && <WaveDivider color={section.bgColor} flip />}

            <div style={{ backgroundColor: isOdd ? section.bgColor : undefined }} className="py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <ScrollReveal variant={index % 2 === 0 ? "slideRight" : "slideLeft"}>
                  <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
                    {/* Context image */}
                    <div className="relative w-full md:w-48 h-36 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 hover-image-zoom">
                      <Image
                        src={section.image}
                        alt={section.titleEn}
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </div>

                    {/* Title and description */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-sm font-bold bg-${section.color} text-white px-3 py-1 rounded-full`}
                        >
                          {section.num}
                        </span>
                        <h2 className="text-fluid-2xl font-heading font-bold text-playceInk">
                          {isEn ? section.titleEn : section.titleEs}
                        </h2>
                      </div>
                      <p className="text-warm-500">
                        {isEn ? section.descEn : section.descEs}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <ActivitiesGuideWrapper messageEn={section.tipEn} messageEs={section.tipEs}>
                    <ActivityComponent locale={locale} />
                  </ActivitiesGuideWrapper>
                </ScrollReveal>
              </div>
            </div>

            {isOdd && <WaveDivider color={section.bgColor} />}
          </section>
        );
      })}
    </div>
  );
}
