const {
  FORM_ACTION,
  BRAND_LOGO,
  CTA_NOTE,
  navItems,
  recentWork,
  services,
  packages,
  processSteps,
  industriesByType
} = require("./site-data");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function consultationButton(label, className = "button button-primary", href = "#consultation-form") {
  return `<a class="${className}" href="${href}">${escapeHtml(label)}</a>`;
}

function artLogo() {
  return `
    <a class="brand" href="/" aria-label="Allowing Realities Through A.R.T. home">
      <img class="brand-logo" src="${BRAND_LOGO}" alt="" width="56" height="56" aria-hidden="true">
      <span class="brand-name">Allowing Realities Through</span>
    </a>
  `;
}

function header() {
  return `
    <header class="site-header" data-site-header>
      <div class="header-inner">
        ${artLogo()}
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span class="sr-only">Toggle navigation</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="site-nav" class="site-nav" aria-label="Main navigation">
          ${navItems.map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`).join("")}
          ${consultationButton("Request Consultation", "button button-small button-primary", "/#consultation-form")}
        </nav>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="section-inner footer-grid">
        <div>
          ${artLogo()}
          <p>A private creative department for small businesses in New Jersey and NYC.</p>
        </div>
        <div>
          <h2>Creative Department</h2>
          <p>Graphic design, custom apparel, promotional materials, branding, business essentials, and website support.</p>
        </div>
        <div>
          <h2>Start Here</h2>
          ${consultationButton("Complete Registration", "button button-primary", "/#consultation-form")}
          <p class="cta-note">${CTA_NOTE}</p>
        </div>
      </div>
    </footer>
  `;
}

function layout({ title, description, path = "/", body, pageClass = "", jsonLd = [] }) {
  const structuredData = jsonLd
    .map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="theme-color" content="#050505">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${escapeHtml(path)}">
    <meta property="og:image" content="${BRAND_LOGO}">
    <link rel="icon" href="${BRAND_LOGO}" type="image/png">
    <link rel="preload" href="/styles.css" as="style">
    <link rel="stylesheet" href="/styles.css">
    ${structuredData}
  </head>
  <body class="${pageClass}">
    ${header()}
    <main>
      ${body}
    </main>
    ${footer()}
    <script src="/site.js" defer></script>
  </body>
</html>`;
}

function imageCard(item, eager = false) {
  return `
    <figure class="work-card">
      <img src="${item.image}" alt="${escapeHtml(item.alt)}" loading="${eager ? "eager" : "lazy"}" decoding="async">
      <figcaption>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.caption)}</span>
      </figcaption>
    </figure>
  `;
}

function proofCard(item) {
  return `
    <figure class="hero-proof-card">
      <img src="${item.image}" alt="${escapeHtml(item.alt)}" loading="eager" decoding="async">
      <figcaption>${escapeHtml(item.title)}</figcaption>
    </figure>
  `;
}

function serviceCard(service) {
  return `
    <article class="info-card">
      <p class="eyebrow">${escapeHtml(service.keywords)}</p>
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.summary)}</p>
      ${consultationButton("Discuss This Service", "button button-outline")}
    </article>
  `;
}

function packageCard(pack) {
  return `
    <article class="package-card">
      <p class="package-label">Consultation pack</p>
      <h3>${escapeHtml(pack.title)}</h3>
      <p><strong>Who it is for:</strong> ${escapeHtml(pack.forText)}</p>
      <p><strong>Value:</strong> ${escapeHtml(pack.value)}</p>
      ${consultationButton("Start Consultation", "button button-outline")}
    </article>
  `;
}

function optionList(items) {
  return items.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
}

function checkboxGroup(name, items) {
  return items
    .map(
      (item) => `
        <label class="choice-pill">
          <input type="checkbox" name="${escapeHtml(name)}" value="${escapeHtml(item)}">
          <span>${escapeHtml(item)}</span>
        </label>
      `
    )
    .join("");
}

