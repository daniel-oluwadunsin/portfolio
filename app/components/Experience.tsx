"use client";

import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type ExperienceProps = {
  items: typeof experiences;
};

export default function Experience({ items }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="section-wrap px-6 py-16 md:px-10 md:py-24 lg:px-14"
    >
      <SectionHeading
        index="03"
        title="Experience"
        kicker="A few teams I have worked with, and what I shipped with them."
      />

      <div className="grid gap-10 md:gap-14">
        {items.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className={`grid gap-4 md:grid-cols-12 ${index % 2 === 0 ? "" : "md:pl-12"}`}
          >
            <div className="md:col-span-8">
              <h3 className="text-balance text-[1.35rem] font-medium leading-[1.15] tracking-[-0.015em] md:text-[2.2rem]">
                {item.role}
                <span className="text-neutral-400">
                  {" "}
                  — {item.company} — {item.period}
                </span>
              </h3>

              <p className="mt-3 max-w-[64ch] text-[0.98rem] leading-relaxed text-neutral-300 md:text-[1.08rem]">
                {item.summary}
              </p>

              <p className="mt-2 max-w-[66ch] text-sm leading-relaxed text-neutral-400 md:text-[0.96rem]">
                {item.highlights[0]} {item.highlights[1]}
              </p>
            </div>

            <div className="md:col-span-3 md:col-start-10 md:pt-1">
              <p className="eyebrow">Stack</p>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-neutral-400 md:text-[0.86rem]">
                {item.stack.join(" / ")}
              </p>
              {item.location ? (
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.08em] text-neutral-500 md:text-[0.72rem]">
                  {item.location}
                </p>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
