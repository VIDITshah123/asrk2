# ARSK & Associates Website Task List

## Phase 1: Project Setup & Architecture
- [x] Initialize Next.js project with App Router.
- [x] Configure project for Vanilla CSS.
- [x] Set up absolute paths & directory structure (`/components`, `/lib`, `/styles`, `/public`).
- [x] Configure fonts: Cormorant Garamond / Playfair Display (Serif) and Inter / Montserrat (Sans-serif).
- [x] Set up Sanity CMS for Knowledge Center.

## Phase 2: Visual Identity & Core Layout
- [x] Define global CSS variables for strict Monochromatic palette (Deep Blacks, Pure Whites, Slate Greys).
- [x] Build global layout wrapper (Navbar & Footer).
- [x] Implement minimalist "sticky" header that doesn't distract from visual content.
- [x] Create base typography styles for headings and body.
- [x] Set up layout utility classes for utilizing negative space.

## Phase 3: Core Pages (Static & Content Mapping)
- [x] **Home Page**:
  - [x] Hero Section with high-contrast text and full-color imagery.
  - [x] Trust Signals (Awards/Empanelments - pending details from `missing.md`).
  - [x] Brief overview of firm & link to services.
- [x] **About Us Page**:
  - [x] Firm history and philosophy content integration.
  - [x] Ensure smooth parallax scrolling.
- [x] **Our Team Page**:
  - [x] Map team content to UI cards.
  - [x] Separate Leadership from Partners structure.
  - [x] Map specific portraits from `/images/people` (e.g., `sureshkumarkabra.jpeg`, etc.).
- [x] **Why Choose ARSK Page**:
  - [x] Integrate content emphasizing exclusivity and rigor.

## Phase 4: Service Hub
- [x] **Service Layout Component**: Standardized page structure for services.
- [x] Implement "Audit & Assurance" page.
- [x] Implement "Direct & International Tax" page.
- [x] Implement "Indirect Tax (GST/Customs)" page.
- [x] Implement "Corporate Advisory" page.
- [x] Implement "Outsourced CFO" page.
- [x] Implement "Management Audit" page.
- [x] Implement "NRI Advisory" page.

## Phase 5: Knowledge Center
- [x] **Insights & Blogs**: Feed of articles (Static or CMS-driven).
- [x] **Case Studies**: Showcase of firm's work (Static or CMS-driven).
- [x] **FAQ**: Accordion-style FAQ component.

## Phase 6: Conversion & Interactivity
- [x] **Contact Us Page**: 
  - [x] Build layout and integrate lead capture form.
  - [x] Set up form submission handler (API route to backend).
- [x] Implement global micro-interactions (hover states, custom cursors if needed).
- [x] Implement fade-in-on-scroll animations using Framer Motion or Intersection Observer.

## Phase 7: Optimization & Final Polish
- [x] Image Optimization using `next/image` to ensure high-res files don't degrade performance.
- [x] Mobile Responsiveness audit across all screen sizes.
- [x] Lighthouse Performance Audit (Target: 90+).
- [x] Final visual QA and UX review against the "Art Museum" standard.
