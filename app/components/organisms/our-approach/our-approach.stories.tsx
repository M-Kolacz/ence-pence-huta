import { type Meta, type StoryObj } from '@storybook/react'
import { App, Main } from '#app/components/templates'
import { setViewport, setDesignPreview } from '#app/utils/storybook.ts'
import { OurApproach } from './our-approach.tsx'

const meta = {
	title: 'Organisms/OurApproach',
	component: OurApproach,
	parameters: {
		layout: 'fullscreen',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=237-1388&t=GQLL9YfZgeWcKaym-4',
		),
	},
	decorators: [
		Story => (
			<App>
				<Main>
					<Story />
				</Main>
			</App>
		),
	],
} satisfies Meta<typeof OurApproach>

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