<script setup>
import BreakingBadCards from './components/BreakingBadCardsSuspense.vue';
import RickMortyCards from './components/RickMortyCards.vue';
import Hero from './components/Hero.vue';

import { ref } from 'vue';

const isBreakingBad = ref(true)

</script>

<template>
  <main>
    <Hero :isBreakingBad="isBreakingBad" @selectedShow = "isBreakingBad = !isBreakingBad"/>
    <keep-alive>
      <Component :is="isBreakingBad ? BreakingBadCards : RickMortyCards" />
    </keep-alive>
  </main>
</template>

<style scoped>
.cards{
  height: 700px;
  background-color: rgb(88, 87, 87);
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
