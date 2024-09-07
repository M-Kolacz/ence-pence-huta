import { type MetaFunction } from '@remix-run/node'
import { Divider } from '#app/components/atoms'
import { Registration, Donation } from '#app/components/organisms'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<>
			<h1 className="col-span-full text-center font-headings text-h1 text-text lg:col-start-2 lg:col-end-12">
				Aktualności
			</h1>
			<Registration />
			<Divider className="col-span-full lg:col-start-2 lg:col-end-12" />
			<Donation />
		</>
	)
}
