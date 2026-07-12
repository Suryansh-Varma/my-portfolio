"use client";
import { useState, useEffect } from "react";

// Module-level audio variables to persist between mounts/unmounts (e.g. when mobile header drawer toggles)
let globalAudio: HTMLAudioElement | null = null;
let isGlobalPlaying = false;
const listeners = new Set<(playing: boolean) => void>();

const getAudio = () => {
  if (typeof window === "undefined") return null;
  if (!globalAudio) {
    globalAudio = new Audio("/audio/Tides_and_Timber.mp3");
    globalAudio.loop = true;
  }
  return globalAudio;
};

export default function DenDenMushi() {
  const [isPlaying, setIsPlaying] = useState(isGlobalPlaying);

  useEffect(() => {
    // Sync with current global state on mount
    setIsPlaying(isGlobalPlaying);

    const handleStateChange = (playing: boolean) => {
      setIsPlaying(playing);
    };
    listeners.add(handleStateChange);

    // Initialize audio on client mount
    getAudio();

    return () => {
      listeners.delete(handleStateChange);
      // We do NOT pause the audio on unmount. This allows the audio to continue playing
      // when the mobile drawer unmounts as it closes.
    };
  }, []);

  const togglePlay = () => {
    const audio = getAudio();
    if (!audio) return;

    const nextPlaying = !isPlaying;
    isGlobalPlaying = nextPlaying;

    if (nextPlaying) {
      audio.play().catch((err) => {
        console.warn("Audio play blocked by browser policy. Interact with the document first.", err);
      });
    } else {
      audio.pause();
    }

    listeners.forEach((listener) => listener(nextPlaying));
  };

  return (
    <button
      onClick={togglePlay}
      className={`relative w-10 h-10 transition hover:scale-115 flex items-center justify-center p-1 rounded-full cursor-pointer ${
        isPlaying 
          ? "bg-emerald-500/20 border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
          : "bg-slate-800/10 border border-[#c77b00]/30 hover:border-[#c77b00]"
      }`}
      title={isPlaying ? "Mute Den Den Mushi" : "Awaken Den Den Mushi (Ocean Waves Loop)"}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-7 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
      >
        {/* Snail shell */}
        <path d="M42 50 C40 30 70 30 70 50 C70 70 42 70 42 50 Z" fill="#b85a00" stroke="#5b3d1b" strokeWidth="4.5" />
        {/* Shell spiral */}
        <path d="M56 50 A6 6 0 1 1 50 44" stroke="#5b3d1b" strokeWidth="2.5" />
        {/* Snail body */}
        <path d="M20 75 C30 70 80 70 90 75 C95 78 80 82 20 82 Z" fill="#ecdcb9" stroke="#5b3d1b" strokeWidth="4" />
        {/* Eye stalks */}
        <path d="M26 71 L22 55" stroke="#5b3d1b" strokeWidth="4" strokeLinecap="round" />
        <path d="M33 71 L33 52" stroke="#5b3d1b" strokeWidth="4" strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="22" cy="53" r="3.5" fill="#000" />
        <circle cx="33" cy="50" r="3.5" fill="#000" />
      </svg>
    </button>
  );
}
