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


  /**
   * DOM READY (all UI interactions)
   */
  document.addEventListener('DOMContentLoaded', function () {

    // Use event delegation for dynamically loaded header
    document.addEventListener('click', function (e) {

      // Hamburger toggle
      if (e.target.closest('.mobile-nav-toggle')) {
        e.preventDefault();
        document.body.classList.toggle('mobile-nav-active');
        const btn = document.querySelector('.mobile-nav-toggle');
        if (btn) {
          btn.classList.toggle('bi-list');
          btn.classList.toggle('bi-x');
        }
      }

      // Close menu when nav link clicked
      if (e.target.closest('#navmenu a') && document.body.classList.contains('mobile-nav-active')) {
        document.body.classList.remove('mobile-nav-active');
        const btn = document.querySelector('.mobile-nav-toggle');
        if (btn) {
          btn.classList.add('bi-list');
          btn.classList.remove('bi-x');
        }
      }

      // Dropdown toggle
      if (e.target.closest('.navmenu .toggle-dropdown')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const toggle = e.target.closest('.toggle-dropdown');
        toggle.parentNode.classList.toggle('active');
        const dropdown = toggle.parentNode.nextElementSibling;
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
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (!scrollTop) return;

    window.scrollY > 100
      ? scrollTop.classList.add('active')
      : scrollTop.classList.remove('active');
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
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


  /**
   * FAQ Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header')
    .forEach((item) => {
      item.addEventListener('click', () => {
        if (item.parentNode) {
          item.parentNode.classList.toggle('faq-active');
        }
      });
    });

})();