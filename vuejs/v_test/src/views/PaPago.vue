<template>
  <div class="container">
    <h1 class="title">파파고 <mark>번역기</mark> API 이용하기</h1>
    <div class="input-container">
      <select v-model="slt1" class="select-box">
        <option value="ko">한국어</option>
        <option value="en">영어</option>
        <option value="zh-CN">중국어 간체</option>
      </select>
      <input
        id="input-text"
        type="text"
        v-model="txt"
        class="input"
        placeholder="번역하실 문장을 입력해주세요."
      />
      <button @click="ppg" class="button">번역하기</button>
    </div>
    <div class="output-container">
      <select v-model="slt2" class="select-box">
        <option value="ko">한국어</option>
        <option value="en">영어</option>
        <option value="zh-CN">중국어 간체</option>
      </select>
      <h4>{{ rst }}</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      rst: '언어 번역을 합니다.',
      txt: '',
      slt1: '',
      slt2: ''
    }
  },
  methods: {
    ppg() {
      this.rst = '번역 중...'
      // 동일한 언어를 선택한 경우에는 번역 요청을 보내지 않음
      if (this.slt1 === this.slt2) {
        this.rst = this.txt
        return
      }
      const params = {
        input: this.txt,
        source: this.slt1,
        target: this.slt2
      }
      axios
        .get('/ppg', { params })
        .then((res) => {
          this.rst = res.data
        })
        .catch((error) => {
          console.error(error)
          this.rst = '번역 에러 발생'
        })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 50px auto;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 35px;
  margin-bottom: 30px;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.select-box {
  border: 1px solid darkgray;
  padding: 10px;
  margin-right: 10px;
}

.input {
  border: 1px solid darkgray;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 15px;
  width: 500px;
}

.button {
  padding: 10px;
  font-size: 15px;
  background-color: khaki;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

h4 {
  font-size: 30px;
  margin-top: 30px;
}
</style>
