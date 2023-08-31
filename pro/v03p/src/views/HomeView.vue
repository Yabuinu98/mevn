<template>
  <div class="body">
    <div class="container" @drop.prevent="drop">
      <button id="pbox" draggable="true" @dradstart="drag($event)">🎮</button>
    </div>
    <div class="container2" @drop.prevent="drop"></div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
function showEvent(ev) {
  if (document.querySelectorAll('p').length === 10) {
    document.querySelectorAll('p').forEach((e) => e.remove())
  }
  const p = document.createElement('p')
  p.textContent = ev
  document.body.appendChild(p)
}
// ====================================================================
function drag(ev) {
  ev.dataTransfer.setData('some', ev.target.id)
}
function drop(ev) {
  const data = ev.dataTransfer.getData('some')
  // console.log(data)
  ev.target.appendChild(document.getElementById(data))
}

// ====================================================================
onMounted(() => {
  const pbox = document.querySelector('#pbox')
  const container2 = document.querySelector('.container2')

  // 드래그 이벤트 발생시
  pbox.addEventListener('dragstart', () => {
    showEvent('드래그를 시작하면 발생하는 이벤트')
  })
  // pbox.addEventListener('drag', () => {
  //   showEvent('드래그하는 동안 발생하는 이벤트')
  // })
  container2.addEventListener('dragenter', () => {
    showEvent('드래그요소가 이 영역에 닿으면 발생하는 이벤트')
  })
  // container2.addEventListener('dragover', () => {
  //   showEvent('드래그요소가 이 영역위에 계속 있으면 발생하는 이벤트')
  // })
  container2.addEventListener('dragleave', () => {
    showEvent('드래그요소가 이 영역에서 떨어지면 발생하는 이벤트')
  })
  container2.addEventListener('dragover', (event) => {
    event.preventDefault()
    showEvent('드래그요소가 이 영역위에 계속 있으면 발생하는 이벤트')
  })
  container2.addEventListener('drop', (event) => {
    // event.preventDefault()
    showEvent('드래그요소가 컨테이너2 영역에 드롭')
  })
  pbox.addEventListener('dragend', () => {
    showEvent('드래그를 끝나면 발생하는 이벤트')
  })
})
</script>
<style scoped>
.body {
  display: flex;
  justify-content: center;
}
button {
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 20px;
  margin: 12px;
  cursor: move;
  font-size: 2em;
  background-color: skyblue;
}
.container,
.container2 {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  background-color: cornflowerblue;
  border-radius: 20px;
}
</style>
