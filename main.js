const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const burgerIcons = navToggle.querySelectorAll("img");

const toggleMenu = () => {
	primaryNav.hasAttribute("data-visible")
		? navToggle.setAttribute("aria-expanded", false)
		: navToggle.setAttribute("aria-expanded", true);
	primaryNav.toggleAttribute("data-visible");
	primaryHeader.toggleAttribute("data-overlay");
	burgerIcons.forEach((icon) => icon.classList.toggle("hidden"));
};
navToggle.addEventListener("click", (e) => {
	e.stopPropagation();
	toggleMenu();
});
primaryHeader.addEventListener("click", () => {
	if (primaryNav.hasAttribute("data-visible")) toggleMenu();
});
