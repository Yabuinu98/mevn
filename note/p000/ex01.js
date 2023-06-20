/* reduce 예제 1 */
const arr = Array(100).fill(0).reduce((a,c,i,arr) => {
    arr[i] = i+1 
    return arr
}, 0)
console.log(arr)
URL("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce")