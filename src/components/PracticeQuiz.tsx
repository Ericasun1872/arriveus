"use client";

import { useMemo, useState } from "react";
import type { PracticeQuestion } from "@/content/types";

export function PracticeQuiz({ questions }: { questions: PracticeQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question, index) => {
      return total + (answers[index] === question.answerIndex ? 1 : 0);
    }, 0);
  }, [answers, questions]);

  function selectChoice(questionIndex: number, choiceIndex: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionIndex]: choiceIndex }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--muted)]">
        주마다 문제와 정답이 다를 수 있습니다. 아래는 공통적으로 자주 나오는
        유형의 연습 문제이며, 실제 시험 전에는 거주 주 Driver Handbook를
        확인하세요.
      </p>

      <ol className="space-y-4">
        {questions.map((question, questionIndex) => {
          const selected = answers[questionIndex];
          const showResult = submitted;
          const isCorrect = selected === question.answerIndex;

          return (
            <li
              key={question.question}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4"
            >
              <p className="text-sm font-semibold text-[var(--ink)]">
                {questionIndex + 1}. {question.question}
              </p>
              <ul className="mt-3 space-y-2">
                {question.choices.map((choice, choiceIndex) => {
                  const isSelected = selected === choiceIndex;
                  const isAnswer = choiceIndex === question.answerIndex;
                  let style =
                    "border-[var(--border)] hover:border-[var(--brand-border)]";
                  if (showResult && isAnswer) {
                    style =
                      "border-emerald-500 bg-emerald-50 text-emerald-900";
                  } else if (showResult && isSelected && !isCorrect) {
                    style = "border-red-400 bg-red-50 text-red-900";
                  } else if (!showResult && isSelected) {
                    style =
                      "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]";
                  }

                  return (
                    <li key={choice}>
                      <button
                        type="button"
                        disabled={submitted}
                        onClick={() => selectChoice(questionIndex, choiceIndex)}
                        className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-colors disabled:cursor-default ${style}`}
                      >
                        {choice}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {showResult && question.explanation ? (
                <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                  {isCorrect ? "정답입니다. " : "다시 확인해 보세요. "}
                  {question.explanation}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="flex flex-wrap items-center gap-3">
        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            채점하기
          </button>
        ) : (
          <>
            <p className="text-sm font-semibold text-[var(--brand)]">
              결과: {score} / {questions.length}
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--ink)] hover:bg-[var(--surface-muted)]"
            >
              다시 풀기
            </button>
          </>
        )}
      </div>
    </div>
  );
}
