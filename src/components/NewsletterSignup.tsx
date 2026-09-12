"use client";

import { FormEvent, useId, useState } from "react";

export function NewsletterSignup() {
  const inputId = useId();
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  return (
    <section className="border-y border-border bg-tan">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The list
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl">
            Your cat doesn’t need another newsletter. You might.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Occasional product finds, useful guides, ridiculous cat things, and
            zero daily inbox harassment.
          </p>
        </div>

        {status === "submitted" ? (
          <p
            role="status"
            className="border border-accent/30 bg-surface px-5 py-4 text-sm leading-relaxed text-foreground"
          >
            Coming soon. Your inbox remains safe for now.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor={inputId} className="sr-only">
              Email address
            </label>
            <input
              id={inputId}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="h-12 flex-1 border border-border bg-surface px-4 text-base text-foreground outline-none placeholder:text-muted/80 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
            />
            <button
              type="submit"
              className="h-12 shrink-0 bg-accent px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-hover"
            >
              Join the List
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
