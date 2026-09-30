import { pageMeta } from "@/lib/utils/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { OUTCOMES, PRINCIPLES, TEAM_STATEMENT, LICENSES, VISION } from "@/lib/content/company";
import { JsonLd, breadcrumbs } from "@/lib/utils/jsonLd";



/** Each differentiator below is drawn from the archived site, not invented. */
const REASONS = [
  {
    heading: "Experience",
    body: TEAM_STATEMENT.body,
  },
  {
    heading: "Expertise",
    body: "Trained, experienced and certified IT professionals to detect and mitigate security threats, both internally and externally.",
  },
  {
    heading: "Business alignment",
    body: "We provide custom-tailored solutions that fit each client’s operational requirements while striving to establish lasting partnerships and relationships.",
  },
  {
    heading: "Continuity",
    body: "A connected and highly productive IT department delivers a stable infrastructure, which increases business continuity and productivity — and eliminates interruptions due to IT outages and upgrades.",
  },
  {
    heading: "Compliance",
    body: "Reduced compliance risk and data protection concerns, with governance, risk management and policy development across NIST, CMMC, ISO 27001, 800-171 and PCI-DSS.",
  },
  {
    heading: "Value",
    body: "Innovative and cost-effective solutions to challenging problems, identifying cost savings for our clients whenever possible.",
  },
];

export const metadata = pageMeta({
  title: "Why InspireX",
  description: "Documented differentiators: five operating principles, over 30 years of combined senior experience, certified professionals, and turn-key delivery inside strict guidelines.",
  path: "/why-inspirex",
});

export default function WhyPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Why InspireX", path: "/why-inspirex" }])} />
      <PageHero
        eyebrow="Why InspireX"
        title={<>Six reasons clients stay.</>}
        lead={VISION.lead}
        image={{
          src: "/images/server-towers.jpg",
          alt: "A row of servers lit in blue and red",
        }}
      />

      {/* ---- The reasons, as editorial spreads on one continuous rule ---- */}
      <section className="border-b border-rule bg-paper py-20 lg:py-28">
        <Container wide>
          <div className="border-t border-ink/15">
            {REASONS.map((r) => (
              <article
                key={r.heading}
                className="grid gap-4 border-b border-rule py-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20 lg:py-14"
              >
                <h2 className="type-h3">{r.heading}</h2>
                <p className="measure text-[1.1875rem] leading-[1.68] text-body lg:pt-1.5">{r.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ---- Principles ---- */}
      <section className="on-dark bg-ink py-24 text-mist-dark lg:py-32">
        <Container wide>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="type-h2 mt-6 max-w-[18ch] text-white">
            Five principles that ensure successful outcomes.
          </h2>
          <dl className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-8">
            {PRINCIPLES.map((p) => (
              <div key={p.name} className="border-t border-white/20 pt-5">
                <dt className="font-display text-[1.125rem] font-semibold tracking-[-0.015em] text-white">
                  {p.name}
                </dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-mist-dark">{p.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---- Outcomes + credentials ---- */}
      <section className="bg-paper-2 py-24 lg:py-32">
        <Container wide>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <Eyebrow>What you will achieve with us</Eyebrow>
              <ul className="mt-8 border-t border-ink/15">
                {OUTCOMES.map((o) => (
                  <li key={o} className="border-b border-rule py-4 text-[1.0625rem] leading-relaxed">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-16">
              <h2 className="font-display text-[1.125rem] font-semibold tracking-[-0.015em] text-ink">
                Registrations
              </h2>
              <dl className="mt-6 space-y-7">
                {LICENSES.map((l) => (
                  <div key={l.label} className="border-t-2 border-signal pt-4">
                    <dt className="text-[0.9375rem] leading-snug text-mist">{l.label}</dt>
                    <dd className="mt-1.5 font-display text-[1.75rem] font-semibold tracking-[-0.03em] text-ink">
                      {l.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
