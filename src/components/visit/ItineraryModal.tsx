"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Map, Compass, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEn: boolean;
}

export function ItineraryModal({ isOpen, onClose, isEn }: ItineraryModalProps) {
  const [step, setStep] = useState<"form" | "loading" | "result">("form");
  const [age, setAge] = useState<string>("");
  const [interest, setInterest] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setAge("");
      setInterest("");
    }
  }, [isOpen]);

  const handleGenerate = () => {
    if (!age || !interest) return;
    setStep("loading");
    setTimeout(() => {
      setStep("result");
    }, 2000);
  };

  const getItinerary = () => {
    if (interest === "active") {
      return isEn
        ? [
            { time: "9:00 AM", title: "Lagoon Play", desc: "Burn off some energy with the paddleboat!" },
            { time: "10:00 AM", title: "City Block", desc: "Build towers and drive the school bus." },
            { time: "11:00 AM", title: "Wellness Nook", desc: "Cool down with some deep breathing." }
          ]
        : [
            { time: "9:00 AM", title: "Juego en la Laguna", desc: "¡Quema algo de energía con el bote a pedales!" },
            { time: "10:00 AM", title: "Bloque de la Ciudad", desc: "Construye torres y conduce el autobús escolar." },
            { time: "11:00 AM", title: "Rincón de Bienestar", desc: "Refréscate con un poco de respiración profunda." }
          ];
    } else if (interest === "reading") {
      return isEn
        ? [
            { time: "9:30 AM", title: "BookQuest Entry", desc: "Find a magical story together." },
            { time: "10:15 AM", title: "Baby Area Tree", desc: "Sit under the tree and read aloud." },
            { time: "11:00 AM", title: "Home Zone", desc: "Play make-believe kitchen with characters from the book." }
          ]
        : [
            { time: "9:30 AM", title: "Entrada BookQuest", desc: "Encuentren juntos una historia mágica." },
            { time: "10:15 AM", title: "Árbol del Área de Bebés", desc: "Siéntense bajo el árbol y lean en voz alta." },
            { time: "11:00 AM", title: "Zona de Hogar", desc: "Jueguen a la cocina imaginaria con personajes del libro." }
          ];
    } else {
      return isEn
        ? [
            { time: "10:00 AM", title: "Sensory Baby Area", desc: "Explore textures and soft shapes." },
            { time: "10:45 AM", title: "Shimmer Tree", desc: "Watch the calming changing lights." },
            { time: "11:30 AM", title: "Farmers Market", desc: "Sort colorful fruits and veggies quietly." }
          ]
        : [
            { time: "10:00 AM", title: "Área Sensorial", desc: "Explora texturas y formas suaves." },
            { time: "10:45 AM", title: "Árbol Brillante", desc: "Observa las luces cambiantes y relajantes." },
            { time: "11:30 AM", title: "Mercado de Agricultores", desc: "Ordena frutas y verduras coloridas en silencio." }
          ];
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-playceInk/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-playceBlue to-playceTeal p-6 text-white text-center relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <Sparkles className="w-8 h-8 mx-auto mb-3 opacity-90" />
              <h2 className="text-2xl font-heading font-black">
                {isEn ? "Magic Itinerary" : "Itinerario Mágico"}
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {step === "form" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-playceInk mb-2">
                      {isEn ? "Child's Age" : "Edad del Niño"}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["0-2", "3-6"].map((a) => (
                        <button
                          key={a}
                          onClick={() => setAge(a)}
                          className={`py-3 rounded-xl border-2 font-semibold transition-all ${
                            age === a
                              ? "border-playceBlue bg-playceBlue/10 text-playceBlue"
                              : "border-warm-200 text-warm-500 hover:border-warm-300"
                          }`}
                        >
                          {a} {isEn ? "years" : "años"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-playceInk mb-2">
                      {isEn ? "Primary Interest" : "Interés Principal"}
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: "active", labelEn: "Active Play & Energy", labelEs: "Juego Activo y Energía" },
                        { id: "reading", labelEn: "Stories & Reading", labelEs: "Historias y Lectura" },
                        { id: "calm", labelEn: "Calm & Sensory", labelEs: "Calma y Sensorial" },
                      ].map((int) => (
                        <button
                          key={int.id}
                          onClick={() => setInterest(int.id)}
                          className={`w-full py-3 px-4 rounded-xl border-2 font-semibold text-left transition-all flex items-center justify-between ${
                            interest === int.id
                              ? "border-playceTeal bg-playceTeal/10 text-playceTeal"
                              : "border-warm-200 text-warm-500 hover:border-warm-300"
                          }`}
                        >
                          {isEn ? int.labelEn : int.labelEs}
                          {interest === int.id && <ChevronRight className="w-4 h-4" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="magic"
                    className="w-full mt-4"
                    disabled={!age || !interest}
                    onClick={handleGenerate}
                  >
                    {isEn ? "Create My Plan" : "Crear Mi Plan"}
                  </Button>
                </div>
              )}

              {step === "loading" && (
                <div className="py-12 text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="inline-block mb-6"
                  >
                    <Compass className="w-12 h-12 text-playceBlue" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-bold text-playceInk animate-pulse">
                    {isEn ? "Brewing up some fun..." : "Preparando algo de diversión..."}
                  </h3>
                </div>
              )}

              {step === "result" && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-playceLeaf/20 text-playceLeaf mb-3">
                      <Map className="w-6 h-6" />
                    </div>
                    <p className="text-warm-500 font-medium">
                      {isEn ? "Here is your perfect route!" : "¡Aquí está tu ruta perfecta!"}
                    </p>
                  </div>

                  <div className="relative border-l-2 border-warm-200 ml-4 pl-6 space-y-6">
                    {getItinerary().map((item, idx) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        key={idx}
                        className="relative"
                      >
                        <div className="absolute w-4 h-4 bg-white border-2 border-playceBlue rounded-full -left-[31px] top-1" />
                        <span className="text-xs font-bold text-playceBlue uppercase tracking-wider">
                          {item.time}
                        </span>
                        <h4 className="font-heading font-bold text-lg text-playceInk">
                          {item.title}
                        </h4>
                        <p className="text-warm-500 text-sm mt-1">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    className="w-full mt-8"
                    onClick={onClose}
                  >
                    {isEn ? "Looks Great!" : "¡Se Ve Genial!"}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
