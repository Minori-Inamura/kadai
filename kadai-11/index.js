const http = require("http")
const url = require('url')

// 手順２. 次のコマンドでサーバーを起動
// node kadai-11/index.js

// 手順3. ブラウザでおみくじをひいて結果を確認

const server = http.createServer((request, response) => {
    const res = response;

    res.setHeader('Access-Control-Allow-Origin', '*');

    const num = Math.random()
    if(num < 0.5){
        res.write('吉です')
    } else if (num < 0.8){
        res.write('中吉です')
    } else if (num < 0.95){
        res.write('大吉です')
    } else {
        res.write('凶')
    }

	res.end()
})
server.listen(4000)
console.log('Listening port 4000…')