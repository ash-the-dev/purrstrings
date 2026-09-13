"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackContactClick } from "@/lib/wip-track";

type ContactCtaLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  source: string;
};

/** Internal/external contact CTA that fires Commit Happens `contact_click`. */
export function ContactCtaLink({
  href,
  className,
  children,
  source,
}: ContactCtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackContactClick(source)}
    >
      {children}
    </Link>
  );
}
