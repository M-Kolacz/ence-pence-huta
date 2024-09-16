// import { useForm, getFormProps, getInputProps } from '@conform-to/react'
// import { getZodConstraint, parseWithZod } from '@conform-to/zod'
// import { invariantResponse } from '@epic-web/invariant'
// import { type ActionFunctionArgs, json } from '@remix-run/node'
// import { useActionData, useFetcher } from '@remix-run/react'
// import { HoneypotInputs } from 'remix-utils/honeypot/react'
// import { z } from 'zod'
// import { Button } from '#app/components/atoms'
// import { Field, TextareaField } from '#app/components/molecules'
// import { Section } from '#app/components/templates'
// import { checkHoneypot } from '#app/utils/honeypot.server.ts'

// const ContactFormSchema = z.object({
// 	email: z.string().email(),
// 	subject: z.string().min(2).max(50),
// 	message: z.string().min(10).max(500),
// })

// export async function action({ request }: ActionFunctionArgs) {
// 	const formData = await request.formData()
// 	checkHoneypot(formData)
// 	const submission = parseWithZod(formData, {
// 		schema: ContactFormSchema,
// 	})

// 	invariantResponse(
// 		submission.status === 'success',
// 		'Błędnie wypełniony formularz',
// 	)

// 	const { email, message, subject } = submission.value

// 	console.log({ email, message, subject })

// 	return json({ result: submission.reply() })
// }

// export const ContactForm = () => {
// 	const fetcher = useFetcher<typeof action>()
// 	const actionData = useActionData<typeof action>()

// 	const contactFormTitle = 'contact-form-title'

// 	const [form, fields] = useForm({
// 		id: 'contact-form',
// 		constraint: getZodConstraint(ContactFormSchema),
// 		lastResult: fetcher?.data?.result,
// 		onValidate({ formData }) {
// 			return parseWithZod(formData, { schema: ContactFormSchema })
// 		},
// 		shouldRevalidate: 'onBlur',
// 	})

// 	return (
// 		<Section
// 			aria-labelledby={contactFormTitle}
// 			className="flex flex-col gap-strong rounded-lg bg-secondary-100 p-strong"
// 		>
// 			<h2
// 				className="font-headings text-h2 text-primary-900"
// 				id={contactFormTitle}
// 			>
// 				Skontaktuj się z nami
// 			</h2>

// 			<fetcher.Form action="" className="flex flex-col">
// 				<div className="flex flex-col">
// 					<Field
// 						labelProps={{ children: 'Adres email' }}
// 						inputProps={{ placeholder: 'Twój adres email' }}
// 					/>
// 					<Field
// 						labelProps={{ children: 'Temat' }}
// 						inputProps={{ placeholder: 'Temat wiadomości' }}
// 					/>
// 				</div>
// 				<TextareaField
// 					labelProps={{ children: 'Wiadomość' }}
// 					textareaProps={{ placeholder: 'Treść wiadomości', rows: 8 }}
// 				/>
// 				<Button className="w-fit">Wyślij wiadomość</Button>
// 				<HoneypotInputs />
// 			</fetcher.Form>
// 		</Section>
// 	)
// }
