"use client";

import FadeUp from "@/components/animations/FadeUp";
import ProfileCard from "@/components/ProfileCard";
import avatarImg from "../../../public/avatar-hero.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-40 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <FadeUp delay={0.2}>
            <div className="text-center lg:text-left mt-4 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl lg:text-[26px] font-medium tracking-wide text-white mb-4 sm:mb-6">About Me</h2>
              <div className="w-16 sm:w-20 h-1 bg-white rounded-full mb-6 sm:mb-8 opacity-80 mx-auto lg:mx-0"></div>
              <p className="mb-4 sm:mb-6 text-sm lg:text-[14px] text-slate-400 leading-loose opacity-80 font-light">
                I am a passionate web developer focused on creating fast, accessible, and high-converting websites. With a strong foundation in modern web technologies, I bridge the gap between design and technical implementation.
              </p>
              <p className="text-sm lg:text-[14px] text-slate-400 leading-loose opacity-80 font-light">
                My goal is to help businesses establish a powerful online presence. Whether you need a simple landing page or a complex web application, I deliver scalable solutions tailored to your unique requirements.
              </p>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <div className="relative flex justify-center w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-none scale-90 lg:scale-95">
              <ProfileCard
                name="Ritesh"
                title="Full Stack Developer"
                handle="ritesh"
                status="Available for work"
                contactText="Contact Me"
                avatarUrl={avatarImg.src}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => window.location.href = '#contact'}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl=""
                behindGlowEnabled={false}
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
