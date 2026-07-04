"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#works" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(navItems[index].href);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-4">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-5 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl"
            : "border-white/10 bg-black/25 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black"
        >
          ●
        </a>

        {/* Nav */}
        <nav className="flex gap-10 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition duration-300 hover:text-white ${
                active === item.href
                  ? "text-white"
                  : "text-white/55"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Button */}
        <a
          href="#contact"
          className="rounded-full bg-white px-6 py-2 text-sm text-black transition duration-300 hover:scale-105"
        >
          Explore
        </a>
      </div>
    </header>
  );
}