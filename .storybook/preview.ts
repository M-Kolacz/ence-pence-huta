import { type Preview } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'
import '../app/styles/tailwind.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [withRouter],
}

export default preview
