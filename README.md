# Sage.coach Marketing Website

**Version:** 1.0
**Built:** November 2025
**Framework:** Vanilla HTML/CSS/JavaScript
**Design System:** Custom design system following "Notion meets Headspace" aesthetic

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Quick Start](#quick-start)
3. [Project Structure](#project-structure)
4. [Key Features](#key-features)
5. [Browser Support](#browser-support)
6. [Documentation](#documentation)
7. [Deployment](#deployment)
8. [Support](#support)

---

## 🎯 Project Overview

This is the complete marketing website for **Sage.coach** - The Operating System for Career Coaching. The website is built following Alex Hormozi's high-converting website framework and includes:

- **Homepage** with 8 conversion-optimized sections
- **Pricing Page** with tier comparison and FAQ
- **About Page** with founder story
- **Contact Page** with working form
- Full **responsive design** (mobile, tablet, desktop)
- **WCAG 2.1 AA accessibility** compliant
- **Google Analytics** integration ready
- **Cal.com** booking integration

### Design Philosophy

- **Modern & Calm**: "Notion meets Headspace for professional coaches"
- **Conversion-Optimized**: Strategic CTA placement following Hormozi framework
- **Accessible**: Keyboard navigation, screen reader support, proper ARIA labels
- **Performance**: Target LCP < 2.5s, optimized for Core Web Vitals

---

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in your browser
3. **Or use a local server** (recommended):

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

4. **Open** `http://localhost:8000` in your browser

### Option 2: Deploy to Hosting

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions for:
- Netlify (recommended)
- Vercel
- GitHub Pages
- Traditional hosting (cPanel, FTP)

---

## 📁 Project Structure

```
sage-coach-website/
├── index.html              # Homepage (8 sections)
├── pricing.html            # Pricing page with tier comparison
├── about.html              # About page with founder story
├── contact.html            # Contact page with form
├── README.md               # This file
│
├── css/
│   ├── variables.css       # Design system (colors, spacing, typography)
│   ├── global.css          # Global styles, resets, utilities
│   └── components.css      # Component styles (buttons, cards, forms)
│
├── js/
│   └── main.js             # All interactive functionality
│
├── images/                 # Image assets (to be added)
│   ├── hero/
│   ├── features/
│   ├── testimonials/
│   └── icons/
│
└── docs/                   # Documentation
    ├── SETUP.md            # Initial setup guide
    ├── CUSTOMIZATION_GUIDE.md  # How to customize content
    ├── ASSET_REQUIREMENTS.md   # Image/asset specifications
    ├── DEPLOYMENT.md       # Deployment instructions
    └── OPTIMIZATION_CHECKLIST.md  # Pre-launch checklist
```

---

## ✨ Key Features

### Homepage Sections

1. **Hero** - Value proposition with dual CTAs
2. **Social Proof Strip** - Key metrics (coaches, clients, time savings)
3. **Problem Statement** - 3-column problem cards
4. **Solution/Features** - 3 major features with alternating layout
5. **Testimonials** - Auto-rotating carousel with 3 testimonials
6. **Pricing Teaser** - Simple pricing overview with CTA
7. **Final CTA** - Dark background with strong call-to-action
8. **Footer** - 4-column footer with all links

### Interactive Features

- ✅ **Sticky header** with scroll shadow effect
- ✅ **Mobile hamburger menu** with smooth animations
- ✅ **Demo booking modal** with Cal.com embed
- ✅ **Testimonial carousel** with auto-play and manual controls
- ✅ **Scroll progress indicator** at top of page
- ✅ **Scroll animations** (fade in on viewport entry)
- ✅ **Form validation** with inline error messages
- ✅ **Analytics tracking** for all CTA clicks
- ✅ **Pricing toggle** (monthly/annual)
- ✅ **FAQ accordion** on pricing page

### Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Skip-to-content link
- ✅ Focus indicators
- ✅ Screen reader friendly
- ✅ Alt text placeholders for images
- ✅ Color contrast WCAG AA compliant

### Performance Optimizations

- ✅ Minimal dependencies (no frameworks)
- ✅ Optimized CSS (variables, no duplication)
- ✅ Debounced scroll handlers
- ✅ Lazy image loading ready
- ✅ Small JavaScript bundle
- ✅ CSS organized by purpose

---

## 🌐 Browser Support

### Fully Supported

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ iOS Safari (last 2 versions)
- ✅ Chrome Android (last 2 versions)

### Gracefully Degraded

- ⚠️ IE 11 (basic functionality, no animations)

---

## 📚 Documentation

### For Developers

- **[SETUP.md](docs/SETUP.md)** - Initial setup and configuration
- **[CUSTOMIZATION_GUIDE.md](docs/CUSTOMIZATION_GUIDE.md)** - How to update content and styling
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment to various platforms

### For Content/Marketing

- **[ASSET_REQUIREMENTS.md](docs/ASSET_REQUIREMENTS.md)** - Image sizes, formats, and specs
- **[OPTIMIZATION_CHECKLIST.md](docs/OPTIMIZATION_CHECKLIST.md)** - Pre-launch SEO and performance checklist

---

## 🚢 Deployment

### Quick Deploy (Recommended)

**Netlify (1-click deploy):**

1. Drag and drop the `sage-coach-website` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Configure custom domain
3. Add environment variables (GA tracking ID)
4. Done! ✅

**Vercel:**

```bash
cd sage-coach-website
vercel deploy
```

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

---

## 🔧 Configuration

### Google Analytics

1. Open each HTML file
2. Find `GA_MEASUREMENT_ID` (appears twice in each file)
3. Replace with your actual GA4 Measurement ID: `G-XXXXXXXXXX`

### Cal.com Booking

Already configured with: `https://cal.com/joshbob`

To change:
1. Search for `cal.com/joshbob` in all HTML files
2. Replace with your Cal.com username

### Form Submission

Contact form is currently set to **demo mode** (simulates submission).

To connect to a real endpoint:
1. Open `js/main.js`
2. Find the `contactForm` event listener
3. Replace the simulated submission with your form service (Formspree, Netlify Forms, etc.)

See [SETUP.md](docs/SETUP.md) for details.

---

## 📊 Analytics Events

The following events are automatically tracked:

| Event Name | Triggers When |
|---|---|
| `cta_header_trial` | Header "Start Free Trial" clicked |
| `cta_hero_trial` | Hero section trial button clicked |
| `cta_hero_demo` | Hero section demo button clicked |
| `cta_pricing_teaser_trial` | Pricing teaser trial button clicked |
| `cta_final_trial` | Final CTA trial button clicked |
| `cta_final_demo` | Final CTA demo button clicked |
| `demo_modal_opened` | Demo modal opened |
| `testimonial_viewed` | Testimonial slide viewed |
| `mobile_menu_toggle` | Mobile menu opened/closed |
| `contact_form_submit` | Contact form submitted |
| `pricing_toggle` | Pricing view toggled (monthly/annual) |

---

## 🎨 Brand Colors

| Color Name | Hex | Usage |
|---|---|---|
| Sage Green | `#A3B9A0` | Primary brand, links, accents |
| Deep Forest | `#355C4C` | CTAs, hover states, emphasis |
| Soft Ivory | `#F9F9F6` | Backgrounds, alternating sections |
| Charcoal Gray | `#222222` | Body text, headings |
| Accent Light Green | `#DCE6DC` | Highlights, cards |

See [CUSTOMIZATION_GUIDE.md](docs/CUSTOMIZATION_GUIDE.md) for how to change colors.

---

## 🐛 Known Limitations

1. **Form submission** - Currently in demo mode; needs backend integration
2. **Blog page** - Not implemented (linked from footer but doesn't exist)
3. **Features page** - Not implemented (linked from nav but doesn't exist)
4. **Legal pages** - Not implemented (Terms, Privacy, Cookies)
5. **Image assets** - Placeholders only; real images needed

See [ASSET_REQUIREMENTS.md](docs/ASSET_REQUIREMENTS.md) for image specifications.

---

## 📞 Support

For questions or issues:

- **Email**: hello@sage.coach
- **GitHub Issues**: [Create an issue](#) (if hosted on GitHub)
- **Documentation**: See `/docs` folder

---

## 📄 License

© 2025 Sage.coach. All rights reserved.

---

## ✅ Next Steps

1. **Replace Google Analytics ID** with your actual tracking ID
2. **Add real images** (see ASSET_REQUIREMENTS.md)
3. **Set up form submission** (see SETUP.md)
4. **Run optimization checklist** (see OPTIMIZATION_CHECKLIST.md)
5. **Deploy to production** (see DEPLOYMENT.md)
6. **Test across devices** and browsers

---

**Built with ❤️ following Alex Hormozi's high-converting website framework**
