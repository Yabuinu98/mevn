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

/* 일반 비동기처리 */
const testGo = async () => {
  console.time('일반비동기처리')
  try {
    await test('코딩', 3000)
    await test('Coding', 2000)
    await test(123, 1700)
    await test('자바스크립트', 1000)
  } catch (e) {
    console.log(e)
  }
  console.timeEnd('일반비동기처리')
}
testGo()
