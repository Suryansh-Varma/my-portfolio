"use client";
import { useEffect, useState, useRef } from "react";

export default function CinematicCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device is touch-first
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, [role='button'], .cursor-pointer");
        setIsHovering(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-150"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="relative -top-3 -left-3 w-6 h-6 flex items-center justify-center transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${isClicking ? 0.85 : isHovering ? 1.35 : 1})`,
        }}
      >
        {/* Clean, razor-sharp 16K vector crosshair */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-150"
        >
          {/* Subtle center dot */}
          <circle cx="12" cy="12" r="1.25" fill="#e8b84b" />
          
          {/* Outer ring */}
          <circle
            cx="12"
            cy="12"
            r={isHovering ? "9" : "7"}
            stroke="#c8922a"
            strokeWidth="0.85"
            strokeDasharray={isHovering ? "2 2" : "none"}
            opacity={isHovering ? "0.9" : "0.6"}
            className="transition-all duration-150"
          />

          {/* Thin precision tick marks */}
          <line x1="12" y1="2" x2="12" y2="5" stroke="#c8922a" strokeWidth="0.85" strokeLinecap="round" />
          <line x1="12" y1="19" x2="12" y2="22" stroke="#c8922a" strokeWidth="0.85" strokeLinecap="round" />
          <line x1="2" y1="12" x2="5" y2="12" stroke="#c8922a" strokeWidth="0.85" strokeLinecap="round" />
          <line x1="19" y1="12" x2="22" y2="12" stroke="#c8922a" strokeWidth="0.85" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
