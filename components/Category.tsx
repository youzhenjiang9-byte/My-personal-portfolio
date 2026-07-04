"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Creative Visuals",
    title: "创意视觉",
    desc: "AI时代下技术赋能与视觉表达的融合实践探索",
    color: "text-lime-400",
    image: "/images/category/category01.png",
  },
  {
    label: "Form Design",
    title: "构成设计",
    desc: "极简形态下的点线面与多元视觉研究",
    color: "text-pink-300",
    image: "/images/category/category02.png",
  },
  {
    label: "IP Scenario",
    title: "IP及场景",
    desc: "IP孵化道路的设计和场景探索与融合",
    color: "text-cyan-300",
    image: "/images/category/category03.png",
  },
  {
    label: "Waterfall Collection",
    title: "工作项目",
    desc: "2019-2026设计工作轨迹，保持 passion",
    color: "text-emerald-400",
    image: "/images/category/category04.png",
  },
  {
    label: "Dynamic Vision",
    title: "动态视觉",
    desc: "AI时代下的各类动态视觉探索",
    color: "text-yellow-300",
    image: "/images/category/category05.png",
  },
  {
    label: "Beyond Design",
    title: "设计之外",
    desc: "记录设计之外的观察与新时代AI技术探索",
    color: "text-purple-300",
    image: "/images/category/category06.png",
  },
];

export default function Category() {
  return (
    <section className="bg-black px-7 py-32 text-white">
      <div className="mb-20 text-center">
        <h2 className="text-[clamp(52px,7vw,96px)] font-black tracking-[-0.08em]">
          <span className="text-lime-400">CREATIVE</span>{" "}
          <span>WORK</span>
        </h2>
        <p className="mt-4 text-sm text-white/45">
          一些有趣的创意内容探索
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {categories.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.75 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-[34px] border border-white/10 bg-[#111113] p-7 transition duration-500 hover:border-white/25"
          >
            <p className={`text-sm font-bold ${item.color}`}>
              ▧ {item.label}
            </p>

            <h3 className="mt-8 text-4xl font-black tracking-[-0.05em]">
              {item.title}
            </h3>

            <p className="mt-5 min-h-[56px] text-sm leading-relaxed text-white/45">
              {item.desc}
            </p>

            <div className="mt-8 h-[260px] overflow-hidden rounded-[26px] bg-zinc-900">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="mt-8 flex items-center justify-between">
              <p className={`text-sm font-bold ${item.color}`}>
                查看作品 →
              </p>
              <span className="text-xs text-white/25">
                0{index + 1}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}