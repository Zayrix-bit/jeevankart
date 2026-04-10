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

export const metadata = {
  title: "Jeevankart | Professional Web Developer",
  description: "High-converting web development portfolio showcasing clean, accessible, and fast websites.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
