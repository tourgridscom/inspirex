"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GROUP_IMAGES, SOLUTIONS, SOLUTION_GROUPS } from "@/lib/content/solutions";
import { cn } from "@/lib/utils/cn";

/**
 * A solutions navigator: the group list steers a single detail panel, so the
 * eleven services read as one connected practice instead of eleven cards.
 */
export function SolutionsIndex() {
  const [group, setGroup] = useState<(typeof SOLUTION_GROUPS)[number]>(SOLUTION_GROUPS[0]);
  const items = SOLUTIONS.filter((s) => s.group === group);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-16">
      <div role="tablist" aria-label="Solution areas" className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <ul className="-mx-6 flex snap-x gap-2 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 lg:block lg:space-y-0 lg:overflow-visible lg:pb-0">
          {SOLUTION_GROUPS.map((g) => {
            const selected = g === group;
            return (
              <li key={g} className="shrink-0 snap-start lg:shrink">
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setGroup(g)}
                  className={cn(
                    "relative w-full whitespace-nowrap rounded-full border px-5 py-2.5 text-left text-[0.9375rem] transition-colors duration-300 lg:whitespace-normal lg:rounded-none lg:border-0 lg:border-l-2 lg:px-0 lg:py-3.5 lg:pl-5",
                    selected
                      ? "border-signal bg-signal text-white lg:bg-transparent lg:text-ink lg:font-medium"
                      : "border-ink/15 text-mist hover:border-ink/35 hover:text-ink lg:border-rule",
                  )}
                >
                  {g}
                  <span className="ml-2 tabular-nums text-[0.8125rem] opacity-55">
                    {SOLUTIONS.filter((s) => s.group === g).length}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div role="tabpanel" aria-label={group} className="min-w-0">
        <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl bg-ink sm:aspect-[5/2]">
          <Image
            key={group}
            src={GROUP_IMAGES[group].src}
            alt={GROUP_IMAGES[group].alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
            priority={false}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
          <h2 className="absolute bottom-5 left-6 font-display text-[1.375rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.75rem]">
            {group}
          </h2>
        </div>
        <ul className="border-t border-rule">
          {items.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group grid gap-2 border-b border-rule py-6 transition-colors duration-300 hover:bg-white sm:grid-cols-[minmax(0,19rem)_1fr] sm:gap-10 sm:py-7"
              >
                <h3 className="font-display text-[1.375rem] font-semibold leading-tight tracking-[-0.022em] text-ink transition-colors duration-300 group-hover:text-signal">
                  {s.title}
                </h3>
                <p className="measure self-center text-[1.0625rem] leading-relaxed text-mist">
                  {s.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
