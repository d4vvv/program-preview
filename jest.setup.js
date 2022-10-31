import '@testing-library/jest-dom'
import { loadEnvConfig } from '@next/env'
import { server } from './test/server'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const loadEnv = async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}

beforeAll(() => {
  server.listen()
})
afterEach(() => server.resetHandlers())
afterAll(() => {
  server.close()
})

export default loadEnv
