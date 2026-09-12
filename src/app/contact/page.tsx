import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Purrstrings about partnerships, corrections, or press.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Contact
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        Write us. We read things.
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted">
        Partnerships, corrections, press, or a product you think we should look
        at. This form is front-end only for now. Until it is wired up, email{" "}
        <a className="underline decoration-border underline-offset-2 hover:text-foreground" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>
      <ContactForm />
    </article>
  );
}
