import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";
import {
  pricing,
  pcEstimates,
  networkServerEstimates,
  mediaServerNote,
  travel,
  partsPolicy,
  paymentMethods,
  paymentMethodsNote,
  warranty,
} from "@/content/pricing";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "$50/hour with a 1-hour minimum, $45 flat-rate diagnostic, written estimates up front, and a 30-day labor warranty. Free travel within 15 miles of North Attleboro.",
  path: "/pricing",
});

function EstimateTable({
  caption,
  rows,
}: {
  caption: string;
  rows: { job: string; hours: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-[var(--color-surface-warm)]">
          <tr>
            <th
              scope="col"
              className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
            >
              Job
            </th>
            <th
              scope="col"
              className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
            >
              Estimate
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.job}
              className={
                i !== rows.length - 1
                  ? "border-b border-[var(--color-border)]"
                  : ""
              }
            >
              <th
                scope="row"
                className="px-5 py-4 text-left align-top font-normal text-[var(--color-text)]"
              >
                {row.job}
              </th>
              <td className="px-5 py-4 align-top text-[var(--color-text-muted)]">
                {row.hours}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-20 sm:py-24">
        <Container size="wide">
          <SectionHeading
            level={1}
            eyebrow="Pricing"
            title="Hourly billing, no surprises."
            intro={pricing.hourlyExplanation}
          />
        </Container>
      </section>

      <Container size="wide" className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Labor
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight">
                {pricing.hourlyRateDisplay}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {pricing.minimum}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Diagnostic (flat)
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight">
                {pricing.diagnosticFeeDisplay}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {pricing.diagnosticNote}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Travel
              </p>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-text)]">
                Free within {travel.freeRadiusMiles} miles of North Attleboro.
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                ${travel.surchargePerExtraTen} per additional 10 miles. No
                travel beyond ~{travel.maxRadiusMiles} miles.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container size="wide" className="pb-16 sm:pb-20">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Typical time estimates
          </h2>
          <p className="mt-3 max-w-prose text-[var(--color-text-muted)]">
            Hourly rate × time below = a realistic ballpark. Every job still
            gets a written estimate before work begins.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              PC services
            </h3>
            <EstimateTable caption="PC service estimates" rows={pcEstimates} />
          </FadeIn>
          <FadeIn delay={0.05}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              Networking & servers
            </h3>
            <EstimateTable
              caption="Network and server estimates"
              rows={networkServerEstimates}
            />
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-[var(--color-text-muted)]">
              <strong className="font-semibold text-[var(--color-text)]">
                Note:
              </strong>{" "}
              {mediaServerNote}
            </p>
          </FadeIn>
        </div>
      </Container>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface-warm)] py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight">
                Travel & drop-off
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-[var(--color-text-muted)]">
                {travel.description}
              </p>
              <p className="mt-3 text-[var(--color-text-muted)]">
                {travel.dropOff}
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h2 className="text-xl font-semibold tracking-tight">
                Parts purchasing
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-[var(--color-text-muted)]">
                {partsPolicy}
              </p>
            </FadeIn>

            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight">
                Payment methods
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {paymentMethods.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                {paymentMethodsNote}
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h2 className="text-xl font-semibold tracking-tight">
                {warranty.laborTitle}
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-[var(--color-text-muted)]">
                {warranty.laborBody}
              </p>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--color-text-muted)]">
                <strong className="font-semibold text-[var(--color-text)]">
                  {warranty.partsTitle}:
                </strong>{" "}
                {warranty.partsBody}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <ContactCTA
        heading="Ready for an estimate?"
        body="Tell me what you're working with — current setup, what's wrong, what you'd like changed. I'll send back a written quote with a time range."
      />
    </>
  );
}
