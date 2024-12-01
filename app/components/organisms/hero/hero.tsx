import { Link } from '@remix-run/react'
import { Button } from '#app/components/atoms'
import { Section } from '#app/components/templates'
import heroSrc from '#app/images/happy-baby.svg'

export const Hero = () => {
	const heroTitle = 'hero-title'
	return (
		<Section
			className="flex flex-col gap-strong md:flex-row md:items-center md:justify-between"
			aria-labelledby={heroTitle}
		>
			<div className="flex flex-col gap-strong">
				<div className="flex flex-col gap-subtle">
					<h1 className="font-headings text-h1 text-text" id={heroTitle}>
						Żłobek
						<span className="block">Ence-Pence</span>
						<span className="block">Nowa Huta</span>
					</h1>
					<p className="max-w-prose text-p1 text-text-subtle">
						Naszym celem jest zapewnienie dziecku opieki, wszechstronnej
						edukacji i rozwoju oraz bezpiecznej i mądrej zabawy pod okiem
						profesjonalnej kadry.
					</p>
				</div>
				<div className="flex flex-wrap gap-subtle">
					<Button asChild>
						<Link to="/oferta">Poznaj ofertę</Link>
					</Button>
					<Button variant="outline">
						<Link to="/kontakt">Skontaktuj się z nami</Link>
					</Button>
				</div>
			</div>
			<img src={heroSrc} alt="" className="max-h-[500px] max-w-[500px]" />
		</Section>
	)
}
