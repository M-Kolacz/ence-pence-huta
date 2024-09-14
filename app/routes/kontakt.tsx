import { type MetaFunction } from '@remix-run/node'

import { Contact, Map } from '#app/components/organisms'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<>
			<Contact />
			<Map />
		</>
	)
}
