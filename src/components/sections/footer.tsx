"use client";

import { Reveal } from "@/components/reveal";

/**
 * Minimal footer with copyright.
 */
export function Footer() {
  return (
    <footer className="relative z-20 border-t border-[#2a1515] py-8 px-6">
      <Reveal>
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <p className="text-xs text-[#3d3d3d]">
            © {new Date().getFullYear()} Adil Jaffer Mohamed
          </p>
          <p className="text-xs text-[#3d3d3d]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            built with precision.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
