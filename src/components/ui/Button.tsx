import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Simple utility classes based on variant/size
    const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-playceOrange text-white hover:bg-playceOrange/90 shadow-sm",
      secondary: "bg-playceBlue text-white hover:bg-playceBlue/90 shadow-sm",
      outline: "border-2 border-playceBlue text-playceBlue hover:bg-playceBlue/10",
      ghost: "hover:bg-playceCream text-playceInk hover:text-playceBlue",
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-lg px-3",
      lg: "h-12 rounded-2xl px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <Comp
        className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
