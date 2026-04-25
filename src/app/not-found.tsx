"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINES = [
  "> ERROR 404: Target not found.",
  "> Initiating reconnaissance scan...",
  "> Scanning 0.0.0.0/0... no route to host.",
  "> Falling back to base...",
];

const TYPING_SPEED = 45;
const LINE_PAUSE   = 600;

/**
 * Custom 404 — matches site aesthetic with terminal typewriter reveal.
 */
export default function NotFound() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (currentLine >= LINES.length) {
      setTimeout(() => setShowLink(true), 400);
      return;
    }

    const phrase = LINES[currentLine];

    if (currentText.length < phrase.length) {
      const t = setTimeout(() => {
        setCurrentText(phrase.slice(0, currentText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, phrase]);
        setCurrentText("");
        setCurrentLine((l) => l + 1);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentText]);

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6">
      {/* Background tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1010]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl">
        {/* Terminal window */}
        <div className="rounded-xl border border-[#2a1515] bg-[#111111] overflow-hidden">
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#2a1515] bg-[#0d0d0d]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span
              className="ml-3 text-[10px] text-[#6b7280]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              error@xcyraxx:~
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-8 font-mono space-y-2" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            {/* Completed lines */}
            {visibleLines.map((line, i) => (
              <p
                key={i}
                className={`text-sm ${
                  i === 0 ? "text-[#c0392b]" : "text-[#6b7280]"
                }`}
              >
                {line}
              </p>
            ))}

            {/* Actively typing line */}
            {currentLine < LINES.length && (
              <p className={`text-sm ${currentLine === 0 ? "text-[#c0392b]" : "text-[#6b7280]"}`}>
                {currentText}
                <span className="inline-block w-[8px] h-[14px] bg-[#c0392b] ml-0.5 align-middle animate-pulse" />
              </p>
            )}

            {/* Home link */}
            {showLink && (
              <p className="text-sm text-[#6b7280] mt-4">
                {">"}{" "}
                <Link
                  href="/"
                  className="text-[#c0392b] underline decoration-[#7b1a1a] underline-offset-4 hover:text-[#f0f0f0] transition-colors duration-300"
                >
                  Redirecting to base...
                </Link>
              </p>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] text-[#3d3d3d]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
          404 · resource not found
        </p>
      </div>
    </div>
  );
}
