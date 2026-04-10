import Link from "next/link";
import Image from "next/image";

// Social Icons as simple SVGs
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const WhatsappIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#020202] pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-auto relative z-10 border-t border-white/5">
      {/* Subtle top edge glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          
          {/* Brand & Mission Area */}
          <div className="flex flex-col items-start max-w-sm">
            <Link href="#home" className="flex items-center gap-2 mb-4 group outline-none">
              <span className="flex items-center overflow-hidden rounded-full ring-1 ring-white/10 transition-all group-hover:ring-white/30">
                <Image 
                  src="/logo.png" 
                  alt="Jeevankart Logo" 
                  width={34} 
                  height={34} 
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">Jeevankart</span>
            </Link>
            <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed font-light">
              Engineering premium digital experiences. Passionate about highly converting, scalable web architectures.
            </p>
          </div>
          
          {/* Social Connections */}
          <div className="flex flex-col md:items-end">
            <span className="text-white font-medium mb-4 text-xs tracking-wider uppercase opacity-80 hidden md:block">Connect</span>
            <div className="flex gap-5 sm:gap-6">
              <Link href="https://github.com/Zayrix-bit" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <GithubIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link href="https://wa.me/919873828153?text=Hi%20Ritesh" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors duration-300">
                <span className="sr-only">WhatsApp</span>
                <WhatsappIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <p className="text-xs text-slate-600 font-light">
            &copy; {currentYear} Jeevankart. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs text-slate-600 font-light hidden sm:flex">
            <span className="hover:text-slate-400 cursor-pointer transition-colors duration-300">Built with Next.js</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors duration-300">High-Performance Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
