"use client";

import { motion } from "framer-motion";
import { cvItems } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type CvSectionProps = {
  items: typeof cvItems;
};

export default function CvSection({ items }: CvSectionProps) {
  return (
    <section
      id="cv"
      className="section-wrap px-6 py-14 md:px-10 md:py-16 lg:px-14"
    >
      <SectionHeading
        index="05"
        title="CV"
        kicker="Pick the version that matches your role and open it instantly."
      />

      <div className="grid gap-3 md:grid-cols-3" data-reveal>
        {items.map((item) => (
          <motion.a
            key={item.label}
            href={item.file}
            target="_blank"
            rel="noreferrer"
            data-cursor
            whileHover={{ y: -2 }}
            className="cv-item"
          >
            <p className="cv-title">{item.label}</p>
            <p className="cv-focus">{item.focus}</p>
            <span className="link-inline text-[0.8rem] uppercase tracking-[0.08em]">
              View PDF
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
