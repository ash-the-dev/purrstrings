import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Placeholder privacy policy for Purrstrings. Requires legal review.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This is placeholder language for {siteConfig.name}. It is not a
        finished privacy policy.
      </p>
      <h2>Information we expect to collect later</h2>
      <p>
        If you join the email list, we will collect the address you provide.
        The current form does not send data to a provider. Analytics,
        advertising cookies, and newsletter tools may be added later and must
        be disclosed here before they go live.
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        This version of the site does not ship a third-party analytics or ad
        pixel. When that changes, update this page, your cookie consent
        approach if required, and the vendor list.
      </p>
      <h2>Contact</h2>
      <p>
        Privacy questions can go to{" "}
        <a className="underline hover:text-foreground" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        until a dedicated address exists.
      </p>
    </LegalPage>
  );
}
