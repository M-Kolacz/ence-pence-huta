import { type Config } from 'tailwindcss'
import { blue, orange, slate, red, yellow, green } from 'tailwindcss/colors'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { extendedTheme } from './app/utils/extended-theme.ts'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
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
		},
		fontSize: {
			xs: '12px',
			sm: '14px',
			base: '16px',
			lg: '18px',
			xl: '20px',
			'2xl': '24px',
			'3xl': '30px',
			'4xl': '36px',
			'5xl': '48px',
			'6xl': '60px',
			'7xl': '72px',
		},
		lineHeight: {
			xs: '16px',
			sm: '20px',
			base: '24px',
			lg: '24px',
			xl: '28px',
			'2xl': '36px',
			'3xl': '36px',
			'4xl': '40px',
			'5xl': '56px',
			'6xl': '72px',
			'7xl': '84px',
		},
		colors: {
			primary: blue,
			secondary: orange,
			neutral: { ...slate, '0': '#fff' } as const,
			error: red,
			warning: yellow,
			success: green,
		},
		borderRadius: {
			base: '4px',
			md: '8px',
			lg: '12px',
			xl: '16px',
			'2xl': '20px',
			full: '100%',
		},
		extend: {
			...extendedTheme,
		},
	},
	plugins: [animatePlugin, radixPlugin],
} satisfies Config
