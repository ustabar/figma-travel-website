// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
});

// Service cards interaction
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        serviceCards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
    });
});

// Testimonial navigation
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');

let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
        card.style.display = i === index ? 'block' : 'none';
    });
    
    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initialize testimonials
testimonialCards.forEach((card, index) => {
    card.style.display = index === 0 ? 'block' : 'none';
});

testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
const emailInput = document.querySelector('.email-input input');
const subscribeBtn = document.querySelector('.subscribe-btn');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
        // Simulate subscription
        subscribeBtn.textContent = 'Subscribed!';
        subscribeBtn.style.background = '#4CAF50';
        emailInput.value = '';
        
        setTimeout(() => {
            subscribeBtn.textContent = 'Subscribe';
            subscribeBtn.style.background = 'linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)';
        }, 3000);
    } else {
        alert('Please enter a valid email address');
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Add fade-in animation to destination cards
    document.querySelectorAll('.destination-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Add slide animations to sections
    document.querySelectorAll('.hero-text').forEach(element => {
        element.classList.add('slide-in-left');
        observer.observe(element);
    });
    
    document.querySelectorAll('.hero-image').forEach(element => {
        element.classList.add('slide-in-right');
        observer.observe(element);
    });
    
    document.querySelectorAll('.book-trip-text').forEach(element => {
        element.classList.add('slide-in-left');
        observer.observe(element);
    });
    
    document.querySelectorAll('.book-trip-cards').forEach(element => {
        element.classList.add('slide-in-right');
        observer.observe(element);
    });
});

// Destination card hover effects
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Play button interaction
const playBtn = document.querySelector('.play-btn');
if (playBtn) {
    playBtn.addEventListener('click', function() {
        // Simulate video play
        this.innerHTML = '<i class="fas fa-pause"></i>';
        this.style.background = '#4CAF50';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-play"></i>';
            this.style.background = '#DF6951';
        }, 3000);
    });
}

// Parallax effect for decorative elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.decoration-circle, .plus-pattern');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Remove loading class after animation
    setTimeout(() => {
        document.body.classList.remove('loaded');
    }, 1000);
});

// Trip card favorites interaction
document.querySelectorAll('.trip-favorite').forEach(heart => {
    heart.addEventListener('click', function() {
        this.classList.toggle('favorited');
        if (this.classList.contains('favorited')) {
            this.style.color = '#ff4757';
            this.classList.remove('far');
            this.classList.add('fas');
        } else {
            this.style.color = '#4152CA';
            this.classList.remove('fas');
            this.classList.add('far');
        }
    });
});

// Search functionality (placeholder for destination search)
function searchDestinations(query) {
    const destinations = document.querySelectorAll('.destination-card');
    destinations.forEach(card => {
        const name = card.querySelector('.destination-name').textContent.toLowerCase();
        if (name.includes(query.toLowerCase()) || query === '') {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Social media sharing (placeholder functions)
function shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), 
                '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + 
                '&text=' + encodeURIComponent('Check out this amazing travel website!'), 
                '_blank', 'width=600,height=400');
}

function shareOnInstagram() {
    // Instagram doesn't support direct URL sharing, so we copy to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard! You can now share it on Instagram.');
    });
}

// Add event listeners for social sharing
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            switch(index) {
                case 0: shareOnFacebook(); break;
                case 1: shareOnInstagram(); break;
                case 2: shareOnTwitter(); break;
            }
        });
    });
});

// Add CSS animations keyframes via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .loaded .hero-text {
        animation: slideInLeft 1s ease-out;
    }
    
    .loaded .hero-image {
        animation: slideInRight 1s ease-out 0.3s both;
    }
    
    .cta-btn:hover {
        animation: pulse 0.6s ease-in-out;
    }
`;
document.head.appendChild(style);

// Welcome Notification System
function showWelcomeNotification() {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedJadoo');
    
    if (!hasVisited) {
        setTimeout(() => {
            const notification = document.getElementById('welcome-notification');
            if (notification) {
                notification.classList.remove('hidden');
                
                // Auto-dismiss after 6 seconds
                const autoDismissTimer = setTimeout(() => {
                    hideNotification();
                }, 6000);
                
                // Add click handler for close button
                const closeBtn = notification.querySelector('.notification-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        clearTimeout(autoDismissTimer);
                        hideNotification();
                    });
                }
                
                // Add keyboard support for close button
                if (closeBtn) {
                    closeBtn.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            clearTimeout(autoDismissTimer);
                            hideNotification();
                        }
                    });
                }
                
                // Mark as visited
                localStorage.setItem('hasVisitedJadoo', 'true');
            }
        }, 2500); // Show after 2.5 seconds
    }
}

function hideNotification() {
    const notification = document.getElementById('welcome-notification');
    if (notification && !notification.classList.contains('hidden')) {
        // Add exit animation
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        
        setTimeout(() => {
            notification.classList.add('hidden');
            notification.style.animation = '';
        }, 300);
    }
}

// Initialize welcome notification when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    showWelcomeNotification();
});

console.log('🛫 Jadoo Travel Website loaded successfully!');