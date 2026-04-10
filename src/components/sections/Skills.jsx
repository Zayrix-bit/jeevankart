"use client";

import FadeUp from "@/components/animations/FadeUp";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss, SiNodedotjs, SiFramer, SiGithub } from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-white drop-shadow-sm transition-all" />, title: "React" },
  { node: <SiNextdotjs className="text-white drop-shadow-sm transition-all" />, title: "Next.js" },
  { node: <SiTypescript className="text-white drop-shadow-sm transition-all" />, title: "TypeScript" },
  { node: <SiTailwindcss className="text-white drop-shadow-sm transition-all" />, title: "Tailwind CSS" },
  { node: <SiJavascript className="text-white drop-shadow-sm transition-all" />, title: "JavaScript" },
  { node: <SiHtml5 className="text-white drop-shadow-sm transition-all" />, title: "HTML5" },
  { node: <SiCss className="text-white drop-shadow-sm transition-all" />, title: "CSS3" },
  { node: <SiNodedotjs className="text-white drop-shadow-sm transition-all" />, title: "Node.js" },
  { node: <SiFramer className="text-white drop-shadow-sm transition-all" />, title: "Framer Motion" },
  { node: <SiGithub className="text-white drop-shadow-sm transition-all" />, title: "Github" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-40 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-[20px] font-medium tracking-widest text-white uppercase opacity-90">Technical Arsenal</h2>
            <p className="mt-4 text-sm lg:text-[14px] text-slate-400 leading-loose opacity-80 font-light max-w-2xl mx-auto">
              The core technologies I use to build scalable and maintainable products.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }} className="w-full">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={80}
              pauseOnHover={false}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#050505"
              ariaLabel="Technologies"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
