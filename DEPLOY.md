# Deployment Guide for me.shoshapp.com

## Option 1: Netlify (Recommended for static sites)

1. Create account at netlify.com
2. Drag and drop the portfolio folder to Netlify
3. Go to Domain Settings → Add custom domain
4. Add `me.shoshapp.com`
5. Update DNS records at your domain registrar:
   - Add CNAME record: `me` → `[your-site].netlify.app`

## Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the portfolio directory
3. Add custom domain in Vercel dashboard
4. Update DNS records

## Option 3: GitHub Pages

1. Create a new GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```
3. Enable GitHub Pages in repository settings
4. Add CNAME file with `me.shoshapp.com`
5. Update DNS records

## Option 4: Traditional Web Hosting (cPanel/FTP)

1. Upload all files to your hosting:
   - index.html
   - css/ folder
   - js/ folder
   - All other files

2. Make sure files are in the subdomain directory:
   - Usually: `public_html/me/` or `subdomains/me/`

## Option 5: VPS/Cloud Server

1. SSH into your server
2. Upload files to web directory:
```bash
scp -r portfolio/* user@server:/var/www/me.shoshapp.com/
```
3. Configure nginx/Apache for the subdomain

## DNS Configuration

Add one of these records at your domain registrar:
- **A Record**: `me` → `YOUR_SERVER_IP`
- **CNAME Record**: `me` → `YOUR_HOSTING_PROVIDER`

## Files to Deploy

Essential files:
- index.html
- css/style.css
- js/main.js
- js/three-background.js
- js/animations.js

The site uses CDN links for libraries, so no need to upload node_modules!