const mongoose = require('mongoose')
const Photos = require('./photo.js')
const fs = require('fs')
const path = require('path')
const mongoDB = 'mongodb://127.0.0.1/my_database1'

mongoose.set('strictQuery', false) // 필수 추가
mongoose
  .connect(mongoDB, { useNewUrlParser: true }) // 6.0이후론 자동관리
  .then(() => {
    console.log('Connection successful')
  })
  .catch((err) => {
    console.log(err)
  })

const _path = path.join(__dirname, './photos.json')
const main = async () => {
  const t = JSON.parse(fs.readFileSync(_path).toString())
  console.time('5000건의 데이터삽입')
  Photos.insertMany(t).then(() => {
    console.timeEnd('5000건의 데이터삽입')
  })
}
main()
