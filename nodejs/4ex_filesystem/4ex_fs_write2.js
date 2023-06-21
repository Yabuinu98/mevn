const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()
const _path = path.join(__dirname, '/')

app.use(express.static(_path))
app.use(logger('tiny'))

/* post해석 */
app.use(express.json())
app.use(express.urlencoded({extended:true}))

/* GET방식 */
// app.get('/data', (req, res) => {
//     const id = req.query.id
//     const pw = req.query.pw
    // fs.writeFile(_path + id + '.txt', pw, (e) => {
    //     if(e)console.log(e)
    //     console.log('파일 작성 완료됬습니다.')
    //     res.send(`<script>alert('${id}파일로 저장합니다.');
    //     history.go(-1)</script>`)
    // })
// })



/* POST방식 */
app.post('/data', (req, res) => {
    const obj = req.body
    // fs.writeFile(파일명, 대입값, 콜백)
    fs.writeFile(_path + obj.id + '.txt', obj.pw, (e) => {
        let list = ``
        list += `<script>alert('${obj.id}파일로 저장합니다.')</script>`
        list += `<p>입력하신 ID는 ${obj.id}</p>`
        list += `<p>입력하신 PW는 ${obj.pw}</p>`
        list += `<p>입력하신 Radio는 ${obj.radio}</p>`
        list += `<p>입력하신 Select는 ${obj.select}</p>`
        list += `<p>오늘은 ${obj.date}</p>`
        res.send(list)
    })
    // fs.appendFile(_path + obj.id + '.txt', 'hello world!!!', function (err) {
    //     if (err) throw err;
    // });
})

/* /list의 경로에는 파일목록 표시 */
app.get('/list', (req, res) => {
    fs.readdir(_path, 'utf-8', (err, data) => {
        let list = `<ul>`
        data.forEach(v => {
            if(v.indexOf('.') === -1){
                list += `<li><a href="#">[${v}]</a></li>`
            } else{
                list += `<li><a href="/${v}">${v}</a></li>`
            }
        })
        list += `</ul>`
        res.send(list)
    })
})

app.listen(3000, () => {console.log('listening on port 3000')})