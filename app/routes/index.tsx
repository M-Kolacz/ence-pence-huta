import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<>
			<h1 className="rounded-base bg-primary-50 font-headings text-b1">Yo</h1>
			<h2 className="rounded-base bg-primary-50">Yo 2</h2>
		</>
	)
}
