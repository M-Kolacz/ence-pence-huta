import { parseWithZod } from '@conform-to/zod'
import { invariantResponse } from '@epic-web/invariant'
import { type ActionFunctionArgs, json } from '@remix-run/node'
import { ContactFormSchema } from '#app/components/organisms/contact-form/contact-form.tsx'
import { createToastCookie } from '#app/utils/toast.server.js'

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
