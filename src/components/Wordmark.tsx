import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
  /** Header: original wordmark. Footer: full lockup with tagline. */
  variant?: "wordmark" | "full";
};

export function Wordmark({
  href = "/",
  className = "",
  variant = "wordmark",
}: WordmarkProps) {
  const isFull = variant === "full";

  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center overflow-visible ${className}`}
      aria-label="Purrstrings home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={
          isFull
            ? "/brand/purrstrings-logo-full.png"
            : "/brand/purrstrings-wordmark.png"
        }
        alt="Purrstrings"
        width={isFull ? 1600 : 1944}
        height={isFull ? 560 : 625}
        className={
          isFull
            ? "block h-auto w-[min(100%,18rem)]"
            : "block h-[3.75rem] w-auto max-w-[min(100%,14rem)] object-contain object-left sm:h-16"
        }
        decoding="async"
        fetchPriority={isFull ? "auto" : "high"}
      />
    </Link>
  );
}
