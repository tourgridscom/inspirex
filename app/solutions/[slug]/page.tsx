import { pageMeta } from "@/lib/utils/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { DataPipeline } from "@/components/sections/DataPipeline";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeaturedBadge } from "@/components/ui/FeaturedBadge";
import { getSolution, GROUP_IMAGES, SOLUTIONS } from "@/lib/content/solutions";
import { TEAM_STATEMENT } from "@/lib/content/company";
import { JsonLd, breadcrumbs, serviceSchema } from "@/lib/utils/jsonLd";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return pageMeta({
    title: s.title,
    description: s.summary,
    path: `/solutions/${s.slug}`,
    ogPath: `/solutions/${s.slug}`,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const related = SOLUTIONS.filter((s) => s.group === solution.group && s.slug !== solution.slug);

  return (
    <>
      <JsonLd data={serviceSchema(solution)} />
      <JsonLd
        data={breadcrumbs([
          { name: "Solutions", path: "/solutions" },
          { name: solution.title, path: `/solutions/${solution.slug}` },
        ])}
      />
      <PageHero
        eyebrow={solution.group}
        title={solution.title}
        lead={solution.summary}
        image={GROUP_IMAGES[solution.group]}
        aside={solution.featured && <FeaturedBadge className="ml-6 mt-6" />}
      />

      <section className="border-b border-rule bg-paper py-20 lg:py-28">
        <Container wide>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <Eyebrow>Our approach</Eyebrow>
              <div className="measure mt-6 space-y-5 text-[1.1875rem] leading-[1.68]">
                {solution.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              {solution.capabilities && (
                <ul className="mt-10 border-t border-rule">
                  {solution.capabilities.map((c) => (
                    <li
                      key={c}
                      className="grid grid-cols-[auto_1fr] items-baseline gap-4 border-b border-rule py-4"
                    >
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
                      <span className="text-[1.0625rem] leading-relaxed text-body">{c}</span>
                    </li>
                  ))}
                </ul>
              )}

              {solution.method && (
                <div className="mt-12">
                  <h2 className="type-h3">{solution.method.name}</h2>
                  {/* A genuine sequence, so it is numbered. */}
                  <ol className="mt-7 space-y-0 border-t border-rule">
                    {solution.method.steps.map((step, i) => (
                      <li
                        key={step.term}
                        className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-b border-rule py-5 sm:grid-cols-[3.5rem_1fr]"
                      >
                        <span className="font-display text-[0.9375rem] font-semibold tabular-nums text-signal">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block font-display text-[1.125rem] font-semibold tracking-[-0.015em] text-ink">
                            {step.term}
                          </span>
                          <span className="mt-1 block text-[1.0625rem] leading-relaxed text-mist">
                            {step.detail}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-rule bg-white p-7">
                <h2 className="font-display text-[1.125rem] font-semibold tracking-[-0.015em] text-ink">
                  The expertise behind it
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-mist">{TEAM_STATEMENT.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {TEAM_STATEMENT.disciplines.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-ink/12 px-3 py-1 text-[0.8125rem] text-ink/70"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 flex items-center justify-center rounded-full bg-signal px-5 py-3 text-[0.9375rem] font-medium text-white transition-colors hover:bg-signal-600"
                >
                  Discuss {solution.short.toLowerCase()}
                </Link>
              </div>

              {related.length > 0 && (
                <nav aria-label={`More in ${solution.group}`} className="mt-8">
                  <h2 className="type-small border-b border-rule pb-3 font-medium uppercase tracking-[0.12em] text-mist">
                    More in {solution.group}
                  </h2>
                  <ul className="mt-3 space-y-1">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/solutions/${r.slug}`}
                          className="block rounded-lg px-3 py-2 text-[0.9375rem] text-mist transition-colors hover:bg-white hover:text-ink"
                        >
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {solution.featured && <DataPipeline />}

      <CtaBand
        eyebrow={solution.title}
        title="Tell us what you need to keep running."
        lead="We will walk you through how we would scope, staff and deliver it."
      />
    </>
  );
}
