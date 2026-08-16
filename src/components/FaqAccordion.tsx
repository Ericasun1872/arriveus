"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/content/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-4 py-4 text-left"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="text-sm font-semibold leading-snug text-[var(--ink)] sm:text-base">
                  {item.question}
                </span>
                <span
                  className={`mt-0.5 shrink-0 text-lg leading-none text-[var(--brand)] transition ${
                    open ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            {open ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="pb-4 text-sm leading-relaxed text-[var(--muted)]"
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
