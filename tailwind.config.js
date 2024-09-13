/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--bg-colour)",
				primary: "var(--primary-colour)",
				secondary: "var(--secondary-colour)",
				accent: "var(--accent-colour)",
				strong_text: "var(--text-strong-colour)",
				middle_text: "var(--text-middle-colour)",
				light_text: "var(--text-light-colour)",
			},
		},
	},
	plugins: [],
};