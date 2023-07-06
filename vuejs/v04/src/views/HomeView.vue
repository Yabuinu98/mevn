<template>
  <h1>VueJs에서 MongoDB로 <mark>CRUD</mark> 실습하기</h1>
  <div>
    <hr />
    <h3>MongoDB로 <mark>C</mark>reate 하기</h3>
    제목: <input type="text" v-model="title1" /> | 날짜:
    <input type="date" v-model="date1" /><br />
    내용:
    <input
      type="text"
      style="width: 290px; margin-top: 5px"
      v-model="content1"
    />
    <button @click="dbc">전송</button>
    <h4>{{ data1 }}</h4>
    <hr />
    <hr />
    <h3>MongoDB로 <mark>R</mark>ead 하기</h3>
    날짜:<input type="date" v-model="date2" />
    <button @click="dbr">읽어오기</button>
    <h4>{{ data2 }}</h4>
    <hr />
    <hr />
    <h3>MongoDB로 <mark>U</mark>pdate 하기</h3>
    제목: <input type="text" v-model="title3" /> | 날짜:
    <input type="date" v-model="date3" /><br />
    내용:
    <input
      type="text"
      style="width: 290px; margin-top: 5px"
      v-model="content3"
    />
    <button @click="dbu">1개 수정하기</button>
    <h4>{{ data3 }}</h4>
    <hr />
    <hr />
    <h3>MongoDB로 <mark>D</mark>elete 하기</h3>
    날짜: <input type="date" v-model="date4" />
    <button @click="dbd">1개 삭제하기</button>
    <h4>{{ data4 }}</h4>
    <hr />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      data1: '데이터를 DB에 전송합니다.',
      data2: '해당 날짜의 데이터를 읽어옵니다.',
      data3: '해당 날짜의 데이터를 수정합니다.',
      data4: '해당 날짜의 데이터를 삭제합니다.',
      title1: '',
      title3: '',
      date1: new Date().toISOString().substring(0, 10),
      date2: new Date().toISOString().substring(0, 10),
      date3: new Date().toISOString().substring(0, 10),
      date4: new Date().toISOString().substring(0, 10),
      content1: '',
      content3: ''
    }
  },
  methods: {
    dbc: function () {
      this.data1 = 'DB에 저장중...'
      axios
        .post('/dbc', {
          title: this.title1,
          content: this.content1,
          date: this.date1
        })
        .then((res) => (this.data1 = res.data))
    },
    dbr: function () {
      this.data2 = 'DB데이터 로딩중...'
      axios.get('/dbr/' + this.date2).then((res) => (this.data2 = res.data))
    },
    dbu: function () {
      console.log('ㅂ2')
    },
    dbd: function () {
      this.data4 = 'DB데이터 삭제중...'
      axios.get('/dbd/' + this.date4).then((res) => (this.data4 = res.data))
    }
  }
}
</script>
<style scoped>
input {
  display: inline-block;
  text-align: left;
  border-style: none;
  border-bottom: 1px solid black;
  margin: 5px;
}
</style>
