import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { warranty } from "@/content/pricing";

export function WarrantyCallout() {
  return (
    <section className="py-16 sm:py-20">
      <Container size="wide">
        <FadeIn>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Warranty
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {warranty.laborTitle}
            </h2>
            <p className="mt-4 max-w-prose leading-relaxed text-[var(--color-text-muted)]">
              {warranty.laborBody}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
