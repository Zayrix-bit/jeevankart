"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import 'lenis/dist/lenis.css';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Configuration for individual section offsets
    const SECTION_OFFSETS = {
      "#home": 0,
      "#about": -5,
      "#skills": -0,
      "#projects": -0,
      "#services": -0,
      "#contact": -0,
    };

    // Robust anchor link handling for precise positioning
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const customOffset = SECTION_OFFSETS[href] ?? -160;
          lenis.scrollTo(target, { offset: customOffset, duration: 2 });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
