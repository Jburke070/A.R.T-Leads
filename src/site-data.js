const FORM_ACTION = "https://formsubmit.co/jburke@privatedesign.art";
const BRAND_LOGO = "/images/branding/art-gold-logo.png";

const CTA_NOTE =
  "Complete the guided consultation form and A.R.T will follow up to discuss the best creative setup for your business.";

const navItems = [
  { label: "Work", href: "/#recent-work" },
  { label: "What A.R.T Is", href: "/#what-art-is" },
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/#packages" },
  { label: "Process", href: "/#how-it-works" },
  { label: "Consultation", href: "/#consultation-form" }
];

const recentWork = [
  {
    title: "Custom hoodie brand mockup",
    caption: "Apparel artwork prepared across hoodie views so the client can review placement, colors, and brand consistency.",
    image: "/images/apparel/brand-hoodie-mockup.jpg",
    alt: "Custom hoodie brand mockup showing front, back, sleeve, and color options for business apparel"
  },
  {
    title: "T-shirt brand design",
    caption: "Custom shirt artwork presented as a product mockup for a polished apparel drop.",
    image: "/images/apparel/tshirt-brand-design-03.jpg",
    alt: "Custom t-shirt brand design mockup with large back graphic for apparel production"
  },
  {
    title: "Apparel production layout",
    caption: "A full shirt graphic prepared to show how apparel artwork reads before production.",
    image: "/images/apparel/tshirt-brand-design-01.jpg",
    alt: "Custom apparel production layout showing branded t-shirt artwork on a gray shirt"
  },
  {
    title: "Champions hat mockup",
    caption: "Hat artwork mocked up for a championship apparel piece with embroidery-ready visual direction.",
    image: "/images/apparel/champions-hat-mockup.jpg",
    alt: "Custom championship hat mockup with embroidered Northern State Prison softball tournament design"
  },
  {
    title: "Business card design",
    caption: "A business card and social profile layout designed to make contact information easy to scan.",
    image: "/images/promo/business-card-design.jpg",
    alt: "Business card design with social profile preview and QR code for a local beauty professional"
  },
  {
    title: "Door hanger campaign",
    caption: "Front and back door hanger artwork built for neighborhood visibility and local outreach.",
    image: "/images/promo/door-hanger-design.jpg",
    alt: "Door hanger design with front and back campaign artwork for Roselle Park Board of Education"
  },
  {
    title: "Brochure and certificate system",
    caption: "Membership application, certificate, thank-you card, and identity pieces organized into one system.",
    image: "/images/promo/brochure-certificate-design.jpg",
    alt: "Brochure and certificate design system for a chamber of commerce membership package"
  },
  {
    title: "Actual brochure print",
    caption: "Printed promotional material arranged for a polished, easy-to-read customer handout.",
    image: "/images/promo/brochure-actual-print-front.jpg",
    alt: "Printed brochure front design for promotional materials shown as a finished business handout"
  },
  {
    title: "Delivering Excellence promo graphic",
    caption: "A clean promotional graphic built to communicate a logistics message quickly and professionally.",
    image: "/images/promo/delivering-excellence-print.jpg",
    alt: "Promotional print design with Delivering Excellence message for a logistics business"
  },
  {
    title: "Event banner design",
    caption: "Large-format banner artwork for events, storefront visibility, and local promotion.",
    image: "/images/promo/4czons-banner.jpg",
    alt: "Large promotional banner design for a local event or business display"
  },
  {
    title: "Packaging concept",
    caption: "Product packaging design that organizes the brand, offer, and visual system in one piece.",
    image: "/images/promo/grow-kit-packaging-design.jpg",
    alt: "Packaging design for an inoculated grow kit with custom branding and product graphics"
  },
  {
    title: "Logo creation",
    caption: "Custom logo artwork designed to give a local service business a recognizable brand mark.",
    image: "/images/branding/rubys-fantastic-cleaning-logo.jpg",
    alt: "Ruby's Fantastic Cleaning custom logo creation for a local service business"
  }
];

const services = [
  {
    title: "Logos & Branding",
    summary:
      "Create a clear visual foundation your business can use across signs, apparel, print, web, and everyday customer touchpoints.",
    keywords: "branding for small businesses"
  },
  {
    title: "Graphic Design",
    summary:
      "Flyers, menus, cards, graphics, announcements, and customer-facing pieces designed to look sharp and easy to understand.",
    keywords: "graphic design for small businesses"
  },
  {
    title: "Custom Apparel",
    summary:
      "Uniforms, staff shirts, merch, hats, hoodies, and business apparel that make the team and brand feel consistent in public.",
    keywords: "custom apparel for businesses"
  },
  {
    title: "Promotional Materials",
    summary:
      "Flyers, banners, stickers, business cards, brochures, and print-ready materials that help local businesses show up prepared.",
    keywords: "promotional materials for local businesses"
  },
  {
    title: "Website Build & Optimization",
    summary:
      "Structure, layout, mobile presentation, and contact paths that help visitors understand the business and take the next step.",
    keywords: "website design for small businesses NJ NYC"
  },
  {
    title: "Business Essentials",
    summary:
      "Cards, forms, branded graphics, menus, signage files, and internal documents organized into one cleaner business system.",
    keywords: "flyers, banners, business cards"
  }
];

