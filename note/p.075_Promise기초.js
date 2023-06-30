/* p.75 Promise */
// const a = () => {
//     // resolve(res) : 성공했을때 
//     // reject(rej) : 실패했을때 
//     return new Promise((res, rej) => {})
// }

const b = (c = '나가자') => {
    return new Promise((resolve, rej) => {
        setTimeout(() => {
            // resolve는 promis안에서 return과 같은 역할은 한다!!!
            resolve(`${c}`)
        }, 1000)
    })
}
console.log(b()) // Promise { <pending> }

b().then((result) => {
    console.log(result)
    return b('싸우자')
}).then((result) => {
    console.log(result)
    return b('이기자')
}).then((result) => {
    console.log(result)
})