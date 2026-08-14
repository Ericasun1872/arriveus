import type { Category } from "@/content/types";

type IconProps = {
  className?: string;
};

export function CategoryIcon({
  icon,
  className = "h-7 w-7",
}: {
  icon: Category["icon"];
  className?: string;
}) {
  switch (icon) {
    case "car":
      return <CarIcon className={className} />;
    case "bank":
      return <BankIcon className={className} />;
    case "medical":
      return <MedicalIcon className={className} />;
    case "tax":
      return <TaxIcon className={className} />;
    case "job":
      return <JobIcon className={className} />;
    case "housing":
      return <HousingIcon className={className} />;
  }
}

function CarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 11.5 6.4 7.8A2 2 0 0 1 8.3 6.5h7.4a2 2 0 0 1 1.9 1.3L19 11.5M4 16.5v1a1.5 1.5 0 0 0 3 0v-1m10 0v1a1.5 1.5 0 0 0 3 0v-1M4 12.5h16v4H4v-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BankIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10h16M6 10v8m4-8v8m4-8v8m4-8v8M3 18h18M12 4l9 4H3l9-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MedicalIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 3.5h6v4h4v6h-4v4H9v-4H5v-6h4v-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TaxIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3.5h6.5L19 8v12.5H8A1.5 1.5 0 0 1 6.5 19V5A1.5 1.5 0 0 1 8 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 3.5V8H19M9.5 12h5M9.5 15.5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JobIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 8.5V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M4.5 10.5h15v8a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 13.5h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HousingIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5.5v-5.5h-3V21H5a1 1 0 0 1-1-1v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 5h5v5M19 5l-9 9M10 6H6.5A1.5 1.5 0 0 0 5 7.5v10A1.5 1.5 0 0 0 6.5 19h10a1.5 1.5 0 0 0 1.5-1.5V14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
