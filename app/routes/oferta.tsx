import { type MetaFunction } from '@remix-run/node'

import { Invitation, Catering, Layette, Cost } from '#app/components/organisms'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<>
			<Invitation />
			<Catering />
			<Layette />
			<Cost />
		</>
	)
}
