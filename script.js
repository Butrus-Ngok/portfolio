const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

function closeMobileNav() {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}

// Smooth section navigation with fixed-header offset.
navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        const yOffset = 90;
        const y = target.getBoundingClientRect().top + window.scrollY - yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        closeMobileNav();
    });
});

// Reveal cards and sections on scroll.
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        });
    },
    { threshold: 0.14 }
);
revealElements.forEach((element) => revealObserver.observe(element));

// Keep current section highlighted in navigation.
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");
            if (!id) return;

            navAnchors.forEach((link) => {
                const isActive = link.getAttribute("href") === `#${id}`;
                link.classList.toggle("active", isActive);
            });
        });
    },
    {
        threshold: 0.45,
        rootMargin: "-20% 0px -35% 0px"
    }
);

document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
});

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.querySelector('input[type="text"]')?.value?.trim() || "there";
        const email = form.querySelector('input[type="email"]')?.value?.trim() || "";

        if (formStatus) {
            formStatus.textContent = `Thanks ${name}! Your message is ready to be sent. I will follow up at ${email}.`;
        }
        form.reset();
    });
}