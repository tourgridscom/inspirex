import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="on-dark flex min-h-[80vh] items-center bg-ink py-32 text-mist-dark">
      <Container wide>
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="type-hero mt-6 max-w-[14ch] text-white">This link leads nowhere.</h1>
        <p className="measure type-lead mt-6">
          The page you asked for is not here. Start from the homepage, or go straight to what we do.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/solutions" variant="outline">
            Our solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}
