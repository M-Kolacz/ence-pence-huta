import Logo from './Logo.svg'
import { Button } from '#app/components/ui/button.tsx'
import { Icon } from '#app/components/ui/icon.tsx'
import { NavigationLink } from './navigation-link'

const navigationLinks = [
	{ to: '/', children: 'Strona główna' },
	{ to: '/aktualnosci', children: 'Aktualności' },
	{ to: '/oferta', children: 'Oferta' },
]

export const Header = () => {
	return (
		<header className="flex items-center justify-between">
			<img
				src={Logo}
				alt="Ence Pence Nowa Huta"
				className="md:h-[121px] md:w-[150px]"
			/>

			<Button variant={'outline'} size="icon" className="md:hidden">
				<Icon name="menu" size="xl" />
			</Button>

			<nav className="hidden list-none gap-6 space-x-8 md:flex">
				{navigationLinks.map(link => (
					<li key={link.to} className="flex items-center justify-center">
						<NavigationLink {...link} className="text-xl font-bold" />
					</li>
				))}
				<li>
					<Button variant={'outline'}>Kontakt</Button>
				</li>
			</nav>
		</header>
	)
}