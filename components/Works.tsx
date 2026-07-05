"use client";

import { motion } from "framer-motion";

const works = [
  {
    img: "/images/works/work01.png",
    title: "AI Creative Experience",
    tag: "Brand / AI / Motion",
    desc: "Exploring AI-driven visual systems and creative storytelling.",
  },
  {
    img: "/images/works/work02.png",
    title: "Brand Design",
    tag: "Visual Identity",
    desc: "Identity design with experimental visual language.",
  },
  {
    img: "/images/works/work03.png",
    title: "Motion Visual",
    tag: "Animation / 3D",
    desc: "Dynamic visuals for digital scenes and campaigns.",
  },
  {
    img: "/images/works/work04.png",
    title: "Graphic Design",
    tag: "Print / Packaging",
    desc: "Graphic systems across print, packaging and media.",
  },
  {
    img: "/images/works/work05.png",
    title: "IP & Scene",
    tag: "Character / Scene",
    desc: "Character-based visual scenes with narrative atmosphere.",
  },
];

export default function Works() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-36 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(132,255,59,0.08),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-20 flex items-end justify-between gap-10">
          <div>
            <p className="label-soft mb-5">07 / WORKS</p>

            <h2 className="title-xl max-w-[760px]">
              RECENT <span className="text-lime-400">WORKS</span>
              <br />
              FOR CREATIVE
              <br />
              <span className="text-pink-300">@</span>FUTURE
            </h2>
          </div>

          <p className="hidden max-w-xs text-sm leading-relaxed text-white/45 md:block">
            Selected visual experiments across AI, branding, motion and digital
            storytelling.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {works.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.75 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group overflow-hidden rounded-[32px] bg-[#101010] p-4 shadow-[0_35px_90px_rgba(0,0,0,.45)] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`overflow-hidden rounded-[24px] ${
                  index === 0 ? "h-[520px]" : "h-[360px]"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 text-sm text-white/40">
                    0{index + 1} / {item.tag}
                  </p>

                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">
                    {item.desc}
                  </p>
                </div>

                <button className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition group-hover:border-lime-400 group-hover:text-lime-400">
                  View →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}