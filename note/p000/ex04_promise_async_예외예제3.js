/* Promise 는 reject로 예외 처리를 할 수 있다. */
function promErr() {
  return new Promise((resolve, reject) => {
    reject('Promise의 예외처리입니다.')
  })
}
// const resultP = promErr().catch((e) => {
//   console.log(e)
// })

/* async 는 throw로 예외 처리를 할 수 있다. */
async function asyncErr() {
  throw 'async의 예외처리입니다.'
  console.log(new Date())
}
// const resultA = asyncErr().catch((e) => {
//   console.log(e)
// })

try {
  promErr()
} catch (e) {
  console.log(e, 'promise rejecked가 발생하였습니다.')
}
/* 오류문구를 띄우지 못함 */
// 이유는 : promise는 비동기를 동기로 처리했냐에 초점을 맞추지 내용이 오류를 띄웠냐 안띄웠냐는 신경을 안쓰기 때문
