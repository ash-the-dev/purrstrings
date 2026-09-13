import { ProductPickCard } from "@/components/ProductPickCard";
import { guideContent, type GuideBlock } from "@/data/guide-content";
import { featuredPicks, getLivePicks, type FeaturedPick } from "@/data/featured-picks";

type GuideBodyProps = {
  slug: string;
};

function resolveProductPicks(slugs: string[]): FeaturedPick[] {
  const liveBySlug = new Map(getLivePicks().map((pick) => [pick.slug, pick]));

  return slugs
    .map(
      (slug) =>
        liveBySlug.get(slug) ?? featuredPicks.find((pick) => pick.slug === slug),
    )
    .filter((pick): pick is FeaturedPick => Boolean(pick));
}

function GuideBlockView({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-base leading-relaxed text-muted">{block.text}</p>;
    case "h2":
      return <h2 className="mt-12 font-serif text-3xl text-foreground first:mt-0">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 font-serif text-2xl text-foreground">{block.text}</h3>;
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="border-l-2 border-baby-pink pl-4 text-sm leading-relaxed text-foreground sm:text-base">
          {block.text}
        </p>
      );
    case "products": {
      const picks = resolveProductPicks(block.slugs);
      if (!picks.length) return null;
      return (
        <section className="not-prose my-10">
          {block.heading ? (
            <h3 className="font-serif text-2xl text-foreground">{block.heading}</h3>
          ) : null}
          <div className={`grid gap-5 sm:grid-cols-2 ${block.heading ? "mt-6" : ""}`}>
            {picks.map((pick) => (
              <ProductPickCard key={pick.slug} pick={pick} />
            ))}
          </div>
        </section>
      );
    }
    case "todo":
      // Keep in source for Ash; never show editor notes on the public site.
      return null;
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

export function GuideBody({ slug }: GuideBodyProps) {
  const blocks = guideContent[slug];

  if (!blocks?.length) {
    return (
      <p className="text-base leading-relaxed text-muted">
        Guide body coming soon.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {blocks.map((block, index) => (
        <GuideBlockView key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  );
}
