import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '#app/components/atoms'
import {
	AvatarCaption,
	AvatarImg,
	AvatarRoot,
	AvatarTextRoot,
	AvatarTitle,
} from '#app/components/molecules'
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
						<CarouselItem
							key={index}
							className="flex basis-full flex-col items-center gap-subtle"
						>
							<p className="max-w-prose text-center text-p1 text-text-subtle">
								Serdecznie dziękujemy wszystkim opiekunkom za wspaniałą opiekę
								nad Krzysiem, za pomoc w jego wszechstronnym rozwoju i okazane
								mu ciepło i za to, że was tak polubił!
							</p>
							<AvatarRoot>
								<AvatarImg src="/img/parents/1.svg" alt="" />
								<AvatarTextRoot>
									<AvatarTitle>Patrycja</AvatarTitle>
									<AvatarCaption>Mama Łucji</AvatarCaption>
								</AvatarTextRoot>
							</AvatarRoot>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Section>
	)
}
