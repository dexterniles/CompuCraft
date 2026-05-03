import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { WarrantyCallout } from "@/components/sections/WarrantyCallout";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PricingPreview />
      <WarrantyCallout />
      <ContactCTA />
    </>
  );
}
