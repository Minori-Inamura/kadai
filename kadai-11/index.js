const http = require("http")
const url = require('url')

const server = http.createServer((request, response) => {

    const res = response;
    //const 
   // response.setHeader('Access-Control-Allow-Origin',)
    res.write('hello')
	res.end()
})
server.listen(3000)
console.log('Listening port 3000…')