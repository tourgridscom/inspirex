import { cn } from "@/lib/utils/cn";

export function Container({
  children,
  className,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        wide ? "max-w-[112rem]" : "max-w-[86rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
