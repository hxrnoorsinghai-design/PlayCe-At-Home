"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLocale } from "next-intl";

const messages = {
  en: [
    "Hi there! I'm Cappy! 🦦",
    "Did you know learning is fun? ✨",
    "Check out the Lagoon zone! 💧",
    "Let's play and learn together! 🧩",
    "Have you visited the Farmers Market yet? 🍎"
  ],
  es: [
    "¡Hola! ¡Soy Cappy! 🦦",
    "¿Sabías que aprender es divertido? ✨",
    "¡Echa un vistazo a la zona Laguna! 💧",
    "¡Juguemos y aprendamos juntos! 🧩",
    "¿Ya visitaste el Mercado de Agricultores? 🍎"
  ]
};

export function CapybaraMascot() {
  const locale = useLocale();
  const isEn = locale === "en";
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  // Delay the mascot's initial appearance
  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  // Rotate messages periodically when visible
  useEffect(() => {
    if (!isVisible || !showMessage) return;
    const msgTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages[isEn ? "en" : "es"].length);
    }, 5000);
    return () => clearInterval(msgTimer);
  }, [isVisible, showMessage, isEn]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end pointer-events-none"
        >
          {/* Speech Bubble */}
          <AnimatePresence mode="wait">
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-4 bg-white px-5 py-3 rounded-2xl rounded-br-sm shadow-playful relative pointer-events-auto max-w-[200px]"
              >
                <button 
                  onClick={() => setShowMessage(false)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-warm-200 hover:bg-playceCoral text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-3 h-3 text-playceInk hover:text-white" />
                </button>
                <p className="text-sm font-heading font-bold text-playceInk">
                  {messages[isEn ? "en" : "es"][messageIndex]}
                </p>
                {/* Tail */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 transform" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mascot Container */}
          <div className="relative group pointer-events-auto cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (!showMessage) {
                  setMessageIndex(Math.floor(Math.random() * messages[isEn ? "en" : "es"].length));
                }
                setShowMessage(!showMessage);
              }}
              className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-colored-blue border-4 border-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-playceBlue-50" />
              <Image
                src="/images/playce/capybara-mascot.png"
                alt="Cappy the Capybara Mascot"
                fill
                className="object-cover p-2 group-hover:animate-wiggle"
                style={{ mixBlendMode: 'multiply' }}
              />
            </motion.div>
            
            {/* Dismiss button on hover */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDismissed(true);
              }}
              className="absolute -top-2 -left-2 w-7 h-7 bg-white text-warm-400 hover:text-playceCoral rounded-full shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-warm-100"
              title="Hide Cappy"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
