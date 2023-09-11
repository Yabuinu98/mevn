const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://kormedi.com/healthnews/').then((response) => {
  const $ = cheerio.load(response.data)

  // 원하는 데이터를 포함한 HTML 요소를 선택합니다.
  const targetElement = $(
    '.article__list_wrapper  type-post format-standard has-post-thumbnail   listing-item listing-item-blog  listing-item-blog-2 main-term-243 bsw-12'
  ) // 여기서 'your-target-selector'를 실제 선택자로 바꿔야 합니다.

  // 선택한 요소에서 텍스트 또는 속성을 추출합니다.
  const extractedData = targetElement.text() // 또는 .attr('속성명')을 사용하여 속성값을 추출할 수도 있습니다.

  // 추출한 데이터 출력
  console.log(extractedData)
})
