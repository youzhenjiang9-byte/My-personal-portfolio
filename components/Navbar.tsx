"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 py-4">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-5 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            : "border-white/10 bg-black/25 backdrop-blur-md"
        }`}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black">
          ●
        </div>

        <nav className="flex gap-10 text-sm text-white/60">
          <span className="text-white">Home</span>
          <span>Work</span>
          <span>About</span>
        </nav>

        <button className="rounded-full bg-white px-6 py-2 text-sm text-black transition hover:scale-105">
          Explore
        </button>
      </div>
    </header>
  );
}