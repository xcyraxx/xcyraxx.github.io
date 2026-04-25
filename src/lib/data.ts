/**
 * Portfolio data extracted from resume.
 * Structured for consumption by section components.
 */

export const personalInfo = {
  name: "Adil Jaffer Mohamed",
  role: "Cybersecurity Engineer",
  tagline:
    "Breaking systems to make them stronger. Specializing in web exploitation, android security, and offensive security research.",
  email: "adil05jafar@gmail.com",
  phone: "+91 73068 30924",
  github: "https://github.com/xcyraxx",
  linkedin: "https://linkedin.com/in/xcyraxx",
};

export const about = {
  summary:
    "Cybersecurity engineer with hands-on experience in web and mobile application penetration testing, including government and enterprise systems. Identifies high-impact vulnerabilities such as IDOR, authentication bypass, and API flaws using Burp Suite, Frida, and MobSF, with consistent high rankings in CTF competitions.",
  education: {
    degree: "B.Tech in Computer Science & Engineering (Cyber Security)",
    institution: "Rajadhani Institute of Engineering and Technology, Attingal",
    period: "2023 – 2027",
  },
  certifications: ["Google Cybersecurity Professional Certificate (2025)"],
};

export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Web Security",
    items: [
      "IDOR",
      "Auth Bypass",
      "SQLi",
      "Logic Flaws",
      "API Exploitation",
      "OWASP Top 10",
    ],
  },
  {
    category: "Mobile Security",
    items: ["Frida (Dynamic Analysis)", "MobSF", "Jadx (Static Analysis)", "Android Pentesting"],
  },
  {
    category: "Pentesting Tools",
    items: [
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "Sqlmap",
      "Ffuf",
      "Gobuster",
      "Hydra",
      "Hashcat",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "C", "Java", "C#"],
  },
  {
    category: "Core Concepts",
    items: [
      "Networking",
      "Operating Systems",
      "Cryptography",
      "Digital Forensics",
      "Reverse Engineering",
    ],
  },
];

export interface Project {
  title: string;
  type: string;
  description: string;
  details: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "VectraForge",
    type: "Security Tooling",
    description:
      "A production-grade local AI server that integrates with Burp Suite and uses Ollama + DeepSeek-R1 8B to perform deep vulnerability analysis on captured HTTP requests — fully offline, no cloud services.",
    details: [
      "Primary Language: Python",
      "Repository Size: 81 KB",
      "Visibility: Public",
    ],
    github: "https://github.com/xcyraxx/VectraForge",
  },
  {
    title: "AirSentinel",
    type: "Research",
    description:
      "Portable zero-trust Wi-Fi security sensor for detecting Evil Twin attacks through access point behavioral analysis. Under development.",
    details: [
      "Primary Language: HTML / Python",
      "Repository Size: 8.8 MB",
      "Visibility: Public",
    ],
    github: "https://github.com/xcyraxx/AirSentinel",
  },
  {
    title: "PicoBoard",
    type: "Hardware / Red Team",
    description:
      "Raspberry Pi Pico-based USB HID attack device with payload switching capabilities and an OLED Display.",
    details: [
      "Primary Language: C",
      "Platform: Raspberry Pi Pico",
      "Visibility: Public",
    ],
    github: "https://github.com/xcyraxx/PicoBoard",
  },
];

export interface Experience {
  title: string;
  org: string;
  period: string;
  location: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    title: "Cyber Security Engineer Intern",
    org: "BufferSec",
    period: "Feb 2026 – Apr 2026",
    location: "Remote",
    points: [
      "Conducted penetration testing on 6 applications (5 web, 1 Android) utilizing Burp Suite, MobSF, and Frida.",
      "Executed comprehensive security assessments across 2 government and 3 enterprise systems.",
      "Authored detailed vulnerability reports leveraging CVSS scoring and OWASP frameworks.",
      "Validated patch implementations during re-testing phases, reducing the exploitable attack surface.",
    ],
  },
];

export interface Achievement {
  label: string;
  highlight?: boolean;
}

export const achievements: Achievement[] = [
  { label: "Top 2% on TryHackMe (Global)", highlight: true },
  { label: "2nd — OWASP National CTF", highlight: true },
  { label: "3rd — CRACCON CTF", highlight: true },
  { label: "Top 15 — 0bscuri7y CTF (Global)" },
  { label: "15+ Intercollege CTF Top Finishes" },
  { label: "UST GenCys Finalist" },
];

export const ctfTeam = {
  name: "b33troot",
  rank: "Top 30 in India",
  role: "CTF Crew Member",
  org: "ROOT RIET",
  period: "Dec 2024 – Present",
  focus: "Web exploitation and reverse engineering",
};

export interface Leadership {
  title: string;
  org: string;
  period: string;
  points: string[];
}

export const leadership: Leadership[] = [
  {
    title: "Campus Lead",
    org: "ROOT RIET",
    period: "Mar 2026 – Present",
    points: [
      "Built and led a cybersecurity community impacting 600+ students.",
      "Executed 10+ technical workshops on web exploitation, CTF strategy, and practical security.",
      "Led team performance in 50+ CTF competitions, achieving 20+ wins.",
    ],
  },
  {
    title: "Documentation Lead",
    org: "FOSS RIET",
    period: "Jan 2025 – Present",
    points: [
      "Led creation and maintenance of technical documentation, project wikis, and user guides.",
      "Coordinated with developers, designers, and contributors for accuracy and timely updates.",
    ],
  },
];

/** Navigation items */
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

