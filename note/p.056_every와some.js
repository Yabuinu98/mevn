/* p.56 every, some */
const numbers = [1, 3, 5, 4]
const isAllOdd = numbers.every(e => e % 2) // false 모든게 짝수냐 => false
const isSomeOdd = numbers.some(e => e % 2) // true 몇개가 짝수냐 => true
console.log(isAllOdd, isSomeOdd)