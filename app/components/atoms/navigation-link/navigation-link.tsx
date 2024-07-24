import { type NavLinkProps, NavLink } from '@remix-run/react'
import { cn } from '#app/utils/misc.tsx'
import { variants } from './navigation-link-variants.ts'

const NavigationLink = (props: NavLinkProps) => {
	const { className, ...restProps } = props

	return (
		<NavLink
			className={({ isActive }) =>
				cn(variants({ active: isActive }), className)
			}
			{...restProps}
		/>
	)
}

export { NavigationLink }
