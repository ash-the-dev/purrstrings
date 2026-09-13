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
    <section className="border-t border-black/10 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-24">
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em]">
            <span className="border-b-2 border-baby-pink pb-0.5">The list</span>
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-balance sm:text-5xl">
            Your cat doesn’t need another newsletter. You might.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            New favorites worth buying, guides when you’re mid-decision, and the
            occasional ridiculous cat thing — without daily inbox harassment.
          </p>
        </div>

        {status === "submitted" ? (
          <p role="status" className="text-sm leading-relaxed">
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
              className="h-12 flex-1 border-b border-foreground bg-transparent px-0 text-base outline-none"
            />
            <button
              type="submit"
              className="h-12 shrink-0 bg-foreground px-6 text-sm font-bold tracking-wide text-background"
            >
              Join the List
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
