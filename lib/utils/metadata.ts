import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";

/**
 * Builds a complete, consistent metadata block for a route.
 *
 * Page-level `openGraph` replaces the parent's rather than merging, so the
 * social image has to be restated per route. Routing every page through here
 * keeps canonical, Open Graph and Twitter tags in lockstep.
 */
export function pageMeta({
  title,
  description,
  path,
  ogPath,
}: {
  title: string;
  description: string;
  path: string;
  /** Route that renders the social image; defaults to the site-wide one. */
  ogPath?: string;
}): Metadata {
  const url = `${SITE.domain}${path}`;
  const images = [
    {
      url: `${ogPath ?? ""}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: `${title} — ${SITE.name}`,
    },
  ];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_CA",
      url,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
