import {
	useForm,
	getFormProps,
	getInputProps,
	getTextareaProps,
} from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { invariantResponse } from '@epic-web/invariant'
import { type ActionFunctionArgs, json } from '@remix-run/node'
import { useFetcher } from '@remix-run/react'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '#app/components/atoms'
import { Field, TextareaField } from '#app/components/molecules'
import { Section } from '#app/components/templates'
import { createToastCookie } from '#app/utils/toast.server.js'

const ContactFormSchema = z.object({
	email: z.string().email(),
	subject: z.string().min(2).max(50),
	message: z.string().min(10).max(500),
})

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData()
	const submission = parseWithZod(formData, {
		schema: ContactFormSchema,
	})
	invariantResponse(
		submission.status === 'success',
		'Błędnie wypełniony formularz',
	)

	const { email, message, subject } = submission.value
	const response = await fetch(ENV.EMAIL_API_PATH, {
		method: 'POST',
		body: JSON.stringify({
			service_id: ENV.EMAIL_SERVICE_ID,
			template_id: ENV.EMAIL_TEMPLATE_ID,
			user_id: ENV.EMAIL_USER_ID,
			accessToken: ENV.EMAIL_ACCESS_TOKEN,
			template_params: {
				email,
				message,
				topic: subject,
			},
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})

	const headers = new Headers()
	const toastCookie = await createToastCookie(
		response.ok
			? {
					title: 'Wiadomość wysłana.',
					description: 'Dziękujemy za kontakt z nami.',
					type: 'success',
				}
			: {
					title: 'Błąd',
					description:
						'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
					type: 'error',
				},
	)
	headers.append('set-cookie', toastCookie)

	return json(
		{
			result: submission.reply(),
		},
		{ headers, status: response.ok ? 200 : 500 },
	)
}

export const ContactForm = () => {
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
			className="z-10 flex flex-col gap-strong rounded-lg bg-secondary-100 p-strong md:-mt-[20%] lg:col-start-3 lg:col-end-11"
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
					/>
					<Field
						className="grow"
						labelProps={{ children: 'Temat' }}
						inputProps={{
							...getInputProps(fields.subject, { type: 'text' }),
							placeholder: 'Podaj temat wiadomości',
						}}
					/>
				</div>
				<TextareaField
					labelProps={{ children: 'Wiadomość' }}
					textareaProps={{
						...getTextareaProps(fields.message),
						placeholder: 'Opisz w czym możemy Ci pomóc',
						rows: 8,
					}}
				/>

				<Button type="submit" className="w-fit">
					Wyślij wiadomość
				</Button>
			</fetcher.Form>
		</Section>
	)
}
