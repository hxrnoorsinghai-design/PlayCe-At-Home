import { Zone } from "@/types";

export const zones: Zone[] = [
  {
    id: "zone-1",
    slug: "entry",
    title: { en: "Entry Zone", es: "Zona de Entrada" },
    shortDescription: {
      en: "Welcome area and BookQuest Entry.",
      es: "Área de bienvenida y entrada a BookQuest.",
    },
    longDescription: {
      en: "The beginning of your PLAYce adventure! Get ready and oriented.",
      es: "¡El comienzo de tu aventura en PLAYce! Prepárate y oriéntate.",
    },
    colorToken: "playceBlue",
    icon: "DoorOpen", // Lucide icon name
    heroIllustration: "/illustrations/entry-hero.svg",
    learningGoals: ["wayfinding", "literacy prep"],
    ageRanges: ["0-6"],
    featuredStations: ["bookquest"],
  },
  {
    id: "zone-2",
    slug: "baby-area",
    title: { en: "Baby Area", es: "Área para Bebés" },
    shortDescription: {
      en: "Sensory exploration and soft environment for pre-walkers.",
      es: "Exploración sensorial y entorno suave para bebés que aún no caminan.",
    },
    longDescription: {
      en: "A calm, sensory-focused environment with mirrors and tactile stimuli.",
      es: "Un ambiente tranquilo y centrado en los sentidos con espejos y estímulos táctiles.",
    },
    colorToken: "playceTeal",
    icon: "Baby",
    heroIllustration: "/illustrations/baby-hero.svg",
    learningGoals: ["sensory", "motor skills"],
    ageRanges: ["0-2"],
    featuredStations: ["baby-mirrors"],
  },
  {
    id: "zone-3",
    slug: "lagoon",
    title: { en: "Lagoon", es: "Laguna" },
    shortDescription: {
      en: "Nature-connected imaginative play with the Paddleboat and Pavilion.",
      es: "Juego imaginativo conectado con la naturaleza con el Bote de remos y el Pabellón.",
    },
    longDescription: {
      en: "An expressive, musical, nature-connected zone.",
      es: "Una zona expresiva, musical y conectada con la naturaleza.",
    },
    colorToken: "playceLeaf",
    icon: "Waves",
    heroIllustration: "/illustrations/lagoon-hero.svg",
    learningGoals: ["imagination", "vocabulary", "cause and effect"],
    ageRanges: ["2-6"],
    featuredStations: ["paddleboat", "pavilion", "shimmer-tree"],
  },
  {
    id: "zone-4",
    slug: "city",
    title: { en: "City", es: "Ciudad" },
    shortDescription: {
      en: "Bustling social play featuring Farmers Market and First Responders.",
      es: "Juego social bullicioso con el Mercado de Agricultores y Primeros Respondedores.",
    },
    longDescription: {
      en: "A rich, social section that feels bustling, bringing local Beloit landmarks to life.",
      es: "Una sección rica y social que se siente bulliciosa, dando vida a lugares emblemáticos de Beloit.",
    },
    colorToken: "playceSun",
    icon: "Building2",
    heroIllustration: "/illustrations/city-hero.svg",
    learningGoals: ["numeracy", "social skills", "roleplay"],
    ageRanges: ["2-6"],
    featuredStations: ["farmers-market", "school-bus", "community-kitchen"],
  },
  {
    id: "zone-5",
    slug: "home",
    title: { en: "Home", es: "Casa" },
    shortDescription: {
      en: "Daily routines, comfort, and household role play.",
      es: "Rutinas diarias, comodidad y juegos de rol en el hogar.",
    },
    longDescription: {
      en: "Focuses on daily routines like laundry, grooming, and bedtime.",
      es: "Se centra en rutinas diarias como lavar la ropa, el aseo personal y la hora de acostarse.",
    },
    colorToken: "playceCoral",
    icon: "Home",
    heroIllustration: "/illustrations/home-hero.svg",
    learningGoals: ["daily skills", "routine", "responsibility"],
    ageRanges: ["1-6"],
    featuredStations: ["laundry", "bathroom", "nursery"],
  },
];
