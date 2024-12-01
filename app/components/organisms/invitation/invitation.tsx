import { Icon, Link } from '#app/components/atoms'
import { Section } from '#app/components/templates'
import invitationSrc from '#app/images/invitation.svg'
import { getRegistrationYears } from '../registration/registration.helpers'

export const Invitation = () => {
	const contactTitle = 'invitation'
	const { currentYear, nextYear } = getRegistrationYears()
	return (
		<Section
			className="flex flex-col gap-strong md:flex-row"
			aria-labelledby={contactTitle}
		>
			<div className="flex flex-col gap-subtle md:justify-center">
				<h2
					className="w-full max-w-prose font-headings text-h2 text-text"
					id={contactTitle}
				>
					Zapisy na rok {currentYear}/{nextYear}
				</h2>
				<div className="flex flex-col gap-subtle">
					<p className="max-w-prose text-p1 text-text-subtle">
						Przyjmujemy dzieci przez cały rok (w zależności do ilości miejsc). W
						celu zapisu dziecka do naszego żłobka prosimy o wypełnienie i
						przesłanie do nas poniższych dokumentów:
					</p>
					<ul>
						<li className="flex gap-2 align-middle">
							<Icon name="folder" className="h-8 w-8" />
							<Link href="/docs/zgłoszenie.doc">Karta zgłoszenia dziecka</Link>
						</li>
					</ul>
				</div>
			</div>
			<img
				src={invitationSrc}
				alt=""
				className="max-h-[500px] max-w-[500px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
			/>
		</Section>
	)
}
