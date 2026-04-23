"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import Contact from "./Contact";
import CustomCursor from "./CustomCursor";
import Experience from "./Experience";
import Hero from "./Hero";
import HumbleWins from "./HumbleWins";
import Projects from "./Projects";
import Skills from "./Skills";
import {
  aboutParagraphs,
  experiences,
  profile,
  projects,
  recognitions,
  skills,
} from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!frameRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(".hero-glow", {
        yPercent: -12,
        xPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: frameRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".hero-glow-secondary", {
        yPercent: 8,
        xPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: frameRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".hero-glow", {
        y: 9,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.to(".hero-glow-secondary", {
        y: -7,
        duration: 3.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      gsap.from("[data-reveal]", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-reveal]",
          start: "top 92%",
        },
      });
    }, frameRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.main
      ref={frameRef}
      className="portfolio-shell"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <CustomCursor />
      <Hero data={profile} />
      <About paragraphs={aboutParagraphs} blurb={profile.blurb} />
      <Skills items={skills} />
      <Experience items={experiences} />
      <HumbleWins items={recognitions} />
      <Projects items={projects} />
      <Contact data={profile} />
    </motion.main>
  );
}
