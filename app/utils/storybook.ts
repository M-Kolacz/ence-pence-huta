import { type ComponentType, type ComponentProps } from 'react'
import { type MY_VIEWPORTS, allModes } from '../../.storybook/modes.ts'

export const disableControls = <Component extends ComponentType<any>>(
	controls: (keyof ComponentProps<Component>)[],
) => {
	const disabledOptions = {}

	controls.forEach(control =>
		Object.assign(disabledOptions, {
			[control]: {
				table: {
					disable: true,
				},
			},
		}),
	)

	return disabledOptions
}

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
