export type MerchantId =
  | "amazon"
  | "chewy"
  | "petco"
  | "petsmart"
  | "whisker"
  | "prettylitter"
  | "smalls"
  | "tuft-and-paw"
  | "tractive"
  | "direct";

export type Merchant = {
  id: MerchantId;
  name: string;
  cta: string;
};

export const merchants: Merchant[] = [
  { id: "amazon", name: "Amazon", cta: "Buy at Amazon" },
  { id: "chewy", name: "Chewy", cta: "Buy at Chewy" },
  { id: "petco", name: "Petco", cta: "Buy at Petco" },
  { id: "petsmart", name: "PetSmart", cta: "Buy at PetSmart" },
  { id: "whisker", name: "Whisker", cta: "Buy at Whisker" },
  { id: "prettylitter", name: "PrettyLitter", cta: "Buy at PrettyLitter" },
  { id: "smalls", name: "Smalls", cta: "Buy at Smalls" },
  { id: "tuft-and-paw", name: "Tuft + Paw", cta: "Buy at Tuft + Paw" },
  { id: "tractive", name: "Tractive", cta: "Buy at Tractive" },
  { id: "direct", name: "Brand site", cta: "Buy Direct" },
];

export function getMerchant(id: MerchantId) {
  return merchants.find((merchant) => merchant.id === id);
}
