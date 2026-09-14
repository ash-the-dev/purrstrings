import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "How Purrstrings works as an editorial site — general information, affiliate links, and contact. Formal legal review may still be needed.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        These terms describe how we intend {siteConfig.name} to work. They are
        general information, not legal advice, and may still need formal legal
        review.
      </p>
      <h2>The site</h2>
      <p>
        {siteConfig.name} publishes editorial information about cat products
        and related topics. Content is for general information. It is not
        veterinary advice, and it is not a promise that any product will work
        for every cat or every home.
      </p>
      <h2>Affiliate links</h2>
      <p>
        Some links may generate a commission. See the{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-foreground">
          affiliate disclosure
        </Link>{" "}
        for the current explanation, including Amazon Associates identification.
        Retailer terms apply to any purchase you make off-site.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The {siteConfig.name} name, wordmark, and original writing on this site
        belong to their owner. Third-party product images and other licensed or
        linked materials remain subject to their owners’ rights.
      </p>
      <h2>Contact</h2>
      <p>
        Questions:{" "}
        <a className="underline hover:text-foreground" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
