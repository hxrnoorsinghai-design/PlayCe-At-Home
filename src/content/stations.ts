import { Station } from "@/types";

export const stations: Station[] = [
  {
    id: "st-farmers-market",
    slug: "farmers-market",
    zoneId: "zone-4",
    title: { en: "Farmers Market", es: "Mercado de Agricultores" },
    summary: {
      en: "A pretend market with produce and checkouts.",
      es: "Un mercado de simulación con productos y cajas.",
    },
    physicalDescription: {
      en: "Pretend market with produce, flowers, checkout, and menu magnets.",
      es: "Mercado de simulación con productos, flores, caja y menú magnético.",
    },
    whatChildrenDo: {
      en: "Children sort, count, buy, and sell fake foods to each other or to caregivers.",
      es: "Los niños clasifican, cuentan, compran y venden alimentos falsos a otros niños o cuidadores.",
    },
    learningGoals: ["numeracy", "sorting", "vocabulary", "pretend play", "turn-taking"],
    caregiverPrompts: [
      { en: "How many apples do we need?", es: "¿Cuántas manzanas necesitamos?" },
      { en: "Can you sort by color?", es: "¿Puedes clasificar por color?" },
      { en: "What should we sell today?", es: "¿Qué deberíamos vender hoy?" },
    ],
    atHomeActivity: {
      en: "Make a market with cups, toys, or fruit at home.",
      es: "Haz un mercado con tazas, juguetes o frutas en casa.",
    },
    ageMin: 2,
    ageMax: 6,
    skillTags: ["numeracy", "pretend-play", "sorting"],
    heroImage: "/illustrations/market.svg",
    activityType: "game",
    relatedStations: ["community-kitchen", "house-facade"],
    featured: true,
  },
  {
    id: "st-laundry",
    slug: "laundry",
    zoneId: "zone-5",
    title: { en: "Laundry", es: "Lavandería" },
    summary: {
      en: "Daily routine play for washing, folding, and matching.",
      es: "Juego de rutina diaria para lavar, doblar y combinar.",
    },
    physicalDescription: {
      en: "A pretend laundry set with machine doors and socks to sort.",
      es: "Un juego de lavandería de simulación con puertas de lavadora y calcetines para clasificar.",
    },
    whatChildrenDo: {
      en: "Children place items in the washers, sort them by color, and practice daily routines.",
      es: "Los niños colocan artículos en las lavadoras, los clasifican por color y practican las rutinas diarias.",
    },
    learningGoals: ["sorting", "daily skills", "matching", "color recognition"],
    caregiverPrompts: [
      { en: "Can you find two socks that look the same?", es: "¿Puedes encontrar dos calcetines iguales?" },
      { en: "Let's put all the red things in here.", es: "Vamos a poner todas las cosas rojas aquí." },
    ],
    atHomeActivity: {
      en: "Play the sock matching game, or sort real laundry together.",
      es: "Juega a emparejar calcetines o clasifica ropa de verdad juntos.",
    },
    ageMin: 2,
    ageMax: 6,
    skillTags: ["daily-skills", "sorting", "routine"],
    heroImage: "/illustrations/laundry.svg",
    activityType: "socks-game",
    relatedStations: ["bathroom", "nursery"],
    featured: true,
  },
  {
    id: "st-bathroom",
    slug: "bathroom",
    zoneId: "zone-5",
    title: { en: "Bathroom Routines", es: "Rutinas de Baño" },
    summary: {
      en: "Practice essential hygiene with timers.",
      es: "Practica la higiene esencial con temporizadores.",
    },
    physicalDescription: {
      en: "Includes physical hourglass timers and sinks to reinforce hygiene times.",
      es: "Incluye temporizadores de reloj de arena y lavabos para reforzar los tiempos de higiene.",
    },
    whatChildrenDo: {
      en: "Children mimic handwashing and tooth brushing.",
      es: "Los niños simulan lavarse las manos y cepillarse los dientes.",
    },
    learningGoals: ["daily skills", "hygiene", "patience"],
    caregiverPrompts: [
      { en: "Scrub until the timer finishes!", es: "¡Frota hasta que termine el temporizador!" },
    ],
    atHomeActivity: {
      en: "Use our digital timer to brush teeth for 2 minutes.",
      es: "Usa nuestro temporizador digital para cepillarte los dientes durante 2 minutos.",
    },
    ageMin: 1,
    ageMax: 6,
    skillTags: ["daily-skills", "hygiene"],
    heroImage: "/illustrations/bathroom.svg",
    activityType: "timer",
    relatedStations: ["laundry"],
    featured: true,
  }
];
