<template>
  <div>
    <!-- <select v-model="selData">
      <option value="051">부산</option>
      <option value="02">서울</option>
      <option value="064">제주</option>
      <option value="055">창원</option>
      <option value="053">대구</option>
    </select> -->

    <!-- 방식1 -->
    <select v-model="selData">
      <option v-for="city in Object.keys(obj)" :key="city" :value="obj[city]">
        {{ city }}
      </option>
    </select>
    <span>{{ selData }}</span>
  </div>

  <!-- 방식2 -->
  <div>
    <select v-model="selData2">
      <option v-for="city in arr" :key="city" :value="city.code">
        {{ city.name }}
      </option>
    </select>
    <span>{{ selData2 }}</span>
  </div>
</template>
<script>
// Object.keys(obj) => 키만 뽑아낼수잇음
// Object.values(obj) => 값만 뽑아낼수잇음
export default {
  data() {
    return {
      selData: '고르세요',
      selData2: '고르세요',
      obj: {
        부산: '051',
        서울: '02',
        제주: '064',
        창원: '055',
        대구: '053'
      },
      arr: [
        { name: '부산2', code: '051' },
        { name: '서울2', code: '02' },
        { name: '제주2', code: '064' },
        { name: '창원2', code: '055' },
        { name: '대구2', code: '053' }
      ]
    }
  }
}
</script>
<style></style>
