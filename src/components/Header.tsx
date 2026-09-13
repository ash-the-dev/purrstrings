import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { SearchButton } from "@/components/SearchButton";
import { Wordmark } from "@/components/Wordmark";
import { primaryNav } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-background/95 backdrop-blur-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-[5rem] w-full max-w-6xl items-center justify-between gap-4 overflow-visible px-5 py-3 sm:px-6 lg:gap-6 lg:px-8">
        <Wordmark />
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] font-medium text-foreground transition-colors hover:text-foreground/60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/best-products"
            className="inline-flex h-9 items-center justify-center bg-foreground px-3.5 text-xs font-bold tracking-wide text-background sm:h-10 sm:px-4 sm:text-sm"
          >
            Shop
          </Link>
          <SearchButton />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
