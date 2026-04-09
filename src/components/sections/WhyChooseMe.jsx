"use client";

import { Zap, Sparkles, Smartphone, Target } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

import BorderGlow from "@/components/BorderGlow";

export default function WhyChooseMe() {
  const reasons = [
    { title: "Fast Performance", desc: "I build lightning-fast experiences using modern tools like Next.js that keep users engaged.", icon: Zap },
    { title: "Clean UI", desc: "No clutter. Just minimal, beautiful interfaces designed focused completely on the user.", icon: Sparkles },
    { title: "Mobile Responsive", desc: "Every website scales perfectly from giant desktop monitors down to mobile screens.", icon: Smartphone },
    { title: "Conversion-Focused", desc: "I strategically place CTAs and structure content to turn more of your leads into actual sales.", icon: Target }
  ];

  return (
    <section className="py-24 lg:py-40 bg-transparent text-white relative z-10 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <FadeUp delay={0.1}>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[26px] font-medium tracking-wide text-white mb-4 sm:mb-6">Why Partner With Me?</h2>
              <p className="mb-8 text-sm lg:text-[14px] leading-loose opacity-80 font-light text-slate-400 max-w-lg mx-auto lg:mx-0">
                I don&apos;t just write code; I solve business problems. When you hire me, you get a technical partner dedicated to making your project a resounding success.
              </p>
              <div className="flex justify-center lg:justify-start gap-2 sm:gap-4 items-center">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl lg:text-[28px] font-semibold tracking-tight text-white">100%</span>
                  <span className="text-[10px] sm:text-xs lg:text-[11px] text-slate-400 mt-1 uppercase tracking-[0.2em]">Client Satisfaction</span>
                </div>
                <div className="w-px h-12 sm:h-16 bg-white/20 mx-2 sm:mx-4"></div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl lg:text-[28px] font-semibold tracking-tight text-white">24/7</span>
                  <span className="text-[10px] sm:text-xs lg:text-[11px] text-slate-400 mt-1 uppercase tracking-[0.2em]">Dedicated Support</span>
                </div>
              </div>
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4 lg:mt-0">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <FadeUp key={i} delay={0.1 + (i * 0.1)}>
                  <BorderGlow
                    className="h-full group hover:bg-white/5 transition-colors duration-300"
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
                    <div className="p-4 sm:p-5 flex flex-col h-full bg-white/5 backdrop-blur-sm overflow-hidden rounded-[24px]">
                      <div className="mb-3 sm:mb-4 text-white drop-shadow-md bg-white/10 w-fit p-2 sm:p-2.5 rounded-xl sm:rounded-2xl flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-sm lg:text-[15px] font-medium text-white mb-1 sm:mb-2 tracking-wide leading-tight">{reason.title}</h3>
                      <p className="text-slate-400 text-xs lg:text-[13px] leading-relaxed opacity-80 font-light">{reason.desc}</p>
                    </div>
                  </BorderGlow>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
