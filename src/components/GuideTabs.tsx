import Link from "next/link";
import type { ReactNode } from "react";
import type { Guide } from "@/content/types";
import { EnglishPhrases } from "./EnglishPhrases";
import { FaqAccordion } from "./FaqAccordion";
import { GuideTabShell, type GuideTabItem } from "./GuideTabShell";
import { ExternalLinkIcon } from "./icons";
import { PracticeQuiz } from "./PracticeQuiz";
import { RequirementsChecklist } from "./RequirementsChecklist";

const baseTabs = [
  { id: "overview", label: "개요" },
  { id: "requirements", label: "준비물" },
  { id: "process", label: "절차" },
  { id: "faq", label: "FAQ" },
  { id: "quiz", label: "연습 문제" },
  { id: "english", label: "영어 표현" },
  { id: "links", label: "링크" },
] as const;

type TabId = (typeof baseTabs)[number]["id"];

function stripBullet(line: string) {
  return line.replace(/^[•\-·]\s*/, "").trim();
}

function isBulletLine(line: string) {
  return /^[•\-·]\s+/.test(line.trim());
}

/** 긴 한 덩어리 문장을 읽기 쉬운 문단으로 나눕니다. */
function splitLongParagraph(text: string): string[] {
  if (text.length < 260) return [text];
  const sentences = text.split(/(?<=[.?!。])\s+/).filter(Boolean);
  if (sentences.length <= 1) return [text];

  const grouped: string[] = [];
  let buffer = "";
  for (const sentence of sentences) {
    const next = buffer ? `${buffer} ${sentence}` : sentence;
    if (buffer && next.length > 200) {
      grouped.push(buffer);
      buffer = sentence;
    } else {
      buffer = next;
    }
  }
  if (buffer) grouped.push(buffer);
  return grouped.length > 1 ? grouped : [text];
}

function OverviewText({ text }: { text: string }) {
  const blocks = text
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .flatMap((block) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      if (lines.some(isBulletLine)) return [block];
      return splitLongParagraph(lines.join(" "));
    });

  const nodes: ReactNode[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return;
    const items = bulletBuffer;
    bulletBuffer = [];
    nodes.push(
      <ul
        key={`bullets-${nodes.length}`}
        className="list-disc space-y-2.5 pl-5 marker:text-[var(--brand)]"
      >
        {items.map((item) => (
          <li key={item} className="pl-1 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>,
    );
  };

  for (const block of blocks) {
    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length > 0 && lines.every(isBulletLine)) {
      bulletBuffer.push(...lines.map(stripBullet));
      continue;
    }

    if (lines.length === 1 && isBulletLine(lines[0])) {
      bulletBuffer.push(stripBullet(lines[0]));
      continue;
    }

    flushBullets();

    if (lines.some(isBulletLine)) {
      nodes.push(
        <div key={`mixed-${nodes.length}`} className="space-y-3">
          {lines.map((line) =>
            isBulletLine(line) ? (
              <p key={line} className="flex gap-2 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>{stripBullet(line)}</span>
              </p>
            ) : (
              <p key={line} className="leading-relaxed">
                {line}
              </p>
            ),
          )}
        </div>,
      );
      continue;
    }

    nodes.push(
      <p key={`p-${nodes.length}`} className="leading-relaxed">
        {lines.join(" ")}
      </p>,
    );
  }

  flushBullets();

  return (
    <div className="space-y-4 text-base text-[var(--ink)]">{nodes}</div>
  );
}

function GuideSection({
  id,
  heading,
  active,
  className,
  children,
}: {
  id: TabId;
  heading: string;
  active: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      role="tabpanel"
      id={`guide-panel-${id}`}
      data-guide-tab={id}
      aria-labelledby={`guide-tab-${id}`}
      hidden={!active}
      className={className}
    >
      <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)]">
        {heading}
      </h2>
      {children}
    </section>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <p className="rounded-xl border border-dashed border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--muted)]">
      {message}
    </p>
  );
}

export function GuideTabs({ guide }: { guide: Guide }) {
  const phrases = guide.english ?? [];
  const quiz = guide.practiceQuestions ?? [];
  const faq = guide.faq ?? [];

  const tabs: GuideTabItem[] = baseTabs.filter((tab) => {
    if (tab.id === "english") return phrases.length > 0;
    if (tab.id === "quiz") return quiz.length > 0;
    if (tab.id === "faq") return faq.length > 0;
    return true;
  });

  return (
    <div>
      <GuideTabShell tabs={tabs}>
        <GuideSection id="overview" heading="개요" active className="space-y-5">
          <OverviewText text={guide.overview} />
          {(guide.cost || guide.methods?.length) && (
            <dl className="grid gap-3 sm:grid-cols-2">
              {guide.cost ? (
                <div className="rounded-xl bg-[var(--surface-muted)] px-4 py-3">
                  <dt>
                    <h3 className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                      예상 비용
                    </h3>
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-[var(--ink)]">
                    {guide.cost}
                  </dd>
                </div>
              ) : null}
              {guide.methods?.length ? (
                <div className="rounded-xl bg-[var(--surface-muted)] px-4 py-3">
                  <dt>
                    <h3 className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                      갱신·신청 방법
                    </h3>
                  </dt>
                  <dd className="mt-2">
                    <ul className="space-y-1.5 text-sm font-medium text-[var(--ink)]">
                      {guide.methods.map((method) => (
                        <li key={method} className="flex gap-2">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand)]"
                            aria-hidden
                          />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ) : null}
            </dl>
          )}
        </GuideSection>

        <GuideSection id="requirements" heading="준비물" active={false}>
          {guide.requirements.length > 0 ? (
            <RequirementsChecklist
              category={guide.category}
              slug={guide.slug}
              items={guide.requirements}
            />
          ) : (
            <EmptyState message="준비물 정보가 곧 업데이트됩니다." />
          )}
        </GuideSection>

        <GuideSection id="process" heading="절차" active={false}>
          {guide.steps.length > 0 ? (
            <ol className="relative space-y-0 border-l border-[var(--brand-border)] pl-6">
              {guide.steps.map((step, index) => (
                <li key={step} className="relative pb-6 last:pb-0">
                  <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-semibold leading-relaxed text-[var(--ink)]">
                    {index + 1}단계
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink)]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <EmptyState message="절차 정보가 곧 업데이트됩니다." />
          )}
        </GuideSection>

        {faq.length > 0 ? (
          <GuideSection id="faq" heading="자주 묻는 질문" active={false}>
            <FaqAccordion items={faq} />
          </GuideSection>
        ) : null}

        {quiz.length > 0 ? (
          <GuideSection id="quiz" heading="연습 문제" active={false}>
            <PracticeQuiz questions={quiz} />
          </GuideSection>
        ) : null}

        {phrases.length > 0 ? (
          <GuideSection
            id="english"
            heading="영어 표현"
            active={false}
            className="space-y-3"
          >
            <p className="text-sm text-[var(--muted)]">
              현장에서 바로 쓸 수 있는 표현입니다. 듣기 버튼으로 발음을
              확인해 보세요.
            </p>
            <EnglishPhrases phrases={phrases} />
          </GuideSection>
        ) : null}

        <GuideSection id="links" heading="참고 링크" active={false}>
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
        </GuideSection>
      </GuideTabShell>

      {guide.disclaimer ? (
        <p className="mt-8 rounded-xl bg-[var(--surface-muted)] px-4 py-3 text-xs leading-relaxed text-[var(--muted)]">
          {guide.disclaimer}
        </p>
      ) : null}
    </div>
  );
}
