"use client";

import { motion } from "framer-motion";

const stats = [
  ["05+", "Years"],
  ["120+", "Projects"],
  ["30+", "Visuals"],
  ["AI", "Creator"],
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black px-8 py-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(132,255,59,0.08),transparent_42%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="col-span-7"
        >
          <p className="mb-8 text-sm tracking-[0.35em] text-white/35">
            04 / ABOUT ME
          </p>

          <h2 className="title-xl">
            DESIGN
            <br />
            <span className="text-lime-400">× AI</span>
            <br />
            CREATIVE
          </h2>

          <p className="mt-10 max-w-xl text-xl leading-relaxed text-white/55">
            我专注于品牌视觉、AI 创意设计、UI/UX 与动态视觉探索。
            持续关注设计与技术融合，希望创造具有温度和体验感的作品。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="col-span-5 overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900"
        >
          <img
            src="/images/about/about.png"
            alt="about"
            className="h-[620px] w-full object-cover"
          />
        </motion.div>

        <div className="col-span-12 mt-16 grid grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={item[1]}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-5xl font-black tracking-[-0.06em]">
                {item[0]}
              </p>
              <p className="mt-3 text-sm text-white/40">{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}