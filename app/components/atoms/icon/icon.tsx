import { type SVGProps } from 'react'
import { cn } from '#app/utils/misc.tsx'
import { type IconName } from './icons/name.ts'
import href from './icons/sprite.svg'

export { href }
export { IconName }

export const iconNames: IconName[] = [
	'add',
	'baby-shoes',
	'blanket',
	'breakfast',
	'bubble-tea',
	'cancel',
	'cereal',
	'diaper',
	'document-money',
	'dollars',
	'email',
	'facebook-verified',
	'facebook',
	'folder',
	'image',
	'kindergarten',
	'menu',
	'milk-bottle',
	'newspaper',
	'offer',
	'ok',
	'pacifier',
	'phone-call',
	'piggy-bank',
	'salad',
	'web',
]

/**
 * Renders an SVG icon. The icon defaults to the size of the font. To make it
 * align vertically with neighboring text, you can pass the text as a child of
 * the icon and it will be automatically aligned.
 * Alternatively, if you're not ok with the icon being to the left of the text,
 * you need to wrap the icon and text in a common parent and set the parent to
 * display "flex" (or "inline-flex") with "items-center" and a reasonable gap.
 *
 * Pass `title` prop to the `Icon` component to get `<title>` element rendered
 * in the SVG container, providing this way for accessibility.
 */
export function Icon({
	name,
	className,
	title,
	children,
	...props
}: SVGProps<SVGSVGElement> & {
	name: IconName

	title?: string
}) {
	if (children) {
		return (
			<span className={`inline-flex items-center`}>
				<Icon name={name} className={className} title={title} {...props} />
				{children}
			</span>
		)
	}
	return (
		<svg {...props} className={cn('inline h-6 w-6 self-center', className)}>
			{title ? <title>{title || name}</title> : null}
			<use href={`${href}#${name}`} />
		</svg>
	)
}
