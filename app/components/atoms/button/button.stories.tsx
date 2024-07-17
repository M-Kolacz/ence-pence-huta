import { type Meta, type StoryObj } from '@storybook/react'
import { Icon } from '#app/components/atoms'
import { disableControls, setDesignPreview } from '#app/utils/storybook.ts'
import { variations, sizes } from './button-variants.ts'
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
	args: { children: 'Click me', variant: 'default', size: 'default' },
	argTypes: {
		variant: {
			options: variations,
			control: { type: 'radio' },
		},
		size: {
			options: sizes,
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
		variant: 'default',
	},
}

export const IconButton: Story = {
	args: {
		variant: 'outline',
		size: 'icon',
		children: <Icon name="baby-shoes" />,
	},
	argTypes: {
		...disableControls<typeof Button>(['size', 'children', 'variant']),
	},
}

export const Variants: Story = {
	render: args => {
		return (
			<div className="flex gap-4">
				{variations.map(variant => (
					<Button key={variant} {...args} variant={variant} />
				))}
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
				{sizes.map(size => (
					<Button
						key={size}
						{...args}
						size={size}
						children={size === 'icon' ? null : args.children}
					/>
				))}
			</div>
		)
	},
	argTypes: {
		...disableControls<typeof Button>(['size']),
	},
}
