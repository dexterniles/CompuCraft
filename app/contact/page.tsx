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
    "Get in touch with CompuCraft by email or Facebook Messenger. Free travel within 15 miles of North Attleboro; drop-off available.",
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
            intro="Email is the fastest way. Include a quick description of what you're trying to do and your general location — I'll reply with a written estimate or any clarifying questions."
          />
        </Container>
      </section>

      <Container size="wide" className="py-16 sm:py-20">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          <FadeIn>
            <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Email
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                Send a quick note
              </h2>
              <p className="mt-3 text-[var(--color-text-muted)]">
                The most reliable way to get in touch.
              </p>
              <p className="mt-6 break-words text-base font-medium">
                <a
                  href={contact.emailHref}
                  className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                >
                  {contact.email}
                </a>
              </p>
              <div className="mt-6">
                <LinkButton href={contact.emailHref} variant="primary">
                  Open email
                </LinkButton>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.05}>
            <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Facebook Messenger
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                Coming soon
              </h2>
              <p className="mt-3 text-[var(--color-text-muted)]">
                {contact.messengerPlaceholderNote} In the meantime, email works
                exactly the same.
              </p>
              <div className="mt-auto pt-6">
                {contact.messengerAvailable && contact.messengerUrl ? (
                  <LinkButton href={contact.messengerUrl} variant="secondary">
                    Open Messenger
                  </LinkButton>
                ) : (
                  <span className="inline-flex items-center rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] px-4 py-2 text-sm text-[var(--color-text-muted)]">
                    Link to be added once the listing is posted
                  </span>
                )}
              </div>
            </article>
          </FadeIn>
        </div>
      </Container>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface-warm)] py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight">
                Service area
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-[var(--color-text-muted)]">
                Based in {site.baseLocation}. Free on-site service within 15
                miles. Customers further out are welcome with a small travel
                surcharge ($20 per additional 10 miles, up to about 50 miles).
              </p>
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                Direct service area includes:{" "}
                {site.serviceAreaTowns.join(", ")}.
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
