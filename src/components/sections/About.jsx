"use client";

import FadeUp from "@/components/animations/FadeUp";
import ProfileCard from "@/components/ProfileCard";
import avatarImg from "../../../public/avatar-hero.jpg";
import "@/styles/about-editorial.css";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-40 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <FadeUp delay={0}>
          <div className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-medium tracking-wide text-white mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-white/80 rounded-full"></div>
          </div>
        </FadeUp>

        {/* Editorial Content — text wraps around floated image */}
        <FadeUp delay={0.15}>
          <div className="about-editorial">

            {/* Floated Profile Card — sits INSIDE the text flow */}
            <FadeUp delay={0.3}>
              <div className="about-editorial__image">
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

            <p className="about-editorial__text">
              I am a passionate web developer focused on creating fast, accessible, and
              high-converting websites. With a strong foundation in modern web technologies,
              I bridge the gap between design and technical implementation — transforming
              ideas into polished digital experiences that feel alive.
            </p>

            <p className="about-editorial__text">
              My goal is to help businesses establish a powerful online presence. Whether you
              need a simple landing page or a complex web application, I deliver scalable
              solutions tailored to your unique requirements. Every line of code I write is
              driven by a commitment to performance, accessibility, and visual excellence.
            </p>

            <p className="about-editorial__text">
              I believe great software is invisible — it just works. From responsive layouts
              to smooth micro-interactions, I obsess over the details that make a product
              feel premium. Let&apos;s build something remarkable together.
            </p>

            {/* Clear float */}
            <div className="clear-both"></div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
