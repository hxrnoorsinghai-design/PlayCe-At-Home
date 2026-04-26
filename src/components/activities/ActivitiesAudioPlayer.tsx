"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion } from "framer-motion";

export function ActivitiesAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (audioRef.current && !hasInteracted) {
      // Try to play automatically
      audioRef.current.volume = 0.5; // Set a pleasant default volume
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((error) => {
            // Autoplay was blocked, wait for user interaction
            console.log("Autoplay blocked. User interaction required.");
          });
      }
    }
  }, [hasInteracted]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
      setHasInteracted(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/music-for-project.wav"
        loop
        autoPlay
      />
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMute}
        className={`fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 w-12 h-12 rounded-full shadow-colored-teal flex items-center justify-center transition-colors border-2 border-white ${
          isMuted || !isPlaying ? "bg-warm-200 text-warm-600" : "bg-playceTeal text-white"
        }`}
        aria-label={isMuted || !isPlaying ? "Play music" : "Mute music"}
      >
        {isMuted || !isPlaying ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <div className="relative">
            <Volume2 className="w-5 h-5" />
            <motion.div
              animate={{ 
                y: [0, -4, 0],
                x: [0, 4, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-3"
            >
              <Music className="w-3 h-3 text-playceSun" />
            </motion.div>
          </div>
        )}
      </motion.button>
    </>
  );
}
