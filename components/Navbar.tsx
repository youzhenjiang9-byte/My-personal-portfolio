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

    if (!section) {
      console.log("找不到 section:", target);
      return;
    }

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
            : "border-white/10 bg-black/25 backdrop-blur-md"
        }`}
      >
        {/* Avatar */}
        <button
          onClick={() => scrollToSection("home")}
          className="overflow-hidden rounded-xl transition hover:scale-105"
        >
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-cover"
            priority
          />
        </button>

        {/* Navigation */}
        <nav className="flex gap-10 text-sm">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={`transition duration-300 hover:text-white ${
                active === item.target ? "text-white" : "text-white/55"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-full bg-white px-6 py-2 text-sm text-black transition duration-300 hover:scale-105"
        >
          Explore
        </button>
      </div>
    </header>
  );
}