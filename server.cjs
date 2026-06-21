const http = require('http')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 5173
const dist = path.join(__dirname, 'dist')

const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
}

const send404 = (res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not found')
}

const server = http.createServer((req, res) => {
  try {
    let reqPath = decodeURIComponent(req.url.split('?')[0])
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html'
    const filePath = path.join(dist, reqPath)

    fs.readFile(filePath, (err, data) => {
      if (err) {
        // SPA fallback to index.html
        fs.readFile(path.join(dist, 'index.html'), (err2, data2) => {
          if (err2) return send404(res)
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(data2)
        })
      } else {
        const ext = path.extname(filePath)
        const type = mime[ext] || 'application/octet-stream'
        res.writeHead(200, { 'Content-Type': type })
        res.end(data)
      }
    })
  } catch (e) {
    send404(res)
  }
})

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`)
})

module.exports = server
