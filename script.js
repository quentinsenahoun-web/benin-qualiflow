document.addEventListener("DOMContentLoaded", () => {
    console.log("JS chargé correctement");

    const switcher = document.getElementById("languageSwitcher");

    if (switcher) {
        switcher.addEventListener("change", () => {
            const lang = switcher.value;

            document.querySelectorAll("[data-fr]").forEach(el => {
                const text = el.getAttribute(`data-${lang}`);
                if (text) {
                    el.textContent = text;
                }
            });
        });
    }

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
});
