"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

function useScrollFade() {
  const refs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el) => {
      if (!el) return;
      el.classList.add("opacity-0", "translate-y-6");
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-6");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.45 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return refs;
}

export default function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const refs = useScrollFade();

  return (
    <>
      {images.map((img, i) => (
        <figure
          key={img.src}
          ref={(el) => {
            if (!el) return;
            refs.current[i] = el;
          }}
          className="relative w-full h-[88vh] sm:h-[92vh] md:h-screen flex items-center justify-center overflow-hidden my-6"
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            {/* Replace this bg class with whatever HeroHeader uses */}
            <div className="relative w-full h-full rounded-md shadow-lg overflow-hidden bg-gradient-to-b from-[#f6f6f4] via-[#f2f1ef] to-[#eae9e7]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 80vw"
                className="object-contain"
                priority={i === 0}
              />
            </div>
          </div>
          <figcaption className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 text-sm text-gray-700 bg-white/60 backdrop-blur rounded-md px-3 py-1">
            {img.alt}
          </figcaption>
        </figure>
      ))}

      <style jsx global>{`
        .opacity-0 {
          opacity: 0;
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .opacity-100 {
          opacity: 1;
        }
        .translate-y-6 {
          transform: translateY(1.5rem);
        }
        .translate-y-0 {
          transform: translateY(0);
        }
        html,
        body {
          height: 100%;
        }
        img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}
