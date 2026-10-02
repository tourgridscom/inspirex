"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils/cn";

/**
 * The lead data services, shown working: a numbered step rail steers a
 * sample record set through profiling, cleaning, enrichment and delivery.
 * The records are illustrative, not client data.
 */

const STEPS = [
  {
    term: "Profile",
    title: "Find every problem first.",
    detail:
      "Each record is scored for completeness, consistency and validity before a single value changes.",
    points: [
      ["Quality scoring.", "One number for the whole data set, and one per record."],
      ["Issue map.", "Duplicates, bad formats and missing values flagged in place."],
    ],
  },
  {
    term: "Clean",
    title: "Fix it at the source.",
    detail:
      "Duplicates are merged, formats standardized and invalid values corrected under rules you approve.",
    points: [
      ["Match and merge.", "Near-duplicates resolve to one trusted record."],
      ["Validated contacts.", "Emails and phone numbers checked, not just reformatted."],
    ],
  },
  {
    term: "Enrich",
    title: "Fill in what is missing.",
    detail:
      "Verified attributes from trusted sources complete each profile: industry, size, location and contacts.",
    points: [
      ["Appended, not guessed.", "Every new value carries its source."],
      ["Geocoded.", "Addresses verified down to the postal code."],
    ],
  },
  {
    term: "Deliver",
    title: "Put it back to work.",
    detail:
      "Clean, enriched records load into SAP, ERP or CRM, with quality rules that keep them that way.",
    points: [
      ["Matched first.", "Existing records update; nothing is duplicated on load."],
      ["Kept current.", "Scheduled refresh and monitoring after go-live."],
    ],
  },
] as const;

type Flag = "format" | "invalid" | "missing" | "duplicate";
type Cell = { v: string; flag?: Flag; added?: boolean };
type Row = {
  id: number;
  raw: Cell[];
  clean: Cell[] | "merged";
  enrich: [string, string, string];
};

const ROWS: Row[] = [
  {
    id: 1,
    raw: [
      { v: "acme industrial ltd.", flag: "format" },
      { v: "TORONTO, on", flag: "format" },
      { v: "j.smith@acme", flag: "invalid" },
    ],
    clean: [{ v: "Acme Industrial Ltd." }, { v: "Toronto, ON" }, { v: "j.smith@acmeindustrial.ca" }],
    enrich: ["Manufacturing", "250–500", "M5V 2T6"],
  },
  {
    id: 2,
    raw: [
      { v: "ACME Industrial Limited", flag: "duplicate" },
      { v: "Toronto" },
      { v: "j.smith@acmeindustrial.ca" },
    ],
    clean: "merged",
    enrich: ["", "", ""],
  },
  {
    id: 3,
    raw: [{ v: "Birchline Foods" }, { v: "calgary AB", flag: "format" }, { v: "ops@birchline.ca" }],
    clean: [{ v: "Birchline Foods" }, { v: "Calgary, AB" }, { v: "ops@birchline.ca" }],
    enrich: ["Food & Beverage", "50–100", "T2P 1J9"],
  },
  {
    id: 4,
    raw: [{ v: "  harbourview medical", flag: "format" }, { v: "Halifax" }, { v: "", flag: "missing" }],
    clean: [{ v: "Harbourview Medical" }, { v: "Halifax, NS" }, { v: "", flag: "missing" }],
    enrich: ["Healthcare", "100–250", "B3J 1S9"],
  },
  {
    id: 5,
    raw: [
      { v: "Kestrel Energy Inc" },
      { v: "Edmonton, Alberta", flag: "format" },
      { v: "info@kestrel", flag: "invalid" },
    ],
    clean: [{ v: "Kestrel Energy Inc." }, { v: "Edmonton, AB" }, { v: "info@kestrelenergy.ca" }],
    enrich: ["Energy", "1,000+", "T5J 3N4"],
  },
];

const SUMMARY = [
  { label: "Profiling 5 records", stat: "Quality score 54%", note: "9 issues found" },
  { label: "Cleaning 5 records", stat: "Quality score 96%", note: "1 duplicate merged · 7 values fixed" },
  { label: "Enriching 4 records", stat: "13 attributes appended", note: "1 contact recovered" },
  { label: "Delivering 4 records", stat: "Synced to SAP S/4HANA", note: "4 updated · 0 duplicated" },
];

const FLAG_STYLE: Record<Flag, { label: string; className: string }> = {
  format: { label: "Format", className: "bg-amber-50 text-amber-700 ring-amber-200" },
  invalid: { label: "Invalid", className: "bg-signal/10 text-signal-600 ring-signal/25" },
  missing: { label: "Missing", className: "bg-signal/10 text-signal-600 ring-signal/25" },
  duplicate: { label: "Duplicate", className: "bg-violet-50 text-violet-700 ring-violet-200" },
};

