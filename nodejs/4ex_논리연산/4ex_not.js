const log = console.log
log(!true) // false
log(!true&&false) // false // !를 우선 연산
/* 우선순위 : ! -> && -> || */
log(true&&log("test-content")||false) // false