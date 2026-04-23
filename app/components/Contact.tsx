"use client";

import { motion } from "framer-motion";
import type { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type ContactProps = {
  data: typeof profile;
};

export default function Contact({ data }: ContactProps) {
  return (
    <section
      id="contact"
      className="section-wrap px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-24 lg:px-14"
    >
      <SectionHeading
        index="06"
        title="Contact"
        kicker="If you are hiring or building something interesting, I would love to hear about it."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        data-reveal
        className="grid gap-6 md:grid-cols-12"
      >
        <a
          href={`mailto:${data.email}`}
          className="display text-balance text-[2rem] leading-[0.92] tracking-[-0.03em] transition-colors hover:text-[--accent] md:col-span-9 md:text-[4.4rem]"
          data-cursor
        >
          {data.email}
        </a>

        <a
          href={`tel:${data.phone}`}
          className="display text-balance text-[1.5rem] leading-[0.92] tracking-[-0.03em] transition-colors hover:text-[--accent] md:col-span-9 md:text-[2.5rem]"
          data-cursor
        >
          {data.phone}
        </a>

        <div className="grid content-start gap-3 text-sm uppercase tracking-[0.08em] text-neutral-400 md:col-span-2 md:col-start-11 md:justify-end md:text-[0.76rem]">
          <a
            className="link-inline"
            href={data.links.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor
          >
            LinkedIn
          </a>
          <a
            className="link-inline"
            href={data.links.github}
            target="_blank"
            rel="noreferrer"
            data-cursor
          >
            GitHub
          </a>
          <a
            className="link-inline"
            href={data.links.x}
            target="_blank"
            rel="noreferrer"
            data-cursor
          >
            X / Twitter
          </a>
          <p className="pt-4 text-neutral-500">{data.location}</p>
        </div>
      </motion.div>
    </section>
  );
}
