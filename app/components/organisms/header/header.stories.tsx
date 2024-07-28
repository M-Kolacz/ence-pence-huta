import { type Meta, type StoryObj } from '@storybook/react'
import { userEvent, within, screen, logRoles } from '@storybook/test'
import { setViewport, setDesignPreview } from '#app/utils/storybook.ts'
import { Header } from './header.tsx'

const meta = {
	title: '🦠 Organisms/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=100-225&t=fp53uoEO5s9CIEdr-4',
		),
	},
	args: {},
	argTypes: {},
	decorators: [
		Story => (
			<div className="p-app">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
	name: 'Mobile - closed navigation',
	parameters: {
		...setViewport('Mobile'),
	},
}

export const MobileOpen: Story = {
	name: 'Mobile - open navigation',
	parameters: {
		...setViewport('Mobile'),
		...setDesignPreview(
			'https://www.figma.com/file/zx5FkmiDiV7F8Jn5phnpeJ/Ence-Pence-Huta-v2?node-id=200-1369&t=1zUiTMlrtdfwd4MW-4',
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		logRoles(canvasElement)
		const menuButton = await canvas.findByRole('button', { expanded: false })

		userEvent.click(menuButton)

		const dialog = within(await screen.findByRole('dialog'))

		await dialog.findByRole('button', { name: 'Strona główna' })
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
