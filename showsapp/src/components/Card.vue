<script setup>
import { defineProps } from 'vue';

const {image, name} = defineProps(['image', 'name'])
</script>

<template>
    <NCard :title="name">
        <template #cover>
          <img :src="image">
        </template>
        <slot>

        </slot>
      </NCard>
</template>


<style scoped>
/* Card Styles */

.n-card {
    max-width: 200px;
    max-height: 300px;
    margin: 10px 20px;

}

.n-card img {
    height: 250px
}

p {
    font-size: 10px;
}

.jobs {
    display: flex;
    flex-wrap: wrap;
}
</style>