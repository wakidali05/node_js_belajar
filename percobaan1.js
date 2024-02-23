const http = require('http')

http.createServer( function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write('text berasal dari node.js')
        res.end()
    } else if (req.url == '/kontak'){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write('halaman kontak')
        res.end()
    } else {
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write('halaman belum tersedia')
        res.end()
    }
}).listen(3000)
console.log('server active, akses http://localhost:3000')

// tambah teks sebagai ujicoba pull req