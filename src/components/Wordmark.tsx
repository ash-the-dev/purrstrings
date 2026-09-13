import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
};

export function Wordmark({ href = "/", className = "" }: WordmarkProps) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-end font-serif text-[2.05rem] leading-tight tracking-tight text-foreground sm:text-[2.25rem] ${className}`}
      aria-label="Purrstrings home"
    >
      <span className="italic font-medium">Purr</span>
      <span className="font-medium">strings</span>
      <svg
        viewBox="0 0 28 14"
        className="mb-0.5 ml-0.5 h-3 w-6 text-baby-pink"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1 4c4 8 8-6 13 2s8-7 13 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}
