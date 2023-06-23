const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000

const _path = path.join(__dirname, '/')
app.use('/', express.static(_path))

/* 저장을 위한 디스크 스토리지 엔진 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, _path) // 경로를 같은 폴더로 지정
  },
  filename: function (req, file, cb) {
    const fix = Buffer.from(file.originalname, 'latin1').toString('utf-8')
    cb(null, fix)
    // cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage }) // 멀터의 옵션을 오브젝트로 설정

app.post('/up', upload.single('ufile'), (req, res) => {
  console.log(req.file)
  res.send(
    `<script>alert('파일업로드 완료');location.replace('index.html')</script>`
  )
  // location.href = document.referrer
})

app.get('/mkdir', (req, res) => {
  const mk = req.query.mk
  fs.mkdirSync(_path + mk, (e) => {
    if (e) {
      console.log(e)
      return
    }
  })
  res.send(
    `<script>alert('${mk}폴더가 생성되었습니다.');location.replace('index.html')</script>`
  )
  // location.href = document.referrer
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 중')
})
