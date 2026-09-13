import Image from "next/image";
import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
  /** Header uses compact wordmark; footer can show full logo with tagline. */
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
      className={`relative inline-flex items-center ${className}`}
      aria-label="Purrstrings home"
    >
      <Image
        src={
          isFull
            ? "/brand/purrstrings-logo-full.png"
            : "/brand/purrstrings-wordmark.png"
        }
        alt="Purrstrings"
        width={isFull ? 280 : 200}
        height={isFull ? 85 : 36}
        className={
          isFull
            ? "h-auto w-[min(100%,17.5rem)]"
            : "h-9 w-auto sm:h-10"
        }
        priority={!isFull}
      />
    </Link>
  );
}
