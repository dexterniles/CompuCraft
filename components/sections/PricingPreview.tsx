import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricing } from "@/content/pricing";

export function PricingPreview() {
  return (
    <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
      <Container size="wide">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Pricing"
              title="Hourly, with a written estimate."
              intro="You only pay for the time the job actually takes. Every quote includes an estimated time range up front. If a job runs more than 25% over the estimate, work stops and we talk before continuing."
            />
            <div className="mt-8">
              <LinkButton href="/pricing" variant="secondary">
                Full pricing
              </LinkButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <dl className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Labor
                </dt>
                <dd className="mt-3 text-3xl font-semibold tracking-tight">
                  {pricing.hourlyRateDisplay}
                </dd>
                <dd className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {pricing.minimum}
                </dd>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Diagnostic
                </dt>
                <dd className="mt-3 text-3xl font-semibold tracking-tight">
                  {pricing.diagnosticFeeDisplay}
                </dd>
                <dd className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Applied toward repair if you proceed.
                </dd>
              </div>
              <div className="sm:col-span-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Travel
                </dt>
                <dd className="mt-3 text-base">
                  Free within 15 miles of North Attleboro. $20 per additional 10
                  miles, up to about 50.
                </dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
