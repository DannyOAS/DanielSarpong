#!/bin/bash

# Digital Ocean Droplet Deployment Script
# Update these variables with your server details

# Server configuration
SERVER_USER="root"  # Change to your server username
SERVER_IP="YOUR_DROPLET_IP"  # Replace with your droplet's IP
DOMAIN="me.shoshapp.com"
WEB_ROOT="/var/www/${DOMAIN}"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Deploying portfolio to ${DOMAIN}${NC}"

# Create a tarball of the portfolio files
echo -e "${GREEN}📦 Creating deployment package...${NC}"
tar -czf portfolio-deploy.tar.gz \
    index.html \
    css/style.css \
    js/*.js \
    --exclude='node_modules' \
    --exclude='*.md' \
    --exclude='package*.json' \
    --exclude='tailwind.config.js' \
    --exclude='css/input.css'

# Upload to server
echo -e "${GREEN}📤 Uploading files to droplet...${NC}"
scp portfolio-deploy.tar.gz ${SERVER_USER}@${SERVER_IP}:/tmp/

# Execute deployment commands on server
echo -e "${GREEN}🔧 Setting up on server...${NC}"
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
    # Create web directory if it doesn't exist
    mkdir -p /var/www/me.shoshapp.com
    
    # Backup existing site (if any)
    if [ -d "/var/www/me.shoshapp.com/index.html" ]; then
        mv /var/www/me.shoshapp.com /var/www/me.shoshapp.com.backup.$(date +%Y%m%d-%H%M%S)
    fi
    
    # Extract new files
    cd /var/www/me.shoshapp.com
    tar -xzf /tmp/portfolio-deploy.tar.gz
    
    # Set proper permissions
    chown -R www-data:www-data /var/www/me.shoshapp.com
    chmod -R 755 /var/www/me.shoshapp.com
    
    # Clean up
    rm /tmp/portfolio-deploy.tar.gz
    
    echo "✅ Files deployed successfully!"
ENDSSH

# Clean up local tarball
rm portfolio-deploy.tar.gz

echo -e "${GREEN}✨ Deployment complete!${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Update the script with your droplet IP"
echo "2. Configure Nginx/Apache for the subdomain"
echo "3. Set up SSL with Let's Encrypt"