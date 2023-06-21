/* p.071_Queue_FIFO */
class Queue{
    // 변수 선언자리
    constructor(){
        this.a = []
    }

    front(){
        if(this.a.length === 0){
            console.log('큐가 비었습니다.')
            return
        } else return this.a[0]
    }
    enq(value){
        this.a.push(value)
    }
    deq(){
        if(this.a.length === 0){
            console.log('큐가 비었습니다.')
            return
        }
        // .shift() 맨앞요소를 사라지게 만듬
        this.a.shift()
    }
}
const q = new Queue()
q.enq(1)
q.enq(2)
q.enq(3)
q.enq(4)
q.enq(5)
for(let i = 0; i < 5; i++){
    console.log(q.front()) // a에 있는 데이터중 첫번째를 노출
    q.deq() // 노출 후 삭제
}