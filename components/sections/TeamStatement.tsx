import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TEAM_STATEMENT } from "@/lib/content/company";

export function TeamStatement() {
  return (
    <section id="team" className="scroll-mt-24 bg-paper py-24 lg:py-32">
      <Container wide>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
          <div>
            <Eyebrow>Our team</Eyebrow>
            <h2 className="type-h2 mt-6 max-w-[12ch]">A get-it-done approach.</h2>
          </div>

          <div>
            <p className="measure type-lead font-display font-medium tracking-[-0.02em] text-ink">
              {TEAM_STATEMENT.lead}
            </p>
            <p className="measure mt-6 text-[1.0625rem] leading-[1.7] text-mist">{TEAM_STATEMENT.body}</p>

            <ul className="mt-10 flex flex-wrap gap-2.5">
              {TEAM_STATEMENT.disciplines.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-ink/15 px-4 py-1.5 text-[0.875rem] text-ink/75"
                >
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/team" variant="outline">
                Our expertise
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