const packages = [
  {
    title: "Graphic Design Essentials Pack",
    forText:
      "For businesses that regularly need flyers, menus, graphics, announcements, business cards, or printed pieces.",
    value:
      "A.R.T organizes everyday materials so every public-facing piece feels like it belongs to the same business."
  },
  {
    title: "Brand Foundation Pack",
    forText:
      "For new businesses, refreshed businesses, or owners who know their visuals feel scattered.",
    value:
      "Logo direction, color choices, typography, and identity assets are shaped into a simple system your business can keep using."
  },
  {
    title: "Promotional Materials Essential Pack",
    forText:
      "For storefronts, service providers, event teams, food brands, and local businesses preparing for outreach.",
    value:
      "Flyers, banners, cards, stickers, brochures, and print-ready assets are created with clarity, consistency, and production in mind."
  },
  {
    title: "Website Build & Optimization Pack",
    forText:
      "For businesses that need a cleaner web presence or a more organized website before sending customers there.",
    value:
      "A.R.T focuses on structure, mobile-friendly pages, clear calls to action, and forms that support consultation."
  }
];

const processSteps = [
  {
    title: "Submit Registration",
    text: "Start with the registration form so A.R.T can understand your business, goals, and current creative needs."
  },
  {
    title: "A.R.T Reviews Your Business",
    text: "Your current visuals, business type, audience, and practical needs are reviewed before recommendations are made."
  },
  {
    title: "Consultation Call",
    text: "A.R.T discusses the best creative setup for your business and clarifies what should be handled first."
  },
  {
    title: "Mockups Created",
    text: "Design directions, layouts, apparel concepts, print pieces, or website structure are prepared for review."
  },
  {
    title: "Production & Delivery",
    text: "Approved creative is finalized, organized, and prepared for production, publishing, or delivery."
  }
];

const industriesByType = {
  neighborhood:
    "restaurants, cafes, salons, barbershops, fitness studios, contractors, local shops, and service businesses",
  urban:
    "restaurants, boutiques, beauty brands, event teams, professional offices, wellness studios, and growing local service businesses",
  professional:
    "professional offices, medical practices, real estate teams, restaurants, contractors, schools, and community organizations",
  creative:
    "food brands, apparel brands, venues, creative studios, retail shops, pop-up teams, and independent service businesses"
};

