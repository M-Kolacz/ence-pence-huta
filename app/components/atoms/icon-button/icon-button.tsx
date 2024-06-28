import { cn } from '#app/utils/misc.tsx'

export interface IconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = ({ className, ...props }: IconButtonProps) => {
	return (
		<button
			className={cn(
				'inline-flex h-7 w-7 items-center justify-center whitespace-nowrap rounded-md border border-base bg-neutral-0 p-2 transition-colors hover:bg-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}

IconButton.displayName = 'IconButton'

export { IconButton }
