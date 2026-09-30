import { pageMeta } from "@/lib/utils/metadata";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd, breadcrumbs } from "@/lib/utils/jsonLd";
import { SITE } from "@/lib/constants/site";
import {

  WHO_WE_ARE,
  PRINCIPLES,
  MISSION,
  VISION,
  CULTURE,
  LICENSES,
} from "@/lib/content/company";


export const metadata = pageMeta({
  title: "About Us",
  description: "Who we are, our mission and vision, our culture and our business licenses. InspireX is a Toronto-based IT consulting and staffing firm built on five principles.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "About", path: "/about" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About InspireX",
          url: `${SITE.domain}/about`,
          description:
            "Who we are, our mission and vision, our culture and our business licenses.",
          mainEntity: { "@id": `${SITE.domain}/#organization` },
        }}
      />
      <PageHero
        eyebrow="About InspireX"
        title={<>We treat the difficult part as the opportunity.</>}
        lead={MISSION.lead}
        image={{
          src: "/images/inspirex-workspace.jpg",
          alt: "Two InspireX consultants working together at a shared desk",
        }}
      />

      {/* ---- Who we are ---- */}
      <section id="who-we-are" className="scroll-mt-24 border-b border-rule bg-paper py-24 lg:py-32">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-20">
            <div>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="type-h2 mt-6 max-w-[11ch]">A full range, one partner.</h2>
            </div>
            <div>
              <div className="measure space-y-6 text-[1.125rem] leading-[1.7]">
                {WHO_WE_ARE.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-[1.0625rem] font-medium text-ink">
                  At InspireX we believe in five principles that ensure successful outcomes.
                </p>
                <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
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
          </div>
        </Container>
      </section>

      {/* ---- Mission + Vision, set as a pair ---- */}
      <section id="mission" className="on-dark scroll-mt-24 bg-ink py-24 text-mist-dark lg:py-32">
        <Container wide>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="type-h3 mt-6 max-w-[20ch] text-white">{MISSION.lead}</h2>
              <p className="measure mt-6 leading-[1.7]">{MISSION.body}</p>
              <ul className="mt-9 space-y-0 border-t border-white/12">
                {MISSION.commitments.map((c) => (
                  <li key={c} className="border-b border-white/12 py-4 text-[1.0625rem] leading-relaxed text-white/80">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div id="vision" className="scroll-mt-24 lg:border-l lg:border-white/12 lg:pl-20">
              <Eyebrow>Our values and vision</Eyebrow>
              <h2 className="type-h3 mt-6 max-w-[22ch] text-white">{VISION.lead}</h2>
              <ul className="mt-9 space-y-0 border-t border-white/12">
                {VISION.commitments.map((c) => (
                  <li key={c} className="border-b border-white/12 py-4 text-[1.0625rem] leading-relaxed text-white/80">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Culture ---- */}
      <section id="culture" className="scroll-mt-24 border-b border-rule bg-paper-2 py-24 lg:py-32">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-20">
            <div>
              <Eyebrow>Our culture</Eyebrow>
              <h2 className="type-h2 mt-6 max-w-[12ch]">Listen first. Ask questions second.</h2>
            </div>
            <div>
              <p className="measure type-lead font-display font-medium tracking-[-0.02em] text-ink">
                {CULTURE.lead}
              </p>
              <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-[1.7] text-mist">
                {CULTURE.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl bg-ink">
                <Image
                  src="/images/compliance-review.jpg"
                  alt="Colleagues reviewing printed documents together at a table"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-8 grid gap-px overflow-hidden rounded-xl bg-rule sm:grid-cols-2">
                {CULTURE.sayings.map((s) => (
                  <blockquote key={s} className="bg-paper p-7">
                    <p className="font-display text-[1.25rem] font-medium leading-snug tracking-[-0.02em] text-ink">
                      &ldquo;{s}&rdquo;
                    </p>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Licenses ---- */}
      <section id="licenses" className="scroll-mt-24 bg-paper py-24 lg:py-32">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-20">
            <div>
              <Eyebrow>Business licenses</Eyebrow>
              <h2 className="type-h2 mt-6 max-w-[12ch]">Registered and on record.</h2>
              <p className="measure mt-6 leading-relaxed text-mist">
                We have a saying at our company: we don&rsquo;t quit until the job is done.
              </p>
            </div>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:self-start">
              {LICENSES.map((l) => (
                <div key={l.label} className="border-t-2 border-signal pt-5">
                  <dt className="text-[0.9375rem] leading-snug text-mist">{l.label}</dt>
                  <dd className="mt-2 font-display text-[2rem] font-semibold tracking-[-0.03em] text-ink">
                    {l.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
