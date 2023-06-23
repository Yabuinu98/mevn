<template>
  <div>
    <h1>6. 리스트화 예제(v02의 ex3.vue참고)</h1>
    <p>
      과제내용: 상단에 배송지역을 넣을 수 있게 만들고 지역에따른
      금액부과(제주만+5000)
    </p>
    <p>
      표에는 물품들 추가되고 수량의 갯수를 만지면 금액 변경, 수량0일땐 0원,
      총합에는 합계들의 총합
    </p>
    <select name="" id="">
      <option value="서울">서울</option>
      <option value="경기">경기</option>
      <option value="대전">대전</option>
      <option value="대구">대구</option>
      <option value="부산">부산</option>
      <option value="제주도">제주도</option>
    </select>
    <p>당신의 지역은 {{ city }}입니다.</p>
    <p>제주산간지방은 5,000원 배송료가 추가됩니다.</p>
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
      <template v-for="item in dataArr" :key="item">
        <tr>
          <td>i+1</td>
          <td>{{ item.category }}</td>
          <td>{{ item.product_name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.delivery_price }}</td>
          <td><input type="text" /></td>
          <td>{{ item.price }}</td>
        </tr>
      </template>
      <tr>
        <td colspan="6" id="all_sum">총합</td>
        <td>{{ num }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import data from '../assets/Product.js'
export default {
  data() {
    return {
      dataArr: data,
      num: '???'
    }
  }
}
</script>
<style>
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
