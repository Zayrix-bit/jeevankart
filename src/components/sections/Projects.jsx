"use client";

import { useState, useCallback } from "react";
import { projects } from "@/data/projects";
import FadeUp from "@/components/animations/FadeUp";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const handleSelect = useCallback((i) => {
    setActiveIndex(i);
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-40 bg-transparent relative overflow-hidden" aria-label="Featured web development projects">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <FadeUp delay={0.1}>
          <div className="mb-16 sm:mb-24">
            <h2 className="text-xl sm:text-2xl lg:text-[20px] font-medium tracking-widest text-white uppercase opacity-90">
              Featured Projects
            </h2>
            <p className="mt-4 text-sm lg:text-[14px] text-slate-400 leading-loose opacity-80 font-light max-w-lg">
              Recent work showcasing high-converting websites built with Next.js, React, and modern web technologies.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative">

            {/* ═══ Ambient Glow ═══ */}
            <div
              className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none transition-all duration-[1200ms] ease-out blur-[120px] opacity-[0.07]"
              style={{ background: active.glow }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none transition-all duration-[1200ms] ease-out blur-[100px] opacity-[0.05]"
              style={{ background: active.glow }}
              aria-hidden="true"
            />

            {/* ═══ Main Layout ═══ */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">

              {/* ─── Left: Project Selector ─── */}
              <nav className="flex flex-row lg:flex-col gap-0 lg:w-48 shrink-0 mb-12 lg:mb-0 lg:pt-4 border-b lg:border-b-0 border-white/[0.06] overflow-x-auto snap-x snap-mandatory" aria-label="Project navigation">
                {projects.map((project, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={project.id}
                      onClick={() => handleSelect(i)}
                      onMouseEnter={() => handleSelect(i)}
                      className="relative text-left py-4 lg:py-5 px-1 flex-1 lg:flex-none group transition-all duration-300 cursor-pointer snap-start shrink-0 min-w-[80px]"
                      aria-current={isActive ? "true" : undefined}
                      aria-label={`View project: ${project.title}`}
                    >
                      {/* Active indicator — bottom on mobile, left on desktop */}
                      <div
                        className="absolute bottom-0 lg:bottom-auto lg:top-0 lg:left-0 transition-all duration-500 ease-out"
                        style={{
                          height: '2px',
                          width: isActive ? '100%' : '0%',
                          background: project.glow,
                        }}
                        aria-hidden="true"
                      />
                      <div
                        className="hidden lg:block absolute left-0 top-0 bottom-0 transition-all duration-500 ease-out rounded-full"
                        style={{
                          width: '2px',
                          height: isActive ? '100%' : '0%',
                          background: project.glow,
                        }}
                        aria-hidden="true"
                      />

                      {/* Index + Title */}
                      <div className="lg:pl-4">
                        <span
                          className="block text-[10px] font-mono tracking-widest mb-1 transition-colors duration-400"
                          style={{ color: isActive ? project.glow : 'rgba(148,163,184,0.3)' }}
                        >
                          {project.index}
                        </span>
                        <span
                          className="block text-xs sm:text-sm font-medium tracking-wide transition-all duration-400"
                          style={{
                            color: isActive ? '#fff' : 'rgba(148,163,184,0.4)',
                          }}
                        >
                          {project.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* ─── Right: Spotlight Display ─── */}
              <article className="flex-1 min-w-0 relative">

                {/* Project Screenshot */}
                {active.image && (
                  <div className="mb-8 rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={active.image}
                      alt={`Screenshot of ${active.title} — ${active.subtitle}`}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      quality={80}
                    />
                  </div>
                )}

                {/* Large Title */}
                <div className="relative">
                  <h3
                    className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] transition-all duration-500 ease-out"
                    key={active.id + '-title'}
                  >
                    {active.title}
                  </h3>
                  <p
                    className="mt-2 text-sm sm:text-base font-light tracking-widest uppercase transition-all duration-500"
                    style={{ color: `${active.glow}99` }}
                    key={active.id + '-sub'}
                  >
                    {active.subtitle}
                  </p>
                </div>

                {/* Divider */}
                <div className="mt-8 mb-8 h-px w-full relative overflow-hidden" aria-hidden="true">
                  <div className="absolute inset-0 bg-white/[0.06]" />
                  <div
                    className="absolute top-0 left-0 h-full transition-all duration-700 ease-out"
                    style={{
                      width: '40%',
                      background: `linear-gradient(90deg, ${active.glow}50, transparent)`,
                    }}
                  />
                </div>

                {/* Description */}
                <p
                  className="text-sm sm:text-[15px] text-slate-400/90 leading-[1.9] font-light max-w-xl transition-all duration-500"
                  key={active.id + '-desc'}
                >
                  {active.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mt-6" key={active.id + '-tech'} aria-label="Technologies used">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-3 py-1 rounded-full font-medium tracking-wide transition-all duration-400"
                      style={{
                        border: `1px solid ${active.glow}20`,
                        color: `${active.glow}bb`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={active.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex sm:inline-flex items-center justify-center gap-2 mt-10 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-400 group/cta hover:scale-[1.02] w-full sm:w-auto"
                  style={{
                    border: `1px solid ${active.glow}30`,
                    color: active.glow,
                    background: `${active.glow}08`,
                  }}
                  aria-label={`View live demo of ${active.title}`}
                >
                  View Live Project
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" aria-hidden="true" />
                </a>

              </article>
            </div>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}
