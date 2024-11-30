import { Icon } from '#app/components/atoms'
import { Section } from '#app/components/templates'
import costSrc from '#app/images/cost.svg'

export const Cost = () => {
	const CostTitle = 'catering'
	return (
		<Section
			className="flex flex-col gap-strong md:flex-row md:items-center"
			aria-labelledby={CostTitle}
		>
			<div className="flex flex-col gap-subtle md:justify-center">
				<h2
					className="w-full max-w-prose font-headings text-h2 text-text"
					id={CostTitle}
				>
					Opłaty
				</h2>
				<div className="flex flex-col gap-subtle">
					<ul className="flex flex-col gap-4">
						<li className="flex gap-2 align-middle">
							<Icon name="document-money" className="h-8 w-8 flex-shrink-0" />
							<p className="max-w-prose text-p1 text-text-subtle">
								Wpisowe 450zł - jest to opłata jednorazowa bezzwrtona. Płatna
								przy podpisaniu umowy.
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="dollars" className="h-8 w-8 flex-shrink-0" />
							<p className="max-w-prose text-p1 text-text-subtle">
								Podstawowe czesne 1860zł (bez uwzględnienia dotacji).
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="piggy-bank" className="h-8 w-8 flex-shrink-0" />
							<p className="max-w-prose text-p1 text-text-subtle">
								Czesne z uwzględnieniem dotacji z ZUS i UM ok 750zł za 10
								godzin.
							</p>
						</li>
					</ul>
				</div>
			</div>
			<img
				src={costSrc}
				alt=""
				className="max-h-[500px] max-w-[500px] md:order-first md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
			/>
		</Section>
	)
}
