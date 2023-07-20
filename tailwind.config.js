/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		fontFamily: {
			'montserrat': ['Montserrat', 'sans-serif'],
			'michroma': ['Michroma', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#FF4656',
				secondary: '#1F2326'
			}
		},
		keyframes: {
			animationOpacity: {
				from: { opacity: 0.2 },
				to: { opacity: 1 }
			},
			scaleIn: {
				'0%': {
					opacity: 0,
					transform: 'scale(0.9)'
				},
				'50%': {
					opacity: 0.3
				},
				'100%': {
					opacity: 1,
					transform: 'scale(1)'
				}
			}
		},
		animation: {
			opacity: 'animationOpacity .5s ease-in-out',
			scaleIn: 'scaleIn .35s ease-in-out'
		}
	},
	plugins: []
}
