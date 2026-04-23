"use client";

import { motion } from "framer-motion";
import type { profile } from "../data/portfolio";

type HeroProps = {
  data: typeof profile;
};

export default function Hero({ data }: HeroProps) {
  return (
    <header className="relative min-h-[88svh] px-6 pb-14 pt-14 md:px-10 md:pb-20 md:pt-18 lg:px-14">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow-secondary" aria-hidden="true" />

      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="eyebrow md:col-span-2 md:pt-4"
        >
          Adejare Daniel / Software Engineer
        </motion.p>

        <div className="md:col-span-10">
          <motion.h1
            initial={{ opacity: 0, y: 54 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="display max-w-[14ch] text-balance text-[3.1rem] leading-[0.85] tracking-[-0.035em] md:text-[10rem]"
          >
            {data.heroText}
          </motion.h1>

          <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="md:col-span-7 max-w-[44ch] text-[1.02rem] leading-relaxed text-neutral-300 md:text-[1.22rem]"
            >
              {data.statement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="grid gap-1 text-[0.72rem] uppercase tracking-[0.09em] text-neutral-500 md:col-span-3 md:col-start-10 md:justify-self-end"
            >
              <span>{data.location}</span>
              <a
                href={`mailto:${data.email}`}
                className="link-inline text-neutral-200"
                data-cursor
              >
                {data.email}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
