# Kapil Gupta – Personal Website

Personal profile website for **Kapil Gupta** — CTO & Architecture Consultant.  
Hosted on GitHub Pages: `https://kapilguptaonline.github.io/`

---

## 📁 Project Structure

```
/
├── index.html              ← Main homepage (all sections)
├── css/
│   └── style.css           ← All custom styles (CSS variables, components)
├── js/
│   └── main.js             ← Navbar scroll, fade-ins, modal logic
├── partials/               ← Reusable HTML templates (for static site generators)
│   ├── _navbar.html        ← Sticky transparent navbar
│   ├── _footer.html        ← Footer with copyright
│   └── _contact-modal.html ← Contact popover / modal
└── assets/                 ← Add your images here
    └── og-image.jpg        ← Open Graph image (create 1200×630px)
```

---

## 🚀 Deploy to GitHub Pages

1. Create a repo named `kapilguptaonline.github.io`
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → main branch / root**
4. Your site is live at `https://kapilguptaonline.github.io/`

---

## 📸 Adding Screenshots to Case Studies

Each case study card has a placeholder media area. To add real screenshots or videos:

1. Place images in `assets/case-studies/`
2. In `index.html`, replace the emoji + placeholder `<div class="case-card-media">` with:

```html
<div class="case-card-media p-0">
  <img src="assets/case-studies/crm-screenshot.jpg" 
       alt="Custom CRM Dashboard" 
       style="width:100%;height:100%;object-fit:cover;">
</div>
```

For video embeds (YouTube/Loom), replace with:

```html
<div class="case-card-media p-0">
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
</div>
```

---

## 📬 Connecting the Contact Form

The form currently simulates submission. To connect to a real backend:

**Option A – Formspree (no server needed):**
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B – EmailJS:**
Replace the `await new Promise(...)` line in `js/main.js` with:
```javascript
await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', contactForm);
```

---

## 🎨 Customisation

All colours are CSS variables in `css/style.css`:

```css
--blue:      #1a3c8f;   /* Royal Blue – primary */
--green:     #10b981;   /* Emerald Green – accent */
```

Change these two values to re-theme the entire site.

---

## ✅ SEO Checklist

- [x] `<title>` with name + keywords
- [x] Meta description (≤160 chars)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Schema.org JSON-LD (Person)
- [x] `rel="canonical"` link
- [x] Semantic HTML (`<section>`, `<article>`, `aria-label`)
- [ ] Add `assets/og-image.jpg` (1200×630px)
- [ ] Submit sitemap to Google Search Console
