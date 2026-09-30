import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE } from "@/lib/constants/site";

export function CtaBand({
  eyebrow = "Start a conversation",
  title = "Let’s build what’s next.",
  lead = "Tell us what you are trying to protect, modernize or staff. We will tell you how we would approach it.",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-ink-800 py-20 text-mist-dark lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent"
      />
      <Container wide>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="type-h2 mt-5 max-w-[14ch] text-white">{title}</h2>
          </div>
          <div>
            <p className="measure text-[1.0625rem] leading-relaxed">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Contact us</Button>
              <Button href={`mailto:${SITE.email}`} variant="outline">
                {SITE.email}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
