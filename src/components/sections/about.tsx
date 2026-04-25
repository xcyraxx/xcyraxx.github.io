"use client";

import { about } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { GraduationCap, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─── Animated counter hook ─── */

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return { count, ref };
}

/* ─── Stat counter card ─── */

function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-4 py-3">
      <span className="text-2xl font-bold text-[#c0392b] tabular-nums leading-none">
        {count}{suffix}
      </span>
      <span className="text-[11px] text-[#6b7280] text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

/* ─── Bio text with highlighted keywords ─── */

const KEYWORDS = ["IDOR", "authentication bypass", "API flaws", "CTF"];

function HighlightedBio({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  // Iteratively find and highlight keywords
  while (remaining.length > 0) {
    let earliest = -1;
    let matchedKw = "";
    for (const kw of KEYWORDS) {
      const idx = remaining.toLowerCase().indexOf(kw.toLowerCase());
      if (idx !== -1 && (earliest === -1 || idx < earliest)) {
        earliest = idx;
        matchedKw = kw;
      }
    }
    if (earliest === -1) {
      parts.push(<span key={`tail-${keyIdx}`}>{remaining}</span>);
      break;
    }
    if (earliest > 0) {
      parts.push(<span key={`pre-${keyIdx}`}>{remaining.slice(0, earliest)}</span>);
    }
    parts.push(
      <span key={`kw-${keyIdx}`} className="text-[#c0392b] font-medium">
        {remaining.slice(earliest, earliest + matchedKw.length)}
      </span>
    );
    remaining = remaining.slice(earliest + matchedKw.length);
    keyIdx++;
  }

  return <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#6b7280]">{parts}</p>;
}

/**
 * About section — stat counters, highlighted bio, education & expanded certs.
 */
export function About() {
  return (
    <section id="about" className="relative z-20 py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>

        {/* Bio with highlighted keywords */}
        <Reveal delay={0.1}>
          <HighlightedBio text={about.summary} />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.2}>
            <div className="group rounded-xl border border-[#2a1515] bg-[#111111] backdrop-blur-sm p-6 transition-all duration-300 hover:border-[#c0392b]/40 hover:bg-[#1a1010]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c0392b]/10 text-[#c0392b]">
                  <GraduationCap size={16} />
                </div>
                <h3 className="text-sm font-medium text-[#f0f0f0]">Education</h3>
              </div>
              <p className="text-sm text-[#f0f0f0]/80">{about.education.degree}</p>
              <p className="mt-1 text-xs text-[#6b7280]">{about.education.institution}</p>
              <p className="mt-1 text-xs text-[#7b1a1a]">{about.education.period}</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="group rounded-xl border border-[#2a1515] bg-[#111111] backdrop-blur-sm p-6 transition-all duration-300 hover:border-[#c0392b]/40 hover:bg-[#1a1010]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c0392b]/10 text-[#c0392b]">
                  <Award size={16} />
                </div>
                <h3 className="text-sm font-medium text-[#f0f0f0]">Certifications</h3>
              </div>
              {about.certifications.map((cert) => (
                <p key={cert} className="text-sm text-[#f0f0f0]/80">
                  {cert}
                </p>
              ))}
              {/* In-progress certs */}
              <p className="mt-2 text-xs text-[#6b7280] italic">
                In Progress: eJPT · OSCP (target 2026)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Section label — shared across all sections ─── */

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      {/* Left accent dash in red */}
      <div className="h-px w-8 bg-[#c0392b]" />
      <h2 className="text-xs uppercase tracking-[0.25em] text-[#f0f0f0] font-medium whitespace-nowrap">
        {children}
      </h2>
      {/* Right dash in border color */}
      <div className="h-px flex-1 bg-[#2a1515]" />
    </div>
  );
}
