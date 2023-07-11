/* 개인키 보안 구문 */
require('dotenv').config()
const key = process.env.okey

const request = require('request')

const url =
  'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey='
const opt = '&numOfRows=1&pageNo=1&resultType=json'
const totalURL = url + key + opt

request(totalURL, (e, res, body) => {
  const rst = JSON.parse(body)
  const stock = rst.response.body.items.item
  stock.forEach((v, i) => {
    console.log(`종목: ${v.itmsNm}, 시가: ${v.mkp}만원?`)
  })
})
