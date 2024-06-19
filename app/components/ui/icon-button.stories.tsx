import { type Meta, type StoryObj } from '@storybook/react'
import { disableControls } from '#app/utils/storybook.ts'
import { IconButton } from './icon-button.tsx'
import { Icon } from './icon.tsx'

const meta = {
	title: 'IconButton',
	component: IconButton,

	parameters: {
		layout: 'centered',
	},
	args: { children: <Icon name="cereal" size="xl" /> },
	argTypes: disableControls(['children']),
	tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {},
}
