"use client";

import { projects } from "@/data/projects";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";
import { ArrowUpRight, Stethoscope, Building2, FileText } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

const accentColors = {
  emerald: { dot: "bg-emerald-400", line: "bg-emerald-500/30", tag: "border-emerald-500/20 text-emerald-400/80" },
  blue:    { dot: "bg-blue-400",    line: "bg-blue-500/30",    tag: "border-blue-500/20 text-blue-400/80" },
  violet:  { dot: "bg-violet-400",  line: "bg-violet-500/30",  tag: "border-violet-500/20 text-violet-400/80" },
};

const projectIcons = {
  stethoscope: Stethoscope,
  building: Building2,
  file: FileText,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-40 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp delay={0.1}>
          <div className="mb-12 md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl lg:text-[20px] font-medium tracking-widest text-white uppercase opacity-90">Featured Projects</h2>
              <p className="mt-4 text-sm lg:text-[14px] text-slate-400 leading-loose opacity-80 font-light">
                A selection of recent work that highlights my focus on performance, conversion, and clean design.
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => {
            const colors = accentColors[project.accentBorder] || accentColors.blue;
            return (
              <FadeUp key={project.id} delay={0.1 + (index * 0.1)}>
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <BorderGlow
                    className="h-full hover:-translate-y-1.5 transition-all duration-400"
                    borderRadius={20}
                    backgroundColor="#050505"
                    glowColor="rainbow"
                    glowRadius={30}
                    glowIntensity={0.8}
                    edgeSensitivity={30}
                    coneSpread={25}
                    animated={false}
                    colors={['#c084fc', '#f472b6', '#38bdf8']}
                  >
                    <div className="flex flex-col h-full overflow-hidden rounded-[20px]">

                      {/* Gradient Header — replaces screenshot */}
                      <div className={`relative h-32 sm:h-40 w-full bg-gradient-to-br ${project.accent} flex items-center justify-center overflow-hidden`}>
                        {/* Decorative grid pattern */}
                        <div className="absolute inset-0 opacity-[0.04]" style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                          backgroundSize: '24px 24px'
                        }} />
                        {/* Accent dot */}
                        <div className={`absolute top-4 left-4 w-2 h-2 rounded-full ${colors.dot} opacity-60`} />
                        {/* Decorative line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-px ${colors.line}`} />
                        {/* Icon */}
                        {(() => {
                          const IconComponent = projectIcons[project.icon];
                          return IconComponent ? (
                            <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 text-white/20 group-hover:text-white/35 group-hover:scale-110 transition-all duration-500 stroke-[1.2]" />
                          ) : null;
                        })()}
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 flex flex-col flex-grow">
                        <h3 className="text-[15px] sm:text-base font-semibold text-white mb-2 tracking-wide leading-tight group-hover:text-white/90 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-400/80 mb-4 flex-grow line-clamp-3 leading-relaxed font-light">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tech.map((t) => (
                            <span key={t} className={`text-[10px] px-2 py-0.5 rounded-full border ${colors.tag} font-medium`}>
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="inline-flex items-center text-white/70 group-hover:text-white transition-colors text-xs uppercase tracking-widest font-medium mt-auto">
                          View Project
                          <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                    </div>
                  </BorderGlow>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
