import { SITE } from "@/lib/constants/site";

/** Renders a JSON-LD graph node. Kept tiny so pages stay server components. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.domain}${c.path}`,
    })),
  };
}

export function serviceSchema(s: {
  title: string;
  summary: string;
  slug: string;
  capabilities?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.summary,
    url: `${SITE.domain}/solutions/${s.slug}`,
    serviceType: s.title,
    provider: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.domain,
    },
    areaServed: { "@type": "Country", name: "Canada" },
    ...(s.capabilities?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${s.title} capabilities`,
            itemListElement: s.capabilities.map((c) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: c },
            })),
          },
        }
      : {}),
  };
}
