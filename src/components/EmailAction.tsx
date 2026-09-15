"use client";

import { useState } from "react";

type EmailActionProps = {
  email: string;
  subject: string;
  body?: string;
  primaryLabel: string;
  variant?: "brand" | "outline";
};

export function EmailAction({
  email,
  subject,
  body = "",
  primaryLabel,
  variant = "brand",
}: EmailActionProps) {
  const [copied, setCopied] = useState(false);

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const primaryClass =
    variant === "brand"
      ? "inline-flex rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
      : "inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-muted)]";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--ink)]">
        받는 주소:{" "}
        <a
          href={mailtoHref}
          className="font-semibold text-[var(--brand)] underline underline-offset-2"
        >
          {email}
        </a>
      </p>
      <div className="flex flex-wrap gap-2">
        <a href={mailtoHref} className={primaryClass}>
          {primaryLabel}
        </a>
        <a
          href={gmailHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-muted)]"
        >
          Gmail에서 열기
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-muted)]"
        >
          {copied ? "복사됨" : "주소 복사"}
        </button>
      </div>
      <p className="text-xs leading-relaxed text-[var(--muted)]">
        PC에 기본 메일 앱이 없으면 ‘메일 보내기’가 반응 없을 수 있습니다. 그경우
        Gmail에서 열기 또는 주소 복사를 이용해 주세요.
      </p>
    </div>
  );
}
