import { vi } from 'vitest'


global.window = Object.create(window)
global.document = window.document
global.alert = vi.fn()
global.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}