import { Button } from '#app/components/atoms'
import { Section } from '#app/components/templates'
import heroSrc from '#app/images/happy-baby.svg'

export const Hero = () => {
	return (
		<Section className="flex flex-col gap-strong md:flex-row md:items-center md:justify-between">
			<div className="flex flex-col gap-strong">
				<div className="flex flex-col gap-subtle">
					<h1 className="font-headings text-h1 text-text">
						Żłobek
						<span className="block">Ence-Pence</span>
						<span className="block">Nowa Huta</span>
					</h1>
					<p className="max-w-prose text-p1 text-text-foreground">
						Naszym celem jest zapewnienie dziecku opieki, wszechstronnej
						edukacji i rozwoju oraz bezpiecznej i mądrej zabawy pod okiem
						profesjonalnej kadry.
					</p>
				</div>
				<div className="flex gap-subtle">
					<Button>Poznaj ofertę</Button>
					<Button variant="outline">Skontaktuj się z nami</Button>
				</div>
			</div>
			<img src={heroSrc} alt="" className="max-h-[500px] max-w-[500px]" />
		</Section>
	)
}
