# Professional Portfolio - Light Theme

A clean, modern portfolio website with a light theme, designed for accessibility and ease of use for all visitors.

## Features

- 🌟 **Clean, Light Design** - Professional appearance with excellent readability
- 📱 **Fully Responsive** - Works perfectly on all devices
- ♿ **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- 🚀 **Fast Performance** - Lightweight with minimal dependencies
- 🎯 **Clear Navigation** - Traditional menu with active section highlighting
- 📊 **Skill Visualization** - Clean progress bars for skills display
- 📬 **Contact Form** - Simple, user-friendly contact section
- 🎨 **Professional Typography** - Using Inter and Poppins fonts

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Build Tailwind CSS:
```bash
npx tailwindcss -i ./css/input.css -o ./css/style.css --watch
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:8080 in your browser

## Customization

### Personal Information
Edit `index.html` to update:
- Replace `[Your Name]` with your actual name
- Update the hero section description
- Add your real projects with descriptions
- Update skill percentages
- Add your social media links

### Colors
The color scheme can be customized in `tailwind.config.js`:
- `primary`: Navy blue (#1e3a8a)
- `accent`: Teal (#0891b2)
- `warm`: Orange (#f97316)
- Neutral grays for text and backgrounds

### Projects
To add more projects:
1. Copy a project card structure in the projects section
2. Update the title, description, and technologies
3. Add project links or images

### Contact Form
The contact form currently simulates submission. To make it functional:
1. Add a backend endpoint or use a service like:
   - Formspree (https://formspree.io)
   - EmailJS (https://www.emailjs.com)
   - Netlify Forms
2. Update the form submission handler in `js/main.js`

## Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Skip navigation link
- Focus indicators
- Sufficient color contrast
- Reduced motion support

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Fully responsive

## Performance Optimization

- Minimal JavaScript (no heavy libraries)
- Optimized CSS with Tailwind
- No external dependencies for animations
- Lazy loading ready for images

## Technologies Used

- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Google Fonts (Inter & Poppins)

## Deployment

This portfolio can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

Feel free to use this template for your personal portfolio!