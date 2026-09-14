export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "products"; slugs: string[]; heading?: string }
  | { type: "todo"; text: string };

export const guideContent: Record<string, GuideBlock[]> = {
  "prettylitter-vs-traditional-litter": [
    {
      type: "callout",
      text: "PrettyLitter is interesting if you want lighter bags and color-change “health hints.” Traditional clumping clay still wins for most homes on odor control, scooping habits, and not locking you into a subscription. We at Purrstrings run clay + stainless boxes day to day — PrettyLitter stays in the comparison column until Ash confirms firsthand use.",
    },
    {
      type: "p",
      text: "Crystal litter marketing is excellent at making clay look like a dusty relic. Then you open the box, pour the crystals, and discover you have traded one set of tradeoffs for another. This guide is for people who keep seeing PrettyLitter ads and want a straight answer — not a vibe.",
    },
    {
      type: "h2",
      text: "Who this is for",
    },
    {
      type: "ul",
      items: [
        "Anyone comparing crystal subscriptions to grocery-aisle clay before another impulse checkout",
        "Multi-cat households where odor and tracking already feel like a second job",
        "People who care about dust, weight of bags up the stairs, and whether “less scooping” is real or just softer copy",
        "Anyone who wants health-color marketing explained without pretending crystals replace a vet",
      ],
    },
    {
      type: "h2",
      text: "Crystal vs clay, without the morality play",
    },
    {
      type: "p",
      text: "Traditional clumping clay (sodium bentonite and friends) absorbs urine into scoopable clumps. You remove solids and clumps regularly, top off, and dump the box on a schedule. It is unsexy. It is also predictable: you can see what you are scooping, and most cats already know the texture.",
    },
    {
      type: "p",
      text: "Silica crystal litters like PrettyLitter work differently. Crystals absorb liquid and trap odor differently than clay clumps. Marketing leans hard on “change less often” and color shifts that allegedly flag health issues. Useful framing: color change is a conversation starter with your vet, not a diagnosis. If your cat’s litter turns weird colors and they seem off, call the clinic — do not wait for the next bag to arrive.",
    },
    {
      type: "h2",
      text: "What actually matters in the litter aisle",
    },
    {
      type: "h3",
      text: "Odor",
    },
    {
      type: "p",
      text: "Odor control is where crystal vs clay debates get loud and personal. Clay with a real odor formula, scooped daily, still holds its own in a normal apartment. Crystals can smell fine when the box is maintained — and smell terrible when it is not. Whichever type you choose, the box material and scooping rhythm matter as much as the brand on the bag.",
    },
    {
      type: "h3",
      text: "Tracking and dust",
    },
    {
      type: "p",
      text: "Light crystal granules can hitchhike on paws. Clay dust can hitchhike into lungs and baseboards. Neither category is automatically “clean.” A decent litter mat and a box that does not fling litter like a snow machine do more for your floors than switching brands every month.",
    },
    {
      type: "h3",
      text: "Subscription cost framing",
    },
    {
      type: "p",
      text: "PrettyLitter sells convenience and lighter shipping as part of the pitch. Clay is usually cheaper per month if you buy big bags and scoop like an adult. Exact dollars depend on cat count, how deep you fill the box, and whether you actually change crystal litter on the schedule the brand prefers. We are not inventing “our lab saved $X” math here — run your own grocery-plus-subscription comparison for your household size.",
    },
    {
      type: "h3",
      text: "Switching litter without starting a boycott",
    },
    {
      type: "p",
      text: "Cats notice texture. If you jump overnight from clay to crystals (or the reverse), some cats will vote with their paws — usually on your bath mat. Transition by mixing over several days, keep the box in the same location, and maintain a backup box with the old litter if you have the square footage. A litter change that coincides with a move, a new pet, or a dirty box is how “my cat hates PrettyLitter” stories get born when the real villain was chaos.",
    },
    {
      type: "p",
      text: "Depth matters too. Crystal systems often want a specific fill level so liquid spreads and evaporates the way the product expects. Clay wants enough depth for clumps to form without cementing to a bare plastic floor. Read the bag, then adjust to what your cats actually dig.",
    },
    {
      type: "todo",
      text: "Ash: Have you personally used PrettyLitter (or a similar silica crystal litter)? If yes, drop firsthand notes on odor, tracking, how often you actually changed it, and whether the color-change feature ever felt useful vs noisy. Do not invent a review until that input lands.",
    },
    {
      type: "h2",
      text: "What we actually use on the clay side",
    },
    {
      type: "p",
      text: "While PrettyLitter stays in the “interesting, not personally verified here” column, these are the litter-system pieces we buy and recommend from real use — clay that clumps, boxes that clean without absorbing last month’s sins, and a mat that keeps the hallway from looking like a beach.",
    },
    {
      type: "products",
      heading: "Our clay-side setup",
      slugs: [
        "fresh-step-odor-shield",
        "stainless-litter-box",
        "open-stainless-litter-box",
        "petinstinct-litter-mat",
      ],
    },
    {
      type: "p",
      text: "Fresh Step Odor Shield is the grocery-aisle workhorse we keep on rotation — multi-cat clumping without pretending to be boutique. Stainless boxes (covered or open, depending on whether your cat will enter a cave) stop plastic from becoming a permanent smell sponge. The Petinstinct honeycomb mat is the boring upgrade that pays for itself the first week you stop vacuuming litter out of the rug fringe.",
    },
    {
      type: "h2",
      text: "Drawbacks worth saying out loud",
    },
    {
      type: "ul",
      items: [
        "Crystal litters can be less forgiving if you stretch change intervals past what the box can handle",
        "Color-change marketing can create false calm or false panic if you treat it like medical equipment",
        "Clay is heavy, dusty for some people, and still requires daily scooping if you want the house to smell like a house",
        "Any litter fails if the box is too small, too dirty, or stuck in a corner the cat already boycotts",
      ],
    },
    {
      type: "h2",
      text: "Bottom line",
    },
    {
      type: "p",
      text: "PrettyLitter vs traditional litter is not a purity contest. It is a match between lifestyle, budget, and how honest you are about maintenance. If you want a subscription crystal system, go in knowing what it does and does not replace. If you want the setup we actually run, start with solid clay, a stainless box, and a mat — then revisit crystals when we have firsthand notes worth publishing.",
    },
  ],

  "best-automatic-litter-boxes": [
    {
      type: "callout",
      text: "Automatic litter boxes reduce scooping. They do not remove litter, cleaning, sensors that need babysitting, or the occasional “why is it beeping at 2am” plotline. Buy one if scooping is genuinely wrecking your week — not because the TikTok made the drum look magical.",
    },
    {
      type: "p",
      text: "The category promises freedom. The fine print is closer to “different chores.” Self-cleaning boxes rake, rotate, or sift after your cat leaves, stash waste in a drawer or bag, and sometimes ping an app so you know the crime happened. Useful. Not a Roomba for urine.",
    },
    {
      type: "h2",
      text: "Who should (and should not) buy one",
    },
    {
      type: "p",
      text: "Good fit: multi-cat homes where scooping is constant, people with mobility limits, anyone who travels overnight and wants the box less apocalyptic on return. Bad fit: cats who refuse enclosed or moving machinery, households that will ignore waste drawers until they become a science fair, renters with zero floor space, or anyone expecting zero litter purchases forever.",
    },
    {
      type: "h2",
      text: "What these machines actually do",
    },
    {
      type: "ul",
      items: [
        "Detect that a cat used the box (weight or sensors), then run a clean cycle after a delay",
        "Separate clumps or solids into a sealed area you still empty on a schedule",
        "Optionally report usage through an app — helpful for patterns, annoying if you did not want another notification",
        "Still need litter topped up, sensors wiped, and a deep clean when the interior gets grim",
      ],
    },
    {
      type: "h2",
      text: "Space, noise, and multi-cat reality",
    },
    {
      type: "p",
      text: "These units are furniture-sized. Measure the footprint, the height, and whether you need a plug nearby. Open-top designs can feel less cave-like for nervous cats; enclosed drums can hide the mess better and intimidate some cats more. Multi-cat homes should think in box counts, not vibes — one fancy unit does not erase the old “n+1 boxes” rule if your cats already feud over bathrooms.",
    },
    {
      type: "p",
      text: "We are not inventing competitor scorecards or brand bake-offs we have not run. Premium names in this category exist; prices swing wildly; liner and litter compatibility vary. Compare on sensors, waste capacity, noise tolerance in your space, and whether the brand’s consumables will quietly own your budget.",
    },
    {
      type: "h2",
      text: "Questions to ask before you spend furniture money",
    },
    {
      type: "ul",
      items: [
        "Will every cat in the house enter this shape of box, or do you need an open-top / manual backup?",
        "Where does the waste go, how often will you empty it, and can you stand the bag or cartridge model?",
        "Is the unit quiet enough for the room it will live in — bedroom hallway vs laundry closet?",
        "What litter does the mechanism prefer, and what happens to your monthly spend if that litter costs more?",
        "Can you reach every surface for a real wash day, or does the design hide mold farms?",
      ],
    },
    {
      type: "p",
      text: "If those answers make you tired already, that is useful information. An automatic box that becomes a guilt monument in the corner is worse than a stainless pan you actually scoop.",
    },
    {
      type: "todo",
      text: "Ash: Want a named brand comparison (e.g. Litter-Robot vs our current automatic pick vs another unit)? Say which models you’ve used and what to emphasize — we will not invent scores or “winner” badges without that.",
    },
    {
      type: "h2",
      text: "What we use and recommend around the auto box",
    },
    {
      type: "p",
      text: "Our automatic litter box pick is the open-top self-cleaning unit we actually point people to — app control, safety sensors, quiet enough for real apartments. Around it, the supporting cast matters: stainless backup boxes for cats who boycott robots, furniture that hides the unit without trapping heat and smell, and a mat for the inevitable tracking.",
    },
    {
      type: "products",
      heading: "Automatic box + supporting cast",
      slugs: [
        "automatic-litter-box",
        "stainless-litter-box",
        "litter-box-cabinet",
        "feandrea-litter-enclosure",
        "petinstinct-litter-mat",
      ],
    },
    {
      type: "p",
      text: "If you want the machine out of sight, the litter cabinet and Feandrea enclosure are the furniture route — especially when the auto box needs a power outlet. Keep a stainless manual box in rotation if you have a cat who side-eyes moving parts. The mat stays non-negotiable either way.",
    },
    {
      type: "h2",
      text: "Maintenance nobody puts in the hero shot",
    },
    {
      type: "ul",
      items: [
        "Empty the waste drawer before it becomes a character in your home",
        "Wipe sensors — false cycles and missed cycles often start as dirty sensors",
        "Budget for litter that works with the mechanism; not every clay behaves the same",
        "Plan a full wash day; “self-cleaning” is not “never clean”",
      ],
    },
    {
      type: "h2",
      text: "Bottom line",
    },
    {
      type: "p",
      text: "Buy an automatic litter box to buy back scooping time, not to buy a personality. If you will empty the drawer, keep a backup box, and accept that apps and sensors are part of the deal, it can be one of the better quality-of-life upgrades in the cat-product universe. If you wanted zero involvement, stay with a simple stainless box and an honest scooping schedule — or wait until the marketing catches up to physics.",
    },
  ],

  "cat-trees-that-dont-look-like-nightmares": [
    {
      type: "callout",
      text: "You do not need nine catalog trees. You need vertical space, scratchable surfaces, and something that does not make your living room look like a abandoned carnival. Start with furniture that actually lives in real homes — then expand if your cats annex another wall.",
    },
    {
      type: "p",
      text: "Most “best cat trees” lists are a collage of beige towers that photograph like evidence. This guide reframes the problem: livable cat furniture. Height where cats want it, textures they will use, and a silhouette you can leave in the frame when friends come over.",
    },
    {
      type: "h2",
      text: "Who this is for",
    },
    {
      type: "ul",
      items: [
        "People who refuse another particleboard tower with peeling carpet petals",
        "Renters and design-conscious owners who still need cats off the curtains",
        "Multi-cat homes that need more than one nap tier without filling the room",
        "Anyone rebuilding after a cheap tree died mid-sprint",
      ],
    },
    {
      type: "h2",
      text: "What matters more than “nine options”",
    },
    {
      type: "h3",
      text: "Stability and footprint",
    },
    {
      type: "p",
      text: "A tall tree that wobbles teaches cats to distrust it and teaches you to flinch. Wide bases, solid joins, and placement against a wall beat another decorative hammock nobody uses. Measure the floor square you are willing to sacrifice before you fall in love with a product photo.",
    },
    {
      type: "h3",
      text: "Scratch + perch, not just carpet volume",
    },
    {
      type: "p",
      text: "Cats scratch to stretch and mark. Sisal posts, cardboard angles, and carpet panels earn their keep when they are where cats already want to be. A tree that is only soft platforms with no honest scratch zone becomes a dusty sculpture.",
    },
    {
      type: "h3",
      text: "Wall and floor as a system",
    },
    {
      type: "p",
      text: "One freestanding tree plus a wall path or floor scratcher often beats a single mega-tower. Think circulation: can a cat go up, across, and down without a diplomatic incident with the dog?",
    },
    {
      type: "h2",
      text: "How to shop without collecting beige regrets",
    },
    {
      type: "p",
      text: "Ignore “holds eight cats” marketing unless you have eight cats and a ballroom. Look at base width vs height, whether platforms are replaceable, and whether the carpet or sisal looks like it will survive a dedicated shredder. Wood and paper-rope finishes photograph well and can look intentional; they still need to be bolted together like you mean it.",
    },
    {
      type: "p",
      text: "Place the main tree where cats already loiter — near a window, along a hallway run, or beside the sofa they already claim. A gorgeous tree in a dead corner becomes storage for mail. If you are mid-renovation or moving soon, prioritize modular scratchers and wall panels you can take with you over a permanent shrine.",
    },
    {
      type: "todo",
      text: "Ash: If you want a literal numbered roundup later, send more tree picks you’ve actually lived with (wood, wall-mounted, compact, budget). We’ll expand — we will not invent nine products to match an old headline.",
    },
    {
      type: "h2",
      text: "What we actually have in the house",
    },
    {
      type: "p",
      text: "These are the pieces we recommend from real use — starting with what actually lives in real homes, not a fake nine-pack. Loud leopard print that somehow still works, an L-shaped scratcher for the stretch, floor carpet for dedicated shredding, and wall climbing carpet when you want vertical without another freestanding tower.",
    },
    {
      type: "products",
      heading: "Livable picks we use",
      slugs: [
        "leopard-print-cat-tree",
        "l-shaped-scratcher",
        "scratch-carpet-mat",
        "wall-climbing-carpet",
      ],
    },
    {
      type: "p",
      text: "The leopard-print tree is tall, unapologetic, and somehow less nightmarish than the beige towers — multiple perches and enough vertical real estate for a small gang. Pair it with the L-shaped scratcher and scratch mat so claws have a job that is not your sofa arm. Wall climbing carpet is the renter-friendly vertical add when floor space is already spoken for.",
    },
    {
      type: "h2",
      text: "Drawbacks",
    },
    {
      type: "ul",
      items: [
        "Any carpeted tree sheds fibers and needs vacuuming; “design-forward” is not maintenance-free",
        "Wall mounts need honest hardware and landlord-safe decisions",
        "A statement tree still fails if it is unstable or placed in a dead zone of the room",
        "You may still need a second scratch zone — one product rarely covers every cat’s preferred angle",
      ],
    },
    {
      type: "h2",
      text: "Bottom line",
    },
    {
      type: "p",
      text: "Skip the scavenger hunt for nine nearly identical towers. Build a small system: one solid vertical piece, dedicated scratch surfaces, and wall options if the floor is full. That is how a living room stays a living room while the cats get the elevation they think they deserve.",
    },
  ],

  "should-your-cat-wear-a-gps-tracker": [
    {
      type: "callout",
      text: "A GPS tracker is useful when your cat goes outside — or escapes — and you need a real recovery plan. It is optional jewelry for a strictly indoor cat who never reaches a door. Collar fit and breakaway safety matter more than any app screenshot.",
    },
    {
      type: "p",
      text: "Trackers sit at the intersection of peace of mind and gadget theater. The Cat Tech aisle will sell you maps, geofences, and monthly subscriptions. This guide stays informational: when the category earns its keep, what the collar has to get right, and what we are not recommending yet because we do not have a live GPS pick wired up.",
    },
    {
      type: "h2",
      text: "Indoor vs outdoor (and the fuzzy middle)",
    },
    {
      type: "p",
      text: "Outdoor and supervised outdoor cats are the clearest use case — if they roam, a tracker can shorten the “where did you go” spiral. Indoor-only cats benefit more from door discipline, microchips, and breakaway collars with ID than from a live map. The fuzzy middle is the escape artist: indoor preferred, but they have proven they can vanish. A tracker can be part of a plan; it is not a substitute for fixing the exit.",
    },
    {
      type: "h2",
      text: "Collar fit and safety first",
    },
    {
      type: "ul",
      items: [
        "Use a breakaway or safety collar designed so the cat can slip free if snagged",
        "Fit should be snug enough not to slip off constantly, with room to slide a finger or two — check often as coats and weight change",
        "Watch for rubbing, hair loss, and whether the tracker’s weight bothers a small or short-haired cat",
        "Never rely on a tracker alone: microchip + current ID tag still matter when batteries die",
      ],
    },
    {
      type: "h2",
      text: "Battery, apps, and subscriptions (in general)",
    },
    {
      type: "p",
      text: "Most consumer cat GPS products need charging on a rhythm and a paid plan for live tracking. Battery life claims vary with update frequency — more pings, faster drain. Apps are only as useful as your habit of keeping the device charged and the subscription active. Bluetooth-only “find my” style gadgets are a different category; they help in a smaller radius and are not a substitute for true GPS when a cat leaves the block.",
    },
    {
      type: "p",
      text: "Browse Cat GPS Trackers and Cat Tech on Purrstrings when you’re comparing the aisle. We will add a specific tracker pick when there is a live product page and firsthand notes worth publishing — not before.",
    },
    {
      type: "h2",
      text: "Build a recovery plan, not just a map",
    },
    {
      type: "p",
      text: "A tracker helps most when you already know what you will do with the ping. Who goes outside to look? Which neighbor has a photo of your cat? Is the microchip registry current? Can someone else log into the app if you are traveling? The gadget is one line in that plan. Without the rest, you are paying for anxiety with a progress spinner.",
    },
    {
      type: "p",
      text: "Also decide what “outside” means in your household. Supervised patio time, secure catio, leash walks, and free-roaming neighborhood cats are different risk profiles. A tracker that shines for a wanderer may be overkill for a harness-only patio cat — and underkill if you refuse breakaway collars because you are scared of losing the device.",
    },
    {
      type: "todo",
      text: "Ash: Add your GPS tracker pick + affiliate link when ready (slug, merchants, gallery). Until then this guide stays informational — no invented “we tested Tractive for 90 days” copy.",
    },
    {
      type: "h2",
      text: "When you probably should not bother",
    },
    {
      type: "ul",
      items: [
        "Truly indoor cats with secure windows and no escape history — spend the budget on enrichment instead",
        "Cats that panic or claw off every collar; fix collar tolerance before adding bulk",
        "Anyone unwilling to charge a device and pay for a plan — a dead tracker is jewelry",
      ],
    },
    {
      type: "h2",
      text: "Bottom line",
    },
    {
      type: "p",
      text: "Should your cat wear a GPS tracker? If they go outside or have a résumé as an escape artist, it can be a smart layer of recovery tech — after safety collar basics. If they live a locked-door life, you can skip the subscription and put the money toward things they will use every day. We will publish a concrete pick in Cat Tech when Ash lands one we will actually stand behind.",
    },
  ],

  "wet-food-vs-dry-food": [
    {
      type: "callout",
      text: "Wet food brings moisture; dry food brings convenience and calories per dollar. Most healthy cats can do either or both. What matters is a complete-and-balanced diet they will actually eat, water somewhere in the day, and not turning dinner into an internet purity contest.",
    },
    {
      type: "p",
      text: "The wet vs dry fight online is louder than most kitchens need. This is a practical breakdown from we at Purrstrings — including foods I actually buy — plus general nutrition framing that is not a vet diagnosis and not a fake lab panel.",
    },
    {
      type: "h2",
      text: "Who this is for",
    },
    {
      type: "ul",
      items: [
        "People stuck between “all wet forever” advice and a grocery budget that has opinions",
        "Households with picky eaters who treat new cans like a personal insult",
        "Multi-cat homes juggling different preferences from the same pantry",
        "Anyone who wants mix-feeding explained without shame",
      ],
    },
    {
      type: "h2",
      text: "Moisture, calories, and the boring truths",
    },
    {
      type: "p",
      text: "Cats often drink less than dogs; wet food is an easy way to add water to the meal. Dry food is shelf-stable, easy to free-feed if that is your setup, and usually cheaper per calorie. Neither format automatically equals “premium” — read the label for complete-and-balanced language for your cat’s life stage, then watch body condition and litter-box output like a slightly neurotic roommate.",
    },
    {
      type: "p",
      text: "Urinary and kidney concerns are where moisture conversations get serious. That is vet territory. Food marketed for urinary tract health can be part of a plan your clinic recommends; it is not a DIY substitute for medical care.",
    },
    {
      type: "h2",
      text: "Budget and picky eaters",
    },
    {
      type: "p",
      text: "All-wet diets add up fast in multi-cat homes. All-dry can work if your cats drink and maintain a healthy weight — many do. Mix feeding (wet for moisture and enthusiasm, dry for convenience) is a normal, sane compromise. For picky cats, rotate proteins slowly, serve wet food warm-ish rather than fridge-cold, and do not turn every meal into a five-entrée tasting menu unless you enjoy hostage negotiations.",
    },
    {
      type: "h2",
      text: "Labels without the panic",
    },
    {
      type: "p",
      text: "“Grain-free,” “high protein,” and “urinary support” are marketing phrases that sometimes map to real formula differences and sometimes map to shelf theater. Start with AAFCO complete-and-balanced language for the right life stage, then filter for ingredients your household tolerates. If a cat has a diagnosed condition, follow the clinic — internet comment sections are not a pharmacy.",
    },
    {
      type: "p",
      text: "Treats count. Lickable tubes and squeeze-ups are excellent for medication disguises and bribery; they are also calories. Keep the main meals doing the nutrition work and treat the treats like treats.",
    },
    {
      type: "h2",
      text: "What I actually buy",
    },
    {
      type: "p",
      text: "Clear distinction: the products below are foods and accessories I use. The nutrition points above are general information. Your cat is not a press release.",
    },
    {
      type: "products",
      heading: "Pantry picks from real use",
      slugs: [
        "blue-wilderness-duck",
        "blue-tastefuls-sensitive-stomach",
        "blue-tastefuls-chicken-pate",
        "friskies-pate-variety",
        "iams-urinary-tract",
        "delectables-squeeze-up",
        "cat-food-can-covers-set",
      ],
    },
    {
      type: "p",
      text: "Blue Wilderness Duck covers the high-protein dry lane. Tastefuls Sensitive Stomach is the quieter dry bag when digestive drama needs fewer plot twists. Chicken pâté and Friskies variety packs handle wet rotation — one a bit more “natural aisle,” one the classic grocery workhorse. IAMS Urinary Tract is the big-bag dry option when that formula fits the household plan. Delectables Squeeze Ups are the treat that stops traffic. Can covers keep half-eaten wet food from becoming fridge folklore.",
    },
    {
      type: "h2",
      text: "Drawbacks of each lane",
    },
    {
      type: "ul",
      items: [
        "Wet: cost, fridge space, stink if left out, more dishes",
        "Dry: less moisture per bite, easier to overfeed if the bowl is always full",
        "Mix feeding: measuring gets fuzzy if you guess portions forever",
        "Any sudden food swap: stomach protests — transition gradually",
      ],
    },
    {
      type: "h2",
      text: "Bottom line",
    },
    {
      type: "p",
      text: "Wet vs dry is less a duel and more a toolkit. Prioritize hydration somehow, feed a complete diet your cats accept, and use the pantry picks above as a starting roster — not a commandment. If appetite, weight, or litter habits change suddenly, that is a vet call, not a new affiliate tab.",
    },
  ],

  "what-to-look-for-in-a-cat-water-fountain": [
    {
      type: "callout",
      text: "The best fountain is the one you will clean. Capacity, noise, and stainless vs plastic matter — but maintenance honesty matters more. If you will not scrub it, buy a wide bowl and refill it like a person.",
    },
    {
      type: "p",
      text: "Running water can convince stubborn drinkers to participate. It can also become a biofilm science project with a cute pump. This buying guide is for people who want the feature list and the chore list in the same article.",
    },
    {
      type: "h2",
      text: "Who this is for",
    },
    {
      type: "ul",
      items: [
        "Cats that ignore still bowls but hover near sinks",
        "Multi-cat homes that need more than a teacup of water between refills",
        "Anyone comparing wireless stainless options to classic filtered plastic fountains",
        "People who have already owned a fountain that went furry and want to not repeat that era",
      ],
    },
    {
      type: "h2",
      text: "Cleaning reality (read this twice)",
    },
    {
      type: "p",
      text: "Pumps clog. Filters need swaps on a schedule. Crevices grow gunk. If weekly (or near-weekly) disassembly sounds like betrayal, a fountain will punish you. Choose designs you can take apart without a YouTube archaeology dig. Keep a backup bowl during deep cleans so nobody goes thirsty for drama.",
    },
    {
      type: "h2",
      text: "Noise, capacity, and materials",
    },
    {
      type: "h3",
      text: "Noise",
    },
    {
      type: "p",
      text: "A fountain that hums like a fish tank will get unplugged at midnight. Quiet pumps matter in apartments and bedrooms. Low water levels often make pumps louder — capacity and “will you refill” are linked to noise.",
    },
    {
      type: "h3",
      text: "Capacity",
    },
    {
      type: "p",
      text: "Bigger reservoirs mean fewer top-offs and happier multi-cat math. They also mean more water sitting if you forget cleaning day. Match size to how often you honestly service the thing.",
    },
    {
      type: "h3",
      text: "Stainless vs plastic",
    },
    {
      type: "p",
      text: "Stainless surfaces are easier to keep from getting permanently funky; plastic is lighter and often cheaper, with more nooks. Neither material forgives neglect. If whisker comfort matters for your cat, look at bowl width and water modes (stream vs calm surface) rather than color alone.",
    },
    {
      type: "h2",
      text: "Placement and multi-cat logistics",
    },
    {
      type: "p",
      text: "Put water away from the litter box and ideally not right beside the food if your cats are dramatic about that. Multiple water stations beat one heroic fountain in a traffic jam. In multi-cat homes, watch whether a bully owns the fountain — a second still bowl in another room is cheap insurance.",
    },
    {
      type: "p",
      text: "Hard water leaves mineral crust. That is not a moral failing; it is chemistry. Expect more scrubbing in hard-water cities, and do not assume a filter makes descaling optional forever.",
    },
    {
      type: "h2",
      text: "Fountains we actually use",
    },
    {
      type: "p",
      text: "Two lanes we run: a wireless stainless fountain for cordless flexibility and serious capacity, and the Catit PIXI when you want a filtered running-water unit with adjustable drinking modes.",
    },
    {
      type: "products",
      heading: "Fountain picks from real use",
      slugs: ["wireless-cat-fountain", "catit-pixi-fountain"],
    },
    {
      type: "p",
      text: "The wireless stainless option leans filter-free bowl design and wastewater separation — less cord anxiety, still not zero cleaning. The PIXI brings triple filtration and calm/stream/bubble modes for cats who are picky about how water moves. Pick based on whether you want cordless stainless simplicity or a classic filtered fountain workflow.",
    },
    {
      type: "h2",
      text: "Drawbacks",
    },
    {
      type: "ul",
      items: [
        "Every fountain adds a chore cycle; skipping it is worse than no fountain",
        "Filters and replacement parts are recurring costs on many models",
        "Some cats ignore fountains entirely — do not assume “running water” is universal cat religion",
        "Wireless units still need charging discipline; dead pump, sad cat",
      ],
    },
    {
      type: "h2",
      text: "Bottom line",
    },
    {
      type: "p",
      text: "Shop for a fountain like you shop for a kitchen gadget you will actually wash. If that sentence made you flinch, stick with wide stainless bowls and fresh water. If you are ready for the maintenance, the wireless stainless and Catit PIXI are the two we use and recommend — different workflows, same rule: clean it or lose the plot.",
    },
  ],
};
