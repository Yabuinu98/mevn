const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})

/* 풀이 */
// Express는 appHTTP 서버에 제공할 수 있는 함수 핸들러로 초기화됩니다(4행에서 볼 수 있음).
// '/' => 웹 사이트 홈에 도달했을 때 호출되는 경로 핸들러를 정의합니다 .
// http 서버가 포트 3000에서 수신 대기하도록 합니다.
