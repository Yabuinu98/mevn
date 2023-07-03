/* 개인키 보안 구문 */
require('dotenv').config()
const key = process.env.okey

const request = require('request')

const url =
  'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey='
const opt = '&sidoName=%EB%B6%80%EC%82%B0&returnType=json'
const totalURL = url + key + opt

request(totalURL, (e, res, body) => {
  const rst = JSON.parse(body)
  const junpo = rst.response.body.items
  junpo.forEach((v, i) => {
    console.log(
      `지역: ${v.stationName}, 오존: ${v.o3Value}, 미세먼지: ${v.pm10Value}`
    )
  })
})
