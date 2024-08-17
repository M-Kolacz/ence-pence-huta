import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '#app/components/atoms'
import { Section } from '#app/components/templates'
import commentsSrc from './comments.png'

export const Testimonials = () => {
	return (
		<Section className="flex flex-col items-center gap-strong">
			<div className="flex flex-col items-center gap-subtle">
				<img src={commentsSrc} alt="" className="h-[64px] w-[64px]" />
				<h2 className="max-w-prose text-center text-h2 font-bold text-text">
					Co mówią rodzice
				</h2>
			</div>
			<Carousel
				opts={{
					align: 'start',
				}}
				className="max-w-prose"
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="basis-full">
							<p className="max-w-prose">
								Serdecznie dziękujemy wszystkim opiekunkom za wspaniałą opiekę
								nad Krzysiem, za pomoc w jego wszechstronnym rozwoju i okazane
								mu ciepło i za to, że was tak polubił!
							</p>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Section>
	)
}
