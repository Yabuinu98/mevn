const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
  const id=req.query.id
  const arr=['my life is eggs','the Avengers are back','javascript is good enough','a','b']
  let list=``
  list+=`<body>`
  list+=`<h1>구병오</h1>`
  for(let i=0;i<arr.length;i++){
    list+=`<a href="/user?id=${i}">${i}번째 버튼<a><br>`
  }
  list+=`<h1>${arr[+id]??'버튼을 눌러주세요.'}</h1>`
  list+=`</body>`
  
  res.send(list)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})