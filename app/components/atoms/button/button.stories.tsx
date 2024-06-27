import { type Meta, type StoryObj } from '@storybook/react'
import { disableControls, setDesignPreview } from '#app/utils/storybook.ts'
import { Button } from './button.tsx'
const meta = {
	title: '⚛️ Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-76&t=SgllQF4sLHtxY4V0-4',
		),
	},
	args: { children: 'Click me', variant: 'primary', size: 'default' },
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'outline', 'secondary-outline'],
			control: { type: 'radio' },
		},
		size: {
			options: ['default', 'sm', 'lg'],
			control: { type: 'radio' },
		},
		...disableControls<typeof Button>(['asChild']),
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

export const Variants: Story = {
	render: args => {
		return (
			<div className="flex gap-4">
				<Button {...args} variant="primary" />
				<Button {...args} variant="secondary" />
				<Button {...args} variant="outline" />
				<Button {...args} variant="secondary-outline" />
			</div>
		)
	},
	argTypes: {
		...disableControls<typeof Button>(['variant']),
	},
}

export const Sizes: Story = {
	render: args => {
		return (
			<div className="flex gap-4">
				<Button {...args} size="default" />
			</div>
		)
	},
	argTypes: {
		...disableControls<typeof Button>(['size']),
	},
}
