/* 광안리해수욕장 파고를 보자!!! */
/* 개인키 보안 구문 */
require('dotenv').config()
const key = process.env.okey

const request = require('request')

const url =
  'http://apis.data.go.kr/1360000/BeachInfoservice/getWhBuoyBeach?serviceKey='
const opt = '&dataType=JSON&beach_num=306&searchTime=202306011700'
const totalURL = url + key + opt

request(totalURL, (e, res, body) => {
  const rst = JSON.parse(body)
  console.log(rst)
  const Guangri = rst.response.body.items.item[0]
  console.log(
    `해수욕장코드: ${Guangri.beachNum}, 날짜: ${Guangri.tm}, 파도높이: ${
      Guangri.wh * 100
    }cm`
  )
})
