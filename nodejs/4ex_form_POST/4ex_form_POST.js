const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './4ex_dist')

/* post해석 */
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', express.static(_path))
app.use(logger('tiny'))
app.post('/info', (req, res) => {
    const obj = req.body
    console.log(obj)
})

app.listen(PORT, () => {
    console.log(`너의 서버는? ${PORT}!`)
})
