const base = `http://localhost:3000`
const routes = ['/', '/ficha', '/cadastro', '/contato', '/login', '/membros', '/sobre']

describe('routes', () => {
  for (const r of routes) {
    test(`${r} responds 200 and contains title`, async () => {
      const res = await fetch(base + r)
      expect(res.status).toBe(200)
      const html = await res.text()
      expect(html).toMatch(/<title[^>]*>.*Steph Hoel.*<\/title>/)
    }, 20000)
  }
})
