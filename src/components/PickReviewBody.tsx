import Link from "next/link";
import {
  type InlinePart,
  type PickReview,
  type PickReviewBlock,
} from "@/data/pick-reviews";

function Inline({ parts }: { parts: InlinePart[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }
        return (
          <Link
            key={`${part.href}-${index}`}
            href={part.href}
            className="font-semibold text-foreground underline underline-offset-4"
          >
            {part.label}
          </Link>
        );
      })}
    </>
  );
}

function Block({ block }: { block: PickReviewBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base leading-relaxed text-muted">
          <Inline parts={block.parts} />
        </p>
      );
    case "h2":
      return (
        <h2 className="mt-10 font-serif text-3xl text-foreground first:mt-0">
          {block.text}
        </h2>
      );
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
        <p className="border-l-2 border-baby-pink pl-4 text-sm leading-relaxed text-foreground">
          <Inline parts={block.parts} />
        </p>
      );
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

type PickReviewBodyProps = {
  review: PickReview;
};

export function PickReviewBody({ review }: PickReviewBodyProps) {
  return (
    <div className="space-y-5">
      {review.blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}
