import { useState } from 'react'
import { ColumnsPhotoAlbum } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import { Section } from '#app/components/templates'
import { setGalleryColumns } from './galerry.helpers.ts'

const breakpoints = [1024, 768]

const images = [
	{ height: 1536, width: 2048, src: '/img/nursery/1.jpg' },
	{ height: 1536, width: 2048, src: '/img/nursery/2.jpg' },
	{ height: 1599, width: 1200, src: '/img/nursery/3.jpg' },
	{ height: 1536, width: 2048, src: '/img/nursery/4.jpg' },
	{ height: 1599, width: 1200, src: '/img/nursery/5.jpg' },
	{ height: 1599, width: 1200, src: '/img/nursery/6.jpg' },
	{ height: 1599, width: 1200, src: '/img/nursery/7.jpg' },
	{ height: 1536, width: 2048, src: '/img/nursery/8.jpg' },
	{ height: 1536, width: 2048, src: '/img/nursery/9.jpg' },
	{ height: 1599, width: 1200, src: '/img/nursery/10.jpg' },
].map(({ src, width, height }) => ({
	src: src,
	width,
	height,
	srcSet: breakpoints.map((breakpoint) => ({
		src: src,
		width: breakpoint,
		height: Math.round((height / width) * breakpoint),
	})),
}))

export const Gallery = () => {
	const [photoIndex, setPhotoIndex] = useState(-1)
	const gallery = 'gallery'

	return (
		<Section className="flex flex-col gap-strong" aria-labelledby={gallery}>
			<h2 className="lg font-headings text-h2 text-text" id={gallery}>
				Galeria
			</h2>
			<ColumnsPhotoAlbum
				columns={setGalleryColumns}
				photos={images}
				onClick={({ index }) => setPhotoIndex(index)}
			/>

			<Lightbox
				index={photoIndex}
				slides={images}
				open={photoIndex >= 0}
				close={() => setPhotoIndex(-1)}
				plugins={[Counter, Thumbnails]}
			/>
		</Section>
	)
}
