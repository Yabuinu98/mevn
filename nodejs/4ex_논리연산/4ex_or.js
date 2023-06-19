/* boolean */
console.log(false||false) // false
console.log(false||false||false||false||false) // false
console.log(false||false||false||true||false) // true => true 찾기가 되버림
console.log(null||undefined||0||false||false) // false => null = undefined = 0 = false
console.log(false||false||1||false||false) // 1 => 1 = true
console.log(false||false||1||false||0) // 1
console.log(false||false||0||-2||false) // -2
console.log(true||false) // true
console.log(false||true) // true
console.log(true||true) // true

/* boolean 외 */
console.log(null||null) // null
console.log(true||null) // true
console.log(false||null) // null
console.log(null||true) // true
console.log(null||false) // false
console.log(true||console.log("test-content")) // true
console.log(false||console.log("test-content")) // test-content

/* 풀이 */
// 앞||뒤 앞이 ture이면 true를 출력(뒤까지 연산을 하지않는다)