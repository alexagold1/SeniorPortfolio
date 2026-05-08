// Loading screen and logo animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen after animation
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Start fade-in animations for sections
        initFadeInAnimations();
    }, 4000);
});

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

// Fade-in animations on scroll
function initFadeInAnimations() {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Typewriter effect for dynamic title
const titles = ["web developer", "student", "innovator"];
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
const dynamicTitle = document.getElementById("dynamic-title");

function typeWriter() {
    const fullText = titles[currentIndex];

    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    dynamicTitle.textContent = "I am a " + currentText;

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // pause at end
        isDeleting = true;
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % titles.length;
        typeSpeed = 500; // pause before typing
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter effect after loading
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen after animation
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Start fade-in animations for sections
        initFadeInAnimations();

        // Start typewriter effect
        typeWriter();
    }, 4000);
});

// Profile picture placeholder functionality
const profilePic = document.getElementById('profile-pic');
const imagePlaceholder = document.querySelector('.image-placeholder');

// Simulate profile picture loading (replace with actual image path)
function loadProfilePicture() {
    // In a real scenario, you would check if the image exists
    // For now, we'll keep the placeholder visible
    // Uncomment the line below when you add your actual profile picture
    // profilePic.style.display = 'block';
    // imagePlaceholder.style.display = 'none';
}

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Here you would typically send the form data to a server
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '10px';
    notification.style.color = 'white';
    notification.style.fontWeight = '500';
    notification.style.zIndex = '10000';
    notification.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    notification.style.transform = 'translateX(400px)';
    notification.style.transition = 'transform 0.3s ease';

    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #FF69B4, #FFB6C1)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #F56565, #E53E3E)';
    }

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 30px rgba(255, 105, 180, 0.15)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(255, 105, 180, 0.1)';
    }
});

// Add subtle parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});
// =========================
// PROJECT FILTERING
// =========================

const filterButtons =
document.querySelectorAll('.year-btn');

const projectCards =
document.querySelectorAll('.project-card-board');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        // REMOVE ACTIVE CLASS
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // ADD ACTIVE CLASS
        button.classList.add('active');

        const year = button.dataset.year;

        projectCards.forEach(card => {

            if (year === 'all') {

                card.style.display = 'block';

            }

            else if (card.classList.contains(year)) {

                card.style.display = 'block';

            }

            else {

                card.style.display = 'none';

            }

        });

    });

});
// Initialize profile picture loading
loadProfilePicture();