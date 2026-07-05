"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "/images/featured/featured01.png",
    className: "left-[4%] top-[16%] w-[230px]",
  },
  {
    src: "/images/featured/featured02.png",
    className: "right-[12%] top-[18%] w-[420px]",
  },
  {
    src: "/images/featured/featured03.png",
    className: "left-[18%] bottom-[12%] w-[520px]",
  },
  {
    src: "/images/featured/featured04.png",
    className: "right-[7%] bottom-[18%] w-[300px]",
  },
];

export default function Featured() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-8 py-36 text-white">
      {images.map((item, index) => (
        <motion.img
          key={item.src}
          src={item.src}
          alt=""
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.12, duration: 0.9 }}
          viewport={{ once: true }}
          className={`absolute rounded-[2px] object-cover ${item.className}`}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex min-h-screen items-center justify-center"
      >
        <h2 className="text-center text-[clamp(56px,7vw,120px)] font-semibold leading-[0.9] tracking-[-0.08em]">
          EVERY<span className="text-lime-400">T</span>HING
          <br />
          TO{" "}
          <span className="inline-flex h-[0.8em] min-w-[1.5em] items-center justify-center rounded-full bg-lime-400 px-8 text-black">
            →
          </span>{" "}
          CREA<span className="text-pink-300">T</span>E
          <br />
          ANYTHI<span className="text-lime-400">N</span>G
        </h2>
      </motion.div>
    </section>
  );
}