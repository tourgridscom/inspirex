import Link from "next/link";
import { FeaturedBadge } from "@/components/ui/FeaturedBadge";
import { SOLUTIONS } from "@/lib/content/solutions";

/** The lead services, given full-width cards ahead of the rest of the practice. */
export function FeaturedServices() {
  const featured = SOLUTIONS.filter((s) => s.featured);

  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {featured.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/solutions/${s.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink p-8 text-white transition-transform duration-300 hover:-translate-y-0.5 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(211,86,82,.35),transparent_68%)]"
            />
            <div className="relative flex items-center gap-3">
              <FeaturedBadge />
              <span className="type-small text-mist-dark">{s.group}</span>
            </div>
            <h3 className="relative mt-6 text-white font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] lg:text-[2.125rem]">
              {s.title}
            </h3>
            <p className="relative mt-4 max-w-[46ch] text-[1.0625rem] leading-relaxed text-mist-dark">
              {s.summary}
            </p>
            {s.capabilities && (
              <ul className="relative mt-7 grid gap-x-6 gap-y-2.5 border-t border-white/10 pt-6 sm:grid-cols-2">
                {s.capabilities.slice(0, 4).map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-white/80">
                    <span aria-hidden="true" className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {c}
                  </li>
                ))}
              </ul>
            )}
            <span className="relative mt-auto inline-flex items-center gap-2 pt-8 text-[0.9375rem] font-medium text-white">
              Explore {s.short.toLowerCase()}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
