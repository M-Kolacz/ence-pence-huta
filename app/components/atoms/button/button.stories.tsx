import { type Meta, type StoryObj } from '@storybook/react'
import { disableControls, setDesignPreview } from '#app/utils/storybook.ts'
import { Button } from './button.tsx'

const meta = {
	title: '⚛️ Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		...setDesignPreview(''),
	},
	args: { children: 'Hello there' },
	argTypes: {
		...disableControls<typeof Button>(['aria-checked']),
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {
		variant: 'primary',
	},
}
