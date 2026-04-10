"use client";

import { useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What tech stack do you use?",
    answer: "I primarily work with Next.js, React, TypeScript, Tailwind CSS, and Node.js to build fast, scalable, and SEO-friendly websites. I choose the right tools based on your project's specific needs."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most projects are delivered within 1–3 weeks depending on complexity. A single landing page can be done in under a week, while larger business websites typically take 2–3 weeks."
  },
  {
    question: "Do you offer SEO optimization?",
    answer: "Yes. Every website I build is architected with semantic HTML, proper meta tags, structured data (JSON-LD), and Core Web Vitals optimization to ensure strong search engine rankings from day one."
  },
  {
    question: "How much does a website cost?",
    answer: "Pricing depends on scope and complexity. A single landing page starts around $300–$500, while full business websites range from $800–$2,000+. Contact me for a free, no-obligation quote."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. I offer post-launch support including bug fixes, content updates, performance monitoring, and feature enhancements to keep your website running smoothly."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. I can audit your current site, identify performance and conversion bottlenecks, and redesign it with a modern stack for better speed, SEO, and user experience."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-40 bg-transparent relative z-10" aria-label="Frequently asked questions about web development services">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[26px] font-medium tracking-wide text-white">Frequently Asked Questions</h2>
            <p className="mt-4 text-sm lg:text-[14px] text-slate-400 leading-loose opacity-80 font-light max-w-2xl mx-auto">
              Common questions about my web development process, pricing, and services.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 bg-white/[0.03] hover:bg-white/[0.05]"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="text-sm sm:text-[15px] font-medium text-white tracking-wide pr-6">{faq.question}</span>
                    <ChevronDown 
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true" 
                    />
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
