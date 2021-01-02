const http = require('http');
http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err)
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body);
        console.log('body', body.toString());
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(`<html lang="en">
<head>
    <title>Document</title>
    <style>
        body {
            margin: 0;
        }
        body .box {
            width: 100px;
            height: 100px;
            background-color: red;
        }
        body #box {
            background-color: blue;
        }
     
    </style>
</head>
<body>
        <div id="box" class="box"></div>
</body>

</html>`);
    })
}).listen(8080);

console.log('server started');