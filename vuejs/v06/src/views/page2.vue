<template>
  <div>MobileNet을 이용한 이미지 분석</div>
  <hr />
  <div id="display">
    <!-- accept : 파일 형식 제한
    multiple : 복수의 파일 선택 가능 -->
    <input
      ref="image"
      type="file"
      name="img"
      id="input"
      accept="image/*"
      multiple="multiple"
      style="display: none"
      @change="upIMG"
    />
    <label for="input" id="img-box">+</label>
    <div>
      <img ref="img" :src="imgBase64" alt="이미지 준비중.." v-if="imgBase64" />
    </div>
    <hr />
    <div id="text">{{ text }}</div>
    <button v-if="imgBase64" @click="predict">분석</button>
    <div id="result">{{ result }}</div>
  </div>
</template>
<script>
import * as mobilenet from '@tensorflow-models/mobilenet'
export default {
  name: 'APP',
  data() {
    return {
      imgBase64: '',
      result: '',
      text: '파일을 업로드하여 이미지 분석을 시작하시오'
    }
  },
  methods: {
    upIMG: function () {
      const image = this.$refs.image.files[0]
      // console.log(image)
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.text = e.target.result
        this.imgBase64 = e.target.result
      }
    },
    predict: function () {
      const img = this.$refs.img
      mobilenet.load().then((model) => {
        model.classify(img).then((rst) => {
          console.log(rst)
          this.result = `분석결과 : ${rst[0].className}(${(
            rst[0].probability * 100
          ).toFixed(2)}%)`
        })
      })
    }
  }
}
</script>
<style scoped>
#img-box {
  display: inline-block;
  width: 100px;
  height: 100%;
  border: 1px solid violet;
  border-radius: 5px;
  color: white;
  background-color: lightblue;
  font-size: 2em;
  line-height: 100px;
}
#img-box:hover {
  cursor: pointer;
}
img {
  margin: 10px;
  width: 200px;
  height: 100%;
  border-radius: 10px;
}
</style>
