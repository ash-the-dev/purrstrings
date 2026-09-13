import Image from "next/image";
import Link from "next/link";
import { personalities } from "@/data/personalities";

export function ChaosApproved() {
  const may = personalities.find((cat) => cat.id === "may-mayhem");
  const mittens = personalities.find((cat) => cat.id === "murder-mittens");

  if (!may) {
    return null;
  }

  return (
    <section className="bg-background">
      <div className="mx-auto grid w-full max-w-6xl items-end gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-28">
        <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
          {may.image ? (
            <Image
              src={may.image.src}
              alt={may.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="pb-2">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em]">
            <span className="bg-baby-pink px-1.5 py-0.5">MAYHEM</span>
          </p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            May Mayhem vs. Whatever This Thing Is.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Recurring cats. Future columns. Labels attach later — never as fake
            testing claims.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-bold underline decoration-baby-pink decoration-2 underline-offset-4"
          >
            Why these cats exist →
          </Link>
          {mittens ? (
            <p className="mt-10 text-sm text-muted">
              Also appearing: {mittens.name}. {mittens.headline}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
