function loadComponent(id, file) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error("Failed to load " + file);
            return res.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;

            requestAnimationFrame(() => {

                if (id === "header-container") {
                    initHeader();
                    setActiveMenu();
                }

                if (id === "footer-container") {
                    initFooter();
                }

                window.dispatchEvent(new Event("resize"));
            });
        })
        .catch(err => console.error(err));
}

function initHeader() {
    const header = document.getElementById("mainHeader");

    if (!header) {
        console.error("Header not found!");
        return;
    }

    console.log("Header loaded successfully");
}

function initFooter() {
    const footer = document.getElementById("footer");

    if (!footer) {
        console.error("Footer not found!");
        return;
    }
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    console.log("Footer loaded successfully");
}

// ✅ Active menu function
function setActiveMenu() {
    const links = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

loadComponent("header-container", "header.html");
loadComponent("footer-container", "footer.html");

const slides = document.querySelectorAll('.blog-slide');
const dotsContainer = document.getElementById('blog-dots');
const prevBtn = document.getElementById('blog-prev');
const nextBtn = document.getElementById('blog-next');
let currentIndex = 0;

function cardsPerPage() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function createDots() {
    dotsContainer.innerHTML = '';
    const pages = Math.ceil(slides.length / cardsPerPage());
    for (let i = 0; i < pages; i++) {
        const dot = document.createElement('button');
        dot.classList.add('blog-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToPage(i));
        dotsContainer.appendChild(dot);
    }
}

function updateSlider() {
    const perPage = cardsPerPage();
    const start = currentIndex * perPage;
    const end = start + perPage;

    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i < start || i >= end);
    });

    document.querySelectorAll('.blog-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });

    const totalPages = Math.ceil(slides.length / perPage);
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalPages - 1;
}

function goToPage(index) {
    currentIndex = index;
    updateSlider();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; updateSlider(); }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(slides.length / cardsPerPage());
    if (currentIndex < totalPages - 1) { currentIndex++; updateSlider(); }
});

window.addEventListener('resize', () => {
    currentIndex = 0;
    createDots();
    updateSlider();
});

createDots();
updateSlider();