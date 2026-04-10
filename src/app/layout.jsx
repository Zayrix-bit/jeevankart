import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Galaxy from "@/components/Galaxy";
import SmoothScroll from "@/components/SmoothScroll";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta'
});

const siteUrl = "https://jeevankart.in";

export const metadata = {
  title: "Hire a Web Developer — High-Converting Sites | Jeevankart",
  description: "Freelance web developer specializing in fast, SEO-optimized, high-converting websites for businesses. Next.js, React & Tailwind CSS expert. Get a free quote.",
  keywords: ["web developer", "freelance web developer", "hire web developer", "high-converting websites", "Next.js developer", "React developer", "SEO-optimized websites"],
  authors: [{ name: "Ritesh", url: siteUrl }],
  creator: "Ritesh — Jeevankart",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Hire a Web Developer — High-Converting Sites | Jeevankart",
    description: "Freelance web developer building fast, SEO-optimized websites that convert visitors into customers. Next.js, React & Tailwind CSS.",
    url: siteUrl,
    siteName: "Jeevankart",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Web Developer — High-Converting Sites | Jeevankart",
    description: "Freelance web developer building fast, SEO-optimized websites that convert visitors into customers.",
    creator: "@jeevankart",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={`${plusJakarta.variable} font-sans bg-[#050505] text-white selection:bg-white selection:text-black overflow-x-hidden antialiased`}>
        {/* Persistent Global Animated Galaxy Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </div>

        <SmoothScroll>
          <div className="relative z-10 font-sans">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SmoothScroll>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Jeevankart",
                  "url": siteUrl,
                  "description": "Freelance web developer specializing in fast, SEO-optimized, high-converting websites.",
                },
                {
                  "@type": "Person",
                  "name": "Ritesh",
                  "url": siteUrl,
                  "jobTitle": "Full Stack Web Developer",
                  "sameAs": [
                    "https://github.com/Zayrix-bit",
                  ],
                  "knowsAbout": ["Web Development", "React", "Next.js", "SEO", "UI/UX Design", "JavaScript", "Node.js"],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Jeevankart",
                    "url": siteUrl,
                  },
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What tech stack do you use?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I primarily work with Next.js, React, TypeScript, Tailwind CSS, and Node.js to build fast, scalable, and SEO-friendly websites."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does it take to build a website?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most projects are delivered within 1–3 weeks depending on complexity. Landing pages can be done in under a week."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer SEO optimization?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Every website I build is architected with semantic HTML, meta tags, structured data, and Core Web Vitals optimization for strong search engine rankings."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does a website cost?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pricing depends on the scope. A single landing page starts around $300–$500, while full business websites range from $800–$2,000+. Contact me for a free quote."
                      }
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
