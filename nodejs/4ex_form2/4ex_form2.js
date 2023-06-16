const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const PORT = 3000

const _path = path.join(__dirname, './4ex_dist')
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))
app.get('/data', (req, res) => {
    const name = req.query.name
    const age = req.query.age
    const gender = req.query.gender
    const content = req.query.content
    const date = req.query.date
    let list = ``
    list += `<body style="background-color: beige;">`
    list += `<div style="display: flex; align-items: center; flex-direction: column;">`
    list += `<h2><mark>${name}</mark>님 어서오세요</h2>`
    list += `<p style="background-color: red; color: white; font-weight: bold; display: inline-block;">${name}님의 개인정보</p>`
    list += `<table style="border-collapse: collapse; text-align: center;">`
    list += `<tr style="border: 1px solid black;">
    <td style="border: 1px solid black; background-color: plum;">나이</td>
    <td style="border: 1px solid black;">${age}</td></tr>`
    list += `<tr style="border: 1px solid black;">
    <td style="border: 1px solid black; background-color: plum;">성별</td>
    <td style="border: 1px solid black;">${gender}</td></tr>`
    list += `<tr style="border: 1px solid black;">
    <td style="border: 1px solid black; background-color: plum;">자기소개</td>
    <td style="border: 1px solid black;">${content}</td></tr>`
    list += `<tr style="border: 1px solid black;">
    <td style="border: 1px solid black; background-color: plum;">가입일</td>
    <td style="border: 1px solid black;">${date}</td></tr>`
    list += `</table>`
    list += `</div>`
    list += `</body>`
    res.send(list)
})

app.listen(PORT, () => {
    console.log(`너의 서버는? ${PORT}!`)
})
