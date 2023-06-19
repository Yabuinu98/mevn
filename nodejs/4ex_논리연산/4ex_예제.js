const log = console.log

// 1. O
log(null||13||undefined) // 13

// 2. X
log(log(7)||13||log(0)) // 내답: 0 / 정답: 7, 13
/* 오답노트 */
// log(7)||13 false라 flase값인 7이 출력됨
// 13||log(0) 앞에가 true라 더이상 연산x => 13

// 3. X
log(-1&&null&&true) // 내답: false / 정답: null

// 4. O
log(null||13&&6||2) // 6

// 5. X
log(null||13&&log(false)||2) // false, 2