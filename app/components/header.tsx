import { Link } from '@remix-run/react'
import { Button } from '#app/components/ui/button.tsx'
import { Icon } from '#app/components/ui/icon.tsx'
import Logo from './Logo.svg'
import { IconButton } from './ui/icon-button'
import { NavigationLink } from './ui/navigation-link'

const navigationLinks = [
	{ to: '/', children: 'Strona główna' },
	{ to: '/aktualnosci', children: 'Aktualności' },
	{ to: '/oferta', children: 'Oferta' },
	{ to: '/kontakt', children: 'Kontakt' },
] as const

export const Header = () => {
	return (
		<header className="flex items-center justify-between">
			<img
				src={Logo}
				alt="Ence Pence Nowa Huta"
				className="md:h-[121px] md:w-[150px]"
			/>

			<IconButton className="md:hidden">
				<Icon name="menu" size="xl" title="Nawigacja strony" />
			</IconButton>

			<nav className="hidden list-none gap-6 space-x-8 md:flex">
				{navigationLinks.map(link => {
					if (link.to === '/kontakt')
						return (
							<li key={link.to}>
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
			</nav>
		</header>
	)
}
