/* 객체의 value를 쉽게 담기 */
const d = () => {
    return {
        "name" : "최주원",
        "job" : "마케터"
    }}
const { name } = d()
console.log(name) // 최주원

const a2 = [1, 2]
const [b, c] = a2
console.log(b, c) // 1 2

const a3 = {"nickname": "큰돌", "노래" : "자취방좋아"}
const {nickname, 노래} = a3
console.log(nickname, 노래) // 큰돌 자취방좋아