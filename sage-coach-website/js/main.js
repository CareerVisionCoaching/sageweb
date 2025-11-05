/*
 * Sage.coach Main JavaScript
 * Handles all interactive functionality
 */

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Track analytics events
 */
function trackEvent(eventName, eventData = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
  console.log('Analytics event:', eventName, eventData);
}

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================

const header = document.getElementById('header');
let lastScroll = 0;

function handleHeaderScroll() {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
}

window.addEventListener('scroll', debounce(handleHeaderScroll, 10));

// ==========================================
// SCROLL PROGRESS INDICATOR
// ==========================================

const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.pageYOffset;
  const progress = (scrolled / documentHeight) * 100;

  if (scrollProgress) {
    scrollProgress.style.width = progress + '%';
  }
}

window.addEventListener('scroll', debounce(updateScrollProgress, 10));

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle && navLinks) {
  mobileMenuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    navLinks.classList.toggle('mobile-active');
    this.setAttribute('aria-expanded', !isExpanded);

    // Animate hamburger icon
    const spans = this.querySelectorAll('span');
    if (navLinks.classList.contains('mobile-active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(7px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }

    trackEvent('mobile_menu_toggle', { action: isExpanded ? 'close' : 'open' });
  });

  // Close mobile menu when clicking a link
  const navLinkItems = navLinks.querySelectorAll('a');
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// ==========================================
// DEMO BOOKING MODAL
// ==========================================

const demoModal = document.getElementById('demoModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const demoButtons = document.querySelectorAll('#heroBookDemo, #finalBookDemo');

function openDemoModal() {
  if (demoModal) {
    demoModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Focus trap
    modalClose.focus();

    trackEvent('demo_modal_opened');
  }
}

function closeDemoModal() {
  if (demoModal) {
    demoModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling

    trackEvent('demo_modal_closed');
  }
}

// Open modal when clicking demo buttons
demoButtons.forEach(button => {
  button.addEventListener('click', openDemoModal);
});

// Close modal when clicking backdrop
if (modalBackdrop) {
  modalBackdrop.addEventListener('click', closeDemoModal);
}

// Close modal when clicking close button
if (modalClose) {
  modalClose.addEventListener('click', closeDemoModal);
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && demoModal && demoModal.classList.contains('active')) {
    closeDemoModal();
  }
});

// ==========================================
// TESTIMONIAL CAROUSEL
// ==========================================

const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const carouselDots = document.querySelectorAll('.carousel-dot');
let currentSlide = 0;
let autoplayInterval;

function showSlide(slideIndex) {
  // Hide all slides
  testimonialSlides.forEach(slide => {
    slide.style.display = 'none';
    slide.classList.remove('active');
  });

  // Remove active state from all dots
  carouselDots.forEach(dot => {
    dot.style.background = 'transparent';
    dot.classList.remove('active');
  });

  // Show current slide
  if (testimonialSlides[slideIndex]) {
    testimonialSlides[slideIndex].style.display = 'block';
    testimonialSlides[slideIndex].classList.add('active');
  }

  // Update active dot
  if (carouselDots[slideIndex]) {
    carouselDots[slideIndex].style.background = 'var(--color-sage-green)';
    carouselDots[slideIndex].classList.add('active');
  }

  currentSlide = slideIndex;

  trackEvent('testimonial_viewed', { slide: slideIndex + 1 });
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % testimonialSlides.length;
  showSlide(nextIndex);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
}

// Dot navigation
carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    stopAutoplay();
    startAutoplay(); // Restart autoplay after manual navigation
  });
});

// Start autoplay on page load
if (testimonialSlides.length > 0) {
  showSlide(0);
  startAutoplay();
}

// Pause autoplay when user hovers over carousel
const testimonialCarousel = document.querySelector('.testimonial-carousel');
if (testimonialCarousel) {
  testimonialCarousel.addEventListener('mouseenter', stopAutoplay);
  testimonialCarousel.addEventListener('mouseleave', startAutoplay);
}

// ==========================================
// ANALYTICS TRACKING FOR CTAs
// ==========================================

const ctaButtons = document.querySelectorAll('[data-analytics]');

ctaButtons.forEach(button => {
  button.addEventListener('click', function() {
    const eventName = this.getAttribute('data-analytics');
    const buttonText = this.textContent.trim();
    const href = this.getAttribute('href');

    trackEvent('cta_click', {
      event_label: eventName,
      button_text: buttonText,
      destination: href
    });
  });
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Skip empty hashes
    if (href === '#') return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update URL hash
      if (history.pushState) {
        history.pushState(null, null, href);
      }

      trackEvent('anchor_link_click', { target: href });
    }
  });
});

// ==========================================
// SCROLL ANIMATIONS (Fade in on scroll)
// ==========================================

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
  );
}

function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll('.card, .feature-content, .feature-image');

  animatedElements.forEach(el => {
    if (isElementInViewport(el) && !el.classList.contains('animated')) {
      el.classList.add('animated');
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

// Set initial state for animated elements
window.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.card, .feature-content, .feature-image');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  handleScrollAnimations(); // Run once on load
});

window.addEventListener('scroll', debounce(handleScrollAnimations, 100));

// ==========================================
// FORM HANDLING (for contact page)
// ==========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="loading-spinner"></span> Sending...';

    try {
      // TODO: Replace with actual form submission endpoint
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      showToast('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
      contactForm.reset();

      trackEvent('contact_form_submit', { success: true });
    } catch (error) {
      // Show error message
      showToast('Oops! Something went wrong. Please try again.', 'error');

      trackEvent('contact_form_submit', { success: false, error: error.message });
    } finally {
      // Restore button state
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');

  document.body.appendChild(toast);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 5000);
}

// ==========================================
// PRICING TOGGLE (for pricing page)
// ==========================================

const pricingToggle = document.getElementById('pricingToggle');
const monthlyPrices = document.querySelectorAll('.price-monthly');
const annualPrices = document.querySelectorAll('.price-annual');

if (pricingToggle) {
  pricingToggle.addEventListener('change', function() {
    const isAnnual = this.checked;

    monthlyPrices.forEach(el => {
      el.style.display = isAnnual ? 'none' : 'block';
    });

    annualPrices.forEach(el => {
      el.style.display = isAnnual ? 'block' : 'none';
    });

    trackEvent('pricing_toggle', { view: isAnnual ? 'annual' : 'monthly' });
  });
}

// ==========================================
// PAGE VISIBILITY TRACKING
// ==========================================

let pageLoadTime = Date.now();

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    const timeOnPage = Math.round((Date.now() - pageLoadTime) / 1000);
    trackEvent('page_visibility_hidden', { time_on_page: timeOnPage });
  }
});

// Track page exit
window.addEventListener('beforeunload', function() {
  const timeOnPage = Math.round((Date.now() - pageLoadTime) / 1000);
  trackEvent('page_exit', { time_on_page: timeOnPage });
});

// ==========================================
// RESPONSIVE IMAGE LOADING
// ==========================================

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ==========================================
// CONSOLE MESSAGE (Optional branding touch)
// ==========================================

console.log(
  '%cSage.coach',
  'font-size: 24px; font-weight: bold; color: #355C4C;'
);
console.log(
  '%cThe Operating System for Career Coaching',
  'font-size: 14px; color: #A3B9A0;'
);
console.log(
  '%cInterested in joining our team? Email us at careers@sage.coach',
  'font-size: 12px; color: #757575;'
);

// ==========================================
// INITIALIZATION
// ==========================================

console.log('Sage.coach website loaded successfully');
trackEvent('page_view', {
  page_title: document.title,
  page_path: window.location.pathname
});
