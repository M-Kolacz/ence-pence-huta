import { RemixBrowser } from '@remix-run/react'
import { startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'

if (ENV.MODE === 'production' && ENV.SENTRY_DSN) {
	import('./utils/monitoring.client.tsx')
		.then(({ init }) => init())
		.catch(console.error)
}

startTransition(() => {
	hydrateRoot(document, <RemixBrowser />)
})
