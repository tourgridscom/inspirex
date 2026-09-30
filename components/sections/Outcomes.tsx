import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { OUTCOMES } from "@/lib/content/company";

/**
 * "What you will achieve with us". These are parallel outcomes, not a
 * sequence, so they hang as nodes off one continuous rail rather than being
 * numbered or chopped into cards.
 */
export function Outcomes() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink py-24 text-mist-dark lg:py-32">
      <Image
        src="/images/server-aisle.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-[.22]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(29,76,98,.5),transparent_70%)]"
      />
      <Container wide className="relative">
        <div className="max-w-3xl">
          <Eyebrow>What you will achieve with us</Eyebrow>
          <h2 className="type-h2 mt-6 text-white">
            Our IT professionals know what turn-key delivery takes inside strict guidelines.
          </h2>
        </div>

        <div className="mt-14 lg:mt-16">
          <ul className="relative ml-[7px] border-l border-white/15 lg:ml-2">
            {OUTCOMES.map((o) => (
              <li key={o} className="group relative py-4 pl-7 sm:py-[1.375rem] sm:pl-11">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[1.5rem] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-mist-dark/50 ring-4 ring-ink transition-[background-color,transform] duration-300 group-hover:scale-125 group-hover:bg-signal sm:top-[2rem]"
                />
                <p className="measure text-[1.0625rem] leading-[1.55] text-white/85 sm:text-[1.1875rem]">{o}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
