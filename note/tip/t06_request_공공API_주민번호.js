/* 개인키 보안 구문 */
require('dotenv').config()
const key = process.env.okey

const request = require('request')

const url =
  'http://apis.data.go.kr/6260000/BusanPopulationStaticService/getPopulationInfo?serviceKey='
const opt = '&pageNo=1&numOfRows=4&resultType=json'
const totalURL = url + key + opt

request(totalURL, (e, res, body) => {
  const rst = JSON.parse(body)
  const 주민번호 = rst.getPopulationInfo.body.items.item
  // console.log(주민번호)
  주민번호.forEach((v, i) => {
    if (v.totPopCnt > 407500) {
      console.log(
        `구군: ${v.gugun}, 해당연도: ${v.rateYear}, 가구수: ${v.houseCnt}, 인구수: ${v.totPopCnt}명, 남성수: ${v.mPopCnt}명, 여성수: ${v.fPopCnt}명`
      )
    }
  })
})
