import { type Meta, type StoryObj } from '@storybook/react'
import { disableControls, setDesignPreview } from '#app/utils/storybook.ts'
import { Icon, iconNames } from './icon.tsx'

const meta = {
	title: '⚛️ Atoms/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-22&t=SgllQF4sLHtxY4V0-4',
		),
	},
	args: {
		name: 'add',
	},
	argTypes: disableControls(['children']),
	tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {}

export const Icons: Story = {
	render: args => {
		return (
			<div className="flex max-w-12 flex-wrap gap-4">
				{iconNames.map(name => (
					<Icon {...args} name={name} key={name} />
				))}
			</div>
		)
	},
}
