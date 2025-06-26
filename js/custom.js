(function ($) {

  "use strict";

    // NAVBAR SCROLL
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 50) {
          $('.navbar').addClass('scrolled');
      } else {
          $('.navbar').removeClass('scrolled');
      }
    });

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });

    // Animated text for roles
    const roles = ["Full Stack Developer", "AI Architect", "ML Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const rolesSpan = document.getElementById("roles");

    function type() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        // Deleting
        charIndex--;
        rolesSpan.textContent = currentRole.substring(0, charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, 100);
        }
      } else {
        // Typing
        charIndex++;
        rolesSpan.textContent = currentRole.substring(0, charIndex);
        if (charIndex === currentRole.length) {
          isDeleting = true;
          setTimeout(type, 2000);
        } else {
          setTimeout(type, 150);
        }
      }
    }

    if (rolesSpan) {
        document.addEventListener("DOMContentLoaded", function() { 
            setTimeout(type, 200);
        });
    }

})(jQuery);
