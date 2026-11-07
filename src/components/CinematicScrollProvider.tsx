"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CinematicScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Reveal section headings with a clean editorial wipe
      const titles = gsap.utils.toArray<HTMLElement>(".cinema-header-reveal");
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          {
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
            y: 20,
          },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // 2. Generic subtle section elements stagger
      const cards = gsap.utils.toArray<HTMLElement>(".cinema-fade-up");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
