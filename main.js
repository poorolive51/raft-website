// RAFT Interactive JavaScript Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      // Prevent scrolling when mobile menu is open
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu when nav links are clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // 2. Active Page Highlighting based on path
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  const links = document.querySelectorAll('.nav-link');
  
  let matchFound = false;
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (pageName === href || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
      matchFound = true;
    } else {
      link.classList.remove('active');
    }
  });

  // Fallback to highlight Home if no exact match (e.g., bare root '/')
  if (!matchFound && links.length > 0) {
    const homeLink = Array.from(links).find(l => l.getAttribute('href') === 'index.html');
    if (homeLink) homeLink.classList.add('active');
  }

  // 3. Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observerOptions = {
      root: null, // viewport
      threshold: 0.15, // trigger when 15% visible
      rootMargin: '0px 0px -50px 0px' // offset slightly
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Animates once
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('active'));
  }

  // 4. Interactive Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Gather form data
      const name = contactForm.querySelector('#name').value;
      const email = contactForm.querySelector('#email').value;
      const subject = contactForm.querySelector('#subject').value;
      const message = contactForm.querySelector('#message').value;

      // Check if a backend endpoint is configured
      const formAction = contactForm.getAttribute('action');
      
      if (formAction && formAction !== '#') {
        // POST to backend (Cloudflare Worker, Formspree, etc.)
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        fetch(formAction, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        })
        .then(res => {
          if (res.ok) {
            contactForm.reset();
            showToast('Message sent successfully! We will get back to you soon.');
          } else {
            showToast('Something went wrong. Please try emailing us directly.');
          }
        })
        .catch(() => {
          showToast('Could not connect. Please email us at info@raft.org.in');
        })
        .finally(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        });
      } else {
        // Fallback: open mailto with pre-filled data
        const mailBody = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
        const mailSubject = encodeURIComponent(subject);
        window.location.href = `mailto:info@raft.org.in?subject=${mailSubject}&body=${mailBody}`;
        
        submitBtn.innerHTML = 'Opening email...';
        submitBtn.disabled = true;
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          showToast('Your email client should open shortly. You can also write to info@raft.org.in directly.');
        }, 2000);
      }
    });
  }

  // Form input label placeholder cleanup on reload
  const formInputs = document.querySelectorAll('.form-input');
  formInputs.forEach(input => {
    // Set placeholder to space to trigger CSS :placeholder-shown correctly
    if (!input.placeholder) {
      input.placeholder = ' ';
    }
  });

  // 5. Hero Carousel Logic (Autoplay & Indicators)
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');
  
  if (slides.length > 0 && indicators.length > 0) {
    let currentSlide = 0;
    let slideInterval;
    
    const showSlide = (index) => {
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(ind => ind.classList.remove('active'));
      
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
      currentSlide = index;
    };
    
    const nextSlide = () => {
      let next = (currentSlide + 1) % slides.length;
      showSlide(next);
    };
    
    const startSlideShow = () => {
      slideInterval = setInterval(nextSlide, 5000); // Shift every 5 seconds
    };
    
    const stopSlideShow = () => {
      clearInterval(slideInterval);
    };
    
    // Auto play initial state
    startSlideShow();
    
    // Manual Navigation Indicators
    indicators.forEach(indicator => {
      indicator.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.getAttribute('data-slide'));
        stopSlideShow();
        showSlide(slideIndex);
        startSlideShow();
      });
    });
  }

  // 6. Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Scroll to top');
  backToTopBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


// Toast notification helper
function showToast(message) {
  // Remove existing toast if it exists
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast structure
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #FAF9F6">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // Trigger animation reflow
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 4000);
}
