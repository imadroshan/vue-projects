<script setup>
import BreakingBadCards from './BreakingBadCards.vue';
</script>
<template>
    <Suspense>
        <template #default>
          <BreakingBadCards />
        </template>
        <template #fallback>
          <div class="card spinner">
            <NSpin size="large"/>
          </div>
        </template>
      </Suspense>
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