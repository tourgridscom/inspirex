import { Container } from "@/components/ui/Container";
import { PRINCIPLES } from "@/lib/content/company";

/**
 * The five principles, set as a horizontal run on the rule rather than five
 * identical cards.
 */
export function Principles() {
  return (
    <section className="border-b border-rule bg-paper py-16 lg:py-20">
      <Container wide>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start lg:gap-16">
          <h2 className="type-lead font-display font-medium tracking-[-0.02em] text-ink">
            Five principles that ensure successful outcomes.
          </h2>
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-5 xl:gap-x-6">
            {PRINCIPLES.map((p) => (
              <li key={p.name} className="border-t border-ink/15 pt-4">
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink">{p.name}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-mist">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
