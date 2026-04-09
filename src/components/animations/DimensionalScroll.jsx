"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/*
 * ═══════════════════════════════════════════════════════
 *  DIMENSIONAL SCROLL REVEALS
 *  Each component provides a UNIQUE viewport transition.
 *  Scroll-driven via framer-motion's useScroll.
 * ═══════════════════════════════════════════════════════
 */

/* ──────────────────────────────────────────────
 * 1. PERSPECTIVE FOLD
 *    Section rotates in from 3D space like a panel
 *    swinging open toward the viewer.
 * ────────────────────────────────────────────── */
export function PerspectiveFold({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], ["-25deg", "0deg"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["60px", "0px"]);

  return (
    <div ref={ref} style={{ perspective: "1200px" }}>
      <motion.div
        style={{
          rotateX,
          opacity,
          scale,
          y,
          transformOrigin: "center bottom",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────
 * 2. IRIS REVEAL
 *    A circular clip-path expands from center,
 *    like a camera iris opening.
 * ────────────────────────────────────────────── */
export function IrisReveal({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.25"],
  });

  const clipRadius = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.8, 1]);

  return (
    <div ref={ref}>
      <motion.div
        style={{
          opacity,
          clipPath: useTransform(
            clipRadius,
            (r) => `circle(${r}% at 50% 50%)`
          ),
          willChange: "clip-path, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────
 * 3. ELASTIC SNAP
 *    Content stretches/skews vertically then
 *    snaps into its natural position.
 * ────────────────────────────────────────────── */
export function ElasticSnap({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.6, 0.85, 1], [0.3, 1.08, 0.97, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 0.6, 0.85, 1], [0.9, 0.96, 1.01, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.7, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]);

  return (
    <div ref={ref}>
      <motion.div
        style={{
          scaleY,
          scaleX,
          opacity,
          y,
          transformOrigin: "center top",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────
 * 4. SCALE PORTAL
 *    Starts as a tiny point and scales up while
 *    blur clears — like zooming through a portal.
 * ────────────────────────────────────────────── */
export function ScalePortal({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.2"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.7, 1], [12, 2, 0]);

  return (
    <div ref={ref}>
      <motion.div
        style={{
          scale,
          opacity,
          filter: useTransform(blur, (b) => `blur(${b}px)`),
          willChange: "transform, opacity, filter",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────
 * 5. DIAGONAL SWEEP
 *    A diagonal gradient mask sweeps across,
 *    progressively revealing the content.
 * ────────────────────────────────────────────── */
export function DiagonalSweep({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.7, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const skewY = useTransform(scrollYProgress, [0, 0.7, 1], ["-3deg", "0.5deg", "0deg"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <div ref={ref}>
      <motion.div
        style={{
          opacity,
          y,
          skewY,
          scale,
          transformOrigin: "center top",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────
 * 6. HORIZONTAL SPLIT
 *    Content splits into left/right halves that
 *    slide inward and merge together.
 * ────────────────────────────────────────────── */
export function HorizontalSplit({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const gapSize = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.7, 1]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        style={{
          opacity,
          clipPath: useTransform(
            gapSize,
            (g) =>
              `polygon(0% 0%, calc(50% - ${g / 2}px) 0%, calc(50% - ${g / 2}px) 100%, 0% 100%, 0% 0%, calc(50% + ${g / 2}px) 0%, 100% 0%, 100% 100%, calc(50% + ${g / 2}px) 100%, calc(50% + ${g / 2}px) 0%)`
          ),
          willChange: "clip-path, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
