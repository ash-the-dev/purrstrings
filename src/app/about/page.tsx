import type { Metadata } from "next";
import Link from "next/link";
import { ContactCtaLink } from "@/components/ContactCtaLink";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Purrstrings exists, what we recommend, and why this is not another copy-paste pet shop.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          About
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Why Purrstrings?
        </h1>
        <p className="mt-6 font-serif text-2xl italic leading-snug text-foreground/85">
          Because “best cat products 2026” should not read like it was written
          by a tired affiliate script and a stock photo of a kitten in a basket.
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Purrstrings exists because buying something for a cat should not
            require opening 37 tabs, reading fake reviews, and discovering every
            recommendation was written by someone trying to sell the same
            product.
          </p>
          <p>
            We are an editorial discovery site, not a store. There is no cart.
            There is no warehouse. There is a point of view: useful beats
            viral, materials matter, and a $700 litter box has to justify
            itself in plain language.
          </p>
          <p>
            Every product listed here is something I have actually used and
            enjoyed. That is the whole differentiator. If I have not lived with
            it, it does not get a &quot;we recommend this&quot; slot — it might
            show up as context in a guide, clearly labeled as comparison, not a
            personal seal of approval.
          </p>
          <p>
            The tone is warm, a little sarcastic, and allergic to filler. We
            like expensive things when they earn it. We like cheap things when
            they work. We do not pretend a cardboard box is not sometimes the
            correct answer.
          </p>
          <p>
            When we link out to Amazon, Chewy, brand sites, or anyone else, we
            may earn a commission. That does not change the recommendation.
            If a product is a bad idea, we will say so — or we will not write
            the piece until we can.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/best-products"
            className="inline-flex h-12 items-center justify-center bg-foreground px-6 text-sm font-bold text-background hover:bg-chaos"
          >
            Shop the favorites
          </Link>
          <Link
            href="/guides"
            className="inline-flex h-12 items-center justify-center text-sm font-bold underline decoration-baby-blue decoration-2 underline-offset-4"
          >
            Read the guides
          </Link>
          <ContactCtaLink
            href="/contact"
            source="about_get_in_touch"
            className="inline-flex h-12 items-center justify-center text-sm font-bold underline decoration-baby-pink decoration-2 underline-offset-4"
          >
            Get in touch
          </ContactCtaLink>
        </div>
      </article>
      <NewsletterSignup />
    </>
  );
}
