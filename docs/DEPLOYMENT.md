# Deployment Guide - Sage.coach Website

Complete deployment instructions for hosting the Sage.coach marketing website.

---

## 📋 Quick Navigation

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Option 1: Netlify (Recommended)](#option-1-netlify-recommended)
- [Option 2: Vercel](#option-2-vercel)
- [Option 3: GitHub Pages](#option-3-github-pages)
- [Option 4: Traditional Hosting (cPanel/FTP)](#option-4-traditional-hosting-cpanelftp)
- [Custom Domain Setup](#custom-domain-setup)
- [SSL Certificate Setup](#ssl-certificate-setup)
- [Post-Deployment Tasks](#post-deployment-tasks)

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images added and optimized (see ASSET_REQUIREMENTS.md)
- [ ] Google Analytics tracking ID added to all HTML files
- [ ] Cal.com booking URL configured
- [ ] Form submission endpoint configured (if not using demo mode)
- [ ] All placeholder content replaced with real content
- [ ] Tested locally in multiple browsers
- [ ] Ran through OPTIMIZATION_CHECKLIST.md
- [ ] Custom domain purchased (if using one)

---

## 🚀 Option 1: Netlify (Recommended)

**Why Netlify?**
- Free tier available
- Automatic HTTPS
- Continuous deployment from Git
- Built-in form handling
- Fast CDN
- Easy custom domain setup

### Method A: Drag & Drop (Fastest)

1. **Visit** [Netlify Drop](https://app.netlify.com/drop)

2. **Drag and drop** the entire `sage-coach-website` folder

3. **Wait** for deployment (~30 seconds)

4. **Get URL** - Netlify provides a random URL like `https://random-name-123.netlify.app`

5. **Configure custom domain** (see Custom Domain Setup below)

### Method B: Git-Based Deploy (Recommended for Updates)

1. **Create a Git repository:**

```bash
cd sage-coach-website
git init
git add .
git commit -m "Initial commit: Sage.coach website"
```

2. **Push to GitHub** (or GitLab/Bitbucket):

```bash
# Create a new repo on GitHub, then:
git remote add origin https://github.com/yourusername/sage-coach-website.git
git branch -M main
git push -u origin main
```

3. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Build settings:
     - **Build command:** (leave empty)
     - **Publish directory:** `.` (current directory)
   - Click "Deploy site"

4. **Auto-deploy:** Now every push to `main` branch auto-deploys!

### Netlify Configuration

Create `netlify.toml` in root directory:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Netlify Forms

To enable contact form:

1. **Add** `netlify` attribute to form:

```html
<form id="contactForm" netlify>
  <!-- form fields -->
</form>
```

2. **Redeploy** - Netlify auto-detects and handles form submissions

3. **View submissions** in Netlify dashboard under "Forms"

---

## ⚡ Option 2: Vercel

**Why Vercel?**
- Excellent performance
- Free tier
- Great developer experience
- Automatic HTTPS

### Deploy via CLI

1. **Install Vercel CLI:**

```bash
npm install -g vercel
```

2. **Deploy:**

```bash
cd sage-coach-website
vercel
```

3. **Follow prompts:**
   - Link to Vercel account
   - Set up project
   - Confirm settings

4. **Production deploy:**

```bash
vercel --prod
```

### Deploy via Git

1. **Push to GitHub** (see Netlify method above)

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repo
   - Click "Deploy"

3. **Configure:**
   - Framework Preset: Other
   - Root Directory: `.`
   - Build Command: (leave empty)
   - Output Directory: `.`

---

## 📄 Option 3: GitHub Pages

**Why GitHub Pages?**
- Free
- Integrated with GitHub
- Good for open-source projects

### Setup

1. **Create GitHub repository** and push code (see Netlify method)

2. **Enable GitHub Pages:**
   - Go to repo Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch
   - Branch: `main` / `(root)`
   - Click "Save"

3. **Access site:**
   - URL will be: `https://yourusername.github.io/sage-coach-website/`

### Custom Domain

1. In repo settings > Pages > Custom domain
2. Enter: `sage.coach`
3. Click "Save"
4. Add DNS records (see Custom Domain Setup below)

**Limitations:**
- No server-side processing
- No form handling (need external service)
- Slower deployments than Netlify/Vercel

---

## 📁 Option 4: Traditional Hosting (cPanel/FTP)

**For:** Bluehost, SiteGround, GoDaddy, Hostgator, etc.

### Via cPanel File Manager

1. **Log in to cPanel**

2. **Navigate to File Manager**

3. **Go to** `public_html` (or `www`)

4. **Upload files:**
   - Click "Upload"
   - Select all files from `sage-coach-website` folder
   - Wait for upload to complete

5. **Set permissions:**
   - Files: 644
   - Folders: 755

6. **Access:** `https://yourdomain.com`

### Via FTP

1. **Get FTP credentials** from your hosting provider

2. **Connect via FTP client** (FileZilla, Cyberduck, etc.):
   - Host: `ftp.yourdomain.com`
   - Username: [provided by host]
   - Password: [provided by host]
   - Port: 21

3. **Upload all files** to `public_html` or `www` directory

4. **Set permissions** (if needed):
   - Right-click files → Properties → Permissions → 644

**Note:** You'll need to manually configure:
- HTTPS/SSL certificate (usually available in cPanel)
- Form handling (use Formspree or similar)

---

## 🌐 Custom Domain Setup

### Step 1: Point Domain to Hosting

#### For Netlify

1. **In Netlify dashboard:**
   - Go to Site settings > Domain management
   - Click "Add custom domain"
   - Enter: `sage.coach` (and `www.sage.coach`)

2. **Update DNS records** at your domain registrar:

**A Record:**
```
Type: A
Name: @
Value: 75.2.60.5 (Netlify's load balancer)
TTL: Auto
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: [your-site].netlify.app
TTL: Auto
```

#### For Vercel

1. **In Vercel dashboard:**
   - Go to project > Settings > Domains
   - Add domain: `sage.coach`

2. **Add DNS records** at registrar:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)
TTL: Auto
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

#### For Traditional Hosting

1. **Get your hosting IP address** from cPanel or provider

2. **Add A Record** at domain registrar:

```
Type: A
Name: @
Value: [Your hosting IP, e.g., 192.168.1.1]
TTL: Auto
```

```
Type: A
Name: www
Value: [Your hosting IP]
TTL: Auto
```

### Step 2: Wait for DNS Propagation

- Usually takes: 15 minutes to 48 hours
- Check status: [whatsmydns.net](https://whatsmydns.net)

---

## 🔒 SSL Certificate Setup

### Netlify / Vercel / GitHub Pages

**Automatic!** SSL certificates are provisioned automatically within minutes of domain verification.

### Traditional Hosting (cPanel)

1. **Log in to cPanel**

2. **Go to SSL/TLS Status** or **Let's Encrypt**

3. **Install certificate** for your domain

4. **Enable Force HTTPS:**
   - Add to `.htaccess` in root:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## ✅ Post-Deployment Tasks

After successful deployment:

### 1. Verify Deployment

- [ ] Visit homepage - loads correctly
- [ ] Check all pages (pricing, about, contact)
- [ ] Test mobile responsiveness
- [ ] Check images load
- [ ] Test all CTAs and links
- [ ] Book demo modal works
- [ ] Contact form submits
- [ ] Analytics tracking works

### 2. Test Across Devices

- [ ] Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Tablet (iPad, Android)
- [ ] Mobile (iPhone, Android)

### 3. Configure Analytics

- [ ] Verify Google Analytics receiving data
- [ ] Set up conversion goals
- [ ] Test event tracking (CTA clicks)

### 4. Set Up Monitoring

**Free Tools:**
- [Google Search Console](https://search.google.com/search-console) - SEO monitoring
- [Uptime Robot](https://uptimerobot.com) - Uptime monitoring
- [PageSpeed Insights](https://pagespeed.web.dev) - Performance monitoring

### 5. Submit to Search Engines

- **Google:** [Submit sitemap](https://search.google.com/search-console)
- **Bing:** [Submit sitemap](https://www.bing.com/webmasters)

### 6. SEO Checklist

- [ ] Create and submit XML sitemap
- [ ] Verify robots.txt
- [ ] Check all meta descriptions
- [ ] Verify Open Graph images
- [ ] Test social sharing (LinkedIn, Twitter, Facebook)

### 7. Performance Optimization

Run your site through:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

Target scores:
- Lighthouse Performance: > 90
- Lighthouse SEO: > 95
- Lighthouse Accessibility: > 95
- Lighthouse Best Practices: > 95

---

## 🔄 Update Workflow

### For Git-Based Hosting (Netlify/Vercel/GitHub Pages)

1. **Make changes** locally
2. **Test** in browser
3. **Commit:**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. **Push:**
   ```bash
   git push origin main
   ```
5. **Auto-deploy** happens automatically!

### For Traditional Hosting

1. **Make changes** locally
2. **Test** in browser
3. **Upload via FTP** or File Manager
4. **Clear cache** (browser and server if applicable)

---

## 🆘 Troubleshooting

### Site Not Loading

- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify files are in correct directory (`public_html`, not subfolder)
- Check file permissions (644 for files, 755 for folders)
- Clear browser cache

### Images Not Loading

- Check file paths are correct (case-sensitive!)
- Verify images uploaded to `/images/` folder
- Check permissions
- Ensure images optimized (< 200KB each)

### Forms Not Working

- **Netlify:** Add `netlify` attribute to form tag
- **Vercel:** Set up Formspree or similar service
- **Traditional:** Configure backend endpoint or use Formspree

### HTTPS Not Working

- Wait 24-48 hours for SSL provisioning
- Force HTTPS redirect (see SSL Certificate Setup above)
- Check hosting provider SSL settings

### Analytics Not Tracking

- Verify Google Analytics tracking ID is correct
- Check in "Realtime" view in Google Analytics
- Ensure script loads (check browser console)
- Wait 24 hours for data to appear in reports

---

## 📞 Support

If you encounter deployment issues:

1. **Check documentation** of your hosting provider
2. **Search hosting provider forums** (most issues already solved)
3. **Contact hosting support** (Netlify, Vercel have great free support)
4. **Email us:** hello@sage.coach

---

## 🎉 You're Live!

Once deployed successfully:

1. **Announce** on social media
2. **Share** with your network
3. **Monitor** performance and analytics
4. **Iterate** based on user feedback

**Congratulations on launching your high-converting website!** 🚀
