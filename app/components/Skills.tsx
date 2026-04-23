"use client";

import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type SkillsProps = {
  items: typeof skills;
};

export default function Skills({ items }: SkillsProps) {
  return (
    <section
      id="skills"
      className="section-wrap px-6 py-14 md:px-10 md:py-16 lg:px-14"
    >
      <SectionHeading
        index="02"
        title="Skills"
        kicker="Core tools and technologies I use across frontend, backend, mobile, and deployment workflows."
      />

      <div className="grid gap-4 md:gap-5" data-reveal>
        {items.map((group) => (
          <motion.article
            key={group.group}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="skills-group"
          >
            <p className="skills-group-title">{group.group}</p>
            <div className="skills-chip-wrap">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
