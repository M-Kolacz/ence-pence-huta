import { type ComponentProps } from 'react'
import { cn } from '#app/utils/misc.tsx'

export const Link = ({ className, ...props }: ComponentProps<'a'>) => {
	return (
		<a
			{...props}
			className={cn(
				'text-p1 text-primary-500 underline visited:text-[#A21CAF] hover:text-primary-600 focus:rounded-md focus:outline focus:outline-offset-2 focus:outline-ring active:text-error-500',
				className,
			)}
		/>
	)
}
