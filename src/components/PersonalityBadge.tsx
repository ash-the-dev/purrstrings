import type { PersonalityLabel } from "@/data/personalities";

type PersonalityBadgeProps = {
  label: PersonalityLabel | string;
};

export function PersonalityBadge({ label }: PersonalityBadgeProps) {
  const text = typeof label === "string" ? label : label.label;

  return (
    <span className="inline-block border border-chaos bg-background px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-chaos">
      {text}
    </span>
  );
}
