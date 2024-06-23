import {
	type ReactRenderer,
	composeStories,
	type StoryFn,
} from '@storybook/react'
import { type Store_CSFExports } from '@storybook/types'
import { type ComponentType, type ComponentProps } from 'react'
import { type MY_VIEWPORTS, allModes } from '../../.storybook/modes.ts'

export const getStoriesTestCases = (
	stories: Store_CSFExports<ReactRenderer, any>,
) =>
	Object.values<StoryFn>(composeStories(stories)).map(Story => {
		return [Story.storyName, Story] as const
	})

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

export const setDesignPreview = (url: string) => ({
	design: {
		type: 'figma',
		url,
	},
})
