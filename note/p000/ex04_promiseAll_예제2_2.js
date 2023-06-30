/* Promis.all 예제 */

/* 에러발생 처리일때 */
function test(text, time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      typeof text === 'string' ? res('스트링입니다.') : rej('파악이 안됨니다.')
    }, time)
    console.log(text)
  })
}

/* Promise.all 에러 처리 */
const testGo = async () => {
  console.time('일반비동기처리')
  try {
    await test('시작', 1000)
    await Promise.all([
      test('코딩', 3000),
      test('Coding', 2000),
      test('자바스크립트', 1000),
      test(123, 1700)
    ])
    await test('난별종', 500)
  } catch (e) {
    console.log(e)
  }
  console.timeEnd('일반비동기처리')
}
testGo()
