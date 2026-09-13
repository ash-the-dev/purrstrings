import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-5 pt-10 pb-6 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em]">
          <span className="border-b-2 border-baby-blue pb-0.5">
            A cat magazine, basically
          </span>
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:whitespace-nowrap lg:text-[3.35rem]">
          Nine lives. Zero jobs.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          We find the good stuff for cats who contribute nothing financially
          and somehow run the entire household.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/guides"
            className="inline-flex min-h-12 items-center justify-center bg-foreground px-6 text-sm font-bold tracking-wide text-background"
          >
            See What’s Worth Buying
          </Link>
          <Link
            href="/best-products"
            className="inline-flex min-h-12 items-center text-sm font-bold tracking-wide underline decoration-baby-pink decoration-2 underline-offset-4"
          >
            Browse the Chaos
          </Link>
        </div>
      </div>

      <figure className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">
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
