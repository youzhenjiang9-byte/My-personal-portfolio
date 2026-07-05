"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const emojis = ["✨", "💚", "🌙", "🪐", "🎧", "🌱", "⭐"];

type Effect = {
  id: number;
  x: number;
  y: number;
  emoji: string;
};

export default function ClickEffect() {
  const [effects, setEffects] = useState<Effect[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();

      setEffects((prev) => [
        ...prev,
        {
          id,
          x: e.clientX,
          y: e.clientY,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
        },
      ]);

      setTimeout(() => {
        setEffects((prev) => prev.filter((item) => item.id !== id));
      }, 900);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999]">
      <AnimatePresence>
        {effects.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 1,
              scale: 0.6,
              x: item.x,
              y: item.y,
            }}
            animate={{
              opacity: 0,
              scale: 1.8,
              x: item.x + (Math.random() - 0.5) * 80,
              y: item.y - 80,
              rotate: Math.random() * 80 - 40,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-2xl"
          >
            {item.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}