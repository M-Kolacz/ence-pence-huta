import { type Meta, type StoryObj } from '@storybook/react'
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
} satisfies Meta<typeof Header>

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
