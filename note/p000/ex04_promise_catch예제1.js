const pm = new Promise((resolve, reject) => {
  console.log('Wedsite first Loading...')
  const what = Math.random() < 0.5
  setTimeout(() => {
    if (what) {
      resolve('정상연결 완료, 데이터를 정상적으로 송구신  하였습니다.')
    } else {
      reject(new Error('연결 문제가 생겨음, 통신이상'))
    }
    resolve('정상연결 완료, 데이터를 정상적으로 송구신  하였습니다.')
  }, 2000)
})
pm.then((v) =>
  console
    .log(v)
    .catch((e) => console.log(e))
    .finally(() => {
      console.log('통신이 종료됨')
    })
)
