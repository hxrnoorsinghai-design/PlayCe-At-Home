"use client";

import { useEffect, useRef } from "react";
import { useMascotStore } from "@/store/useMascotStore";
import { useInView } from "framer-motion";

interface ActivitiesGuideWrapperProps {
  children: React.ReactNode;
  messageEn: string;
  messageEs: string;
}

export function ActivitiesGuideWrapper({ children, messageEn, messageEs }: ActivitiesGuideWrapperProps) {
  const { setGuideMessage } = useMascotStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setGuideMessage(messageEn, messageEs);
    }
  }, [isInView, messageEn, messageEs, setGuideMessage]);

  return (
    <div ref={ref} onMouseEnter={() => setGuideMessage(messageEn, messageEs)}>
      {children}
    </div>
  );
}

// A global initializer for the Activities page to turn on guide mode
export function ActivitiesGuideInit() {
  const { setMode } = useMascotStore();

  useEffect(() => {
    setMode("guide");
    return () => setMode("roam");
  }, [setMode]);

  return null;
}
