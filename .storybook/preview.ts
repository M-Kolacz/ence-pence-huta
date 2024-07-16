import { type Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'
import '../app/styles/tailwind.css'
import '../app/styles/font.css'
import { MY_VIEWPORTS } from './modes'

const preview: Preview = {
	parameters: {
		controls: {
			expanded: true,
		},
		viewport: {
			viewports: MY_VIEWPORTS,
			defaultViewport: MY_VIEWPORTS.Desktop.name,
		},
		options: {
			storySort: {
				order: ['⚛️ Atoms', 'Molecules', '🦠 Organisms', 'Templates', 'Pages'],
			},
		},
	},
	decorators: [withRouter],
}

export default preview
