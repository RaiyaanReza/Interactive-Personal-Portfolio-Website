"use client";

import { useScroll } from "@/hooks/useScroll";

export function ScrollProgress() {
  const { scrollProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 z-60 h-0.5">
      <div
        className="h-full bg-linear-to-r from-[#dc2626] via-[#e11d48] to-[#f43f5e] transition-transform duration-150 ease-out scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
}
