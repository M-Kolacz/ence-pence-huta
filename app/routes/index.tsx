import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export default function Index() {
	return (
		<main className="font-poppins grid h-full place-items-center">
			<h1>Yo</h1>
		</main>
	)
}
