<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const showText = ref(true)
</script>

<template>
  <main>
    <div class="container">
      <Transition name="fade">
        <h1 v-if="showText">Hello World</h1>
        <h1 v-else>Goodbye world</h1>
      </Transition>
    </div>
    <button @click="showText=!showText">Toggle</button>
  </main>
  <RouterView />
</template>

<style scoped>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
opacity: 1;
}
.fade-enter-active{
  transition: all 3s ease;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: all 3s ease;
}
.container{
  position: relative;
}
h1{
  position: absolute;
}
button{
  position: absolute;
  margin-top: 60px;
}
</style>
