export interface Guide {
  slug: string;
  titleEn: string;
  titleEs: string;
  descEn: string;
  descEs: string;
  iconName: "Smile" | "BookOpen" | "MessageCircle";
  color: string;
  image: string;
  contentEn: string;
  contentEs: string;
}

export const guides: Guide[] = [
  {
    slug: "how-to-play-without-overthinking",
    titleEn: "How to play with your child without overthinking it",
    titleEs: "Cómo jugar con su hijo sin pensarlo demasiado",
    descEn: "You don't need a lesson plan. Just follow their lead and have fun. This guide gives you simple, actionable ways to engage during play.",
    descEs: "No necesitas un plan de lección. Solo sigue su ejemplo y diviértete. Esta guía te da formas simples y prácticas de participar durante el juego.",
    iconName: "Smile",
    color: "playceCoral",
    image: "/images/playce/mood-board.jpg",
    contentEn: `
## Let them lead

The most important rule of play is simple: follow your child's lead. You don't need to direct the action or have a specific goal in mind. If they want to stack blocks for 20 minutes, stack blocks! If they want to pretend to be a dog while stacking blocks, woof woof!

### Tips for engaging naturally:
- **Get down on their level:** Sit on the floor or kneel so you are eye-to-eye.
- **Narrate what they are doing:** "Oh, you put the red block on top of the blue block!" This builds vocabulary without feeling like a lesson.
- **Ask open-ended questions:** Instead of "Is that a car?", try "What is your vehicle doing today?"
- **Embrace the silliness:** Don't be afraid to use funny voices or make silly faces. Play is about connection, not perfection.

Remember, you are enough. Your presence and attention are the most valuable tools for your child's development.
    `,
    contentEs: `
## Déjalos liderar

La regla más importante del juego es simple: sigue la iniciativa de tu hijo. No necesitas dirigir la acción ni tener un objetivo específico en mente. Si quieren apilar bloques durante 20 minutos, ¡apila bloques! Si quieren fingir ser un perro mientras apilan bloques, ¡guau guau!

### Consejos para participar naturalmente:
- **Ponte a su nivel:** Siéntate en el suelo o arrodíllate para estar cara a cara.
- **Narra lo que están haciendo:** "¡Oh, pusiste el bloque rojo encima del bloque azul!" Esto desarrolla el vocabulario sin sentirse como una lección.
- **Haz preguntas abiertas:** En lugar de "¿Es eso un coche?", intenta "¿Qué está haciendo tu vehículo hoy?"
- **Abraza las tonterías:** Don't be afraid to use funny voices or make silly faces. Play is about connection, not perfection.

Recuerda, tú eres suficiente. Tu presencia y atención son las herramientas más valiosas para el desarrollo de tu hijo.
    `
  },
  {
    slug: "building-early-reading-skills",
    titleEn: "Helping build early reading skills through play",
    titleEs: "Ayudando a desarrollar habilidades tempranas de lectura a través del juego",
    descEn: "Simple ways to point out letters, use rich vocabulary, and tell stories together. Every interaction builds literacy.",
    descEs: "Formas sencillas de señalar letras, usar vocabulario rico y contar historias juntos. Cada interacción construye la lectura.",
    iconName: "BookOpen",
    color: "playceBlue",
    image: "/images/playce/bookquest-entry.jpg",
    contentEn: `
## Literacy is more than just ABCs

You don't need flashcards to teach your child to read. Early literacy is about building a foundation of language, understanding how books work, and fostering a love for stories. Every time you talk, sing, or point out a sign, you are building reading skills!

### 5 Ways to Build Literacy Every Day:
1. **Talk, talk, talk:** Narrate your day. "I am washing the big, round, red apple." Exposing them to rich vocabulary builds their "word bank."
2. **Point out print everywhere:** "Look at that STOP sign! It starts with the letter S, just like your name, Sarah!"
3. **Sing songs and rhymes:** Rhyming helps children hear the smaller sounds in words, which is crucial for sounding out words later.
4. **Make books accessible:** Keep books in low baskets where they can reach them. Let them turn the pages, even if they skip a few.
5. **Tell stories:** You don't always need a book. Tell stories about your day, or make up silly stories about a purple elephant.

The goal is to make language and books enjoyable. If reading feels like a chore, take a break and try again later.
    `,
    contentEs: `
## La alfabetización es más que el abecedario

No necesitas tarjetas didácticas para enseñar a tu hijo a leer. La alfabetización temprana se trata de construir una base de lenguaje, comprender cómo funcionan los libros y fomentar el amor por las historias. ¡Cada vez que hablas, cantas o señalas un letrero, estás desarrollando habilidades de lectura!

### 5 formas de desarrollar la alfabetización todos los días:
1. **Habla, habla, habla:** Narra tu día. "Estoy lavando la manzana grande, redonda y roja". Exponerlos a un vocabulario rico construye su "banco de palabras".
2. **Señala las letras en todas partes:** "¡Mira esa señal de ALTO! Empieza con la letra A, ¡igual que tu nombre, Ana!"
3. **Canta canciones y rimas:** Las rimas ayudan a los niños a escuchar los sonidos más pequeños en las palabras, lo cual es crucial para pronunciar palabras más adelante.
4. **Haz que los libros sean accesibles:** Mantén los libros en canastas bajas donde puedan alcanzarlos. Déjalos pasar las páginas, incluso si se saltan algunas.
5. **Cuenta historias:** No siempre necesitas un libro. Cuenta historias sobre tu día o inventa historias tontas sobre un elefante morado.

El objetivo es hacer que el idioma y los libros sean agradables. Si leer parece una tarea ardua, tómate un descanso y vuelve a intentarlo más tarde.
    `
  },
  {
    slug: "supporting-emotions",
    titleEn: "Supporting emotions through pretend play",
    titleEs: "Apoyando las emociones a través del juego de simulación",
    descEn: "Using the Wellness and City zones to explore big feelings playfully. Help your child name and manage emotions.",
    descEs: "Usar las zonas de Bienestar y Ciudad para explorar grandes sentimientos de forma lúdica. Ayuda a tu hijo a nombrar y manejar emociones.",
    iconName: "MessageCircle",
    color: "playceTeal",
    image: "/images/playce/wellness-nook.jpg",
    contentEn: `
## Big feelings are normal

Young children experience very big emotions but don't yet have the words to express them or the skills to manage them. Pretend play is a safe and powerful way for them to practice these skills.

### How pretend play helps:
When your child pretends to be a doctor caring for a "sick" teddy bear, or a firefighter rescuing a cat, they are processing real-world fears and scenarios in a safe environment where *they* are in control.

### Ways you can support emotional growth:
- **Name the feeling:** If a toy figure gets knocked over, you can say, "Oh no, the dinosaur fell down. He looks frustrated."
- **Model calm down strategies:** "The dinosaur is taking a deep breath to feel better. Let's take a deep breath with him."
- **Accept all feelings:** Validate their emotions during play. "It makes sense that the baby doll is sad her friend left."

By practicing emotional responses during play, children build the resilience they need for real-life challenges.
    `,
    contentEs: `
## Los grandes sentimientos son normales

Los niños pequeños experimentan emociones muy fuertes pero aún no tienen las palabras para expresarlas o las habilidades para manejarlas. El juego de simulación es una forma segura y poderosa para que practiquen estas habilidades.

### Cómo ayuda el juego de simulación:
Cuando tu hijo finge ser un médico que cuida a un oso de peluche "enfermo", o un bombero que rescata a un gato, está procesando miedos y escenarios del mundo real en un entorno seguro donde *ellos* tienen el control.

### Formas en que puedes apoyar el crecimiento emocional:
- **Nombra el sentimiento:** Si una figura de juguete se cae, puedes decir: "Oh no, el dinosaurio se cayó. Se ve frustrado".
- **Modela estrategias para calmarse:** "El dinosaurio está respirando profundamente para sentirse mejor. Respiremos profundamente con él".
- **Acepta todos los sentimientos:** Valida sus emociones durante el juego. "Tiene sentido que la muñeca esté triste porque su amigo se fue".

Al practicar las respuestas emocionales durante el juego, los niños desarrollan la resiliencia que necesitan para los desafíos de la vida real.
    `
  }
];
