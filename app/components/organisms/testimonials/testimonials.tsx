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
import { testimonials } from './testimonials.helpers.ts'

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
					{testimonials.map(
						({ avatarCaption, avatarTitle, description, src }) => (
							<CarouselItem
								key={src}
								className="flex basis-full flex-col items-center gap-subtle"
							>
								<p className="max-w-prose text-center text-p1 text-text-subtle">
									{description}
								</p>
								<AvatarRoot>
									<AvatarImg src={src} alt="" />
									<AvatarTextRoot>
										<AvatarTitle>{avatarTitle}</AvatarTitle>
										<AvatarCaption>{avatarCaption}</AvatarCaption>
									</AvatarTextRoot>
								</AvatarRoot>
							</CarouselItem>
						),
					)}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Section>
	)
}
