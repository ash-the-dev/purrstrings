import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/schema";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-foreground">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="underline-offset-2 hover:underline">
                    {item.name}
                  </Link>
                )}
                {!last ? <span aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
