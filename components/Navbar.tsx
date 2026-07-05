"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Work", target: "works" },
  { label: "About", target: "about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (target: string) => {
    const section = document.getElementById(target);

    if (!section) return;

    setActive(target);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] px-6 py-4">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-5 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            : "border-white/10 bg-black/25 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="overflow-hidden rounded-xl transition duration-300 hover:scale-105 active:scale-95"
        >
          <Image
            src="/images/avatar.png"
            alt="Tochuan"
            width={48}
            height={48}
            priority
            className="h-12 w-12 rounded-xl object-cover"
          />
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-sm">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={`transition-colors duration-300 hover:text-white ${
                active === item.target
                  ? "text-white"
                  : "text-white/55"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Explore */}
        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition duration-300 hover:scale-105 hover:bg-white/90"
        >
          Explore
        </button>
      </div>
    </header>
  );
}