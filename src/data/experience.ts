export const EXPERIENCE_TYPES = [
  "personally_used",
  "client_home_exposure",
  "repeated_client_exposure",
  "long_term_household_favorite",
  "editorial_pick",
] as const;

export type ExperienceType = (typeof EXPERIENCE_TYPES)[number];

export type ProductExperience = {
  type: ExperienceType;
  /** Optional short clarifying note shown near the badge. */
  note?: string;
};

export const experienceLabels: Record<ExperienceType, string> = {
  personally_used: "Personally used",
  client_home_exposure: "Used in client homes",
  repeated_client_exposure: "Seen repeatedly in client homes",
  long_term_household_favorite: "Long-term household favorite",
  editorial_pick: "Editorial pick",
};
