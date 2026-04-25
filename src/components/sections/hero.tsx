"use client";

import { personalInfo } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─── Typewriter hook ─── */

const PHRASES = [
  "> scanning for vulnerabilities...",
  "> reverse engineering payload...",
  "> exploit confirmed. patching...",
  "> system hardened. standing by.",
];

const TYPING_SPEED = 60;   // ms per char
const ERASE_SPEED  = 30;   // ms per char
const PAUSE_MS     = 1800; // pause at full phrase

function useTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];

    if (!isErasing) {
      if (displayed.length < phrase.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(phrase.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setIsErasing(true), PAUSE_MS);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, ERASE_SPEED);
      } else {
        setIsErasing(false);
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isErasing, phraseIdx]);

  return displayed;
}

/**
 * Hero section — full viewport height.
 * Features: typewriter subtitle, availability badge, terminal-style social pills.
 */
export function Hero() {
  const typewriterText = useTypewriter();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808] pointer-events-none z-10" />

      <div className="relative z-20 mx-auto max-w-3xl text-center">

        {/* Availability badge — top of text block */}
        <Reveal delay={0.05}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="status-dot" />
            <span
              className="text-[11px] text-[#6b7280] tracking-wider"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Available for opportunities
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c0392b] font-medium">
            {personalInfo.role}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#f0f0f0] leading-[1.1]">
            {personalInfo.name}
          </h1>
        </Reveal>

        {/* Typewriter subtitle */}
        <Reveal delay={0.35}>
          <div
            className="mt-6 h-7 flex items-center justify-center"
            aria-label="Typewriter effect"
            aria-live="polite"
          >
            <span
              className="text-sm text-[#6b7280]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {typewriterText}
            </span>
            <span className="typewriter-cursor" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Static tagline below typewriter */}
        <Reveal delay={0.4}>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#6b7280] leading-relaxed">
            {personalInfo.tagline}
          </p>
        </Reveal>

        {/* Terminal-style social pill buttons */}
        <Reveal delay={0.5}>
          <div className="mt-10 flex items-center justify-center flex-wrap gap-3">
            <TerminalPill
              href={personalInfo.github}
              label="github"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={13} />
            </TerminalPill>
            <TerminalPill
              href={personalInfo.linkedin}
              label="linkedin"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={13} />
            </TerminalPill>
            <TerminalPill
              href={`mailto:${personalInfo.email}`}
              label="./contact.sh"
              aria-label="Email"
            >
              {/* $ icon */}
              <span
                className="text-[#c0392b] text-xs leading-none"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                $
              </span>
            </TerminalPill>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <Reveal delay={0.7}>
          <motion.a
            href="#about"
            className="mt-16 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#6b7280] hover:text-[#f0f0f0] transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
            Scroll
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Terminal pill button ─── */

function TerminalPill({
  href,
  label,
  children,
  "aria-label": ariaLabel,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group flex items-center gap-2 rounded-full border border-[#7b1a1a] bg-transparent px-4 py-2 text-[#6b7280] transition-all duration-300 hover:border-[#c0392b] hover:bg-[rgba(192,57,43,0.15)] hover:text-[#f0f0f0]"
    >
      <span className="text-[#c0392b] opacity-70 group-hover:opacity-100 transition-opacity text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
        $
      </span>
      <span className="mr-1 text-[#6b7280] group-hover:text-[#c0392b] transition-colors">
        {children}
      </span>
      <span
        className="text-xs tracking-wide"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {label}
      </span>
    </a>
  );
}
