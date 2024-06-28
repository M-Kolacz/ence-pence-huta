import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export const extendedTheme = {
	spacing: {
		app: 'var(--spacing-app)',
	},
	backgroundColor: {
		subtle: 'var(--bg-subtle)',
		base: 'var(--bg-base)',
		strong: 'var(--bg-strong)',
	},
	fontFamily: {
		sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
		heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
	},
	fontSize: {
		h1: [
			'var(--text-h1)',
			{
				lineHeight: 'var(--line-h1)',
				fontWeight: 'var(--weight-headings)',
			},
		],
		h2: [
			'var(--text-h2)',
			{
				lineHeight: 'var(--line-h2)',
				fontWeight: 'var(--weight-headings)',
			},
		],
		p1: [
			'var(--text-p1)',
			{
				lineHeight: 'var(--line-p1)',
				fontWeight: 'var(--weight-paragraphs)',
			},
		],
		p5: [
			'var(--text-p5)',
			{
				lineHeight: 'var(--line-p5)',
				fontWeight: 'var(--weight-paragraphs)',
			},
		],
		b1: [
			'var(--text-b1)',
			{
				lineHeight: 'var(--line-b1)',
				fontWeight: 'var(--weight-buttons)',
			},
		],
	},
	borderColor: {
		subtle: 'var(--border-subtle)',
		base: 'var(--border-base)',
		strong: 'var(--border-strong)',
	},
} satisfies Config['theme']
