export const MY_VIEWPORTS = {
	Desktop: {
		name: 'Desktop',
		styles: {
			width: `1440px`,
			height: `1024px`,
		},
	},
	Tablet: {
		name: 'Tablet',
		styles: {
			width: `1024px`,
			height: `1366px`,
		},
	},
	Mobile: {
		name: 'Mobile',
		styles: {
			width: `360px`,
			height: `800px`,
		},
	},
} as const

export const allModes = {
	[MY_VIEWPORTS.Mobile.name]: {
		viewport: MY_VIEWPORTS.Mobile.name,
	},
	[MY_VIEWPORTS.Tablet.name]: {
		viewport: MY_VIEWPORTS.Tablet.name,
	},
	[MY_VIEWPORTS.Desktop.name]: {
		viewport: MY_VIEWPORTS.Desktop.name,
	},
} as const

export const avaiableModes = {
	viewport: {
		Mobile: allModes['Mobile'],
		Tablet: allModes['Tablet'],
		Desktop: allModes['Desktop'],
		WideDesktop: allModes['WideDesktop'],
	},
} as const
