import { type Meta, type StoryObj } from '@storybook/react'
import { disableControls } from '#app/utils/storybook.ts'
import { NavigationLink } from './navigation-link.tsx'

const meta = {
	title: 'Navigation Link',
	component: NavigationLink,
	parameters: {
		layout: 'centered',
	},
	args: { children: 'Strona główna', to: '/abc' },
	argTypes: {
		...disableControls<typeof NavigationLink>(['about']),
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NavigationLink>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {},
}

export const Variants: Story = {
	render: args => {
		return (
			<div className="flex gap-4">
				<NavigationLink {...args} to="/" />
				<NavigationLink {...args} to="/abc" />
			</div>
		)
	},
	argTypes: {
		...disableControls<typeof NavigationLink>(['to']),
	},
}
