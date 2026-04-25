"use client";

import { personalInfo } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/sections/about";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail, ArrowUpRight } from "lucide-react";

/**
 * Contact section — clean, minimal with direct links.
 */
export function Contact() {
  return (
    <section id="contact" className="relative z-20 py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-base text-[#6b7280] max-w-lg">
            Open to opportunities in penetration testing, red teaming, and
            security research. Feel free to reach out.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 space-y-3">
            <ContactLink
              href={`mailto:${personalInfo.email}`}
              icon={<Mail size={16} />}
              label={personalInfo.email}
            />
            <ContactLink
              href={personalInfo.github}
              icon={<GithubIcon size={16} />}
              label="github.com/xcyraxx"
            />
            <ContactLink
              href={personalInfo.linkedin}
              icon={<LinkedinIcon size={16} />}
              label="linkedin.com/in/xcyraxx"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-[#2a1515] bg-[#111111] backdrop-blur-sm px-5 py-3.5 transition-all duration-300 hover:border-[#c0392b]/40 hover:bg-[#1a1010] w-fit"
    >
      <span className="text-[#7b1a1a] group-hover:text-[#c0392b] transition-colors">
        {icon}
      </span>
      <span className="text-sm text-[#6b7280] group-hover:text-[#f0f0f0] transition-colors">
        {label}
      </span>
      <ArrowUpRight
        size={12}
        className="text-[#3d3d3d] group-hover:text-[#c0392b] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
