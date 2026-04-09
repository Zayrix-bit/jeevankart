"use client";

import Lanyard from "@/components/Lanyard";
import FadeUp from "@/components/animations/FadeUp";

export default function LanyardSection() {
  return (
    <section className="relative w-full h-[55vh] md:h-[80vh] lg:h-screen min-h-[400px] bg-transparent flex items-center justify-center overflow-hidden" id="interactive">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
      
      {/* Subtle hint text so users know to drag it */}
      <div className="absolute bottom-10 left-0 right-0 z-10 text-center pointer-events-none">
        <FadeUp delay={0.2}>
          <p className="text-xs font-medium tracking-widest text-slate-500 uppercase px-4">
            Grab and drag the card
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
