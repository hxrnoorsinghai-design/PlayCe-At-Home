"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Play, Square, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

interface TimerModuleProps {
  durationSeconds: number;
  title: string;
  themeColor?: string;
  icon?: string;
}

export function TimerModule({ 
  durationSeconds, 
  title, 
  themeColor = "playceTeal",
  icon = "⏳"
}: TimerModuleProps) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durationSeconds);
  };

  const progress = ((durationSeconds - timeLeft) / durationSeconds) * 100;

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md flex flex-col items-center justify-center space-y-8 w-full max-w-sm mx-auto">
      <div className="text-center space-y-2">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold font-heading text-playceInk">{title}</h3>
      </div>
      
      {/* Circle Progress */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle 
            cx="96" cy="96" r="88" 
            className="stroke-gray-100 fill-none" 
            strokeWidth="12" 
          />
          <motion.circle 
            cx="96" cy="96" r="88" 
            className="fill-none" 
            stroke={`var(--color-${themeColor})`}
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ strokeDasharray: "553", strokeDashoffset: "553" }}
            animate={{ strokeDashoffset: 553 - (553 * progress) / 100 }}
            transition={{ duration: 0.5 }}
          />
        </svg>
        <div className="text-5xl font-mono font-bold text-playceInk">
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
      </div>

      <div className="flex gap-4">
        <Button size="lg" onClick={toggleTimer} className="w-32 rounded-full" 
                style={{ backgroundColor: `var(--color-${themeColor})` }}>
          {isRunning ? <Square className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button size="icon" variant="outline" onClick={resetTimer} className="rounded-full w-12 h-12">
          <RotateCcw className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
