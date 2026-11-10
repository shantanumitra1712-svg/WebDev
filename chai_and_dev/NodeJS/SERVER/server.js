const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000 //commonly used ports 3000, 6000. 8000, 8080

const server = http.createServer((request, response) => {
    const filePath = path.join(__dirname, request.url === '/' ? "index.html" : request.url)

    console.log(filePath);

    const extname = String(path.extname(filePath).toLowerCase())

    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'text/png'
    }

    const contentType = mimeTypes[extname] || 'application/octet-stream'

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                response.writeHead(404, { "content-type": 'text/html' })
                response.end('404 : File Not found BRoooo')
            }
        }
        else {
            response.writeHead(200, { 'content-type': contentType })
            response.end(content, "utf-8")
        }
    })
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

})