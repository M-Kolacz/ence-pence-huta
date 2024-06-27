import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ButtonHTMLAttributes } from 'react'

import { cn } from '#app/utils/misc.tsx'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-primary-600 text-neutral-50 hover:bg-primary-600/90',
				secondary:
					'bg-secondary-600 text-neutral-0 hover:bg-secondary-600/90 focus-visible:ring-secondary-600',
				outline:
					'border border-primary-600 bg-neutral-0 text-primary-600 hover:bg-primary-100/30',
				'secondary-outline':
					'border border-secondary-600 bg-neutral-0 text-secondary-600 hover:bg-secondary-100/30 focus-visible:ring-secondary-600',
			},
			size: {
				default: 'h-[40px] px-4 py-3',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
