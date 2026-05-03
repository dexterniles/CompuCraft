import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  level?: 1 | 2;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  level = 2,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  const titleSize =
    level === 1
      ? "text-4xl sm:text-5xl md:text-6xl"
      : "text-3xl sm:text-4xl";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-prose ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading className={`${titleSize} text-balance font-semibold`}>
        {title}
      </Heading>
      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)] text-pretty">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
