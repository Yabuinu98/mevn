<template>
  <div>
    <h1>1. String과 Html 준비</h1>
    <h3>String: {{ str }}</h3>
    <hr />
    <h3 v-html="'Html: ' + str"></h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str: '<span style="color: red;">안녕 난 String 형식이야</span>'
    }
  }
}
</script>
<style></style>
