const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);

    if (page == '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (page == '/api') {
        if ('getResult' in params) {
            if (params['getResult'] == true) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    name: "You Win.",
                }
                res.end(JSON.stringify(objToJson));
            }
            else if (params['getResult'] == false) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const objToJson = {
                    name: "You Lost!",
                }
                res.end(JSON.stringify(objToJson));
            }
        }
    }
    else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    }

}).listen(8000)


