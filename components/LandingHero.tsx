"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    type: "image",
    src: "/videos/landing/landing01.png",
  },
  {
    type: "video",
    src: "/videos/landing/landing01.mp4",
  },
  {
    type: "image",
    src: "/videos/landing/landing02.png",
  },
  {
    type: "image",
    src: "/videos/landing/landing03.png",
  },
  {
    type: "image",
    src: "/videos/landing/landing04.png",
  },
];

export default function LandingHero() {
  const [index, setIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const current = slides[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 24;
    const y = (e.clientY / window.innerHeight - 0.5) * 24;
    setMouse({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: [1.04, 1.08, 1.04],
            x: mouse.x,
            y: mouse.y,
          }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: { duration: 0.6, ease: "easeOut" },
            y: { duration: 0.6, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          {current.type === "video" ? (
            <video
              src={current.src}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-80"
            />
          ) : (
            <img
              src={current.src}
              alt=""
              className="h-full w-full object-cover opacity-80"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      <div className="relative z-10 h-full px-8 pt-24">
        <motion.h1
          initial={{ opacity: 0, x: -80, filter: "blur(12px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="title-hero text-white/45"
        >
          DESIGN
          <sup className="ml-5 align-top text-[7vw]">®</sup>
        </motion.h1>

        <p className="absolute left-[42%] top-[28%] text-2xl font-bold tracking-[-0.04em] text-white/55">
          CREATIVE.LQB
        </p>

        <div className="absolute right-8 top-24 text-4xl text-white/55">
          Create
        </div>

        <div className="absolute right-8 top-[42%] max-w-xs text-right text-4xl font-medium leading-tight text-white/80">
          Designer
          <br />
          So Just do it
          <br />
          Vision.
        </div>

        <div className="absolute bottom-20 left-8 max-w-xl text-4xl leading-tight tracking-[-0.05em] text-white/55">
          &lt;&nbsp; How to use AI to explore.
          <br />
          new visuals is one of the design
          <br />
          directions I pursue. Just do it
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}