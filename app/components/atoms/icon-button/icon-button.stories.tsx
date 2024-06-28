import { type Meta, type StoryObj } from '@storybook/react'
import { Icon } from '#app/components/atoms'
import { disableControls, setDesignPreview } from '#app/utils/storybook.ts'
import { IconButton } from './icon-button.tsx'

const meta = {
	title: '⚛️ Atoms/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=20-22&t=SgllQF4sLHtxY4V0-4',
		),
	},
	args: { children: <Icon name="cereal" /> },
	argTypes: disableControls(['children']),
	tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {
	args: {},
}
