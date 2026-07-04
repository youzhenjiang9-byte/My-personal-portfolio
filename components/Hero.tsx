"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const cards = [
  { src: "/images/cards/card01.png", pos: "left-[28%] top-[22%]", rotate: "-14deg" },
  { src: "/images/cards/card02.png", pos: "left-[39%] top-[14%]", rotate: "-7deg" },
  { src: "/images/cards/card03.png", pos: "left-[50%] top-[12%]", rotate: "0deg" },
  { src: "/images/cards/card04.png", pos: "left-[61%] top-[14%]", rotate: "7deg" },
  { src: "/images/cards/card05.png", pos: "left-[72%] top-[22%]", rotate: "14deg" },

 // 下排（与上排镜像对齐）
{ src: "/images/cards/card06.png", pos: "left-[28%] bottom-[22%]", rotate: "14deg" },
{ src: "/images/cards/card07.png", pos: "left-[39%] bottom-[14%]", rotate: "7deg" },
{ src: "/images/cards/card08.png", pos: "left-[50%] bottom-[12%]", rotate: "0deg" },
{ src: "/images/cards/card09.png", pos: "left-[61%] bottom-[14%]", rotate: "-7deg" },
{ src: "/images/cards/card10.png", pos: "left-[72%] bottom-[22%]", rotate: "-14deg" },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[900px] overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.08),transparent_46%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),#000_96%)]" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
        className="absolute inset-0"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.src}
            initial={{ opacity: 0, y: 36, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.06,
              duration: 0.7,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.045,
              y: -6,
              rotate: 0,
              zIndex: 50,
              transition: { duration: 0.25 },
            }}
            className={`absolute h-[170px] w-[250px] -translate-x-1/2 overflow-hidden rounded-[28px] bg-zinc-900 shadow-[0_18px_55px_rgba(0,0,0,0.55)] ${card.pos}`}
            style={{ rotate: card.rotate }}
          >
            <motion.img
              src={card.src}
              alt=""
              animate={{ scale: [1, 1.025, 1] }}
              transition={{
                duration: 7 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute left-1/2 top-[49%] z-40 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-[clamp(62px,8vw,112px)] font-black leading-[0.82] tracking-[-0.08em]">
          <span className="text-cyan-300">CRE</span>
          <span className="text-lime-400">ATI</span>
          <span className="text-white">VE </span>
          <span className="text-lime-400">AI</span>
        </h2>

        <p className="mt-5 text-xs tracking-[0.45em] text-white/35">
          ORBIT VISUAL SYSTEM
        </p>

        <button className="mt-8 rounded-full bg-white px-9 py-4 text-sm text-black transition hover:scale-105">
          查看更多 →
        </button>
      </div>
    </section>
  );
}