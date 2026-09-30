"use client";

import { useId, useRef, useState } from "react";
import { SOLUTIONS } from "@/lib/content/solutions";
import { cn } from "@/lib/utils/cn";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name) errors.name = "Enter your name so we know who we are replying to.";
  if (!email) errors.email = "Enter an email address we can reply to.";
  else if (!EMAIL_RE.test(email)) errors.email = "That email address is not complete. Check for a typo.";
  if (!message) errors.message = "Tell us what you need, even in one line.";
  else if (message.length < 12) errors.message = "Add a little more detail so we can route your message.";

  return errors;
}

export function ContactForm({ action }: { action: string }) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);

    const firstInvalid = (["name", "email", "message"] as const).find((k) => found[k]);
    if (firstInvalid) {
      // Focus by name: aria-invalid is not on the DOM until React re-renders.
      const field = form.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    // No backend is configured, so the message is handed to the visitor's mail
    // client addressed to the company inbox recovered from the archive.
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("company") ? `Company: ${data.get("company")}` : null,
      data.get("phone") ? `Phone: ${data.get("phone")}` : null,
      data.get("interest") ? `Area of interest: ${data.get("interest")}` : null,
      "",
      String(data.get("message")),
    ].filter(Boolean);

    const href =
      `mailto:${action}` +
      `?subject=${encodeURIComponent(`Enquiry from ${data.get("name")}`)}` +
      `&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = href;
    setSent(true);
  }

  const fieldClass = (invalid?: boolean) =>
    cn(
      "w-full rounded-xl border bg-white px-4 py-3 text-[1rem] text-ink transition-colors duration-200",
      "placeholder:text-mist/60 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/25",
      invalid ? "border-signal" : "border-rule hover:border-ink/25",
    );

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-rule bg-white p-8"
      >
        <div
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-signal/10"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
            <path d="M4 10.5l4 4 8-9" stroke="#d35652" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="type-h3 mt-5 text-[1.5rem]">Your message is ready to send.</h2>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-mist">
          We opened your email app with the details filled in. Send it and we will get back to you.
          If nothing opened, email us directly at{" "}
          <a
            href={`mailto:${action}`}
            className="border-b border-signal/50 pb-px text-ink transition-colors hover:border-signal hover:text-signal"
          >
            {action}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            formRef.current?.reset();
          }}
          className="mt-6 text-[0.9375rem] text-ink underline decoration-signal/50 underline-offset-4 transition-colors hover:decoration-signal"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl border border-rule bg-paper-2/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${id}-name`}
          name="name"
          label="Name"
          required
          error={errors.name}
          className={fieldClass(!!errors.name)}
          autoComplete="name"
        />
        <Field
          id={`${id}-email`}
          name="email"
          type="email"
          label="Email"
          required
          error={errors.email}
          className={fieldClass(!!errors.email)}
          autoComplete="email"
        />
        <Field
          id={`${id}-company`}
          name="company"
          label="Company"
          className={fieldClass()}
          autoComplete="organization"
        />
        <Field
          id={`${id}-phone`}
          name="phone"
          type="tel"
          label="Phone"
          className={fieldClass()}
          autoComplete="tel"
        />
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-interest`} className="mb-1.5 block text-[0.9375rem] font-medium text-ink">
          Area of interest
        </label>
        <select id={`${id}-interest`} name="interest" defaultValue="" className={fieldClass()}>
          <option value="">Select a solution</option>
          {SOLUTIONS.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-message`} className="mb-1.5 block text-[0.9375rem] font-medium text-ink">
          Message <span className="text-signal">*</span>
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={cn(fieldClass(!!errors.message), "resize-y")}
        />
        {errors.message && (
          <p id={`${id}-message-error`} className="mt-1.5 text-[0.875rem] text-signal-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-signal px-6 py-3.5 font-medium text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-signal-600"
      >
        Send message
      </button>
      <p className="mt-4 text-[0.8125rem] leading-relaxed text-mist">
        Required fields are marked with an asterisk. We use your details only to reply to your enquiry.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  error,
  className,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  className: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[0.9375rem] font-medium text-ink">
        {label} {required && <span className="text-signal">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={className}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[0.875rem] text-signal-600">
          {error}
        </p>
      )}
    </div>
  );
}
