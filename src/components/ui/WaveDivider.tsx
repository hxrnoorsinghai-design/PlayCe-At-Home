interface WaveDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({
  color = "var(--color-playce-cream)",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,100 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.3"
        />
        <path
          d="M0,60 C200,20 400,90 720,60 C1040,30 1200,80 1440,50 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.5"
        />
        <path
          d="M0,80 C360,40 540,100 720,70 C900,40 1080,90 1440,60 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
