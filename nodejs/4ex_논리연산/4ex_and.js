const log = console.log
log(false&&false) // false
log(true&&false) // false
log(false&&true) // false
log(true&&true) // true
log(true&&true&&log("test-content")) // test-content(undefined)
log(true&&log("test-content")&&true) // test-content(undefined)
log(false&&333) // false
log(true&&333) // 333

/* 풀이 */
// 앞&&뒤 앞이 false이면 false를 출력(뒤까지 연산을 하지않는다)
// 앞&&뒤 앞이 true이여야만 뒤를 출력