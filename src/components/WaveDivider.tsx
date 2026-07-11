"use client";

interface WaveDividerProps {
  position?: "top" | "bottom";
  bgColor?: string; // color of the section it connects to
  waveColor?: string; // color of the wave itself
}

export default function WaveDivider({
  position = "bottom",
  bgColor = "#071022",
  waveColor = "#020617",
}: WaveDividerProps) {
  const isTop = position === "top";

  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none ${
        isTop ? "top-0 transform rotate-180" : "bottom-0"
      }`}
      style={{ height: "45px" }}
    >
      <div className="relative w-[200%] h-full">
        {/* Back Wave (Opacity 40%) */}
        <svg
          className="absolute left-0 w-full h-full wave-anim-slow"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ fill: waveColor, opacity: 0.4 }}
        >
          <path d="M0,0 C150,90 350,0 500,40 C650,80 850,30 1000,50 C1150,70 1200,20 1200,20 L1200,120 L0,120 Z"></path>
        </svg>

        {/* Front Wave (Opacity 100%) */}
        <svg
          className="absolute left-0 w-full h-full wave-anim-fast"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ fill: waveColor }}
        >
          <path d="M0,30 C150,10 350,70 500,40 C650,10 850,80 1000,50 C1150,20 1200,60 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  );
}
