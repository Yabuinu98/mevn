const express = require('express')
const app = express()
const port = 3000

app.get('/search.naver', (req, res) => {
    const equery = req.query.query
    const ewhere = req.query.where
    res.send(`요청하신 쿼리  ${ewhere}와 ${equery}`)
})
app.get('/search.daum/:where/:sm/:fbm/:ie/:query', (req, res) => {
    const obj = req.params
    res.send(`요청하신 쿼리  ${obj.where}와 ${obj.query}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})