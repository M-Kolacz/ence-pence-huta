import { Link } from '@remix-run/react'
import { Button, Icon, NavigationLink } from '#app/components/atoms'
import { navigationLinks } from '#app/ssot/navigation.ts'
import Logo from '../../Logo.svg'

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="col-span-full flex flex-col justify-center gap-strong md:flex-row md:flex-wrap">
			<div className="flex flex-col items-center gap-base md:basis-full md:flex-row md:justify-between">
				<Link to="/">
					<img
						src={Logo}
						alt="Żłobek Ence Pence Nowa Huta"
						className="h-[80px] w-[100px] md:h-[121px] md:w-[150px]"
					/>
				</Link>
				<nav aria-label="Dolna nawigacja strony">
					<ul className="flex flex-wrap items-center justify-evenly gap-strong">
						{navigationLinks
							.filter((link) => link.to !== '/galeria')
							.map((link) => {
								if (link.to === '/kontakt')
									return (
										<li key={link.to}>
											<Button variant={'outline'} asChild>
												<Link {...link} />
											</Button>
										</li>
									)

								return (
									<li key={link.to} className="px-2 py-4">
										<NavigationLink to={link.to}>
											{link.children}
										</NavigationLink>
									</li>
								)
							})}
					</ul>
				</nav>
				<div className="flex gap-subtle">
					<Button size="icon" variant="outline" title="Galeria" asChild>
						<Link to="/galeria">
							<Icon name="image" />
						</Link>
					</Button>

					<Button
						size="icon"
						variant="outline"
						title="Fanpage żłobka na Facebook-u"
						asChild
					>
						<a href="https://www.facebook.com/encepencehuta">
							<Icon name="facebook" />
						</a>
					</Button>
				</div>
			</div>
			<p className="text-center text-p5 text-muted-foreground">
				Wszelkie prawa zastrzeżone © Żłobek Ence Pence Nowa Huta {currentYear}
			</p>
		</footer>
	)
}
