import { type Config } from 'tailwindcss'
import { blue, orange, slate, red, yellow, green } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme.js'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { extendedTheme } from './app/utils/extended-theme.ts'

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
		spacing: {
			1: '4px',
			2: '8px',
			3: '12px',
			4: '16px',
			5: '24px',
			6: '32px',
			7: '48px',
			8: '64px',
			9: '96px',
			10: '128px',
			11: '192px',
			12: '256px',
			13: '384px',
			14: '512px',
			15: '640px',
			16: '768px',
			app: 'var(--app)',
		},
		colors: {
			primary: blue,
			secondary: orange,
			neutral: { ...slate, '0': '#fff' } as const,
			error: red,
			warning: yellow,
			success: green,
		},
		extend: {
			...extendedTheme,
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
				heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [animatePlugin, radixPlugin],
} satisfies Config
