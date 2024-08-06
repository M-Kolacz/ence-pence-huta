import { ActivityCard } from '#app/components/molecules'
import { variations as activities } from '#app/components/molecules/activity-card/activity-card.variants.ts'
import { Section } from '#app/components/templates'

export const Activities = () => {
	return (
		<Section className="flex flex-col gap-strong">
			<h2 className="max-w-prose text-center text-h2 font-bold text-text">
				Wiemy, co jest najlepsze dla Twojego dziecka do nauki. Zobacz nasz
				multidyscyplinarny system edukacji
			</h2>
			<div className="flex flex-wrap justify-evenly gap-strong">
				{activities.map(activity => (
					<ActivityCard key={activity} variant={activity} />
				))}
			</div>
		</Section>
	)
}
