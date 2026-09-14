import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Purrstrings handles information today — affiliate click events, contact email, and what we do not collect yet.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This page describes how {siteConfig.name} handles information in the
        current live site. It is an operational description, not attorney-approved
        legal counsel. A fuller privacy policy may still need formal legal review.
      </p>

      <h2>Affiliate click events</h2>
      <p>
        When you click certain Amazon affiliate links on Purrstrings, the site
        may send a first-party event to our own endpoint (
        <code className="text-foreground">POST /api/affiliate-event</code>
        ). Those events are stored in our database so we can understand which
        recommendations people actually click. This is first-party operational
        tracking for Purrstrings — not a third-party ad pixel.
      </p>
      <p>Event fields we may record include:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>event type (affiliate click)</li>
        <li>product ID and product name, when available</li>
        <li>merchant (currently Amazon for tracked links)</li>
        <li>page path where the click happened</li>
        <li>CTA label on the button or link</li>
        <li>destination domain (for example amzn.to)</li>
        <li>Associates tracking ID from the URL, only if present</li>
        <li>referrer, when the browser provides one</li>
        <li>
          UTM parameters (source, medium, campaign, content), when present in the
          session/attribution we captured
        </li>
      </ul>
      <p>
        We do not ask the affiliate endpoint for your email, password, IP address
        in the client payload, device fingerprint, or a personal profile. Server
        logs and hosting infrastructure may still see standard technical request
        metadata the way any website does.
      </p>

      <h2>Contact email</h2>
      <p>
        If you email{" "}
        <a className="underline hover:text-foreground" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        , we receive whatever you send in that message so we can reply.
      </p>

      <h2>Newsletter form</h2>
      <p>
        The on-site newsletter form does not currently submit addresses to an
        email provider. Until a provider is connected and disclosed here, treat
        that form as inactive for data collection.
      </p>

      <h2>Cookies, analytics, and ads</h2>
      <p>
        This version of the site does not ship a third-party analytics product or
        advertising pixel that we control and disclose here. If that changes, this
        page should be updated before or when those tools go live.
      </p>

      <h2>What we do not do with this data</h2>
      <p>
        We do not sell personal information. Affiliate click records are used to
        understand site performance and editorial interest — not to build a public
        profile of you.
      </p>

      <h2>Questions</h2>
      <p>
        Privacy questions:{" "}
        <a className="underline hover:text-foreground" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
