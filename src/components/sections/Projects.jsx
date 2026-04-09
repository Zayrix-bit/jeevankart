"use client";

import { projects } from "@/data/projects";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import BorderGlow from "@/components/BorderGlow";

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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <FadeUp key={project.id} delay={0.1 + (index * 0.1)}>
              <Link 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block h-full group"
              >
                <BorderGlow
                  className="h-full hover:-translate-y-1 transition-transform duration-300"
                  borderRadius={24}
                  backgroundColor="#050505"
                  glowColor="rainbow"
                  glowRadius={30}
                  glowIntensity={0.8}
                  edgeSensitivity={30}
                  coneSpread={25}
                  animated={false}
                  colors={['#c084fc', '#f472b6', '#38bdf8']}
                >
                  <div className="flex flex-col h-full overflow-hidden rounded-[24px]">
                    <div className="relative h-28 sm:h-44 w-full overflow-hidden bg-black/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-md">
                      <h3 className="text-sm sm:text-base lg:text-[16px] font-medium text-white mb-1 sm:mb-2 tracking-wide leading-tight">{project.title}</h3>
                      <p className="text-xs lg:text-[13px] text-slate-400 mb-3 sm:mb-6 flex-grow overflow-hidden text-ellipsis line-clamp-3 leading-relaxed opacity-80 font-light">{project.description}</p>
                      <div className="inline-flex items-center text-white font-semibold group-hover:text-slate-300 transition-colors mt-auto text-[10px] sm:text-sm uppercase tracking-widest">
                        View Project
                        <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
