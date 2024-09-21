import { useEffect } from 'react'
import { Toaster as Sonner, toast as showToast } from 'sonner'
import { Icon } from '#app/components/atoms'
import { type Toast } from '#app/utils/toast.server.ts'

type ToasterProps = React.ComponentProps<typeof Sonner>

export function useToast(toast?: Toast | null) {
	useEffect(() => {
		if (toast) {
			setTimeout(() => {
				showToast.dismiss()
				showToast[toast.type](toast.title, {
					id: toast.id,
					description: toast.description,
				})
			}, 0)
		}
	}, [toast])
}

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			theme={'light'}
			className="toaster group"
			visibleToasts={1}
			icons={{
				loading: <Icon name="add" />,
				error: <Icon name="cancel" />,
				success: <Icon name="ok" />,
			}}
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-text-subtle',
					actionButton:
						'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
					cancelButton:
						'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
					success:
						'group-[.toaster]:text-success-950 group-[.toaster]:bg-success-200',
					loading:
						'group-[.toaster]:text-primary-950 group-[.toaster]:bg-primary-200',
					error:
						'group-[.toaster]:text-error-950 group-[.toaster]:bg-error-200',
				},
			}}
			{...props}
		/>
	)
}

export { Toaster }
