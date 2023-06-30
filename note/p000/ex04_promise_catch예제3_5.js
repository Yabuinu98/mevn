/* Promise에서 발생한 reject를 async-await로 catch하기 */
function testErr() {
  console.log('에러 던지기를 시작합니다.')
  return new Promise((resolve, reject) => {
    reject(new Error('제가 표시한 에러입니다.'))
  })
}

async function main() {
  try {
    console.log('========try의 시작=========')
    await testErr() // throw로 고의 예외 발생
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
