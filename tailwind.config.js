/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [require('flowbite/plugin')],

	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#272732',
				secondary: '#2B2D38',
				inputColor: '#23252F',
				borderColor: '4648565'
			}
		}
	},
	plugins: []
};
