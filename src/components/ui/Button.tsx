import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "playful" | "magic" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center font-heading font-bold
    rounded-full cursor-pointer select-none
    transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    focus:outline-none focus:ring-4 focus:ring-offset-2
    active:scale-[0.97] active:transition-none
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  const sizes = {
    sm: "px-5 py-2 text-sm gap-1.5",
    md: "px-7 py-3 text-base gap-2",
    lg: "px-10 py-4 text-lg gap-2.5",
    icon: "w-10 h-10 p-0 flex items-center justify-center rounded-full",
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-playceOrange to-playceCoral text-white
      shadow-colored-coral
      hover:shadow-colored-orange hover:scale-105
      focus:ring-playceCoral/30
    `,
    secondary: `
      bg-playceBlue text-white
      shadow-colored-blue
      hover:bg-playceBlue-700 hover:shadow-colored-blue hover:scale-105
      focus:ring-playceBlue/30
    `,
    outline: `
      bg-transparent border-2 border-playceBlue text-playceBlue
      hover:bg-playceBlue hover:text-white hover:scale-105
      focus:ring-playceBlue/30
    `,
    playful: `
      bg-gradient-to-r from-playceSun to-playceOrange text-white
      shadow-colored-sun
      hover:shadow-colored-orange hover:scale-105 hover:animate-wiggle
      focus:ring-playceSun/30
    `,
    magic: `
      bg-gradient-to-r from-playceBlue via-playceTeal to-playceLeaf text-white
      shadow-colored-teal
      hover:shadow-colored-blue hover:scale-105
      focus:ring-playceTeal/30
      bg-[length:200%_auto] hover:animate-shimmer
    `,
    ghost: `
      bg-transparent text-warm-500
      hover:bg-warm-100 hover:text-playceInk
      focus:ring-warm-200/50
    `,
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
