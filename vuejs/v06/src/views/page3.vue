<template>
  <div>
    <h1>Axios로 Memo의 외부데이터 가져오기</h1>
    <button @click="data">가져오기</button>
    <ul>
      <li v-for="m in memos" :key="m">{{ m }}</li>
    </ul>
  </div>
</template>
<script setup>
/* reactive */
// reactive로 변수처럼 감싸주면 실시간 반영되는 변수를 만들 수 있음
import { reactive } from 'vue'
import axios from 'axios'
axios.get('http://localhost:3000/memos').then((res) => {
  console.log(res)
  const memo = res.data
  memo.forEach((v) => {
    memos.push(v)
  })
})
const memos = reactive([])
// const name = '반가워 스크립트 setup구문이야'
const data = () => {
  memos.push('추가됨')
  console.log(memos)
}
</script>
<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 15px;
  margin: 5px;
  border: 3px solid red;
  background-color: beige;
}
</style>
