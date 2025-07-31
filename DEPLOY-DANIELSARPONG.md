# Deployment Guide for danielsarpong.dev

## Quick Deployment Options

### Option 1: Netlify (Easiest - Free)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the entire `/root/portfolio` folder to Netlify
3. In Netlify dashboard:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter `danielsarpong.dev`
4. Update your DNS:
   - Add these records at your domain registrar:
   ```
   Type: A     Name: @    Value: 75.2.60.5
   Type: CNAME Name: www  Value: [your-site-name].netlify.app
   ```

### Option 2: Vercel (Also Free)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. In the portfolio directory, run:
   ```bash
   vercel
   ```
3. Follow the prompts
4. Add custom domain in Vercel dashboard
5. Update DNS as instructed by Vercel

### Option 3: GitHub Pages (Free)

1. Create a new GitHub repository named `danielsarpong.github.io` (if your username is danielsarpong)
2. Push your code:
   ```bash
   cd /root/portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   git push -u origin main
   ```
3. Create a file named `CNAME` with content: `danielsarpong.dev`
4. Update DNS:
   ```
   Type: A    Name: @    Value: 185.199.108.153
   Type: A    Name: @    Value: 185.199.109.153
   Type: A    Name: @    Value: 185.199.110.153
   Type: A    Name: @    Value: 185.199.111.153
   Type: CNAME Name: www Value: YOUR_USERNAME.github.io
   ```

### Option 4: Traditional Web Hosting (cPanel)

If you have shared hosting with cPanel:

1. Log into cPanel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload these files:
   - `index.html`
   - `css/style.css` (create css folder first)
   - `js/main.js` (create js folder first)

### Option 5: VPS/Cloud Server (DigitalOcean, AWS, etc.)

If you have a VPS:

1. Update the `deploy-danielsarpong.sh` script with your server IP
2. Run:
   ```bash
   ./deploy-danielsarpong.sh
   ```

Or manually:
```bash
# Connect to your server
ssh user@your-server-ip

# Install nginx if not installed
sudo apt update
sudo apt install nginx

# Create directory
sudo mkdir -p /var/www/danielsarpong.dev

# Upload files (from local machine)
scp -r /root/portfolio/* user@server-ip:/var/www/danielsarpong.dev/

# Create nginx config
sudo nano /etc/nginx/sites-available/danielsarpong.dev
```

Nginx config:
```nginx
server {
    listen 80;
    server_name danielsarpong.dev www.danielsarpong.dev;
    root /var/www/danielsarpong.dev;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Then:
```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/danielsarpong.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Install SSL
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d danielsarpong.dev -d www.danielsarpong.dev
```

## Files to Deploy

Essential files only:
- `index.html`
- `css/style.css`
- `js/main.js`

No need to upload:
- node_modules/
- package.json files
- .md files
- tailwind.config.js
- css/input.css

## After Deployment

1. Test your site at https://danielsarpong.dev
2. Check mobile responsiveness
3. Test all links and forms
4. Set up analytics (optional)

## Need Help?

Let me know which hosting option you're using and I can provide more specific instructions!