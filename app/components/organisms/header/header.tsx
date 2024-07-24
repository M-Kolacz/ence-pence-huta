import { Link } from '@remix-run/react'
import { Button, IconButton, NavigationLink, Icon } from '#app/components/atoms'
import Logo from '../../Logo.svg'
import { navigationLinks } from './header.helpers.ts'

export const Header = () => {
	return (
		<header className="flex items-center justify-between">
			<img
				src={Logo}
				alt="Ence Pence Nowa Huta"
				className="md:h-[121px] md:w-[150px]"
			/>

			<IconButton className="md:hidden" title="Nawigacja strony">
				<Icon name="menu" />
			</IconButton>

			<nav className="hidden md:block">
				<ul className="list-none gap-6 md:flex">
					{navigationLinks.map(link => {
						if (link.to === '/kontakt')
							return (
								<li key={link.to} className="flex items-center justify-center">
									<Button variant={'outline'} asChild>
										<Link {...link} />
									</Button>
								</li>
							)

						return (
							<li key={link.to} className="flex items-center justify-center">
								<NavigationLink {...link} className="text-xl font-bold" />
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
