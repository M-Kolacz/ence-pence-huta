import { type Meta, type StoryObj } from '@storybook/react'
import { Footer, Header } from '#app/components/organisms'
import { App, Main } from '#app/components/templates'
import { setViewport, setDesignPreview } from '#app/utils/storybook.ts'
import Homepage from './index.tsx'

const meta = {
	title: 'Pages/Homepage',
	component: Homepage,
	parameters: {
		layout: 'fullscreen',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=100-225&t=fp53uoEO5s9CIEdr-4',
		),
	},
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<App>
				<Header />
				<Main>
					<Story />
				</Main>
				<Footer />
			</App>
		),
	],
} satisfies Meta<typeof Homepage>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
	name: 'Mobile',
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
