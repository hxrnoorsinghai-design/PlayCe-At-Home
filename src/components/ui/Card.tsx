import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "photo" | "glass" | "feature";
  style?: React.CSSProperties;
}

export function Card({ children, className = "", variant = "default", style }: CardProps) {
  const baseStyles = "rounded-2xl transition-all duration-400";

  const variants = {
    default: `${baseStyles} bg-white border border-warm-200 shadow-playful hover-lift`,
    photo: `${baseStyles} overflow-hidden bg-white shadow-playful hover-lift hover-image-zoom`,
    glass: `${baseStyles} frosted-glass shadow-playful hover-lift`,
    feature: `${baseStyles} bg-white border border-warm-200 shadow-playful hover-lift overflow-hidden`,
  };

  return (
    <div className={`${variants[variant]} ${className}`} style={style}>
      {children}
    </div>
  );
}
