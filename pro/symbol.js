const obj = {}

const sb1 = Symbol()
const sb2 = Symbol('hi')
const sb3 = Symbol('hellow')

obj[sb1] = '첫번째 심볼'
obj[sb2] = '두번째 심볼 hi'
obj[sb3] = '세번째 심볼 hellow'

console.log(obj)
console.log(obj[sb2])
console.log(Array.prototype.Symbol.iterator)
