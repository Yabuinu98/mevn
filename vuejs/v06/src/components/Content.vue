<template>
  <section>
    <article>
      주 내용들이 들어감
      <button @click="cm = cm === 'Nav' ? 'Adv' : 'Nav'">Change</button>
    </article>
    <component :is="cm"></component>
    <!-- <Nav />
  <Adv /> -->
  </section>
</template>
<script>
import Nav from './Nav.vue'
import Adv from './Adv.vue'
export default {
  data() {
    return {
      cm: 'Nav'
    }
  },
  components: {
    Nav,
    Adv
  }
}
</script>
<style scoped>
article {
  background-color: antiquewhite;
  padding: 25px;
  border: 3px solid green;
}
section {
  text-align: center;
  padding: 25px;
  border: 5px solid red;
  height: 500px;
  display: grid;
  grid-template-columns: 5fr 1fr;
}
</style>
