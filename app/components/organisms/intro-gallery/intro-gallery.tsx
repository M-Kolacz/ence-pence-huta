import { motion } from 'framer-motion'
import { Button, Icon } from '#app/components/atoms'
import { ImagesSlider } from '#app/components/molecules'
import { Section } from '#app/components/templates'
import { Link } from '@remix-run/react'

export const IntroGallery = () => {
	const images = [
		'/img/nursery/1.jpg',
		'/img/nursery/2.jpg',
		'/img/nursery/3.jpg',
		'/img/nursery/4.jpg',
		'/img/nursery/5.jpg',
		'/img/nursery/6.jpg',
		'/img/nursery/7.jpg',
		'/img/nursery/8.jpg',
		'/img/nursery/9.jpg',
		'/img/nursery/10.jpg',
	]

	return (
		<Section className="sm -mx-app h-[640px] md:h-[800px] lg:col-start-1 lg:col-end-13 lg:h-[900px]">
			<ImagesSlider images={images}>
				<motion.div
					initial={{
						opacity: 0,
						y: -80,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.6,
					}}
					className="z-50 flex flex-col items-center justify-center md:gap-base"
				>
					<div className="hidden flex-col items-center justify-center md:flex">
						<motion.p className="w-fit rounded-t-lg bg-success-700 px-3 py-1 font-headings text-h3 text-neutral-white">
							Sprawdź nasze zdjęcia
						</motion.p>
						<motion.p className="w-fit rounded-lg bg-success-700 px-3 py-1 font-headings text-h3 text-neutral-white">
							i przekonaj się sam, jak wygląda nauka w
						</motion.p>
						<motion.p className="w-fit rounded-b-lg bg-success-700 px-3 py-1 font-headings text-h3 text-neutral-white">
							naszym złobku.
						</motion.p>
					</div>
					<Button
						variant="secondary"
						className="relative text-xl"
						size={'lg'}
						asChild
					>
						<Link to="/galeria">
							Zobacz naszą galerie
							<Icon name="image" className="ml-2" />
						</Link>
					</Button>
				</motion.div>
			</ImagesSlider>
		</Section>
	)
}
