import type { Config } from 'tailwindcss'
import TailwindCssAnimate from 'tailwindcss-animate'
export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			width: {
				'74': '300px',
				'84': '355px',
			},
			height: {
				'74': '300px',
				'84': '355px',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [TailwindCssAnimate],
} satisfies Config
