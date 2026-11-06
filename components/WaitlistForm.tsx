"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { waitlist } from "@/content";
import { isValidEmail } from "@/lib/email";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setStatus({ kind: "error", message: waitlist.messages.invalidEmail });
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result: { ok: boolean; error?: string } = await response.json();
      if (result.ok) {
        setStatus({ kind: "success" });
      } else {
        setStatus({
          kind: "error",
          message: result.error ?? waitlist.messages.genericError,
        });
      }
    } catch {
      setStatus({ kind: "error", message: waitlist.messages.genericError });
    }
  }

  const hasError = status.kind === "error";

  return (
    <div className="flex w-full flex-col items-center">
      {status.kind !== "success" && (
        <form
          aria-label="Pre-order"
          noValidate
          onSubmit={handleSubmit}
          className={`flex w-full max-w-[640px] flex-wrap gap-[10px] rounded-[32px] border bg-surface p-2 sm:rounded-full ${
            hasError ? "border-ink" : "border-silver"
          }`}
        >
          <label htmlFor="wl-email" className="sr-only">
            {waitlist.emailLabel}
          </label>
          <input
            id="wl-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder={waitlist.emailPlaceholder}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (hasError) setStatus({ kind: "idle" });
            }}
            aria-invalid={hasError}
            aria-describedby="wl-status"
            className="min-w-0 flex-[1_1_260px] rounded-full bg-transparent px-[22px] py-4 text-[18px] text-ink"
          />
          <button
            type="submit"
            disabled={status.kind === "submitting"}
            className="min-h-11 w-full flex-none rounded-full bg-ink px-7 py-4 text-[17px] font-bold text-white hover:bg-navy disabled:cursor-wait sm:w-auto"
          >
            {status.kind === "submitting" ? waitlist.buttonSubmitting : waitlist.button}
          </button>
        </form>
      )}

      {/* Always mounted so screen readers announce changes to it. */}
      <p
        id="wl-status"
        role="status"
        className={
          status.kind === "success"
            ? "max-w-[560px] rounded-[24px] border border-silver bg-surface px-7 py-5 text-[18px] leading-[1.5] font-semibold"
            : hasError
              ? "mt-4 text-[16px] leading-[1.5] font-semibold"
              : "sr-only"
        }
      >
        {status.kind === "success" && waitlist.messages.success}
        {status.kind === "error" && status.message}
      </p>

      {status.kind !== "success" && (
        <p className="mt-5 max-w-[640px] text-[14px] leading-[1.5] text-slate">
          {waitlist.consent.before}
          <Link href={waitlist.consent.linkHref} className="font-semibold text-ink underline">
            {waitlist.consent.linkLabel}
          </Link>
          {waitlist.consent.after}
        </p>
      )}
    </div>
  );
}
