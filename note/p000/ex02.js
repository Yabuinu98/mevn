/* reduce 예제 2 */

// 선생님 풀이(1 ~ 10까지만)
const arr2 = Array(10).fill(0).reduce((a,c,i,arr) => {
    c=i+1
    console.log(`${c} + ${a} = ${a+c}`)
    return a+c
}, 0)

// 1 ~ 20까지의 수를 배열에 담아라
const arr = Array(20).fill(0).reduce((a,c,i,arr) => {
    arr[i] = i+1 
    return arr
}, 0)
console.log(arr)

// 담은 수를 모두 더하라
const a = arr.reduce((a,c,i) => a + c)
console.log(a) // 210

/*
1. reduce초기값을 안줘서 0 + 0 => 반환값이 0이면 스킾하는듯
array = [0, 1, 2, 3, 4]
callback	accumulator	currentValue	currentIndex	반환 값
1번째 호출	      0	          1	               1	        1
2번째 호출	      1	          2                2		    3
3번째 호출	      3	          3	               3		    6
4번째 호출	      6 	      4	               4		    10

2. 반대로 reduce초기값을 10으로 주면 10 + 0 => 반환값이 10이므로 5번 콜백함!!!
*/