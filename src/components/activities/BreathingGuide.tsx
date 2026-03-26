"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BreathingGuide() {
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let timeout: NodeJS.Timeout;
    
    if (phase === "inhale") {
      timeout = setTimeout(() => setPhase("hold"), 4000); // 4s inhale
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("exhale"), 2000); // 2s hold
    } else if (phase === "exhale") {
      timeout = setTimeout(() => setPhase("inhale"), 4000); // 4s exhale
    }

    return () => clearTimeout(timeout);
  }, [phase, isActive]);

  return (
    <div className="bg-playceCream rounded-3xl p-8 border border-playceTeal/20 shadow-sm flex flex-col items-center justify-center space-y-12 w-full max-w-md mx-auto min-h-[400px]">
      <div className="text-center">
        <h3 className="text-2xl font-bold font-heading text-playceInk">Breathing Star</h3>
        <p className="text-playceInk/70">Follow the shape to calm down</p>
      </div>

      <div className="relative w-48 h-48 flex items-center justify-center">
        <AnimatePresence>
          {isActive ? (
            <motion.div
              className="absolute inset-0 bg-playceTeal/20 rounded-full"
              animate={
                phase === "inhale" ? { scale: 1.5, opacity: 0.5 } : 
                phase === "hold" ? { scale: 1.5, opacity: 0.8 } : 
                { scale: 1, opacity: 0.2 }
              }
              transition={{ duration: phase === "hold" ? 2 : 4, ease: "easeInOut" }}
            />
          ) : null}
        </AnimatePresence>
        
        <div className="relative z-10 text-4xl mt-2">
          {isActive ? (
            phase === "inhale" ? "Breathe In..." :
            phase === "hold" ? "Hold..." : "Breathe Out..."
          ) : (
            "⭐"
          )}
        </div>
      </div>

      <button 
        onClick={() => setIsActive(!isActive)}
        className="px-8 py-3 rounded-full bg-playceTeal text-white font-bold hover:bg-playceTeal/90 transition-colors shadow-sm"
      >
        {isActive ? "Stop" : "Start Breathing"}
      </button>
    </div>
  );
}
