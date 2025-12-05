# Deployment Guide

This guide covers deploying the SAC website to different platforms.

## Current Setup: GitHub Pages

The site is currently configured for GitHub Pages with static export.

### Limitations:
- ❌ No image optimization
- ❌ No server-side rendering
- ❌ No API routes
- ✅ Free hosting
- ✅ Custom domain support

### Deploy to GitHub Pages:

```bash
npm run build
# Push the 'out' directory to gh-pages branch
```

---

## Recommended: Vercel (Best for Next.js)

Vercel offers the best Next.js experience with zero configuration.

### Benefits:
- ✅ Automatic image optimization
- ✅ WebP/AVIF format support
- ✅ Edge caching worldwide
- ✅ Auto-deploy on git push
- ✅ Free tier available
- ✅ Built-in analytics

### Setup Steps:

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Update next.config.js**
   Comment out the GitHub Pages config and uncomment the Vercel config:
   ```js
   // Comment out GitHub Pages config
   // const nextConfig = { output: "export", ... }

   // Use this instead:
   const nextConfig = {
     reactStrictMode: true,
     images: {
       formats: ['image/webp', 'image/avif'],
       deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
       imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
     },
     trailingSlash: true,
   };
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Get a `.vercel.app` URL instantly

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Auto-Deployment:
Every push to `main` branch automatically deploys to production.

---

## Alternative: Netlify

Another excellent option for Next.js static sites.

### Benefits:
- ✅ Image optimization via Netlify Image CDN
- ✅ Form handling
- ✅ Serverless functions
- ✅ Free tier available

### Setup Steps:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add new site" → "Import from Git"
   - Select your repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: out
   ```

4. **Update next.config.js**
   Same as Vercel - remove `output: "export"`

5. **Deploy**
   - Click "Deploy site"
   - Get a `.netlify.app` URL

---

## Performance Comparison

### GitHub Pages (Current)
- **Image Load:** ~2-5 MB unoptimized images
- **First Load:** ~10-15s on 3G
- **Lighthouse Score:** ~60-70

### Vercel/Netlify (Recommended)
- **Image Load:** ~500 KB with WebP
- **First Load:** ~3-5s on 3G
- **Lighthouse Score:** ~90-95

### Speed Improvement: **3-4x faster**

---

## Migration Checklist

### Before Migrating to Vercel/Netlify:

- [ ] Backup current GitHub Pages deployment
- [ ] Update `next.config.js` (see above)
- [ ] Remove `output: "export"` line
- [ ] Test locally: `npm run dev`
- [ ] Push changes to GitHub
- [ ] Connect repository to Vercel/Netlify
- [ ] Deploy and test
- [ ] Update DNS records for custom domain
- [ ] Monitor for any issues

### Testing After Deployment:

- [ ] Homepage loads correctly
- [ ] All club pages work
- [ ] Images load in WebP format (check DevTools)
- [ ] Navigation works
- [ ] Forms submit correctly
- [ ] Mobile responsiveness verified
- [ ] Check Lighthouse scores

---

## Rollback Plan

If you need to rollback to GitHub Pages:

1. Revert `next.config.js` changes
2. Restore `output: "export"` line
3. Run `npm run build`
4. Deploy to GitHub Pages

---

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add domain (e.g., `sac.iiitnr.ac.in`)
3. Update DNS:
   ```
   Type: CNAME
   Name: sac (or @)
   Value: cname.vercel-dns.com
   ```

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   ```
   Type: CNAME
   Name: sac (or @)
   Value: <your-site>.netlify.app
   ```

---

## Cost Comparison

| Platform | Free Tier | Pro Plan | Best For |
|----------|-----------|----------|----------|
| **GitHub Pages** | ✅ Unlimited | N/A | Simple sites |
| **Vercel** | ✅ 100 GB bandwidth | $20/mo | Next.js projects |
| **Netlify** | ✅ 100 GB bandwidth | $19/mo | Static sites |

For SAC website, the **free tier is sufficient** on either platform.

---

## Recommendation

**🎯 Best Choice: Vercel**

Reasons:
1. Built specifically for Next.js
2. Zero configuration required
3. Best image optimization
4. Fastest deployment
5. Free tier is generous
6. Excellent developer experience

The migration takes < 10 minutes and provides 3-4x performance improvement.

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
