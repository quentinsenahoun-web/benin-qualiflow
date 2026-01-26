const switcher = document.getElementById("languageSwitcher");

switcher.addEventListener("change", () => {
    const lang = switcher.value;
    document.querySelectorAll("[data-fr]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
});
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
