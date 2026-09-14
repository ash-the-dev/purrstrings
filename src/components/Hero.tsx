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
        <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
          {siteConfig.tagline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Cat products we&apos;ve actually used — food, litter, toys, furniture,
          tech, and the weird stuff in between. Firsthand picks from a real
          multi-cat house.
        </p>
        <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-foreground/75">
          Personally used. Independently picked. Affiliate-supported.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/best-products"
            className="inline-flex min-h-12 items-center justify-center bg-foreground px-6 text-sm font-bold tracking-wide text-background"
          >
            See What We Actually Use
          </Link>
          <Link
            href="/how-we-pick"
            className="inline-flex min-h-12 items-center text-sm font-bold tracking-wide underline decoration-baby-blue decoration-2 underline-offset-4"
          >
            How We Pick
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
        <figcaption className="mt-3 font-serif text-lg italic text-muted sm:text-xl">
          Nine lives. Zero jobs.
        </figcaption>
      </figure>
    </section>
  );
}
