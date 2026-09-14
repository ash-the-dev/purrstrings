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
    bio: "Mayhem — May for short — is the naughty one. When her name shows up on a pick, it’s because she actually had a paw in the chaos, not because we print stickers for the aesthetic.",
    image: {
      src: "/images/cats/user-may-axe.jpg",
      alt: "May (Mayhem) standing on her hind legs gripping a bloody plush axe toy",
    },
  },
  {
    id: "ace-menace",
    name: "Ace Menace",
    pronouns: "he/him",
    shortName: "Ace",
    headline: "Extra lovey. Extremely vocal.",
    bio: "Menace — Ace for short — is the clingy talker of the house. Soft face, loud opinions. An approval label only earns its way onto a product when the story is real.",
    image: {
      src: "/images/cats/user-knife-play.jpg",
      alt: "Ace (Menace) on his back biting a bloody plush knife toy on the carpet",
    },
  },
];

export const personalityLabelPresets = [
  "MAYHEM PICK",
  "MENACE APPROVED",
  "CHAOS APPROVED",
  "TESTED BY MAYHEM",
] as const;
