let http = require('http');
let https = require('https');
let fs = require('fs');
let querystring = require('querystring');
let unzipper = require('unzipper');


function auth(request, response) {
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    getToken(query.code, (info) => {
        response.write(`<a href=http://localhost:8083/?token=${info.access_token}>publish</a>`);
        // response.write(JSON.stringify(info));
        console.log(info)
        response.end();
    });
}

function getToken(code, callback) {
    let request = https.request({
        hostname: 'github.com',
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.37021ccedc08765e&client_secret=39a72869973e12592a709b39482aa1232a313acb`,
        port: 443,
        method: 'POST'
    }, (response) => {
        let body = '';
        response.on('data', thunk => {
            body += thunk.toString();
        })
        response.on('end', thunk => {
            console.log(body)
            callback(querystring.parse(body))
        })
    })
    request.end();
}

function publish(request, response) {
    let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);
    getUser(query.token, info => {
        if (info.login === 'Gosnails') {
            request.pipe(unzipper.Extract({ path: '../server/public/'}));
            request.on('end', () => response.end('success!'));
        }
    })
    // let outFile = fs.createWriteStream('../server/public/tmp.zip')
    
}

function getUser(token, callback) {
    let request = https.request({
        hostname: 'api.github.com',
        path: `/user`,
        port: 443,
        method: 'GET',
        headers: {
            Authorization: `token ${token}`,
            'User-Agent': 'gosnails-publish'
        }
    }, response => {
        let body = '';
        response.on('data', thunk => {
            body += thunk.toString();
        })
        response.on('end', thunk => {
            callback(JSON.parse(body))
        })
    })
    request.end();
}

http.createServer(function (request, response) {

    if (request.url.match(/^\/auth\?/)) {
        return auth(request, response);
    }
    if (request.url.match(/^\/publish\?/)) {
        return publish(request, response);
    }
    // let outFile = fs.createWriteStream('../server/public/tmp.zip')
    // request.pipe(unzipper.Extract({ path: '../server/public/'}))

}).listen(8082);