const locations = [
  {
    city: "Roselle Park",
    state: "NJ",
    slug: "roselle-park-nj",
    type: "neighborhood",
    intro:
      "Roselle Park businesses often need a clean, dependable creative setup that works across storefront graphics, apparel, printed handouts, and simple website updates.",
    localAngle:
      "A.R.T helps local teams look more prepared when customers see them in the neighborhood, at events, online, or through printed materials."
  },
  {
    city: "Union",
    state: "NJ",
    slug: "union-nj",
    type: "professional",
    intro:
      "Union businesses need visuals that can support busy service corridors, professional offices, food spots, and customer-facing teams.",
    localAngle:
      "A.R.T brings logos, uniforms, flyers, business cards, banners, and websites into one structured creative department for consistent presentation."
  },
  {
    city: "Elizabeth",
    state: "NJ",
    slug: "elizabeth-nj",
    type: "urban",
    intro:
      "Elizabeth has restaurants, retailers, service providers, event teams, and trades that need sharp materials without managing scattered vendors.",
    localAngle:
      "A.R.T helps businesses organize the creative pieces customers see first, from branded apparel and flyers to promotional materials and website presence."
  },
  {
    city: "Linden",
    state: "NJ",
    slug: "linden-nj",
    type: "professional",
    intro:
      "Linden businesses benefit from practical design systems that support crews, offices, storefronts, menus, signs, and customer outreach.",
    localAngle:
      "A.R.T gives local owners a private art department for consistent design, uniforms and business apparel, promotional materials, and website support."
  },
  {
    city: "Rahway",
    state: "NJ",
    slug: "rahway-nj",
    type: "creative",
    intro:
      "Rahway businesses, venues, restaurants, and creative teams need materials that feel polished enough for customers and flexible enough for events.",
    localAngle:
      "A.R.T helps keep apparel, flyers, banners, branding, and web pages aligned so every touchpoint looks intentional."
  },
  {
    city: "Cranford",
    state: "NJ",
    slug: "cranford-nj",
    type: "neighborhood",
    intro:
      "Cranford storefronts, studios, wellness brands, restaurants, and professional services need clean visuals that match the quality of the business.",
    localAngle:
      "A.R.T supports local businesses with organized branding, printed essentials, custom apparel, and website design for small businesses."
  },
  {
    city: "Westfield",
    state: "NJ",
    slug: "westfield-nj",
    type: "professional",
    intro:
      "Westfield businesses often need refined branding and polished customer materials that feel credible across print, apparel, signage, and web.",
    localAngle:
      "A.R.T helps owners turn scattered creative needs into one consistent system that supports the full customer experience."
  },
  {
    city: "Plainfield",
    state: "NJ",
    slug: "plainfield-nj",
    type: "urban",
    intro:
      "Plainfield businesses need strong visuals for community events, local promotion, staff apparel, printed materials, and mobile-friendly websites.",
    localAngle:
      "A.R.T helps bring those pieces together so businesses look organized, recognizable, and ready for customers."
  },
  {
    city: "Scotch Plains",
    state: "NJ",
    slug: "scotch-plains-nj",
    type: "neighborhood",
    intro:
      "Scotch Plains businesses need professional design that can support local service work, appointments, storefronts, events, and community outreach.",
    localAngle:
      "A.R.T provides branding, graphic design, uniforms and business apparel, promotional materials, and website support through one structured process."
  },
  {
    city: "Springfield",
    state: "NJ",
    slug: "springfield-nj",
    type: "professional",
    intro:
      "Springfield businesses need practical creative support for offices, contractors, restaurants, wellness providers, and growing service teams.",
    localAngle:
      "A.R.T helps make the business look consistent across business cards, flyers, banners, apparel, and website pages."
  },
  {
    city: "Newark",
    state: "NJ",
    slug: "newark-nj",
    type: "urban",
    intro:
      "Newark businesses move fast and need creative materials that can handle storefront traffic, events, teams, launches, and public-facing communication.",
    localAngle:
      "A.R.T supports local businesses with a private art department model for graphic design, custom apparel, promotional materials, branding, and website presence."
  },
  {
    city: "Jersey City",
    state: "NJ",
    slug: "jersey-city-nj",
    type: "urban",
    intro:
      "Jersey City businesses compete in a dense market where clean branding, strong visuals, and organized customer materials matter.",
    localAngle:
      "A.R.T helps restaurants, shops, studios, service providers, and offices keep apparel, print pieces, graphics, and websites visually aligned."
  },
  {
    city: "Hoboken",
    state: "NJ",
    slug: "hoboken-nj",
    type: "creative",
    intro:
      "Hoboken businesses need materials that feel professional in person, on the street, at events, and on mobile screens.",
    localAngle:
      "A.R.T helps local brands organize logos, menus, flyers, uniforms, promotional pieces, and website pages into a more complete creative system."
  },
  {
    city: "Bayonne",
    state: "NJ",
    slug: "bayonne-nj",
    type: "neighborhood",
    intro:
      "Bayonne businesses need dependable design support for storefront presence, service teams, event materials, and everyday business essentials.",
    localAngle:
      "A.R.T gives owners a structured creative department for branded apparel, flyers, banners, cards, websites, and practical identity work."
  },
  {
    city: "Paterson",
    state: "NJ",
    slug: "paterson-nj",
    type: "urban",
    intro:
      "Paterson businesses need bold but organized visuals for food brands, retail shops, service providers, teams, events, and local promotion.",
    localAngle:
      "A.R.T helps bring graphic design, custom apparel, promotional materials, and website support into one clear setup."
  },
  {
    city: "Manhattan",
    state: "NY",
    slug: "manhattan-ny",
    type: "urban",
    intro:
      "Manhattan businesses need polished creative assets that can keep up with high visibility, quick customer decisions, and strong local competition.",
    localAngle:
      "A.R.T helps shops, restaurants, service businesses, studios, and offices look consistent across branding, apparel, print materials, and website presence."
  },
  {
    city: "Brooklyn",
    state: "NY",
    slug: "brooklyn-ny",
    type: "creative",
    intro:
      "Brooklyn businesses often need creative work that feels distinctive while still being organized, readable, and production-ready.",
    localAngle:
      "A.R.T supports apparel drops, local shops, food brands, service teams, event materials, and small business websites through a private art department model."
  },
  {
    city: "Queens",
    state: "NY",
    slug: "queens-ny",
    type: "urban",
    intro:
      "Queens businesses serve diverse neighborhoods and need clear visual materials that translate across signage, apparel, flyers, cards, and websites.",
    localAngle:
      "A.R.T helps local owners build a consistent creative setup for promotional materials, uniforms, business apparel, branding, and web support."
  },
  {
    city: "Bronx",
    state: "NY",
    slug: "bronx-ny",
    type: "creative",
    intro:
      "Bronx businesses need strong, practical creative work for teams, events, food concepts, service businesses, community organizations, and shops.",
    localAngle:
      "A.R.T helps turn design needs into one organized system covering graphics, apparel, print materials, and website presence."
  },
  {
    city: "Staten Island",
    state: "NY",
    slug: "staten-island-ny",
    type: "neighborhood",
    intro:
      "Staten Island businesses need professional visuals that support local trust, repeat customers, staff presentation, printed materials, and online clarity.",
    localAngle:
      "A.R.T gives owners a private art department for branding, promotional materials, uniforms and business apparel, and website build support."
  }
];

module.exports = {
  FORM_ACTION,
  BRAND_LOGO,
  CTA_NOTE,
  navItems,
  recentWork,
  services,
  packages,
  processSteps,
  industriesByType,
  locations
};
