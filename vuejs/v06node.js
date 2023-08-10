const app = require('express')()
const cors = require('cors')
app.use(cors())

// 특정 도메인
const options = {
  origin: '*', // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200 // 응답 상태 200으로 설정
}

app.use(cors(options))

const memos = [
  '메모1의 내용들',
  '메모2의 내용들',
  '메모3의 내용들',
  '메모4의 내용들',
  '메모5의 내용들'
]
app.get('/memos', (req, res) => {
  res.send(memos)
})

app.listen(3000, () => {
  console.log('listening on port 3000!')
})
