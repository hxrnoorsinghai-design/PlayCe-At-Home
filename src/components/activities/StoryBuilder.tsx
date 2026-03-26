"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const STORY_PARTS = [
  {
    title: "Who are you?",
    options: [
      { id: "hero", label: "A Brave Knight", icon: "🛡️" },
      { id: "wizard", label: "A Clever Wizard", icon: "🧙" },
      { id: "explorer", label: "A Curious Explorer", icon: "🔎" }
    ]
  },
  {
    title: "Who goes with you?",
    options: [
      { id: "dragon", label: "A Tiny Dragon", icon: "🐉" },
      { id: "dog", label: "A Loyal Dog", icon: "🐕" },
      { id: "robot", label: "A Smart Robot", icon: "🤖" }
    ]
  },
  {
    title: "Where do you go?",
    options: [
      { id: "forest", label: "The Mistic Forest", icon: "🌲" },
      { id: "castle", label: "The Floating Castle", icon: "🏰" },
      { id: "space", label: "Outer Space", icon: "🚀" }
    ]
  }
];

export function StoryBuilder() {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState<Record<number, string>>({});

  const handleSelect = (choiceLabel: string) => {
    setChoices({ ...choices, [step]: choiceLabel });
    setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setChoices({});
  };

  if (step >= STORY_PARTS.length) {
    return (
      <div className="bg-playceBlue/10 rounded-3xl p-8 border border-playceBlue/20 shadow-sm max-w-lg mx-auto w-full text-center space-y-6">
        <h2 className="text-3xl font-bold font-heading text-playceBlue">Your Story Is Ready!</h2>
        <div className="bg-white p-6 rounded-2xl text-left text-lg leading-relaxed text-playceInk space-y-4">
          <p>
            Once upon a time, there was <span className="font-bold text-playceCoral">{choices[0]?.toLowerCase()}</span>.
          </p>
          <p>
             They never travelled alone! Their best friend, <span className="font-bold text-playceTeal">{choices[1]?.toLowerCase()}</span>, always went with them.
          </p>
          <p>
            One day, they packed their bags and set off on a great adventure to <span className="font-bold text-playceBlue">{choices[2]?.toLowerCase()}</span>.
          </p>
          <p className="font-heading font-bold text-center pt-4">The End!</p>
        </div>
        <Button onClick={reset} size="lg">Build Another Story</Button>
      </div>
    );
  }

  const currentPart = STORY_PARTS[step];

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md max-w-lg mx-auto w-full text-center space-y-8">
      <div className="space-y-2">
        <p className="text-playceInk/60 font-medium uppercase tracking-wider text-sm">
          Chapter {step + 1} of {STORY_PARTS.length}
        </p>
        <h2 className="text-3xl font-bold font-heading text-playceInk">
          {currentPart.title}
        </h2>
      </div>

      <div className="grid gap-4">
        {currentPart.options.map(opt => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.label)}
            className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-playceCoral hover:bg-playceCoral/5 transition-all text-left"
          >
            <span className="text-4xl bg-gray-50 p-3 rounded-xl">{opt.icon}</span>
            <span className="text-xl font-bold text-playceInk">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
