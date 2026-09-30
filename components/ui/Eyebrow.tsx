import { cn } from "@/lib/utils/cn";

/**
 * A short positioning line tied to the signal rule rather than set as a
 * tracked-out all-caps label.
 */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-start gap-3 text-[0.9375rem] text-mist [.on-dark_&]:text-mist-dark", className)}>
      <span aria-hidden="true" className="mt-[0.72em] h-px w-9 shrink-0 bg-signal" />
      {children}
    </p>
  );
}
