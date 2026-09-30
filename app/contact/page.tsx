import { pageMeta } from "@/lib/utils/metadata";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE, ADDRESS_LINES } from "@/lib/constants/site";
import { JsonLd, breadcrumbs } from "@/lib/utils/jsonLd";



export const metadata = pageMeta({
  title: "Contact Us",
  description: "Reach InspireX Technologies Ltd at 100 King Street West, Suite 5700, Toronto, Ontario. Email info@inspirex.ca or send us a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink pb-24 pt-[7.5rem] text-mist-dark lg:pb-32 lg:pt-40">
      <JsonLd data={breadcrumbs([{ name: "Contact Us", path: "/contact" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact InspireX",
          url: `${SITE.domain}/contact`,
          mainEntity: { "@id": `${SITE.domain}/#organization` },
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-52 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(29,76,98,.6),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:96px_100%]"
      />

      <Container wide className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,34rem)] lg:gap-20">
          {/* ---- Left: the invitation ---- */}
          <div>
            <Eyebrow>Contact us</Eyebrow>
            <h1 className="type-hero mt-6 max-w-[11ch] text-white">Let&rsquo;s build what&rsquo;s next.</h1>
            <p className="measure type-lead mt-7">
              If you have questions, feedback, or would like to reach out to us, send us a message or
              email us directly. We will come back to you with how we would approach it.
            </p>

            <div className="mt-12 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2">
              <div>
                <h2 className="type-small font-medium uppercase tracking-[0.12em] text-white/40">
                  {SITE.legalName}
                </h2>
                <address className="mt-3 not-italic leading-relaxed text-white/85">
                  {ADDRESS_LINES.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </div>

              <div>
                <h2 className="type-small font-medium uppercase tracking-[0.12em] text-white/40">
                  Email
                </h2>
                <p className="mt-3 space-y-2">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="block text-[1.0625rem] text-white transition-colors hover:text-signal-300"
                  >
                    {SITE.email}
                  </a>
                  <span className="block text-[0.875rem] text-mist-dark">General enquiries</span>
                  <a
                    href={`mailto:${SITE.hrEmail}`}
                    className="mt-3 block text-[1.0625rem] text-white transition-colors hover:text-signal-300"
                  >
                    {SITE.hrEmail}
                  </a>
                  <span className="block text-[0.875rem] text-mist-dark">Careers and applications</span>
                </p>
              </div>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-8">
              <div>
                <dt className="text-[0.8125rem] text-white/40">CAGE</dt>
                <dd className="font-display text-[1.125rem] font-semibold text-white">87PLO</dd>
              </div>
              <div>
                <dt className="text-[0.8125rem] text-white/40">California Certified Small Business</dt>
                <dd className="font-display text-[1.125rem] font-semibold text-white">2013947</dd>
              </div>
            </dl>
          </div>

          {/* ---- Right: the form, on light so it reads as the action ---- */}
          <div className="[&_*]:[color-scheme:light]">
            <div className="rounded-3xl bg-paper p-1.5">
              <ContactForm action={SITE.email} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
