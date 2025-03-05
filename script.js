// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const header = document.querySelector('header');
const heroPhoto = document.querySelector('.hero-photo img');
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

// Toggle navigation menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Add shadow to header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console and show a success message
        console.log({
            name,
            email,
            subject,
            message
        });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Typing effect for hero section
const typeEffect = () => {
    const text = "Building scalable applications with C#, C++, Rust, SQL and JavaScript";
    const heroText = document.querySelector('.hero-content p');
    const typingSpeed = 50; // milliseconds per character
    let i = 0;

    heroText.textContent = '';
    
    function type() {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        }
    }
    
    setTimeout(type, 1000);
};

// Run typing effect when page loads
window.addEventListener('load', typeEffect);

// Project hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Skill animation on scroll
const skillTags = document.querySelectorAll('.skill-tags span');
window.addEventListener('scroll', () => {
    skillTags.forEach(tag => {
        const tagPosition = tag.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (tagPosition < screenPosition) {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }
    });
});

// Initialize skill tags with initial style
skillTags.forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    tag.style.transition = 'all 0.3s ease';
});
// Dark Mode Toggle functionality
// Dark Mode Toggle (if not already added)
const modeToggle = document.querySelector('.mode-toggle');
modeToggle.addEventListener('click', () => {
  const htmlEl = document.documentElement;
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', newTheme);
});

// Open modal when clicking on the photo
heroPhoto.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = heroPhoto.src;
  });
  
  // Close modal when clicking on the close button
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
