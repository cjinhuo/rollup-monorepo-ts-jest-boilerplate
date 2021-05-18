import express from 'express'
import http from 'http'
import { port, FilePaths, ServerUrls } from './config'
import opn from 'open'
// import { mswServer } from './mocks/node'
//   mswServer.listen()
//   mswServer.printHandlers()
const app = express()

const url = `http://localhost:${port}/index.html`
Object.entries(FilePaths).forEach(([path, resolvePath]) => {
  app.use(path, express.static(resolvePath))
})

// mock server
app.get(ServerUrls.normalGet, (req, res) => {
  res.send('get 正常请求响应体')
})

app.get(ServerUrls.exceptionGet, (req, res) => {
  res.status(500).send('get 异常响应体!!!')
})

app.post(ServerUrls.normalPost, (req, res) => {
  res.send('post 正常请求响应体')
})

app.post(ServerUrls.exceptionPost, (req, res) => {
  res.status(500).send('post 异常响应体!!!')
})

const server = http.createServer(app)

server.listen(port, () => {})
if (process.env.NODE_ENV === 'demo') {
  console.log('examples is available at: http://localhost:' + port)
  opn(url)
}
