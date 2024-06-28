import { type NavLinkProps, NavLink } from '@remix-run/react'
import { cva } from 'class-variance-authority'
import { cn } from '#app/utils/misc.tsx'

export const navigationLinkVariants = cva(
	'font-sans text-p1 font-bold text-neutral-500 hover:text-primary-950',
	{
		variants: {
			active: {
				true: 'text-neutral-950',
				false: '',
			},
		},
		defaultVariants: {
			active: false,
		},
	},
)

const NavigationLink = (props: NavLinkProps) => {
	const { className, ...restProps } = props

	return (
		<NavLink
			className={({ isActive }) =>
				cn(navigationLinkVariants({ active: isActive }), className)
			}
			{...restProps}
		/>
	)
}

export { NavigationLink }
