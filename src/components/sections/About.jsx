"use client";

import FadeUp from "@/components/animations/FadeUp";
import ProfileCard from "@/components/ProfileCard";
import avatarImg from "../../../public/avatar-hero.jpg";
import "@/styles/about-editorial.css";

export default function About() {
  return (
    <section id="about" className="pt-32 pb-20 sm:py-24 lg:py-40 bg-transparent" aria-label="About Ritesh — Freelance Web Developer">
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
              Hey, I&apos;m Ritesh, a freelance web developer who builds websites that actually
              work. Not just look good, but load fast, feel smooth, and help real businesses
              get more customers. I&apos;ve spent years mastering tools like Next.js, React, and
              Tailwind CSS to build things that make a real difference for the people I work with.
            </p>

            <p className="about-editorial__text">
              What I do is pretty simple. I take your idea, your brand, or your business
              and turn it into a website that people love to use. Whether it&apos;s a clean
              landing page that gets people to book an appointment, or a full web app with
              lots of moving parts, I handle everything from the design to the code. I make
              sure every page looks great on phones, tablets, and desktops, because your
              customers are on all of them.
            </p>

            <p className="about-editorial__text">
              I&apos;m not the kind of developer who just writes code and calls it a day. I care
              about the small stuff. The way a button feels when you click it, how fast a
              page loads, how easy it is for someone to find what they need. These little
              details are what make a website feel professional and trustworthy, and that&apos;s
              what turns visitors into paying customers.
            </p>

            <p className="about-editorial__text">
              If you&apos;re looking for someone who can build you something modern, fast, and
              built to grow with your business, let&apos;s talk. I&apos;m always open to new
              projects and love working with people who want to stand out online.
            </p>

            {/* Clear float */}
            <div className="clear-both"></div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
