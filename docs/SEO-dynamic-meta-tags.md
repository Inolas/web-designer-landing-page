# Dynamic Per-Section / Per-Page Meta Tags

This doc explains what *"wire up dynamic per-section meta tags if you plan to add
routed pages later"* means, why it matters, and how you'd actually do it in this
project.

---

## 1. The situation today

Right now the site is a **single-page app (SPA)**. Everything lives on one URL
(`/`) and the page just scrolls between sections (`#home`, `#services`,
`#pricing`, `#about`, `#faq`, `#contact`).

Because there's only **one real page**, all the SEO metadata is hard-coded once
in [`index.html`](../index.html):

```html
<title>Inolas Websites | Professional Web Development & Design</title>
<meta name="description" content="Inolas Websites builds custom websites..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
```

That's the correct, simplest approach **for one page**. Every visitor and every
search-engine crawler sees the same title and description, which is exactly what
you want when there's only one page to describe.

---

## 2. What "static" meta tags can't do

Those tags in `index.html` are **static** — they're written once and never
change while the app runs. That's fine until you add **more pages**, for example:

```
/                  → Home
/services          → Services
/services/landing-pages
/pricing
/blog/how-to-pick-a-web-host
```

When you navigate from `/` to `/pricing` in a React SPA (using React Router,
which is *already a dependency* in this project), **the browser does not reload
the page**. React just swaps the visible components. The `<head>` — and therefore
the `<title>` and meta tags — **stays exactly the same**.

So every page would share the home page's title and description. That's bad
because:

| Problem | Consequence |
|---|---|
| Every page has the same `<title>` | Google can't tell pages apart; weaker rankings |
| Every page has the same `description` | Search snippets are generic/wrong |
| Same Open Graph tags everywhere | Sharing `/pricing` on social shows the *home page* preview |
| No unique `canonical` per page | Duplicate-content signals to search engines |

---

## 3. What "dynamic per-page meta tags" means

**Dynamic** = the metadata **changes at runtime** depending on which page (route)
the user is on. Each page sets its *own* title, description, canonical URL, and
social-share tags.

Goal: when someone lands on `/pricing`, the `<head>` should contain *pricing*
metadata — not the home page's.

```
Visit /            →  <title>Inolas Websites | Professional Web Development</title>
Visit /pricing     →  <title>Pricing & Plans | Inolas Websites</title>
Visit /services    →  <title>Web Development Services | Inolas Websites</title>
```

("Per-section" in the original note just meant the same idea applied to *your*
existing sections — Services, Pricing, About, etc. — once each becomes its own
routed page rather than a scroll anchor.)

---

## 4. How you'd implement it

### Option A — `react-helmet-async` (recommended for an SPA)

A small, popular library that lets each React component declare what should go in
the `<head>`. It merges them and updates the live document.

**Install:**

```bash
npm install react-helmet-async
```

**Wrap the app once** (in [`main.jsx`](../src/main.jsx)):

```jsx
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
```

**Then each page sets its own tags.** A reusable component keeps it DRY:

```jsx
// src/components/Seo.jsx
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://inolas.ca'

export default function Seo({ title, description, path = '/' }) {
  const url = `${SITE_URL}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
```

**Use it at the top of each page:**

```jsx
function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing & Plans | Inolas Websites"
        description="Transparent web development pricing — custom websites, landing pages, and ongoing maintenance plans."
        path="/pricing"
      />
      {/* ...page content... */}
    </>
  )
}
```

Now navigating between routes automatically rewrites the `<head>` for each page.

### Option B — React 19 native `<title>`/`<meta>` hoisting

React 19 can hoist `<title>` and `<meta>` rendered anywhere in a component into
the document `<head>` automatically — no library needed. This project is on React
18 (`"react": "^18.2.0"` in [`package.json`](../package.json)), so this only
applies after a React 19 upgrade.

---

## 5. The important caveat: SPA vs. crawlers

There's a catch that affects whichever option you pick.

Helmet (and React 19) update the `<head>` **with JavaScript, in the browser,
after the page loads**. Modern Google *does* run JavaScript and will usually see
the updated tags — but:

- Other crawlers (some social-preview bots, Bing in certain cases, link-preview
  scrapers for Slack/Discord/WhatsApp) often **read only the raw HTML** the server
  sends and **don't run JS**. They'd see the *original* `index.html` tags, not the
  per-page ones.
- This is the well-known SEO limitation of any client-rendered SPA.

If accurate per-page metadata for **all** crawlers becomes important (e.g. you
add a blog and want each post to preview correctly when shared), the real fix is
**server-side rendering (SSR)** or **static pre-rendering**, where the correct
`<head>` is baked into the HTML *before* it reaches the browser. Practical paths:

| Approach | Tooling | When to use |
|---|---|---|
| Client-side meta (Helmet) | `react-helmet-async` | A few routes; Google is the main target |
| Static pre-rendering | `vite-plugin-ssg`, `react-snap` | Content is mostly static; want real HTML per route |
| Full SSR / framework | **Next.js** (already in your tech-stack list!) | Blog, many pages, best-in-class SEO |

---

## 6. TL;DR / decision guide

- **Staying as a one-page scrolling site?** Do **nothing** — the current static
  tags in `index.html` are correct and optimal.
- **Adding a handful of routed pages** (`/pricing`, `/services`) and Google is
  your main concern? Add **`react-helmet-async`** (Section 4, Option A).
- **Adding a blog or many shareable pages** and you need every crawler/social
  bot to see correct previews? Move to **SSR / static pre-rendering** (e.g.
  Next.js) — client-side meta tags alone won't reliably cover it.

The phrase *"wire up dynamic per-section meta tags if you plan to add routed
pages later"* was simply offering to set up **Option A** ahead of time, so the
moment you split the single page into real routes, each one already produces its
own correct title, description, and social-share preview.
