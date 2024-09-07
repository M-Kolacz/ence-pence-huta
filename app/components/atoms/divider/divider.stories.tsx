import { type Meta, type StoryObj } from '@storybook/react'
import { setDesignPreview } from '#app/utils/storybook.ts'
import { Divider } from './divider.tsx'

const meta = {
	title: 'Atoms/Divider',
	component: Divider,
	parameters: {
		layout: 'centered',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=177-5&t=fp53uoEO5s9CIEdr-4',
		),
	},
	args: {},
	decorators: [
		(Story) => (
			<div className="w-[250px]">
				<Story />
			</div>
		),
	],

	tags: ['autodocs'],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Component: Story = {}
