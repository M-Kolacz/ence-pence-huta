export default function (plop) {
	plop.setGenerator('⚛️  Atom', {
		description: 'A generator for atom component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'app/components/atoms/{{name}}',
				base: `plop-templates/atom`,
				templateFiles: 'plop-templates/atom/*',
			},
		],
	})
	plop.setGenerator('Molecule component generator', {
		description: 'A generator for molecule react components',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'components/Molecules/{{name}}',
				base: `plop-templates/react/molecule`,
				templateFiles: 'plop-templates/react/molecule/*',
			},
		],
	})
	plop.setGenerator('🦠  Organisms', {
		description: 'A generator for organism components',
		prompts: [
			{
				type: 'input',
				name: 'section',
				message: 'Page section',
			},
			{
				type: 'input',
				name: 'name',
				message: 'Component name',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'app/components/organisms/{{section}}/{{name}}',
				base: `plop-templates/organism`,
				templateFiles: 'plop-templates/organism/*',
			},
		],
	})
	plop.setGenerator('Page component generator', {
		description: 'A generator for page react components',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'components/Pages/{{name}}',
				base: `plop-templates/react/page`,
				templateFiles: 'plop-templates/react/page/*',
			},
		],
	})
	plop.setGenerator('Template component generator', {
		description: 'A generator for template react components',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'components/Templates/{{name}}',
				base: `plop-templates/react/template`,
				templateFiles: 'plop-templates/react/template/*',
			},
		],
	})
	plop.setHelper('toLowerCase', function (text) {
		return text.toLowerCase()
	})
}
