import { default as defaultConfig } from '@epic-web/config/eslint'

/** @type {import("eslint").Linter.Config} */
export default [
	...defaultConfig,
	{ ignores: ['plop-templates/*'] },
	// add custom config objects here:
]
