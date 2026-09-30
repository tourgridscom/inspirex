import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { FOOTER_NAV } from "@/lib/content/nav";
import { ADDRESS_LINES, SITE } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-ink text-mist-dark">
      {/* The signal line terminates here. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent" />

      <Container wide>
        <div className="grid gap-14 pb-14 pt-20 lg:grid-cols-[1.15fr_2fr] lg:gap-20 lg:pb-16 lg:pt-28">
          <div>
            <Logo className="text-white" />
            <p className="measure-tight mt-6 text-[1.0625rem] leading-relaxed text-mist-dark">
              A full range of IT consulting and staffing services and solutions that let clients
              operate in a highly efficient, secure and effective manner.
            </p>

            <address className="mt-8 not-italic">
              <p className="type-small font-medium uppercase tracking-[0.12em] text-white/40">
                {SITE.legalName}
              </p>
              <p className="mt-2 leading-relaxed text-white/80">
                {ADDRESS_LINES.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-block border-b border-signal/50 pb-0.5 text-white transition-colors hover:border-signal hover:text-signal-300"
              >
                {SITE.email}
              </a>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(FOOTER_NAV).map(([heading, links]) => (
              <nav key={heading} aria-label={heading}>
                <h2 className="type-small border-b border-white/10 pb-3 font-medium uppercase tracking-[0.12em] text-white/40">
                  {heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.9375rem] text-white/70 transition-colors hover:text-signal-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/45">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/45">
            <span>CAGE 87PLO</span>
            <span>California Certified Small Business 2013947</span>
            <a href={`mailto:${SITE.hrEmail}`} className="transition-colors hover:text-signal-300">
              {SITE.hrEmail}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
