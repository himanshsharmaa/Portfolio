(function ($) {
    "use strict";

    // NAVBAR SCROLL with blur effect
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // SMOOTHSCROLL - Single implementation
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800, 'linear');
        }
    });

    // Mobile menu toggle
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('active');
    });

    // Close mobile menu when clicking on a link
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggler').removeClass('active');
    });

    // Form submission
    $('form').submit(function(e) {
        e.preventDefault();
        
        let isValid = true;
        $(this).find('input[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
        
        if (isValid) {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Add animation classes when elements come into view
    function animateOnScroll() {
        $('.hero-title, .hero-subtitle, .social-links').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
        
        $('.about-card, .project-item').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    }
    
    $(window).scroll(animateOnScroll);
    animateOnScroll();

})(jQuery);

// Typing animation for roles - Fixed version
$(document).ready(function() {
    const roles = [
        'Full Stack Developer',
        'AI/ML Engineer', 
        'Python Developer',
        'Web Developer',
        'Software Engineer'
    ];
    
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeRole() {
        const rolesElement = document.getElementById('roles');
        
        // Check if element exists
        if (!rolesElement) {
            setTimeout(typeRole, 100);
            return;
        }
        
        const currentText = roles[currentRole];
        
        if (isDeleting) {
            rolesElement.textContent = currentText.substring(0, currentChar - 1);
            currentChar--;
        } else {
            rolesElement.textContent = currentText.substring(0, currentChar + 1);
            currentChar++;
        }
        
        let typeSpeed = isDeleting ? 100 : 150;
        
        if (!isDeleting && currentChar === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentRole = (currentRole + 1) % roles.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeRole, typeSpeed);
    }
    
    // Start typing animation after a short delay
    setTimeout(typeRole, 1000);
});

// Skills View More Toggle Function
function toggleSkills() {
    const skillsGrid = document.querySelector('.skills-card .skills-grid');
    const skillsBtn = document.querySelector('.skills-card .view-more-btn');
    const skillsBtnText = skillsBtn.querySelector('.view-more-text');
    
    if (skillsGrid && skillsBtn && skillsBtnText) {
        if (skillsGrid.classList.contains('expanded')) {
            skillsGrid.classList.remove('expanded');
            skillsBtnText.textContent = 'View More';
            skillsBtn.classList.remove('expanded');
        } else {
            skillsGrid.classList.add('expanded');
            skillsBtnText.textContent = 'View Less';
            skillsBtn.classList.add('expanded');
        }
    }
}

// Achievements View More Toggle Function
function toggleAchievements() {
    const achievementsList = document.querySelector('.achievements-card .achievements-list');
    const achievementsBtn = document.querySelector('.achievements-card .view-more-btn');
    const achievementsBtnText = achievementsBtn.querySelector('.view-more-text');
    
    if (achievementsList && achievementsBtn && achievementsBtnText) {
        if (achievementsList.classList.contains('expanded')) {
            achievementsList.classList.remove('expanded');
            achievementsBtnText.textContent = 'View More';
            achievementsBtn.classList.remove('expanded');
        } else {
            achievementsList.classList.add('expanded');
            achievementsBtnText.textContent = 'View Less';
            achievementsBtn.classList.add('expanded');
        }
    }
}

// Add error styling for form validation
const style = document.createElement('style');
style.textContent = `
    .form-control.error {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
    }
`;
document.head.appendChild(style);
