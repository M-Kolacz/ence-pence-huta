import { type MetaFunction } from '@remix-run/node'
import {
	Hero,
	Activities,
	Testimonials,
	Gallery,
} from '#app/components/organisms'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<>
			<Hero />
			<Activities />
			<Testimonials />
			<Gallery />
		</>
	)
}
