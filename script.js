const switcher = document.getElementById("languageSwitcher");

switcher.addEventListener("change", () => {
    const lang = switcher.value;
    document.querySelectorAll("[data-fr]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
});
