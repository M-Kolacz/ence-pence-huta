import { Section } from '#app/components/templates'
import ourApproachSrc from '#app/images/our-approach.svg'

export const OurApproach = () => {
	const outApproachTitle = 'our-approach-title'
	return (
		<Section
			className="flex flex-col gap-strong md:flex-row md:items-center md:justify-between"
			aria-labelledby={outApproachTitle}
		>
			<div className="flex flex-col gap-strong">
				<div className="flex flex-col gap-subtle">
					<h2 className="font-headings text-h2 text-text" id={outApproachTitle}>
						Nasze Podejście
					</h2>
					<p className="max-w-prose text-p1 text-text-subtle">
						Celem otwarcia była myśl pomocy mamom w opiece nad ich skarbami.
						Tworzymy przyjazną domową atmosferę, oraz poczucie bezpieczeństwa.
						Wszelkie zabawy i zajęcia dostosowane są do możliwości,
						zainteresowań, potrzeb, oraz rozwoju dziecka. Placówka wyposażona
						jest w bezpieczne atestowane zabawki i pomoce edukacyjne.
					</p>
				</div>
			</div>
			<img
				src={ourApproachSrc}
				alt=""
				className="max-h-[500px] max-w-[500px] md:order-first lg:h-[500px] lg:w-[500px]"
			/>
		</Section>
	)
}
