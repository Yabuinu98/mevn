<template>
  <div>
    <h1>5. 속성 예제</h1>
    <!-- readonly = 수정불가 -->
    읽기전용: <input type="text" :value="item" readonly /><br />
    수정가능: <input type="text" v-model="item" />
    <div>{{ item }}</div>
    <hr />
    <input type="text" placeholder="입력하세요." v-model="data" />
    <!-- :disabled="boolean 조건" => boolean 조건이 true이면 미실행
    그러므로 조건을 실행하지 말아야할 조건으로 지정 -->
    <button :disabled="data === ''" @click="send">전송버튼</button>
    <button :disabled="data === ''" @click="fn">최신전송버튼</button>
    <h3>{{ vs }}</h3>
  </div>
</template>
<script setup>
const vs = '최신문법이래요'
const fn = function () {
  alert('최신문법으로 전송')
}
</script>
<script>
export default {
  data() {
    return {
      item: '안녕',
      data: ''
    }
  },
  methods: {
    send: () => {
      alert('done')
    }
  }
}
</script>
<style scoped>
input {
  color: blue;
  font-size: 1.2em;
  border: none;
  border-bottom: 1px solid black;
}
</style>