function consultationForm({ sourcePage, sourcePath = "/", heading = "Guided consultation form" }) {
  const packageOptions = [
    "Not sure yet",
    ...packages.map((pack) => pack.title),
    "Multiple packages"
  ];
  const timelineOptions = [
    "Not sure yet",
    "As soon as possible",
    "Within 2 weeks",
    "Within 30 days",
    "1-3 months",
    "Planning ahead"
  ];
  const budgetOptions = [
    "Not sure yet",
    "Under $500",
    "$500-$1,500",
    "$1,500-$3,000",
    "$3,000+"
  ];

  return `
    <section id="consultation-form" class="section consultation-section" aria-labelledby="consultation-title">
      <div class="section-inner consultation-grid">
        <div class="consultation-intro">
          <p class="eyebrow">Guided consultation</p>
          <h2 id="consultation-title">${escapeHtml(heading)}</h2>
          <p>This is not an order form. It helps A.R.T understand your business, current visuals, timeline, and the best creative setup before a consultation call.</p>
          <div class="form-meta" aria-label="Form submission details">
            <span>Sent to jburke@privatedesign.art</span>
            <span>Powered by FormSubmit</span>
            <span>Source: ${escapeHtml(sourcePage)}</span>
          </div>
        </div>

        <form class="lead-form" action="${FORM_ACTION}" method="POST">
          <input type="hidden" name="_subject" value="New A.R.T Lead Submission">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_next" value="/thank-you/">
          <input type="hidden" name="Source Page" value="${escapeHtml(sourcePage)}">
          <input type="hidden" name="Source Path" value="${escapeHtml(sourcePath)}">

          <fieldset>
            <legend><span class="fieldset-step">Step 01</span><span>Business contact</span></legend>
            <p class="form-section-note">Who should A.R.T follow up with after reviewing the request?</p>
            <div class="form-grid">
              <label>
                <span>Name</span>
                <input type="text" name="Name" autocomplete="name" required>
              </label>
              <label>
                <span>Business Name</span>
                <input type="text" name="Business Name" autocomplete="organization" required>
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="Email" autocomplete="email" required>
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="Phone" autocomplete="tel">
              </label>
              <label>
                <span>City / State</span>
                <input type="text" name="City / State" autocomplete="address-level2" required>
              </label>
              <label>
                <span>Industry</span>
                <input type="text" name="Industry" placeholder="Restaurant, salon, retail">
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend><span class="fieldset-step">Step 02</span><span>Creative needs</span></legend>
            <p class="form-section-note">Choose every area that may need support. A.R.T will help narrow the best setup during the consultation.</p>
            <div class="choice-grid" aria-label="Services Interested In">
              ${checkboxGroup("Services Interested In", services.map((service) => service.title))}
            </div>
            <div class="form-grid">
              <label>
                <span>Package Interest</span>
                <select name="Package Interest">
                  ${optionList(packageOptions)}
                </select>
              </label>
              <label>
                <span>Timeline</span>
                <select name="Timeline">
                  ${optionList(timelineOptions)}
                </select>
              </label>
              <label>
                <span>Budget Range</span>
                <select name="Budget Range">
                  ${optionList(budgetOptions)}
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend><span class="fieldset-step">Step 03</span><span>Context for the call</span></legend>
            <p class="form-section-note">Share what needs to be fixed, created, organized, or prepared first.</p>
            <label>
              <span>Notes</span>
              <textarea name="Notes" rows="6" placeholder="Tell A.R.T what you need, what is not working now, or what you want your business visuals to feel like."></textarea>
            </label>
          </fieldset>

          <div class="form-actions">
            <button class="button button-primary" type="submit">Submit Consultation Request</button>
            <p>${CTA_NOTE}</p>
          </div>
        </form>
      </div>
    </section>
  `;
}

