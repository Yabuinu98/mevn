const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

const app = express()
const PORT = 3000
const _path = path.join(__dirname, '/')
// console.log(_path)
// app.use('/', express.static(_path))
app.use(logger('tiny'))
app.get('/files', (req, res) => {
    // .readdir(경로 파일형식, 콜백함수)
    fs.readdir(_path, 'utf-8', (err, data) => {
        let list = ``
        for(let i = 0; i < data.length; i++){
            list += `<p style="font-size: 18px; color: red">${data[i]}</p>`
        }
        res.send(list)
    })
})

app.listen(PORT, () => {
    console.log('listening on port' + PORT)
})