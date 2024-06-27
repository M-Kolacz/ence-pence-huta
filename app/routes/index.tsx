import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return <h1 className="text-b1 bg-primary-50">Yo</h1>
}
