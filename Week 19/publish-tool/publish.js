let http = require('http');
let fs = require('fs');
let archiver = require('archiver');
let querystring = require('querystring');
let child_process = require('child_process');

child_process.exec(`start chrome https://github.com/login/oauth/authorize?client_id=Iv1.37021ccedc08765e`)



http.createServer(function (request, response) {
    let arr = request.url.match(/^\/\?([\s\S]+)$/);
    if (arr) {
        let query = querystring.parse(arr[1]);
        publish(query.token);
        response.end();
    }

}).listen(8083);


function publish(token) {
    let request = http.request({
        hostname: "127.0.0.1",
        port: 8082,
        method: "POST",
        path: `/publish?token=${token}`,
        headers: {
            'Content-Type': 'application/octet-Stream',
        }
    }, response => {
        console.log(response)
    })

    let archive = archiver('zip', {
        zlib: {
            level: 9
        }
    })

    archive.directory('./sample/', false)
    archive.finalize();

    archive.pipe(request);
}