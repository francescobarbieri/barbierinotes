/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'gray': {
				1000: "#82827c",
				1100: "#0000009b",
				1200: "#000000df",
			}
		},
		extend: {},
	},
	plugins: [],
}
