import { pageMeta } from "@/lib/utils/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SolutionsIndex } from "@/components/solutions/SolutionsIndex";
import { FeaturedServices } from "@/components/solutions/FeaturedServices";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { QUOTE } from "@/lib/content/company";
import { SOLUTIONS } from "@/lib/content/solutions";
import { SITE } from "@/lib/constants/site";
import { JsonLd, breadcrumbs } from "@/lib/utils/jsonLd";



export const metadata = pageMeta({
  title: "Our Solutions",
  description: "Data cleaning and data enrichment, data management, cybersecurity, 24/7 infrastructure monitoring, disaster recovery, data management, deployment, SAP managed services and IT staffing from InspireX.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Solutions", path: "/solutions" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Our Solutions",
          url: `${SITE.domain}/solutions`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: SOLUTIONS.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE.domain}/solutions/${s.slug}`,
            })),
          },
        }}
      />
      <PageHero
        eyebrow="Our solutions"
        title={<>Turn-key delivery inside strict guidelines.</>}
        lead="Our IT professionals understand what it takes to implement turn-key information technology solutions within the structure of strict guidelines."
        image={{
          src: "/images/datacenter-racks.jpg",
          alt: "Server racks lit in the aisle of a data centre",
        }}
      />

      <section className="border-b border-rule bg-paper-2 py-20 lg:py-24">
        <Container wide>
          <Eyebrow>Featured services</Eyebrow>
          <h2 className="type-h2 mt-6 max-w-[22ch]">Clean, complete data at the core.</h2>
          <div className="mt-10 lg:mt-12">
            <FeaturedServices />
          </div>
        </Container>
      </section>

      <section className="border-b border-rule bg-paper py-20 lg:py-28">
        <Container wide>
          <SolutionsIndex />
        </Container>
      </section>

      <section className="bg-paper-2 py-20 lg:py-24">
        <Container wide>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="type-h3 font-display font-medium text-ink">&ldquo;{QUOTE.text}&rdquo;</p>
          </blockquote>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
