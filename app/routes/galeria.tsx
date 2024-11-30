import { type LinksFunction, type MetaFunction } from '@remix-run/node'
import columnsCss from 'react-photo-album/columns.css?url'
import counterCss from 'yet-another-react-lightbox/plugins/counter.css?url'
import thumbnails from 'yet-another-react-lightbox/plugins/thumbnails.css?url'
import lightboxCss from 'yet-another-react-lightbox/styles.css?url'
import { Gallery } from '#app/components/organisms'
import customGalleryCss from '#app/styles/gallery.css?url'

export const meta: MetaFunction = () => [{ title: 'Epic Notes' }]

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: columnsCss,
	},
	{
		rel: 'stylesheet',
		href: lightboxCss,
	},
	{
		rel: 'stylesheet',
		href: thumbnails,
	},
	{
		rel: 'stylesheet',
		href: counterCss,
	},
	{
		rel: 'stylesheet',
		href: customGalleryCss,
	},
]

export default function Index() {
	return (
		<>
			<Gallery />
		</>
	)
}
