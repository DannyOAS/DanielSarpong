// Main JavaScript file - Light Theme Portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active Section Highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    function highlightActiveSection() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('text-primary', 'font-semibold');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('text-primary', 'font-semibold');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call once on load
    
    // Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Add submission animation
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;
        
        try {
            // Submit to Formspree
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                button.textContent = 'Message Sent!';
                button.classList.remove('bg-primary', 'hover:bg-primary-light');
                button.classList.add('bg-green-600', 'hover:bg-green-700');
                
                // Reset form
                setTimeout(() => {
                    this.reset();
                    button.textContent = originalText;
                    button.classList.remove('bg-green-600', 'hover:bg-green-700');
                    button.classList.add('bg-primary', 'hover:bg-primary-light');
                    button.disabled = false;
                    
                    // Show success notification
                    showNotification('Thank you for your message! I will get back to you soon.', 'success');
                }, 2000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            // Show error message
            button.textContent = 'Error!';
            button.classList.remove('bg-primary', 'hover:bg-primary-light');
            button.classList.add('bg-red-600', 'hover:bg-red-700');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('bg-red-600', 'hover:bg-red-700');
                button.classList.add('bg-primary', 'hover:bg-primary-light');
                button.disabled = false;
                
                showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
            }, 2000);
        }
    });
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove any existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full ${
            type === 'success' ? 'bg-green-600 text-white' : 
            type === 'error' ? 'bg-red-600 text-white' : 
            'bg-primary text-white'
        }`;
        notification.textContent = message;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 10);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('section > div, .bg-white.rounded-xl');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Simple typing effect for hero section (optional, more subtle than before)
    const heroTitle = document.querySelector('h1');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.classList.add('animate-fade-in');
        }, 300);
    }
    
    // Progress bar animation for skills when in view
    const skillBars = document.querySelectorAll('#skills .rounded-full > div');
    const skillsSection = document.getElementById('skills');
    let skillsAnimated = false;
    
    function animateSkills() {
        const sectionPos = skillsSection.getBoundingClientRect();
        if (sectionPos.top < window.innerHeight && sectionPos.bottom > 0 && !skillsAnimated) {
            skillsAnimated = true;
            skillBars.forEach((bar, index) => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease-out';
                    bar.style.width = width;
                }, index * 100);
            });
        }
    }
    
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Check on load
    
    // Add animation delay utility
    const animationDelayElements = document.querySelectorAll('.animation-delay-200');
    animationDelayElements.forEach(el => {
        el.style.animationDelay = '200ms';
    });
});