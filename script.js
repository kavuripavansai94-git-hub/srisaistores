/* ==========================================
   SRI SAI FANCY & GENERAL STORES
   Interactive JavaScript
   ========================================== */

// Prevent browser from automatically restoring scroll position on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
// Force scroll to top before browser tries to restore
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {

  // ========== NAVBAR SCROLL EFFECT ==========
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Navbar shadow on scroll
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ========== BACK TO TOP ==========
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========== LOGO / BRAND CLICK RELOAD OR SCROLL ==========
  const navbarBrand = document.getElementById('navbar-brand');
  if (navbarBrand) {
    navbarBrand.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.scrollY < 10) {
        window.location.reload();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // ========== MOBILE MENU TOGGLE ==========
  const mobileToggle = document.getElementById('mobile-toggle');
  const navbarNav = document.getElementById('navbar-nav');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navbarNav.classList.toggle('active');
    document.body.style.overflow = navbarNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking a nav link
  const navLinks = navbarNav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navbarNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navbarNav.classList.contains('active') &&
        !navbarNav.contains(e.target) &&
        !mobileToggle.contains(e.target)) {
      mobileToggle.classList.remove('active');
      navbarNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ========== SCROLL REVEAL ANIMATIONS ==========
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add staggered delay for grid children
        const parent = entry.target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter(
            child => child.classList.contains('fade-in') || 
                     child.classList.contains('fade-in-left') || 
                     child.classList.contains('fade-in-right')
          );
          const index = siblings.indexOf(entry.target);
          if (index > 0) {
            entry.target.style.transitionDelay = `${index * 100}ms`;
          }
        }
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  animatedElements.forEach(el => revealObserver.observe(el));

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== ACTIVE NAV LINK HIGHLIGHT ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link[href^="#"]');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinksAll.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--crimson)';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // ========== STAT COUNTER ANIMATION ==========
  const statValues = document.querySelectorAll('.stat-value');
  let statsAnimated = false;

  const animateCounters = () => {
    if (statsAnimated) return;

    const statsSection = document.querySelector('.hero-stats-grid');
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      statsAnimated = true;

      statValues.forEach(stat => {
        const text = stat.textContent.trim();
        const match = text.match(/^(\d+)/);
        if (match) {
          const target = parseInt(match[1]);
          const suffix = text.replace(match[1], '');
          let current = 0;
          const increment = Math.max(1, Math.floor(target / 40));
          const duration = 1500;
          const stepTime = duration / (target / increment);

          const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(counter);
            }
            stat.textContent = current + suffix;
          }, stepTime);
        }
      });
    }
  };

  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters(); // Check on load

  // ========== PARALLAX SUBTLE EFFECT ON HERO ==========
  const heroBg = document.querySelector('.hero-bg-image img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
      }
    }, { passive: true });
  }

  // ========== HOVER RIPPLE ON CTA BUTTONS ==========
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255,255,255,0.25);
        transform: translate(-50%, -50%);
        left: ${x}px;
        top: ${y}px;
        animation: ripple-expand 0.6s ease-out forwards;
        pointer-events: none;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-expand {
      to {
        width: 300px;
        height: 300px;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ========== TRUST HIGHLIGHT CARD TILT ==========
  document.querySelectorAll('.trust-highlight-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      card.style.transform = `
        translateY(-6px) 
        perspective(1000px) 
        rotateX(${-y * 4}deg) 
        rotateY(${x * 4}deg)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ========== 3D COVERFLOW CAROUSEL ==========
  (function initCoverflow() {
    const track = document.getElementById('coverflow-track');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.coverflow-slide'));
    const total = slides.length;
    let currentIndex = 2; // Start with slide index 2 as center

    // Map relative offset → CSS class
    const posClass = (offset) => {
      if (offset === 0)  return 'pos-active';
      if (offset === -1) return 'pos-prev1';
      if (offset === 1)  return 'pos-next1';
      if (offset === -2) return 'pos-prev2';
      if (offset === 2)  return 'pos-next2';
      if (offset < -2)   return 'pos-hidden-left';
      if (offset > 2)    return 'pos-hidden-right';
    };

    const dotsContainer = document.getElementById('coverflow-dots');

    // Build dot indicators
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'coverflow-dot';
      dot.setAttribute('aria-label', `Go to photo ${i + 1}`);
      dot.addEventListener('click', () => { currentIndex = i; update(); });
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.coverflow-dot'));

    const update = () => {
      slides.forEach((slide, i) => {
        // Remove all position classes
        slide.classList.remove(
          'pos-active', 'pos-prev1', 'pos-prev2',
          'pos-next1', 'pos-next2',
          'pos-hidden-left', 'pos-hidden-right'
        );

        // Calculate wrapped offset relative to currentIndex
        let offset = i - currentIndex;
        // Wrap-around so carousel is circular
        if (offset > total / 2)  offset -= total;
        if (offset < -total / 2) offset += total;

        slide.classList.add(posClass(offset));
      });

      // Sync dots
      dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    };

    // Prev / Next buttons
    document.getElementById('coverflow-prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + total) % total;
      update();
    });
    document.getElementById('coverflow-next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % total;
      update();
    });

    // Click a side card → advance carousel so it becomes center
    slides.forEach((slide, i) => {
      slide.addEventListener('click', () => {
        if (slide.classList.contains('pos-active')) {
          // Open lightbox for active card
          openCoverflowLightbox(i);
        } else {
          currentIndex = i;
          update();
        }
      });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('lightbox').classList.contains('active')) return;
      if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + total) % total; update(); }
      if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % total; update(); }
    });

    update(); // Initialize positions

    // ========== LIGHTBOX (for active coverflow card) ==========
    const lightbox = document.getElementById('lightbox');
    const lightboxImg    = document.getElementById('lightbox-img');
    const lightboxTitle  = document.getElementById('lightbox-title');
    const lightboxClose  = document.getElementById('lightbox-close');
    const lightboxPrev   = document.getElementById('lightbox-prev');
    const lightboxNext   = document.getElementById('lightbox-next');

    const imagesData = slides.map(slide => ({
      src:   slide.querySelector('img').src,
      alt:   slide.querySelector('img').alt,
      title: slide.querySelector('.coverflow-caption h4').textContent,
      desc:  slide.querySelector('.coverflow-caption p').textContent,
    }));

    let lightboxIndex = 0;

    const showLightboxAt = (index) => {
      lightboxIndex = index;
      const d = imagesData[index];
      lightboxImg.style.opacity = '0.4';
      setTimeout(() => {
        lightboxImg.src = d.src;
        lightboxImg.alt = d.alt;
        lightboxTitle.innerHTML = `<strong>${d.title}</strong> — ${d.desc}`;
        lightboxImg.style.opacity = '1';
      }, 60);
    };

    window.openCoverflowLightbox = (index) => {
      showLightboxAt(index);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => lightboxClose.focus(), 100);
    };

    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightboxNext.addEventListener('click', () => {
      showLightboxAt((lightboxIndex + 1) % imagesData.length);
    });
    lightboxPrev.addEventListener('click', () => {
      showLightboxAt((lightboxIndex - 1 + imagesData.length) % imagesData.length);
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape')     { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
      if (e.key === 'ArrowRight') showLightboxAt((lightboxIndex + 1) % imagesData.length);
      if (e.key === 'ArrowLeft')  showLightboxAt((lightboxIndex - 1 + imagesData.length) % imagesData.length);
    });
  })();

  // ========== CONSOLE GREETING ==========
  console.log(
    '%cSri Sai Fancy & General Stores',
    'color: #9B2335; font-size: 20px; font-weight: bold;'
  );
  console.log(
    '%cIPD Colony, Gandhi Nagar, Guntur | Tel: 9052922913',
    'color: #D4A843; font-size: 14px;'
  );
});
