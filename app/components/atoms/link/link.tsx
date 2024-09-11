import { type ComponentProps } from 'react'
import { cn } from '#app/utils/misc.tsx'

export const Link = ({ className, ...props }: ComponentProps<'a'>) => {
	return (
		<a
			{...props}
			className={cn(
				'text-p1 text-primary-600 underline transition-colors visited:text-[#A21CAF] hover:text-primary-700 focus:rounded-md focus:outline focus:outline-offset-2 focus:outline-ring active:text-error-600',
				className,
			)}
		/>
	)
}
