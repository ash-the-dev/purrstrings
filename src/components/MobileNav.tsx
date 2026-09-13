"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { footerNav, primaryNav } from "@/data/navigation";
import { Wordmark } from "@/components/Wordmark";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const menu =
    open && mounted
      ? createPortal(
          <div
            id="mobile-navigation"
            className="fixed inset-0 z-[100] flex flex-col bg-white"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-3">
              <Wordmark />
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center text-foreground"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon />
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto overscroll-contain px-5 py-6"
              aria-label="Mobile"
            >
              <Link
                href="/best-products"
                onClick={() => setOpen(false)}
                className="mb-6 flex h-11 items-center justify-center bg-foreground text-sm font-bold tracking-wide text-background"
              >
                Shop all picks
              </Link>
              <ul className="space-y-0.5">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-lg font-medium text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 space-y-2.5 border-t border-black/10 pt-6">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm font-medium text-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center text-foreground"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open menu</span>
        <MenuIcon />
      </button>
      {menu}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
