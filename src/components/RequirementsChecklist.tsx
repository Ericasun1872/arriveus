"use client";

import { useEffect, useMemo, useState } from "react";
import { loadChecklist, saveChecklist } from "@/lib/checklist";

export function RequirementsChecklist({
  category,
  slug,
  items,
}: {
  category: string;
  slug: string;
  items: string[];
}) {
  const [checked, setChecked] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChecked(loadChecklist(category, slug));
    setReady(true);
  }, [category, slug]);

  const progress = useMemo(() => {
    if (items.length === 0) return 0;
    return Math.round(
      (items.filter((item) => checked.includes(item)).length / items.length) *
        100,
    );
  }, [checked, items]);

  function toggle(item: string) {
    setChecked((prev) => {
      const next = prev.includes(item)
        ? prev.filter((value) => value !== item)
        : [...prev, item];
      saveChecklist(category, slug, next);
      return next;
    });
  }

  function reset() {
    setChecked([]);
    saveChecklist(category, slug, []);
  }

  if (!ready) {
    return (
      <div className="h-40 animate-pulse rounded-xl bg-[var(--surface-muted)]" />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[var(--muted)]">
          준비되면 체크하세요. 이 기기 브라우저에만 저장됩니다.
        </p>
        <div className="flex items-center gap-3 text-sm">
          <span className="font-medium text-[var(--brand)]">{progress}%</span>
          <button
            type="button"
            onClick={reset}
            className="text-[var(--muted)] underline-offset-2 hover:underline"
          >
            초기화
          </button>
        </div>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
        <div
          className="h-full rounded-full bg-[var(--brand)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ul className="space-y-3">
        {items.map((item) => {
          const isChecked = checked.includes(item);
          return (
            <li key={item}>
              <label
                className={`flex cursor-pointer gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed transition-colors ${
                  isChecked
                    ? "border-[var(--brand-border)] bg-[var(--brand-soft)] text-[var(--ink)]"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--brand-border)]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item)}
                  className="mt-1 h-4 w-4 accent-[var(--brand)]"
                />
                <span className={isChecked ? "line-through opacity-70" : ""}>
                  {item}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
