import { pageMeta } from "@/lib/utils/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CAREERS, PRINCIPLES, TEAM_STATEMENT } from "@/lib/content/company";
import { SITE } from "@/lib/constants/site";
import { JsonLd, breadcrumbs } from "@/lib/utils/jsonLd";



/** The archived application process, preserved as the sequence it is. */
const STEPS = [
  {
    term: "Prepare your application",
    detail:
      "Put together a complete application that covers your experience, certifications and the areas of IT you specialize in.",
  },
  {
    term: "Attach your resume",
    detail: "Include a current resume alongside your application details.",
  },
  {
    term: "Email HR",
    detail: `Send both to ${SITE.hrEmail}. We review every application we receive.`,
  },
];

export const metadata = pageMeta({
  title: "Careers",
  description: "InspireX is always looking for skilled, certified and self-motivated IT professionals. See how to apply and email your application and resume to HR.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Careers", path: "/careers" }])} />
      <PageHero
        eyebrow="Join us"
        title={<>Always looking for people worth investing in.</>}
        lead={CAREERS.lead}
        image={{
          src: "/images/support-specialist.jpg",
          alt: "A support specialist working at a laptop wearing a headset",
        }}
      />

      {/* ---- Why work with us ---- */}
      <section className="border-b border-rule bg-paper py-20 lg:py-28">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-20">
            <div>
              <Eyebrow>Why work with us</Eyebrow>
              <h2 className="type-h2 mt-6 max-w-[12ch]">A small company, on purpose.</h2>
            </div>
            <div>
              <div className="measure space-y-6 text-[1.125rem] leading-[1.7]">
                {CAREERS.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <dl className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {PRINCIPLES.map((p) => (
                  <div key={p.name} className="border-t border-ink/15 pt-4">
                    <dt className="font-display text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink">
                      {p.name}
                    </dt>
                    <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-mist">{p.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Who we're looking for ---- */}
      <section className="on-dark bg-ink py-20 text-mist-dark lg:py-28">
        <Container wide>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <Eyebrow>Who we&rsquo;re looking for</Eyebrow>
              <ul className="mt-8">
                {CAREERS.lookingFor.map((w) => (
                  <li
                    key={w}
                    className="border-b border-white/15 py-5 font-display text-[2rem] font-semibold tracking-[-0.03em] text-white lg:text-[2.75rem]"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-16">
              <h2 className="font-display text-[1.125rem] font-semibold tracking-[-0.015em] text-white">
                The expertise we build on
              </h2>
              <p className="measure mt-3 leading-relaxed">{TEAM_STATEMENT.body}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {TEAM_STATEMENT.disciplines.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-white/20 px-4 py-1.5 text-[0.875rem] text-white/80"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- How to apply ---- */}
      <section id="apply" className="scroll-mt-24 bg-paper-2 py-20 lg:py-28">
        <Container wide>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              <Eyebrow>How to apply</Eyebrow>
              <h2 className="type-h2 mt-6 max-w-[14ch]">Three steps, one email.</h2>
              {/* A genuine sequence, so it is numbered. */}
              <ol className="mt-10 border-t border-ink/15">
                {STEPS.map((s, i) => (
                  <li
                    key={s.term}
                    className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-b border-rule py-6 sm:grid-cols-[4rem_1fr]"
                  >
                    <span className="font-display text-[0.9375rem] font-semibold tabular-nums text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-[1.25rem] font-semibold tracking-[-0.02em] text-ink">
                        {s.term}
                      </span>
                      <span className="measure mt-1.5 block text-[1.0625rem] leading-relaxed text-mist">
                        {s.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-rule bg-white p-8">
                <h2 className="type-h3 text-[1.5rem]">Send your application</h2>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-mist">
                  Email your application details and resume to our HR team. We are always actively
                  seeking talented professionals to join our team as we grow.
                </p>
                <Button href={`mailto:${SITE.hrEmail}?subject=Application%20%E2%80%94%20InspireX`} className="mt-7 w-full justify-center">
                  Email {SITE.hrEmail}
                </Button>
                <p className="mt-5 border-t border-rule pt-5 text-[0.875rem] leading-relaxed text-mist">
                  Questions about a role before you apply? Reach us at{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="border-b border-signal/50 pb-px text-ink transition-colors hover:border-signal hover:text-signal"
                  >
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
