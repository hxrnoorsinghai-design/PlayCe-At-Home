import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "skill" | "age"
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const baseClass = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  
  const variants = {
    default: "border-transparent bg-gray-100 text-playceInk",
    skill: "border-transparent bg-playceTeal/20 text-teal-800",
    age: "border-transparent bg-playceSun/30 text-yellow-900",
  }

  return (
    <div className={`${baseClass} ${variants[variant]} ${className}`} {...props} />
  )
}

export { Badge }
