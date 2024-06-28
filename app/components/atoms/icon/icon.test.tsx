import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { getStoriesTestCases } from '#app/utils/storybook.ts'
import * as IconStories from './icon.stories.tsx'

const testCases = getStoriesTestCases(IconStories)

describe('Icon component', () => {
	test.each(testCases)(
		'snapshot test of %s story',
		async (_storyName, Story) => {
			if (!Story) throw new Error('Missing story to test!')

			const { container } = render(<Story />)
			expect(container).toMatchSnapshot()
		},
	)

	test.each(testCases)('a11y test of %s story', async (_storyName, Story) => {
		if (!Story) throw new Error('Missing story to test!')

		const { container } = render(<Story />)

		const result = await axe(container)

		expect(result).toHaveNoViolations()
	})
})
