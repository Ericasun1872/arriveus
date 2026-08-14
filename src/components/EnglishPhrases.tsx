"use client";

import { useState } from "react";
import type { EnglishPhrase } from "@/content/types";

export function EnglishPhrases({ phrases }: { phrases: EnglishPhrase[] }) {
  const [speaking, setSpeaking] = useState<string | null>(null);

  function speak(text: string) {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    utterance.onstart = () => setSpeaking(text);
    utterance.onend = () => setSpeaking(null);
    utterance.onerror = () => setSpeaking(null);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <ul className="space-y-3">
      {phrases.map((phrase) => (
        <li
          key={phrase.en}
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-[var(--muted)]">{phrase.ko}</p>
              <p className="mt-1 text-base font-medium text-[var(--ink)]">
                {phrase.en}
              </p>
              {phrase.note ? (
                <p className="mt-2 text-xs text-[var(--muted)]">{phrase.note}</p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => speak(phrase.en)}
              className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                speaking === phrase.en
                  ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                  : "border-[var(--border)] text-[var(--brand)] hover:bg-[var(--brand-soft)]"
              }`}
              aria-label={`${phrase.en} 발음 듣기`}
            >
              {speaking === phrase.en ? "재생 중" : "듣기"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
