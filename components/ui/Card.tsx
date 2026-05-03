import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  interactive?: boolean;
};

export function Card({
  children,
  className = "",
  as: Tag = "div",
  interactive = false,
}: CardProps) {
  const interactiveClass = interactive
    ? "transition-all duration-150 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-card)]"
    : "";

  return (
    <Tag
      className={`rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 ${interactiveClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
