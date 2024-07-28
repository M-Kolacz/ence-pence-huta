import { Link } from '@remix-run/react'
import { useState } from 'react'
import {
	Button,
	NavigationLink,
	Icon,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger,
} from '#app/components/atoms'
import { navigationLinks } from '#app/ssot/navigation.ts'
import Logo from '../../Logo.svg'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="flex items-center justify-between">
			<img
				src={Logo}
				alt="Ence Pence Nowa Huta"
				className="md:h-[121px] md:w-[150px]"
			/>
			<Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
				<DrawerTrigger asChild>
					<Button
						size="icon"
						variant="outline"
						className="visible md:hidden"
						title="Nawigacja strony"
					>
						<Icon name="add" />
					</Button>
				</DrawerTrigger>

				<DrawerContent className="flex flex-col gap-6 p-app outline-none">
					<DrawerHeader className="flex items-center justify-between">
						<img
							src={Logo}
							alt="Ence Pence Nowa Huta"
							className="md:h-[121px] md:w-[150px]"
						/>
						<DrawerClose asChild>
							<Button size="icon" variant="outline" title="Nawigacja strony">
								<Icon name="cancel" />
							</Button>
						</DrawerClose>
					</DrawerHeader>

					<ul className="flex flex-col gap-6">
						{navigationLinks.map(link => (
							<li key={link.to} className="w-full">
								<Button
									variant="secondary"
									className="w-full justify-start text-left"
								>
									<Icon name={link.icon} className="mr-2.5" />
									{link.children}
								</Button>
							</li>
						))}
					</ul>
				</DrawerContent>
			</Drawer>

			<nav className="hidden md:block">
				<ul className="list-none gap-6 md:flex">
					{navigationLinks
						.filter(link => link.to !== '/galeria')
						.map(link => {
							if (link.to === '/kontakt')
								return (
									<li
										key={link.to}
										className="flex items-center justify-center"
									>
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
