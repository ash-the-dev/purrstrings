import { siteConfig } from "@/data/site";

type AffiliateDisclosureProps = {
  className?: string;
};

export function AffiliateDisclosure({ className = "" }: AffiliateDisclosureProps) {
  return (
    <p className={`text-sm leading-relaxed text-muted ${className}`}>
      {siteConfig.affiliateDisclosure}{" "}
      <a href="/affiliate-disclosure" className="underline decoration-border underline-offset-2 hover:text-foreground">
        Read the full disclosure
      </a>
      .
    </p>
  );
}
