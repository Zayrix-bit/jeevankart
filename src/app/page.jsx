import Hero from "@/components/sections/Hero";
import LanyardSection from "@/components/sections/LanyardSection";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Contact from "@/components/sections/Contact";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LanyardSection />
      <Skills />
      <Projects />
      <Services />
      <WhyChooseMe />
      <Contact />
    </main>
  );
}
