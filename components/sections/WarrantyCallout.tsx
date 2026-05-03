import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { warranty } from "@/content/pricing";

export function WarrantyCallout() {
  return (
    <section className="py-20 sm:py-24">
      <Container size="wide">
        <FadeIn>
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-[var(--color-border)] p-8 sm:p-10 md:border-b-0 md:border-r">
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
              <div className="p-8 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Parts
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {warranty.partsTitle}
                </h3>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {warranty.partsBody}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
