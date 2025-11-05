# Pre-Launch Optimization Checklist

Complete this checklist before launching the Sage.coach website to ensure optimal performance, SEO, and conversions.

---

## 📋 Quick Stats Target

| Metric | Target | Tool to Measure |
|---|---|---|
| Lighthouse Performance | > 90 | Chrome DevTools |
| Lighthouse SEO | > 95 | Chrome DevTools |
| Lighthouse Accessibility | > 95 | Chrome DevTools |
| Lighthouse Best Practices | > 95 | Chrome DevTools |
| Largest Contentful Paint (LCP) | < 2.5s | PageSpeed Insights |
| First Input Delay (FID) | < 100ms | PageSpeed Insights |
| Cumulative Layout Shift (CLS) | < 0.1 | PageSpeed Insights |
| Total Page Size | < 2MB | Chrome DevTools Network tab |

---

## ✅ Content Checklist

### Replace All Placeholders

- [ ] Replace all `[Dashboard Screenshot Placeholder]` with real images
- [ ] Replace all `[Photo Placeholder]` with real photos
- [ ] Add all testimonial avatars (real photos with permission)
- [ ] Replace `GA_MEASUREMENT_ID` with actual Google Analytics tracking ID (appears in all 4 HTML files)
- [ ] Verify Cal.com booking URL is correct (`cal.com/joshbob`)
- [ ] Remove any `TODO` comments from code

### Review All Copy

- [ ] Proofread all headlines for typos
- [ ] Proofread all body copy
- [ ] Verify all phone numbers/emails are correct
- [ ] Check all prices are accurate
- [ ] Verify all feature descriptions match actual product
- [ ] Ensure testimonials are authentic (with permission)
- [ ] Check founder bio is accurate

### Legal Pages

- [ ] Create Terms of Service page (`/terms.html`)
- [ ] Create Privacy Policy page (`/privacy.html`)
- [ ] Create Cookie Policy page (`/cookies.html`)
- [ ] Or: Remove footer links to these pages if not ready

---

## 🖼️ Images & Assets

### Image Optimization

- [ ] All images compressed (use TinyPNG or Squoosh)
- [ ] WebP versions created for all key images
- [ ] @2x (retina) versions created for hero and features
- [ ] All images under target file size (see ASSET_REQUIREMENTS.md)
- [ ] Lazy loading enabled for below-fold images
- [ ] Responsive images configured (srcset for large images)

### Alt Text

- [ ] Every image has descriptive alt text
- [ ] Decorative images have empty alt (`alt=""`)
- [ ] Alt text follows guidelines (8-15 words, descriptive)
- [ ] No "Image of..." or "Picture of..." in alt text

### Favicons

- [ ] favicon.ico in root directory
- [ ] favicon-32x32.png exists
- [ ] favicon-16x16.png exists
- [ ] apple-touch-icon.png exists (180×180px)
- [ ] Favicons display correctly in browser tabs

### Logo

- [ ] Logo SVG exists and displays correctly
- [ ] Logo PNG fallback exists
- [ ] Logo displays on all pages
- [ ] Logo links to homepage

---

## ⚡ Performance Optimization

### CSS

- [ ] CSS minified (can use online tools or build process)
- [ ] Unused CSS removed
- [ ] Critical CSS inlined (optional but recommended)
- [ ] No `@import` statements (consolidate into one file)

### JavaScript

- [ ] JS minified
- [ ] No console.log statements in production
- [ ] Event listeners properly cleaned up
- [ ] No memory leaks (test with Chrome DevTools)
- [ ] Debounced scroll handlers implemented ✅ (already done)

### Fonts

- [ ] Google Fonts loaded with `font-display: swap`
- [ ] Only necessary font weights loaded (400, 500, 600, 700)
- [ ] Fonts preconnected: `<link rel="preconnect" href="https://fonts.googleapis.com">` ✅ (already done)

### Page Load

- [ ] Run Lighthouse audit - Performance > 90
- [ ] Run PageSpeed Insights - all Core Web Vitals pass
- [ ] Test on slow 3G connection (Chrome DevTools)
- [ ] No render-blocking resources
- [ ] Images below-fold lazy loaded

### Caching

- [ ] Browser caching configured (via hosting or .htaccess)
- [ ] Static assets cache for 1 year
- [ ] HTML cache for 1 hour

---

## 🔍 SEO Optimization

### Meta Tags (All Pages)

- [ ] Every page has unique `<title>` (50-60 characters)
- [ ] Every page has unique meta description (150-160 characters)
- [ ] Every page has canonical URL
- [ ] Open Graph tags on all pages
- [ ] Twitter Card tags on all pages
- [ ] OG image exists and is 1200×630px

### Structured Data

