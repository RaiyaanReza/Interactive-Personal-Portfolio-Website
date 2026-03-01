"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

export function AnimatedText({ texts, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`relative h-[1.2em] overflow-hidden ${className}`}>
      {texts.map((text, index) => (
        <motion.span
          key={text}
          className="absolute inset-0"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: currentIndex === index ? "0%" : "-100%",
            opacity: currentIndex === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  );
}
