// Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Book filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const bookCards = document.querySelectorAll('.book-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                bookCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.feature-card, .book-card, .testimonial-card, .location-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animation
        document.querySelectorAll('.feature-card, .book-card, .testimonial-card, .location-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our next newsletter soon.`);
            emailInput.value = '';
        });

        // Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

// Form validation
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    subjectError.style.display = 'none';
    messageError.style.display = 'none';
    formSuccess.style.display = 'none';
    
    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        nameError.style.display = 'block';
        nameInput.classList.add('shake');
        isValid = false;
    } else {
        nameInput.classList.remove('shake');
    }
    
    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        emailError.style.display = 'block';
        emailInput.classList.add('shake');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        emailInput.classList.add('shake');
        isValid = false;
    } else {
        emailInput.classList.remove('shake');
    }
    
    // Validate Subject
    if (subjectInput.value.trim() === '') {
        subjectError.textContent = 'Please enter a subject';
        subjectError.style.display = 'block';
        subjectInput.classList.add('shake');
        isValid = false;
    } else {
        subjectInput.classList.remove('shake');
    }
    
    // Validate Message
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter your message';
        messageError.style.display = 'block';
        messageInput.classList.add('shake');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message should be at least 10 characters';
        messageError.style.display = 'block';
        messageInput.classList.add('shake');
        isValid = false;
    } else {
        messageInput.classList.remove('shake');
    }
    
    // If form is valid, submit it (in a real app, you would send to server)
    if (isValid) {
        // Here you would typically send the form data to your server
        // For demonstration, we'll just show a success message
        formSuccess.textContent = 'Thank you for your message! We will get back to you soon.';
        formSuccess.style.display = 'block';
        contactForm.reset();
        
        // Scroll to success message
        setTimeout(() => {
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message[style*="display: block"]');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Remove shake class after animation ends
const inputs = [nameInput, emailInput, subjectInput, messageInput];
inputs.forEach(input => {
    input.addEventListener('animationend', function() {
        this.classList.remove('shake');
    });
});