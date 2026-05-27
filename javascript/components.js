async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

function initNavbarMenu() {
    const navbar = document.getElementById("navbar");

    if (!navbar) {
        return;
    }

    const toggleButton = navbar.querySelector(".mobile-menu-toggle");
    const navLinks = navbar.querySelector(".nav-links");

    if (!toggleButton || !navLinks) {
        return;
    }

    const closeMenu = () => {
        toggleButton.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
    };

    toggleButton.addEventListener("click", () => {
        const expanded = toggleButton.getAttribute("aria-expanded") === "true";
        toggleButton.setAttribute("aria-expanded", String(!expanded));
        navLinks.classList.toggle("is-open", !expanded);
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

loadComponent("navbar", "../components/navbar.html").then(() => {
    initNavbarMenu();
});

loadComponent("footer", "../components/footer.html");