import Link from "next/link";

/**
 * The archive carried only the stock Divi placeholder logo, so the wordmark is
 * new: the "X" is drawn as two crossing traces meeting at a node, tying the
 * mark to the signal line that runs through the site.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-baseline gap-2.5 ${className}`}
      aria-label="InspireX — home"
    >
      <svg viewBox="0 0 28 28" className="h-[26px] w-[26px] shrink-0 self-center" aria-hidden="true">
        <path
          d="M4 4 24 24M24 4 4 24"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M4 4 14 14" stroke="#d35652" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3.4" fill="currentColor" />
        <circle cx="14" cy="14" r="1.5" fill="#d35652" />
      </svg>
      <span className="font-display text-[1.375rem] font-semibold tracking-[-0.03em]">
        Inspire<span className="text-signal">X</span>
      </span>
    </Link>
  );
}
