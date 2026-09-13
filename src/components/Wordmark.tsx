import Image from "next/image";
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

  return (
    <Link
      href={href}
      className={`relative inline-flex shrink-0 items-center overflow-visible ${className}`}
      aria-label="Purrstrings home"
    >
      <Image
        src={
          isFull
            ? "/brand/purrstrings-logo-full.png"
            : "/brand/purrstrings-wordmark.png"
        }
        alt="Purrstrings"
        width={isFull ? 360 : 280}
        height={isFull ? 140 : 82}
        className={
          isFull
            ? "h-auto w-[min(100%,20rem)] max-w-full object-contain object-left"
            : "h-11 w-auto max-w-[min(70vw,17.5rem)] object-contain object-left sm:h-12"
        }
        priority={!isFull}
        sizes={isFull ? "320px" : "(max-width: 640px) 200px, 280px"}
      />
    </Link>
  );
}
