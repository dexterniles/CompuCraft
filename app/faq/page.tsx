import { Container } from "@/components/layout/Container";
import { FAQItem } from "@/components/ui/FAQItem";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";
import { faqs } from "@/content/faq";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Common questions about CompuCraft — what's offered, how booking works, payment, warranty coverage, and what falls outside the service.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-20 sm:py-24">
        <Container size="wide">
          <SectionHeading
            level={1}
            eyebrow="FAQ"
            title="Common questions, straight answers."
            intro="If your question isn't here, send me an email — happy to clarify."
          />
        </Container>
      </section>

      <Container size="wide" className="py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 sm:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </FadeIn>
      </Container>

      <ContactCTA />
    </>
  );
}
