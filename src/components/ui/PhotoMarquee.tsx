"use client";

import Image from "next/image";

interface PhotoMarqueeProps {
  images: string[];
  speed?: number;
  height?: number;
  className?: string;
}

export function PhotoMarquee({
  images,
  speed = 40,
  height = 220,
  className = "",
}: PhotoMarqueeProps) {
  // Duplicate images for seamless looping
  const allImages = [...images, ...images];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {allImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative flex-shrink-0 mx-2 rounded-2xl overflow-hidden hover-image-zoom group"
            style={{ width: height * 1.5, height }}
          >
            <Image
              src={src}
              alt={`PLAYce gallery ${(i % images.length) + 1}`}
              fill
              className="object-cover"
              sizes={`${height * 1.5}px`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
