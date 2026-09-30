import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";
import { SOLUTIONS } from "@/lib/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "monthly" },
    { path: "/solutions", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.8, freq: "yearly" },
    { path: "/why-inspirex", priority: 0.8, freq: "yearly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
    { path: "/careers", priority: 0.7, freq: "monthly" },
    { path: "/team", priority: 0.6, freq: "yearly" },
  ];

  return [
    ...pages.map((p) => ({
      url: `${SITE.domain}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...SOLUTIONS.map((s) => ({
      url: `${SITE.domain}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
