"use client";

import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
  return (
    <section className="relative px-4 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden bg-transparent min-h-screen flex items-center" id="home">
      <div className="absolute inset-0 z-0">
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full pointer-events-none">

        <FadeUp delay={0.2}>
          <h1 className="text-2xl sm:text-3xl lg:text-[26px] xl:text-[28px] font-medium text-white tracking-wide mb-6 lg:leading-relaxed">
            Web Developer Who Builds <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-semibold">High-Converting</span> Websites
          </h1>
        </FadeUp>
        
        <FadeUp delay={0.3}>
          <p className="mt-4 text-sm sm:text-base lg:text-[13px] xl:text-[14px] leading-loose text-slate-400 max-w-lg mx-auto mb-10 font-light tracking-normal opacity-80">
            I specialize in clean, minimal, and SEO-optimized web experiences designed to turn your visitors into loyal customers. Let&apos;s build something great.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.4}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 pointer-events-auto w-full px-4 sm:px-0">
            <Link 
              href="#projects" 
              className="rounded-full bg-white px-8 py-3 sm:py-4 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 hover:scale-105 transition-all outline-none w-full sm:w-auto"
            >
              Get Started
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-semibold leading-6 text-white border border-white/20 px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 hover:border-white/30 transition-all outline-none w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
