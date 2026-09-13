"use client";

import { FormEvent, useState } from "react";
import { trackContactClick } from "@/lib/wip-track";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackContactClick("contact_form_submit");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        role="status"
        className="mt-10 text-sm leading-relaxed text-foreground"
      >
        Coming soon. Your inbox remains safe for now. If it is urgent, use the
        email address on this page.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          className="mt-2 h-12 w-full border border-border bg-surface px-4 text-base outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 h-12 w-full border border-border bg-surface px-4 text-base outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full border border-border bg-surface px-4 py-3 text-base outline-none focus-visible:border-accent"
        />
      </div>
      <button
        type="submit"
        className="h-12 bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-hover"
      >
        Send
      </button>
    </form>
  );
}
