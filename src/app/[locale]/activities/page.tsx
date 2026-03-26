import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { SockMatchGame } from "@/components/activities/SockMatchGame";
import { MenuBuilder } from "@/components/activities/MenuBuilder";
import { MarketCountGame } from "@/components/activities/MarketCountGame";
import { StoryBuilder } from "@/components/activities/StoryBuilder";
import { BreathingGuide } from "@/components/activities/BreathingGuide";
import { TimerModule } from "@/components/activities/TimerModule";

export default async function ActivitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-playceInk">
          {locale === "en" ? "Activities at Home" : "Actividades en Casa"}
        </h1>
        <p className="text-xl text-playceInk/80 max-w-2xl mx-auto">
          {locale === "en" 
            ? "Try these digital mini-games inspired by the physical Discovery PLAYce."
            : "Pruebe estos minijuegos digitales inspirados en el Discovery PLAYce físico."}
        </p>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl border-b-2 border-playceBlue pb-2 inline-block font-heading font-bold">1. BookQuest StoryBuilder</h2>
        <StoryBuilder />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl border-b-2 border-playceTeal pb-2 inline-block font-heading font-bold">2. Wellness Breathing Guide</h2>
        <BreathingGuide />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl border-b-2 border-playceLeaf pb-2 inline-block font-heading font-bold">3. Handwashing & Toothbrushing</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <TimerModule durationSeconds={20} title={locale === "en" ? "Handwashing" : "Lavarse las manos"} icon="🧼" themeColor="playceBlue" />
          <TimerModule durationSeconds={120} title={locale === "en" ? "Toothbrushing" : "Cepillarse los dientes"} icon="🪥" themeColor="playceTeal" />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl border-b-2 border-playceCoral pb-2 inline-block font-heading font-bold">4. Laundry Sock Match</h2>
        <SockMatchGame />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl border-b-2 border-playceOrange pb-2 inline-block font-heading font-bold">5. Community Kitchen Menu</h2>
        <MenuBuilder />
      </section>
      
      <section className="space-y-8">
        <h2 className="text-3xl border-b-2 border-playceSun pb-2 inline-block font-heading font-bold">6. Farmers Market</h2>
        <MarketCountGame />
      </section>

    </div>
  );
}
