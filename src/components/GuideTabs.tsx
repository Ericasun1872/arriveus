"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import type { Guide } from "@/content/types";
import { EnglishPhrases } from "./EnglishPhrases";
import { ExternalLinkIcon } from "./icons";
import { PracticeQuiz } from "./PracticeQuiz";
import { RequirementsChecklist } from "./RequirementsChecklist";

const baseTabs = [
  { id: "overview", label: "개요" },
  { id: "requirements", label: "준비물" },
  { id: "process", label: "절차" },
  { id: "quiz", label: "연습 문제" },
  { id: "english", label: "영어 표현" },
  { id: "links", label: "링크" },
] as const;

type TabId = (typeof baseTabs)[number]["id"];

export function GuideTabs({ guide }: { guide: Guide }) {
  const [active, setActive] = useState<TabId>("overview");
  const baseId = useId();
  const phrases = guide.english ?? [];
  const quiz = guide.practiceQuestions ?? [];

  const tabs = useMemo(
    () =>
      baseTabs.filter((tab) => {
        if (tab.id === "english") return phrases.length > 0;
        if (tab.id === "quiz") return quiz.length > 0;
        return true;
      }),
    [phrases.length, quiz.length],
  );

  return (
    <div>
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
              id={`${baseId}-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
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

      <div className="pt-6">
        {active === "overview" ? (
          <section
            role="tabpanel"
            id={`${baseId}-panel-overview`}
            aria-labelledby={`${baseId}-overview`}
            className="animate-fade space-y-5"
          >
            <p className="text-base leading-relaxed text-[var(--ink)]">
              {guide.overview}
            </p>
            {(guide.cost || guide.methods?.length) && (
              <dl className="grid gap-3 sm:grid-cols-2">
                {guide.cost ? (
                  <div className="rounded-xl bg-[var(--surface-muted)] px-4 py-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                      예상 비용
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[var(--ink)]">
                      {guide.cost}
                    </dd>
                  </div>
                ) : null}
                {guide.methods?.length ? (
                  <div className="rounded-xl bg-[var(--surface-muted)] px-4 py-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                      갱신·신청 방법
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[var(--ink)]">
                      {guide.methods.join(" · ")}
                    </dd>
                  </div>
                ) : null}
              </dl>
            )}
          </section>
        ) : null}

        {active === "requirements" ? (
          <section
            role="tabpanel"
            id={`${baseId}-panel-requirements`}
            aria-labelledby={`${baseId}-requirements`}
            className="animate-fade"
          >
            {guide.requirements.length > 0 ? (
              <RequirementsChecklist
                category={guide.category}
                slug={guide.slug}
                items={guide.requirements}
              />
            ) : (
              <EmptyState message="준비물 정보가 곧 업데이트됩니다." />
            )}
          </section>
        ) : null}

        {active === "process" ? (
          <section
            role="tabpanel"
            id={`${baseId}-panel-process`}
            aria-labelledby={`${baseId}-process`}
            className="animate-fade"
          >
            {guide.steps.length > 0 ? (
              <ol className="relative space-y-0 border-l border-[var(--brand-border)] pl-6">
                {guide.steps.map((step, index) => (
                  <li key={step} className="relative pb-6 last:pb-0">
                    <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--ink)]">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            ) : (
              <EmptyState message="절차 정보가 곧 업데이트됩니다." />
            )}
          </section>
        ) : null}

        {active === "quiz" ? (
          <section
            role="tabpanel"
            id={`${baseId}-panel-quiz`}
            aria-labelledby={`${baseId}-quiz`}
            className="animate-fade"
          >
            {quiz.length > 0 ? (
              <PracticeQuiz questions={quiz} />
            ) : (
              <EmptyState message="연습 문제가 곧 추가됩니다." />
            )}
          </section>
        ) : null}

        {active === "english" ? (
          <section
            role="tabpanel"
            id={`${baseId}-panel-english`}
            aria-labelledby={`${baseId}-english`}
            className="animate-fade space-y-3"
          >
            <p className="text-sm text-[var(--muted)]">
              현장에서 바로 쓸 수 있는 표현입니다. 듣기 버튼으로 발음을
              확인해 보세요.
            </p>
            {phrases.length > 0 ? (
              <EnglishPhrases phrases={phrases} />
            ) : (
              <EmptyState message="영어 표현이 곧 추가됩니다." />
            )}
          </section>
        ) : null}

        {active === "links" ? (
          <section
            role="tabpanel"
            id={`${baseId}-panel-links`}
            aria-labelledby={`${baseId}-links`}
            className="animate-fade"
          >
            {guide.links.length > 0 ? (
              <ul className="space-y-3">
                {guide.links.map((link) => {
                  const internal = link.url.startsWith("/");
                  const className =
                    "flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--brand)] transition-colors hover:bg-[var(--brand-soft)]";
                  return (
                    <li key={link.url}>
                      {internal ? (
                        <Link href={link.url} className={className}>
                          <span>{link.label}</span>
                          <span className="text-xs text-[var(--muted)]">
                            사이트 내
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
                          <span>{link.label}</span>
                          <span className="inline-flex items-center gap-1 text-xs text-[var(--muted)]">
                            외부 링크
                            <ExternalLinkIcon />
                          </span>
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <EmptyState message="공식 링크가 곧 추가됩니다." />
            )}
          </section>
        ) : null}
      </div>

      {guide.disclaimer ? (
        <p className="mt-8 rounded-xl bg-[var(--surface-muted)] px-4 py-3 text-xs leading-relaxed text-[var(--muted)]">
          {guide.disclaimer}
        </p>
      ) : null}
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <p className="rounded-xl border border-dashed border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--muted)]">
      {message}
    </p>
  );
}
