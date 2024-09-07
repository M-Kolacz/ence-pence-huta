import { type MetaFunction } from '@remix-run/node'
import {
	Hero,
	Activities,
	Testimonials,
	Gallery,
	OurApproach,
} from '#app/components/organisms'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<>
			<Hero />
			<Activities />
			<OurApproach />
			<Testimonials />
			<Gallery />
		</>
	)
}
