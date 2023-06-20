/* p.57 find, findIndex(요소확인 1) */
const 조건 = e => e.height >= 180
const 친구들 = [
    {"name" : "박종선", "height" : 173},
    {"name" : "연제호", "height" : 175},
    {"name" : "윤성용", "height" : 180},
    {"name" : "최주원", "height" : 190}
]
const 키큰친구 = 친구들.find(조건)
console.log(키큰친구) // { name: '윤성용', height: 180 }
const 키큰친구인덱스 = 친구들.findIndex(조건)
console.log(키큰친구인덱스) // 2

/* 부가설명 */
// 최주원도 뽑혀야하지만 find와 findIndex는 조건을 만족하는 순간 종료하는 성격이 특징이다!!!
// 아무것도 없을 시 반환값 => find: undefined / findIndex: -1