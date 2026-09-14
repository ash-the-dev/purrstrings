import { unsplashPhoto, type EditorialImage } from "@/lib/images";
import type { MerchantId } from "@/data/merchants";
import type { ProductExperience } from "@/data/experience";
import type { PersonalityLabel } from "@/data/personalities";

export type MerchantOffer = {
  merchant: MerchantId;
  url?: string;
  /** @deprecated Do not display Amazon prices unless from an approved live pricing source. */
  price?: string;
  cta?: string;
};

export type EditorialVideo = {
  src: string;
  poster?: string;
  label?: string;
};

export type FeaturedPick = {
  slug: string;
  category: string;
  categoryHref: string;
  headline: string;
  summary: string;
  href: string;
  /** Card / OG primary. Prefer first gallery image (owner media when available). */
  image: EditorialImage;
  /** Gallery order: owner photos first when we have them; official product shots supplement. */
  gallery?: EditorialImage[];
  videos?: EditorialVideo[];
  merchants: MerchantOffer[];
  personalityLabels?: PersonalityLabel[];
  /** Confirmed experience signal — omit when unconfirmed. */
  experience?: ProductExperience;
  /**
   * True when compliant product media is not yet available.
   * Do not point this at Amazon-scraped or unproven web images.
   */
  needsMedia?: boolean;
};

