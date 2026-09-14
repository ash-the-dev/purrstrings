import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-5 pt-8 pb-5 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
        <p className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
          Purrstrings.
        </p>
        <p className="mt-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-foreground">
          <span className="border-b-2 border-baby-pink pb-0.5">
            {siteConfig.tagline}
          </span>
        </p>
        <h1 className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
          Nine lives. Zero jobs.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Recommendations for cats who contribute nothing financially and
          somehow run the entire household — from someone who’s spent years
          around pets for a living, written so you can decide and buy without
          opening 37 tabs.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/best-products"
            className="inline-flex min-h-12 items-center justify-center bg-foreground px-6 text-sm font-bold tracking-wide text-background"
          >
            Shop the Good Stuff
          </Link>
          <Link
            href="/guides"
            className="inline-flex min-h-12 items-center text-sm font-bold tracking-wide underline decoration-baby-blue decoration-2 underline-offset-4"
          >
            Read the Guides
          </Link>
        </div>
      </div>

      <figure className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <Image
          src="/images/cats/nine-lives-zero-jobs.jpg"
          alt="Cat sprawled asleep across a cat tree with its legs hanging over the sides"
          width={1024}
          height={768}
          priority
          quality={90}
          sizes="(max-width: 1024px) 100vw, 1152px"
          className="h-auto w-full"
        />
      </figure>
    </section>
  );
}
