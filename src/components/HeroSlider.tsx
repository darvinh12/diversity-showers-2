"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

const SLIDES: Slide[] = [
  {
    src: "/images/paginas/home/modern-bathroom-with-small-space-contemporary-decor.jpg",
    alt: "Frameless glass shower in a contemporary bathroom",
  },
  {
    src: "/images/paginas/home/small-bathroom-decorated-modern-style.jpg",
    alt: "Modern bathroom with a glass shower enclosure",
  },
  {
    src: "/images/paginas/home/modern-style-small-bathroom-with-furnishings_23-2150836549.jpg",
    alt: "Bright bathroom with a frameless glass partition",
  },
  {
    src: "/images/paginas/home/bathroom_74190-5756.jpg",
    alt: "Glass shower meeting tile in a clean modern bathroom",
  },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<number | null>(null);
  const paused = useRef(false);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const tick = () => {
      if (!paused.current) setIndex((i) => (i + 1) % SLIDES.length);
    };
    timer.current = window.setInterval(tick, INTERVAL);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [reduced]);

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden bg-[var(--color-charcoal)]"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={slide.src}
            alt={i === 0 ? slide.alt : ""}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover"
            style={{
              transform: !reduced && i === index ? "scale(1.06)" : "scale(1)",
              transition: reduced
                ? "none"
                : "transform 6500ms cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </div>
      ))}

      {/* Charcoal gradient overlay for text legibility (left-weighted) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,29,33,0.92) 0%, rgba(26,29,33,0.7) 38%, rgba(26,29,33,0.25) 70%, rgba(26,29,33,0.45) 100%)",
        }}
      />

      {/* Controls */}
      {!reduced && (
        <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex items-center justify-center gap-5 md:bottom-9">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 backdrop-blur-sm transition-colors hover:border-white/60 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <div className="pointer-events-auto flex items-center gap-2.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 28 : 8,
                  backgroundColor: i === index ? "var(--color-water)" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 backdrop-blur-sm transition-colors hover:border-white/60 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
