"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import FadeUp from "@/components/animations/FadeUp";
import { Globe, Quote, MapPin, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   DATA — International clients
   ═══════════════════════════════════════════════════════════════════ */
const clients = [
  {
    id: 1,
    name: "James Mitchell",
    role: "Founder, BrightPath Consulting",
    country: "United States",
    flag: "🇺🇸",
    project: "Business Consulting Website",
    testimonial:
      "Ritesh delivered a stunning, high-converting website that exceeded everything I expected. Communication was flawless despite the timezone difference. Our lead generation increased by 40% within the first month.",
    rating: 5,
    dotPosition: { x: 22, y: 40 },
  },
  {
    id: 2,
    name: "Sophie Laurent",
    role: "CEO, Elegance Interiors",
    country: "France",
    flag: "🇫🇷",
    project: "Luxury Interior Design Portfolio",
    testimonial:
      "Working with Ritesh was an absolute pleasure. He understood our brand vision immediately and translated it into a premium web experience. The animations and attention to detail are world-class.",
    rating: 5,
    dotPosition: { x: 49, y: 35 },
  },
  {
    id: 3,
    name: "Oliver Thompson",
    role: "Director, Thames Digital Agency",
    country: "United Kingdom",
    flag: "🇬🇧",
    project: "Digital Agency Platform",
    testimonial:
      "We outsource our overflow projects to Ritesh regularly. His code quality is enterprise-grade, delivery is always on time, and the designs consistently wow our end clients. A reliable international partner.",
    rating: 5,
    dotPosition: { x: 47, y: 32 },
  },
  {
    id: 4,
    name: "Amir Al-Rashid",
    role: "Managing Director, Gulf Ventures",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    project: "Investment Firm Landing Page",
    testimonial:
      "Ritesh built our investor-facing platform with incredible precision. The performance scores are perfect, and the design communicates the trust and sophistication our brand requires.",
    rating: 5,
    dotPosition: { x: 58, y: 44 },
  },
  {
    id: 5,
    name: "Liam O\u2019Connor",
    role: "Founder, GreenLeaf Organics",
    country: "Australia",
    flag: "🇦🇺",
    project: "E-commerce Organic Store",
    testimonial:
      "From the other side of the world, Ritesh delivered a pixel-perfect e-commerce experience that our customers love. Fast, beautiful, and conversion-optimized. Could not ask for more.",
    rating: 5,
    dotPosition: { x: 82, y: 72 },
  },
];

const metrics = [
  { value: "5+", label: "Countries" },
  { value: "100%", label: "On-Time" },
  { value: "12+", label: "Projects" },
  { value: "4.8", label: "Avg Rating" },
];

/* ═══════════════════════════════════════════════════════════════════
   WORLD MAP — Hidden on mobile, shown on lg+
   ═══════════════════════════════════════════════════════════════════ */
function WorldMapDots({ activeClient, onDotClick }) {
  return (
    <div className="relative w-full aspect-[2/1] select-none">
      <svg
        viewBox="0 0 100 50"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* North America */}
        {[
          [15, 18], [17, 17], [19, 16], [21, 17], [23, 18], [16, 20], [18, 19], [20, 18], [22, 19], [24, 20],
          [17, 22], [19, 21], [21, 20], [23, 21], [25, 22], [18, 24], [20, 23], [22, 22], [24, 23],
          [19, 26], [21, 25], [23, 24], [20, 28], [22, 27], [24, 26],
        ].map(([x, y], i) => (
          <circle key={`na-${i}`} cx={x} cy={y} r="0.4" fill="rgba(148,163,184,0.15)" />
        ))}
        {/* South America */}
        {[
          [28, 32], [30, 31], [29, 34], [31, 33], [30, 36], [32, 35], [29, 38], [31, 37], [30, 40], [28, 42],
          [29, 44], [27, 40], [31, 39],
        ].map(([x, y], i) => (
          <circle key={`sa-${i}`} cx={x} cy={y} r="0.4" fill="rgba(148,163,184,0.15)" />
        ))}
        {/* Europe */}
        {[
          [46, 16], [48, 15], [50, 16], [52, 17], [47, 18], [49, 17], [51, 18], [53, 19], [46, 20], [48, 19],
          [50, 20], [52, 21], [47, 22], [49, 21], [51, 22],
        ].map(([x, y], i) => (
          <circle key={`eu-${i}`} cx={x} cy={y} r="0.4" fill="rgba(148,163,184,0.15)" />
        ))}
        {/* Africa */}
        {[
          [48, 24], [50, 25], [52, 24], [49, 27], [51, 26], [53, 27], [50, 29], [52, 28], [51, 31], [49, 30],
          [50, 33], [52, 32], [51, 35], [53, 34],
        ].map(([x, y], i) => (
          <circle key={`af-${i}`} cx={x} cy={y} r="0.4" fill="rgba(148,163,184,0.15)" />
        ))}
        {/* Asia */}
        {[
          [55, 15], [57, 14], [59, 15], [61, 16], [63, 15], [65, 16], [67, 17], [56, 18], [58, 17], [60, 18],
          [62, 19], [64, 18], [66, 19], [68, 20], [57, 21], [59, 20], [61, 21], [63, 22], [65, 21], [67, 22],
          [58, 24], [60, 23], [62, 24], [64, 25], [66, 24], [68, 23],
        ].map(([x, y], i) => (
          <circle key={`as-${i}`} cx={x} cy={y} r="0.4" fill="rgba(148,163,184,0.15)" />
        ))}
        {/* Middle East */}
        {[
          [55, 22], [57, 23], [59, 24], [56, 25], [58, 26],
        ].map(([x, y], i) => (
          <circle key={`me-${i}`} cx={x} cy={y} r="0.4" fill="rgba(148,163,184,0.15)" />
        ))}
        {/* Australia */}
        {[
          [76, 34], [78, 33], [80, 34], [82, 35], [77, 36], [79, 35], [81, 36], [83, 37], [78, 38], [80, 37],
          [82, 38], [79, 40], [81, 39],
        ].map(([x, y], i) => (
          <circle key={`au-${i}`} cx={x} cy={y} r="0.4" fill="rgba(148,163,184,0.15)" />
        ))}

        {/* Connection lines from India to client locations */}
        {clients.map((client, i) => (
          <line
            key={`line-${i}`}
            x1="65" y1="28"
            x2={client.dotPosition.x} y2={client.dotPosition.y}
            stroke={activeClient?.id === client.id ? "#c084fc" : "rgba(148,163,184,0.08)"}
            strokeWidth="0.15"
            strokeDasharray="0.8 0.4"
            className="transition-all duration-700"
          />
        ))}

        {/* India — Home base */}
        <circle cx="65" cy="28" r="0.8" fill="#c084fc" opacity="0.6" />
        <circle cx="65" cy="28" r="1.2" fill="none" stroke="#c084fc" strokeWidth="0.15" opacity="0.3">
          <animate attributeName="r" values="1.2;2.5;1.2" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Client location dots — larger hit area for clicks */}
        {clients.map((client, i) => (
          <g
            key={`dot-${i}`}
            className="cursor-pointer"
            onClick={() => onDotClick(client)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
                if (e.key === ' ' || e.code === 'Space') e.preventDefault();
                onDotClick(client);
              }
            }}
            aria-label={`View testimonial from ${client.name}, ${client.country}`}
          >
            {/* Invisible larger hit area */}
            <circle
              cx={client.dotPosition.x} cy={client.dotPosition.y}
              r="3" fill="transparent"
            />
            <circle
              cx={client.dotPosition.x} cy={client.dotPosition.y}
              r={activeClient?.id === client.id ? "0.9" : "0.6"}
              fill={activeClient?.id === client.id ? "#f472b6" : "#38bdf8"}
              className="transition-all duration-500"
              opacity={activeClient?.id === client.id ? 1 : 0.6}
            />
            {activeClient?.id === client.id && (
              <circle
                cx={client.dotPosition.x} cy={client.dotPosition.y}
                r="1.5" fill="none" stroke="#f472b6" strokeWidth="0.15" opacity="0.5"
              >
                <animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* India label */}
      <div
        className="absolute text-[9px] text-purple-400 font-medium tracking-wider uppercase pointer-events-none"
        style={{ left: '66%', top: '60%' }}
      >
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
          HQ — India
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MOBILE TESTIMONIAL CARD — Compact, swipe-optimized
   ═══════════════════════════════════════════════════════════════════ */
function MobileTestimonialCard({ client }) {
  return (
    <div className="flex-shrink-0 w-[85vw] max-w-[320px] snap-center">
      <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] h-full">

        {/* Top row — Client info + Flag */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-xl flex-shrink-0">
            {client.flag}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[13px] font-medium text-white tracking-wide truncate">{client.name}</p>
              {/* Verified inline */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-1 h-1 rounded-full bg-emerald-400" />
                <span className="text-[8px] text-emerald-400 font-medium tracking-wider uppercase">Verified</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5 truncate">{client.role}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-0.5 mb-3" aria-label={`${client.rating} out of 5 stars`}>
          {Array.from({ length: client.rating }).map((_, i) => (
            <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" aria-hidden="true" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-[12px] text-slate-400/90 leading-[1.75] font-light line-clamp-4">
          &ldquo;{client.testimonial}&rdquo;
        </p>

        {/* Bottom tag */}
        <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-slate-600 flex-shrink-0" aria-hidden="true" />
          <span className="text-[9px] text-slate-500 tracking-wider uppercase font-medium truncate">
            {client.country}
          </span>
          <span className="text-slate-700 text-[9px]">•</span>
          <span className="text-[9px] text-slate-600 font-light truncate">
            {client.project}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DESKTOP TESTIMONIAL CARD — Full-featured
   ═══════════════════════════════════════════════════════════════════ */
function DesktopTestimonialCard({ client, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
          if (e.key === ' ' || e.code === 'Space') e.preventDefault();
          onClick?.();
        }
      }}
      className={`relative p-5 rounded-2xl border transition-all duration-500 cursor-pointer ${isActive
        ? "bg-white/[0.04] border-white/[0.12] shadow-lg shadow-purple-500/5"
        : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/[0.08]"
        }`}
    >
      {/* Quote icon */}
      <Quote
        className={`w-4 h-4 mb-3 transition-colors duration-500 ${isActive ? "text-purple-400" : "text-white/10"
          }`}
        strokeWidth={1.5}
        aria-hidden="true"
      />

      {/* Testimonial text */}
      <p className="text-[13px] text-slate-400/90 leading-[1.85] font-light mb-4">
        &ldquo;{client.testimonial}&rdquo;
      </p>

      {/* Client info row */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-xl flex-shrink-0">
          {client.flag}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-white tracking-wide">{client.name}</p>
          <p className="text-xs text-slate-500 mt-0.5">{client.role}</p>
        </div>
      </div>

      {/* Bottom row — Stars + Country + Verified */}
      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Stars */}
          <div className="flex gap-0.5" aria-label={`${client.rating} out of 5 stars`}>
            {Array.from({ length: client.rating }).map((_, i) => (
              <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" aria-hidden="true" />
            ))}
          </div>
          {/* Country */}
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-slate-600" aria-hidden="true" />
            <span className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">
              {client.country}
            </span>
          </div>
        </div>

        {/* Verified badge */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/15">
          <div className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="text-[8px] text-emerald-400 font-medium tracking-wider uppercase">Verified</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MOBILE CAROUSEL with touch swipe
   ═══════════════════════════════════════════════════════════════════ */
function MobileCarousel({ activeIdx, onSelect }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Scroll to active card when activeIdx changes from auto-rotate
  useEffect(() => {
    if (!scrollRef.current || isDragging) return;
    const container = scrollRef.current;
    const cards = container.children;
    if (cards[activeIdx]) {
      const card = cards[activeIdx];
      const scrollLeft = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeIdx, isDragging]);

  // Detect which card is centered after scroll ends
  const handleScrollEnd = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIdx = 0;
    let closestDist = Infinity;
    Array.from(container.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(containerCenter - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    });
    if (closestIdx !== activeIdx) {
      onSelect(clients[closestIdx]);
    }
    setIsDragging(false);
  }, [activeIdx, onSelect]);

  // Debounced scroll end detection
  const scrollTimerRef = useRef(null);
  const handleScroll = useCallback(() => {
    setIsDragging(true);
    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(handleScrollEnd, 150);
  }, [handleScrollEnd]);

  // Cleanup scroll timer on unmount
  useEffect(() => {
    return () => {
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    };
  }, []);

  return (
    <div className="relative -mx-4">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2 scrollbar-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {clients.map((client) => (
          <MobileTestimonialCard key={client.id} client={client} />
        ))}
        {/* End spacer for last card centering */}
        <div className="flex-shrink-0 w-[15vw]" aria-hidden="true" />
      </div>

      {/* Navigation dots */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {clients.map((client, i) => (
          <button
            key={client.id}
            onClick={() => onSelect(client)}
            className={`rounded-full transition-all duration-500 ${activeIdx === i
              ? "w-5 h-1.5 bg-purple-400"
              : "w-1.5 h-1.5 bg-white/15 active:bg-white/40"
              }`}
            aria-label={`View review from ${client.name}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════════════ */
export default function GlobalClients() {
  const [activeClient, setActiveClient] = useState(clients[0]);
  const [autoRotate, setAutoRotate] = useState(true);
  const intervalRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const activeIdx = clients.findIndex((c) => c.id === activeClient.id);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoRotate) return;
    intervalRef.current = setInterval(() => {
      setActiveClient((prev) => {
        const idx = clients.findIndex((c) => c.id === prev.id);
        return clients[(idx + 1) % clients.length];
      });
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [autoRotate]);

  const handleClientSelect = useCallback((client) => {
    setAutoRotate(false);
    setActiveClient(client);
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setAutoRotate(true), 12000);
  }, []);

  // Cleanup resumeTimer on unmount
  useEffect(() => {
    return () => {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    };
  }, []);

  return (
    <section
      id="global-clients"
      className="pt-32 sm:pt-40 lg:pt-56 pb-16 sm:pb-20 lg:pb-24 bg-transparent relative overflow-hidden"
      aria-label="International clients and global reach"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[140px] sm:blur-[180px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #c084fc, #f472b6, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Section Header ─── */}
        <FadeUp delay={0.1}>
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" strokeWidth={1.5} />
              </div>
              <span className="text-[9px] sm:text-xs text-purple-400/80 font-medium tracking-[0.25em] uppercase">
                Trusted Worldwide
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-[20px] font-medium tracking-widest text-white uppercase opacity-90">
              Global Client Network
            </h2>
            <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm lg:text-[14px] text-slate-400 leading-relaxed sm:leading-loose opacity-80 font-light max-w-xl">
              I work with businesses and agencies across the globe — delivering the same quality, communication, and results regardless of timezone or geography.
            </p>
          </div>
        </FadeUp>

        {/* ─── Metrics Bar — Compact on mobile ─── */}
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-10">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="text-center py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <span className="block text-lg sm:text-2xl lg:text-[24px] font-semibold text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="block text-[8px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 uppercase tracking-[0.12em] sm:tracking-[0.15em] font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ═══ MOBILE LAYOUT (< lg) ═══ */}
        <div className="lg:hidden">
          {/* World Map on mobile */}
          <FadeUp delay={0.18}>
            <div className="relative mb-6">
              <WorldMapDots
                activeClient={activeClient}
                onDotClick={handleClientSelect}
              />
              {/* Active client badge */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="text-base">{activeClient.flag}</span>
                <span className="text-xs text-white/70 font-light tracking-wide">
                  {activeClient.name}
                </span>
                <span className="text-slate-600 text-[10px]">—</span>
                <span className="text-[11px] text-slate-500 font-light">
                  {activeClient.country}
                </span>
              </div>
              {/* Dot navigation */}
              <div className="flex items-center justify-center gap-1.5 mt-2.5">
                {clients.map((client) => (
                  <button
                    key={client.id}
                    onClick={() => handleClientSelect(client)}
                    className={`rounded-full transition-all duration-500 ${activeClient.id === client.id
                      ? "w-5 h-1.5 bg-purple-400"
                      : "w-1.5 h-1.5 bg-white/15 active:bg-white/40"
                      }`}
                    aria-label={`View testimonial from ${client.name}`}
                  />
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Swipeable testimonial carousel */}
          <FadeUp delay={0.22}>
            <MobileCarousel
              activeIdx={activeIdx}
              onSelect={handleClientSelect}
            />
          </FadeUp>
        </div>

        {/* ═══ DESKTOP LAYOUT (lg+) ═══ */}
        <div className="hidden lg:block">
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-8 items-start">

              {/* Left: World Map */}
              <div className="relative">
                <WorldMapDots
                  activeClient={activeClient}
                  onDotClick={handleClientSelect}
                />
                {/* Active client badge */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-lg">{activeClient.flag}</span>
                  <span className="text-sm text-white/70 font-light tracking-wide">
                    {activeClient.name}
                  </span>
                  <span className="text-slate-600 text-xs">—</span>
                  <span className="text-xs text-slate-500 font-light">
                    {activeClient.country}
                  </span>
                </div>
                {/* Dot navigation */}
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {clients.map((client) => (
                    <button
                      key={client.id}
                      onClick={() => handleClientSelect(client)}
                      className={`rounded-full transition-all duration-500 ${activeClient.id === client.id
                        ? "w-6 h-1.5 bg-purple-400"
                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                      aria-label={`View testimonial from ${client.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Featured Testimonial */}
              <DesktopTestimonialCard
                client={activeClient}
                isActive={true}
                onClick={() => { }}
              />
            </div>
          </FadeUp>


        </div>

        {/* ─── CTA ─── */}
        <FadeUp delay={0.3}>
          <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
            <p className="text-[13px] sm:text-[15px] text-slate-400 font-light mb-4 sm:mb-5 leading-relaxed">
              Ready to join businesses from <span className="text-white/80 font-medium">5+ countries</span> who trust me with their digital presence?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-sm font-medium tracking-wide text-white/90 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] hover:border-white/20 transition-all duration-300 group"
              aria-label="Start your project — contact Ritesh"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
