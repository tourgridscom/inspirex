import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SignalTrace } from "./SignalTrace";
import { HeroVideo } from "./HeroVideo";
import { PILLARS } from "@/lib/content/company";

export function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink text-mist-dark">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:96px_100%]"
      />

      <Container wide className="relative">
        <div className="grid items-center gap-10 pt-[7rem] lg:grid-cols-[1.08fr_1fr] lg:gap-14 lg:pt-36">
          <div>
            <Eyebrow>Canadian IT consulting, security and staffing</Eyebrow>

            <h1 className="type-hero mt-6 max-w-[13ch] text-white">
              Technology that never interrupts the business.
            </h1>

            <p className="measure type-lead mt-6 text-mist-dark">
              InspireX provides a full range of IT consulting and staffing services and solutions
              that enable clients to operate in a highly efficient, secure and effective manner &mdash;
              custom-tailored to each client&rsquo;s operational requirements.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact">Book a consultation</Button>
              <Button href="/solutions" variant="outline">
                Explore our solutions
              </Button>
            </div>
          </div>

          {/* The company's own footage, with the monitoring signal read out
              beneath it rather than over the picture. */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
            <div className="relative aspect-video lg:aspect-[16/10]">
              <HeroVideo />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25"
              />
            </div>
            <div className="border-t border-white/10">
              <SignalTrace variant="strip" className="h-14 w-full" />
            </div>
            <p className="type-small border-t border-white/10 px-5 py-3 text-white/45">
              Continuous monitoring keeps the line unbroken.
            </p>
          </div>
        </div>

        {/* The four capability pillars, running the full width beneath both columns. */}
        <dl className="mt-12 grid gap-x-10 gap-y-7 border-t border-white/10 pb-16 pt-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:pb-24">
          {PILLARS.map((p) => (
            <div key={p.name}>
              <dt className="font-display text-[1.0625rem] font-medium tracking-[-0.015em] text-white">
                {p.name}
              </dt>
              <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-mist-dark/85">
                {p.detail}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
