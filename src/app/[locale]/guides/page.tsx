import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/Card";
import { BookOpen, Smile, MessageCircle } from "lucide-react";

export default async function CaregiverGuidesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const content = {
    en: {
      title: "Caregiver Guides",
      subtitle: "Supportive editorial content to empower you.",
      guides: [
        {
          title: "How to play with your child without overthinking it",
          desc: "You don't need a lesson plan. Just follow their lead and have fun.",
          icon: Smile,
          color: "playceCoral"
        },
        {
          title: "Helping build early reading skills through play",
          desc: "Simple ways to point out letters, use rich vocabulary, and tell stories.",
          icon: BookOpen,
          color: "playceBlue"
        },
        {
          title: "Supporting emotions through pretend play",
          desc: "Using the Wellness and City zones to explore big feelings playfully.",
          icon: MessageCircle,
          color: "playceTeal"
        }
      ]
    },
    es: {
      title: "Guías para Cuidadores",
      subtitle: "Contenido editorial de apoyo para empoderarlo.",
      guides: [
        {
          title: "Cómo jugar con su hijo sin pensarlo demasiado",
          desc: "No necesitas un plan de lección. Solo sigue su ejemplo y diviértete.",
          icon: Smile,
          color: "playceCoral"
        },
        {
          title: "Ayudando a desarrollar habilidades tempranas de lectura a través del juego",
          desc: "Formas sencillas de señalar letras, usar vocabulario rico y contar historias.",
          icon: BookOpen,
          color: "playceBlue"
        },
        {
          title: "Apoyando las emociones a través del juego de simulación",
          desc: "Usar las zonas de Bienestar y Ciudad para explorar grandes sentimientos de forma lúdica.",
          icon: MessageCircle,
          color: "playceTeal"
        }
      ]
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

      <div className="grid gap-6">
        {localizedContent.guides.map((guide, idx) => {
          const Icon = guide.icon;
          return (
            <Card key={idx} className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm transition-transform group-hover:scale-105" 
                   style={{ backgroundColor: `var(--color-${guide.color})`, color: 'white' }}>
                <Icon className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold font-heading mb-2 group-hover:text-playceBlue transition-colors">{guide.title}</h2>
                <p className="text-lg text-playceInk/70">{guide.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
