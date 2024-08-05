import { type MetaFunction } from '@remix-run/node'
import { Hero } from '#app/components/organisms'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<>
			<Hero />
		</>
	)
}
