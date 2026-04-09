"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 pt-3 px-4 sm:px-6">
      <nav 
        className={`mx-auto max-w-5xl transition-all duration-300 rounded-full border ${
          isScrolled 
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 shadow-lg py-1.5" 
            : "bg-transparent border-transparent py-2.5"
        }`}
      >
        <div className="flex items-center justify-between px-5">
          <div className="flex lg:flex-1">
            <Link href="#home" className="-m-1 p-1 flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white flex items-center">
                <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mr-1.5 text-xs">J</span>
                Jeevankart
              </span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-7">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-[13px] font-medium leading-6 text-slate-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#contact" className="text-xs font-semibold leading-6 bg-white text-black px-4 py-1.5 rounded-full hover:bg-slate-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-[#050505] h-screen z-50 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <Link href="#home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-extrabold text-xl tracking-tight text-white">Jeevankart</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-slate-300 hover:text-white hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="-mx-3 mt-4 block rounded-lg px-3 py-2.5 text-2xl font-semibold leading-7 text-white bg-white/10 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
