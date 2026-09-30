import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  eyebrow,
  title,
  lead,
  aside,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  aside?: React.ReactNode;
  /** Optional backdrop photograph, held well back behind the type. */
  image?: { src: string; alt: string };
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-ink pb-20 pt-[8.5rem] text-mist-dark sm:pb-24 lg:pb-28 lg:pt-44">
      {image && (
        <>
          <Image
            src={image.src}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55"
          />
        </>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-56 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(29,76,98,.65),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[.5] [background-image:linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:96px_100%]"
      />
      <Container wide className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="type-hero mt-6 max-w-[16ch] text-white">{title}</h1>
          </div>
          {lead && (
            <div className="lg:pb-3">
              <p className="measure type-lead border-l border-white/15 pl-6 text-mist-dark">{lead}</p>
              {aside}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
