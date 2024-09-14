import { type Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'
import '../app/styles/tailwind.css'
import '../app/styles/font.css'
import { STORYBOOK_VIEWPORTS } from './modes'
import '../app/utils/env.server.ts'
import '../types/env.env.d.ts'

window.ENV = {
	...window.ENV,
	GOOGLE_MAP_API_KEY: import.meta.env.STORYBOOK_GOOGLE_MAP_API_KEY,
	GOOGLE_MAP_ID: import.meta.env.STORYBOOK_GOOGLE_MAP_ID,
}

const preview: Preview = {
	parameters: {
		controls: {
			expanded: true,
		},
		viewport: {
			viewports: STORYBOOK_VIEWPORTS,
			defaultViewport: STORYBOOK_VIEWPORTS.Desktop.name,
		},
		options: {
			storySort: {
				order: [
					'Atoms',
					'Molecules',
					'Organisms',
					'Templates',
					'Pages',
					'Tokens',
				],
			},
		},
	},
	decorators: [withRouter],
}

export default preview
