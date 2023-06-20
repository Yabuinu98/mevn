<template>
  <div>
    <h1>EX2. 데이터 양뱡향/단뱡향 바인딩</h1>
    <h2>1. v-model을 사용하여 양뱡향을 구현</h2>
    <span>v-model:</span> <input type="text" v-model="inData" />
    <h3>{{ inData }}</h3>
    <br />
    <button @click="inData = outData">꺼내오기:{{ inData }}</button>
    <hr />

    <h2>2. v-bind와 v-on을 사용하여 단뱡향(2가지로 양뱡향)을 구현</h2>
    <span>v-bind / v-on:</span>
    <input
      type="text"
      v-bind:value="inValue"
      v-on:input="(e) => (inValue = e.target.value)"
    />
    <h3>{{ inValue }}</h3>
    <button @click="setData()">데이터 저장</button>
    <button @click="getData()">데이터 출력</button>
    <hr />

    <h2>3. 문제. localStorage에 입력과 읽기가 가능하도록 버튼을 만들어라</h2>
    <input type="text" v-bind:value="tValue" v-on:input="upValue" />
    <h3>{{ tValue }}</h3>
    <button @click="setData()">데이터 저장</button>
    <button @click="getData()">데이터 출력</button>
  </div>
</template>
<script>
export default {
  name: 'ex2',
  data() {
    return {
      inData: undefined,
      inValue: '읽기만 함',
      tValue: '기본값입니다',
      outData: '꺼내온 값이예요.',
      temp: null,
      arr: []
    }
  },
  methods: {
    upValue: function (e) {
      this.tValue = e.target.value
    },
    setData: function () {
      alert('v-bind 된 값 :' + this.tValue + ' 를 저장함')
      this.temp = this.tValue
      this.tValue = ''
      this.arr.push(this.temp)
      localStorage.setItem('input', JSON.stringify(this.arr))
    },
    getData: function () {
      alert(
        'v-on 으로 저장된 값 불러오기 :' +
          JSON.parse(localStorage.getItem('input'))
      )
      this.tValue = JSON.parse(localStorage.getItem('input'))
    }
  }
}
</script>
<style></style>
