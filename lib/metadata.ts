import type { Metadata } from "next";
import { site } from "@/content/site";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataOptions): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle =
    title === site.name ? site.name : `${title} — ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
