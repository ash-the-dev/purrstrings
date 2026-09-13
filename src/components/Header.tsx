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
      <div className="mx-auto flex h-[4.75rem] w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
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
        <div className="flex shrink-0 items-center gap-1">
          <SearchButton />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
