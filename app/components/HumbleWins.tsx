"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { recognitions } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type HumbleWinsProps = {
  items: typeof recognitions;
};

export default function HumbleWins({ items }: HumbleWinsProps) {
  const looped = [...items, ...items];

  return (
    <section
      id="wins"
      className="section-wrap px-6 py-4 md:px-10 md:py-16 lg:px-14"
    >
      <SectionHeading
        index="04"
        title="Humble Wins"
        kicker="Compact recognitions from hackathons and academic milestones."
      />

      <motion.div
        data-reveal
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="wins-track-wrap"
      >
        <div className="wins-track">
          {looped.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="wins-item"
              data-cursor
            >
              <Image
                src={item.image}
                alt={item.title}
                width={32}
                height={32}
                className="wins-thumb"
              />
              <span className="wins-title">{item.title}</span>
              <span className="wins-meta">{item.short}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
