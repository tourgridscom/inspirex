import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CAREERS } from "@/lib/content/company";
import { SITE } from "@/lib/constants/site";

export function CareersTeaser() {
  return (
    <section id="careers" className="on-dark scroll-mt-24 bg-ink-800 py-24 text-mist-dark lg:py-32">
      <Container wide>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>Join us</Eyebrow>
            <h2 className="type-h2 mt-6 max-w-[13ch] text-white">
              Skilled, certified, self-motivated.
            </h2>
            <p className="measure type-lead mt-6">{CAREERS.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/careers">How to apply</Button>
              <Button href={`mailto:${SITE.hrEmail}`} variant="outline">
                {SITE.hrEmail}
              </Button>
            </div>
          </div>

          <div className="space-y-6 lg:pt-4">
            {CAREERS.body.map((p) => (
              <p key={p.slice(0, 20)} className="measure text-[1.0625rem] leading-[1.7]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
