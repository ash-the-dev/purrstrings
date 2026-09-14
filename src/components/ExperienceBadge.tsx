import Link from "next/link";
import {
  experienceLabels,
  type ProductExperience,
} from "@/data/experience";

type ExperienceBadgeProps = {
  experience: ProductExperience;
  className?: string;
  /** When true, link the label to /how-we-pick */
  linkToMethod?: boolean;
};

export function ExperienceBadge({
  experience,
  className = "",
  linkToMethod = true,
}: ExperienceBadgeProps) {
  const label = experienceLabels[experience.type];

  const chip = (
    <span
      className={`inline-block border border-black/15 bg-background px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-foreground ${className}`}
    >
      {label}
    </span>
  );

  return (
    <div className="space-y-1.5">
      {linkToMethod ? (
        <Link href="/how-we-pick" className="inline-flex hover:opacity-70">
          {chip}
        </Link>
      ) : (
        chip
      )}
      {experience.note ? (
        <p className="text-sm text-muted">{experience.note}</p>
      ) : null}
    </div>
  );
}
