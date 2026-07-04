"use client";

import { motion } from "framer-motion";

const works = [
  { img: "/images/works/work01.png", title: "AI Creative Experience", tag: "Brand / AI / Motion", pos: "left-[8%] top-[43%] rotate-[-2deg]", size: "w-[350px] h-[470px]" },
  { img: "/images/works/work02.png", title: "Brand Design", tag: "Visual Identity", pos: "left-[30%] top-[33%] rotate-[-5deg]", size: "w-[300px] h-[390px]" },
  { img: "/images/works/work03.png", title: "Motion Visual", tag: "Animation / 3D", pos: "left-[48%] top-[40%] rotate-[4deg]", size: "w-[310px] h-[430px]" },
  { img: "/images/works/work04.png", title: "Graphic Design", tag: "Print / Packaging", pos: "left-[66%] top-[38%] rotate-[-1deg]", size: "w-[300px] h-[390px]" },
  { img: "/images/works/work05.png", title: "IP & Scene", tag: "Character / Scene", pos: "left-[82%] top-[48%] rotate-[5deg]", size: "w-[260px] h-[360px]" },
];

export default function Works() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-8 py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_55%,rgba(132,255,59,0.08),transparent_42%)]" />

      <div className="relative z-20">
       <p className="label-soft mb-4">
          07 / WORKS
        </p>

        <h2 className="title-xl max-w-[760px]">
          RECENT <span className="text-lime-400">WORKS</span>
          <br />
          HEY CREATIVE DESIGN
          <br />
          JUST FOR <span className="text-pink-300">@</span>FUTURE
        </h2>
      </div>

      <svg
        className="pointer-events-none absolute left-0 top-[36%] z-0 h-[420px] w-full opacity-40"
        viewBox="0 0 1600 420"
        fill="none"
      >
        <path
          d="M0 300 C240 120 360 420 560 230 C760 40 920 360 1120 170 C1320 -20 1430 260 1600 110"
          stroke="rgba(132,255,59,.45)"
          strokeWidth="1"
          strokeDasharray="8 10"
        />
      </svg>

      <div className="absolute right-[18%] top-[24%] z-20 max-w-xs text-sm leading-relaxed text-white/45">
        Design is not just what it looks like and feels like. Design is how it works and communicates.
      </div>

      <div className="absolute right-[8%] top-[39%] z-20 rotate-[-3deg] rounded-2xl bg-[#101010] px-8 py-5 text-sm font-bold">
        VIEW MORE <span className="ml-5 text-lime-400">→</span>
      </div>

      {works.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 80, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.85 }}
          viewport={{ once: true }}
          whileHover={{ y: -16, scale: 1.03, rotate: 0 }}
          className={`group absolute z-10 overflow-hidden rounded-[26px] bg-[#111] p-4 shadow-[0_35px_90px_rgba(0,0,0,.55)] ${item.pos} ${item.size}`}
        >
          <div className="mb-4 flex justify-between text-xl font-black">
            <span>0{index + 1}</span>
            <span className="text-white/35">↗</span>
          </div>

          <div className="overflow-hidden rounded-[20px]">
            <img
              src={item.img}
              alt=""
              className="h-[68%] min-h-[230px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <h3 className="mt-5 text-2xl font-semibold">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-white/45">{item.tag}</p>
        </motion.article>
      ))}
    </section>
  );
}