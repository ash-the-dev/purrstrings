import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";

type JsonLdProps = {
  data?: object | object[];
};

export function JsonLd({ data }: JsonLdProps) {
  const blocks = data
    ? Array.isArray(data)
      ? data
      : [data]
    : [websiteJsonLd(), organizationJsonLd()];

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
