import {
	useForm,
	getFormProps,
	getInputProps,
	getTextareaProps,
} from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { useFetcher } from '@remix-run/react'
import { type ComponentProps } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '#app/components/atoms'
import { Field, TextareaField } from '#app/components/molecules'
import { Section } from '#app/components/templates'
import { type action } from '#app/routes/resources+/contact-form.tsx'
import { cn } from '#app/utils/misc.tsx'

export const ContactFormSchema = z.object({
	email: z
		.string({ message: 'Pole jest wymagane' })
		.email({ message: 'Podany adres email jest nieprawidłowy' }),
	subject: z.string({ message: 'Pole jest wymagane' }).min(2).max(50),
	message: z.string({ message: 'Pole jest wymagane' }).min(10).max(500),
})

export const ContactForm = ({
	className,
	...props
}: ComponentProps<'section'>) => {
	const fetcher = useFetcher<typeof action>()

	const contactFormTitle = 'contact-form-title'

	const [form, fields] = useForm({
		id: 'contact-form',
		constraint: getZodConstraint(ContactFormSchema),
		lastResult: fetcher?.data?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ContactFormSchema })
		},
		shouldRevalidate: 'onBlur',
		onSubmit: () => {
			toast.loading('Trwa wysyłanie wiadomości...', {
				description: 'Trwa wysyłanie wiadomości...',
			})
		},
	})

	return (
		<Section
			aria-labelledby={contactFormTitle}
			{...props}
			className={cn(
				'z-10 flex flex-col gap-strong rounded-lg bg-secondary-100 p-strong lg:col-start-3 lg:col-end-11',
				className,
			)}
		>
			<h2
				className="font-headings text-h2 text-primary-900"
				id={contactFormTitle}
			>
				Skontaktuj się z nami
			</h2>

			<fetcher.Form
				method="POST"
				className="flex flex-col"
				action="/resources/contact-form"
				{...getFormProps(form)}
			>
				<div className="flex flex-col md:flex-row md:gap-subtle">
					<Field
						className="grow"
						labelProps={{ children: 'Adres email' }}
						inputProps={{
							...getInputProps(fields.email, { type: 'email' }),
							placeholder: 'Twój adres email',
						}}
						errors={fields.email.errors}
					/>
					<Field
						className="grow"
						labelProps={{ children: 'Temat' }}
						inputProps={{
							...getInputProps(fields.subject, { type: 'text' }),
							placeholder: 'Podaj temat wiadomości',
						}}
						errors={fields.subject.errors}
					/>
				</div>
				<TextareaField
					labelProps={{ children: 'Wiadomość' }}
					textareaProps={{
						...getTextareaProps(fields.message),
						placeholder: 'Opisz w czym możemy Ci pomóc',
						rows: 8,
					}}
					errors={fields.message.errors}
				/>

				<Button type="submit" className="w-fit">
					Wyślij wiadomość
				</Button>
			</fetcher.Form>
		</Section>
	)
}
