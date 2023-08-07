<template>
  <!-- 모달창 부분 -->
  <div class="black-bg" v-if="modal" @click="modal = false">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <div class="in-text">
        <p>분류코드: {{ data[datail].id }}</p>
        <p>타이틀: {{ data[datail].title }}</p>
        <p>위치정보: {{ data[datail].image }}</p>
        <p>내용: {{ data[datail].content }}</p>
        <p>가격: {{ data[datail].price.toLocaleString(ko - KR) }}원</p>
      </div>
    </div>
  </div>
  <!-- // 모달창 부분 -->

  <div>
    <div class="menu">
      <a v-for="(v, i) in menubar" :key="i">{{ v }}</a>
    </div>
    <div id="container">
      <div class="card" v-for="(e, j) in products" :key="j">
        <div @click=";[(modal = true), (datail = ch(j))]">
          <h3>{{ '여행지' + e }}</h3>
          <img :src="'/img0' + ((j % 6) + 1) + '.jpg'" alt="" class="imgs" />
          <h4>{{ data[j].title }}</h4>
          <p>{{ data[j].price.toLocaleString(ko - KR) }}원</p>
        </div>
        <button @click="inc(j)">추천</button><span>추천수: {{ pick[j] }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import data from './assets/data.js'
export default {
  data() {
    return {
      datail: 0,
      data,
      modal: false,
      pick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      menubar: ['Home', 'Location', 'Information', 'About'],
      products: data.length
    }
  },
  methods: {
    inc(i) {
      this.pick[i]++
    },
    ch(e) {
      return e
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.black-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  position: relative;
  margin: auto;
  width: 50%;
  height: 400px;
  top: 20%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}
.card:hover {
  background-color: rgb(165, 165, 255);
}
div {
  box-sizing: border-box;
}
.card {
  width: 30%;
  min-width: 320px;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 15px;
}
.imgs {
  width: 85%;
  border-radius: 10px;
}
.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  text-decoration-line: none;
}
</style>
