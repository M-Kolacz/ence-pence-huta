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
					<p className="text-text-subtle max-w-prose text-p1">
						Naszym celem jest zapewnienie dziecku opieki, wszechstronnej
						edukacji i rozwoju oraz bezpiecznej i mądrej zabawy pod okiem
						profesjonalnej kadry.
					</p>
				</div>
				<div className="flex flex-wrap gap-subtle">
					<Button>Poznaj ofertę</Button>
					<Button variant="outline">Skontaktuj się z nami</Button>
				</div>
			</div>
			<img src={heroSrc} alt="" className="max-h-[500px] max-w-[500px]" />
		</Section>
	)
}
