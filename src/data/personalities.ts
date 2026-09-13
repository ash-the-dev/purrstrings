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
    bio: "May Mayhem is a recurring Purrstrings personality. Her name may show up on future picks and stories. We will not stamp TESTED BY MAYHEM on a product unless we actually show that.",
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
    bio: "Mr. Murder Mittens is the other half of the in-house chaos. MURDER MITTENS APPROVED is a label we can attach later. It is not a fake review factory.",
  },
];

export const personalityLabelPresets = [
  "MAYHEM PICK",
  "MURDER MITTENS APPROVED",
  "CHAOS APPROVED",
  "TESTED BY MAYHEM",
] as const;
