<script setup>
import QuizesView from './views/QuizesView.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container{
  width: 1000px;
  margin: 0 auto;
}
</style>