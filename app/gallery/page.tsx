import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos of past CompuCraft builds and service work. Real customer-build photos will be posted here as projects complete.",
  path: "/gallery",
});

// Placeholder labels mirror the kinds of photos that will go here.
// To swap in a real photo, replace the corresponding <PlaceholderImage>
// with an `<Image>` from `next/image` keeping the same `alt` text.
const placeholders = [
  { label: "Custom build — front", aspectRatio: "portrait" as const },
  { label: "Cable management — rear", aspectRatio: "portrait" as const },
  { label: "Thermal paste replacement", aspectRatio: "square" as const },
  { label: "Component upgrade — GPU install", aspectRatio: "square" as const },
  { label: "NAS install — home server rack", aspectRatio: "wide" as const },
  { label: "Workshop bench — service in progress", aspectRatio: "wide" as const },
];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] py-20 sm:py-24">
        <Container size="wide">
          <SectionHeading
            level={1}
            eyebrow="Gallery"
            title="Photos coming soon."
            intro="Real customer-build photos will be posted here as projects complete."
          />
        </Container>
      </section>

      <Container size="wide" className="py-16 sm:py-20">
        <FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {placeholders.map((p) => (
              <PlaceholderImage
                key={p.label}
                label={p.label}
                alt={p.label}
                aspectRatio={p.aspectRatio}
              />
            ))}
          </div>
        </FadeIn>
      </Container>

      <ContactCTA
        heading="Have a build in mind?"
        body="Tell me what you're after and I'll send back a written estimate."
      />
    </>
  );
}
