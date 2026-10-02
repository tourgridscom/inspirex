"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { FeaturedBadge } from "@/components/ui/FeaturedBadge";
import { NAV } from "@/lib/content/nav";
import { SOLUTION_GROUPS, SOLUTIONS } from "@/lib/content/solutions";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open menu when the route changes, adjusted during render
  // rather than in an effect so no extra paint shows the stale menu.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  const hoverOpen = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-400",
        scrolled || mobileOpen || open
          ? "border-b border-white/10 bg-ink shadow-[0_1px_0_0_rgba(255,255,255,.06),0_18px_40px_-24px_rgba(0,0,0,.9)]"
          : "border-b border-transparent bg-transparent",
      )}
      onMouseLeave={hoverClose}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:z-50 focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Container wide>
        <div className="flex h-[72px] items-center justify-between gap-6 text-white lg:h-[84px]">
          <Logo className="text-white" />

          <nav aria-label="Main" className="hidden lg:flex lg:items-center lg:gap-1">
            {NAV.map((item) => {
              const active = isActive(item.href);
              const expanded = open === item.label;
              return (
                <div key={item.label} className="relative" onMouseEnter={() => item.children && hoverOpen(item.label)}>
                  <Link
                    href={item.href}
                    aria-expanded={item.children ? expanded : undefined}
                    aria-controls={item.children ? `${menuId}-${item.label}` : undefined}
                    onFocus={() => item.children && hoverOpen(item.label)}
                    className={cn(
                      "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.9375rem] transition-colors duration-200",
                      active ? "text-white" : "text-white/70 hover:text-white",
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        viewBox="0 0 10 6"
                        className={cn("h-[5px] w-[9px] transition-transform duration-300", expanded && "rotate-180")}
                        aria-hidden="true"
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                      </svg>
                    )}
                    <span
                      className={cn(
                        "absolute inset-x-4 -bottom-px h-px origin-left bg-signal transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-signal px-5 py-2.5 text-[0.9375rem] font-medium text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-signal-600 sm:inline-flex"
            >
              Contact us
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls={`${menuId}-mobile`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d={mobileOpen ? "M5 5l14 14M19 5L5 19" : "M3 7h18M3 17h18"}
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* ---- Mega menu ---- */}
      {NAV.filter((n) => n.children).map((item) => {
        const expanded = open === item.label;
        const isSolutions = item.label === "Solutions";
        return (
          <div
            key={item.label}
            id={`${menuId}-${item.label}`}
            hidden={!expanded}
            onMouseEnter={() => hoverOpen(item.label)}
            className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-ink shadow-[0_24px_48px_-28px_rgba(0,0,0,.9)] lg:block"
            style={
              expanded
                ? { animation: "rise .28s cubic-bezier(.22,1,.36,1) both" }
                : { display: "none" }
            }
          >
            <Container wide>
              <div className="py-9">
                {isSolutions ? (
                  <div className="grid grid-cols-5 gap-x-6 gap-y-7">
                    {SOLUTION_GROUPS.map((group) => (
                      <div key={group}>
                        <p className="type-small mb-3 border-b border-white/10 pb-2.5 font-medium text-signal-300">
                          {group}
                        </p>
                        <ul className="space-y-0.5">
                          {SOLUTIONS.filter((s) => s.group === group).map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/solutions/${s.slug}`}
                                className="block rounded-lg px-2.5 py-1.5 text-[0.9375rem] text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                              >
                                {s.title}
                                {s.featured && <FeaturedBadge className="ml-2" />}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-[minmax(0,1fr)_2fr] gap-12">
                    <div>
                      <h2 className="type-h3 text-white">About InspireX</h2>
                      <p className="measure-tight mt-3 text-[0.9375rem] text-mist-dark">
                        A full range of IT consulting and staffing services, built on five principles.
                      </p>
                      <Link
                        href="/about"
                        className="mt-5 inline-block border-b border-signal pb-0.5 text-[0.9375rem] text-white transition-colors hover:text-signal-300"
                      >
                        Read the full story
                      </Link>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-1 self-start">
                      {item.children!.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                          >
                            <span className="block text-[0.9375rem] text-white">{c.label}</span>
                            {c.hint && <span className="type-small block text-mist-dark">{c.hint}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Container>
          </div>
        );
      })}

      {/* ---- Mobile ---- */}
      <div
        id={`${menuId}-mobile`}
        hidden={!mobileOpen}
        className="h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-ink lg:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="pb-12 pt-5">
            <ul className="divide-y divide-white/10">
              {NAV.map((item) => (
                <li key={item.label} className="py-1">
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-3 font-display text-[1.375rem] tracking-[-0.02em]",
                      isActive(item.href) ? "text-signal" : "text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="-mt-1 mb-3 space-y-0.5 border-l border-white/15 pl-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-1.5 text-[0.9375rem] text-white/65">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-signal px-6 py-3.5 font-medium text-white"
            >
              Contact us
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
