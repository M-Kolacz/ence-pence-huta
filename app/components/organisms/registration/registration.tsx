import { Link as RemixLink } from '@remix-run/react'
import { Link } from '#app/components/atoms'
import { Section } from '#app/components/templates'
import { getRegistrationYears } from './registration.helpers'

export const Registration = () => {
	const { currentYear, nextYear } = getRegistrationYears()

	return (
		<Section className="flex flex-col items-center gap-strong">
			<div className="flex flex-col items-center gap-subtle">
				<h2 className="text-center font-headings text-h2 text-text">
					Zapisy na rok {currentYear}/{nextYear}
				</h2>
				<p className="max-w-prose text-center text-p1 text-text-subtle">
					Zapisy na rok {currentYear}/{nextYear} zostały już rozpoczęte. Nasz
					żłobek znajduje się na Osiedlu Kliny zaledwie kilka metrów od pętli
					autobusowej. Zadzwoń i zapytaj o miejsce pod{' '}
					<Link href="tel:+48691999935">nr tel. 691 999 935.</Link> Możesz
					również skorzystać z{' '}
					<Link asChild>
						<RemixLink to="/kontakt#contact-form-title">
							formularza kontaktowego na naszej stronie.
						</RemixLink>
					</Link>{' '}
					Zapraszamy na nasz fanpage
				</p>
			</div>
			<img
				src="/img/news/adult-talking.svg"
				alt=""
				className="max-h-[500px] max-w-[500px] lg:h-[500px] lg:w-[500px]"
			/>
		</Section>
	)
}
