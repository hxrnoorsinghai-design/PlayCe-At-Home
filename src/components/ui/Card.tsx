import * as React from "react"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-2xl border border-gray-100 bg-white text-playceInk shadow-sm transition-shadow hover:shadow-md ${className}`}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
