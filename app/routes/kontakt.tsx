import { type MetaFunction } from '@remix-run/node'

import { Contact, Map } from '#app/components/organisms'
import { ContactForm } from './resources+/contact-form.tsx'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<>
			<Contact />
			<Map />
			<ContactForm />
		</>
	)
}
