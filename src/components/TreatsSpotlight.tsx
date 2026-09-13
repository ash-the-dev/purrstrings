import Image from "next/image";
import Link from "next/link";

export function TreatsSpotlight() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid w-full max-w-6xl items-end gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:py-28">
        <div className="order-2 pb-2 lg:order-1">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em]">
            <span className="border-b-2 border-baby-pink pb-0.5">Treats</span>
          </p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Shared custody of a squeeze tube.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Delectables Squeeze Up — the rare snack that gets two cats on the
            same diplomatic mission.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/picks/delectables-squeeze-up"
              className="inline-flex min-h-12 items-center justify-center bg-foreground px-6 text-sm font-bold tracking-wide text-background"
            >
              Why we like it
            </Link>
            <Link
              href="/cat-food"
              className="inline-flex min-h-12 items-center text-sm font-bold tracking-wide underline decoration-baby-pink decoration-2 underline-offset-4"
            >
              Cat Food desk →
            </Link>
          </div>
        </div>
        <figure className="relative order-1 aspect-[4/5] overflow-hidden bg-black/5 lg:order-2">
          <Image
            src="/images/cats/user-delectables-squeeze-up.jpg"
            alt="Two cats sharing a Delectables Squeeze Up tube at home"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
