#!/bin/bash

# Deployment Script for danielsarpong.dev
# Update these variables with your server details

# Server configuration
SERVER_USER="root"  # Change to your server username
SERVER_IP="YOUR_SERVER_IP"  # Replace with your server's IP
DOMAIN="danielsarpong.dev"
WEB_ROOT="/var/www/${DOMAIN}"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Deploying portfolio to ${DOMAIN}${NC}"

# Build CSS first
echo -e "${GREEN}🎨 Building CSS...${NC}"
npx tailwindcss -i ./css/input.css -o ./css/style.css --minify

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
    --exclude='css/input.css' \
    --exclude='deploy*.sh'

# Upload to server
echo -e "${GREEN}📤 Uploading files to server...${NC}"
scp portfolio-deploy.tar.gz ${SERVER_USER}@${SERVER_IP}:/tmp/

# Execute deployment commands on server
echo -e "${GREEN}🔧 Setting up on server...${NC}"
ssh ${SERVER_USER}@${SERVER_IP} << ENDSSH
    # Create web directory if it doesn't exist
    mkdir -p ${WEB_ROOT}
    
    # Backup existing site (if any)
    if [ -f "${WEB_ROOT}/index.html" ]; then
        mkdir -p ${WEB_ROOT}.backups
        cp -r ${WEB_ROOT}/* ${WEB_ROOT}.backups/backup-$(date +%Y%m%d-%H%M%S)/
    fi
    
    # Extract new files
    cd ${WEB_ROOT}
    tar -xzf /tmp/portfolio-deploy.tar.gz
    
    # Set proper permissions
    chown -R www-data:www-data ${WEB_ROOT}
    chmod -R 755 ${WEB_ROOT}
    
    # Clean up
    rm /tmp/portfolio-deploy.tar.gz
    
    echo "✅ Files deployed successfully!"
ENDSSH

# Clean up local tarball
rm portfolio-deploy.tar.gz

echo -e "${GREEN}✨ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Your site should be live at: https://${DOMAIN}${NC}"