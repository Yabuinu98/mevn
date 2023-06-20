/* p.58 includes(요소확인 2) */
const a = [1, 2, 3, 4, 5]

// includes
console.log(a.includes(3)) // true
console.log(a.includes(6)) // false

// findIndex
console.log(a.findIndex(e => e===3)) // 2
console.log(a.findIndex(e => e===6)) // -1