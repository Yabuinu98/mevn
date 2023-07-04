const axios = require('axios')
const cheerio = require('cheerio')
// 크롤링할 멜론 차트 페이지의 URL을 변수 url에 할당합니다.
const url = 'https://www.melon.com/chart/index.htm'

// axios를 사용하여 멜론 차트 페이지의 HTML 데이터를 가져옵니다.
axios.get(url).then((res) => {
  // cheerio를 사용하여 HTML 데이터를 파싱합니다.
  const $ = cheerio.load(res.data)
  const year = $('.year').text()
  const hour = $('.hour').text()
  const songlist = []

  $('.ellipsis.rank01').each(function () {
    const artist = $(this)
      // .ellipsis.rank01 클래스를 가진 요소의 부모 요소에서
      .parent()
      // .ellipsis.rank02 클래스를 가진 요소를 찾아
      .find('.ellipsis.rank02')
      // 첫 번째 <a> 태그의 텍스트를 가져와 artist 변수에 저장합니다
      .find('a')
      .first()
      .text()
      .trim()

    // .ellipsis.rank01 클래스를 가진 요소 내에서 <a> 태그의 텍스트를 가져와 title 변수에 저장합니다.
    const title = $(this).find('a').text().trim()
    songlist.push({ artist, title })
  })

  console.log(`현재: ${year} / ${hour}`)
  // songlist 배열에서 상위 20개의 노래 정보를 출력합니다.
  songlist.slice(0, 20).forEach((song, index) => {
    console.log(`${index + 1}위: ${song.artist} - ${song.title}`)
  })
})
