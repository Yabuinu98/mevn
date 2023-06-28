/* async와 await는 한쌍: 차례대로 하기 위해서(비동기를 동기로) */
// 방식 1
const aa = async function () {
  await c()
  await b()
  await a()
}
aa() // c -> b -> a

// 방식 2
const main = async () => {
  await a()
  await b()
  await c()
}
main() // a -> b -> c
