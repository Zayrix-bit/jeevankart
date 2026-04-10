"use client";

import { Monitor, Rocket, TrendingUp, Building2 } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

import BorderGlow from "@/components/BorderGlow";

export default function Services() {
  const services = [
    {
      title: "Custom Website Development",
      description: "Scalable, hand-coded websites built from scratch to meet your unique business goals and user needs.",
      icon: Monitor
    },
    {
      title: "Landing Page Design",
      description: "High-converting single pages tailored for marketing campaigns, product launches, and lead generation.",
      icon: Rocket
    },
    {
      title: "SEO-Optimized Websites",
      description: "Semantic markup, structured data, and Core Web Vitals tuning to rank higher on Google and drive organic traffic.",
      icon: TrendingUp
    },
    {
      title: "Business Website Development",
      description: "Professional corporate websites that build trust, showcase your brand, and generate qualified leads.",
      icon: Building2
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-40 bg-transparent select-none" aria-label="Web development services offered">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[26px] font-medium tracking-wide text-white">Web Development Services</h2>
            <p className="mt-4 text-sm lg:text-[14px] text-slate-400 leading-loose opacity-80 font-light max-w-2xl mx-auto">
              End-to-end web development services to help you build, launch, and grow your digital presence.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeUp key={index} delay={0.1 + (index * 0.1)}>
                <BorderGlow
                  className="h-full group hover:-translate-y-1 transition-transform duration-300"
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
                  <article className="p-4 sm:p-6 flex flex-col h-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors overflow-hidden rounded-[24px]" role="listitem">
                    <div className="mb-3 sm:mb-4 bg-white w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-black group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all" aria-hidden="true">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base lg:text-[16px] font-medium text-white mb-1 tracking-wide leading-tight">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-xs lg:text-[13px] opacity-80 font-light mt-1">
                      {service.description}
                    </p>
                  </article>
                </BorderGlow>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