const COLUMNS = ["Company", "City", "Email"];
const ENRICH_COLUMNS = ["Industry", "Employees", "Postal code"];

export function DataPipeline() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setStep((s) => (s + 1) % STEPS.length), 5200);
    return () => window.clearInterval(t);
  }, [auto]);

  function choose(i: number) {
    setAuto(false);
    setStep(i);
  }

  return (
    <section id="data-services" className="scroll-mt-24 border-b border-rule bg-paper py-24 lg:py-32">
      <Container wide>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>Featured services</Eyebrow>
            <h2 className="type-h2 mt-6 max-w-[20ch]">Data cleaning and enrichment, done properly.</h2>
            <p className="measure mt-5 text-[1.0625rem] leading-relaxed text-mist">
              Profile, clean, enrich and deliver one trusted record set to the systems that run your
              business.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ServiceLink href="/solutions/data-cleaning">Data cleaning</ServiceLink>
            <ServiceLink href="/solutions/data-enrichment">Data enrichment</ServiceLink>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14">
          {/* Step rail */}
          <div role="tablist" aria-label="Data pipeline steps" className="space-y-2">
            {STEPS.map((s, i) => {
              const active = i === step;
              return (
                <button
                  key={s.term}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="data-pipeline-panel"
                  onClick={() => choose(i)}
                  className={cn(
                    "relative block w-full rounded-xl py-4 pl-6 pr-4 text-left transition-colors duration-300",
                    active ? "bg-white shadow-[0_1px_0_rgba(10,29,40,.04),0_12px_32px_-20px_rgba(10,29,40,.35)]" : "hover:bg-white/60",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-3 left-0 w-[3px] rounded-full transition-colors duration-300",
                      active ? "bg-signal" : "bg-rule",
                    )}
                  />
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-[0.8125rem] font-semibold tabular-nums text-mist">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display text-[1.25rem] font-semibold tracking-[-0.02em] transition-colors",
                        active ? "text-ink" : "text-mist",
                      )}
                    >
                      {s.term}
                    </span>
                  </span>
                  {active && (
                    <span className="mt-2 block" style={{ animation: "rise .35s cubic-bezier(.22,1,.36,1) both" }}>
                      <span className="block font-display text-[1.0625rem] font-medium text-ink">{s.title}</span>
                      <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-mist">{s.detail}</span>
                      <span className="mt-3 block space-y-1.5">
                        {s.points.map(([b, rest]) => (
                          <span key={b} className="block text-[0.875rem] leading-snug text-body">
                            <strong className="font-semibold text-ink">{b}</strong> {rest}
                          </span>
                        ))}
                      </span>
                    </span>
                  )}
                  {active && auto && (
                    <span aria-hidden="true" className="absolute inset-x-6 bottom-0 h-px overflow-hidden bg-rule">
                      <span
                        key={step}
                        className="block h-full origin-left bg-signal/60"
                        style={{ animation: "pipeline-progress 5.2s linear both" }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Working panel */}
          <div
            id="data-pipeline-panel"
            role="tabpanel"
            aria-label={`${STEPS[step].term} step, sample records`}
            className="min-w-0 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_30px_60px_-36px_rgba(10,29,40,.45)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-paper-2/60 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                </span>
                <span className="ml-2 text-[0.875rem] font-medium text-ink">Supplier master</span>
              </div>
              <span className="text-[0.8125rem] tabular-nums text-mist">Sample data</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 border-b border-rule px-5 py-3.5">
              {SUMMARY.slice(0, step + 1).map((s, i) => (
                <span
                  key={s.label}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.75rem] ring-1",
                    i === step ? "bg-ink text-white ring-ink" : "bg-white text-mist ring-rule",
                  )}
                >
                  <Check className={i === step ? "text-signal-300" : "text-emerald-600"} />
                  {s.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 pb-1 pt-4">
              <span className="font-display text-[1.125rem] font-semibold tracking-[-0.015em] text-ink">
                {SUMMARY[step].stat}
              </span>
              <span className="text-[0.875rem] text-mist">{SUMMARY[step].note}</span>
            </div>

            <div className="overflow-x-auto px-2 pb-3 sm:px-3">
              <table className="w-full min-w-[52rem] border-separate border-spacing-0 text-left text-[0.8125rem]">
                <thead>
                  <tr className="text-mist">
                    {COLUMNS.map((c) => (
                      <th key={c} className="whitespace-nowrap border-b border-rule px-3 py-3 font-medium">
                        {c}
                      </th>
                    ))}
                    {ENRICH_COLUMNS.map((c) => (
                      <th
                        key={c}
                        className={cn(
                          "whitespace-nowrap border-b border-rule px-3 py-3 font-medium transition-colors duration-500",
                          step >= 2 ? "bg-signal/[.04] text-ink" : "text-mist/50",
                        )}
                      >
                        {c}
                        {step >= 2 && <span className="ml-1 text-signal">+</span>}
                      </th>
                    ))}
                    <th className="border-b border-rule px-3 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => {
                    const merged = step >= 1 && r.clean === "merged";
                    const cells = step === 0 || r.clean === "merged" ? r.raw : r.clean;
                    const recovered = step >= 2 && r.id === 4;
                    return (
                      <tr key={r.id} className={cn("transition-opacity duration-500", merged && "opacity-45")}>
                        {cells.map((c, ci) => {
                          const isRecovered = recovered && ci === 2;
                          const flag = isRecovered ? undefined : c.flag;
                          const showFlag = flag && (step === 0 || flag === "missing");
                          return (
                            <td
                              key={ci}
                              className={cn(
                                "max-w-[14rem] border-b border-rule px-3 py-3 align-middle",
                                merged ? "text-mist line-through" : "text-body",
                              )}
                            >
                              <span className="flex items-center gap-2">
                                <span className="truncate whitespace-pre">
                                  {isRecovered ? "admin@harbourviewmed.ca" : c.v || <span className="text-mist/60">empty</span>}
                                </span>
                                {showFlag && !merged && <FlagChip flag={flag} />}
                                {(isRecovered || (step >= 1 && !merged && ci === 2 && c.v)) && (
                                  <Check className="shrink-0 text-emerald-600" />
                                )}
                              </span>
                            </td>
                          );
                        })}
                        {r.enrich.map((e, ei) => (
                          <td
                            key={ei}
                            className={cn(
                              "whitespace-nowrap border-b border-rule px-3 py-3 align-middle",
                              step >= 2 && "bg-signal/[.04]",
                            )}
                          >
                            {step >= 2 && !merged ? (
                              <span
                                className="block text-ink"
                                style={{ animation: `rise .4s cubic-bezier(.22,1,.36,1) ${r.id * 70 + ei * 40}ms both` }}
                              >
                                {e}
                              </span>
                            ) : (
                              <span aria-hidden="true" className="block h-1.5 w-12 rounded-full bg-rule/70" />
                            )}
                          </td>
                        ))}
                        <td className="border-b border-rule px-3 py-3 align-middle">
                          <Status step={step} row={r} merged={merged} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Status({ step, row, merged }: { step: number; row: Row; merged: boolean }) {
  if (merged) return <Pill className="bg-violet-50 text-violet-700 ring-violet-200">Merged → 1</Pill>;
  if (step === 0) {
    const issues = row.raw.filter((c) => c.flag).length;
    return issues ? (
      <Pill className="bg-signal/10 text-signal-600 ring-signal/25">
        {issues} issue{issues > 1 ? "s" : ""}
      </Pill>
    ) : (
      <Pill className="bg-emerald-50 text-emerald-700 ring-emerald-200">Valid</Pill>
    );
  }
  if (step === 1) {
    return row.id === 4 ? (
      <Pill className="bg-amber-50 text-amber-700 ring-amber-200">Needs email</Pill>
    ) : (
      <Pill className="bg-emerald-50 text-emerald-700 ring-emerald-200">Clean</Pill>
    );
  }
  if (step === 2) {
    return (
      <span className="flex items-center gap-2">
        <span className="h-1 w-14 overflow-hidden rounded-full bg-rule">
          <span
            className="block h-full origin-left rounded-full bg-signal"
            style={{ animation: `pipeline-progress .9s cubic-bezier(.22,1,.36,1) ${row.id * 90}ms both` }}
          />
        </span>
        <span className="text-[0.75rem] text-ink">Enriched</span>
      </span>
    );
  }
  return <Pill className="bg-ink text-white ring-ink">Synced</Pill>;
}

function Pill({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span className={cn("inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-[0.75rem] font-medium ring-1", className)}>
      {children}
    </span>
  );
}

function FlagChip({ flag }: { flag: Flag }) {
  const f = FLAG_STYLE[flag];
  return (
    <span className={cn("shrink-0 rounded px-1.5 py-px text-[0.6875rem] font-medium ring-1", f.className)}>{f.label}</span>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={cn("h-3.5 w-3.5", className)}>
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[0.9375rem] font-medium text-white transition-colors hover:bg-ink-700"
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
