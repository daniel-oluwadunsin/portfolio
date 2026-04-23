"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type AboutProps = {
  paragraphs: string[];
  blurb: string;
};

export default function About({ paragraphs, blurb }: AboutProps) {
  return (
    <section
      id="about"
      className="section-wrap px-6 py-14 md:px-10 md:py-20 lg:px-14"
    >
      <SectionHeading index="01" title="About" kicker={blurb} />

      <div className="grid gap-8 md:grid-cols-12 md:gap-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="md:col-span-8"
          data-reveal
        >
          <div className="space-y-5 text-[1rem] leading-relaxed text-neutral-300 md:text-[1.24rem] md:leading-[1.55]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="md:col-span-3 md:col-start-10 md:pt-7"
          data-reveal
        >
          <p className="eyebrow">Base</p>
          <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-neutral-400 md:text-base">
            Lagos, Nigeria
          </p>
          <p className="eyebrow mt-5">Experience</p>
          <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-neutral-400 md:text-base">
            4+ years building production systems.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
