<template>
  <h1>실시간 <mark>미세먼지</mark> 정보(공공API 이용)</h1>
  <div class="weather-container">
    <div v-for="item in junpo" :key="item.stationName" class="weather-item">
      <h3>{{ item.stationName }}의 날씨</h3>
      <div class="weather-details">
        <p>
          미세먼지농도단계(PM10):
          <span class="grade">{{ item.pm10Grade }}</span>
        </p>
        <p>
          미세먼지농도(PM10): <span class="value">{{ item.pm10Value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      junpo: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const url =
        'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey='
      const key = process.env.VUE_APP_pkey
      const opt = '&sidoName=%EB%B6%80%EC%82%B0&returnType=JSON'
      const total = url + key + opt
      axios
        .get(total)
        .then((response) => {
          const rst = response.data.response.body.items
          this.junpo = rst
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.weather-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.weather-item {
  width: 250px;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  background-color: bisque;
  box-shadow: 2px 2px 8px darkgray;
  text-align: center;
}

h3 {
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.weather-details {
  margin-top: 15px;
}

p {
  color: black;
  font-size: 15px;
  margin-bottom: 5px;
}

.grade {
  color: red;
  font-weight: bold;
}

.value {
  color: aqua;
  font-weight: bold;
}

.weather-item:nth-child(2n) {
  background-color: beige;
}

.weather-item:nth-child(2n) .grade {
  color: red;
}

.weather-item:nth-child(2n) .value {
  color: aqua;
}
h1 {
  text-align: center;
}
</style>
