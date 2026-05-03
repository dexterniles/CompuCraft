import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceCategories } from "@/content/services";

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24" id="services">
      <Container size="wide">
        <FadeIn>
          <SectionHeading
            eyebrow="What I do"
            title="Three core service areas."
            intro="Builds and maintenance for desktops, laptops, and Macs. Standard ISP networking. Home media servers and storage."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
          {serviceCategories.map((cat, index) => (
            <FadeIn key={cat.id} delay={index * 0.05}>
              <Card
                as="article"
                interactive
                className="flex h-full flex-col"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {cat.title}
                </h3>
                <p className="mt-3 grow text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {cat.summary}
                </p>
                <Link
                  href={`/services#${cat.id}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                >
                  Details
                  <span aria-hidden="true">→</span>
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
