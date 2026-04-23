"use client";

import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type ProjectsProps = {
  items: typeof projects;
};

export default function Projects({ items }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="section-wrap px-6 py-16 md:px-10 md:py-20 lg:px-14"
    >
      <SectionHeading
        index="05"
        title="Selected Projects"
        kicker="Products I shipped lately."
      />

      <div className="grid gap-8 md:gap-10">
        {items.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.04 }}
            data-reveal
            className={`grid gap-4 border-t border-white/10 pt-5 md:grid-cols-12 ${index % 2 === 0 ? "" : "md:pl-8"}`}
          >
            <div className="md:col-span-8">
              <p className="eyebrow mb-3">
                Project {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-balance text-[1.3rem] font-medium leading-[1.16] tracking-[-0.01em] md:text-[2rem]">
                {project.title}
                <span className="text-neutral-400"> / {project.year}</span>
              </h3>

              <p className="mt-2 max-w-[72ch] text-[0.95rem] leading-relaxed text-neutral-300 md:text-[1rem]">
                {project.description}
              </p>
              <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-neutral-400 md:text-[0.95rem]">
                {project.impact}
              </p>
            </div>

            <div className="md:col-span-3 md:col-start-10 md:pt-1">
              <p className="eyebrow">Tech</p>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-neutral-400 md:text-[0.85rem]">
                {project.stack.join(" / ")}
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-sm md:text-[0.9rem]">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link-inline"
                    data-cursor
                  >
                    Visit
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-inline"
                    data-cursor
                  >
                    Source
                  </a>
                ) : null}
                {project.npm ? (
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noreferrer"
                    className="link-inline"
                    data-cursor
                  >
                    npm
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8" data-reveal>
        <a
          href="https://github.com/daniel-oluwadunsin"
          target="_blank"
          rel="noreferrer"
          className="link-inline text-sm uppercase tracking-[0.08em]"
          data-cursor
        >
          View more on GitHub
        </a>
      </div>
    </section>
  );
}
