/* 개인키 보안 구문 */
require('dotenv').config()
const key = process.env.okey

/* 버스 1 */
const request = require('request')
// const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()

const url = 'http://apis.data.go.kr/6260000/BusanBIMS/busStopList?serviceKey='
const bstop = encodeURI('서면역') // <-> decodeURL
const opt = '&pageNo=1&numOfRows=10&bstopnm=' + bstop
const urlTotal = url + key + opt
console.log(urlTotal)

request(urlTotal, (e, res, body) => {
  // const rst = JSON.parse(body)
  const rst = parser.parse(body)
  const _ = rst.response.body.items
  console.log(_)
  // const junpo = rst.response.body.items[4]
  // console.log(junpo.stationName, junpo.o3Value, junpo.coValue, junpo.pm10Value)
})
