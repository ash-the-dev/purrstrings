type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em]">
          <span className="border-b-2 border-baby-pink pb-0.5">{eyebrow}</span>
        </p>
      ) : null}
      <Heading className="font-serif text-3xl leading-tight text-balance text-foreground sm:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
