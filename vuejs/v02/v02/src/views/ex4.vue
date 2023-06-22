<template>
  <div>
    <button v-for="p in pages" :key="p" :class="p" @click="page = p">
      {{ p }}
    </button>
    <div v-for="(g, i) in pages" :key="i">
      <!-- 이미지들을 pubilc폴더에 려야 링크를 걸기가 편하다(로컬호스트에 바로 붙는다) -->
      <img v-if="g === page" :src="'./샘플' + (i + 1) + '.jpg'" alt="사진" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  }
}
</script>
<style>
button {
  scale: 200%;
  background-color: white;
  border: 1px solid gray;
  margin: 30px;
  cursor: pointer;
  box-shadow: 2px 2px black;
}
button:hover {
  background-color: yellow;
  box-shadow: inset 2px 2px black;
}
img {
  width: 60%;
  height: 50%;
}
</style>
