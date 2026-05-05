import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with CompuCraft by email. Free travel within 15 miles of North Attleboro; drop-off available.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-20 sm:py-24">
        <Container size="wide">
          <SectionHeading
            level={1}
            eyebrow="Contact"
            title="Reach out."
            intro="Email is the fastest way — describe what you need and your location, and I'll reply with a written estimate."
          />
        </Container>
      </section>

      <Container size="wide" className="py-16 sm:py-20">
        <FadeIn>
          <article className="mx-auto max-w-2xl rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Email
            </p>
            <p className="mt-4 break-words text-2xl font-semibold tracking-tight sm:text-3xl">
              <a
                href={contact.emailHref}
                className="text-[var(--color-text)] hover:text-[var(--color-accent)]"
              >
                {contact.email}
              </a>
            </p>
            <div className="mt-8">
              <LinkButton href={contact.emailHref} variant="primary">
                Open email
              </LinkButton>
            </div>
          </article>
        </FadeIn>
      </Container>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface-warm)] py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight">
                Service area
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-[var(--color-text-muted)]">
                Free on-site service within 15 miles of {site.baseLocation}.
                $20 per additional 10 miles, up to ~50 miles.
              </p>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                Direct service area: {site.serviceAreaTowns.join(", ")}.
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h2 className="text-xl font-semibold tracking-tight">
                Drop-off
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-[var(--color-text-muted)]">
                {contact.dropOffNote}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
