import { EmblaOptionsType, type EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from 'embla-carousel-react'
import {
	createContext,
	useContext,
	forwardRef,
	useState,
	useCallback,
	type HTMLAttributes,
	useEffect,
	type ComponentProps,
	type KeyboardEvent,
} from 'react'
import { Button, Dot } from '#app/components/atoms'
import { cn } from '#app/utils/misc.tsx'
import { useDotButton } from './carousel.helpers'
import nextSrc from './next.png'
import prevSrc from './prev.png'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	orientation?: 'horizontal' | 'vertical'
	setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[1]
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
} & CarouselProps

const CarouselContext = createContext<CarouselContextProps | null>(null)

function useCarousel() {
	const context = useContext(CarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

const Carousel = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & CarouselProps
>(
	(
		{
			orientation = 'horizontal',
			opts,
			setApi,
			plugins,
			className,
			children,
			...props
		},
		ref,
	) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y',
			},
			plugins,
		)
		const [canScrollPrev, setCanScrollPrev] = useState(false)
		const [canScrollNext, setCanScrollNext] = useState(false)

		const onSelect = useCallback((api: CarouselApi) => {
			if (!api) {
				return
			}

			setCanScrollPrev(api.canScrollPrev())
			setCanScrollNext(api.canScrollNext())
		}, [])

		const scrollPrev = useCallback(() => {
			api?.scrollPrev()
		}, [api])

		const scrollNext = useCallback(() => {
			api?.scrollNext()
		}, [api])

		const handleKeyDown = useCallback(
			(event: KeyboardEvent<HTMLDivElement>) => {
				if (event.key === 'ArrowLeft') {
					event.preventDefault()
					scrollPrev()
				} else if (event.key === 'ArrowRight') {
					event.preventDefault()
					scrollNext()
				}
			},
			[scrollPrev, scrollNext],
		)

		useEffect(() => {
			if (!api || !setApi) {
				return
			}

			setApi(api)
		}, [api, setApi])

		useEffect(() => {
			if (!api) {
				return
			}

			onSelect(api)
			api.on('reInit', onSelect)
			api.on('select', onSelect)

			return () => {
				api?.off('select', onSelect)
			}
		}, [api, onSelect])

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation:
						orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext,
				}}
			>
				<div
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={cn('relative', className)}
					role="region"
					aria-roledescription="carousel"
					{...props}
				>
					{children}
				</div>
			</CarouselContext.Provider>
		)
	},
)
Carousel.displayName = 'Carousel'

const CarouselContent = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel()

	return (
		<div ref={carouselRef} className="overflow-hidden">
			<div
				ref={ref}
				className={cn(
					'flex',
					orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
					className,
				)}
				{...props}
			/>
		</div>
	)
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		const { orientation } = useCarousel()

		return (
			<div
				ref={ref}
				role="group"
				aria-roledescription="slide"
				className={cn(
					'min-w-0 shrink-0 grow-0 basis-full',
					orientation === 'horizontal' ? 'pl-4' : 'pt-4',
					className,
				)}
				{...props}
			/>
		)
	},
)
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = forwardRef<
	HTMLButtonElement,
	ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel()

	return (
		<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				'absolute h-12 w-12',
				orientation === 'horizontal'
					? '-left-20 top-1/2 -translate-y-1/2'
					: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
				className,
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}
		>
			<img src={prevSrc} alt="" className="h-6 w-6" />
			<span className="sr-only">Poprzednia opinia</span>
		</Button>
	)
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = forwardRef<
	HTMLButtonElement,
	ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel()

	return (
		<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				'absolute h-12 w-12',
				orientation === 'horizontal'
					? '-right-20 top-1/2 -translate-y-1/2'
					: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
				className,
			)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}
		>
			<img src={nextSrc} alt="" className="h-6 w-6" />
			<span className="sr-only">Następna opinia</span>
		</Button>
	)
})
CarouselNext.displayName = 'CarouselNext'

type CarouselDotProps = ComponentProps<'button'> & { index: number }
const CarouselDot = ({ index, ...props }: CarouselDotProps) => {
	const { api } = useCarousel()

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay
		if (!autoplay) return

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop

		resetOrStop()
	}, [])

	const { onDotButtonClick, selectedIndex } = useDotButton(
		api,
		onNavButtonClick,
	)

	return (
		<Dot
			isActive={selectedIndex === index}
			onClick={() => onDotButtonClick(index)}
			{...props}
		/>
	)
}

export {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	CarouselDot,
}
