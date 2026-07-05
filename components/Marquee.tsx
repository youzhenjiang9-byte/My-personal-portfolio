"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const images = [
  {
    src: "/images/Marquee/marquee01.png",
    className: "left-[4%] top-[16%] w-[250px] rotate-[-3deg]",
    depth: 36,
  },
  {
    src: "/images/Marquee/marquee02.png",
    className: "right-[10%] top-[14%] w-[360px] rotate-[7deg]",
    depth: -52,
  },
  {
    src: "/images/Marquee/marquee03.png",
    className: "left-[9%] bottom-[6%] w-[520px] rotate-[-7deg]",
    depth: 64,
  },
  {
    src: "/images/Marquee/marquee04.png",
    className: "right-[6%] bottom-[9%] w-[330px] rotate-[6deg]",
    depth: -46,
  },
  {
    src: "/images/Marquee/marquee05.png",
    className: "right-[33%] bottom-[5%] w-[260px] rotate-[4deg]",
    depth: 42,
  },
];

function FloatingImage({
  item,
  index,
  smoothX,
  smoothY,
}: {
  item: (typeof images)[number];
  index: number;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}) {
  const x = useTransform(smoothX, [-0.5, 0.5], [-item.depth, item.depth]);
  const y = useTransform(smoothY, [-0.5, 0.5], [-item.depth, item.depth]);

  return (
    <motion.div style={{ x, y }} className={`absolute z-10 ${item.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 42, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.8 }}
      >
        <motion.img
          src={item.src}
          alt=""
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full cursor-pointer object-cover shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Marquee() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

 const smoothX = useSpring(mouseX, { stiffness: 45, damping: 18 });
const smoothY = useSpring(mouseY, { stiffness: 45, damping: 18 });

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

      {images.map((item, index) => (
        <FloatingImage
          key={item.src}
          item={item}
          index={index}
          smoothX={smoothX}
          smoothY={smoothY}
        />
      ))}

      <div className="relative z-20 text-center text-[clamp(48px,6vw,92px)] font-extrabold leading-[0.86] tracking-[-0.07em]">
        {[
          <>EVERY<span className="text-lime-400">T</span>HING</>,
          <>
            TO{" "}
            <span className="inline-flex h-[0.72em] min-w-[1.6em] items-center justify-center rounded-full bg-lime-400 px-8 text-black">
              →
            </span>{" "}
            CREA<span className="text-pink-300">T</span>E
          </>,
          <>ANYTHI<span className="text-lime-400">N</span>G</>,
        ].map((line, index) => (
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