function ctaPanel(title, text, label = "Request Consultation") {
  return `
    <section class="cta-band" aria-label="${escapeHtml(title)}">
      <div class="section-inner cta-grid">
        <div>
          <p class="eyebrow">Start with consultation</p>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(text)}</p>
          <p class="cta-note">${CTA_NOTE}</p>
        </div>
        <div class="cta-actions">
          ${consultationButton(label, "button button-primary")}
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  const heroProof = [recentWork[0], recentWork[4], recentWork[5]];
  const body = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="section-inner hero-inner">
        <img class="hero-logo-img" src="${BRAND_LOGO}" alt="Allowing Realities Through A.R.T. logo" width="180" height="180" loading="eager" decoding="async">
        <p class="eyebrow">Private art department for businesses</p>
        <h1 id="hero-title">Your Business Deserves Its Own Art Department.</h1>
        <p class="hero-subtitle">Graphic design, custom apparel, promotional materials, and website support for small businesses in New Jersey and NYC.</p>
        <p class="hero-trust">Serving small businesses across New Jersey, nearby towns, and NYC.</p>
        <div class="hero-actions">
          ${consultationButton("Request Consultation", "button button-primary")}
          <a class="button button-secondary" href="#services">View Services</a>
        </div>
        <p class="cta-note">${CTA_NOTE}</p>
        <div class="hero-proof" aria-label="Selected A.R.T project examples">
          ${heroProof.map(proofCard).join("")}
        </div>
      </div>
    </section>

    <section id="recent-work" class="section work-section" aria-labelledby="recent-work-title">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Recent work</p>
          <h2 id="recent-work-title">Photo proof of real creative work.</h2>
          <p>A.R.T shows the work clearly: apparel designs, printed promotional materials, brand assets, packaging, and website support pieces built for real business use.</p>
        </div>
        <div class="work-grid">
          ${recentWork.map((item, index) => imageCard(item, index < 2)).join("")}
        </div>
      </div>
    </section>

    <section id="what-art-is" class="section split-section" aria-labelledby="what-art-is-title">
      <div class="section-inner split-grid">
        <div>
          <p class="eyebrow">What A.R.T is</p>
          <h2 id="what-art-is-title">A structured creative department for small businesses.</h2>
          <p>A.R.T gives businesses access to a private art department for branding, apparel, promotional materials, and website presence. Clients are not buying random services. They are connecting to a structured system that keeps the business looking consistent, professional, and organized.</p>
        </div>
        <div class="check-list" aria-label="A.R.T creative support areas">
          <span>Branding systems</span>
          <span>Custom apparel for businesses</span>
          <span>Promotional materials for local businesses</span>
          <span>Website design for small businesses NJ NYC</span>
        </div>
      </div>
    </section>

    <section class="section not-section" aria-labelledby="not-title">
      <div class="section-inner split-grid">
        <div>
          <p class="eyebrow">What we are not</p>
          <h2 id="not-title">Clear boundaries keep the work focused.</h2>
          <p>A.R.T is built for design, apparel, promotional materials, business essentials, and website support.</p>
        </div>
        <ul class="not-list">
          <li>Not a marketing agency</li>
          <li>Not paid ad management</li>
          <li>Not growth hacking</li>
          <li>Not monthly SEO retainers</li>
        </ul>
      </div>
      <div class="section-inner">
        <p class="closing-line">We focus on design, apparel, promotional materials, and website support, executed properly.</p>
      </div>
    </section>

    <section id="services" class="section" aria-labelledby="services-title">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2 id="services-title">Creative support your business can keep using.</h2>
          <p>Each service is consultation-based so A.R.T can recommend the right setup before production starts.</p>
        </div>
        <div class="card-grid">
          ${services.map(serviceCard).join("")}
        </div>
      </div>
    </section>

    <section id="packages" class="section package-section" aria-labelledby="packages-title">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Consultation-based packages</p>
          <h2 id="packages-title">Package-style starting points, shaped around the business.</h2>
          <p>No public pricing is needed here. A.R.T reviews the business first, then recommends the best creative setup.</p>
        </div>
        <div class="package-grid">
          ${packages.map(packageCard).join("")}
        </div>
      </div>
    </section>

    <section id="how-it-works" class="section process-section" aria-labelledby="process-title">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">How it works</p>
          <h2 id="process-title">A simple path from registration to delivery.</h2>
        </div>
        <ol class="process-list">
          ${processSteps
            .map(
              (step, index) => `
                <li>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${escapeHtml(step.title)}</h3>
                  <p>${escapeHtml(step.text)}</p>
                </li>
              `
            )
            .join("")}
        </ol>
      </div>
    </section>

    <section class="section faq-section" aria-labelledby="faq-title">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Common questions</p>
          <h2 id="faq-title">Before your consultation.</h2>
        </div>
        <div class="faq-grid">
          <article>
            <h3>What does private art department mean?</h3>
            <p>It means A.R.T helps your business manage core creative needs through one organized system instead of treating every flyer, shirt, print piece, or web update as a disconnected task.</p>
          </article>
          <article>
            <h3>Can customers place instant requests?</h3>
            <p>No. A.R.T starts with registration and consultation so the right creative setup can be recommended before any project path is confirmed.</p>
          </article>
          <article>
            <h3>What types of businesses is this for?</h3>
            <p>Small businesses, local service providers, restaurants, salons, fitness studios, contractors, retail shops, event teams, and growing brands across New Jersey and NYC.</p>
          </article>
        </div>
      </div>
    </section>

    ${ctaPanel(
      "Ready to organize your business visuals?",
      "Use the registration form to start the conversation. A.R.T will review your business and follow up with the best creative direction.",
      "Request Consultation"
    )}
    ${consultationForm({
      sourcePage: "Homepage",
      sourcePath: "/",
      heading: "Tell A.R.T what your business needs."
    })}
  `;

  return layout({
    title: "A.R.T | Private Art Department for NJ and NYC Small Businesses",
    description:
      "Allowing Realities Through A.R.T provides graphic design, custom apparel, promotional materials, branding, business essentials, and website support for small businesses in New Jersey and NYC.",
    body,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Allowing Realities Through A.R.T.",
        description:
          "A private creative department for small businesses, offering graphic design, custom apparel, promotional materials, branding, business essentials, and website support.",
        areaServed: ["New Jersey", "New York City"],
        url: "/"
      }
    ]
  });
}

