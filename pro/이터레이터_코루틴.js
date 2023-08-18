const arr = ['사과', '딸기', '포도', '배']
const iter = arr[Symbol.iterator]()
console.log(iter.next())
console.log('쉬엇다가자1')
console.log(iter.next())
console.log('쉬엇다가자2')
console.log(iter.next())
console.log('쉬엇다가자3')
console.log(iter.next())
console.log('쉬엇다가자4')
console.log(iter.next())
/*
{ value: '사과', done: false }  
쉬엇다가자1
{ value: '딸기', done: false }  
쉬엇다가자2
{ value: '포도', done: false }  
쉬엇다가자3
{ value: '배', done: false }    
쉬엇다가자4
{ value: undefined, done: true }
*/
