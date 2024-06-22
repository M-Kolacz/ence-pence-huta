import { cn } from '#app/utils/misc.tsx'

export interface IconButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = ({ className, ...props }: IconButtonProps) => {
	return (
		<button
			className={cn(
				'inline-flex h-12 w-12 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background p-2 ring-offset-background transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}

IconButton.displayName = 'IconButton'

export { IconButton }
