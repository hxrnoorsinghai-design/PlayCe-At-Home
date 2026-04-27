"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { ItineraryModal } from "./ItineraryModal";

export function ItineraryCTA({ isEn }: { isEn: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-center">
      <Button variant="magic" size="lg" onClick={() => setIsModalOpen(true)}>
        {isEn ? "Generate Custom Itinerary" : "Generar Itinerario Personalizado"}
        <ArrowRight className="w-5 h-5 ml-1" />
      </Button>

      <ItineraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isEn={isEn}
      />
    </div>
  );
}
