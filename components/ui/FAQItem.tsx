import type { FAQ } from "@/content/faq";

type FAQItemProps = {
  faq: FAQ;
};

export function FAQItem({ faq }: FAQItemProps) {
  return (
    <details className="group border-b border-[var(--color-border)] py-5 last:border-b-0 [&[open]_.faq-icon]:rotate-45">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-[var(--radius-sm)] text-left text-base font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:text-lg">
        <span className="text-pretty">{faq.q}</span>
        <span
          aria-hidden="true"
          className="faq-icon mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-muted)] transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 1.5V10.5M1.5 6H10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </summary>
      <div className="mt-4 max-w-prose pr-10 text-base leading-relaxed text-[var(--color-text-muted)]">
        {faq.a}
      </div>
    </details>
  );
}
