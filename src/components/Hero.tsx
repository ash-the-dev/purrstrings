import Image from "next/image";
import Link from "next/link";
import { unsplashPhoto } from "@/lib/images";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            A cat product publication
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-[2.6rem] leading-[1.08] text-balance text-foreground sm:text-5xl lg:text-[3.4rem]">
            Good stuff for cats. No nonsense for humans.
          </h1>
          <p className="mt-5 max-w-lg font-serif text-xl italic leading-snug text-foreground/80 sm:text-2xl">
            We dig through the litter box of cat products so you don’t have to.
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Independent guides, product roundups, comparisons, and
            recommendations for people who are completely normal about their
            cats.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/best-products"
              className="inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-accent-hover"
            >
              Browse Our Picks
            </Link>
            <Link
              href="/guides"
              className="inline-flex h-12 items-center justify-center border border-foreground/15 bg-transparent px-6 text-sm font-semibold tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              See What’s Worth Buying
            </Link>
          </div>
        </div>

        <figure className="relative">
          <div className="absolute -left-3 top-6 hidden h-[calc(100%-3rem)] w-full border border-accent/25 sm:block" />
          <div className="relative aspect-[5/4] overflow-hidden bg-tan sm:aspect-[4/5] lg:aspect-[5/6]">
            <Image
              src={unsplashPhoto("1573865526739-10659fec78a5", 1600)}
              alt="An orange tabby cat looking upward, used as an editorial hero placeholder"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs tracking-wide text-muted">
            <span>Editorial placeholder · Unsplash</span>
            <span className="hidden font-serif italic sm:inline">
              Independent. Opinionated. Allergic to filler.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
