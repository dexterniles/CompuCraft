import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";
import { aboutParagraphs } from "@/content/about";

export const metadata = buildMetadata({
  title: "About",
  description:
    "CompuCraft is a side service for the North Attleboro area run by an IT professional with hands-on experience on current-generation hardware.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-20 sm:py-24">
        <Container size="wide">
          <SectionHeading
            level={1}
            eyebrow="About"
            title="A side service, run carefully."
          />
        </Container>
      </section>

      <Container size="narrow" className="py-16 sm:py-20">
        <FadeIn>
          <div className="prose-text text-lg">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>
      </Container>

      <ContactCTA />
    </>
  );
}
