<template>
  <h1>EX3. 데이터 가져오기</h1>
  <h3>가져온 데이터</h3>
  <p>{{ dataArr }}</p>
  <hr />
  <h4>
    얼마이상의 물품을 출력할까요? : <input type="text" v-model="inUser" />
  </h4>
  <table>
    <tr>
      <td>카테고리</td>
      <td>품명</td>
      <td>가격</td>
      <td>배송비</td>
    </tr>
    <template v-for="item in dataArr" :key="item">
      <tr v-if="item.price > inUser">
        <td>
          <select>
            <option value="axe">악세서리</option>
            <option value="elec">전자기기</option>
          </select>
        </td>
        <td>{{ item.product_name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.delivery_price }}</td>
      </tr>
    </template>
  </table>
</template>
<script>
import data from '../assets/productData.js'
export default {
  name: 'app',
  data() {
    return {
      dataArr: data,
      inUser: 0
    }
  }
}
</script>
<style>
table {
  text-align: center;
  margin: auto;
  border-collapse: collapse;
  width: 400px;
}

tr:first-child {
  background-color: beige;
}

tr,
td {
  border: 2px solid blue;
  padding: 5px;
}
</style>
