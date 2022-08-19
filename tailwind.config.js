/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		fontSize: {
			300: "var(--fs-300)",
			400: "var(--fs-400)",
			500: "var(--fs-500)",
			600: "var(--fs-600)",
			700: "var(--fs-700)",
			nav: "var(--fs-nav)",
			body: "var(--fs-body)",
			button: "var(--fs-button)",
			"primary-heading": "var(--fs-primary-heading)",
			"secondary-heading": "var(--fs-secondary-heading)",
		},
		screens: {
			mobile: "30em",
			tablet: "50em",
			desktop: "1440px",
		},
		extend: {
			colors: {
				primary: {
					400: "hsl(228, 39%, 23%)",
				},
				accent: {
					100: "hsl(13,100%,96%)",
					300: "hsl(12,88%,75%)",
					400: "hsl(12,88%,59%)",
					500: "hsl(12,60%,45%)",
				},
				neutral: {
					100: "hsl(0 0% 100%)",
					200: "hsl(0 0% 96%)",
					900: "hsl(232,12%,13%)",
				},
			},
			boxShadow: {
				custom: "0 1.125em 1em -1em",
			},
		},
	},
	plugins: [],
};
