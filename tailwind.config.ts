import { type Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { marketingPreset } from './app/routes/_marketing+/tailwind-preset'
import { extendedTheme } from './app/utils/extended-theme.ts'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			...extendedTheme,
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
				heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	presets: [marketingPreset],
	plugins: [animatePlugin, radixPlugin],
} satisfies Config
