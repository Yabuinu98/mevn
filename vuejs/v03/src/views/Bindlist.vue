<template>
  <div>
    <h1>6. 리스트화 예제(v02의 ex3.vue참고)</h1>
    <p>
      과제내용: 상단에 배송지역을 넣을 수 있게 만들고 지역에따른
      금액부과(제주만+5000) => 구현 완료!!!
    </p>
    <p>
      표에는 물품들 추가되고 수량의 갯수를 만지면 금액 변경, 수량0일땐 0원,
      총합에는 합계들의 총합 => 구현 완료!!!
    </p>
    <!-- 지역선택 파트 -->
    <select v-model="selData">
      <option v-for="city in Object.keys(obj)" :key="city" :value="obj[city]">
        {{ city }}
      </option>
    </select>
    <p>당신의 지역은 {{ selData }}입니다.</p>
    <p>🌜 주의: 제주산간지방은 5,000원 배송료가 추가됩니다 🌜</p>
    <!-- // 지역선택 파트 -->

    <!-- 표 구현 파트 -->
    <table>
      <tr>
        <td>No.</td>
        <td>카테고리</td>
        <td>제품명</td>
        <td>가격</td>
        <td>배송료</td>
        <td>수량</td>
        <td>합계</td>
      </tr>
      <tr v-for="(item, i) in dataArr" :key="item">
        <td>{{ i + 1 }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.product_name }}</td>
        <td>{{ item.price }}</td>
        <!-- 배송료파트 - 삼항연산자 -->
        <td>
          {{
            selData === '제주'
              ? item.delivery_price + 5000
              : item.delivery_price
          }}
        </td>
        <!-- 수량파트 - 최솟값지정 -->
        <td>
          <input
            style="width: 50px; text-align: center"
            type="number"
            min="0"
            v-model.number="num[i]"
          />
        </td>
        <!-- 합계파트 - 이중삼항연산자 -->
        <td>
          {{
            (total[i] =
              item.price * num[i] +
              (num[i] > 0
                ? selData === '제주'
                  ? item.delivery_price + 5000
                  : item.delivery_price
                : 0))
          }}
        </td>
      </tr>
      <tr>
        <td colspan="6" id="all_sum">총합</td>
        <td>{{ total.reduce((v, i) => v + i) }}</td>
      </tr>
    </table>
    <!-- // 표 구현 파트 -->
  </div>
</template>
<script>
import data from '../assets/Product.js'
export default {
  data() {
    return {
      selData: '본인의 지역을 고르세요',
      obj: {
        서울: '서울',
        대전: '대전',
        대구: '대구',
        부산: '부산',
        제주: '제주'
      },
      dataArr: data,
      num: [0, 0, 0, 0, 0, 0],
      total: []
    }
  }
}
</script>
<style scoped>
table {
  position: absolute;
  left: 25%;
  top: 40%;
  width: 800px;
  text-align: center;
  border-collapse: collapse;
}
tr,
td {
  border: 1px solid black;
  padding: 10px;
}
tr:first-child {
  color: white;
  background-color: rgb(112, 112, 255);
}
#all_sum {
  background-color: yellow;
}
</style>
