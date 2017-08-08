         const http = require('http');
         const fs = require('fs');
         const hostname = '127.0.0.1';
         const port = 5000;
         fs.readFile('index.html', (err, html) => {
             if (err) {
                 throw err;
             }
             const server = http.createServer((req, res) => {
                 console.log('User request' + req.url);
                 res.statusCode = 200;
                 //  plain for plaintext
                 res.setHeader('Content-type', 'text/html');
                 res.write(html);
                 res.end();
             });
             server.listen(port, hostname, () => {
                 console.log('Server started on port ' + port);
             });
         });
