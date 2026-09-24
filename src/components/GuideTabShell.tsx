"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export type GuideTabItem = {
  id: string;
  label: string;
};

export function GuideTabShell({
  tabs,
  children,
}: {
  tabs: GuideTabItem[];
  children: ReactNode;
}) {
  const [active, setActive] = useState(tabs[0]?.id ?? "overview");
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement>("[data-guide-tab]").forEach((panel) => {
      panel.hidden = panel.dataset.guideTab !== active;
    });
  }, [active]);

  return (
    <div ref={rootRef} data-guide-tabs="" data-active-tab={active}>
      <div
        role="tablist"
        aria-label="가이드 섹션"
        className="sticky top-[57px] z-20 -mx-4 flex gap-1 overflow-x-auto border-b border-[var(--border)] bg-[var(--surface)] px-4 sm:-mx-0 sm:px-0"
      >
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`guide-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`guide-panel-${tab.id}`}
              className={`relative shrink-0 px-4 py-3 text-sm transition-colors ${
                selected
                  ? "font-semibold text-[var(--brand)]"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
              {selected ? (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[var(--brand)]" />
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="pt-6">{children}</div>
    </div>
  );
}
