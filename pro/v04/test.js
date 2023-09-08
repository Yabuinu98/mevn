const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()
// 크롤링할 멜론 차트 페이지의 URL
const melon_url = 'https://www.melon.com/chart/index.htm'

// 3. 멜론챠트
const songlist = []
let year, hour
axios.get(melon_url).then((res) => {
  const $ = cheerio.load(res.data)
  year = $('.year').text()
  hour = $('.hour').text()

  $('.ellipsis.rank01').each(function () {
    const artist = $(this)
      .parent()
      .find('.ellipsis.rank02')
      .find('a')
      .first()
      .text()
      .trim()
    const title = $(this).find('a').text().trim()
    songlist.push({ title, artist })
  })
})

app.get('/mml/:slt', (req, res) => {
  const slt = req.params.slt * 1
  let list = ``
  list += `<tr style="border: 1px solid black;"><th colspan="3" style="border: 1px solid black;">기준: ${year} / ${hour}</th></tr>`
  list += `<tr style="border: 1px solid black;"><td style="border: 1px solid black;">순위</td><td style="border: 1px solid black;">제목</td><td style="border: 1px solid black;">아티스트</td></tr>`
  songlist.slice(0, slt).forEach((song, index) => {
    list += `<tr style="border: 1px solid black;"><td style="border: 1px solid black;">${
      index + 1
    }위</td><td style="border: 1px solid black;">${
      song.title
    }</td><td style="border: 1px solid black;">${song.artist}</td></tr>`
  })
  res.end(list)
})

app.listen(3000, () => {
  console.log('3000서버에서 서버 동작중')
})
