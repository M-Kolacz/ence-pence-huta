import { Link } from '@remix-run/react'
import { Button, Icon, NavigationLink } from '#app/components/atoms'
import { navigationLinks } from '#app/ssot/navigation.ts'
import Logo from '../../Logo.svg'

export const Footer = () => {
	return (
		<footer className="col-span-full flex flex-col justify-center gap-6 md:flex-row md:flex-wrap">
			<div className="flex flex-col items-center gap-6 md:basis-full md:flex-row md:justify-between">
				<img
					src={Logo}
					alt="Żłobek Ence Pence Nowa Huta"
					className="h-[80px] w-[100px] md:h-[121px] md:w-[150px]"
				/>
				<nav>
					<ul className="flex flex-wrap items-center justify-evenly gap-6">
						{navigationLinks
							.filter(link => link.to !== '/galeria')
							.map(link => {
								if (link.to === '/kontakt')
									return (
										<li key={link.to}>
											<Button variant={'outline'} asChild>
												<Link {...link} />
											</Button>
										</li>
									)

								return (
									<li key={link.to}>
										<NavigationLink to={link.to}>
											{link.children}
										</NavigationLink>
									</li>
								)
							})}
					</ul>
				</nav>
				<div className="flex gap-4">
					<Button size="icon" variant="outline" title="Galeria">
						<Icon name="image" />
					</Button>
					<Button
						size="icon"
						variant="outline"
						title="Fanpage żłobka na Facebook-u"
					>
						<Icon name="facebook" />
					</Button>
				</div>
			</div>
			<p className="text-center text-p5 text-muted-foreground">
				Wszelkie prawa zastrzeżone © Żłobek Ence Pence Nowa Huta 2023
			</p>
		</footer>
	)
}
