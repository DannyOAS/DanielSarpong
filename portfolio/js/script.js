// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initMobileMenu();
    initProjectHovers();
});

// Navigation and Scroll Handling
function initNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Highlight active navigation item on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Typing Effect for Hero Section
function initTypingEffect() {
    const text = "Specializing in vulnerability assessment, incident response, and network security.";
    const typingElement = document.querySelector('.typing-text');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        }
    }

    // Start typing effect
    type();
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Mobile Menu Handling
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
        
        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

// Project Card Interactions
function initProjectHovers() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.project-content').style.transform = 'translateY(0)';
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.project-content').style.transform = 'translateY(100%)';
        });
    });
}

// Skill Progress Animation
function animateSkills() {
    const skills = document.querySelectorAll('.skill-category li');
    
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.classList.add('skill-highlight');
        });

        skill.addEventListener('mouseleave', () => {
            skill.classList.remove('skill-highlight');
        });
    });
}

// Form Validation (if you add a contact form)
function validateForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form validation logic here
            console.log('Form submitted');
        });
    }
}

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('loader-hidden');
        loader.addEventListener('transitionend', () => {
            document.body.removeChild(loader);
        });
    }
});

// Optional: Add particle background effect
function initParticleBackground() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ff00'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff00',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
}

// Call particle background if you decide to use it
// Note: You'll need to add particles.js library to your HTML
// initParticleBackground();