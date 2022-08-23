import A11YSlider from "./node_modules/a11y-slider";
import A11Css from "./node_modules/a11y-slider/dist/a11y-slider.css";

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
primaryHeader.addEventListener("click", (e) => {
	// e.stopPropagation();
	if (primaryNav.hasAttribute("data-visible")) toggleMenu();
});
primaryNav.addEventListener("click", (e) => e.stopPropagation(), false);
primaryNav.querySelectorAll("li a").forEach((link) =>
	link.addEventListener("click", (e) => {
		e.stopPropagation();
		if (primaryNav.hasAttribute("data-visible")) toggleMenu();
	})
);

// A11y Slider
const slider = new A11YSlider(document.querySelector(".slider"), {
	slidesToShow: 1,
	arrows: false,
	centerMode: true,
	dots: true,
	responsive: {
		800: {
			arrows: true,
			slidesToShow: 2,
			dots: false,
		},
		1280: {
			slidesToShow: 3,
		},
	},
});