- [ ] Organization schema on homepage
- [ ] Article schema on blog posts (if applicable)
- [ ] FAQ schema on pricing page (already implemented ✅)
- [ ] Validate schema with [Google's Rich Results Test](https://search.google.com/test/rich-results)

### Sitemap & Robots

- [ ] Create XML sitemap (manually or with tool)
- [ ] Submit sitemap to Google Search Console
- [ ] Create robots.txt file
- [ ] Verify robots.txt doesn't block important pages

**Example robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://sage.coach/sitemap.xml
```

### Internal Linking

- [ ] All pages linked from navigation or footer
- [ ] No broken internal links (test with [Broken Link Checker](https://www.brokenlinkcheck.com))
- [ ] Important pages linked from homepage
- [ ] Descriptive anchor text (not "click here")

### Keywords

- [ ] Primary keyword in H1 of each page
- [ ] Keywords in first paragraph of each page
- [ ] Keywords in meta description
- [ ] Keywords in URL (already done: `/pricing.html`, `/about.html`)
- [ ] Don't keyword stuff (sounds natural)

---

## ♿ Accessibility (WCAG 2.1 AA)

### Color Contrast

- [ ] All text meets 4.5:1 contrast ratio (normal text)
- [ ] Large text meets 3:1 contrast ratio
- [ ] Verify with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ ] No information conveyed by color alone

### Keyboard Navigation

- [ ] All interactive elements accessible via Tab key
- [ ] Tab order is logical (top to bottom, left to right)
- [ ] Skip-to-content link works ✅ (already implemented)
- [ ] Focus indicators visible on all elements
- [ ] No keyboard traps
- [ ] Enter/Space activates buttons

### Screen Reader

- [ ] All images have alt text (meaningful or empty)
- [ ] All form inputs have labels
- [ ] ARIA labels on icon-only buttons ✅ (already implemented)
- [ ] Landmark regions defined (`<nav>`, `<main>`, `<footer>`) ✅
- [ ] Headings in logical order (H1 → H2 → H3, no skipping)
- [ ] Test with screen reader (NVDA on Windows, VoiceOver on Mac)

### Forms

- [ ] All inputs have visible labels
- [ ] Required fields marked with asterisk and `aria-required`
- [ ] Error messages associated with fields via `aria-describedby`
- [ ] Success states clearly indicated
- [ ] No placeholder-only labels

---

## 🎯 Conversion Optimization

### CTAs

- [ ] Primary CTA appears in header ✅ (already done)
- [ ] Primary CTA appears in hero ✅
- [ ] Multiple CTAs throughout page ✅ (already done)
- [ ] CTAs use action-oriented text ("Start Free Trial" not "Submit")
- [ ] High contrast CTAs (easy to spot)
- [ ] CTAs tested on mobile (large enough to tap)

### Trust Elements

- [ ] Social proof metrics visible above fold ✅ (already done)
- [ ] Testimonials with real names and photos
- [ ] "No credit card required" prominently displayed ✅
- [ ] Security badges (if applicable)
- [ ] Privacy policy linked

### Forms

- [ ] Minimal fields (only ask for essentials)
- [ ] Contact form works (test submission)
- [ ] Form validation works (test error states)
- [ ] Success message displays
- [ ] No CAPTCHA (unless spam is issue)

### Mobile Experience

- [ ] All text readable without zooming
- [ ] Buttons/links large enough to tap (min 44×44px)
- [ ] No horizontal scrolling
- [ ] Form fields easy to fill on mobile
- [ ] Mobile menu works smoothly ✅ (already implemented)

---

## 🔒 Security & Privacy

### HTTPS

- [ ] Site loads over HTTPS
- [ ] Mixed content warnings resolved (no HTTP resources on HTTPS page)
- [ ] Force HTTPS redirect enabled
- [ ] SSL certificate valid and not expired

### Headers

- [ ] X-Frame-Options header set (prevent clickjacking)
- [ ] X-Content-Type-Options header set
- [ ] X-XSS-Protection header set
- [ ] Referrer-Policy header set

**For Netlify, add to `netlify.toml`:** ✅ (see DEPLOYMENT.md)

### Privacy

- [ ] Privacy policy exists and is linked
- [ ] Cookie consent banner (if using tracking cookies)
- [ ] GDPR compliant (if targeting EU users)
- [ ] No personal data collected without consent
- [ ] Analytics respects Do Not Track (optional)

---

## 📊 Analytics & Tracking

### Google Analytics

- [ ] GA4 property created
- [ ] Tracking code added to all pages
- [ ] Tracking ID is correct (not `GA_MEASUREMENT_ID`)
- [ ] Real-time reporting works (visit site, check GA)
- [ ] Events set up for CTA clicks ✅ (already implemented)
- [ ] Conversions/goals configured

### Event Tracking

- [ ] All CTA buttons tracked ✅ (data-analytics attributes)
- [ ] Form submissions tracked
- [ ] Outbound links tracked
- [ ] Modal opens tracked ✅ (demo modal)

### Testing

- [ ] Open site with GA active
- [ ] Click various CTAs
- [ ] Submit form
- [ ] Check events in GA Realtime view
- [ ] Verify all events fire correctly

---

## 🧪 Cross-Browser Testing

### Desktop

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile

- [ ] iOS Safari (iPhone)
- [ ] Chrome Android
- [ ] Samsung Internet

### Things to Test

- [ ] Layout not broken
- [ ] Images load
- [ ] Animations work (or gracefully degrade)
- [ ] Forms work
- [ ] Navigation works
- [ ] CTAs clickable

**Tools:**
- [BrowserStack](https://browserstack.com) - Cross-browser testing
- Chrome DevTools - Device emulation

---

## 🌐 Social Media Optimization

### Open Graph

- [ ] OG image exists (1200×630px)
- [ ] OG tags on all pages ✅ (already in HTML)
- [ ] Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Twitter Card

- [ ] Twitter Card tags present ✅
- [ ] Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Preview

- [ ] Share homepage URL on LinkedIn - looks good?
- [ ] Share homepage URL on Twitter - looks good?
- [ ] Share homepage URL on Facebook - looks good?

---

## 📱 Mobile Optimization

### Responsive Design

- [ ] Test at 320px width (iPhone SE)
- [ ] Test at 375px width (iPhone 12)
- [ ] Test at 768px width (iPad)
- [ ] Test at 1024px width (iPad landscape)
- [ ] No horizontal scroll at any breakpoint
- [ ] Text legible at all sizes

### Touch Targets

- [ ] All buttons min 44×44px
- [ ] Adequate spacing between clickable elements
- [ ] No hover-only interactions
- [ ] Forms easy to fill on mobile

### Performance

- [ ] Run PageSpeed Insights for mobile
- [ ] Mobile Lighthouse score > 90
- [ ] Test on real device (not just emulator)
- [ ] Test on slow connection (3G)

---

## ✅ Functional Testing

### All Pages

- [ ] Homepage loads
- [ ] Pricing page loads
- [ ] About page loads
- [ ] Contact page loads

### Navigation

- [ ] Logo links to homepage
- [ ] All nav links work
- [ ] Footer links work
- [ ] Mobile menu works
- [ ] No 404 errors

### Forms

- [ ] Contact form submits
- [ ] Validation works (try submitting empty form)
- [ ] Error messages display
- [ ] Success message displays
- [ ] Email received (if configured)

### Interactive Elements

- [ ] Demo modal opens ✅
- [ ] Demo modal closes (X button, backdrop click, Escape key)
- [ ] Testimonial carousel auto-plays ✅
- [ ] Testimonial carousel dots work
- [ ] Pricing toggle works (monthly/annual)
- [ ] FAQ accordion works
- [ ] All CTAs lead to correct destinations

### External Links

- [ ] "Start Free Trial" goes to `https://app.sage.coach/signup`
- [ ] "Login" goes to `https://app.sage.coach/login`
- [ ] Cal.com embed loads in modal
- [ ] All external links open in same tab (or new tab if preferred)

---

## 🚀 Pre-Launch Final Checks

### Last Minute

- [ ] All team members reviewed site
- [ ] Spell check all copy (use Grammarly or similar)
- [ ] Test all email addresses (send test email)
- [ ] Test booking flow (book a test demo)
- [ ] Check on slow internet connection
- [ ] Check in private/incognito window (no cache)

### Launch Day

- [ ] Announce on social media
- [ ] Email existing contacts/newsletter
- [ ] Post in relevant communities
- [ ] Monitor analytics for issues
- [ ] Monitor error logs (if applicable)
- [ ] Be ready to fix issues quickly

### Post-Launch (Week 1)

- [ ] Check analytics daily
- [ ] Monitor form submissions
- [ ] Check for broken links
- [ ] Review user feedback
- [ ] Make quick fixes as needed

---

## 📊 Tools & Resources

### Performance

- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

### SEO

- [Google Search Console](https://search.google.com/search-console)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)
- [Ahrefs Free SEO Tools](https://ahrefs.com/free-seo-tools)

### Accessibility

- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Validation

- [W3C HTML Validator](https://validator.w3.org)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Broken Link Checker](https://www.brokenlinkcheck.com)

### Social Media

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 🎉 You're Ready to Launch!

Once all items are checked:

1. Deploy to production (see DEPLOYMENT.md)
2. Run final smoke tests on live site
3. Announce launch! 🚀

**Track these metrics post-launch:**
- Traffic sources
- Conversion rate (trial signups)
- Bounce rate
- Time on page
- CTA click rates
- Form submission rate

**Iterate based on data - your website is never "done," it's always evolving!**

---

**Questions? See other docs or contact hello@sage.coach**
