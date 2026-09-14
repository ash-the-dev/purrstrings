/**
 * Firsthand review bodies for enriched /picks pages.
 * Only include facts Ash confirmed or already documented in the repo.
 */

export type InlinePart =
  | string
  | {
      href: string;
      label: string;
    };

export type PickReviewBlock =
  | { type: "p"; parts: InlinePart[] }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; parts: InlinePart[] };

export type PickReview = {
  /** Document <title> (without site suffix handling). */
  seoTitle: string;
  seoDescription: string;
  /** Optional voice line under the H1. */
  dek?: string;
  /** Prefer owner video above the still gallery. */
  leadWithVideo?: boolean;
  blocks: PickReviewBlock[];
};

export const pickReviews: Record<string, PickReview> = {
  "delectables-squeeze-up": {
    seoTitle: "Delectables Squeeze Up — Cat Treats My Cats Actually Share",
    seoDescription:
      "Ash buys Delectables Squeeze Ups for their own cats. A short firsthand take on why these lickable tubes work as high-value cat bribery — with the photo to prove it.",
    dek: "Cat bribery in a tube.",
    blocks: [
      {
        type: "h2",
        text: "My take",
      },
      {
        type: "p",
        parts: [
          "I buy Delectables Squeeze Ups, my cats like them, and the photo is the review. Two of them sharing one tube is not something you get from a product listing or somebody else’s write-up.",
        ],
      },
      {
        type: "h2",
        text: "Why I like it",
      },
      {
        type: "p",
        parts: [
          "They’re useful as a high-value treat — basically cat bribery — when you need something the cats are actually interested in. The strongest part of this recommendation is simple: they want them. That matters more than pretending a cat treat needs a complicated essay.",
        ],
      },
      {
        type: "h2",
        text: "What other owners say",
      },
      {
        type: "p",
        parts: [
          "Broader owner feedback often says these are popular with picky cats, and some people use lickable tubes around medication time. I’m not claiming personal med use here — just flagging what shows up in the wild.",
        ],
      },
      {
        type: "h2",
        text: "Best for / skip if",
      },
      {
        type: "ul",
        items: [
          "Best for: households that need a treat cats will actually work for",
          "Skip if: you’re treating treats like a full meal plan",
        ],
      },
      {
        type: "h2",
        text: "Would I buy it again?",
      },
      {
        type: "p",
        parts: ["Yes. Still buying. Still recommending."],
      },
    ],
  },

  "automatic-litter-box": {
    seoTitle: "Automatic Litter Box Review — Convenience Without the Fantasy",
    seoDescription:
      "Ash’s firsthand take on an open-top automatic litter box: less daily scooping, still emptying and cleaning, plus why stainless boxes stay in the house.",
    dek: "Convenience without the fantasy.",
    blocks: [
      {
        type: "h2",
        text: "My take",
      },
      {
        type: "p",
        parts: [
          "I personally purchased and use this automatic litter box with my cats. I like it and recommend it — for people who want less scooping and will still show up for the rest of the job.",
        ],
      },
      {
        type: "h2",
        text: "What actually improved",
      },
      {
        type: "p",
        parts: [
          "Convenience. Automatic cleaning reduces how much routine scooping I have to do, which is the entire reason an automatic box earns its footprint in the first place.",
        ],
      },
      {
        type: "p",
        parts: [
          "Mine is an open-top design with app connectivity and sensors, and it operates quietly. That’s the firsthand shape of the unit — not a tour of the whole category.",
        ],
      },
      {
        type: "h2",
        text: "Automatic ≠ maintenance-free",
      },
      {
        type: "p",
        parts: [
          "I still keep conventional ",
          {
            href: "/picks/stainless-litter-box",
            label: "stainless litter boxes",
          },
          " as part of my setup. Automatic boxes reduce the repetitive part of litter maintenance. They still need attention, emptying, and cleaning. If you wanted an appliance that erases the litter box from your life, this category will disappoint you — and that’s useful to know before you buy furniture-sized plastic.",
        ],
      },
      {
        type: "callout",
        parts: [
          "For the broader “who should buy one / what these machines actually do” conversation, read ",
          {
            href: "/guides/best-automatic-litter-boxes",
            label: "the automatic litter box guide",
          },
          " — this page stays about the unit I use.",
        ],
      },
      {
        type: "h2",
        text: "Best for / skip if",
      },
      {
        type: "ul",
        items: [
          "Best for: households that value reducing daily scooping and understand the machine still needs care",
          "Skip if: you want set-and-forget, or you won’t empty a waste system on a real schedule",
        ],
      },
      {
        type: "h2",
        text: "Would I buy it again?",
      },
      {
        type: "p",
        parts: [
          "Yes — with eyes open. I like having an automatic litter box. I recommend it to someone who wants less scooping and won’t pretend “automatic” means “done.”",
        ],
      },
    ],
  },

  "leopard-print-cat-tree": {
    seoTitle: "Leopard-Print Cat Tree — Tall, Ridiculous, Actually Used",
    seoDescription:
      "Ash’s cats use this multi-level leopard-print cat tree at home. Firsthand owner photos, vertical space that earns its footprint, and who should skip the loud furniture.",
    dek: "Tall, ridiculous, actually used.",
    blocks: [
      {
        type: "h2",
        text: "My take",
      },
      {
        type: "p",
        parts: [
          "I personally purchased this cat tree and my cats actually use it. The owner photos on this page — cats and kittens resting on the levels — are stronger evidence than any generic claim that “cats love cat trees.”",
        ],
      },
      {
        type: "h2",
        text: "Why I like it",
      },
      {
        type: "p",
        parts: [
          "It gives them vertical space, places to lounge and perch, scratching surfaces, and multiple levels in one piece of furniture. Cat furniture that refuses to apologize. The leopard print is part of why this one belongs on Purrstrings — it doesn’t pretend not to be a cat tree, and it’s ridiculous in a way I like.",
        ],
      },
      {
        type: "h2",
        text: "The honest tradeoff",
      },
      {
        type: "p",
        parts: [
          "A tall multi-level tree takes up real space. Someone shopping for nearly invisible minimalist pet furniture is not the target customer. If you want the buying logic around livable cat furniture — not just this print — see ",
          {
            href: "/guides/cat-trees-that-dont-look-like-nightmares",
            label: "cat trees that don’t look like nightmares",
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "Best for / skip if",
      },
      {
        type: "ul",
        items: [
          "Best for: multi-cat homes that need vertical real estate and can live with loud furniture",
          "Skip if: you’re protecting every square foot, or you only want beige that disappears in photos",
        ],
      },
      {
        type: "h2",
        text: "Would I buy it again?",
      },
      {
        type: "p",
        parts: [
          "Yes — this style of cat tree. My cats actually use the thing, which is the standard that matters.",
        ],
      },
    ],
  },

  "kitty-treadmill": {
    seoTitle: "Nordic Beast Cat Wheel — Yes, My Cats Actually Run On It",
    seoDescription:
      "Ash’s firsthand take on a full-size kitty treadmill, with home video of cats using it — enrichment for energetic indoor cats, if you have the room.",
    dek: "The video is the receipt.",
    leadWithVideo: true,
    blocks: [
      {
        type: "h2",
        text: "My take",
      },
      {
        type: "p",
        parts: [
          "I personally purchased this cat wheel and my cats have actually used it. We have original photo and video evidence — including two kittens running on the wheel. For an expensive, weird piece of cat equipment, that is the whole question people are asking. In my house, the answer is yes.",
        ],
      },
      {
        type: "h2",
        text: "Why it earns the space",
      },
      {
        type: "p",
        parts: [
          "It gives energetic indoor cats another outlet for movement and enrichment. In a multi-cat household, that kind of outlet is not a novelty — it’s another way to burn off the 2am plotline before it becomes your furniture’s problem.",
        ],
      },
      {
        type: "h2",
        text: "What to know before buying",
      },
      {
        type: "p",
        parts: [
          "It is a large piece of cat equipment. Don’t minimize the footprint. Anyone considering a full-size cat wheel needs to understand they’re putting a giant exercise wheel in their house. That’s useful buying information, not a dunk on the product.",
        ],
      },
      {
        type: "h2",
        text: "What other owners say",
      },
      {
        type: "p",
        parts: [
          "Broader owner feedback often covers assembly, footprint, noise, and the fact that not every cat immediately understands a wheel. I’m not turning those into personal claims about my assembly time, learning curve, or decibel readings — just the themes you’ll see if you read around before you buy.",
        ],
      },
      {
        type: "h2",
        text: "Best for / skip if",
      },
      {
        type: "ul",
        items: [
          "Best for: energetic indoor cats and owners who actually have room for a full-size wheel",
          "Skip if: you’re hoping this is a cute small gadget, or your floor plan is already at capacity",
        ],
      },
      {
        type: "h2",
        text: "Would I buy it again?",
      },
      {
        type: "p",
        parts: [
          "Yes. I like it and would recommend it — especially for energetic indoor cats — provided you have the room. Lean on the video on this page, not the marketing language.",
        ],
      },
    ],
  },

  "wireless-cat-fountain": {
    seoTitle: "Wireless Cat Fountain — Cordless, Stainless, Filter-Free",
    seoDescription:
      "Ash uses a wireless stainless cat fountain at home and also runs a Catit PIXI — when cordless placement and skipping replacement filters matter.",
    dek: "Escape hatch from outlet tyranny.",
    blocks: [
      {
        type: "h2",
        text: "My take",
      },
      {
        type: "p",
        parts: [
          "I personally purchased and use this wireless fountain with my cats. I like it and recommend it — especially if cordless placement and avoiding replacement filters matter to you.",
        ],
      },
      {
        type: "h2",
        text: "Why I like it",
      },
      {
        type: "p",
        parts: [
          "What makes this one useful is the combination of cordless placement, stainless construction, large capacity, and a filter-free / wastewater-separation design. The big advantage of wireless is placement flexibility. You’re not designing the fountain’s location around the nearest outlet.",
        ],
      },
      {
        type: "p",
        parts: [
          "The filter-free approach also appeals if you don’t want another recurring replacement-filter purchase. Filter-free still does not mean maintenance-free. Water fountains still need cleaning.",
        ],
      },
      {
        type: "h2",
        text: "I also run a filtered fountain",
      },
      {
        type: "p",
        parts: [
          "I own a more conventional filtered ",
          {
            href: "/picks/catit-pixi-fountain",
            label: "Catit PIXI fountain",
          },
          " too — so this isn’t “one true fountain” cosplay. Short version: wireless wins when you want cordless placement and fewer filter consumables; PIXI wins when you want a conventional filtered system with flow modes. Fuller compare lives on the PIXI page and in ",
          {
            href: "/guides/what-to-look-for-in-a-cat-water-fountain",
            label: "what to look for in a cat water fountain",
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "Best for / skip if",
      },
      {
        type: "ul",
        items: [
          "Best for: placement flexibility and skipping the filter subscription habit",
          "Skip if: you prefer a plug-in filtered workflow, or you won’t clean any fountain",
        ],
      },
      {
        type: "h2",
        text: "Would I buy it again?",
      },
      {
        type: "p",
        parts: ["Yes — particularly for the cordless / filter-free use case."],
      },
    ],
  },

  "catit-pixi-fountain": {
    seoTitle: "Catit PIXI Fountain — Filtered Fountain vs Wireless",
    seoDescription:
      "Ash owns the Catit PIXI and a wireless filter-free fountain. A firsthand comparison so you can pick the fountain workflow that fits your house.",
    dek: "The useful question isn’t “is it good?”",
    blocks: [
      {
        type: "h2",
        text: "My take",
      },
      {
        type: "p",
        parts: [
          "I personally purchased and used the Catit PIXI with my cats. I like it and recommend it. The better question for this page is not “is it good?” — it’s whether a filtered PIXI or a cordless / filter-free fountain fits your house better.",
        ],
      },
      {
        type: "h2",
        text: "What this fountain is",
      },
      {
        type: "p",
        parts: [
          "This is the more conventional filtered-fountain side of my setup: plug-in power, multiple water-flow modes, a cute design, and an established replaceable-filter system.",
        ],
      },
      {
        type: "h2",
        text: "PIXI vs the wireless fountain I also own",
      },
      {
        type: "ul",
        items: [
          "Catit PIXI: filtered, conventional plug-in approach, flow modes, cute design, replaceable filters",
          "Wireless fountain: cordless placement, stainless construction, filter-free design, fewer consumable-filter concerns",
        ],
      },
      {
        type: "p",
        parts: [
          "Neither approach has to win universally. PIXI makes more sense if you like a conventional filtered system and don’t mind buying filters. The ",
          {
            href: "/picks/wireless-cat-fountain",
            label: "wireless cat fountain",
          },
          " makes more sense if you prioritize placement flexibility and avoiding replacement filters. More buying criteria: ",
          {
            href: "/guides/what-to-look-for-in-a-cat-water-fountain",
            label: "fountain buying guide",
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "Best for / skip if",
      },
      {
        type: "ul",
        items: [
          "Best for: people who want a filtered fountain workflow and don’t mind replacement filters",
          "Skip if: you want cordless placement or you’re done with filter shopping",
        ],
      },
      {
        type: "h2",
        text: "Would I buy it again?",
      },
      {
        type: "p",
        parts: [
          "Yes. I like the PIXI. I’m not declaring it my forever favorite fountain over the wireless unit — different jobs.",
        ],
      },
    ],
  },

  "stainless-litter-box": {
    seoTitle:
      "Covered Stainless Litter Box — Covered vs Open, Real-House Use",
    seoDescription:
      "Ash’s firsthand take on a covered stainless litter box: cleaning and usability, plus how it compares to the open stainless box also in the house.",
    dek: "Covered stainless, used in a real bathroom — no lab coat required.",
    blocks: [
      {
        type: "h2",
        text: "My take",
      },
      {
        type: "p",
        parts: [
          "I personally purchased and use a covered stainless steel litter box. I like it and recommend it — and I also use an ",
          {
            href: "/picks/open-stainless-litter-box",
            label: "open stainless litter box",
          },
          ", which is useful context instead of pretending one format wins for every cat.",
        ],
      },
      {
        type: "h2",
        text: "What I like in practice",
      },
      {
        type: "p",
        parts: [
          "It’s straightforward to wipe and scoop, and the high sides plus cover help with litter kick-out and a bit of privacy. For me, stainless also feels sturdier and less “disposable pet product” than another plastic box — that’s a usability and feel preference, not a hygiene study.",
        ],
      },
      {
        type: "h2",
        text: "Covered vs open",
      },
      {
        type: "p",
        parts: [
          "The covered, high-sided version is useful when containment and privacy matter. The open version makes more sense for cats or owners who prefer a completely open setup. Do not assume every cat prefers a covered box. Preferences differ — that’s exactly why having both designs in the house is useful.",
        ],
      },
      {
        type: "p",
        parts: [
          "In my broader litter setup this sits alongside clay litter like ",
          {
            href: "/picks/fresh-step-odor-shield",
            label: "Fresh Step Odor Shield",
          },
          " and can share the bathroom map with an ",
          {
            href: "/picks/automatic-litter-box",
            label: "automatic litter box",
          },
          " when you want conventional capacity too.",
        ],
      },
      {
        type: "h2",
        text: "Best for / skip if",
      },
      {
        type: "ul",
        items: [
          "Best for: households that want a covered box with high sides for containment and a box that’s easy to wipe down",
          "Skip if: your cat refuses cave-style boxes — look at the open stainless instead",
        ],
      },
      {
        type: "h2",
        text: "Would I buy it again?",
      },
      {
        type: "p",
        parts: [
          "Yes — I would buy stainless again. Whether I’d steer you to covered or open depends on the cat and the household, not a universal winner badge.",
        ],
      },
    ],
  },

  "fresh-step-odor-shield": {
    seoTitle: "Fresh Step Odor Shield — Clay Litter I Actually Use",
    seoDescription:
      "Ash’s firsthand take on Fresh Step Odor Shield as everyday clumping clay — plus common owner complaints to know before you buy, kept separate from personal experience.",
    dek: "Grocery-aisle clay that earns its keep.",
    blocks: [
      {
        type: "h2",
        text: "My take",
      },
      {
        type: "p",
        parts: [
          "I personally purchased and use Fresh Step Odor Shield. I like it and continue to recommend it as a conventional clumping clay litter — the practical stuff people actually buy clay for: clumping, scooping, and odor control.",
        ],
      },
      {
        type: "p",
        parts: [
          "It’s part of my conventional clay-litter setup, which is also why it shows up next to the ",
          {
            href: "/guides/prettylitter-vs-traditional-litter",
            label: "PrettyLitter vs traditional litter",
          },
          " guide. I’m not comparing crystal marketing to a spreadsheet. I’ve got real clay in the rotation.",
        ],
      },
      {
        type: "h2",
        text: "What other owners say",
      },
      {
        type: "p",
        parts: [
          "Separate from my experience: other owners commonly praise clumping, odor control, easy scooping, and how it holds up in multi-cat households. Other owners also report complaints around dust, tracking, fragrance, and — in some recent reviews — a feeling that the product has changed. Those complaints are useful to know before you buy. They are not my personal checklist of disasters.",
        ],
      },
      {
        type: "p",
        parts: [
          "Someone especially sensitive to fragrance or dust may want to consider alternatives. In my house this pairs with ",
          {
            href: "/picks/stainless-litter-box",
            label: "stainless litter boxes",
          },
          " rather than pretending the bag alone solves the bathroom.",
        ],
      },
      {
        type: "h2",
        text: "Best for / skip if",
      },
      {
        type: "ul",
        items: [
          "Best for: everyday clumping clay without boutique mythology",
          "Skip if: fragrance or dust sensitivity is a hard no in your household",
        ],
      },
      {
        type: "h2",
        text: "Would I buy it again?",
      },
      {
        type: "p",
        parts: [
          "Yes. I like it and keep recommending it as conventional clumping clay — not as a glowing commercial.",
        ],
      },
    ],
  },
};

export function getPickReview(slug: string): PickReview | undefined {
  return pickReviews[slug];
}
