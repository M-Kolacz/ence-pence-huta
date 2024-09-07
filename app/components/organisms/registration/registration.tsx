import { Section } from '#app/components/templates'

export const Registration = () => {
	return (
		<Section className="flex flex-col items-center gap-strong">
			<div className="flex flex-col items-center gap-subtle">
				<h2 className="text-center font-headings text-h2 text-text">
					Zapisy na rok 2023/2024
				</h2>
				<p className="max-w-prose text-center text-p1 text-text-subtle">
					Zapisy na rok 2023/2024 zostały już rozpoczęte. Nasz żłobek znajduje
					się na Osiedlu Kliny zaledwie kilka metrów od pętli autobusowej.
					Zadzwoń i zapytaj o miejsce pod nr tel. 691 999 935. Możesz również
					skorzystać z formularza kontaktowego na naszej stronie. Zapraszamy na
					nasz fanpage
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
