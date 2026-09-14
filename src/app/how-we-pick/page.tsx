import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { experienceLabels } from "@/data/experience";

export const metadata: Metadata = {
  title: "How We Pick Cat Products",
  description:
    "How Purrstrings chooses products: personal use, client-home exposure, durability, cleanup, value — not lab tests, not vet advice, and not affiliate pressure.",
  alternates: { canonical: "/how-we-pick" },
};

export default function HowWePickPage() {
  return (
    <>
      <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Editorial
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          How we pick
        </h1>
        <p className="mt-6 font-serif text-2xl italic leading-snug text-foreground/85">
          Useful first. Funny when it fits. Willing to say something flopped.
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Purrstrings is an editorial recommendation site run by Ash — someone
            who’s spent about six years in professional pet care (200+ clients)
            and also lives with five cats (Menace, Mayhem, Jynx, Luci, and Mazi).
            Products show up here because they earned a place through real use,
            repeated household exposure, or a clear editorial case — not because
            a spreadsheet said “high conversion.”
          </p>
          <p>
            Today’s live catalog is simpler than the full taxonomy below: every
            product currently featured in our live picks is something Ash has
            personally bought and used with their own cats. The other evidence
            labels still matter for future coverage — client-home patterns,
            long-term favorites, and clearly marked research/editorial picks —
            so we keep them honest instead of pretending personal ownership is
            the only kind of useful knowledge.
          </p>

          <h2 className="pt-4 font-serif text-3xl text-foreground">
            Evidence types you’ll see
          </h2>
          <p>
            When we have enough confidence, picks can carry a label. If there’s
            no label, we haven’t assigned one yet — we don’t invent experience.
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <span className="font-semibold text-foreground">
                {experienceLabels.personally_used}.
              </span>{" "}
              Ash bought it and used it with their own cats.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                {experienceLabels.client_home_exposure}.
              </span>{" "}
              Seen or used in the course of professional pet-care work in a
              client home.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                {experienceLabels.repeated_client_exposure}.
              </span>{" "}
              The same kind of product showed up across multiple client
              households enough times to notice a pattern.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                {experienceLabels.long_term_household_favorite}.
              </span>{" "}
              Not a two-week fling — something that stayed in rotation.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                {experienceLabels.editorial_pick}.
              </span>{" "}
              Recommended from research, comparison, or category judgment —
              clearly not the same as “I own this.”
            </li>
          </ul>

          <h2 className="pt-4 font-serif text-3xl text-foreground">
            What we actually weigh
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Whether pets engage with it (or correctly ignore it)</li>
            <li>Durability in a real living room, not a showroom</li>
            <li>Cleanup and maintenance you’ll actually keep up with</li>
            <li>Ease of use for tired humans</li>
            <li>Owner convenience vs. theater</li>
            <li>Value — cheap that works beats expensive that performs</li>
            <li>Repurchase / repeat use</li>
            <li>Obvious failure points (smell, noise, sharp edges, dead batteries)</li>
          </ul>

          <h2 className="pt-4 font-serif text-3xl text-foreground">
            What this is not
          </h2>
          <p>
            This is not lab testing. Not a multi-product “rigorous protocol.”
            Not veterinary, behavioral, or nutrition advice. If your cat needs
            medical help, call a veterinarian.
          </p>
          <p>
            Affiliate relationships do not determine inclusion. We may earn a
            commission if you buy through a link — you shouldn’t pay more for
            that, and a commission never purchases a glowing write-up. See the{" "}
            <Link href="/affiliate-disclosure" className="font-semibold text-foreground underline underline-offset-4">
              affiliate disclosure
            </Link>
            .
          </p>
          <p>
            More about Ash and why this site exists:{" "}
            <Link href="/about" className="font-semibold text-foreground underline underline-offset-4">
              About
            </Link>
            . Browse what’s currently featured:{" "}
            <Link href="/best-products" className="font-semibold text-foreground underline underline-offset-4">
              Best products
            </Link>
            .
          </p>
        </div>
      </article>
      <NewsletterSignup />
    </>
  );
}
