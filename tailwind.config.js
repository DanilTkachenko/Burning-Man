/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['html/index.html'],
	theme: {
		screens: {
			'xl': { 'max': '1920px' },
			'lg': { 'max': '1440px' },
			'2md': { 'max': '1200px' },
			'max-md': { 'max': '1136px' },
			'min-md': { 'min': '1136px' },
			'max-sm': { 'max': '600px' },
			'min-sm': { 'min': '600px' },
			'max-2sm': { 'max': '400px' },
			'min-2sm': { 'min': '400px' },
		},
		fontFamily: {
			sans: ['Open Sans', 'Roboto', 'sans-serif'],
			anton: ['Anton', 'Roboto', 'sans-serif']
		},
		container: {
			center: true,
			screens: {
				sm: "1170px",
				md: "1170px",
				lg: "1170px",
				xl: "1170px"
			}
		}
	},
  plugins: [],
}
