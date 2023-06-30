/* async(Promise객체)에서 발생한 throw에러를 catch가 놓친 상황 */
async function testErr() {
  console.log('에러 던지기를 시작합니다.')
  throw new Error('testErr에서 고의로 에러를 발생시켰습니다.')
}

function main() {
  try {
    console.log('========try의 시작=========')
    testErr() // throw로 고의 예외 발생
    console.log('========try의 끝=========')
  } catch (e) {
    console.log('========catch의 시작=========')
    console.log(e)
    console.log('========catch의 끝=========')
  } finally {
    console.log('========finally의 시작=========')
    console.log('========finally의 끝=========')
  }
}
main()
