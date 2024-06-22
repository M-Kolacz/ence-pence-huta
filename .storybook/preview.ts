import { type Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'
import '../app/styles/tailwind.css'
import { MY_VIEWPORTS } from './modes'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		viewport: {
			viewports: MY_VIEWPORTS,
			defaultViewport: MY_VIEWPORTS.Desktop.name,
		},
	},
	decorators: [withRouter],
}

export default preview
