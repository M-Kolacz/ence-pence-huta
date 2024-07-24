import { Link } from '@remix-run/react'
import { useState } from 'react'
import {
	Button,
	IconButton,
	NavigationLink,
	Icon,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '#app/components/atoms'
import Logo from '../../Logo.svg'
import { navigationLinks } from './header.helpers.ts'

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
					<IconButton className="md:hidden" title="Nawigacja strony">
						<Icon name="menu" />
					</IconButton>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader className="text-left">
						<DrawerTitle>Edit profile</DrawerTitle>
						<DrawerDescription>
							Make changes to your profile here. Click save when you're done.
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter className="pt-2">
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>

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
