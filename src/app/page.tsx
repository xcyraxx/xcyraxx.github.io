"use client";

import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

/**
 * Main page — single-page portfolio.
 *
 * Architecture:
 * - The smoke animation canvas is fixed to the viewport as a background layer.
 * - All content scrolls over it with z-index layering.
 * - A subtle overlay gradient on the content area ensures readability
 *   without killing the atmospheric feel of the smoke.
 *
 * Performance:
 * - The smoke runs at native refresh rate via requestAnimationFrame.
 * - Using a muted steel-blue color (#5A6A7A) to keep the smoke dark and non-distracting.
 * - Content sections use backdrop-blur sparingly to avoid GPU overhead.
 */
export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <SmokeBackground smokeColor="#ff0000ff" />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          {/* Content backdrop — subtle darkening for readability on non-hero sections */}
          <div className="bg-background/70 backdrop-blur-[2px]">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
