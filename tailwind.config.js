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
			// keyframes: {
			// 	infoEnter: {
			// 		'from': {
			// 			opacity: '0',
			// 			transform: 'translateY(100%)'
			// 		},
			// 		'to': {
			// 			opacity: '1',
			// 			transform: 'translateY(0%)'
			// 		}
			// 	}
			// },
			// animation: {
			// 	infoEnter: "infoEnter 1s forward 0.1s"
			// }
		}
	},
	plugins: [],
};