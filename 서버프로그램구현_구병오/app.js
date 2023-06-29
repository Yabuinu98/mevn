const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const multer = require('multer')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './dist')
/* multer */
const __path = path.join(__dirname, '/')
app.use('/', express.static(__path))

/* 5번문제 => GET방식(쿼리스트링): URL 서버테스트 부분 */
// 테스트구문 => /test?id=77&name=홍길동(재대로 작동)
app.get('/test', (req, res) => {
  let iD = req.query.id
  let Name = req.query.name
  let list = ``
  list += `<p>아이디 : ${iD}</p>`
  list += `<p>이름 : ${Name}</p>`
  res.send(list)
})

/* 6번문제 => POST방식(fs.writeFile): 고객 정보 불러오기 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(_path))
app.use(logger('tiny'))
app.post('/info', (req, res) => {
  const obj = req.body
  console.log(obj)
  fs.writeFile(
    path.join(_path, '..', obj.name + '.txt'),
    '이름 : ' + obj.name + '\n' + '문의사항 : ' + obj.content,
    (e) => {
      let list = ``
      list += `<script>alert('${obj.name}파일로 저장합니다.')</script>`
      list += `<p>이름 : ${obj.name}</p>`
      list += `<p>나이 : ${obj.age}</p>`
      list += `<p>문의사항 : ${obj.content}</p>`
      res.send(list)
    }
  )
})

/* 7-1번 => GET방식(fs.readdir): /download에 업로드한 파일들보기 */
app.get('/download', (req, res) => {
  fs.readdir(path.join(_path, '..'), 'utf-8', (err, data) => {
    let list = `<ul>`
    data.forEach((v) => {
      if (v.indexOf('.') === -1) {
        list += `<li><a href="#">[${v}]</a></li>`
      } else {
        list += `<li><a href="/${v}">${v}</a></li>`
      }
    })
    list += `</ul>`
    res.send(list)
  })
})

/* 7-2번 => /download에 나온 리스트의 .txt파일의 내용을 볼수있으며 한글이 깨지지 않기 */
multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __path)
  },
  filename: function (req, file, cb) {
    const fix = Buffer.from(file.originalname, 'latin1').toString('utf-8')
    cb(null, fix)
  }
})

app.listen(PORT, () => {
  console.log(`너의 서버는? ${PORT}!`)
})
