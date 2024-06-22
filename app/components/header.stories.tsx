import { type Meta, type StoryObj } from '@storybook/react'
import { Header } from './header.tsx'

const meta = {
	title: 'Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
	args: {},
	argTypes: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {}
