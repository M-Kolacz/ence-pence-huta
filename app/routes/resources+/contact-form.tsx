import {
	useForm,
	getFormProps,
	getInputProps,
	getTextareaProps,
} from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { invariantResponse } from '@epic-web/invariant'
import { type ActionFunctionArgs, json } from '@remix-run/node'
import { useActionData, useFetcher } from '@remix-run/react'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { z } from 'zod'
import { Button } from '#app/components/atoms'
import { Field, TextareaField } from '#app/components/molecules'
import { Section } from '#app/components/templates'
import { checkHoneypot } from '#app/utils/honeypot.server.ts'
import emailjs from '@emailjs/nodejs'

const ContactFormSchema = z.object({
	email: z.string().email(),
	subject: z.string().min(2).max(50),
	message: z.string().min(10).max(500),
})

export async function action({ request }: ActionFunctionArgs) {
	console.log('hello there')
	const formData = await request.formData()
	console.log({ formData })
	// checkHoneypot(formData)
	console.log('hello there1')
	const submission = parseWithZod(formData, {
		schema: ContactFormSchema,
	})

	invariantResponse(
		submission.status === 'success',
		'Błędnie wypełniony formularz',
	)

	const { email, message, subject } = submission.value

	const result = await emailjs
		.send(
			'service_yhw6cdf',
			'template_wuyl14c',
			{
				email,
				message,
				topic: subject,
			},
			{ publicKey: 'fy2GDpN0lzcDaYmL0', privateKey: 'QoSqk67l-Lst6OW9RzYqI' },
		)
		.catch(console.error)
	console.log({ result })
	// const result = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
	// 	method: 'POST',
	// 	body: JSON.stringify({
	// 		service_id: 'service_s0ungr3',
	// 		template_id: 'template_wuyl14c',
	// 		user_id: 'fy2GDpN0lzcDaYmL0',
	// 		accessToken: 'QoSqk67l-Lst6OW9RzYqI',
	// 		template_params: {},
	// 	}),
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// })
	// console.log({ result })
	// const response = await result.json()

	// console.log({ response })

	return json({ result: submission.reply() })
}

export const ContactForm = () => {
	const fetcher = useFetcher<typeof action>()

	const contactFormTitle = 'contact-form-title'

	const [form, fields] = useForm({
		id: 'contact-form',
		defaultValue: {
			email: 'michal.kolacz@gmail.com',
			message: 'message 123m easddasasdsdaodsapdsapndas',
			subject: 'subject',
		},
		constraint: getZodConstraint(ContactFormSchema),
		lastResult: fetcher?.data?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ContactFormSchema })
		},
		shouldRevalidate: 'onBlur',
	})

	return (
		<Section
			aria-labelledby={contactFormTitle}
			className="flex flex-col gap-strong rounded-lg bg-secondary-100 p-strong"
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
				<HoneypotInputs />
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
							placeholder: 'Temat wiadomości',
						}}
					/>
				</div>
				<TextareaField
					labelProps={{ children: 'Wiadomość' }}
					textareaProps={{
						...getTextareaProps(fields.message),
						placeholder: 'Treść wiadomości',
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
