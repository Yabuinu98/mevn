require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = 'd1'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

mongoose.set('strictQuery', false) //권장사항 추가
mongoose
  .connect(mongodbURL, { useNewUrlParser: true }) //
  .then(() => console.log('connection succesful!')) //
  .catch((err) => console.error(err))
const Sensor = require('./p.360_models_sensor.js')
const main = async () => {
  const test1 = await Sensor.aggregate([
    { $match: { temp: { $gte: 26 } } }, //조건설정
    { $group: { _id: '$id', total: { $sum: '$temp' } } }
    //그룹화할 유니크한 _id를 고른 후 그룹 후 모든 temp의 합계를 구함
  ])
  console.log(test1)
  const test2 = await Sensor.aggregate([
    {
      $match: {
        $or: [{ temp: { $gte: 26, $lte: 27 } }, { humi: { $gte: 80 } }]
      }
    }, //조건을 설정
    { $group: { _id: '$id', count: { $sum: 1 } } },
    { $project: { _id: 0, count: 1 } } //return되는 결괏값의 영역을 설정
    //그룹화할 유니크한 _id를 고른 후 그룹 후 모든것들을 셈
  ])
  console.log(test2)
  const test3 = await Sensor.aggregate([
    { $match: { $and: [{ temp: { $eq: 26.2 } }, { humi: { $eq: 85.7 } }] } }, //조건을 설정
    { $sort: { temp: 1 } },
    { $limit: 5 },
    { $project: { _id: 0, temp: 1, time: 1, min: { $minute: '$time' } } },
    { $match: { min: { $eq: 1 } } }
  ])
  console.log(test3)
}
main()
