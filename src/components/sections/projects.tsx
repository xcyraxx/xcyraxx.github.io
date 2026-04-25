"use client";

import { projects } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/reveal";
import { SectionLabel } from "@/components/sections/about";
import { ExternalLink, Crosshair } from "lucide-react";

/* ─── Per-project extra data ─── */

const PROJECT_META: Record<
  string,
  {
    techStack: string[];
    metrics?: { label: string; value: string }[];
    featured?: boolean;
    status: string;
  }
> = {
  VectraForge: {
    featured: true,
    status: "ACTIVE",
    techStack: ["Python", "FastAPI", "Jython", "Burp Suite", "LLM"],
  },
  AirSentinel: {
    status: "ARCHIVED",
    techStack: ["Python", "Isolation Forest", "Raspberry Pi", "802.11"],
    metrics: [
      { label: "Accuracy", value: "98.49%" },
      { label: "AUC", value: "0.996" },
      { label: "Latency", value: "~13.5ms" },
    ],
  },
  "PicoBoard": {
    status: "STANDBY",
    techStack: ["C", "Raspberry Pi Pico", "DuckyScript"],
  },
};

/**
 * Projects section — brutalist target-intel aesthetic.
 */
export function Projects() {
  return (
    <section id="projects" className="relative z-20 py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
        </Reveal>

        <StaggerContainer className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const meta = PROJECT_META[project.title];
            const sysId = `SYS.${String(index + 1).padStart(2, "0")}`;
            
            return (
              <StaggerItem key={project.title}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col relative h-full border border-[#2a1515] bg-[#111111] transition-all duration-300 hover:border-[#c0392b] hover:bg-[#1a1010]"
                >
                  {/* Accent border left */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#2a1515] group-hover:bg-[#c0392b] transition-colors duration-300" />

                  {/* Brutalist Header */}
                  <div className="flex items-center justify-between border-b border-[#2a1515] bg-[#080808] px-4 py-2 ml-[2px]">
                    <div className="flex items-center gap-3">
                      <Crosshair size={12} className="text-[#c0392b]" />
                      <span className="text-[10px] text-[#c0392b] font-mono tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        {sysId}
                      </span>
                      <span className="text-[10px] text-[#6b7280] font-mono tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        STATUS: {meta?.status || "UNKNOWN"}
                      </span>
                    </div>
                    {meta?.featured && (
                      <span className="text-[9px] text-[#080808] bg-[#c0392b] px-2 py-0.5 font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        PRIORITY TARGET
                      </span>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-6 ml-[2px] flex flex-col flex-1">
                    {/* Title and Type */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#f0f0f0] uppercase tracking-wide group-hover:text-[#c0392b] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="text-[10px] text-[#7b1a1a] font-mono mt-1 mb-4 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          // {project.type}
                        </div>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-[#3d3d3d] group-hover:text-[#c0392b] transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <p className="text-sm text-[#6b7280] leading-relaxed border-l-2 border-[#2a1515] pl-4 py-1 mb-6 group-hover:border-[#7b1a1a] transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Metrics row (AirSentinel only) */}
                    {meta?.metrics && (
                      <div className="mb-6 flex flex-wrap gap-3">
                        {meta.metrics.map((m) => (
                          <div key={m.label} className="flex flex-col">
                            <span className="text-[9px] text-[#6b7280] uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                              {m.label}
                            </span>
                            <span className="text-xs text-[#c0392b] font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Impact lines */}
                    <ul className="space-y-2 mb-6">
                      {project.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-xs text-[#6b7280] leading-relaxed flex gap-3"
                        >
                          <span className="text-[#7b1a1a] shrink-0 font-mono" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>[+]</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    {meta?.techStack && (
                      <div className="mt-auto pt-4 border-t border-[#2a1515]">
                        <div className="flex gap-2 items-center">
                          <span className="text-[9px] text-[#7b1a1a] uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                            DEP:
                          </span>
                          <p
                            className="text-[10px] text-[#6b7280] uppercase"
                            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                          >
                            {meta.techStack.join(" / ")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
