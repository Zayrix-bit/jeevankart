import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import {
  PerspectiveFold,
  IrisReveal,
  ElasticSnap,
  ScalePortal,
} from "@/components/animations/DimensionalScroll";

export default function Home() {
  return (
    <main>
      {/* Hero — no wrapper, always visible on load */}
      <Hero />

      {/* About — 3D panel folds open toward the viewer */}
      <PerspectiveFold>
        <About />
      </PerspectiveFold>

      {/* Skills — camera iris opens from center */}
      <IrisReveal>
        <Skills />
      </IrisReveal>

      {/* Projects — zooms in from tiny portal with blur clearing */}
      <ScalePortal>
        <Projects />
      </ScalePortal>

      {/* Services — stretches elastically then snaps into place */}
      <ElasticSnap>
        <Services />
      </ElasticSnap>

      {/* Why Choose Me */}
      <ScalePortal>
        <WhyChooseMe />
      </ScalePortal>

      {/* FAQ — for SEO featured snippets */}
      <PerspectiveFold>
        <FAQ />
      </PerspectiveFold>

      {/* Contact */}
      <ScalePortal>
        <Contact />
      </ScalePortal>
    </main>
  );
}
