import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

type ContactCTAProps = {
  heading?: string;
  body?: string;
};

export function ContactCTA({
  heading = "Have a project in mind?",
  body = "Send a quick note describing what you're looking for. I'll reply with a written estimate, a time range, and any clarifying questions.",
}: ContactCTAProps) {
  return (
    <section className="bg-[var(--color-surface-warm)] py-20 sm:py-24">
      <Container size="wide">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {heading}
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-pretty text-lg leading-relaxed text-[var(--color-text-muted)]">
              {body}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <LinkButton href="/contact" variant="primary">
                Get in touch
              </LinkButton>
              <LinkButton href="/pricing" variant="ghost">
                See pricing →
              </LinkButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
