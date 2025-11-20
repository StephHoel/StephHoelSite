import { routes } from '../src/lib/routes'

const BASE_URL = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const routesToTest = routes.map(r => r.path)

test.each(routesToTest)('GET %s returns 200', async (route) => {
  const res = await fetch(`${BASE_URL}${route}`)
  expect(res.status).toBe(200)
})
