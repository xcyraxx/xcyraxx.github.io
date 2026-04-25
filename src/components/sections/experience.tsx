"use client";

import {
  experience,
  achievements,
  ctfTeam,
  leadership,
} from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/reveal";
import { SectionLabel } from "@/components/sections/about";
import { Trophy, Shield, Users } from "lucide-react";

/**
 * Experience section — work history, CTF achievements, and leadership roles.
 * Updated to red-black palette.
 */
export function Experience() {
  return (
    <section id="experience" className="relative z-20 py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>Experience &amp; Achievements</SectionLabel>
        </Reveal>

        {/* Work experience */}
        <StaggerContainer className="mt-10 space-y-6">
          {experience.map((exp) => (
            <StaggerItem key={exp.title}>
              <div className="rounded-xl border border-[#2a1515] bg-[#111111] p-6 transition-all duration-300 hover:border-[#c0392b]/30 hover:bg-[#1a1010]">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#c0392b]/10 text-[#c0392b]">
                    <Shield size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-sm font-semibold text-[#f0f0f0]">
                        {exp.title}
                      </h3>
                      <span className="text-xs text-[#7b1a1a]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-[#6b7280] mt-0.5">
                      {exp.org} · {exp.location}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-xs text-[#6b7280] leading-relaxed flex gap-2"
                        >
                          <span className="text-[#7b1a1a] shrink-0 select-none">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTF & Competitive */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-xl border border-[#2a1515] bg-[#111111] p-6 transition-all duration-300 hover:border-[#c0392b]/30 hover:bg-[#1a1010]">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c0392b]/10 text-[#c0392b]">
                <Trophy size={16} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#f0f0f0]">
                  CTF &amp; Competitive Security
                </h3>
                <p className="text-xs text-[#6b7280]">
                  {ctfTeam.name} — {ctfTeam.rank} · {ctfTeam.org}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {achievements.map((a) => (
                <span
                  key={a.label}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs transition-colors duration-300 ${
                    a.highlight
                      ? "border border-[#c0392b]/40 bg-[#c0392b]/10 text-[#c0392b]"
                      : "border border-[#2a1515] bg-[#111111] text-[#6b7280]"
                  }`}
                >
                  {a.highlight && <Trophy size={10} className="mr-1.5" />}
                  {a.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Leadership */}
        <StaggerContainer className="mt-8 space-y-4">
          {leadership.map((role) => (
            <StaggerItem key={role.title}>
              <div className="rounded-xl border border-[#2a1515] bg-[#111111] p-6 transition-all duration-300 hover:border-[#c0392b]/30 hover:bg-[#1a1010]">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#c0392b]/10 text-[#c0392b]">
                    <Users size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-sm font-semibold text-[#f0f0f0]">
                        {role.title}
                      </h3>
                      <span className="text-xs text-[#7b1a1a]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        {role.period}
                      </span>
                    </div>
                    <p className="text-xs text-[#6b7280] mt-0.5">{role.org}</p>
                    <ul className="mt-3 space-y-1.5">
                      {role.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-xs text-[#6b7280] leading-relaxed flex gap-2"
                        >
                          <span className="text-[#7b1a1a] shrink-0 select-none">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
