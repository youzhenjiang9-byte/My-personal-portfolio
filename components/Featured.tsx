"use client";

import { motion } from "framer-motion";

export default function Featured() {
  return (
    <section className="bg-black px-8 py-36 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 flex items-end justify-between"
        >
          <div>
            <p className="mb-6 text-base font-medium tracking-normal text-white">
              05 / FEATURED
            </p>

            <h2 className="title-xl">
              FEATURED
              <br />
              <span className="text-lime-400">PROJECTS</span>
            </h2>
          </div>

          <p className="max-w-sm text-right text-white/45">
            Recent selected works and experimental visual projects.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35 }}
          className="group cursor-pointer"
        >
          <div className="overflow-hidden rounded-[40px]">
            <img
              src="/images/featured/featured01.png"
              alt=""
              className="h-[620px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="mt-7 flex items-center justify-between">
            <div>
              <h3 className="text-4xl font-black">Creative AI Experience</h3>
              <p className="mt-2 text-white/45">
                Brand · Visual · AI · Motion
              </p>
            </div>

            <span className="text-white/30">2025</span>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            {
              image: "/images/featured/featured02.png",
              title: "Brand Design",
            },
            {
              image: "/images/featured/featured03.png",
              title: "Motion Visual",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[34px]">
                <img
                  src={item.image}
                  alt=""
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-6 text-3xl font-bold">{item.title}</h3>

              <p className="mt-2 text-white/45">
                Experimental Visual Project
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}