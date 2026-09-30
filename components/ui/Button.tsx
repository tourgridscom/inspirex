import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[0.9375rem] font-medium " +
  "transition-[transform,background-color,border-color,color] duration-300 ease-[cubic-bezier(.22,1,.36,1)] " +
  "hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary: "bg-signal text-white hover:bg-signal-600",
  outline:
    "border border-ink/20 text-ink hover:border-ink/45 [.on-dark_&]:border-white/25 [.on-dark_&]:text-white [.on-dark_&]:hover:border-white/55 [.on-dark_&]:hover:bg-white/5",
  ghost: "text-ink hover:text-signal [.on-dark_&]:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  const external = href.startsWith("mailto:") || href.startsWith("http");
  const cls = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
