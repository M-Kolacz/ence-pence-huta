import { default as defaultConfig } from '@epic-web/config/eslint'

/** @type {import("eslint").Linter.Config} */
export default [
	...defaultConfig,
	{ ignores: ['plop-templates/*', 'storybook-static'] },
	// add custom config objects here:
]
