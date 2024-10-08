import { z } from 'zod'

const schema = z.object({
	NODE_ENV: z.enum(['production', 'development', 'test'] as const),
	DATABASE_PATH: z.string(),
	DATABASE_URL: z.string(),
	SESSION_SECRET: z.string(),
	INTERNAL_COMMAND_TOKEN: z.string(),
	HONEYPOT_SECRET: z.string(),
	CACHE_DATABASE_PATH: z.string(),
	// If you plan on using Sentry, uncomment this line
	// SENTRY_DSN: z.string(),
	// If you plan to use Resend, uncomment this line
	// RESEND_API_KEY: z.string(),
	// If you plan to use GitHub auth, remove the default:
	GITHUB_CLIENT_ID: z.string().default('MOCK_GITHUB_CLIENT_ID'),
	GITHUB_CLIENT_SECRET: z.string().default('MOCK_GITHUB_CLIENT_SECRET'),
	GITHUB_TOKEN: z.string().default('MOCK_GITHUB_TOKEN'),
	ALLOW_INDEXING: z.enum(['true', 'false']).optional(),
	GOOGLE_MAP_API_KEY: z.string(),
	GOOGLE_MAP_ID: z.string(),
	EMAIL_SERVICE_ID: z.string(),
	EMAIL_TEMPLATE_ID: z.string(),
	EMAIL_USER_ID: z.string(),
	EMAIL_ACCESS_TOKEN: z.string(),
	EMAIL_API_PATH: z.string(),
})

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof schema> {}
	}
}

export function init() {
	const parsed = schema.safeParse(process.env)

	if (parsed.success === false) {
		console.error(
			'❌ Invalid environment variables:',
			parsed.error.flatten().fieldErrors,
		)

		throw new Error('Invalid environment variables')
	}
}

/**
 * This is used in both `entry.server.ts` and `root.tsx` to ensure that
 * the environment variables are set and globally available before the app is
 * started.
 *
 * NOTE: Do *not* add any environment variables in here that you do not wish to
 * be included in the client.
 * @returns all public ENV variables
 */
export function getEnv() {
	return {
		MODE: process.env.NODE_ENV,
		SENTRY_DSN: process.env.SENTRY_DSN,
		ALLOW_INDEXING: process.env.ALLOW_INDEXING,
		GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
		GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
		EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
		EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
		EMAIL_USER_ID: process.env.EMAIL_USER_ID,
		EMAIL_ACCESS_TOKEN: process.env.EMAIL_ACCESS_TOKEN,
		EMAIL_API_PATH: process.env.EMAIL_API_PATH,
	}
}

type ENV = ReturnType<typeof getEnv>

declare global {
	var ENV: ENV
	interface Window {
		ENV: ENV
	}
}
