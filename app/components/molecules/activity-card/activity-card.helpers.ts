import artSrc from '#app/images/art.svg'
import musicSrc from '#app/images/music.svg'
import sportSrc from '#app/images/sport.svg'

export const activityCardState = {
	sport: {
		title: 'Zajęcia sportowe',
		description: 'Radosna aktywność i nauka współpracy.',
		src: sportSrc,
	},
	music: {
		title: 'Zajęcia muzyczne',
		description: 'Magiczne spotkanie z śpiewem i tańcem.',
		src: musicSrc,
	},
	art: {
		title: 'Zajęcia artystyczne',
		description: 'Inspirujące zajęcia artystyczne pełne magii.',
		src: artSrc,
	},
} as const
