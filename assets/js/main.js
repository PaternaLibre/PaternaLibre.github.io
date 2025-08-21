$(document).ready(function() {
    // Preloader
    $(window).on('load', function() {
        $('.preloader').addClass('fade-out');
        setTimeout(function() {
            $('.preloader').hide();
        }, 500);
    });

    // Header scroll effect
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.main-header').addClass('scrolled');
        } else {
            $('.main-header').removeClass('scrolled');
        }
    });

    // Mobile menu toggle
    $('.menu-toggle').on('click', function() {
        $('.main-nav ul').toggleClass('active');
        $(this).toggleClass('active');
        
        // Animate hamburger menu
        if ($(this).hasClass('active')) {
            $('.menu-toggle span:nth-child(1)').css('transform', 'rotate(45deg) translateY(8px)');
            $('.menu-toggle span:nth-child(2)').css('opacity', '0');
            $('.menu-toggle span:nth-child(3)').css('transform', 'rotate(-45deg) translateY(-8px)');
        } else {
            $('.menu-toggle span:nth-child(1)').css('transform', 'rotate(0) translateY(0)');
            $('.menu-toggle span:nth-child(2)').css('opacity', '1');
            $('.menu-toggle span:nth-child(3)').css('transform', 'rotate(0) translateY(0)');
        }
    });

    // Close mobile menu when clicking on a link
    $('.main-nav ul li a').on('click', function() {
        $('.main-nav ul').removeClass('active');
        $('.menu-toggle').removeClass('active');
        $('.menu-toggle span:nth-child(1)').css('transform', 'rotate(0) translateY(0)');
        $('.menu-toggle span:nth-child(2)').css('opacity', '1');
        $('.menu-toggle span:nth-child(3)').css('transform', 'rotate(0) translateY(0)');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Active navigation link based on scroll position
    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();
        
        $('section').each(function() {
            var target = $(this);
            var id = target.attr('id');
            
            if (target.offset().top <= scrollPosition + 100 && target.offset().top + target.height() > scrollPosition + 100) {
                $('.main-nav ul li a').removeClass('active');
                $('.main-nav ul li a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        $('.timeline-item, .issue-card, .summary-card').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (position < scrollPosition + windowHeight - 100) {
                $(this).addClass('animate');
            }
        });
    }
    
    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Add CSS for animations
    $('<style>')
        .text(`
            .timeline-item, .issue-card, .summary-card {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .timeline-item.animate, .issue-card.animate, .summary-card.animate {
                opacity: 1;
                transform: translateY(0);
            }
        `)
        .appendTo('head');
});