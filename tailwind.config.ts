import { type Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { extendedTheme } from './app/utils/extended-theme.ts'
import { borderRadius } from './tokens/border-radius.ts'
import { colors } from './tokens/colors.ts'
import { spacing } from './tokens/spacing.ts'
import { typography } from './tokens/typography.ts'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js,mdx}', './tokens/**/*.mdx'],
	darkMode: 'class',
	theme: {
		spacing,
		fontSize: typography.fontSize,
		lineHeight: typography.lineHeight,
		fontFamily: typography.fontFamily,
		fontWeight: typography.fontWeight,
		colors,
		borderRadius,
		extend: {
			...extendedTheme,
		},
	},
	plugins: [animatePlugin, radixPlugin],
} satisfies Config
