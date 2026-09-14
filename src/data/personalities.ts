import type { EditorialImage } from "@/lib/images";

export type Personality = {
  id: string;
  name: string;
  pronouns: string;
  shortName: string;
  headline: string;
  bio: string;
  image?: EditorialImage;
};

export type PersonalityLabel = {
  personalityId: Personality["id"];
  label: string;
  kind: "editorial" | "tested";
};

export const personalities: Personality[] = [
  {
    id: "may-mayhem",
    name: "May Mayhem",
    pronouns: "she/her",
    shortName: "May",
    headline: "Professional chaos. Occasional nap.",
    bio: "Mayhem is one of the cats who keeps the living room interesting. When her name shows up on a pick, it’s because she actually had a paw in the chaos — not because we print stickers for the aesthetic.",
    image: {
      src: "/images/cats/user-knife-play.jpg",
      alt: "May Mayhem biting a plush knife toy on the carpet",
    },
  },
  {
    id: "murder-mittens",
    name: "Mr. Murder Mittens",
    pronouns: "he/him",
    shortName: "Mittens",
    headline: "Looks polite. Has opinions about ankles.",
    bio: "Mr. Murder Mittens is the other half of the in-house chaos — soft face, sharp schedule. An approval label only earns its way onto a product when the story is real.",
  },
];

export const personalityLabelPresets = [
  "MAYHEM PICK",
  "MURDER MITTENS APPROVED",
  "CHAOS APPROVED",
  "TESTED BY MAYHEM",
] as const;
