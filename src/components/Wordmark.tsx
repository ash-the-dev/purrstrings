import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
  /** Header: crisp SVG wordmark. Footer: full PNG lockup with tagline. */
  variant?: "wordmark" | "full";
};

export function Wordmark({
  href = "/",
  className = "",
  variant = "wordmark",
}: WordmarkProps) {
  if (variant === "full") {
    return (
      <Link
        href={href}
        className={`inline-flex shrink-0 items-center leading-none ${className}`}
        aria-label="Purrstrings home"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/purrstrings-logo-full.png"
          alt="Purrstrings — They pull the strings. We buy the things."
          width={1200}
          height={400}
          className="block h-[4.75rem] w-auto max-w-[min(100%,20rem)]"
          decoding="async"
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center leading-none ${className}`}
      aria-label="Purrstrings home"
    >
      <span className="sr-only">Purrstrings</span>
      <svg
        viewBox="0 0 560 140"
        className="h-11 w-auto max-w-[min(64vw,16.5rem)] sm:h-12 sm:max-w-[18rem]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Whiskers — inset from left edge */}
        <path
          d="M12 66c18 3 34 2 48-4M8 78c20 2 36 1 52-5M14 90c16 1 30 0 44-5"
          fill="none"
          stroke="#111111"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Cat-P */}
        <path
          d="M68 118V28h42c28 0 46 15 46 38 0 23-18 38-46 38H68Z"
          fill="#111111"
        />
        <path
          d="M88 48v36h20c14 0 24-7 24-18s-10-18-24-18H88Z"
          fill="#ffffff"
        />
        {/* Ears */}
        <path d="M76 30 90 6l12 24Z" fill="#111111" />
        <path d="M112 30l18-26 14 26Z" fill="#111111" />
        <path d="M118 28l14-20 8 20Z" fill="#FF2D95" />
        {/* urrstrings */}
        <text
          x="168"
          y="98"
          fill="#111111"
          fontFamily="var(--font-newsreader), Georgia, serif"
          fontSize="72"
          fontWeight="600"
          letterSpacing="-1.5"
        >
          urrstrings
        </text>
        {/* Pink period */}
        <circle cx="528" cy="92" r="11" fill="#FF2D95" />
      </svg>
    </Link>
  );
}
