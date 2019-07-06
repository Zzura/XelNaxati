
const http = require('http');

var server = http.createServer((req, res) => {
    res.end('hello world');
})

server.listen(
    69,
    '127.0.0.1',
    err => {
        if (err){
            console.error(err);
        }else{
            console.log('rock');
        }
    }
)