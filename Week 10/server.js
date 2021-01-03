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
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(`<html lang="en">
<head>
    <title>Document</title>
    <style>
        body {
            margin: 0;
            background-color: rgb(30, 100, 255)
        }
        #container {
            width: 500px;
            height: 300px;
            display: flex;
            background-color: rgb(80, 80, 80);
        }
        .box1 {
            width: 200px;
            height: 100px;
            background-color: rgb(0, 255, 0);
        }
        .box2 {
            flex: 1;
            height: 300px;
            background-color: rgb(255, 0, 0);
        }
     
    </style>
</head>
<body>
    <div id="container">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
</body>

</html>`);
    })
}).listen(8080);

console.log('server started');