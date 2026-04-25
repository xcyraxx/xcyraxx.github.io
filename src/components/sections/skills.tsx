"use client";

import { skills } from "@/lib/data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/reveal";
import { SectionLabel } from "@/components/sections/about";
import { Cpu } from "lucide-react";

/* ─── Tiers ─── */

const STRONG_SKILLS = new Set([
  "Burp Suite",
  "Python",
  "IDOR",
  "SQLi",
  "Frida (Dynamic Analysis)",
  "Nmap",
  "Metasploit",
  "Reverse Engineering",
  "Cryptography",
]);

const LEARNING_SKILLS = ["Malware Analysis", "Kernel Exploitation", "Active Directory"];

/**
 * Skills section — brutalist Capability Matrix aesthetic.
 */
export function Skills() {
  return (
    <section id="skills" className="relative z-20 py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>Capabilities Array</SectionLabel>
        </Reveal>

        <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((group, groupIdx) => (
            <StaggerItem key={group.category}>
              <div className="group relative border border-[#2a1515] bg-[#080808] p-5 transition-colors duration-300 hover:border-[#c0392b] h-full flex flex-col">
                {/* Top left corner accent */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#c0392b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4 border-b border-[#2a1515] pb-2">
                  <span className="text-[10px] text-[#c0392b] font-mono tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    CLASS // {String(groupIdx + 1).padStart(2, "0")}
                  </span>
                  <Cpu size={12} className="text-[#3d3d3d] group-hover:text-[#c0392b] transition-colors duration-300" />
                </div>
                
                <h3 className="text-xs font-bold text-[#f0f0f0] uppercase tracking-wide mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  {group.category.toUpperCase()}
                </h3>

                {/* Skills List */}
                <ul className="grid grid-cols-1 gap-y-2">
                  {group.items.map((item) => {
                    const isStrong = STRONG_SKILLS.has(item);
                    return (
                      <li key={item} className="flex items-start gap-2">
                        <span 
                          className={`text-[10px] mt-0.5 ${isStrong ? "text-[#c0392b]" : "text-[#3d3d3d]"}`} 
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          {isStrong ? "[x]" : "[-]"}
                        </span>
                        <span 
                          className={`text-xs ${isStrong ? "text-[#f0f0f0]" : "text-[#6b7280]"}`}
                        >
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StaggerItem>
          ))}

          {/* Currently Learning row */}
          <StaggerItem>
            <div className="group relative border border-[#2a1515] bg-[#111111] p-5 transition-colors duration-300 hover:border-[#c0392b] h-full flex flex-col">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#c0392b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center justify-between mb-4 border-b border-[#2a1515] pb-2">
                <span className="text-[10px] text-[#7b1a1a] font-mono tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  CLASS // {String(skills.length + 1).padStart(2, "0")}
                </span>
                <Cpu size={12} className="text-[#3d3d3d] group-hover:text-[#c0392b] transition-colors duration-300" />
              </div>
              
              <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-wide mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                ACTIVE RESEARCH
              </h3>

              <ul className="grid grid-cols-1 gap-y-2">
                {LEARNING_SKILLS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span 
                      className="text-[10px] mt-0.5 text-[#eab308]" 
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      [!]
                    </span>
                    <span className="text-xs text-[#f0f0f0] italic">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
