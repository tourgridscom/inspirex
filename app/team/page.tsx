import { pageMeta } from "@/lib/utils/metadata";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TEAM_STATEMENT, CULTURE, PRINCIPLES } from "@/lib/content/company";
import { SITE } from "@/lib/constants/site";
import { JsonLd, breadcrumbs } from "@/lib/utils/jsonLd";



export const metadata = pageMeta({
  title: "Our Team",
  description: "InspireX senior consultants and principals bring over 30 years of combined experience in IT security, risk management, IT consulting, advanced solutioning and regulatory compliance.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Our Team", path: "/team" }])} />
      <PageHero
        eyebrow="Our team"
        title={<>Innovation, teamwork and a get-it-done approach.</>}
        lead={TEAM_STATEMENT.body}
      />

      {/* ---- The disciplines, given the weight the archive gives them ---- */}
      <section className="border-b border-rule bg-paper py-20 lg:py-28">
        <Container wide>
          <Eyebrow>Where our seniority sits</Eyebrow>
          <p className="measure type-lead mt-6 font-display font-medium tracking-[-0.02em] text-ink">
            {TEAM_STATEMENT.lead}
          </p>

          <ul className="mt-14 border-t border-ink/15">
            {TEAM_STATEMENT.disciplines.map((d) => (
              <li
                key={d}
                className="flex items-baseline justify-between gap-6 border-b border-rule py-6 lg:py-7"
              >
                <h2 className="type-h3 text-[1.5rem] lg:text-[2rem]">{d}</h2>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 translate-y-[-0.35rem] bg-rule"
                />
                <span className="shrink-0 text-[0.9375rem] text-mist">Senior practice</span>
              </li>
            ))}
          </ul>

          <p className="measure mt-10 text-[1.0625rem] leading-relaxed text-mist">
            Our senior consultants and principals have over 30 years of combined experience across
            these disciplines. For introductions to the consultants who would work on your engagement,{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="border-b border-signal/50 pb-px text-ink transition-colors hover:border-signal hover:text-signal"
            >
              get in touch
            </a>
            .
          </p>
        </Container>
      </section>

      {/* ---- How the team works ---- */}
      <section className="bg-paper-2 py-20 lg:py-28">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink">
              <Image
                src="/images/inspirex-workspace.jpg"
                alt="Two InspireX consultants working together at a shared desk"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover opacity-90"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-ink/55 via-ink/10 to-transparent mix-blend-multiply"
              />
            </div>

            <div>
              <Eyebrow>How we work together</Eyebrow>
              <h2 className="type-h3 mt-6 max-w-[22ch]">{CULTURE.lead}</h2>
              <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-[1.7] text-mist">
                {CULTURE.body.slice(0, 2).map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ul className="mt-9 flex flex-wrap gap-2.5">
                {PRINCIPLES.map((p) => (
                  <li
                    key={p.name}
                    className="rounded-full border border-ink/15 px-4 py-1.5 text-[0.875rem] text-ink/75"
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/careers" variant="outline">
                  Join the team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
