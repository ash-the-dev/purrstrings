import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
  /** Header: name + cat-P. Footer: full logo with tagline. */
  variant?: "wordmark" | "full";
};

export function Wordmark({
  href = "/",
  className = "",
  variant = "wordmark",
}: WordmarkProps) {
  const isFull = variant === "full";

  // Native <img> avoids Next/Image’s overflow:hidden wrapper clipping ears/whiskers.
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center ${className}`}
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
        width={isFull ? 458 : 457}
        height={isFull ? 200 : 128}
        className={
          isFull
            ? "block h-auto w-[min(100%,18rem)]"
            : "block h-10 w-auto max-w-[min(58vw,14rem)] sm:h-11 sm:max-w-[16rem]"
        }
        decoding="async"
        fetchPriority={isFull ? "auto" : "high"}
      />
    </Link>
  );
}
