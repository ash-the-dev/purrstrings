import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-start px-5 py-24 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
        This page wandered off.
      </h1>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
        Either it never existed, or someone renamed a slug and forgot to tell
        the furniture. Try the homepage or the guides.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Back home
        </Link>
        <Link
          href="/guides"
          className="inline-flex h-12 items-center justify-center border border-foreground/15 px-6 text-sm font-semibold hover:border-accent hover:text-accent"
        >
          Browse guides
        </Link>
      </div>
    </div>
  );
}
