"use client";

import type { ReactNode } from "react";
import { trackContactClick } from "@/lib/wip-track";

type ContactEmailLinkProps = {
  email: string;
  children: ReactNode;
  className?: string;
};

export function ContactEmailLink({
  email,
  children,
  className,
}: ContactEmailLinkProps) {
  return (
    <a
      className={className}
      href={`mailto:${email}`}
      onClick={() => trackContactClick("contact_email_mailto")}
    >
      {children}
    </a>
  );
}
