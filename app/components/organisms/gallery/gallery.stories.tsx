import { type Meta, type StoryObj } from '@storybook/react'
import { App } from '#app/components/templates'
import { setViewport, setDesignPreview } from '#app/utils/storybook.ts'
import { Gallery } from './gallery.tsx'

const meta = {
	title: 'Organisms/Gallery',
	component: Gallery,
	parameters: {
		layout: 'fullscreen',
		...setDesignPreview(
			'https://www.figma.com/design/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=327-4859&t=9JqUH6TxbrBKk10P-4',
		),
	},
	args: {},
	argTypes: {},
	decorators: [
		Story => (
			<App>
				<Story />
			</App>
		),
	],
} satisfies Meta<typeof Gallery>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
	parameters: {
		...setViewport('Mobile'),
	},
}

export const Tablet: Story = {
	parameters: {
		...setViewport('Tablet'),
	},
}

export const Desktop: Story = {
	parameters: {
		...setViewport('Desktop'),
	},
}
