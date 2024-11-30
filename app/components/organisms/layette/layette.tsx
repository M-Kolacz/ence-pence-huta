import { Icon } from '#app/components/atoms'
import { Section } from '#app/components/templates'
import layetteSrc from '#app/images/layette.svg'

export const Layette = () => {
	const layetteTitle = 'catering'
	return (
		<Section
			className="flex flex-col gap-strong md:flex-row md:items-center"
			aria-labelledby={layetteTitle}
		>
			<div className="flex flex-col gap-subtle md:justify-center">
				<h2
					className="w-full max-w-prose font-headings text-h2 text-text"
					id={layetteTitle}
				>
					W skład wyprawki wchodzi
				</h2>
				<div className="flex flex-col gap-subtle">
					<ul className="flex flex-col gap-4">
						<li className="flex gap-2 align-middle">
							<Icon name="diaper" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								środki higieny osobistej - pampersy, chusteczki nawilżające
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="milk-bottle" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								kubek / butelka - jeżeli dziecko jeszcze nie pije z normalnego
								kubka
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="baby-shoes" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								obuwie na zmianę na rzepę lub zatrzask jeżeli dziecko już chodzi
								bądź skarpetki antypoślizgowe
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="blanket" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								komplet pościeli, kocyk / kołderkę, poduszkę, prześcieradło
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="pacifier" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								smoczek - jeżeli dziecko używa
							</p>
						</li>
					</ul>
					<p className="max-w-prose text-p1 text-text-subtle">
						Wszystkie rzeczy dziecka powinny być podpisane.
					</p>
				</div>
			</div>
			<img
				src={layetteSrc}
				alt=""
				className="max-h-[500px] max-w-[500px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
			/>
		</Section>
	)
}
