<template>
  <div id="Homeview">
    <!-- 오늘의 건강뉴스 -->
    <p
      style="
        font-weight: bold;
        color: white;
        letter-spacing: 1px;
        margin: 80px 0 0 80px;
      "
    >
      〈오늘의 건강 뉴스〉
    </p>
    <div id="main_row_02">
      <div class="left" style="margin-top: -30px; margin-right: 43px">
        <div id="row_02_imgs_01" style="margin-right: 20px">
          <img
            src="../../public/health2.jpg"
            alt="#"
            width="400px"
            height="285px"
          />
        </div>
        <div id="row_02_content_01">
          <span style="font-size: 20px; font-weight: 700"
            >프로틴은 사실 여성 다이어트 <br />제품이다?!</span
          ><br />
          <span style="display: inline-block; margin-top: 20px"
            >근육 형성과 유지 등을 위해 운동하는<br />사람이 주로 섭취하는
            단백질 보충제<br />가 다이어트 및 근감소증 예방에도 효<br />과가
            있는 것으로 알려지면서 소비층<br />이 여성과 중장년층으로 확대되고
            있<br />다.</span
          >
        </div>
      </div>
      <div class="right" style="margin-top: -30px">
        <div id="right_row_01" style="display: flex">
          <div id="row_02_imgs_01" style="margin-right: 20px">
            <img
              src="../../public/health3.jpg"
              alt="#"
              width="120px"
              height="90px"
            />
          </div>
          <div id="row_02_content_01">
            <span style="font-size: 18px; font-weight: 700"
              >프로틴은 사실 여성 다이어트 제품이다?!</span
            ><br />
            <span
              style="font-size: 15px; display: inline-block; margin-top: 10px"
              >근육 형성과 유지 등을 위해 운동하는사람이 주로 섭취하는 단백질
              보충제가 다이어트 및<br />근감소증 예방에도 효과가 있는 것으로
              알려지면서 소비층이 여성과 중장년층으로 확대됨</span
            >
          </div>
        </div>
        <div id="right_row_02" style="display: flex">
          <div id="row_02_imgs_02" style="margin-right: 20px">
            <img
              src="../../public/health3.jpg"
              alt="#"
              width="120px"
              height="90px"
            />
          </div>
          <div id="row_02_content_02">
            <span style="font-size: 18px; font-weight: 700"
              >프로틴은 사실 여성 다이어트 제품이다?!</span
            ><br />
            <span
              style="font-size: 15px; display: inline-block; margin-top: 10px"
              >근육 형성과 유지 등을 위해 운동하는사람이 주로 섭취하는 단백질
              보충제가 다이어트 및<br />근감소증 예방에도 효과가 있는 것으로
              알려지면서 소비층이 여성과 중장년층으로 확대됨</span
            >
          </div>
        </div>
        <div id="right_row_03" style="display: flex">
          <div id="row_02_imgs_03" style="margin-right: 20px">
            <img
              src="../../public/health3.jpg"
              alt="#"
              width="120px"
              height="90px"
            />
          </div>
          <div id="row_02_content_03">
            <span style="font-size: 18px; font-weight: 700"
              >프로틴은 사실 여성 다이어트 제품이다?!</span
            ><br />
            <span
              style="font-size: 15px; display: inline-block; margin-top: 10px"
              >근육 형성과 유지 등을 위해 운동하는사람이 주로 섭취하는 단백질
              보충제가 다이어트 및<br />근감소증 예방에도 효과가 있는 것으로
              알려지면서 소비층이 여성과 중장년층으로 확대됨</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- // 오늘의 건강뉴스 -->
  </div>
</template>
<script>
import axios from 'axios'
import productsData from '../../public/products.js'
import maximData from '../../public/maxim.js'
import healthimgs from '../../public/healthimg.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from 'jquery'
import 'slick-carousel'
import { gpt3 } from '../../gpt3.js'

export default {
  data() {
    return {
      products: productsData,
      maxims: maximData,
      healthimgs,
      slickSlider: null,
      slickSliderMaxim: null,
      slickSliderHealth: null,
      showModal: false,
      question: '',
      response: '',
      hotPosts: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initSlickSlider()
    })
    this.fetchHotPosts()
  },
  methods: {
    initSlickSlider() {
      const sliderOptions = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000
      }
      const sliderOptionsMaxim = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      }
      const sliderOptionsHealth = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      }

      const sliderElement = this.$refs.slickSlider
      const sliderElementMaxim = this.$refs.slickSliderMaxim
      const sliderElementHealth = this.$refs.slickSliderHealth
      this.slickSlider = $(sliderElement).slick(sliderOptions)
      this.slickSliderMaxim = $(sliderElementMaxim).slick(sliderOptionsMaxim)
      this.slickSliderHealth = $(sliderElementHealth).slick(sliderOptionsHealth)
    },
    gpt3: async function () {
      this.response = '타이핑중'
      const start = this.question
      const answer = await gpt3(start)
      this.response = answer
      // this.init + this.history +  // 현재 입력 + 기본 정보 + 이전 대화 기록
      // this.history += `인간: ${this.inData}\nAI: ${answer}\n` // 이전 대화 기록에 새로운 대화를 추가합니다.
      // if (this.history.length > 4000) {
      //   this.history = ''
      // }
    },
    fetchHotPosts() {
      axios
        .get('/get-hot-posts')
        .then((response) => {
          this.hotPosts = response.data
        })
        .catch((error) => {
          console.error('실시간 핫한 글 가져오기 오류:', error)
        })
    }
  },
  beforeUnmount() {
    if (this.slickSlider) {
      this.slickSlider.slick('unslick')
    }
    if (this.slickSliderMaxim) {
      this.slickSliderMaxim.slick('unslick')
    }
    if (this.slickSliderHealth) {
      this.slickSliderHealth.slick('unslick')
    }
  }
}
</script>
<style scoped>
#Homeview {
  height: 100%;
  background-color: black;
}

/* chat_bot */
#chat_bot:hover {
  cursor: pointer;
}

/* main_row_01 */
#main_row_01 {
  display: flex;
  margin-top: 60px;
}
#main_row_01 .left {
  margin-left: 60px;
  margin-right: 50px;
}
#main_row_01 div img {
  width: 680px;
  height: 350px;
  margin-left: -20px;
}

/* main_row_02 */
#main_row_02 {
  display: flex;
  margin-top: 50px;
  margin-left: 80px;
}
#main_row_02 .left {
  display: flex;
  color: white;
}
#main_row_02 .right span {
  color: white;
}
:is(#right_row_01, #right_row_02) {
  margin-bottom: 5px;
}

/* main_row_03 */
#contents {
  margin: 0 0 0 80px;
  padding: 5px;
  width: 90%;
}
#contents #slick-slide {
  display: flex;
  margin-right: 30px;
}

#contents #slick-slide:hover {
  cursor: pointer;
}

#contents img {
  width: 210px;
}
#contents div {
  color: white;
  font-weight: bold;
}
#modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
#modal_content {
  border: 3px solid #ffe600;
  width: 500px;
  height: 500px;
  background-color: black;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  color: #ffe600;
}
#modal_click {
  position: absolute;
  bottom: 2%;
  left: 12.5%;
  background-color: #ffe600;
  font-weight: bold;
}
#modal_end {
  position: absolute;
  bottom: 2%;
  left: 25%;
  background-color: #ffe600;
  font-weight: bold;
}
#question {
  width: 50%;
  height: 5%;
  margin: 10px;
  background-color: #ffe600;
}
#response {
  width: 80%;
  height: 60%;
  margin: -35px 0 0 47px;
  background-color: #ffe600;
}
</style>
