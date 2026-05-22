/**
* Template Name: Clinic
* Template URL: https://bootstrapmade.com/clinic-bootstrap-template/
* Updated: Jul 23 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Apply .scrolled class on scroll
   */
  function toggleScrolled() {
    const body = document.body;
    const header = document.querySelector('#header');

    if (!header) return; // ✅ prevent null error

    if (
      !header.classList.contains('scroll-up-sticky') &&
      !header.classList.contains('sticky-top') &&
      !header.classList.contains('fixed-top')
    ) return;

    window.scrollY > 100
      ? body.classList.add('scrolled')
      : body.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);


  // DOM READY (all UI interactions)


document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener('click', function (e) {

    // ── Hamburger toggle ──
    if (e.target.closest('.mobile-nav-toggle')) {
      e.preventDefault();
      const isActive = document.body.classList.toggle('mobile-nav-active');
      document.body.style.overflow = isActive ? 'hidden' : '';  // ← stop page scroll
      const btn = document.querySelector('.mobile-nav-toggle');
      if (btn) {
        btn.classList.toggle('bi-list');
        btn.classList.toggle('bi-x');
      }
    }

    // ── Close menu when non-dropdown nav link clicked ──
    if (e.target.closest('#navmenu a') && document.body.classList.contains('mobile-nav-active')) {
      const clickedA = e.target.closest('#navmenu a');
      const hasDropdown = clickedA.parentElement.classList.contains('dropdown');
      if (!hasDropdown) {
        document.body.classList.remove('mobile-nav-active');
        document.body.style.overflow = '';   // ← restore page scroll
        const btn = document.querySelector('.mobile-nav-toggle');
        if (btn) {
          btn.classList.add('bi-list');
          btn.classList.remove('bi-x');
        }
      }
    }

    // ── Dropdown toggle ──
    if (e.target.closest('.toggle-dropdown')) {
      e.preventDefault();
      e.stopPropagation();

      const toggle = e.target.closest('.toggle-dropdown');
      const parentLi = toggle.closest('li');
      const dropdown = parentLi.querySelector(':scope > ul');

      // Close siblings
      const siblings = parentLi.parentElement.querySelectorAll(':scope > li.dropdown');
      siblings.forEach(sib => {
        if (sib !== parentLi) {
          sib.classList.remove('active');
          const sibDd = sib.querySelector(':scope > ul');
          if (sibDd) sibDd.classList.remove('dropdown-active');
        }
      });

      // Toggle current
      parentLi.classList.toggle('active');
      if (dropdown) dropdown.classList.toggle('dropdown-active');
    }

  });

});


  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * WhatsApp Floating Button
   */
  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (!scrollTop) return;

    window.scrollY > 100
      ? scrollTop.classList.add('active')
      : scrollTop.classList.remove('active');
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * AOS Animation (safe)
   */
  function aosInit() {
    if (typeof AOS === "undefined") return;

    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  window.addEventListener('load', aosInit);


  /**
   * GLightbox (safe)
   */
  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: '.glightbox'
    });
  }


  /**
   * PureCounter (safe)
   */
  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }


  /**
   * Swiper (safe)
   */
  function initSwiper() {
    if (typeof Swiper === "undefined") return;

    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      const configEl = swiperElement.querySelector(".swiper-config");

      if (!configEl) return;

      let config = JSON.parse(configEl.innerHTML.trim());

      new Swiper(swiperElement, config);
    });
  }

  window.addEventListener("load", initSwiper);


  (function () {
    const track = document.getElementById('blog-track');
    const dotsContainer = document.getElementById('blog-dots');
    const prevBtn = document.getElementById('blog-prev');
    const nextBtn = document.getElementById('blog-next');

    if (!track) return;

    const items = Array.from(track.querySelectorAll('.blog-slide-item'));
    let currentPage = 0;

    function getPerPage() {
      if (window.innerWidth >= 992) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function getTotalPages() {
      return Math.ceil(items.length / getPerPage());
    }

    function getGap() { return 24; }

    function getItemWidth() {
      const clip = track.parentElement;
      const perPage = getPerPage();
      const totalGap = getGap() * (perPage - 1);
      return (clip.offsetWidth - totalGap) / perPage;
    }

    function createDots() {
      dotsContainer.innerHTML = '';
      const total = getTotalPages();
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.classList.add('blog-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
    }

    function goTo(page) {
      const perPage = getPerPage();
      const itemW = getItemWidth();
      const offset = page * perPage * (itemW + getGap());

      track.style.transform = `translateX(-${offset}px)`;
      currentPage = page;

      document.querySelectorAll('.blog-dot').forEach((d, i) => {
        d.classList.toggle('active', i === page);
      });

      prevBtn.disabled = currentPage === 0;
      nextBtn.disabled = currentPage >= getTotalPages() - 1;
    }

    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) goTo(currentPage - 1);
    });

    nextBtn.addEventListener('click', () => {
      if (currentPage < getTotalPages() - 1) goTo(currentPage + 1);
    });

    function init() {
      currentPage = 0;
      track.style.transform = 'translateX(0)';
      createDots();
      goTo(0);
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 150);
    });

    init();
  })();


  /**
     * FAQ Toggle
     */
  document.querySelectorAll('.faq-item .faq-header').forEach((header) => {
    header.addEventListener('click', () => {
      const parentItem = header.closest('.faq-item');
      const isAlreadyOpen = parentItem.classList.contains('faq-active');

      // Close all open items
      document.querySelectorAll('.faq-item.faq-active').forEach(el => {
        el.classList.remove('faq-active');
      });

      // Open clicked one only if it was closed
      if (!isAlreadyOpen) {
        parentItem.classList.add('faq-active');
      }
    });
  });

})();