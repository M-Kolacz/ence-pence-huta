import { faker } from '@faker-js/faker'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { getStoriesTestCases } from '#app/utils/storybook.ts'
import * as ButtonStories from './button.stories'

const { Component: ButtonStory } = composeStories(ButtonStories)

const testCases = getStoriesTestCases(ButtonStories)

describe('Button component', () => {
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

	test('should not be clickable', () => {
		const buttonText = faker.lorem.words(2)

		render(<ButtonStory disabled={true}>{buttonText}</ButtonStory>)

		const button = screen.getByRole('button', {
			name: new RegExp(buttonText, 'i'),
		})

		expect(button).toBeDisabled()
	})
})
