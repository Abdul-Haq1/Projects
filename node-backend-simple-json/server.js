const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');
const url = require('node:url');
const querystring = require('node:querystring');
const figlet = require('figlet')


// create server

// const server = http.createServer((req, res) => {
//     const page = url.parse(req.url).pathname;
//     if (req.url === '/') {
//         fs.readFile('index.html', function (err, data) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//             res.end();
//         })
//     }
// })

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);

    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.end(content);
            }
        )
    }

    else if (req.url === '/otherpage') {
        fs.readFile(
            path.join(__dirname, 'public', 'otherpage.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.end(content);
            }
        )
    }

    else if (req.url === '/otherotherpage') {
        fs.readFile(
            path.join(__dirname, 'public', 'otherotherpage.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.end(content);
            }
        )
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`))