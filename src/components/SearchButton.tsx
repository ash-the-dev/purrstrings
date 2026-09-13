"use client";

import { useEffect, useId, useRef, useState } from "react";

export function SearchButton() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    closeRef.current?.focus();

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex size-10 items-center justify-center text-foreground transition-colors hover:text-chaos"
        aria-label="Search"
      >
        <SearchIcon />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-foreground/40 px-5 pt-28 sm:pt-36">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="w-full max-w-lg border-2 border-border bg-background p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-chaos">
                  Search
                </p>
                <h2 id={titleId} className="mt-2 font-serif text-2xl text-foreground">
                  Not quite yet
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-muted hover:text-foreground"
              >
                Close
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Search is a placeholder for now. Browse the categories, or start
              with the guides while we wire this up.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="size-5"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" strokeLinecap="round" />
    </svg>
  );
}
