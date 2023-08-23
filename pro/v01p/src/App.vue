<template>
  <nav>
    <router-link to="/">Home 페이지로</router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <hr />
  <nav>
    <router-link
      :to="{
        name: 'Query', // 라우터의 name과 같아야함
        query: {
          name: 'Query 선언적 방식',
          data: 'Query 선언적 방식으로 전송된 data',
          num: 1111
        }
      }"
      >Query 선언적 방식 링크</router-link
    >
  </nav>
  <div>
    <button @click="clickQuery">Query 데이터 프로그래밍 방식</button>
  </div>
  <hr />
  <nav>
    <router-link
      :to="{
        name: 'Params', // 라우터의 name과 같아야함
        params: {
          name: 'Params 선언적 방식',
          data: 'Params 선언적 방식으로 전송된 data',
          num: 3333
        }
      }"
      >Params 선언적 방식 링크</router-link
    >
  </nav>
  <div>
    <button @click="clickParams">Params 데이터 프로그래밍 방식</button>
  </div>

  <div id="show">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'vue',
  data() {
    return {}
  },
  methods: {
    clickQuery() {
      this.$router.push({
        name: 'Query',
        query: {
          name: 'Query 프로그래밍 방식',
          data: 'Query 프로그래밍 방식으로 전송된 data',
          num: 2222
        }
      })
    },
    clickParams() {
      this.$router.push({
        name: 'Params',
        params: {
          name: 'Params 프로그래밍 방식',
          data: 'Params 프로그래밍 방식으로 전송된 data',
          num: 4444
        }
      })
    }
  }
}
</script>
<style>
#show {
  border: 5px dashed black;
  margin: 10px;
  padding: 10px 50px;
  background-color: bisque;
  text-align: left;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
