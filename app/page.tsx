import type { Metadata } from "next";
import { pageMeta } from "@/lib/utils/metadata";
import { Hero } from "@/components/hero/Hero";
import { Principles } from "@/components/sections/Principles";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { DataPipeline } from "@/components/sections/DataPipeline";
import { SolutionsPreview } from "@/components/sections/SolutionsPreview";
import { Outcomes } from "@/components/sections/Outcomes";
import { TeamStatement } from "@/components/sections/TeamStatement";
import { CareersTeaser } from "@/components/sections/CareersTeaser";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...pageMeta({
    title: "InspireX | IT Consulting, Cybersecurity & Technology Staffing",
    description:
      "InspireX provides data cleaning and data enrichment, IT consulting, cybersecurity, regulatory compliance and technology staffing for organizations that cannot afford interruption. Based in Toronto, Ontario.",
    path: "/",
  }),
  // The home title is already fully qualified, so it skips the template.
  title: {
    absolute: "InspireX | IT Consulting, Cybersecurity & Technology Staffing",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DataPipeline />
      <Principles />
      <WhoWeAre />
      <SolutionsPreview />
      <Outcomes />
      <TeamStatement />
      <CareersTeaser />
      <CtaBand />
    </>
  );
}
