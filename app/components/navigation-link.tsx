import { cva } from 'class-variance-authority'
import { cn } from '#app/utils/misc.tsx'
import { NavLinkProps, NavLink } from '@remix-run/react'
import { Button } from './ui/button'

export const navigationLinkVariants = cva(
	'font-sans text-base font-bold text-neutral-500 hover:text-blue-950',
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
