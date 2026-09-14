import type { Metadata } from "next";
import Link from "next/link";
import { ContactCtaLink } from "@/components/ContactCtaLink";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About Ash & Purrstrings",
  description:
    "Ash has spent about six years in professional pet care with 200+ clients — and still has cats at home. Here’s why Purrstrings exists and how recommendations get made.",
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
          Hi. I’m Ash.
        </h1>
        <p className="mt-6 font-serif text-2xl italic leading-snug text-foreground/85">
          I’ve spent the last six years caring for other people’s pets —
          hundreds of them — and noticing which products actually survive real
          households.
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            For about six years I’ve worked in professional pet care. That means
            more than 200 clients, a strong five-star review history, and a lot
            of time inside real homes: the feeders that stay on the counter, the
            litter setups people quietly replace, the toys that get ignored after
            Tuesday, the stuff owners swear by because it just… works.
          </p>
          <p>
            I’m not a veterinarian, a behaviorist, or a nutritionist. I’m someone
            who has spent years living around pets for a living, watching what
            owners buy again, what they regret, and what ends up shoved under a
            sink. That experience is useful. It is not a medical degree.
          </p>
          <p>
            I also have cats. Plenty of the products on Purrstrings live in my
            house. Others I know because I’ve seen them repeatedly across client
            households. Some things show up in guides as comparison or research
            context — and when that’s the case, we say so instead of pretending I
            personally own every SKU on the internet.
          </p>
          <p>
            Purrstrings exists because buying something for a cat shouldn’t
            require thirty tabs, fake scores, and a product page that reads like
            it was written by the brand’s marketing intern. We find the good
            stuff, explain why it’s here, and send you to buy it elsewhere. No
            cart. No warehouse. Just a point of view.
          </p>
          <p>
            How we decide what gets recommended lives on{" "}
            <Link href="/how-we-pick" className="font-semibold text-foreground underline underline-offset-4">
              How we pick
            </Link>
            . Affiliate links may earn a commission — that never buys a
            recommendation. Details are on the{" "}
            <Link href="/affiliate-disclosure" className="font-semibold text-foreground underline underline-offset-4">
              affiliate disclosure
            </Link>
            .
          </p>
          <p>
            Nothing on this site is veterinary advice. If your cat’s appetite,
            litter habits, weight, or personality changes in a way that worries
            you, call your vet — not an affiliate guide with a sense of humor.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/best-products"
            className="inline-flex h-12 items-center justify-center bg-foreground px-6 text-sm font-bold text-background hover:bg-chaos"
          >
            Shop the favorites
          </Link>
          <Link
            href="/how-we-pick"
            className="inline-flex h-12 items-center justify-center text-sm font-bold underline decoration-baby-blue decoration-2 underline-offset-4"
          >
            How we pick
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
