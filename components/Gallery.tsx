"use client";

import { motion } from "framer-motion";

const images = [
  "/images/gallery/gallery01.png",
  "/images/gallery/gallery02.png",
  "/images/gallery/gallery03.png",
  "/images/gallery/gallery04.png",
  "/images/gallery/gallery05.png",
  "/images/gallery/gallery06.png",
  "/images/gallery/gallery07.png",
  "/images/gallery/gallery08.png",
];

export default function Gallery() {
  const loopImages = [...images, ...images];

  return (
    <section className="overflow-hidden bg-black py-36 text-white">
      <div className="mb-20 px-8">
        <p className="label-soft mb-5">06 / ARCHIVE</p>

        <h2 className="title-xl">
          VISUAL
          <br />
          <span className="text-lime-400">ARCHIVE</span>
        </h2>
      </div>

      <motion.div
        className="flex w-max gap-6 px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loopImages.map((src, index) => (
          <motion.div
            key={`${src}-${index}`}
            whileHover={{ y: -10, scale: 1.025 }}
            className="group h-[400px] w-[295px] shrink-0 overflow-hidden rounded-[30px] shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}