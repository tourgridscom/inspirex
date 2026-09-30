import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS, SOLUTION_GROUPS } from "@/lib/content/solutions";

export function SolutionsPreview() {
  return (
    <section id="solutions" className="scroll-mt-24 border-b border-rule bg-paper-2 py-24 lg:py-32">
      <Container wide>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>Our solutions</Eyebrow>
            <h2 className="type-h2 mt-6 max-w-[18ch]">
              Eleven services. One accountable practice.
            </h2>
          </div>
          <Button href="/solutions" variant="outline" className="justify-self-start lg:justify-self-end">
            All solutions
          </Button>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-rule sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {SOLUTION_GROUPS.map((group) => {
            const items = SOLUTIONS.filter((s) => s.group === group);
            return (
              <div key={group} className="flex flex-col bg-paper p-7 lg:p-8">
                <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.015em] text-ink">
                  {group}
                </h3>
                <ul className="mt-5 flex-1 space-y-3 border-t border-rule pt-5">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/solutions/${s.slug}`}
                        className="group flex items-start gap-2.5 text-[0.9375rem] leading-snug text-mist transition-colors hover:text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-mist/50 transition-colors group-hover:bg-signal"
                        />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
