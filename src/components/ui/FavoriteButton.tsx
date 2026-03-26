"use client";

import { useStore } from "@/store/useStore";
import { Button } from "./Button";
import { Heart } from "lucide-react";

export function FavoriteButton({ stationId, locale }: { stationId: string, locale: string }) {
  const { isFavorite, addFavorite, removeFavorite } = useStore();
  const favorite = isFavorite(stationId);

  const toggle = () => {
    if (favorite) removeFavorite(stationId);
    else addFavorite(stationId);
  };

  return (
    <Button 
      variant={favorite ? "default" : "outline"} 
      onClick={toggle}
      className="w-full sm:w-auto mt-4 sm:mt-0"
    >
      <Heart className={`w-5 h-5 mr-2 ${favorite ? "fill-white" : ""}`} />
      {favorite 
        ? (locale === "en" ? "Saved to Favorites" : "Guardado en Favoritos")
        : (locale === "en" ? "Save Station" : "Guardar Estación")}
    </Button>
  );
}
