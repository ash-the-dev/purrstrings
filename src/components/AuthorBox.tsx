import Link from "next/link";

type AuthorBoxProps = {
  className?: string;
};

export function AuthorBox({ className = "" }: AuthorBoxProps) {
  return (
    <aside
      className={`border-t border-black/10 pt-6 ${className}`}
      aria-label="About the author"
    >
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em]">
        Written by Ash
      </p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        Ash has spent about six years in professional pet care — 200+ clients,
        a strong five-star review history, and a lot of time inside real
        households seeing which products people rebuy and which ones quietly
        die in a closet. Ash also has cats.{" "}
        <Link href="/about" className="font-semibold text-foreground underline underline-offset-4">
          More about Ash
        </Link>
        {" · "}
        <Link href="/how-we-pick" className="font-semibold text-foreground underline underline-offset-4">
          How we pick
        </Link>
      </p>
    </aside>
  );
}