export const featuredPicks: FeaturedPick[] = [
  {
    slug: "leopard-print-cat-tree",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Leopard-Print Cat Tree",
    summary:
      "Tall, ridiculous, actually used. Vertical space, lounging, perches, and scratching in one loud piece of furniture my cats actually claim.",
    href: "/picks/leopard-print-cat-tree",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4cHkJ6Y",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/cats/user-cat-tree-full.jpg",
      alt: "Two kittens resting on a leopard-print cat tree in a real home",
    },
    gallery: [
      {
        src: "/images/cats/user-cat-tree-full.jpg",
        alt: "Two kittens resting on a leopard-print cat tree in a real home",
      },
      {
        src: "/images/cats/user-cat-tree-napping.jpg",
        alt: "Two cats napping on stacked leopard-print platforms, shot from below",
      },
      {
        src: "/images/products/official-cat-tree.jpg",
        alt: "Official product photo of a tall leopard-print cat tree with multiple cats",
      },
      {
        src: "/images/products/official-cat-tree-2.jpg",
        alt: "Official alternate product photo of the leopard-print cat tree",
      },
    ],
  },
  {
    slug: "kitty-treadmill",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Kitty Treadmill",
    summary:
      "A full-size cat wheel is ridiculous until you have video of your cats running on it. Mine have — enrichment for energetic indoor cats, if you have the room.",
    href: "/picks/kitty-treadmill",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4Ac2uk9",
        cta: "See Current Price",
      },
    ],
    personalityLabels: [
      {
        personalityId: "may-mayhem",
        label: "MAYHEM PICK",
        kind: "editorial",
      },
    ],
    image: {
      src: "/images/cats/user-kitty-treadmill-still.jpg",
      alt: "Two kittens running inside a cat exercise wheel at home",
    },
    gallery: [
      {
        src: "/images/cats/user-kitty-treadmill-still.jpg",
        alt: "Two kittens running inside a cat exercise wheel at home",
      },
      {
        src: "/images/products/official-kitty-treadmill.jpg",
        alt: "Official product photo of the Nordic Beast large cat exercise wheel",
      },
      {
        src: "/images/products/official-kitty-treadmill-2.jpg",
        alt: "Official alternate product photo of the cat exercise wheel",
      },
    ],
    videos: [
      {
        src: "/videos/kitty-treadmill.mp4",
        poster: "/images/cats/user-kitty-treadmill-still.jpg",
        label: "In the house — the video is the receipt",
      },
    ],
  },
  {
    slug: "murder-kitty-knife-set",
    category: "Cat Toys",
    categoryHref: "/cat-toys",
    headline: "Murder Kitty Knife Set",
    summary:
      "Four plush horror knives stuffed with catnip and bad intentions. Soft blades, loud personality, zero actual crime.",
    href: "/picks/murder-kitty-knife-set",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4r6eQWS",
        cta: "See Current Price",
      },
    ],
    personalityLabels: [
      {
        personalityId: "murder-mittens",
        label: "MURDER MITTENS APPROVED",
        kind: "editorial",
      },
    ],
    image: {
      src: "/images/products/official-knife-set.jpg",
      alt: "Official product photo of four plush blood-splatter knife cat toys",
    },
    gallery: [
      {
        src: "/images/products/official-knife-set.jpg",
        alt: "Official product photo of four plush blood-splatter knife cat toys",
      },
      {
        src: "/images/products/official-knife-set-2.jpg",
        alt: "Official alternate product photo of the plush knife cat toys",
      },
      {
        src: "/images/cats/user-knife-play.jpg",
        alt: "Spotted cat biting a plush knife toy on the carpet",
      },
    ],
  },
  {
    slug: "flapping-bird-toy",
    category: "Cat Toys",
    categoryHref: "/cat-toys",
    headline: "Flapping Bird Toy",
    summary:
      "A rechargeable sandpiper that chirps, flaps, and refuses to fly away. Touch-activated chaos for cats who hunt with their whole personality.",
    href: "/picks/flapping-bird-toy",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4A9Vxjp",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-toy-bird.jpg",
      alt: "Official product photo of a Potaroma flapping sandpiper cat toy",
    },
    gallery: [
      {
        src: "/images/products/official-toy-bird.jpg",
        alt: "Official product photo of a Potaroma flapping sandpiper cat toy",
      },
      {
        src: "/images/products/official-toy-bird-2.jpg",
        alt: "Official alternate product photo of the flapping bird cat toy",
      },
      {
        src: "/images/cats/user-toy-bird.jpg",
        alt: "Fluffy white and grey plush bird toy with orange eyes, photographed at home",
      },
    ],
  },
  {
    slug: "automatic-laser-cat-toy",
    category: "Cat Toys",
    categoryHref: "/cat-toys",
    headline: "Automatic Laser Cat Toy",
    summary:
      "Motion-activated red-dot chaos with a random trajectory. USB rechargeable, three speeds, and zero requirement that you stand there waving a pointer like a tour guide.",
    href: "/picks/automatic-laser-cat-toy",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4h1WEJv",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-laser-toy.jpg",
      alt: "Official product photo of the YVE LIFE automatic laser cat toy",
    },
    gallery: [
      {
        src: "/images/products/official-laser-toy.jpg",
        alt: "Official product photo of the YVE LIFE automatic laser cat toy",
      },
      {
        src: "/images/products/official-laser-toy-2.jpg",
        alt: "Official alternate product photo of the automatic laser cat toy",
      },
    ],
  },
  {
    slug: "cat-ball-launcher",
    category: "Cat Toys",
    categoryHref: "/cat-toys",
    headline: "Cat Ball Launcher",
    summary:
      "A plastic gun, thirty fuzzy balls, and the sudden realization that fetch was never optional. Quiet on the floor, loud in the personality department.",
    href: "/picks/cat-ball-launcher",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4h5tI36",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-ball-launcher.jpg",
      alt: "Official product photo of the MeoHui cat ball launcher with plush balls",
    },
    gallery: [
      {
        src: "/images/products/official-ball-launcher.jpg",
        alt: "Official product photo of the MeoHui cat ball launcher with plush balls",
      },
      {
        src: "/images/products/official-ball-launcher-2.jpg",
        alt: "Official alternate product photo of the cat ball launcher set",
      },
    ],
  },
  {
    slug: "migimouse",
    category: "Cat Toys",
    categoryHref: "/cat-toys",
    headline: "MigiMouse",
    summary:
      "A rechargeable plush mouse that rolls, flips, squeaks, and refuses to stay dead. Motion sensor, wiggly mesh tail, optional catnip pouch.",
    href: "/picks/migimouse",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4isFsiy",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-migimouse.jpg",
      alt: "Official product photo of the Migipaws MigiMouse interactive cat toy",
    },
    gallery: [
      {
        src: "/images/products/official-migimouse.jpg",
        alt: "Official product photo of the Migipaws MigiMouse interactive cat toy",
      },
      {
        src: "/images/products/official-migimouse-2.jpg",
        alt: "Official alternate product photo of the MigiMouse cat toy",
      },
    ],
  },
  {
    slug: "orsda-laser-ufo",
    category: "Cat Toys",
    categoryHref: "/cat-toys",
    headline: "ORSDA Laser UFO",
    summary:
      "Dual lasers plus a catnip UFO dangler that clips to doors, trees, and furniture. Random trajectory, motion sensor, four modes, rechargeable.",
    href: "/picks/orsda-laser-ufo",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3T5rqZY",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-orsda-laser-ufo.jpg",
      alt: "Official product photo of the ORSDA dual-laser UFO cat toy",
    },
    gallery: [
      {
        src: "/images/products/official-orsda-laser-ufo.jpg",
        alt: "Official product photo of the ORSDA dual-laser UFO cat toy",
      },
      {
        src: "/images/products/official-orsda-laser-ufo-2.jpg",
        alt: "Official alternate product photo of the ORSDA laser UFO toy",
      },
    ],
  },
  {
    slug: "doorway-flapping-teaser",
    category: "Cat Toys",
    categoryHref: "/cat-toys",
    headline: "Doorway Flapping Teaser",
    summary:
      "Hang it in a doorway and let the automatic flapper do the hunting for you. Interactive teaser energy without standing there like unpaid staff.",
    href: "/picks/doorway-flapping-teaser",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4horNYL",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-doorway-flapper.jpg",
      alt: "Official product photo of an automatic doorway flapping cat teaser",
    },
    gallery: [
      {
        src: "/images/products/official-doorway-flapper.jpg",
        alt: "Official product photo of an automatic doorway flapping cat teaser",
      },
      {
        src: "/images/products/official-doorway-flapper-2.jpg",
        alt: "Official alternate product photo of the doorway flapping cat teaser",
      },
    ],
  },
  {
    slug: "l-shaped-scratcher",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "L-Shaped Cat Scratcher",
    summary:
      "Two-pack cardboard L pads that go vertical or horizontal, wall-mountable, with toy balls. Furniture protection that looks like it belongs there on purpose.",
    href: "/picks/l-shaped-scratcher",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4yr2ivy",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-l-scratcher.jpg",
      alt: "Official product photo of L-shaped cardboard cat scratchers",
    },
    gallery: [
      {
        src: "/images/products/official-l-scratcher.jpg",
        alt: "Official product photo of L-shaped cardboard cat scratchers",
      },
      {
        src: "/images/products/official-l-scratcher-2.jpg",
        alt: "Official alternate product photo of the L-shaped cat scratcher set",
      },
    ],
  },
  {
    slug: "scratch-carpet-mat",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Scratch Carpet Mat",
    summary:
      "Self-adhesive carpet protectors for the couch corners your cat already claimed. Scratch here, furniture lives another day.",
    href: "/picks/scratch-carpet-mat",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4hlpcPn",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-scratch-carpet.jpg",
      alt: "Official product photo of a self-adhesive cat scratching carpet mat",
    },
    gallery: [
      {
        src: "/images/products/official-scratch-carpet.jpg",
        alt: "Official product photo of a self-adhesive cat scratching carpet mat",
      },
      {
        src: "/images/products/official-scratch-carpet-2.jpg",
        alt: "Official alternate product photo of the scratch carpet furniture protector",
      },
    ],
  },
  {
    slug: "wall-climbing-carpet",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Wall Climbing Carpet",
    summary:
      "A tall wall-mounted scratch carpet with fixed nails — climb, claw, and claim vertical real estate without sacrificing the sofa.",
    href: "/picks/wall-climbing-carpet",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/46WEa8o",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-wall-climbing-carpet.jpg",
      alt: "Official product photo of a wall-mounted cat climbing carpet scratcher",
    },
    gallery: [
      {
        src: "/images/products/official-wall-climbing-carpet.jpg",
        alt: "Official product photo of a wall-mounted cat climbing carpet scratcher",
      },
      {
        src: "/images/products/official-wall-climbing-carpet-2.jpg",
        alt: "Official alternate product photo of the wall climbing carpet",
      },
    ],
  },
  {
    slug: "wireless-cat-fountain",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Wireless Cat Fountain",
    summary:
      "Cordless stainless fountain with serious capacity and a filter-free design — placement without outlet tyranny. I also run a Catit PIXI, so this isn’t one-true-fountain cosplay.",
    href: "/picks/wireless-cat-fountain",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4yUVkj1",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-wireless-fountain.jpg",
      alt: "Official product photo of a wireless stainless steel cat water fountain",
    },
    gallery: [
      {
        src: "/images/products/official-wireless-fountain.jpg",
        alt: "Official product photo of a wireless stainless steel cat water fountain",
      },
      {
        src: "/images/products/official-wireless-fountain-2.jpg",
        alt: "Official alternate product photo of the wireless cat water fountain",
      },
    ],
  },
  {
    slug: "catit-pixi-fountain",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Catit PIXI Fountain",
    summary:
      "The conventional filtered fountain in my setup: plug-in, replaceable filters, multiple flow modes. The useful question is PIXI vs wireless — not “is it good?”",
    href: "/picks/catit-pixi-fountain",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4xRbkCa",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-catit-pixi.jpg",
      alt: "Official product photo of the pink Catit PIXI cat drinking fountain",
    },
    gallery: [
      {
        src: "/images/products/official-catit-pixi.jpg",
        alt: "Official product photo of the pink Catit PIXI cat drinking fountain",
      },
      {
        src: "/images/products/official-catit-pixi-2.jpg",
        alt: "Official alternate product photo of the Catit PIXI fountain",
      },
    ],
  },
  {
    slug: "stainless-litter-box",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Stainless Steel Litter Box",
    summary:
      "Covered, high-sided stainless I actually use — easy to wipe down, useful for containment, and paired with an open stainless when a cat wants zero cave vibes.",
    href: "/picks/stainless-litter-box",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3URkT5F",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-ss-litter-box.jpg",
      alt: "Official product photo of a covered stainless steel cat litter box",
    },
    gallery: [
      {
        src: "/images/products/official-ss-litter-box.jpg",
        alt: "Official product photo of a covered stainless steel cat litter box",
      },
      {
        src: "/images/products/official-ss-litter-box-2.jpg",
        alt: "Official alternate product photo of the stainless steel litter box",
      },
    ],
  },
  {
    slug: "open-stainless-litter-box",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Open Stainless Litter Box",
    summary:
      "High walls, raised step, 20L capacity, scoop included. Open-top stainless for cats who refuse to enter a cave.",
    href: "/picks/open-stainless-litter-box",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4A789YI",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-open-ss-litter.jpg",
      alt: "Official product photo of an open high-wall stainless steel litter box",
    },
    gallery: [
      {
        src: "/images/products/official-open-ss-litter.jpg",
        alt: "Official product photo of an open high-wall stainless steel litter box",
      },
      {
        src: "/images/products/official-open-ss-litter-2.jpg",
        alt: "Official alternate product photo of the open stainless litter box",
      },
    ],
  },
  {
    slug: "plant-litter-enclosure",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Plant Litter Enclosure",
    summary:
      "A rattan litter house that pretends to be furniture. Hides the box, keeps the room looking intentional, still requires scooping.",
    href: "/picks/plant-litter-enclosure",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4AbFLEL",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-plant-litter-enclosure.jpg",
      alt: "Official product photo of a rattan plant-style cat litter box enclosure",
    },
    gallery: [
      {
        src: "/images/products/official-plant-litter-enclosure.jpg",
        alt: "Official product photo of a rattan plant-style cat litter box enclosure",
      },
      {
        src: "/images/products/official-plant-litter-enclosure-2.jpg",
        alt: "Official alternate product photo of the plant litter enclosure",
      },
    ],
  },
  {
    slug: "litter-box-cabinet",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Litter Box Cabinet",
    summary:
      "A gray hidden litter enclosure with storage shelves — furniture that swallows the box and still leaves room for the backup bags.",
    href: "/picks/litter-box-cabinet",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/46houwm",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-litter-cabinet.jpg",
      alt: "Official product photo of a gray hidden litter box cabinet with shelves",
    },
    gallery: [
      {
        src: "/images/products/official-litter-cabinet.jpg",
        alt: "Official product photo of a gray hidden litter box cabinet with shelves",
      },
      {
        src: "/images/products/official-litter-cabinet-2.jpg",
        alt: "Official alternate product photo of the litter box cabinet",
      },
    ],
  },
  {
    slug: "feandrea-litter-enclosure",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Feandrea Litter Enclosure",
    summary:
      "Hidden washroom furniture with a power outlet — built for automatic boxes that need a plug and households that want the box out of sight.",
    href: "/picks/feandrea-litter-enclosure",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4j1sjx6",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-feandrea-enclosure.jpg",
      alt: "Official product photo of a Feandrea hidden litter box enclosure with power outlet",
    },
    gallery: [
      {
        src: "/images/products/official-feandrea-enclosure.jpg",
        alt: "Official product photo of a Feandrea hidden litter box enclosure with power outlet",
      },
      {
        src: "/images/products/official-feandrea-enclosure-2.jpg",
        alt: "Official alternate product photo of the Feandrea litter enclosure",
      },
    ],
  },
  {
    slug: "automatic-litter-box",
    category: "Litter",
    categoryHref: "/automatic-litter-boxes",
    headline: "Automatic Litter Box",
    summary:
      "Open-top, app-connected, quiet in real use — and still not magic. It cuts daily scooping; stainless boxes stay because automatic ≠ maintenance-free.",
    href: "/picks/automatic-litter-box",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4cGizV8",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-auto-litter-box.jpg",
      alt: "Official product photo of a light gray automatic self-cleaning litter box",
    },
    gallery: [
      {
        src: "/images/products/official-auto-litter-box.jpg",
        alt: "Official product photo of a light gray automatic self-cleaning litter box",
      },
      {
        src: "/images/products/official-auto-litter-box-2.jpg",
        alt: "Official alternate product photo of the automatic litter box",
      },
    ],
  },
  {
    slug: "fresh-step-odor-shield",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Fresh Step Odor Shield",
    summary:
      "Grocery-aisle multi-cat clumping clay I actually use — for clumping, scooping, and odor control, not boutique mythology.",
    href: "/picks/fresh-step-odor-shield",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3SZpbr8",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-fresh-step.jpg",
      alt: "Official product photo of Fresh Step Odor Shield multi-cat clumping litter",
    },
    gallery: [
      {
        src: "/images/products/official-fresh-step.jpg",
        alt: "Official product photo of Fresh Step Odor Shield multi-cat clumping litter",
      },
      {
        src: "/images/products/official-fresh-step-2.jpg",
        alt: "Official alternate product photo of Fresh Step Odor Shield litter",
      },
    ],
  },
  {
    slug: "petinstinct-litter-mat",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Petinstinct Litter Mat",
    summary:
      "Double-layer honeycomb mat (24×18″, pink) that catches litter before it colonizes the hallway — shake it out, rinse it, keep the floors from looking like a crime scene.",
    href: "/picks/petinstinct-litter-mat",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3T5sCwq",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-petinstinct-litter-mat.jpg",
      alt: "Official product photo of a pink Petinstinct double-layer honeycomb cat litter mat",
    },
    gallery: [
      {
        src: "/images/products/official-petinstinct-litter-mat.jpg",
        alt: "Official product photo of a pink Petinstinct double-layer honeycomb cat litter mat",
      },
      {
        src: "/images/products/official-petinstinct-litter-mat-2.jpg",
        alt: "Official alternate product photo of the Petinstinct honeycomb litter mat",
      },
    ],
  },
  {
    slug: "blue-wilderness-duck",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Blue Wilderness Duck",
    summary:
      "Grain-free adult dry food with real duck first — high protein, LifeSource Bits, and the kind of bag that disappears faster than your grocery budget planned.",
    href: "/picks/blue-wilderness-duck",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3UMUoyh",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-blue-wilderness-duck.jpg",
      alt: "Official product photo of Blue Buffalo Wilderness Duck adult dry cat food 11 lb bag",
    },
    gallery: [
      {
        src: "/images/products/official-blue-wilderness-duck.jpg",
        alt: "Official product photo of Blue Buffalo Wilderness Duck adult dry cat food 11 lb bag",
      },
      {
        src: "/images/products/official-blue-wilderness-duck-2.jpg",
        alt: "Official alternate product photo of Blue Buffalo Wilderness Duck dry cat food",
      },
    ],
  },
  {
    slug: "blue-tastefuls-sensitive-stomach",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Blue Tastefuls Sensitive Stomach",
    summary:
      "15 lb chicken adult formula for the delicate gut — easy-to-digest dry food when the house needs fewer digestive plot twists.",
    href: "/picks/blue-tastefuls-sensitive-stomach",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3UGiUkH",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-blue-tastefuls-sensitive.jpg",
      alt: "Official product photo of Blue Buffalo Tastefuls Chicken Adult Sensitive Stomach dry cat food 15 lb bag",
    },
    gallery: [
      {
        src: "/images/products/official-blue-tastefuls-sensitive.jpg",
        alt: "Official product photo of Blue Buffalo Tastefuls Chicken Adult Sensitive Stomach dry cat food 15 lb bag",
      },
      {
        src: "/images/products/official-blue-tastefuls-sensitive-2.jpg",
        alt: "Official alternate product photo of Blue Tastefuls Sensitive Stomach dry cat food",
      },
    ],
  },
  {
    slug: "cat-food-can-covers-set",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Cat Food Can Covers Set",
    summary:
      "Six-piece wet-food kit: silicone lids, can opener, steel spoon, and treat squeezer — so half-eaten cans stop living open in the fridge like a science project.",
    href: "/picks/cat-food-can-covers-set",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4irAz9s",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-cat-food-can-covers.jpg",
      alt: "Official product photo of a blue six-piece cat food can covers and feeding tools set",
    },
    gallery: [
      {
        src: "/images/products/official-cat-food-can-covers.jpg",
        alt: "Official product photo of a blue six-piece cat food can covers and feeding tools set",
      },
      {
        src: "/images/products/official-cat-food-can-covers-2.jpg",
        alt: "Official alternate product photo of the cat food can covers set",
      },
    ],
  },
  {
    slug: "blue-tastefuls-chicken-pate",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Blue Tastefuls Chicken Pâté",
    summary:
      "24-pack of 5.5 oz chicken pâté — natural wet food that keeps dinner interesting when dry kibble alone is a labor dispute.",
    href: "/picks/blue-tastefuls-chicken-pate",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/46ZAq60",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-blue-tastefuls-pate.jpg",
      alt: "Official product photo of Blue Buffalo Tastefuls Chicken Pâté wet cat food 24-pack",
    },
    gallery: [
      {
        src: "/images/products/official-blue-tastefuls-pate.jpg",
        alt: "Official product photo of Blue Buffalo Tastefuls Chicken Pâté wet cat food 24-pack",
      },
      {
        src: "/images/products/official-blue-tastefuls-pate-2.jpg",
        alt: "Official alternate product photo of Blue Tastefuls Chicken Pâté wet cat food",
      },
    ],
  },
  {
    slug: "friskies-pate-variety",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Friskies Pâté Variety Pack",
    summary:
      "40 cans of seafood & chicken pâté — the classic grocery wet food that still shows up when the fancy cans run out mid-week.",
    href: "/picks/friskies-pate-variety",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4h5v65O",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-friskies-pate-variety.jpg",
      alt: "Official product photo of Purina Friskies pâté wet cat food seafood and chicken variety pack",
    },
    gallery: [
      {
        src: "/images/products/official-friskies-pate-variety.jpg",
        alt: "Official product photo of Purina Friskies pâté wet cat food seafood and chicken variety pack",
      },
      {
        src: "/images/products/official-friskies-pate-variety-2.jpg",
        alt: "Official alternate product photo of Friskies pâté variety pack wet cat food",
      },
    ],
  },
  {
    slug: "iams-urinary-tract",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "IAMS Urinary Tract Health",
    summary:
      "22 lb chicken dry food with a urinary-tract formula — a big-bag staple I buy for the multi-cat pantry when that style of food fits the household.",
    href: "/picks/iams-urinary-tract",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3UTrkFg",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/products/official-iams-urinary-tract.jpg",
      alt: "Official product photo of IAMS Proactive Health Urinary Tract Health chicken dry cat food 22 lb bag",
    },
    gallery: [
      {
        src: "/images/products/official-iams-urinary-tract.jpg",
        alt: "Official product photo of IAMS Proactive Health Urinary Tract Health chicken dry cat food 22 lb bag",
      },
      {
        src: "/images/products/official-iams-urinary-tract-2.jpg",
        alt: "Official alternate product photo of IAMS Urinary Tract Health dry cat food",
      },
    ],
  },
  {
    slug: "delectables-squeeze-up",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Delectables Squeeze Up",
    summary:
      "Cat bribery in a tube. My cats actually want these — we have the photo of two sharing one — and I keep buying them because a treat that works beats a complicated treat thesis.",
    href: "/picks/delectables-squeeze-up",
    experience: { type: "personally_used" },
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4cKgIPf",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/cats/user-delectables-squeeze-up.jpg",
      alt: "Two cats sharing a Delectables Squeeze Up tube at home",
    },
    gallery: [
      {
        src: "/images/cats/user-delectables-squeeze-up.jpg",
        alt: "Two cats sharing a Delectables Squeeze Up tube at home",
      },
      {
        src: "/images/products/official-delectables-squeeze-up.jpg",
        alt: "Official product photo of Delectables Squeeze Up variety pack cat treats",
      },
      {
        src: "/images/products/official-delectables-squeeze-up-2.jpg",
        alt: "Official alternate product photo of Delectables Squeeze Up treats",
      },
    ],
  },
  {
    slug: "pink-cat-couch",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Pink Cat Couch",
    summary:
      "A plush mini sofa for cats who think they deserve living-room furniture — washable cover, non-slip base, and enough drama for nap photos.",
    href: "/picks/pink-cat-couch",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4rbzXak",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Pink Cat Couch — owner or authorized product photo needed",
    },
  },
  {
    slug: "cat-window-perch-hammock",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Cat Window Perch Hammock",
    summary:
      "Window real estate on suction mounts — for cats who want the view without another freestanding tower in the room.",
    href: "/picks/cat-window-perch-hammock",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4AhDSXp",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Cat Window Perch Hammock — owner or authorized product photo needed",
    },
  },
  {
    slug: "suction-window-perch",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Suction Cup Window Perch",
    summary:
      "Foldable window perch on suction cups — bird TV when floor space is already spoken for.",
    href: "/picks/suction-window-perch",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3Ty70Jf",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Suction Cup Window Perch — owner or authorized product photo needed",
    },
  },
  {
    slug: "self-warming-cat-pad",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Self-Warming Cat Pad",
    summary:
      "No-plug warming pad that reflects body heat — a soft rectangle for cats who colonize laundry and radiators.",
    href: "/picks/self-warming-cat-pad",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/46m2Ozi",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Self-Warming Cat Pad — owner or authorized product photo needed",
    },
  },
  {
    slug: "tiki-cat-baby-favorites",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Tiki Cat Baby Favorites",
    summary:
      "24-can kitten wet mega pack — chicken-first recipes for the 8-weeks-and-up crowd when you want variety without a fridge full of mismatched cans.",
    href: "/picks/tiki-cat-baby-favorites",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4dbmZUc",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Tiki Cat Baby Favorites — owner or authorized product photo needed",
    },
  },
  {
    slug: "tiki-cat-kitten-dry",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Tiki Cat Born Carnivore Kitten",
    summary:
      "Non-GMO chicken kitten dry food for the crunchy half of the kitten pantry — when wet alone is not the whole plan.",
    href: "/picks/tiki-cat-kitten-dry",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3VtOHW4",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Tiki Cat Born Carnivore Kitten — owner or authorized product photo needed",
    },
  },
  {
    slug: "tiki-cat-broths",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Tiki Cat Broths",
    summary:
      "Savory broth pouches as a meal topper or sip — hydration bait for cats who treat water bowls like a suggestion.",
    href: "/picks/tiki-cat-broths",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4xXs8Yq",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Tiki Cat Broths — owner or authorized product photo needed",
    },
  },
  {
    slug: "tiki-cat-stix",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Tiki Cat Stix",
    summary:
      "50 single-serve lickable wet treats in a jar — chicken, tuna, and salmon sticks for bribery that does not require a spoon.",
    href: "/picks/tiki-cat-stix",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3UUAVf0",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Tiki Cat Stix — owner or authorized product photo needed",
    },
  },
  {
    slug: "tiki-cat-soft-treats",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Tiki Cat Soft Treats",
    summary:
      "Grain-free soft chicken treats for the pocket reward — fewer calories than a full meal negotiation, more useful than a lecture.",
    href: "/picks/tiki-cat-soft-treats",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4xMLWh0",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Tiki Cat Soft Treats — owner or authorized product photo needed",
    },
  },
  {
    slug: "royal-canin-maine-coon",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Royal Canin Maine Coon Adult",
    summary:
      "Breed-nutrition dry food sized for big jaws — the Maine Coon bag kept in rotation for the long-haired unit in the house.",
    href: "/picks/royal-canin-maine-coon",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4iW70wY",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Royal Canin Maine Coon Adult — owner or authorized product photo needed",
    },
  },
  {
    slug: "royal-canin-urinary-wet",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Royal Canin Urinary Care Wet",
    summary:
      "Wet urinary-care slices for the pouch side of a urinary-focused pantry — not a substitute for vet advice, just a formula that gets bought.",
    href: "/picks/royal-canin-urinary-wet",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3UGwCEa",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Royal Canin Urinary Care Wet — owner or authorized product photo needed",
    },
  },
  {
    slug: "temptations-chicken",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Temptations Tasty Chicken",
    summary:
      "The classic crunchy-outside soft-inside bribe in a 16 oz tub — understated calories, overstated cat opinions.",
    href: "/picks/temptations-chicken",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3T5Xlt7",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Temptations Tasty Chicken — owner or authorized product photo needed",
    },
  },
  {
    slug: "blue-buffalo-kitten-bursts",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Blue Buffalo Kitten Bursts",
    summary:
      "Crunchy chicken kitten treats for training and bribery — small bag, loud results.",
    href: "/picks/blue-buffalo-kitten-bursts",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4rjUPMD",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Blue Buffalo Kitten Bursts — owner or authorized product photo needed",
    },
  },
  {
    slug: "blue-tastefuls-mini-purees",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Blue Tastefuls Mini Purées",
    summary:
      "24 single-serve squeeze tubes — chicken, tuna, and salmon purées when the household wants tube bribery with a Blue Buffalo label.",
    href: "/picks/blue-tastefuls-mini-purees",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4rdZNdR",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Blue Tastefuls Mini Purées — owner or authorized product photo needed",
    },
  },
  {
    slug: "friskies-party-mix-yums",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Friskies Party Mix Yums",
    summary:
      "Crunchy party-mix style treats — the grocery classic for cats who prefer volume over a tasting menu.",
    href: "/picks/friskies-party-mix-yums",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/46jjozN",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Friskies Party Mix Yums — owner or authorized product photo needed",
    },
  },
  {
    slug: "purina-fortiflora",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Purina Pro Plan FortiFlora",
    summary:
      "Probiotic packets sprinkled on food — a gut-support staple for digestive plot twists, not a miracle cure.",
    href: "/picks/purina-fortiflora",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4r87emG",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Purina Pro Plan FortiFlora — owner or authorized product photo needed",
    },
  },
  {
    slug: "iams-urinary-hairball",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "IAMS Urinary + Hairball",
    summary:
      "22 lb dry food with urinary-tract and hairball formulas on one bag — distinct from the other IAMS urinary bag already on the site.",
    href: "/picks/iams-urinary-hairball",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4xjSHGd",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for IAMS Urinary + Hairball — owner or authorized product photo needed",
    },
  },
  {
    slug: "airtag-cat-collar",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "AirTag Cat Collar",
    summary:
      "Breakaway reflective collar with a built-in AirTag holder — Find My for the escape artist, assuming they tolerate jewelry with a purpose.",
    href: "/picks/airtag-cat-collar",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4cIv6ra",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for AirTag Cat Collar — owner or authorized product photo needed",
    },
  },
  {
    slug: "ring-pet-tag",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Ring Pet Tag",
    summary:
      "QR collar tag with scan alerts and a shareable pet profile — not GPS, just a smarter lost-cat sticker that talks to the Ring app.",
    href: "/picks/ring-pet-tag",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4ysbqQA",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Ring Pet Tag — owner or authorized product photo needed",
    },
  },
  {
    slug: "ring-indoor-cam",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Ring Indoor Cam",
    summary:
      "Indoor security cam for checking on cats (and everything else) — plug-in peace of mind when you are not home to referee the chaos.",
    href: "/picks/ring-indoor-cam",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4h33caN",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Ring Indoor Cam — owner or authorized product photo needed",
    },
  },
  {
    slug: "furbo-360-cat-camera",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Furbo 360° Cat Camera",
    summary:
      "Wide-angle cat camera with treat toss and a feather toy on top — remote bribery for when you need video proof of who started it.",
    href: "/picks/furbo-360-cat-camera",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3UGx4SS",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Furbo 360° Cat Camera — owner or authorized product photo needed",
    },
  },
  {
    slug: "pumpkii-pet-camera",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Pumpkii Pet Camera",
    summary:
      "Rolling camera robot with treat toss and laser play — a separate gadget from Furbo for multi-room coverage and floor-level chaos.",
    href: "/picks/pumpkii-pet-camera",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4A6H9J3",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Pumpkii Pet Camera — owner or authorized product photo needed",
    },
  },
  {
    slug: "petlibro-granary-feeder",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "PETLIBRO Granary Feeder",
    summary:
      "Wi-Fi automatic feeder with scheduled portions and a meal-call recording — for households that need breakfast to happen whether anyone is awake.",
    href: "/picks/petlibro-granary-feeder",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4imRMRr",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for PETLIBRO Granary Feeder — owner or authorized product photo needed",
    },
  },
  {
    slug: "gps-tracker-collar",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "GPS Tracker Collar",
    summary:
      "Real-time tracking collar gear for the outdoor-curious — batteries, subscriptions, and whether your cat even needs one still apply.",
    href: "/picks/gps-tracker-collar",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4xorPow",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for GPS Tracker Collar — owner or authorized product photo needed",
    },
  },
  {
    slug: "tidy-cats-tidy-feet",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Tidy Cats Tidy Feet",
    summary:
      "Performance+ low-tracking multi-cat clumping litter — for boxes that already have enough drama without paw prints everywhere.",
    href: "/picks/tidy-cats-tidy-feet",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4h6AKEM",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Tidy Cats Tidy Feet — owner or authorized product photo needed",
    },
  },
  {
    slug: "tidy-cats-lightweight",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Tidy Cats Lightweight",
    summary:
      "Unscented multi-cat lightweight litter — easier to haul upstairs than the dense clay bags that train your biceps instead.",
    href: "/picks/tidy-cats-lightweight",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3T2u9Du",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Tidy Cats Lightweight — owner or authorized product photo needed",
    },
  },
  {
    slug: "tidy-cats-247-performance",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Tidy Cats 24/7 Performance",
    summary:
      "Everyday clumping litter for boxes that never get a day off — the grocery-aisle workhorse version.",
    href: "/picks/tidy-cats-247-performance",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3VuejSL",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Tidy Cats 24/7 Performance — owner or authorized product photo needed",
    },
  },
  {
    slug: "fresh-step-deodorizing-crystals",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Fresh Step Deodorizing Crystals",
    summary:
      "Litter-box deodorizing crystals sprinkled into the box — odor insurance, not a full litter replacement.",
    href: "/picks/fresh-step-deodorizing-crystals",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/46m380Y",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Fresh Step Deodorizing Crystals — owner or authorized product photo needed",
    },
  },
  {
    slug: "dr-elseys-clean-tracks",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Dr. Elsey's Clean Tracks",
    summary:
      "Unscented hard-clumping litter built around low tracking — multi-cat strength without the perfume aisle experience.",
    href: "/picks/dr-elseys-clean-tracks",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3UUCcCO",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Dr. Elsey's Clean Tracks — owner or authorized product photo needed",
    },
  },
  {
    slug: "cat-tunnel-toy-set",
    category: "Cat Toys",
    categoryHref: "/cat-toys",
    headline: "Cat Tunnel and Toy Set",
    summary:
      "Collapsible three-way tunnel plus a pile of mice, balls, and springs — enrichment that takes over the hallway for an afternoon.",
    href: "/picks/cat-tunnel-toy-set",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4r6YugC",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/images/cats/user-scratch-tunnel.jpg",
      alt: "Owner photo of a cat using a tunnel toy at home",
    },
    gallery: [
      {
        src: "/images/cats/user-scratch-tunnel.jpg",
        alt: "Owner photo of a cat using a tunnel toy at home",
      },
    ],
  },
  {
    slug: "sensitive-cat-litter",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "PetSafe ScoopFree Fragrance-Free Crystal Litter",
    summary:
      "Fragrance-free crystal litter for ScoopFree trays — the Sensitive Litter variant when perfume in the box is the problem, not the cat.",
    href: "/picks/sensitive-cat-litter",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4xZ9z6k",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for PetSafe ScoopFree Fragrance-Free Crystal Litter — owner or authorized product photo needed",
    },
  },
  {
    slug: "litter-robot-4",
    category: "Litter",
    categoryHref: "/automatic-litter-boxes",
    headline: "Litter-Robot 4",
    summary:
      "Whisker self-cleaning litter box — a different machine from the open-top automatic already on the site, with the app, globe, and price tag that come with it.",
    href: "/picks/litter-robot-4",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4AbT7AQ",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Litter-Robot 4 — owner or authorized product photo needed",
    },
  },
  {
    slug: "cat-litter-scoop",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Cat Litter Scoop with Holder",
    summary:
      "Stainless scoop with a holder so the scoop stops living on top of the bag like a crime scene prop.",
    href: "/picks/cat-litter-scoop",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4xUNtBV",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Cat Litter Scoop with Holder — owner or authorized product photo needed",
    },
  },
  {
    slug: "affordable-cat-scoop",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Affordable Cat Litter Scoop",
    summary:
      "A durable basic scooper — the backup or budget option when you do not need the fancy holder set.",
    href: "/picks/affordable-cat-scoop",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/3URlDaX",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Affordable Cat Litter Scoop — owner or authorized product photo needed",
    },
  },
  {
    slug: "blue-tastefuls-chicken-flaked",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Blue Tastefuls Chicken Flaked",
    summary:
      "Flaked chicken wet food — same Amazon destination as the pâté listing when the cut changes but the cart link does not.",
    href: "/picks/blue-tastefuls-chicken-flaked",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/46ZAq60",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Blue Tastefuls Chicken Flaked — owner or authorized product photo needed",
    },
  },
  {
    slug: "friskies-chunky-variety",
    category: "Cat Food",
    categoryHref: "/cat-food",
    headline: "Friskies Extra Chunky Variety",
    summary:
      "24-can chunky wet variety — the textured grocery classic when pâté alone is a labor dispute.",
    href: "/picks/friskies-chunky-variety",
    experience: { type: "personally_used" },
    needsMedia: true,
    merchants: [
      {
        merchant: "amazon",
        url: "https://amzn.to/4cGe6Sv",
        cta: "See Current Price",
      },
    ],
    image: {
      src: "/brand/og-default.png",
      alt: "Media pending for Friskies Extra Chunky Variety — owner or authorized product photo needed",
    },
  },
  {
    slug: "best-automatic-litter-box",
    category: "Litter",
    categoryHref: "/cat-litter",
    headline: "Best Automatic Litter Box",
    summary:
      "A buying guide for the scoop-averse, with the tradeoffs these machines still will not advertise.",
    href: "/guides/best-automatic-litter-boxes",
    merchants: [
      { merchant: "amazon" },
      { merchant: "chewy" },
      { merchant: "whisker" },
    ],
    image: {
      src: unsplashPhoto("1472491235688-bdc81a63246e", 1200),
      alt: "Placeholder editorial photo of a cat portrait",
    },
  },
  {
    slug: "best-cat-water-fountain",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Best Cat Water Fountain",
    summary:
      "What to prioritize before you buy another appliance your cat may refuse on principle.",
    href: "/guides/what-to-look-for-in-a-cat-water-fountain",
    merchants: [{ merchant: "amazon" }, { merchant: "chewy" }],
    image: {
      src: unsplashPhoto("1548839140-29a749e1cf4d", 1200),
      alt: "Placeholder editorial photo of water, standing in for a fountain",
    },
  },
  {
    slug: "best-cat-tree-for-normal-homes",
    category: "Furniture",
    categoryHref: "/cat-furniture",
    headline: "Best Cat Tree for Normal-Looking Homes",
    summary:
      "Vertical real estate that does not look like it escaped from a 2004 pet catalog.",
    href: "/guides/cat-trees-that-dont-look-like-nightmares",
    merchants: [{ merchant: "amazon" }, { merchant: "chewy" }, { merchant: "tuft-and-paw" }],
    image: {
      src: unsplashPhoto("1586023492125-27b2c045efd7", 1200),
      alt: "Placeholder editorial photo of a designed living space",
    },
  },
  {
    slug: "best-gps-tracker-for-cats",
    category: "Cat Tech",
    categoryHref: "/cat-tech",
    headline: "Best GPS Tracker for Cats",
    summary:
      "How to think about collars, batteries, and whether your cat even needs one.",
    href: "/guides/should-your-cat-wear-a-gps-tracker",
    merchants: [{ merchant: "amazon" }, { merchant: "tractive" }],
    image: {
      src: unsplashPhoto("1606214174585-fe31582dc6ee", 1200),
      alt: "Placeholder editorial photo of a white cat in profile",
    },
  },
];

export function getPickBySlug(slug: string) {
  return featuredPicks.find((pick) => pick.slug === slug);
}

export function getLivePicks() {
  return featuredPicks.filter((pick) =>
    pick.merchants.some((offer) => Boolean(offer.url)),
  );
}
