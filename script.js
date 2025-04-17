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

// Blog Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const blogModals = {
        'blog-modal': document.getElementById('blog-modal'),
        'blog-modal-2': document.getElementById('blog-modal-2')
    };
    const blogCards = document.querySelectorAll('.blog-card');

    // Function to open blog modal
    function openBlogModal(e) {
        const card = e.currentTarget;
        const modalId = card.classList.contains('blog-card') ? 
            (card.querySelector('h3').textContent.includes('5 Ways') ? 'blog-modal' : 'blog-modal-2') : 
            'blog-modal';
        
        const modal = blogModals[modalId];
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Function to close all blog modals
    function closeAllBlogModals() {
        Object.values(blogModals).forEach(modal => {
            if (modal) {
                modal.style.display = 'none';
            }
        });
        document.body.style.overflow = 'auto';
    }

    // Add click event to blog cards
    if (blogCards.length > 0) {
        blogCards.forEach(card => {
            card.addEventListener('click', openBlogModal);
        });
    }

    // Close modals when clicking close buttons
    Object.values(blogModals).forEach(modal => {
        if (modal) {
            const closeBtn = modal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', closeAllBlogModals);
            }
            
            // Close modal when clicking outside the content
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeAllBlogModals();
                }
            });
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllBlogModals();
        }
    });
});

// Add these functions to your existing script.js file

// Photo Gallery Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the photo modal
    const photoModal = document.getElementById('photo-modal');
    const photoModalImg = document.getElementById('photo-modal-img');
    const photoCaption = document.getElementById('photo-caption');
    const photoCloseBtn = photoModal.querySelector('.close');
    
    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    // Function for opening the photo modal
    function openPhotoModal(e) {
        photoModal.style.display = 'block';
        photoModalImg.src = e.target.src;
        
        // Get caption information from the overlay
        const overlay = e.target.nextElementSibling;
        const title = overlay.querySelector('h3').textContent;
        const location = overlay.querySelector('p').textContent;
        photoCaption.innerHTML = `${title} - ${location}`;
        
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Close the photo modal
    function closePhotoModal() {
        photoModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Add click event to all gallery images
    galleryImages.forEach(img => {
        img.addEventListener('click', openPhotoModal);
    });
    
    // Close modal when clicking the × button
    photoCloseBtn.addEventListener('click', closePhotoModal);
    
    // Close modal when clicking outside the image
    photoModal.addEventListener('click', function(e) {
        if (e.target === photoModal) {
            closePhotoModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && photoModal.style.display === 'block') {
            closePhotoModal();
        }
    });
    
    // Photo Filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryImages.forEach(img => {
                const photoItem = img.parentElement;
                const category = img.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    photoItem.style.display = 'block';
                    // Add a small animation for showing items
                    photoItem.style.opacity = '0';
                    setTimeout(() => {
                        photoItem.style.opacity = '1';
                    }, 50);
                } else {
                    photoItem.style.display = 'none';
                }
            });
        });
    });
});

// Make gallery items reveal on scroll (optional animation)
window.addEventListener('scroll', function() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
});

// Initialize photo items with initial style for scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    const photoItems = document.querySelectorAll('.photo-item');
    
    photoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        // Add delay for staggered animation
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});