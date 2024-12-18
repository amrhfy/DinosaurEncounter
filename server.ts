import { createServer } from 'node:http'
import { parse } from 'node:url'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = Number(process.env.PORT) || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

void app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url ?? '', true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
}) 
