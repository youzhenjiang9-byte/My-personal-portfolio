"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const images = [
  { src: "/images/Marquee/marquee01.png", className: "left-[4%] top-[16%] w-[190px]", depth: 14 },
  { src: "/images/Marquee/marquee02.png", className: "right-[18%] top-[18%] w-[350px]", depth: -18 },
  { src: "/images/Marquee/marquee03.png", className: "left-[18%] bottom-[10%] w-[440px]", depth: 22 },
  { src: "/images/Marquee/marquee04.png", className: "right-[5%] bottom-[16%] w-[250px]", depth: -16 },
  { src: "/images/Marquee/marquee05.png", className: "right-[36%] bottom-[7%] w-[220px]", depth: 12 },
];

const lines = [
  <>
    EVERY<span className="text-lime-400">T</span>HING
  </>,
  <>
    TO{" "}
    <span className="inline-flex h-[0.72em] min-w-[1.6em] items-center justify-center rounded-full bg-lime-400 px-8 text-black">
      →
    </span>{" "}
    CREA<span className="text-pink-300">T</span>E
  </>,
  <>
    ANYTHI<span className="text-lime-400">N</span>G
  </>,
];

export default function Marquee() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-8 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_48%)]" />

      {images.map((item, index) => {
        const x = useTransform(smoothX, [-0.5, 0.5], [-item.depth, item.depth]);
        const y = useTransform(smoothY, [-0.5, 0.5], [-item.depth, item.depth]);

        return (
          <motion.div
            key={item.src}
            style={{ x, y }}
            initial={{ opacity: 0, y: 42, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`absolute z-10 ${item.className}`}
          >
            <motion.img
              src={item.src}
              alt=""
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full cursor-pointer object-cover shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        );
      })}

      <div className="relative z-20 text-center text-[clamp(48px,6vw,92px)] font-extrabold leading-[0.86] tracking-[-0.07em]">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 38, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.025 }}
            className="origin-center"
          >
            {line}
          </motion.div>
        ))}
      </div>
    </section>
  );
}