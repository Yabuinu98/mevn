const arr = ['사과', '딸기', '포도', '배']
const iter = arr[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: '사과', done: false }  
{ value: '딸기', done: false }  
{ value: '포도', done: false }  
{ value: '배', done: false }    
{ value: undefined, done: true }
*/
