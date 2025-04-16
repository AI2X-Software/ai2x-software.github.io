// DOM Elements
const header = document.querySelector('header');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const contactForm = document.getElementById('contactForm');
const progressBars = document.querySelectorAll('.progress-value');
const languageSelector = document.querySelector('.language-selector');
const langBtn = document.querySelector('.lang-btn');
const langDropdown = document.querySelector('.lang-dropdown');
const langOptions = document.querySelectorAll('.lang-option');
const currentLangDisplay = document.querySelector('.current-lang');

// Language switching functionality
let currentLang = localStorage.getItem('language') || 'tr';

// Initialize language based on stored preference
document.addEventListener('DOMContentLoaded', () => {
    // Set language based on stored preference
    if (localStorage.getItem('language')) {
        setLanguage(localStorage.getItem('language'));
    }

    // Update active language in dropdown
    updateActiveLanguage();
});

// Language selector dropdown
if (langBtn) {
    langBtn.addEventListener('click', () => {
        languageSelector.classList.toggle('active');
    });
}

// Handle language options click
if (langOptions) {
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            setLanguage(language);
            localStorage.setItem('language', language);
            updateActiveLanguage();
            languageSelector.classList.remove('active');
        });
    });
}

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (languageSelector && !languageSelector.contains(e.target)) {
        languageSelector.classList.remove('active');
    }
});

// Update active language in dropdown
function updateActiveLanguage() {
    if (langOptions) {
        langOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === currentLang) {
                option.classList.add('active');
            }
        });
    }
    
    if (currentLangDisplay) {
        currentLangDisplay.textContent = currentLang.toUpperCase();
    }
    
    // Update html lang attribute
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('data-lang', currentLang);
}

// Set language for all elements with data-tr and data-en attributes
function setLanguage(language) {
    currentLang = language;
    
    // Update page title
    if (language === 'en') {
        document.title = 'AI2X - Autonomous Systems and Artificial Intelligence Team';
    } else {
        document.title = 'AI2X - Otonom Sistemler ve Yapay Zeka Takımı';
    }
    
    // Update text content
    document.querySelectorAll('[data-tr][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${language}`);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-tr-placeholder][data-en-placeholder]').forEach(element => {
        element.placeholder = element.getAttribute(`data-${language}-placeholder`);
    });
}

// Mobile Navigation
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
// Update the contact form handling in script.js
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            const errorMsg = currentLang === 'en' ? 'Please fill in all fields.' : 'Lütfen tüm alanları doldurun.';
            showFormMessage(errorMsg, 'error');
            return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            const errorMsg = currentLang === 'en' ? 'Please enter a valid email address.' : 'Lütfen geçerli bir e-posta adresi girin.';
            showFormMessage(errorMsg, 'error');
            return;
        }
        
        // Construct email body with formatted message
        const greeting = currentLang === 'en' ? 'Hello,' : 'Merhaba,';
        const formMsg = currentLang === 'en' ? 'A contact form has been submitted:' : 'Bir iletişim formu gönderildi:';
        const senderLabel = currentLang === 'en' ? 'Sender' : 'Gönderen';
        const emailLabel = currentLang === 'en' ? 'Email' : 'E-posta';
        const messageLabel = currentLang === 'en' ? 'Message' : 'Mesaj';
        
        const emailBody = `${greeting}\n\n${formMsg}\n\n${senderLabel}: ${name}\n${emailLabel}: ${email}\n\n${messageLabel}:\n${message}`;
        
        // Create mailto URL with encoded parameters
        const mailtoUrl = `mailto:ai2xsoftware@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoUrl;
        
        // Show success message
        const successMsg = currentLang === 'en' ? 'Opening your email client...' : 'E-posta istemciniz açılıyor...';
        showFormMessage(successMsg, 'success');
        
        // Optional: Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
        }, 2000);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form messages
function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('form-message');
    messageElement.classList.add(type);
    messageElement.textContent = message;
    
    // Add message after the form
    contactForm.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Intersection Observer for animation
const animateOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe elements
    document.querySelectorAll('.achievement-card, .timeline-item, .team-member').forEach(element => {
        observer.observe(element);
    });
};

// Initialize animations
window.addEventListener('load', () => {
    // Animate progress bars
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    // Initialize scroll animations
    animateOnScroll();
});

// Add CSS class for animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.achievement-card, .timeline-item, .team-member').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Handle images loading
window.addEventListener('load', () => {
    // Create assets directory if it doesn't exist
    const checkAssetsDirectory = () => {
        console.log('Please make sure the assets directory is created with the required images.');
    };
    
    checkAssetsDirectory();
}); 