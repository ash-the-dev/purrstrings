import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Placeholder terms of use for Purrstrings. Requires legal review.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        These placeholder terms describe how we intend the site to work. They
        are not legal advice and are not ready for production use.
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
        Some links may generate a commission. See the affiliate disclosure for
        the current explanation. Retailer terms apply to any purchase you make
        off-site.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The {siteConfig.name} name, wordmark, and original writing on this
        site belong to their owner. Placeholder photography is credited as
        such and should be replaced or properly licensed before launch.
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
