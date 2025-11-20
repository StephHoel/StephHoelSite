import { routes } from '../src/lib/routes'

const routesToTest = routes.map(r => r.path)

test.each(routesToTest)('GET %s returns 200', async (route) => {
  const res = await fetch(`http://127.0.0.1:3000${route}`)
  expect(res.status).toBe(200)
})
