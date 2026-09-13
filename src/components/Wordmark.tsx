import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
  /** Header: original wordmark. Footer: full lockup with tagline. */
  variant?: "wordmark" | "full";
};

/** Cache-busted brand assets — bump when logo files change. */
const WORDMARK_SRC = "/brand/purrstrings-wordmark-v3.png";
const FULL_SRC = "/brand/purrstrings-logo-full-v3.png";

export function Wordmark({
  href = "/",
  className = "",
  variant = "wordmark",
}: WordmarkProps) {
  const isFull = variant === "full";

  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Purrstrings home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isFull ? FULL_SRC : WORDMARK_SRC}
        alt="Purrstrings"
        width={isFull ? 1059 : 1173}
        height={isFull ? 446 : 481}
        className={
          isFull
            ? "block h-auto w-[min(100%,18rem)]"
            : "block h-[3.25rem] w-auto sm:h-14"
        }
        decoding="async"
        fetchPriority={isFull ? "auto" : "high"}
      />
    </Link>
  );
}
