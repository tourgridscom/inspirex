import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { WHO_WE_ARE } from "@/lib/content/company";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-24 bg-paper py-24 lg:py-32">
      <Container wide>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="type-h2 mt-6">
              Built to blend
              <br /> with your operation.
            </h2>
          </div>

          <div className="lg:pt-3">
            <div className="measure space-y-6 text-[1.125rem] leading-[1.7]">
              {WHO_WE_ARE.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-9">
              <Button href="/about" variant="outline">
                About InspireX
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
