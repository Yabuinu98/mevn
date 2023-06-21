const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()
const _path = path.join(__dirname, '/')
app.use(express.static(_path))
app.use(logger('tiny'))

// 동작테스트
const file = 'test1'
const data = '와 테스트파일 작성됫다'
fs.writeFile(__dirname + '/' + file + '.txt', data, (e) => {
    if(e)console.log(e)
    console.log('파일 작성 완료됬습니다.')
})
app.get()

app.listen(3000, () => {console.log('listening on port 3000')})