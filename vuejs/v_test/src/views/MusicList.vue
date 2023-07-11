<template>
  <div class="container">
    <h1 class="title">멜론 <mark>실시간</mark> 뮤직리스트(크롤링)</h1>
    <div class="controls">
      <select v-model="slt" class="select">
        <option value="20">20개만</option>
        <option value="30">30개만</option>
        <option value="50">50개만</option>
      </select>
      <button @click="getMusicList" class="button">보기</button>
    </div>
    <table v-html="musicList"></table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      musicList: [],
      slt: ''
    }
  },
  methods: {
    getMusicList() {
      this.musicList = []
      axios.get(`/mml/${this.slt}`).then((res) => {
        this.musicList = res.data
      })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

.title {
  font-size: 35px;
  margin-bottom: 30px;
  padding: 30px;
}

.select {
  padding: 10px;
  margin-right: 10px;
  font-size: 15px;
  width: 100px;
}

.button {
  padding: 12px;
  font-size: 15px;
  background-color: khaki;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  width: 100%;
}
:is(tr, th, td) {
  padding: 10px;
}
</style>
