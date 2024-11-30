import { Icon } from '#app/components/atoms'
import { Section } from '#app/components/templates'
import beHealthySrc from '#app/images/be-healthy.png'
import fruidSaladSrc from '#app/images/fruid-salad.svg'

export const Catering = () => {
	const cateringTitle = 'catering'
	return (
		<Section
			className="flex flex-col gap-strong md:flex-row md:items-center"
			aria-labelledby={cateringTitle}
		>
			<div className="flex flex-col gap-subtle md:justify-center">
				<h2
					className="w-full max-w-prose font-headings text-h2 text-text"
					id={cateringTitle}
				>
					Stawka żywieniowa 15zł/dzień w tym 4 posiłki:
				</h2>
				<div className="flex flex-col gap-subtle">
					<ul className="flex flex-col gap-4">
						<li className="flex gap-2 align-middle">
							<Icon name="breakfast" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								śniadanie 2,00zł
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="cereal" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								drugie śniadanie 1,50zł
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="salad" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								obiad (zupa + drugie danie) 9,50zł
							</p>
						</li>
						<li className="flex gap-2 align-middle">
							<Icon name="bubble-tea" className="h-8 w-8" />
							<p className="max-w-prose text-p1 text-text-subtle">
								podwieczorek 2,00zł
							</p>
						</li>
					</ul>
					<p className="max-w-prose text-p1 text-text-subtle">
						Wycena opłaty za wyżywienie diety specjalistycznej, eliminującej
						szkodliwe składniki lub wykluczającej określony składnik na życzenie
						rodzica, odbywa się indywidualnie.
					</p>
					<p className="max-w-prose text-p1 text-text-subtle">
						Catering będzie dostarczany przez firmę Be Healthy - zdrowa kuchnia
						dla dzieci.
					</p>
				</div>
				<img
					src={beHealthySrc}
					alt=""
					className="max-h-[131px] max-w-[387px]"
				/>
			</div>
			<img
				src={fruidSaladSrc}
				alt=""
				className="max-h-[500px] max-w-[500px] md:order-first md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
			/>
		</Section>
	)
}
