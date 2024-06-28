import 'dotenv/config'
import './db-setup.ts'
import '#app/utils/env.server.ts'
// we need these to be imported first 👆

import { installGlobals } from '@remix-run/node'
import { cleanup } from '@testing-library/react'
import { afterEach, type MockInstance } from 'vitest'
import { server } from '#tests/mocks/index.ts'
import './custom-matchers.ts'

installGlobals()

afterEach(() => server.resetHandlers())
afterEach(() => cleanup())

export let consoleError: MockInstance<Parameters<(typeof console)['error']>>
