/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				"principal": ['Poppins', 'serif']
			},
			backgroundImage:{
				"open-menu": "url('../public/svg/menu-3.svg')",
				"close-menu": "url('../public/svg/x.svg')"
			}
		},
	},
	plugins: [],
}
