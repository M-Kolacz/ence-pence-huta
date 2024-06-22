import { type MY_VIEWPORTS, allModes } from '../../.storybook/modes.ts'

export const setViewport = (device: keyof typeof MY_VIEWPORTS) => ({
	viewport: {
		defaultViewport: device,
	},
	chromatic: {
		modes: {
			[device]: allModes[device],
		},
	},
})
