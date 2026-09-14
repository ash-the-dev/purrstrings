import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function LegalPage({ title, eyebrow = "Legal", children }: LegalPageProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-6 lg:py-20">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-chaos">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-foreground [&_p]:text-muted [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-baby-pink [&_a]:text-foreground hover:[&_a]:decoration-chaos">
        {children}
      </div>
    </article>
  );
}
