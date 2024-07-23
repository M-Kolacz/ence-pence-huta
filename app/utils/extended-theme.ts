import { type Config } from 'tailwindcss'

export const extendedTheme = {
	colors: {
		border: 'var(--border)',
		input: 'var(--input)',
		ring: 'var(--ring)',
		background: 'var(--background)',
		foreground: 'var(--foreground)',
		primary: {
			DEFAULT: 'var(--primary)',
			foreground: 'var(--primary-foreground)',
		},
		secondary: {
			DEFAULT: 'var(--secondary)',
			foreground: 'var(--secondary-foreground)',
		},
		destructive: {
			DEFAULT: 'var(--destructive)',
			foreground: 'var(--destructive-foreground)',
		},
		muted: {
			DEFAULT: 'var(--muted)',
			foreground: 'var(--muted-foreground)',
		},
		accent: {
			DEFAULT: 'var(--accent)',
			foreground: 'var(--accent-foreground)',
		},
		popover: {
			DEFAULT: 'var(--popover)',
			foreground: 'var(--popover-foreground)',
		},
		card: {
			DEFAULT: 'var(--card)',
			foreground: 'var(--card-foreground)',
		},
	},
	borderRadius: {
		lg: `var(--radius)`,
		md: `calc(var(--radius) - 2px)`,
		sm: 'calc(var(--radius) - 4px)',
	},

	keyframes: {
		'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		},
		'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		},
	},
	animation: {
		'accordion-down': 'accordion-down 0.2s ease-out',
		'accordion-up': 'accordion-up 0.2s ease-out',
	},

	spacing: {
		app: 'var(--spacing-app)',
	},
	backgroundColor: {
		subtle: 'var(--bg-subtle)',
		base: 'var(--bg-base)',
		strong: 'var(--bg-strong)',
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
