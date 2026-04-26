"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { X } from "lucide-react";
import { useLocale } from "next-intl";
import { useMascotStore } from "@/store/useMascotStore";

const ROAM_POSITIONS = [
  "bottom-4 right-4 md:bottom-8 md:right-8",
  "bottom-4 left-4 md:bottom-8 md:left-8",
  "top-20 right-4 md:top-24 md:right-8",
  "top-20 left-4 md:top-24 md:left-8",
];

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
  const { mode, guideMessageEn, guideMessageEs } = useMascotStore();
  
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  
  const [roamPosIndex, setRoamPosIndex] = useState(0);

  // Mouse tracking for guide mode
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (mode !== 'guide') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by 40px so it doesn't block the actual pointer
      mouseX.set(e.clientX + 40);
      mouseY.set(e.clientY + 40);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mode, mouseX, mouseY]);

  // Initial appearance
  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  // Roam mode: occasionally change corners
  useEffect(() => {
    if (mode !== 'roam' || !isVisible) return;
    
    const roamTimer = setInterval(() => {
      // Hide temporarily
      setIsVisible(false);
      
      setTimeout(() => {
        // Pick a new random position
        setRoamPosIndex((prev) => {
          let next = Math.floor(Math.random() * ROAM_POSITIONS.length);
          if (next === prev) next = (next + 1) % ROAM_POSITIONS.length;
          return next;
        });
        setIsVisible(true);
      }, 1000); // Wait 1 second before popping back out
      
    }, 15000); // Change position every 15 seconds
    
    return () => clearInterval(roamTimer);
  }, [mode, isVisible]);

  // Auto-rotate default messages in roam mode
  useEffect(() => {
    if (mode === 'guide' || !isVisible || !showMessage) return;
    const msgTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages[isEn ? "en" : "es"].length);
    }, 5000);
    return () => clearInterval(msgTimer);
  }, [isVisible, showMessage, isEn, mode]);

  // Auto-show guide messages when they change
  useEffect(() => {
    if (mode === 'guide' && (guideMessageEn || guideMessageEs)) {
      setShowMessage(true);
    }
  }, [guideMessageEn, guideMessageEs, mode]);

  if (dismissed && mode !== 'guide') return null;

  // Determine current active message
  let activeMessage = messages[isEn ? "en" : "es"][messageIndex];
  if (mode === 'guide') {
    activeMessage = isEn 
      ? (guideMessageEn || "Let's explore this activity!") 
      : (guideMessageEs || "¡Exploremos esta actividad!");
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={mode === 'guide' ? { x: springX, y: springY } : undefined}
          className={`
            fixed z-[100] flex flex-col items-end
            ${mode === 'guide' 
              ? 'top-0 left-0 pointer-events-none' // Follows mouse, ignores clicks
              : `${ROAM_POSITIONS[roamPosIndex]} pointer-events-none` // Fixed in a corner
            }
          `}
        >
          {/* Speech Bubble */}
          <AnimatePresence mode="wait">
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`mb-4 bg-white px-5 py-3 rounded-2xl shadow-playful relative max-w-[200px] ${
                  mode === 'guide' ? 'rounded-tl-sm pointer-events-none' : 'rounded-br-sm pointer-events-auto'
                }`}
              >
                {mode === 'roam' && (
                  <button 
                    onClick={() => setShowMessage(false)}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-warm-200 hover:bg-playceCoral text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-3 h-3 text-playceInk hover:text-white" />
                  </button>
                )}
                <p className="text-sm font-heading font-bold text-playceInk leading-snug">
                  {activeMessage}
                </p>
                {/* Tail */}
                <div className={`absolute w-4 h-4 bg-white rotate-45 transform ${
                  mode === 'guide' ? '-top-2 left-6' : '-bottom-2 right-6'
                }`} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mascot Container */}
          <div className={`relative group ${mode === 'roam' ? 'pointer-events-auto cursor-pointer' : ''}`}>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: mode === 'roam' ? [0, -5, 5, 0] : [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={mode === 'roam' ? { scale: 1.1, rotate: 10, y: -10 } : undefined}
              whileTap={mode === 'roam' ? { scale: 0.9 } : undefined}
              onClick={() => {
                if (mode === 'roam') {
                  if (!showMessage) {
                    setMessageIndex(Math.floor(Math.random() * messages[isEn ? "en" : "es"].length));
                  }
                  setShowMessage(!showMessage);
                }
              }}
              className="relative w-20 h-20 md:w-28 md:h-28 bg-white rounded-full shadow-colored-blue border-4 border-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-playceBlue-50" />
              <motion.div 
                className="absolute inset-0"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/playce/capybara-mascot.png"
                  alt="Cappy the Capybara Mascot"
                  fill
                  className="object-cover p-1.5"
                  style={{ mixBlendMode: 'multiply' }}
                  priority
                />
              </motion.div>
            </motion.div>
            
            {/* Dismiss button on hover (only in roam mode) */}
            {mode === 'roam' && (
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
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
