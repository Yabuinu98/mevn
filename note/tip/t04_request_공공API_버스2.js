/* 개인키 보안 구문 */
require('dotenv').config()
const key = process.env.okey

/* 버스 2(정거장) */
const request = require('request')
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()

const url = 'http://apis.data.go.kr/6260000/BusanBIMS/bitArrByArsno?serviceKey='
const bstop = '05712'
const opt = '&arsno=' + bstop
const totalURL = url + key + opt
let arr = []

request(totalURL, (e, res, body) => {
  const rst = parser.parse(body)
  const a = rst.response.body.items.item
  console.log(a)
})
