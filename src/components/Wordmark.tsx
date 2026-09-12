import Link from "next/link";

type WordmarkProps = {
  href?: string;
  className?: string;
};

export function Wordmark({ href = "/", className = "" }: WordmarkProps) {
  return (
    <Link
      href={href}
      className={`font-serif text-[1.65rem] leading-none tracking-tight text-foreground ${className}`}
      aria-label="Purrstrings home"
    >
      <span className="italic font-medium">Purr</span>
      <span className="font-medium">strings</span>
    </Link>
  );
}
