import { type ComponentType, type ComponentProps } from 'react'

export const disableControls = <Component extends ComponentType<any>>(
	controls: (keyof ComponentProps<Component>)[],
) => {
	const disabledOptions = {}

	controls.forEach(control =>
		Object.assign(disabledOptions, {
			[control]: {
				table: {
					disable: true,
				},
			},
		}),
	)

	return disabledOptions
}
