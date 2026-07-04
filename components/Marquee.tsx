"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "/images/marquee/marquee01.png",
    className: "left-[4%] top-[16%] w-[190px]",
  },
  {
    src: "/images/marquee/marquee02.png",
    className: "right-[18%] top-[18%] w-[350px]",
  },
  {
    src: "/images/marquee/marquee03.png",
    className: "left-[18%] bottom-[10%] w-[440px]",
  },
  {
    src: "/images/marquee/marquee04.png",
    className: "right-[5%] bottom-[16%] w-[250px]",
  },
  {
    src: "/images/marquee/marquee05.png",
    className: "right-[36%] bottom-[7%] w-[220px]",
  },
];

export default function Marquee() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-8 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_48%)]" />

      {images.map((item, index) => (
        <motion.img
          key={item.src}
          src={item.src}
          alt=""
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.8 }}
          animate={{
            y: [0, -10, 0],
          }}
          className={`absolute z-10 object-cover shadow-[0_30px_90px_rgba(0,0,0,0.55)] ${item.className}`}
        />
      ))}

      <motion.h2
        initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-20 text-center text-[clamp(48px,6vw,92px)] font-extrabold leading-[0.86] tracking-[-0.07em]"
      >
        EVERY
        <span className="text-lime-400">T</span>
        HING
        <br />
        TO{" "}
        <span className="inline-flex h-[0.72em] min-w-[1.6em] items-center justify-center rounded-full bg-lime-400 px-8 text-black">
          →
        </span>{" "}
        CREA
        <span className="text-pink-300">T</span>E
        <br />
        ANYTHI
        <span className="text-lime-400">N</span>G
      </motion.h2>
    </section>
  );
}