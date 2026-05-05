import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";
import { serviceCategories, notOffered } from "@/content/services";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Custom PC builds, component upgrades, diagnostics, basic networking, and home media servers. Full breakdown of what's offered and what isn't.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-20 sm:py-24">
        <Container size="wide">
          <SectionHeading
            level={1}
            eyebrow="Services"
            title="What's offered, in plain terms."
          />
        </Container>
      </section>

      <Container size="wide" className="py-20 sm:py-24">
        <div className="grid gap-16 md:gap-20">
          {serviceCategories.map((cat) => (
            <FadeIn key={cat.id} as="section">
              <div id={cat.id} className="scroll-mt-24">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {cat.id === "computers"
                    ? "01"
                    : cat.id === "networking"
                      ? "02"
                      : "03"}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {cat.title}
                </h2>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[15px] leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {cat.note ? (
                  <div className="mt-6 max-w-prose rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-surface-warm)] p-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    <strong className="font-semibold text-[var(--color-text)]">
                      Note:
                    </strong>{" "}
                    {cat.note}
                  </div>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface-warm)] py-16">
        <Container size="wide">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">
              Not offered
            </h2>
            <p className="mt-3 max-w-prose text-[var(--color-text-muted)]">
              Worth saying up front so you don't waste a trip:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {notOffered.map((item) => (
                <li
                  key={item}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[15px] leading-relaxed text-[var(--color-text-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <ContactCTA
        heading="Not sure if it fits?"
        body="Send a description of what you're trying to do — I'll tell you up front if it's something I can help with."
      />
    </>
  );
}