function localServicesList() {
  return `
    <div class="mini-grid">
      ${services
        .map(
          (service) => `
            <article>
              <h3>${escapeHtml(service.title)}</h3>
              <p>${escapeHtml(service.summary)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function localPackagesList() {
  return `
    <div class="mini-grid packages-mini">
      ${packages
        .map(
          (pack) => `
            <article>
              <h3>${escapeHtml(pack.title)}</h3>
              <p>${escapeHtml(pack.forText)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderLocation(location) {
  const industries = industriesByType[location.type];
  const work = [
    recentWork[0],
    recentWork[4],
    recentWork[11],
    location.type === "creative" ? recentWork[9] : recentWork[10]
  ];
  const cityState = `${location.city}, ${location.state}`;
  const title = `Graphic Design, Apparel, Promo Materials & Websites in ${cityState} | A.R.T`;
  const description = `A.R.T is a private art department for ${location.city} small businesses needing graphic design, custom apparel, promotional materials, branding, and website support.`;

  const body = `
    <section class="location-hero" aria-labelledby="location-title">
      <img class="location-logo-mark" src="${BRAND_LOGO}" alt="" aria-hidden="true" loading="eager" decoding="async">
      <div class="section-inner location-hero-inner">
        <p class="eyebrow">${escapeHtml(cityState)} creative support</p>
        <h1 id="location-title">A Private Art Department for ${escapeHtml(location.city)} Businesses.</h1>
        <p>${escapeHtml(location.intro)}</p>
        <div class="hero-actions">
          ${consultationButton("Request Consultation", "button button-primary")}
          <a class="button button-secondary" href="#local-services">View Services</a>
        </div>
        <p class="cta-note">${CTA_NOTE}</p>
      </div>
    </section>

    <section class="section" aria-labelledby="local-proof-title">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Work examples</p>
          <h2 id="local-proof-title">Design, apparel, print, branding, and website support for business use.</h2>
          <p>${escapeHtml(location.localAngle)}</p>
        </div>
        <div class="work-grid compact">
          ${work
            .map((item) =>
              imageCard(
                {
                  ...item,
                  alt: `${item.alt} for businesses near ${cityState}`
                },
                false
              )
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section split-section" aria-labelledby="local-focus-title">
      <div class="section-inner split-grid">
        <div>
          <p class="eyebrow">Local business fit</p>
          <h2 id="local-focus-title">Creative support for ${escapeHtml(location.city)} businesses that need to look organized.</h2>
          <p>A.R.T supports ${escapeHtml(industries)} with graphic design for small businesses, custom apparel for businesses, promotional materials for local businesses, branding for small businesses, and website design for small businesses NJ NYC.</p>
        </div>
        <div class="check-list">
          <span>Uniforms and business apparel</span>
          <span>Flyers, banners, business cards</span>
          <span>Brand foundation and visual consistency</span>
          <span>Mobile-friendly website structure</span>
        </div>
      </div>
    </section>

    <section id="local-services" class="section" aria-labelledby="local-services-title">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Services in ${escapeHtml(location.city)}</p>
          <h2 id="local-services-title">One creative system instead of scattered tasks.</h2>
          <p>Every business has different needs, so A.R.T starts with registration and a consultation before recommending the best setup.</p>
        </div>
        ${localServicesList()}
        <div class="center-action">
          ${consultationButton("Complete Registration", "button button-primary")}
          <p class="cta-note">${CTA_NOTE}</p>
        </div>
      </div>
    </section>

    <section class="section package-section" aria-labelledby="local-packages-title">
      <div class="section-inner">
        <div class="section-heading">
          <p class="eyebrow">Packages for ${escapeHtml(location.city)} businesses</p>
          <h2 id="local-packages-title">Consultation-based packs with no public pricing required.</h2>
          <p>These package-style starting points help identify whether your business needs design essentials, a brand foundation, promotional materials, or website build and optimization first.</p>
        </div>
        ${localPackagesList()}
      </div>
    </section>

    <section class="section not-section" aria-labelledby="local-not-title">
      <div class="section-inner split-grid">
        <div>
          <p class="eyebrow">Focused creative support</p>
          <h2 id="local-not-title">A.R.T is not an order counter for disconnected requests.</h2>
          <p>The goal is to help ${escapeHtml(location.city)} businesses connect design, apparel, promotional materials, and website presence into a structured creative department.</p>
        </div>
        <ul class="not-list">
          <li>Not a marketing agency</li>
          <li>Not paid ad management</li>
          <li>Not growth hacking</li>
          <li>Not monthly SEO retainers</li>
        </ul>
      </div>
      <div class="section-inner">
        <p class="closing-line">We focus on design, apparel, promotional materials, and website support, executed properly.</p>
      </div>
    </section>

    ${ctaPanel(
      `Start a creative consultation for your ${location.city} business.`,
      "Complete the registration form so A.R.T can review your business and recommend the right creative setup.",
      "Request Consultation"
    )}
    ${consultationForm({
      sourcePage: `${cityState} Location Page`,
      sourcePath: `/locations/${location.slug}/`,
      heading: `Tell A.R.T what your ${location.city} business needs.`
    })}
  `;

  return layout({
    title,
    description,
    path: `/locations/${location.slug}/`,
    pageClass: "location-page",
    body,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Private art department for businesses in ${cityState}`,
        areaServed: cityState,
        provider: {
          "@type": "LocalBusiness",
          name: "Allowing Realities Through A.R.T."
        },
        serviceType:
          "Graphic design, custom apparel, promotional materials, branding, business essentials, and website support"
      }
    ]
  });
}

function renderThankYou() {
  const body = `
    <section class="thank-you-section" aria-labelledby="thank-you-title">
      <div class="section-inner thank-you-card">
        <img class="thank-you-logo" src="${BRAND_LOGO}" alt="Allowing Realities Through A.R.T. logo" width="132" height="132">
        <p class="eyebrow">Submission received</p>
        <h1 id="thank-you-title">Thank you.</h1>
        <p>Thank you. A.R.T will review your information and follow up shortly to discuss the best creative setup for your business.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/">Return Home</a>
          <a class="button button-secondary" href="/#recent-work">View Recent Work</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: "Thank You | A.R.T Consultation Request",
    description:
      "Thank you. A.R.T will review your information and follow up shortly to discuss the best creative setup for your business.",
    path: "/thank-you/",
    pageClass: "thank-you-page",
    body
  });
}

module.exports = {
  renderHome,
  renderLocation,
  renderThankYou
};
