"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) {
      return;
    }

    const moveCursorX = gsap.quickTo(cursor, "x", {
      duration: 0.12,
      ease: "power3.out",
    });
    const moveCursorY = gsap.quickTo(cursor, "y", {
      duration: 0.12,
      ease: "power3.out",
    });
    const moveRingX = gsap.quickTo(ring, "x", {
      duration: 0.28,
      ease: "power3.out",
    });
    const moveRingY = gsap.quickTo(ring, "y", {
      duration: 0.28,
      ease: "power3.out",
    });

    const onMove = (event: MouseEvent) => {
      const x = event.clientX - 5;
      const y = event.clientY - 5;

      moveCursorX(x);
      moveCursorY(y);
      moveRingX(x - 12);
      moveRingY(y - 12);
    };

    const setHoverState = (active: boolean) => {
      gsap.to(ring, {
        scale: active ? 1.7 : 1,
        opacity: active ? 0.92 : 0.6,
        duration: 0.18,
        ease: "power2.out",
      });
      gsap.to(cursor, {
        scale: active ? 0.55 : 1,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    const onOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, [data-cursor]")) {
        setHoverState(true);
      }
    };

    const onOut = () => {
      setHoverState(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
