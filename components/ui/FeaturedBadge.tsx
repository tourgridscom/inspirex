import { cn } from "@/lib/utils/cn";

/** Marks a featured service wherever solutions are listed. */
export function FeaturedBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full bg-signal px-2 py-0.5 align-middle font-sans text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.08em] text-white",
        className,
      )}
    >
      Featured
    </span>
  );
}
