import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Clock, Info, User, CheckCircle2 } from "lucide-react";

export default async function VisitPlannerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("Index"); // For basic labels

  const content = {
    en: {
      title: "Plan Your Visit",
      subtitle: "Help parents confidently approach the real Discovery PLAYce.",
      whatIsIt: "What is Discovery PLAYce?",
      whatIsItDesc: "A dedicated early learning space inside Beloit Public Library designed for children 0-6 and their caregivers.",
      whoIsItFor: "Who is it for?",
      whoIsItForDesc: "Children ages 0–6 and their parents, grandparents, or caregivers.",
      howToPlay: "How caregivers participate",
      howToPlayDesc: "You don't need to be a teacher. Simply follow your child's lead, use the prompts on the digital companion, and talk, read, sing, and play together.",
      tips: [
         "Come during quieter morning hours if your child needs less stimulation.",
         "Try these 3 stations first: BookQuest Entry, Baby Area, or Lagoon.",
         "Take breaks! It is okay to only stay for 30 minutes.",
         "Use the digital maps to review the space together before arriving."
      ],
      generateTrip: "Generate Custom Itinerary",
    },
    es: {
      title: "Planifica Tu Visita",
      subtitle: "Ayuda a los padres a acercarse con confianza al auténtico Discovery PLAYce.",
      whatIsIt: "¿Qué es Discovery PLAYce?",
      whatIsItDesc: "Un espacio de aprendizaje temprano dedicado dentro de la Biblioteca Pública de Beloit diseñado para niños de 0 a 6 años y sus cuidadores.",
      whoIsItFor: "¿Para quién es?",
      whoIsItForDesc: "Niños de 0 a 6 años y sus padres, abuelos o cuidadores.",
      howToPlay: "Cómo participan los cuidadores",
      howToPlayDesc: "No necesitas ser profesor. Simplemente siga la iniciativa de su hijo, use las indicaciones en el compañero digital y hablen, lean, canten y jueguen juntos.",
      tips: [
         "Venga durante las horas más tranquilas de la mañana si su hijo necesita menos estimulación.",
         "Pruebe estas 3 estaciones primero: Entrada BookQuest, Área de bebés o Laguna.",
         "¡Tome descansos! Está bien quedarse solo 30 minutos.",
         "Utilice los mapas digitales para revisar juntos el espacio antes de llegar."
      ],
      generateTrip: "Generar Itinerario Personalizado",
    }
  };

  const localizedContent = content[locale as "en" | "es"] || content.en;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-playceInk">
          {localizedContent.title}
        </h1>
        <p className="text-xl text-playceInk/80 max-w-2xl mx-auto">
          {localizedContent.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 border-l-8 border-l-playceBlue">
          <div className="flex gap-4">
            <Info className="w-8 h-8 text-playceBlue shrink-0" />
            <div>
              <h2 className="text-2xl font-bold font-heading mb-2">{localizedContent.whatIsIt}</h2>
              <p className="text-playceInk/80 leading-relaxed">{localizedContent.whatIsItDesc}</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 border-l-8 border-l-playceTeal">
          <div className="flex gap-4">
            <User className="w-8 h-8 text-playceTeal shrink-0" />
            <div>
              <h2 className="text-2xl font-bold font-heading mb-2">{localizedContent.whoIsItFor}</h2>
              <p className="text-playceInk/80 leading-relaxed">{localizedContent.whoIsItForDesc}</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-playceCream border-playceSun/30">
        <h2 className="text-2xl font-bold font-heading mb-4">{localizedContent.howToPlay}</h2>
        <p className="text-lg text-playceInk/80 mb-6">{localizedContent.howToPlayDesc}</p>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
          <h3 className="font-bold flex items-center mb-4">
            <Clock className="w-5 h-5 mr-2 text-playceOrange" /> 
            {locale === "en" ? "Tips for a great visit" : "Consejos para una gran visita"}
          </h3>
          <ul className="space-y-3">
            {localizedContent.tips.map((tip, idx) => (
              <li key={idx} className="flex gap-3 text-playceInk/80">
                <CheckCircle2 className="w-5 h-5 text-playceLeaf shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
      
      <div className="text-center pt-8">
        <Button size="lg" className="w-full sm:w-auto">
          {localizedContent.generateTrip}
        </Button>
      </div>
    </div>
  );
}
