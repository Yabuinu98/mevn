require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
// console.log(USER) // 환경변수 확인

const DB = 'd1'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

// mongoose.set('useFindAndModify', false)
mongoose.set('strictQuery', false)
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => {
    console.log('connection successful !!')
  })
  .catch((e) => console.log(e))

const schema_ori = require('./schema.js')
module.exports = schema_ori
