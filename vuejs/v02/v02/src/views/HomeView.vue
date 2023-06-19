<template>
  <div class="ex1">
    <h1>1. 디렉티브</h1>
    <h2>변수 머스타치 사용하기</h2>
    <h3>안녕하세요{{ name }}입니다. {{ age }}</h3>
    <h3>안녕하세요{{ name2 }}입니다. {{ age2 }}</h3>
    <hr />
    <h2>2. v-on 기능 사용하기</h2>
    <button v-on:click="func1('안녕 v-on을 위한 팝업이야')">클릭버튼</button>
    <button @dblclick="func1('안녕 v-on약자인 @로 팝업띄웟어')">
      더블클릭버튼
    </button>
    <hr />
    <h2>3. v-if조건문 사용하기</h2>
    <h3 v-if="status">제가 보이나요</h3>
    <button v-on:click="status = true">나타내기</button>
    <button @click="status = false">숨기기</button>
    <button @click="status = !status">토글버튼</button>
    <br />
    <button @click="name2 == '슈퍼맨' ? (name2 = hero) : (name2 = '슈퍼맨')">
      {{ name2 == '슈퍼맨' ? '아이언맨' : '슈퍼맨' }}을 부를게요
    </button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      name: '홍길동',
      name2: '슈퍼맨',
      hero: '아이언맨',
      age: 27,
      age2: 50,
      status: false
    }
  },
  methods: {
    func1: function (text) {
      alert(text)
    }
  }
}
</script>
