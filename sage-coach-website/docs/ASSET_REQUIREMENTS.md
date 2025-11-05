# Asset Requirements for Sage.coach Website

This document outlines all image, video, and asset requirements for the complete Sage.coach marketing website.

---

## 📋 Table of Contents

1. [Image Requirements](#image-requirements)
2. [Icon Requirements](#icon-requirements)
3. [Logo Requirements](#logo-requirements)
4. [Favicon Requirements](#favicon-requirements)
5. [Video Requirements (Optional)](#video-requirements-optional)
6. [File Naming Conventions](#file-naming-conventions)
7. [Image Optimization Guidelines](#image-optimization-guidelines)
8. [Alt Text Guidelines](#alt-text-guidelines)

---

## 🖼️ Image Requirements

### Homepage

#### 1. Hero Dashboard Screenshot

**Location:** Homepage Hero Section (right side)

- **Filename:** `hero-dashboard-mockup.png` (and `.webp`)
- **Dimensions:** 1200×900px minimum
- **Format:** PNG with transparency OR WebP
- **Export:** @1x (1200px) and @2x (2400px) for retina displays
- **Content:** Product dashboard showing:
  - Client list view
  - Progress bars/indicators
  - Clean, organized UI
  - Sage brand colors visible
- **Style:** Professional screenshot with subtle shadow/depth
- **File Size Target:** < 200KB (optimized)

#### 2. Feature Screenshot - Client Management

**Location:** Homepage Features Section, Feature 1

- **Filename:** `feature-client-management.png` (and `.webp`)
- **Dimensions:** 800×600px
- **Format:** PNG or WebP
- **Export:** @1x and @2x
- **Content:** Dashboard showing:
  - Client cards or list
  - Filters and search
  - Quick actions/buttons
  - Clear visual hierarchy
- **File Size Target:** < 150KB

#### 3. Feature Screenshot - Roadmaps

**Location:** Homepage Features Section, Feature 2

- **Filename:** `feature-roadmaps.png` (and `.webp`)
- **Dimensions:** 800×600px
- **Format:** PNG or WebP
- **Export:** @1x and @2x
- **Content:** Visual roadmap interface showing:
  - Milestone timeline
  - Progress indicators
  - Phase-by-phase layout
  - Interactive elements highlighted
- **File Size Target:** < 150KB

#### 4. Feature Screenshot - Analytics

**Location:** Homepage Features Section, Feature 3

- **Filename:** `feature-analytics.png` (and `.webp`)
- **Dimensions:** 800×600px
- **Format:** PNG or WebP
- **Export:** @1x and @2x
- **Content:** Analytics dashboard with:
  - Charts and graphs
  - Key metrics
  - Data visualizations
  - Insights panel
- **File Size Target:** < 150KB

### About Page

#### 5. Founder Photo

**Location:** About Page, Founder Story Section

- **Filename:** `founder-josh-bob.jpg` (and `.webp`)
- **Dimensions:** 800×800px (1:1 square ratio)
- **Format:** JPG (90% quality) or WebP
- **Export:** @1x and @2x
- **Content:** Professional photo of founder
- **Style:**
  - Neutral or slightly blurred background
  - Good lighting
  - Professional but approachable
  - Headshot or upper body
- **File Size Target:** < 100KB

### Testimonials

#### 6. Testimonial Avatars (3 needed)

**Location:** Homepage Testimonials Carousel

- **Filenames:**
  - `testimonial-avatar-sarah-m.jpg`
  - `testimonial-avatar-david-r.jpg`
  - `testimonial-avatar-karin-h.jpg`
- **Dimensions:** 256×256px (displayed at 64-80px)
- **Format:** JPG (90% quality)
- **Export:** Single resolution (256px)
- **Content:** Professional headshots
- **Style:**
  - Neutral background
  - Well-lit
  - Friendly expression
- **File Size Target:** < 30KB each
- **Note:** Must have permission/rights to use these photos

### Social Sharing (Open Graph)

#### 7. Open Graph Image

**Location:** Meta tags for social media sharing

- **Filename:** `og-image.jpg`
- **Dimensions:** 1200×630px (Facebook/LinkedIn standard)
- **Format:** JPG (85% quality)
- **Content:** Branded image with:
  - Sage.coach logo
  - Tagline: "The Operating System for Career Coaching"
  - Brand colors (Sage Green, Deep Forest)
  - Clean, modern design
- **File Size Target:** < 200KB
- **Note:** This appears when sharing links on Facebook, LinkedIn, Twitter, Slack, etc.

---

## 🎨 Icon Requirements

All icons should use the **Lucide Icons** or **Feather Icons** style:
- Rounded line icons
- 2px stroke weight
- Sage Green (#A3B9A0) or Gray 600 (#757575) color

### Required Icons (SVG format)

| Icon | Usage | Size |
|---|---|---|
| ✓ Check mark | Success states, feature bullets | 20px |
| ✗ X/Close | Close modals, error states | 24px |
| → Chevron right | Navigation, CTAs | 16px |
| ↗ Arrow right | External links | 16px |
| 📅 Calendar | Booking references | 24px |
| 👥 Users | Team/clients | 24px |
| 🎯 Target | Goals | 24px |
| 📊 Bar chart | Analytics | 24px |
| 📖 Book open | Resources | 24px |
| ✉️ Mail | Contact | 24px |
| ☰ Menu | Mobile nav (hamburger) | 24px |
| ▶️ Play circle | Video/demo | 24px |

**Format:** SVG
**Color:** Can be dynamically changed via CSS `fill` or `stroke`
**Optimization:** Run through SVGO or similar tool

---

## 🏷️ Logo Requirements

### Primary Logo

- **Filename:** `logo-full.svg`
- **Format:** SVG (vector)
- **Also provide:** PNG versions (@1x: 200px height, @2x: 400px height)
- **Content:** Full wordmark + icon
- **Variants needed:**
  - **Dark version** (for light backgrounds): Deep Forest (#355C4C)
  - **Light version** (for dark backgrounds): White (#FFFFFF)
  - **Icon only** (for small spaces): `logo-icon.svg`

### Logo Specifications

- **Wordmark:** "sage.coach" in lowercase
- **Font:** Inter or similar (current design)
- **Icon:** Owl/leaf motif (as shown in current placeholders)
- **Colors:**
  - Primary: Deep Forest (#355C4C)
  - Secondary: Sage Green (#A3B9A0)
- **Clear space:** Minimum padding equal to the height of the icon on all sides

---

## 🔖 Favicon Requirements

Create a complete favicon package with these files:

### Required Files

1. **favicon.ico**
   - Dimensions: 32×32px, 16×16px (multi-size ICO)
   - Place in root directory

2. **favicon-32x32.png**
   - Dimensions: 32×32px
   - Place in `/images/`

3. **favicon-16x16.png**
   - Dimensions: 16×16px
   - Place in `/images/`

4. **apple-touch-icon.png**
   - Dimensions: 180×180px
   - For iOS home screen
   - Place in `/images/`

### Design Guidelines

- **Icon:** Simplified version of Sage logo (icon only, no text)
- **Background:** Transparent OR solid Sage Green (#A3B9A0)
- **Foreground:** Deep Forest (#355C4C) or White
- **Style:** Simple, recognizable at small sizes
- **Test at:** 16px, 32px, and 64px to ensure clarity

### Generation Tool

Use [RealFaviconGenerator](https://realfavicongenerator.net/) to create all sizes from a single 512×512px master image.

---

## 🎥 Video Requirements (Optional)

### Demo/Explainer Video

If you want to add a product demo video:

- **Length:** 60-90 seconds
- **Resolution:** 1920×1080px (1080p)
- **Format:** MP4 (H.264 codec)
- **Aspect Ratio:** 16:9
- **File Size:** < 20MB (ideally < 10MB)
- **Hosting:** YouTube or Vimeo (embedded, not self-hosted)
- **Thumbnail:** Custom 1280×720px image
- **Subtitles:** Required (SRT file)
- **Content:**
  - Quick product overview
  - Key feature highlights
  - Professional voiceover OR background music only
  - On-brand graphics and transitions

### Feature Walkthrough Videos (Short)

- **Length:** 30-45 seconds each
- **Resolution:** 1920×1080px
- **Format:** MP4 OR GIF (for short loops)
- **Style:** Screen recordings with subtle annotations
- **Hosting:** Self-hosted OR Vimeo

---

## 📝 File Naming Conventions

### Format

```
[context]-[description]-[variant].[extension]
```

### Examples

✅ **Good:**
- `hero-dashboard-mockup.png`
- `feature-client-management.webp`
- `testimonial-avatar-sarah-chen.jpg`
- `logo-full-white.svg`
- `icon-checkmark-circle.svg`

❌ **Bad:**
- `IMG_1234.png`
- `Screen Shot 2025-11-04.png`
- `final-FINAL-v2.jpg`
- `image.png`

### Rules

- All lowercase
- Use hyphens (not underscores or spaces)
- Descriptive, not generic
- Include variant if applicable (e.g., `-white`, `-dark`, `-@2x`)

---

## 🎯 Image Optimization Guidelines

### Before Upload

1. **Resize** to exact dimensions needed (don't upload 4000px images for 800px display)
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com/) (PNG/JPG)
   - [Squoosh](https://squoosh.app/) (all formats)
   - [ImageOptim](https://imageoptim.com/) (Mac)
3. **Convert** to WebP when possible (with JPG/PNG fallback)
4. **Export** @2x versions for retina displays

### Target Compression

| Image Type | Format | Quality | Max File Size |
|---|---|---|---|
| Screenshots | WebP | 80-85% | 150KB |
| Photos | JPG/WebP | 85-90% | 100KB |
| Avatars | JPG | 90% | 30KB |
| Graphics/Illustrations | PNG/WebP | 80-85% | 100KB |
| Open Graph | JPG | 85% | 200KB |

### Responsive Images

For large images (hero, features), provide multiple sizes:

```html
<img
  src="hero-dashboard-640.webp"
  srcset="
    hero-dashboard-640.webp 640w,
    hero-dashboard-1024.webp 1024w,
    hero-dashboard-1920.webp 1920w
  "
  sizes="(max-width: 767px) 640px, (max-width: 1023px) 1024px, 1920px"
  alt="Sage dashboard showing client progress tracking"
>
```

---

## ♿ Alt Text Guidelines

### Purpose

Alt text describes images for:
- Screen reader users (accessibility)
- Users with images disabled
- Search engines (SEO)

### Rules

1. **Be descriptive** but concise (8-15 words)
2. **Describe what's shown** and its context
3. **Don't start with** "Image of..." or "Picture of..."
4. **For decorative images**, use empty alt: `alt=""`
5. **For functional images** (buttons/links), describe the action

### Examples

#### ✅ Good Alt Text

**Hero Screenshot:**
```html
alt="Sage dashboard showing client list with progress indicators and session history"
```

**Feature Screenshot - Roadmaps:**
```html
alt="Visual career roadmap with milestone timeline and completion tracking"
```

**Founder Photo:**
```html
alt="Josh Bob, Founder of Sage.coach"
```

**Testimonial Avatar:**
```html
alt="Sarah M., PM Coach"
<!-- OR if decorative next to quoted text: -->
alt=""
```

#### ❌ Bad Alt Text

```html
alt="dashboard"
alt="Image of a computer screen"
alt="screenshot.png"
alt=""  <!-- For meaningful images -->
```

### Content-Specific Guidelines

| Image Type | Alt Text Format | Example |
|---|---|---|
| Product screenshots | Describe what's shown + key feature | "Client dashboard with filters and progress tracking" |
| Photos of people | Name + role/title | "Josh Bob, Founder of Sage.coach" |
| Icons (with text) | Empty alt | `alt=""` (text already describes it) |
| Icons (standalone) | Describe function | "Checkmark indicating completed task" |
| Logos | Company name | "Sage.coach logo" |
| Decorative graphics | Empty alt | `alt=""` |

---

## 📦 Delivery Checklist

Before considering assets "complete," ensure:

- [ ] All images exported at correct dimensions
- [ ] @2x (retina) versions created for key images
- [ ] WebP versions created (with JPG/PNG fallback)
- [ ] All images compressed and under target file size
- [ ] Filenames follow naming conventions
- [ ] All required favicons generated
- [ ] Logo SVG and PNG versions provided
- [ ] Alt text written for all images (provided in separate doc)
- [ ] Legal rights/permissions confirmed for all photos
- [ ] Images tested on actual devices (mobile, tablet, desktop)

---

## 🆘 Need Help?

### Image Creation

If you need help creating these assets:

1. **Screenshots:** Use your actual product (Sage app) and take clean screenshots
2. **Photos:** Hire a photographer OR use stock photos (with proper licensing)
3. **Graphics/Icons:** Use [Figma](https://figma.com), [Canva](https://canva.com), or hire a designer

### Stock Photo Resources (Paid/Free)

- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- [Stocksy](https://stocksy.com) - Premium authentic photos (paid)

### Icon Resources

- [Lucide Icons](https://lucide.dev) - Recommended icon set
- [Feather Icons](https://feathericons.com) - Alternative icon set
- [Heroicons](https://heroicons.com) - Another great option

---

## ✅ Priority Order

If you need to phase asset creation, prioritize in this order:

### Phase 1 (Must Have - Week 1)
1. Logo (SVG + PNG)
2. Favicons
3. Hero dashboard screenshot
4. Open Graph image (for social sharing)

### Phase 2 (Important - Week 2)
5. Feature screenshots (all 3)
6. Founder photo

### Phase 3 (Nice to Have - Week 3)
7. Testimonial avatars
8. Demo video (optional)

---

**Once all assets are ready, see [SETUP.md](SETUP.md) for how to add them to the website.**
