import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border border-[var(--color-accent)] hover:border-[var(--color-accent-hover)]",
  secondary:
    "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-warm)] border border-[var(--color-border-strong)]",
  ghost:
    "bg-transparent text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] border border-transparent",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-medium leading-tight transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]";

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function LinkButton({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `${baseClass} ${variantClass[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${baseClass} ${variantClass[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
